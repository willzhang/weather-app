# 使用官方的 Nginx 镜像
FROM nginx:alpine

# 移除默认的 Nginx 配置文件
RUN rm /etc/nginx/conf.d/default.conf

# 复制自定义的 Nginx 配置文件
COPY nginx.conf /etc/nginx/conf.d/

# 暴露 443 端口（HTTPS）
EXPOSE 443

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
