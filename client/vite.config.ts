import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from "vite-plugin-imp"
import { ValidateEnv, Schema } from "@julr/vite-plugin-validate-env"
import browserslistToEsbuild from 'browserslist-to-esbuild'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {

    console.log("on est dans vite.config")
    console.log("mode :", mode)
    console.log("command :", command)

    const isProd = mode === 'production'
    const isDev = mode === 'development'

    return {
        build: {
            outDir: 'build',
            /*
            pour utiliser la propriété browserlist dans package.json
            voir https://dev.to/meduzen/when-vite-ignores-your-browserslist-configuration-3hoe
            */
            target: browserslistToEsbuild(),
        },
        server: {
            open: true,
            port: 3001
        },
        plugins: [
            ValidateEnv({
                VITE_GRAPHQL_SERVER_URL: Schema.string(),
                VITE_SENTRY_DSN: isProd ? Schema.string() : Schema.string.optional(),
                VITE_GLEAP_API_KEY: isProd ? Schema.string() : Schema.string.optional(),
                VITE_DEBUG: Schema.string.optional(),
                VITE_CLARITY_PROJECT_ID: Schema.string.optional(),
            }),
            react(),
            vitePluginImp({
                libList: [
                    {
                        libName: 'antd',
                        style: (name) => {
                            if (name === "auto-complete" || name === "time-picker") {
                                return `antd/es/${name}/index.js`
                            }
                            return `antd/es/${name}/style/index.js`
                        },
                    },
                ],
            }),
        ],
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                },
            },
        },
        resolve: {
            alias: [
                { find: /^~/, replacement: "" },
            ]
        },
    }
})
