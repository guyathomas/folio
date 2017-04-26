# Dockerfile
FROM node:6

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn --pure-lockfile

# Bundle app source
COPY . /usr/src/app

# Build and optimize react app
RUN yarn run build
RUN yarn global add serve


# defined in package.json
CMD serve -s build

EXPOSE 5000