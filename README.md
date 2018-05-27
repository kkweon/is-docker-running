# is-docker-running

A simple library to check if a docker container is running by the name

## Installation

```bash
npm install is-docker-running
```

```bash
yarn add is-docker-running
```

## Usage

### commonjs

```js
const isDockerRunning = require("is-docker-running");
isDockerRunning.findContainerByName("db"); // returns Promise<boolean>
```

### CLI

```bash
find-docker-by-name ps # ps is not running
```

You can check multiples

```bash
find-docker-by-name db webapp
# db is running
# webapp is not running
```
