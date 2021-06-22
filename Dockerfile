FROM node:14
RUN mkdir -p /src/user/app
WORKDIR /src/user/app 
COPY package*json ./
COPY . .
RUN npm install
EXPOSE 5001 
CMD ["node","index.js"]