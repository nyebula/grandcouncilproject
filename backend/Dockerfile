FROM node:lts-buster-slim AS development

# Create app directory
WORKDIR /usr/src/app/

COPY package*.json /usr/src/app/

RUN npm install

# Copy the code and stuff into container 
COPY src/ /usr/src/app/
COPY public/ /usr/src/app/

EXPOSE 5173

CMD [ "npm", "run", "dev" ]
