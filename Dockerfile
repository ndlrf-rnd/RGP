FROM node:12-alpine as builder
WORKDIR /app
RUN apk --no-cache add --virtual builds-deps build-base python
COPY . /app
FROM node:12-alpine
WORKDIR /app
COPY --from=builder /app/dist /app
RUN apk --no-cache add --virtual builds-deps build-base python
EXPOSE 8080 
USER node
CMD ["python", "app.py"]
