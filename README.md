## Cook Unity API

### API
* Express library was used
* No other frameworks were involved
* Repository pattern was used to access DB

### Database
* Prisma as an ORM was implemented
* Add your configuration in the .env file to connect to the DB DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/DBNAME?schema=public"
* Run migrations using `npx prisma migrate deploy`
* Seed database using `npx prisma db seed`

### Deployment
* You'll be able to find a working instance of the API running on Vercel
* https://cook-unity-api.vercel.app/