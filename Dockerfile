FROM node:18.7

WORKDIR /app

COPY . /app

RUN chmod +x start.sh
ENTRYPOINT ["./start.sh"]