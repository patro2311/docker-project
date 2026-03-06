FROM alpine:latest

ARG USERID=1000

RUN apk add --no-cache \
    vim \
    procps \
    tiger-vnc \
    chromium &&

RUN groupadd -g ${USERID} && useradd -u ${USERID} -g ${USERID} -s /bin/sh -m crd


