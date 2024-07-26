import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    /*
    obligé de mettre 0.0.0.0 sinon parfois provoque erreur ECONNREFUSED
    voir https://github.com/dotansimha/graphql-code-generator/issues/7479
    */
    schema: 'http://0.0.0.0:8889/graphql',
    documents: ['src/**/*.tsx', 'src/**/*.ts'],
    // # The following configuration will adjust output to the defaults of Apollo-Codegen, and should be compatible with most use-cases.
    config: {
        // utilisatio de la config scalars pour typer des custom scalar en autre chose que any
        // ici on type en string car les Date sont recupérée en string YYYY-MM-DD coté client
        scalars: {
            Date: 'string'
        },
        // # Simplifies the generated types
        preResolveTypes: true,
        // # Keeps naming as-is
        namingConvention: 'keep',
        avoidOptionals: {
            // # Avoids optionals on the level of the field
            field: true
        },
        // # Forces `__typename` on all selection sets
        nonOptionalTypename: true,
        // # Don't generate __typename for root types
        skipTypeNameForRoot: true
    },
    generates: {
        './types/globalTypes.ts': {
            plugins: ['typescript'],
            presetConfig: {
                gqlTagName: 'gql',
            }
        },
        './src/': {
            preset: 'near-operation-file',
            plugins: ['typescript-operations'],
            presetConfig: {
                extension: '.ts',
                baseTypesPath: '../types/globalTypes.ts',
                // * Nom du dossier créé relativement au fichier contenant du gql à typer
                folder: 'types',
                /**
                 * Cette config permet de nommer le module d'import (import * as _Types from '...') dans les fichiers générés
                 * Il est important de garder un '_' en premier caractère car il peut arriver que l'import soit unused et doit donc être ignoré par typescript
                 */
                importTypesNamespace: '_Types'
            }
        },
        // génère le schema dans un fichier unique, nécessaire pour l'extension VSCode GraphQL Langage Feature notamment
        './src/graphql/schema.graphql': {
            plugins: ['schema-ast']
        }
    },
    ignoreNoDocuments: true
}

export default config