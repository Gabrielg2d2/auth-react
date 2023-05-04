# Use uma imagem oficial do Node.js como base
FROM node:14

# Defina a pasta de trabalho no contêiner
WORKDIR /app

# Copie package.json e package-lock.json para a pasta de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código do projeto para a pasta de trabalho
COPY . .

# Defina o usuário e o grupo do diretório /app
RUN chown -R node:node /app

# Mude para o usuário 'node' para executar o aplicativo
USER node

EXPOSE 3000

# Inicie o aplicativo em modo de desenvolvimento
CMD ["npm", "run", "dev"]
