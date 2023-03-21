ARG FUNCTION_DIR="/function"

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
# npm
RUN npm install
RUN npx playwright install-deps chromium

FROM public.ecr.aws/docker/library/node:14-bullseye
ARG FUNCTION_DIR 
ENV CI=true
WORKDIR ${FUNCTION_DIR}
COPY --from=build-image ${FUNCTION_DIR} ${FUNCTION_DIR}
COPY . ${FUNCTION_DIR}
# entryscript
COPY ./entry_script.sh /entry_script.sh
RUN chmod 755 /entry_script.sh
ENTRYPOINT [ "/bin/bash", "/entry_script.sh" ]
CMD [ "app.lambdaHandler" ]