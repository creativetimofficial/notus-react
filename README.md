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


## Notus React Documentation
The library we forked from is called Notus React - the documentation for the Notus React is hosted at Creative Tim's <a href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-readme" target="_blank">website</a>.
