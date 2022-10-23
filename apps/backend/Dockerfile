# 1. Installing stage
FROM node:16.17-alpine AS deps
WORKDIR /app

# Prune unnecessary things which not related to building context
RUN yarn global add turbo@1.5.5
COPY . .
RUN turbo prune --scope=backend --docker

# 2. Building stage
FROM node:16.17-alpine AS builder
WORKDIR /app

COPY --from=deps /app/out/json .
COPY --from=deps /app/out/yarn.lock .

# Copy Prisma Schema for generating Prisma Client
COPY --from=deps /app/apps/backend/prisma ./apps/backend/prisma

RUN yarn install --frozen-lockfile

# Build the backend
COPY --from=deps /app/out/full .
COPY turbo.json .
RUN yarn turbo run build --filter=backend...

# 3. Composition stage
FROM scratch AS composer
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules

# 4. Running stage
FROM node:16.17-alpine AS runner
WORKDIR /app

# Set timezone
RUN apk add tzdata
ENV TZ Asia/Bangkok

ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 springpress

COPY --from=composer --chown=springpress:nodejs /app .

USER springpress
EXPOSE 3000

CMD [ "yarn", "workspace", "backend", "run", "start" ]
