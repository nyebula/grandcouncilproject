FROM node:lts-slim AS development

# Set working directory
WORKDIR /usr/src/app/

# Copy the code and stuff into container 
COPY src/ /usr/src/app/
COPY public/ /usr/src/app/

# Copy package.json so that node can install all the dependencies
COPY package*.json /usr/src/app/

# This is where package.json is used
RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev"]
