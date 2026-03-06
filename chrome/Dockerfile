FROM alpine:latest

ARG USERID=1000

RUN apk add --no-cache \
    vim \
    procps \
    tigervnc \
    chromium

RUN addgroup -g ${USERID} crd && adduser -u ${USERID} -D -G crd crd


