#!/bin/sh
IMG_NM=0mohan0ram/js-algo
CONT_ID=$(docker ps --filter ancestor=$IMG_NM --format "{{.ID}}")

if [ ${#CONT_ID} -gt 0 ];
then
    docker rm $(docker kill $CONT_ID)
fi