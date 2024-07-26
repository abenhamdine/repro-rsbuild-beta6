import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    {
      name: "storybook-addon-manual-mocks/vite",
      options: {
        mocksFolder: "mocks",
      }
    },
    'storybook-addon-remix-react-router',
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: ['../public'],
  docs: {
    defaultName: "Docs",
    docsMode: false,
    autodocs: false,
  },
}

export default config
