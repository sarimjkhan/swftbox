FROM node
RUN git clone https://github.com/sarimjkhan/swftbox.git
WORKDIR /swftbox
RUN yarn install
CMD yarn start