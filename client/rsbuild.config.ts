import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin'
import { pluginTypeCheck } from '@rsbuild/plugin-type-check'
import { pluginEslint } from '@rsbuild/plugin-eslint'

const shouldUseRsdoctor = process.env.RSDOCTOR === 'true'

export default defineConfig({
  server: {
    port: 3001,
  },
  html: {
    title: "Application paie",
  },
  output: {
    /* 'off', 'usage' or 'entry' https://www.rspack.dev/config/output#outputpolyfill
    default value is 'off' starting with rsbuild v1 (no polyfill is included any more) but was 'usage' before that 
    (core-js polyfills were included based on code source analysis)
    We set the value on 'usage' to be sure to not break users that were using the polyfills before.
    */
    polyfill: 'usage',
  },
  environments: {
    web: {
      source: {
        entry: {
          index: './src/index.tsx',
        },
      },
      output: {
        distPath: {
          root: 'build'
        },
        cleanDistPath: true,
        target: 'web',
      },
    },
  },
  plugins: [
    /** désactivé car prend trop de mémoire, souvent OOM */
    pluginTypeCheck({ enable: false }),
    /** désactivé car prend presque 30s lors du build */
    pluginEslint({ enable: false }),
    pluginReact()
  ],
  tools: {
    rspack(config, { appendPlugins }) {
      // Only register the plugin when RSDOCTOR is true, as the plugin will increase the build time.
      if (shouldUseRsdoctor) {
        appendPlugins(
          new RsdoctorRspackPlugin({
            // voir https://rsdoctor.dev/guide/usage/rule-config pour la configuration des règles
            linter: {
              //  When set to `'Error'`, all rules will be executed
              level: 'Error',
              extends: [],
              rules: {
                'default-import-check': 'on',
                'duplicate-package': 'on',
                'loader-performance-optimization': 'on',
                // par défaut, c'est ES5, ce qui est trop bas pour notre app
                // et on ne peut changer que pour ES6 (trop bas aussi) ou ES7+ (tout ce qui ES7 ou plus) donc aucun intéret à garder la règle
                'ecma-version-check': "off",
              },
            },
          })
        )
      }
      config.experiments = {
        ...(config.experiments ?? {}),
        // https://www.rspack.dev/config/experiments#experimentslazycompilation
        // désactivé car ne semble pas fonctionner correctement
        lazyCompilation: false
      }
      return config
    }
  }
})

