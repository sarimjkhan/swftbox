FROM node
RUN git clone https://github.com/sarimjkhan/swftbox.git
WORKDIR /swftbox
RUN yarn install
EXPOSE $FPORT $BPORT
CMD yarn start