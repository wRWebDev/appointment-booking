Appointment Booking
===================

First attempt at an entirely JS based appointment booking app with some interesting functionality.

To become part of a bigger app for a charity organisation.

## Installation

If copying the whole project for use as is:
  - Navigate to project directory
  - `npm i` to install dependencies (listed in package.json).
    - `next 10.0.1`
    - `react 17.0.1` & `react-dom 17.0.1`
    - `firebase` & `react-firebase-hooks ^2.2.0`
    - `dotenv ^8.2.0`
    - `react-scroll ^1.8.1`
  - `npm run dev` to run
  - Setup firebase firestore as outlined at the bottom of this document.

If using the module in your own project:
  - Install the above dependencies
  - Copy `components`, `lib/db.js`, `next.config.js` & `pages/appointments.js` to your root project directory
  - Setup the database and `.env` file as outlined at the bottom of this document.

## Features

 - Automatically populated dates and times between start and end dates/times given by an admin.
 - Disables unavailable times as opposed to hiding them.
 - After an admin-controlled percentage of slots have been taken by users, slots become available for double-booking.
   - When this happens, you can see how many other people have are in the slot you're selecting.

## Tech Stack

 - Node
 - React
 - Next
 - Firebase: Firestore

## Database

The aim was to store/transfer as little data as possible, and to give maximum automation to the app in terms of flexibiltiy of available slots.
The criteria that are satisfied:
 - Admin control first and last available dates
 - Admin control first and last available times on those dates (same for all)
 - Bookings are only created on the database when the time slot is booked

### Structure
```
settings: {
  _id_: {
     startDate: timestamp,
     endDate:   timestamp,
     startTime: string,
     endDate:   string
  }
},
bookings: {
  _id_: {
    date: timestamp,
    time: string,
    user_info: { 
      __id__: {
        email: string
        name: string
      },
      ...
    }
  },
  ...
}
```

### Setup

  - [Create a firebase project](https://firebase.google.com)
  - Create a firestore database
  - Create the settings collection as detailed above
  - Go to __Project Overview__ > __Project Settings__
    - Add a web app to your project
    - Copy the variables within the `firebaseConfig` variable to a `.env` file with the following variable names:

```
API_KEY=___YourAppKey___
AUTH_DOMAIN=___YourAuthKey___
DB_URL=___YourDbUrl___
PROJECT_ID=___YourProjectId___
STORAGE_BUCKET=___YourStorageBucket___
MSG_SENDER_ID=___YourMessagingSenderId___
APP_ID=___YourAppId___
MEASUREMENT_ID=___YourMeasurementId___
```
