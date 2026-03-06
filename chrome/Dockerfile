FROM alpine:latest

ARG USERID=1000

RUN apk add --no-cache \
    vim \
    procps \
    tigervnc \
    chromium \
    bash

RUN addgroup -g ${USERID} crd && adduser -u ${USERID} -D -G crd crd

 #USER crd

EXPOSE 5900

RUN mkdir -p /root/.vnc && \
    touch /root/.vnc/xstartup && \
    touch /root/.vnc/config && \
    chmod -R 700 /root/.vnc && \
    chmod 755 /root/.vnc/xstartup && \
    chmod 644 /root/.vnc/config

RUN echo "#!/bin/bash" > /root/.vnc/xstartup && \
    echo "" >> /root/.vnc/xstartup && \
    echo "unset SESSION_MANAGER" > /root/.vnc/xstartup && \
    echo "unset DBUS_SESSION_BUS_ADDRESS" >> /root/.vnc/xstartup && \
    echo "/usr/bin/chromium-browser --disable-dev-shm-usage  --remote-debugging-port=5900 " >> /root/.vnc/xstartup

RUN echo "geometry=1920x1200" > /root/.vnc/config && \
    echo "depth=24" >> /root/.vnc/config && \
    echo "localhost=no" >> /root/.vnc/config && \
    echo "AlwaysShared" >> /root/.vnc/config &&\
    echo "SecurityTypes=none" >> /root/.vnc/config

ENTRYPOINT ["bin/bash", "-c", "vncserver :1 -fg -localhost no -SecurityTypes None -xstartup ~/.vnc/xstartup"]

 # CMD ["bin/bash", "-c", "vncserver :1 -geometry 1920x1200 -listen 0.0.0.0 -rfport 5900"]



