import { defineConfig, devices } from '@playwright/test'
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.test' })

console.log(`
============== LANCEMENT DES TESTS DE NON REGRESSION E2E ======================
Config playwright trouvée.
Variables d'environnement définies pour les tests :
TNR_USERNAME="${process.env.TNR_USERNAME}"
TNR_USER_PWD="${process.env.TNR_PWD}"
TNR_NOM_DOSSIER="${process.env.TNR_NOM_DOSSIER}"
`)

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: 'tests-e2e/',
  testMatch: ["*.spec.ts"],

  // Run all tests in parallel.
  fullyParallel: false,

  // timeout en ms pour chaque test
  timeout: 5 * 60 * 1000,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,

  // Retry on CI only.
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,

  // Reporter to use
  reporter: [['html', { open: 'always' }]],

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: 'http://localhost:3001',

    // Collect trace when retrying the failed test.
    trace: 'on-first-retry',
    launchOptions: {
      slowMo: 400
    }
  },
  // Configure projects for major browsers.
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1440, height: 764 }
      },
    },
  ],
  // Run your local dev server before starting the tests.
  webServer: {
    command: 'npm run start',
    // ne fonctionne pas avec 127.0.0.1, bien mettre localhost
    url: 'http://localhost:3001',
    reuseExistingServer: !process.env.CI,
  },
})