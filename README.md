# saraswati-dashboard
The purpose of this API is to ingest HEDIS data from pyspark, save it, and then use it to populate the [Sarawati Dashboard](https://github.com/amida-tech/saraswati-dashboard).

## Set up
1. Run `cp .env.example .env`
2. Stand up the dashboard 
  - If you are on a linux based terminal 
    - Simply run `yarn run install:clean`
  - If not 
    - Run in terminal `yarn`
    - Run in terminal `yarn run build:tailwind` (each time you add a new class, a class that does not exist in `src/assets/styles/tailwind.css`, you will need to run this command)
    - Run in terminal `yarn start`
3. Navigate to https://localhost:3000.


## Env Variables
`REACT_APP_HEDIS_MEASURE_API_URL` - URL To access HeRA
`REACT_APP_GOOGLE_OAUTH_URL` - URL For Google OAuth
`REACT_APP_GOOGLE_CLIENT_ID` - Client ID setup for Saraswati authentication
`REACT_APP_DASHBOARD_URL` - URL for Saraswati Dashboard
`REACT_APP_TOKENINFO` - URL for Google access token
`REACT_APP_DEV_DATA` - `true` to use data from local file, `false` to fetch data from mongodb
`REACT_APP_AUTH` - `true` to force authorization before accessing dashboard, `false` to bypass authorization
