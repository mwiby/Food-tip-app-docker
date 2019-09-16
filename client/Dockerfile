FROM node:8.7.0-alpine

# Create app dir and use it as work dir #
RUN mkdir -p /srv/app/fr-shohin-admin-client
WORKDIR /srv/app/fr-shohin-admin-client

COPY package.json /srv/app/fr-shohin-admin-client
COPY package-lock.json /srv/app/fr-shohin-admin-client

RUN npm install
COPY . /srv/app/fr-shohin-admin-client

CMD [ "npm","start" ]
