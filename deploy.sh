#!/bin/bash
# change to your server ip
REMOTE_IP_ADDRESS=0.0.0.0
# change to your remote path to deploy app
REMOTE_PATH=~/myapp
# change to your app name
APP_NAME=app

DEPLOY_FILE_NAME=deploy.tar

npm run build
tar --exclude='node_modules' --exclude='.git' -zcvf $DEPLOY_FILE_NAME  .
echo 'uploading package...'
scp $DEPLOY_FILE_NAME $REMOTE_IP_ADDRESS:~
ssh $REMOTE_IP_ADDRESS "mv $DEPLOY_FILE_NAME $REMOTE_PATH"
ssh $REMOTE_IP_ADDRESS "cd $REMOTE_PATH && tar zxvf $DEPLOY_FILE_NAME"
echo 'installing package..'
ssh $REMOTE_IP_ADDRESS "cd $REMOTE_PATH && npm install --production"
echo 'installing package..'
ssh $REMOTE_IP_ADDRESS "nvm use 12.18 && pm2 restart --name $APP_NAME $REMOTE_PATH/server/index.js"
# ssh $REMOTE_IP_ADDRESS "cd ${REMOTE_PATH} && npm install"
ssh $REMOTE_IP_ADDRESS "cd $REMOTE_PATH && rm $DEPLOY_FILE_NAME"
rm $DEPLOY_FILE_NAME
