ARG FUNCTION_DIR="/function"

# RICインストール用
FROM public.ecr.aws/docker/library/node:14-bullseye as build-image
ARG FUNCTION_DIR
RUN apt-get update && \
    apt-get install -y \
    g++ \
    make \
    cmake \
    unzip \
    libcurl4-openssl-dev
RUN mkdir -p ${FUNCTION_DIR}
COPY package.json ${FUNCTION_DIR}
WORKDIR ${FUNCTION_DIR}
RUN npm install

# 実行用
FROM public.ecr.aws/docker/library/node:14-bullseye
ARG FUNCTION_DIR 
ENV CI=true
ENV PLAYWRIGHT_BROWSERS_PATH="/browser"
RUN mkdir -p /browser
WORKDIR ${FUNCTION_DIR}
COPY --from=build-image ${FUNCTION_DIR} ${FUNCTION_DIR}
RUN npx playwright install chromium
RUN npx playwright install-deps chromium
COPY . ${FUNCTION_DIR}
COPY ./entry_script.sh /entry_script.sh
RUN chmod 755 /entry_script.sh
ENTRYPOINT [ "/bin/bash", "/entry_script.sh" ]
CMD [ "app.lambdaHandler" ]