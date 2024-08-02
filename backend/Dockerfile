FROM node:lts-buster-slim AS development

# Create app directory
WORKDIR /usr/src/app/

COPY package*.json /usr/src/app/

RUN npm install

# Copy the code and stuff into container 
COPY ./ /usr/src/app/

CMD [ "npm", "run", "dev" ]
