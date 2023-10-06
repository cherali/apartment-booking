# Apartment Booking App
Apartment visit booking app using react.

## Build with
+ Vite
+ React.js
+ Tailwind css
+ Typescript
+ Redux Toolkit
+ React Router Dom v6
+ Formik
+ Yup


## Design And Implementation
* Provide a custom auth flow that only validate inputs then grant access as user with `id=1`
* validations:
  + for Login:
    - email: required and email type
    - password: only 8 char
  
  + for note:
    - note: required


## Note That
+ No persistance database provided so after refresh all data will be gone. (visit and user)
+ Mock data initialized in `App.tsx`, so don't forget to remove it.
+ Location and availability must be added to apartment model but for sake of simplicity this functionality ignored.
+ No api call simulation provided (delay and render loading placeholder).
+ Apartments must have at least of media (image), but the image is not provided by Apartment model, hence only a placeholder is shown at this time.
+ Apartment detail page ignored for simplicity.
+ Window alert method used to show messages.
+ Adding note only available after reservation (checkout reserve page).
+ In reserve page a smooth delay `200ms` added after save note button clicked.


## Not Implemented
+ Responsive.
+ aria-labels (for accessibility).
+ Redux independent Auth Provider.

## Room for Improvement
+ Separate auth provider form redux.
+ Use react-hook-form instead of formik
+ Use toaster packages for showing messages instead of using window alert (for better UX).
+ Add picker for reserve.
+ Provide input in order to get user note when reserve button clicked.
+ Add custom confirmation component for deletion.
+ Expand Button component in order to support different color.

## Install Packages
```bash
npm install

// or using yarn
yarn
```

## Run - Development
```bash
npm run dev

// or using yarn
yarn dev
```

## Build
```bash
npm run build

// or using yarn
yarn build
``` 
