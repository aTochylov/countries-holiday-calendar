## Countries & Holidays

An Angular 17.3 web application that displays information about countries and their public holidays using the Nager.Date API https://date.nager.at/swagger/index.html
.

### Features

* Search for countries and view their holidays

*  Country page with full holiday list and year switching 

*  Widget that shows 3 random countries and their upcoming holidays


## Installation & Setup

Angular 17.3 requires Node.js version: >=18.x

1. Clone the repository
2. Execute next commands in project folder:
* Install dependencies:

    npm ci

* Run the development server:

    ng serve


Open http://localhost:4200 in your browser.

### Linting and Formatting
Run ESLint: npm run lint

Format code with Prettier: npm run format

## Architecture Overview

Uses standalone components (no NgModules)

Each component encapsulates its logic and template

Service layer (CountryService) handles all API calls and data transformation



### External APIs Used

Nager.Date API

/AvailableCountries — list of countries

/NextPublicHolidays/{countryCode} — next holiday

/PublicHolidays/{year}/{countryCode} — holidays by year


