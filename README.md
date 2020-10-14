##Photography

### Getting Started

To quick start locally, run the following commands:

```
npm install
npm start
```

### Dependencies

See package.json for all dependencies and scripts.

#### Snowpack

In order to load dependencies directly into the browser for development, Snowpack runs on post-install. These dependencies can be referenced directly from `/web_modules/` without the need for a build step. Note that dependencies that are not automatically picked up when Snowpack runs, they can be added manually to `package.json` - see example below:

```
"snowpack": {
  "install": [
    "@vaadin/router"
  ]
}
```

### End to End Tests

#### Running Locally

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

#### Running with Docker

To run the tests with Docker, run the following commands:

```
docker-compose up -d --build
docker exec -it app npm run test:e2e:docker
```
