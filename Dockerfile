FROM node:alpine as Builder
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/shared/nginx/html