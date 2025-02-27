# 使用官方的 Node.js 14 镜像（或其他版本）
FROM node:14-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖（包括 morgan）
RUN npm install

# 复制后端代码
COPY server.js .

# 暴露 3000 端口
EXPOSE 3000

# 启动后端服务
CMD ["npm", "start"]
