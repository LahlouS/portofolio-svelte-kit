# first we pull the node image
FROM node:20

# environment variable to dl all the dev tools node need
ENV NODE_ENV=development

# set the working directory of the app inside the container
WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .


EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]
