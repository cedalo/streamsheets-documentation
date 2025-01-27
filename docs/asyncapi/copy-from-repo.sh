#!/usr/bin/env sh

set -ex

NEW_VERSION=$1 # e.g. '3.0'
REPO_DIR=$2 # e.g. ~/git/mosquitto-premium

if [ $# -ne 2 ]
  then
    echo "Usage: $0 <new_version> <repo-dir>"
    echo "Example: $0 3.0 ~/git/mosquitto-premium"
    exit 0
fi

if [ ! -d $REPO_DIR ]; then
    echo "Directory does not exist."
    exit 1
fi

mkdir -p ${NEW_VERSION}
cp ${REPO_DIR}/plugins/premium/certificate-management/asyncapi.yml ${NEW_VERSION}/certificate-management.yml
cp ${REPO_DIR}/plugins/premium/client-control/asyncapi.yml ${NEW_VERSION}/client-control.yml
cp ${REPO_DIR}/plugins/premium/inspect/asyncapi.yml ${NEW_VERSION}/client-inspect.yml
cp ${REPO_DIR}/plugins/premium/ha/asyncapi.yml ${NEW_VERSION}/ha.yml
cp ${REPO_DIR}/plugins/premium/topic-tree/asyncapi.yml ${NEW_VERSION}/topic-tree.yml
cp ${REPO_DIR}/plugins/dynamic-security/asyncapi.yml ${NEW_VERSION}/dynamic-security.yml
cp ${REPO_DIR}/src/asyncapi.yml ${NEW_VERSION}/broker.yml

rm latest
ln -s ${NEW_VERSION} latest
