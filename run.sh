#!/bin/sh

IMG_NM=0mohan0ram/js-algo
PROJECT_ROOT_FOLDERS="algo Pattern"
LATEST_MODIFIED_FILE=$(find $PROJECT_ROOT_FOLDERS -type f -exec stat --format '%Y %n' "{}" \; | sort -nr | cut -d' ' -f2- | head -n 1)
ALGO_FILE=$(pwd)/$LATEST_MODIFIED_FILE
echo $ALGO_FILE
docker build -t $IMG_NM -f Dockerfile .
docker run -v $ALGO_FILE:/app/test.js $IMG_NM node /app/test.js

CONT_ID=$(docker ps --filter ancestor=$IMG_NM --format "{{.ID}}")

if [ ${#CONT_ID} -gt 0 ];
then
    docker rm $(docker kill $CONT_ID)
fi




