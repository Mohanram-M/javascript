#!/bin/sh

SCRIPT_PATH=$(readlink -m $0)
SCRIPT_DIR=$(dirname $SCRIPT_PATH)
PROJECT_ROOT_FOLDERS="$SCRIPT_DIR/../algo $SCRIPT_DIR/../Pattern"
IMG_NM=0mohan0ram/js-algo

LATEST_MODIFIED_FILE=$(find $PROJECT_ROOT_FOLDERS -type f -exec stat --format '%Y %n' "{}" \; | sort -nr | cut -d' ' -f2- | head -n 1)

if [ -z $LATEST_MODIFIED_FILE ];
then
    echo "No file found in folders "$PROJECT_ROOT_FOLDERS
else
    docker build -t $IMG_NM -f $SCRIPT_DIR/Dockerfile $SCRIPT_DIR
    docker run -v $LATEST_MODIFIED_FILE:/app/test.js $IMG_NM node /app/test.js

    CONT_ID=$(docker ps --filter ancestor=$IMG_NM --format "{{.ID}}")

    if [ ${#CONT_ID} -gt 0 ];
    then
        docker rm $(docker kill $CONT_ID)
    fi
fi





