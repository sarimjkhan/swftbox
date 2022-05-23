FROM node
RUN git clone https://github.com/sarimjkhan/swftbox.git
WORKDIR /swftbox
RUN yarn install
EXPOSE 5001 3000
CMD yarn start