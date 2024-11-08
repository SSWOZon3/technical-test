# back-end/Dockerfile
FROM node:18

WORKDIR /app

# Copia los archivos de dependencias e instala
COPY package*.json ./
RUN npm install

# Instala TypeScript globalmente
RUN npm install -g typescript

# Copia el resto de los archivos de código
COPY . .

# Compila el código TypeScript a JavaScript
RUN npm run build

# Expone el puerto en el que correrá el backend
EXPOSE 3001

# Ejecuta el servidor a partir del código compilado
CMD ["node", "dist/server.js"]
