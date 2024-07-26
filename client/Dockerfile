# syntax=docker/dockerfile:1
# https://askubuntu.com/questions/720784/how-to-install-latest-node-inside-a-docker-container

# On n'utilise pas "ubuntu:latest" car depuis la version 24 d'unbuntu
# on a l'erreur "libasound2 has no installation candidate" lors de l'installation de Chromium par playwright
FROM ubuntu:22.04 AS base
ENV TERM=xterm-256color
USER root
WORKDIR /home/app

# On commence par set up node en suivant les étapes suivantes :
# 1- on installe curl avec le manager de packets apt
# 2- on fetche node 18.x avec curl
# 3- on installe nodejs
# 4- on active corepack pour utiliser yarn
FROM base AS setup-node
RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_18.x  | bash -
RUN apt-get -y install nodejs
RUN corepack enable

# Dans un deuxième temps, on copie les fichiers nécessaires au yarn install depuis l'hôte (la branche sur laquelle on travaille)
FROM base AS copy-package-json
COPY ./package.json /home/app/package.json
COPY ./yarn.lock /home/app/yarn.lock
ADD libs/ /home/app/libs/

# Dans un troisème temps, on lance un yarn install puis on installe playwright, le framework qui nous permet de faire du web testing
# Note : cette étape prend du temps, c'est elle qui est responsable de l'immense majorité du temps de build.
# Après un premier build, elle sera mise en cache. Toutefois, modifier package.json invalide le cache pour cette étape.
FROM setup-node AS yarn-install
COPY --from=copy-package-json /home/app /home/app/
RUN --mount=type=cache,target=/node_modules/ \
    yarn install -x
RUN yarn playwright install chromium --with-deps 

# Parallèlement à copy-package-json, on copie tous les dossiers nécessaires à storybook et aux tests visuels depuis l'hôte
FROM base AS copy-storybook-and-components
ADD ./.storybook /home/app/.storybook
COPY ./src/constants.tsx /home/app/src/
ADD ./src/state /home/app/src/state
ADD ./src/components /home/app/src/components
ADD ./src/utilities /home/app/src/utilities
ADD ./src/graphql /home/app/src/graphql
ADD ./src/test /home/app/src/test
COPY vite.config.ts .env.production /home/app/
ADD ./src/router /home/app/src/router
COPY ./src/utilities/theming/getTheme.ts /home/app/src/utilities/theming/
ADD ./src/css /home/app/src/css

# Après le yarn install, on récupère les fichiers copiés par l'étape précédente pour compléter le tout.
# Enfin, on copie le dossier snapshots de l'hôte. L'image est prête pour faire tourner les tests.
FROM yarn-install AS entrypoint
COPY --from=copy-storybook-and-components /home/app /home/app/
ADD ./snapshots /home/app/snapshots