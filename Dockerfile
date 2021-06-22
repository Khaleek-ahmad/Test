FROM node:14
RUN mkdir -p /src/user/app
WORKDIR /src/user/app 
COPY package*json ./
COPY . .
RUN npm install
EXPOSE 3333 
CMD ["node","index.js"]