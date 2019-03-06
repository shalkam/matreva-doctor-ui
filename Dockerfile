FROM node:10.11.0-alpine
RUN yarn global add lerna
RUN mkdir /app
WORKDIR /app
COPY packages/main ./packages/main
COPY packages/tools ./packages/tools
COPY lerna.json .
COPY package.json .
COPY yarn.lock .
RUN apk add --no-cache --virtual .git \
    git \
    && lerna bootstrap -- --frozen-lockfile --no-cache \
    && apk del .git
RUN yarn build

FROM node:10.11.0-alpine
RUN mkdir /app
WORKDIR /app
COPY --from=0 /app/packages/main/build ./packages/main/build
COPY packages/server ./packages/server
WORKDIR /app/packages/server
RUN yarn
EXPOSE 4000
ENV PORT=4000
CMD ["node", "."]