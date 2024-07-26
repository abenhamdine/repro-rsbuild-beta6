import type { Preview } from "@storybook/react"
import { ConfigProvider } from 'antd'
import * as React from 'react'
import fr_FR from 'antd/lib/locale/fr_FR'
import 'moment/dist/locale/fr'
import moment from 'moment'
import { getThemeConfigByName } from "../src/utilities/theming/getThemeConfigByName"
import { getTheme } from "../src/utilities/theming/getTheme"
import { ThemeContextProvider } from "../src/state/contexts/ThemeContext"
// styles globaux
import '../src/css/styles.css'
import '../src/css/arh-alert.css'
import '../src/css/arh-svg-icone.css'
import 'antd/dist/reset.css'
import { withRouter } from "storybook-addon-remix-react-router"
import { ThemeConfig, getThemeConfigs } from "../src/utilities/theming/getThemeConfigs"

moment.locale('fr')

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'arhia',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Thème',
        // https://storybook.js.org/docs/faq#what-icons-are-available-for-my-toolbar-or-my-addon
        icon: 'paintbrush',
        items: [
          { value: 'arhia', title: "Thème Arhia" },
          { value: 'automobile', title: "Thème Services automobiles" },
          { value: 'combo', title: "Thème Combo" },
          { value: 'comboExperimental', title: "Thème Combo (expérimental)" },
        ],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {

      let themeConfig: ThemeConfig | null = null
      /*
      contournement pour pouvoir sélectionner dans Storybool le "vrai" theme Combo
      car sinon il est uniquement activé si le hostname correspond au paramétrage
      */
      if (context.globals.theme === 'comboExperimental') {
        const themesConfigs = getThemeConfigs(false)
        themeConfig = themesConfigs.find(item => {
          return item.name === 'combo' && item.enableOnlyForHostnames === true
        })!
      } else {
        themeConfig = getThemeConfigByName(context.globals.theme)
      }
      return (
        <ThemeContextProvider
          initialThemeConfig={themeConfig}
        >
          <ConfigProvider locale={fr_FR}
            theme={getTheme(themeConfig)}
            wave={{ disabled: !!themeConfig.button.disableWaveEffect }}
          >
            <div className="arh-app" style={{ height: 'auto' }}>
              <Story />
            </div>
          </ConfigProvider>
        </ThemeContextProvider>
      )
    },
    withRouter
  ],
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  }
}

export default preview
