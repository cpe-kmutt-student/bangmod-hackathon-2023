# Installing stage
FROM node:16.17-alpine AS deps
WORKDIR /app

# Prune unnecessary things which not related to building context
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=backend --docker

# Building stage
FROM node:16.17-alpine AS builder
WORKDIR /app

COPY --from=deps /app/out/json .
COPY --from=deps /app/out/yarn.lock .
# RUN yarn run prisma:generate
RUN yarn install --frozen-lockfile

# Build the application
COPY --from=deps /app/out/full .
COPY turbo.json .
RUN yarn turbo run build --filter=backend...

# Running stage
FROM node:16.17-alpine AS runner
WORKDIR /app

RUN apk add tzdata
ENV TZ Asia/Bangkok

ENV NODE_ENV production
RUN addgroup --system --gid 1001 springpress
RUN adduser --system --uid 1001 springpress

COPY --from=builder /app/apps/backend/package.json .
COPY --from=builder /app/yarn.lock .
COPY --from=builder /app/apps/backend/prisma .
COPY --from=builder --chown=app:nodejs /app/apps/backend/dist ./dist

RUN yarn install --production

USER springpress
EXPOSE 3000

CMD [ "yarn", "start" ]
