# API deparment 

API of the departments of Paraguay.

# Tecnologies

- NodeJS 14.18.xx
- NPM 8.1.xx
- Yarn 1.22.x

# Development

## Install

```
yarn install
```

## Start server

```
yarn start
```

# Http code
- `200 Request` - ok

## Testing

### With jest

- [Oficial site](https://jestjs.io/)
- [Documentation](https://jestjs.io/docs/en/getting-started) 
- [API](https://jestjs.io/docs/en/api)
- [Expect](https://jestjs.io/docs/en/expect)

```
yarn test
```

or

```
yarn --watchAll
```

## Documentation

### Access

- [Oficial site](http://localhost:3000/api-docs)

# Production

## Build

```
yarn build
```

Use pm2

## Install

```
yarn global add pm2
```

## Use

### Start an app

```
pm2 start dist/bundle.js --name api-departement
```

### Managing processes

#### Restart

```
pm2 restart api-departement
```

#### Reload

```
pm2 reload api-departement
```

#### Stop

```
pm2 stop api-departement
```

#### Delete

```
pm2 delete api-departement
```

### List managed applications

```
pm2 list
```

### Display logs

```
pm2 logs
```

### Terminal Based Dashboard

```
pm2 monit
```

## Cluster mode

For Node.js applications, PM2 includes an automatic load balancer that will share all HTTP[s]/Websocket/TCP/UDP connections between each spawned processes.

```
pm2 start app.bundle.js --name api-departement -i max
```

## Setup startup script

```
pm2 startup
```
