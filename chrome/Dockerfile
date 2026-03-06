FROM alpine:latest

ARG USERID=1000

RUN apk add --no-cache \
    vim \
    procps \
    tigervnc \
    chromium \
    bash

RUN addgroup -g ${USERID} crd && adduser -u ${USERID} -D -G crd crd

USER crd

EXPOSE 5900

RUN mkdir -p /home/crd/.vnc && \
    touch /home/crd/.vnc/xstartup && \
    touch /home/crd/.vnc/config && \
    chmod -R 700 /home/crd/.vnc && \
    chmod 755 /home/crd/.vnc/xstartup && \
    chmod 644 /home/crd/.vnc/config

RUN echo "unset SESSION_MANAGER" > /home/crd/.vnc/xstartup && \
    echo "unset DBUS_SESSION_BUS_ADDRESS" >> /home/crd/.vnc/xstartup && \
    echo "/usr/bin/chromium-browser --disable-dev-shm-usage  --remote-debugging-port=5900 " >> /home/crd/.vnc/xstartup

RUN echo "geometry=1920x1200" > /home/crd/.vnc/config && \
    echo "depth=24" >> /home/crd/.vnc/config && \
    echo "localhost=no" >> /home/crd/.vnc/config && \
    echo "AlwaysShared=yes" >> /home/crd/.vnc/config &&\
    echo "SecurityTypes=none" >> /home/crd/.vnc/config

CMD ["bin/bash", "-c", "vncserver :1 -geometry 1920x1200 -listen 0.0.0.0 -rfport 5900"]



