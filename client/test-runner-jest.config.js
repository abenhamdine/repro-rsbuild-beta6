/**
 * ce fichier de config est utilisé par storybook/test-runner
 * voir https://github.com/storybookjs/test-runner#ejecting-configuration
 * lancé par le script npm run test-storybook
 */
const { getJestConfig } = require('@storybook/test-runner')

const testRunnerConfig = getJestConfig()

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
    // The default Jest configuration comes from @storybook/test-runner
    ...testRunnerConfig,
    /** Add your own overrides below
     * @see https://jestjs.io/docs/configuration
     */
    // default timeout is 15s
    // on est obligé de mettre un timeout élevé, car les tests de certaines stories dépassent parfois 10s
    // notamment celles qui utilisent un Form d'antd
    testTimeout: 30000
}