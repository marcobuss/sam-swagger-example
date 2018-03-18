#!/usr/bin/env bash

: "${STACK_NAME:=$1}"

if [[ -z ${STACK_NAME} ]]; then
  echo "No Stackname is provided."
  echo "Use: deploy <STACK_NAME>"
  exit 2
fi

FILENAME=$(cat /dev/urandom | env LC_CTYPE=C tr -cd 'a-f0-9' | head -c 32)
TEMPLATE_FILE=packaged-template.yaml

BUCKET="s3://$S3_BUCKET/$FILENAME"


aws s3 cp swagger.yaml ${BUCKET} --sse
aws cloudformation package --template-file template.yaml --s3-bucket ${S3_BUCKET} --output-template-file ${TEMPLATE_FILE}
aws cloudformation deploy --template-file ${TEMPLATE_FILE} --parameter-overrides SwaggerS3File=${BUCKET} --stack-name ${STACK_NAME} --capabilities CAPABILITY_IAM

