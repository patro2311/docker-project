FROM alpine:latest

ARG USERID=1000

RUN apk add --no-cache \
    vim \
    procps \
    tigervnc \
    chromium 

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
    echo "/usr/bin/chromium --disable-dev-shm-usage  --remote-debugging-port=5900 " >> /home/crd/.vnc/xstartup

RUN echo "geometry=1280x800" > /home/crd/.vnc/config && \
    echo "localhost=no" >> /home/crd/.vnc/config && \
    echo "alwaysshared=yes" >> /home/crd/.vnc/config &&\
    echo "securitytypes=none" >> /home/crd/.vnc/config


ENTRYPOINT ["bin/sh", "-c", "vncserver :1 -fg -listen 0.0.0.0"]



