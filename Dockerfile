FROM node:14.15.3-alpine3.11
ENV NODE_ENV production
ENV PORT 80
RUN apk add --no-cache udev ttf-freefont chromium git g++ gcc libgcc libstdc++ linux-headers make python build-base cairo-dev jpeg-dev pango-dev musl-dev giflib-dev pixman-dev pangomm-dev libjpeg-turbo-dev freetype-dev
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
COPY . .
RUN ["npm", "run", "build"]
EXPOSE 80
WORKDIR /usr/src/app
CMD node -r ./dist/main.js
