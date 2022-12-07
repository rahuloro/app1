FROM node:12
WORKDIR /home/node/app2
COPY . /home/node/app2
RUN npm install && apt update && apt install -y vim iputils-ping inetutils-traceroute iproute2 curl telnet dnsutils
CMD npm run start