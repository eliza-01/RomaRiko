# syntax=docker/dockerfile:1

FROM node:22-alpine AS dependencies

WORKDIR /app/frontend

COPY frontend/package.json ./
RUN npm install


FROM dependencies AS development

COPY frontend/ ./

EXPOSE 4321

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]


FROM dependencies AS build

COPY frontend/ ./
COPY assets/ /app/assets/

RUN npm run build


FROM nginx:1.27-alpine AS production

COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/frontend/dist/ /usr/share/nginx/html/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
