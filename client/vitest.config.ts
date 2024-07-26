import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig({ mode: 'test', command: 'build' }), defineConfig({
    test: {
        globals: true,
        environment: 'happy-dom',
        include: ['src/**/*.spec.ts', 'src/**/*.spec.tsx'],
        exclude: ['src/test/end2end/**/*.*'],
        setupFiles: ['./vitest-setup.ts'],
        reporters: [
            'junit',
            'html'
        ],
        outputFile: {
            junit: './tests-results/junit-report.xml',
            html: './tests-results/report.html',
        },
        coverage: {
            provider: 'v8',
            reporter: ['html'],
            include: ['src'],
            extension: '.ts',
            exclude: [
                '**/types',
                'src/graphql/queries',
                'src/graphql/mutations',
                'src/graphql/fragments',
                '**/*.stories.ts',
                '**/*.stories.tsx',
                '**/*.spec.ts',
            ]
        }
    }
}))
