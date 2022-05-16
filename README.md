

# Together by oceans

this is the backend app for Together by oceans client 

## This is the client app

we are having issues with server connection but is working with client test data

[client app repository](https://github.com/MauroMontan/ocean-frontend-app) 

[client app on web!](https://thankful-dune-0bf88f210.1.azurestaticapps.net/)


- home page 
![cliente app](https://imgur.com/CKfj7aS) 

# backend app installation 

- installing dependencies 

```bash
npm install
```

- create a env file with postgres url database and port

```bash
DATABASE_URL = "YOUR URL DABASE"
PORT = 3300
```

- make prisma migrations

```bash
npx prisma migrate dev
```

- generate prisma javascript 
```bash

npx prisma generate
```

- run dev locally

```bash
npm run dev
```

test endpoints by importing insonia request collection file on this repo




