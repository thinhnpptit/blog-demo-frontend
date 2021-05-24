# blog

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#Deploy to VPS google
1. Ensure config docker nginx and npm volumes correctly.
2. Connect to you VPS via SSH and pull your project from github
3. cd to project and run `docker-compose run npm install`
4. Build product, run `docker-compose run npm run build` (./dist)
5. Run `docker-compose up -d` to run container.

Finished.
