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
1. ssh username@34.126.150.58
2. cd to your vue project 
3. run `docker build . -t blog-fe` to build image
4. run `docker run -d -p 8080:80 blog-fe` to run container
5. run `curl localhost:8080` 

Done. Direct to http://34.126.150.58:8080/login to login blog
http://34.126.150.58:8080/dashboard to create new post blog
http://34.126.150.58:8080/ listed posts blog
