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
    chmod +x /home/crd/.vnc/xstartup

RUN echo "unset SESSION_MANAGER" > /home/crd/.vnc/xstartup && \
    echo "unset DBUS_SESSION_BUS_ADDRESS" >> /home/crd/.vnc/xstartup && \
    echo "exec /usr/bin/chromium --no-sandbox --disable-dev-shm-usage --remote-debugging-port=9222 " >> /home/crd/.vnc/xstartup

RUN echo "geometry=1280x800" > /home/crd/.vnc/config && \
    echo "localhost=no" >> /home/crd/.vnc/config

ENTRYPOINT ["vncserver", ":1", "-fg", "-listen 0.0.0.0"]]



