#!/bin/bash

SCRIPT_PATH=$(readlink -m $0)
SCRIPT_DIR=$(dirname $SCRIPT_PATH)

PROJECT_ROOT_FOLDERS=""
ALL_FOLDER_ARR=($(ls $SCRIPT_DIR/..))
counter=0
while [ $counter -lt ${#ALL_FOLDER_ARR[@]} ]
do
    if [ ${ALL_FOLDER_ARR[$counter]} != "scripts" ];
    then
       PROJECT_ROOT_FOLDERS="$PROJECT_ROOT_FOLDERS $SCRIPT_DIR/../${ALL_FOLDER_ARR[$counter]}"
    fi
    ((counter++))
done

#Todo emmit corresponding js file for ts file and change the permission..!!

IMG_NM=0mohan0ram/js-ts-algo

LATEST_MODIFIED_FILE=$(find $PROJECT_ROOT_FOLDERS -type f -exec stat --format '%Y %n' "{}" \; | sort -nr | cut -d' ' -f2- | head -n 1)
LATEST_MODIFIED_DIR=$(dirname $LATEST_MODIFIED_FILE)
LATEST_MODIFIED_FILE_NM=$(basename $LATEST_MODIFIED_FILE)

if [ -z $LATEST_MODIFIED_FILE ];
then
    echo "No file found in folders "$PROJECT_ROOT_FOLDERS
else
    
    if [[ "$LATEST_MODIFIED_FILE_NM" == *".ts"* ]]; then
        docker build -t $IMG_NM -f $SCRIPT_DIR/DockerfileWithTs $SCRIPT_DIR
        LATEST_JS_RESULT_FILE=${LATEST_MODIFIED_FILE_NM//.ts/.js}
        echo > $LATEST_MODIFIED_DIR/$LATEST_JS_RESULT_FILE
        docker run -it -v $LATEST_MODIFIED_FILE:/app/$LATEST_MODIFIED_FILE_NM -v $LATEST_MODIFIED_DIR/$LATEST_JS_RESULT_FILE:/app/$LATEST_JS_RESULT_FILE $IMG_NM tsc --outFile /app/$LATEST_JS_RESULT_FILE /app/$LATEST_MODIFIED_FILE_NM
        echo "typescript compilation done, running compiled js file"
        docker run -v $LATEST_MODIFIED_DIR/$LATEST_JS_RESULT_FILE:/app/$LATEST_JS_RESULT_FILE $IMG_NM node /app/$LATEST_JS_RESULT_FILE
        echo "">>$LATEST_MODIFIED_FILE
        
    elif [[ "$LATEST_MODIFIED_FILE_NM" == *".js"* ]]; then
        docker build -t $IMG_NM -f $SCRIPT_DIR/Dockerfile $SCRIPT_DIR
        docker run -v $LATEST_MODIFIED_FILE:/app/$LATEST_MODIFIED_FILE_NM $IMG_NM node /app/$LATEST_MODIFIED_FILE_NM
    else
        echo "file type not recognised" 
    fi 

    CONT_ID=$(docker ps --filter ancestor=$IMG_NM --format "{{.ID}}")

    if [ ${#CONT_ID} -gt 0 ];
    then
        docker rm $(docker kill $CONT_ID)
    fi
fi