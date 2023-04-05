FROM node:16.14.2-alpine

RUN mkdir -p /app/tmp
WORKDIR /app

##############################
# Install Tools
##############################
RUN apk add --no-cache nginx curl bash
RUN mkdir -p /run/nginx

###############################
# Install YARN
###############################
RUN curl -o- -L https://yarnpkg.com/install.sh | bash > /dev/null

# COPY project
COPY ./ /app/tmp
COPY config/app.conf /etc/nginx/conf.d/

# Install
RUN cd /app/tmp \
  # Install dependency
  && yarn && yarn build && cp -R dist/* /app \
  # Remove cache
  && yarn cache clean && rm -rf /app/tmp /root/.cache


CMD ["nginx", "-g", "daemon off;"]
