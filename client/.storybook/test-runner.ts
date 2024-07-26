import { TestRunnerConfig, getStoryContext, waitForPageReady } from '@storybook/test-runner'
import { toMatchImageSnapshot } from 'jest-image-snapshot'
import path from 'path'

const getCustomDir = (componentStoryPath: string) => {
  const normalizedPath = componentStoryPath.toLocaleLowerCase().replace(/ /g, "-")
  return path.join( "snapshots", normalizedPath )
}

const getCustomId = (contextName:string, contextTitle:string) => {
  const normalizedStoryName = contextName.toLowerCase().replace(/ /g, "-")
  // Next line turns "Design System/Category/Example Component" into "example-component"
  const normalizedComponent = contextTitle.toLowerCase().replace(/^.*(\/)/, "").replace(/ /g, "-")
  return normalizedComponent+"--"+normalizedStoryName 
}

async function wait(ms: number): Promise<void> {
  return new Promise<void>((res) => {
    setTimeout(() => res(), ms)
  })
}

const config: TestRunnerConfig = {
  async prepare({ page, browserContext, testRunnerConfig }) {
    const targetURL = process.env.TARGET_URL
    const iframeURL = new URL('iframe.html', targetURL).toString()

    if (testRunnerConfig?.getHttpHeaders) {
      const headers = await testRunnerConfig.getHttpHeaders(iframeURL)
      await browserContext.setExtraHTTPHeaders(headers)
    }

    await page.goto(iframeURL, { waitUntil: 'load' }).catch((err) => {
      if (err.message?.includes('ERR_CONNECTION_REFUSED')) {
        const errorMessage = `Could not access the Storybook instance at ${targetURL}. Are you sure it's running?\n\n${err.message}`
        throw new Error(errorMessage)
      }

      throw err
    })
  },
  async preVisit() {
    global.expect.extend({ toMatchImageSnapshot })
  },
  async postVisit(page, context) {
    await waitForPageReady(page)
    const storyContext = await getStoryContext(page, context)
    // On saute le snapshot s'il y a le tag "no-snapshot"
    if (storyContext.tags.find((str) => str.match(/^no-snapshot$/))) return
    
    // Si le tag snapshot-delay existe, on attend x ms avant de prendre le snapshot. Utile pour les stories qui ont du play.
    // Note : le snapshot se prend à la fin du play. Inutile de demander un delay de 3000ms. Ce sont les animations css qui interfèrent avec le snapshot.
    const delayTag = storyContext.tags.find((str) => str.match(/snapshot-delay/))
    if (delayTag) {
      const hyphenlessDelayTag = delayTag.split("-").join()
      const delayTime = hyphenlessDelayTag.match(/(\d+)$/g) ? Number(hyphenlessDelayTag.match(/(\d+)$/g)![0]) : 100
      await wait(delayTime)
    }
    const image = await page.screenshot()
    global.expect(image).toMatchImageSnapshot({
      customSnapshotsDir: getCustomDir(context.title),
      customSnapshotIdentifier: getCustomId(context.name, context.title),
      diffDirection: "vertical"
      //dumpDiffToConsole: true, //Will output base64 string of a diff image to console in case of failed tests (in addition to creating a diff image). This string can be copy-pasted to a browser address string to preview the diff for a failed test.
    })
  },
}

export default config