FROM node:12
WORKDIR /home/node/app1
EXPOSE 5000
COPY .env /home/node/app1
COPY . /home/node/app1
RUN npm install && apt update && apt install -y vim iputils-ping inetutils-traceroute iproute2 curl telnet dnsutils
RUN npm i -g pm2
CMD pm2-runtime start ecosystem.config.js