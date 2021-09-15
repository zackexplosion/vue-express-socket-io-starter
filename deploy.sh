#!/bin/bash
REMOTE_IP_ADDRESS=zack@35.229.226.9
REMOTE_PATH=/apps/wavetaipei-employee/

DEPLOY_FILE_NAME=deploy.tar

# npm run build
# tar -zcvf $DEPLOY_FILE_NAME  ./dist
echo 'uploading package...'
scp $DEPLOY_FILE_NAME $REMOTE_IP_ADDRESS:$REMOTE_PATH
ssh $REMOTE_IP_ADDRESS "cd $REMOTE_PATH && tar zxvf $DEPLOY_FILE_NAME"
