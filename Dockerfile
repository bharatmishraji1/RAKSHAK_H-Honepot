# Use official Node image
FROM node:20-slim

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build TypeScript
RUN npx tsc

# Expose Railway port
EXPOSE 8080

# Start compiled JS
CMD ["node", "dist/server.js"]
