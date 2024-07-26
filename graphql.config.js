/**
 * ce fichier sert à condfigure l'extension VSCode "GraphQL: Language Feature Support"
 * https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql
 * Sans ce fichier, l'extension n'a aucun effet (seul le highlighting fonctionne)
 * Ce fichier doit a minima indiquer l'emplacement du fichier du schema graphql
 * ce dernier étant généré par la commande `npm run codegen`
 * 
 * Si on a des doutes sur la validité de ce fichier le mieux est d'afficher le mode debug de l'extension
 * avec CTRL+SHIFT P, puis "VSCode GraphQL: Show output channel"
 * cela indiquera si ce fichier est trouvé et s'il est valide.
 */
module.exports = {
    projects: {
        app: {
            schema: ['./client/src/graphql/schema.graphql'],
            documents: './client/src/graphql/fragments/**/*.{graphql,ts}'
        }
    }
}