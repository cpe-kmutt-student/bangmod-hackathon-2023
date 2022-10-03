# Installing stage
FROM node:16.17-alpine AS deps
WORKDIR /app

# Prune unnecessary things which not related to building context
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=registration --docker

# Building stage
FROM node:16.17-alpine AS builder
WORKDIR /app

ARG VITE_DOMAIN_BASE
ARG VITE_PORT
ARG VITE_BASE_PATH

COPY --from=deps /app/out/json .
COPY --from=deps /app/out/yarn.lock .
RUN yarn install --frozen-lockfile

# Build the application
COPY --from=deps /app/out/full .
COPY turbo.json .
COPY /apps/registration/.env /app/apps/registration/.env
RUN yarn turbo run build --filter=registration...

# Running stage
FROM nginx:1.23-alpine AS runner
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*
COPY --from=builder /app/apps/registration/dist .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
