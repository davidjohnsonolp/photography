#Photography

## End to End Tests

### Running Locally

To run tests locally from scratch, do the following in three separate terminal tabs:

```
npm install
npm start
```

```
npm run selenium
```

```
npm run test:e2e
```

### Running with Docker

To run the tests with Docker, run the following commands:

```
docker-compose up -d --build
docker exec -it app npm run test:e2e:docker
```