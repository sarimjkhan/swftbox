FROM node
RUN git clone https://github.com/sarimjkhan/swftbox.git
WORKDIR /swftbox
RUN yarn install
EXPOSE 3000 5001
CMD yarn start