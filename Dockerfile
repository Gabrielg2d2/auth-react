# Use a imagem oficial do Node.js 16 baseada em Alpine Linux
FROM node:16-alpine

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie os arquivos package.json e package-lock.json (se disponível) para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Instale o pacote 'serve' globalmente
RUN npm install -g serve

# Copie o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Altere o proprietário dos arquivos no diretório de trabalho para o usuário 'node'
RUN chown -R node:node /app

# Mude para o usuário 'node' para executar os próximos comandos
USER node

# Exponha a porta 3000 para que o aplicativo possa ser acessado externamente
EXPOSE 3000

# Compile o projeto
RUN npm run build

# Altere o comando de execução para usar 'serve' e servir a pasta 'dist' na porta 3000
CMD ["serve", "-s", "dist", "-p", "3000"]
