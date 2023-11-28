# Install dependencies only when needed
FROM node:16.20-alpine AS deps

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:16.15-alpine AS builder
ENV AVE_ENDPOINT=https://dev-ave.cn.ice.go.cr/api
ENV DEBUG_MODE=false
ENV CHOKIDAR_USEPOLLING=true

WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build && yarn install --production --ignore-scripts --prefer-offline

# Production image, copy all the files and run next
FROM node:16.20-alpine
RUN apk -U upgrade
WORKDIR /app

ENV NODE_ENV production
ENV AVE_ENDPOINT=https://agenciaelectricidad.cn.ice.go.cr/api
ENV CHOKIDAR_USEPOLLING=true
ENV DEBUG_MODE=false

#Security improvments
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
#COPY --from=builder /app/.env ./.env

USER nextjs

EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]
