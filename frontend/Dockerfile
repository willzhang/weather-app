# 使用官方的轻量级 Nginx 镜像
FROM nginx:alpine

# 移除默认的 Nginx 配置文件
RUN rm /etc/nginx/conf.d/default.conf

# 将自定义的 Nginx 配置文件复制到容器
COPY nginx.conf /etc/nginx/conf.d/

# 将前端静态文件复制到 Nginx 服务的默认目录
COPY index.html /usr/share/nginx/html/

# 暴露 80 端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
