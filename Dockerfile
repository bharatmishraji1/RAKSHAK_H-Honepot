FROM node:20-slim

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build TypeScript properly
RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "start"]
