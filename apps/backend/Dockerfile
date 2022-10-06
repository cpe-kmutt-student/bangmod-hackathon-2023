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
RUN yarn install --frozen-lockfile

COPY --from=deps /app/out/full .
COPY turbo.json .
RUN yarn turbo run build --filter=backend...

# Running stage
FROM node:16.17-alpine AS runner
WORKDIR /app

RUN apk add tzdata
ENV TZ Asia/Bangkok

ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 springpress

COPY --from=builder /app/apps/backend/package.json .
COPY --from=builder /app/yarn.lock .
COPY --from=builder --chown=springpress:nodejs /app/apps/backend/dist ./dist

# Copy Prisma Client
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma/client ./node_modules/@prisma/client

RUN yarn install --production --frozen-lockfile

USER springpress
EXPOSE 3000

CMD [ "yarn", "start" ]
