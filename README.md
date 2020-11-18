Appointment Booking
===================

First attempt at an entirely JS based appointment booking app with some interesting functionality.

To become part of a bigger app for a charity organisation.

## Installation
  - `npm i` to install dependencies (listed in package.json).
  - `npm run dev` to run.
  - See bottom of this document for information on setting up the database for this project.

## Features

 - Automatically populated dates and times between start and end dates/times given by an admin.
 - Disables unavailable times as opposed to hiding them.
 - After an admin-controlled percentage of slots have been taken by users, slots become available for double-booking.
   - When this happens, you can see how many other people have are in the slot you're selecting.

## Tech

 - Written in Next.js
 - Firebase Firestore DB
