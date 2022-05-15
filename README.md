

# Together by oceans

this is the backend app for Together by oceans client

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



