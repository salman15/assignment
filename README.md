# Assignment
This App is an assignment I've made to create an ReactJS application with the following requirements

- Sign page app with a sign-up form.
- The sign-up form should require the following inputs with following requirements:
    - first name, last name, email and password.
    - Alle fields required and validated.
    - Password validation that checks casing.
- The app should be able to perform api calls to postman-echo's API.
- Use of latest version of React.
- Use of Hooks.
- modern JavaScript syntax.
- Proper component logic and behavior.
- Support for modern browsers with ES6 or newer.

The application will be tested on correctness, code quality, testing, UX, documentation, technical choices.


# To get started with the application

You can peform the script below

## `npm install`

To install all the required packages/modules.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run-script build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## `Running Mock Server`

I've used JSON-server library to replicate the intended use of Postman.

The mock json can be found in `db-mock/db.json` and be run using the following script: `json-server --watch db-mock/db.json --port 3004 --delay 4000`

### Libraries



### Applications structure

I've built the application to run logic from the container and pass this logic down to it the components used inside this container.
This way I have more control of what the components should do and also allows the components to be easier to reuse.

- Containers are where the components are assembled and the states are passed down (unless specifics component requires to have its own state to decrease unnecessary re-renders).

- Components are the building blocks for the containers and should be highly reusable across different containers if necessary. 

- Hooks are where the custom hooks are stored to keep the code DRY

- Utils are where the reusable functions are stored that would be used across the application.

- Config is where basic principle values are defined across the application.

## Containers

### Sign up container

- Sign up Container (Holds the state and functions to perform tasks):
    - Container component is a wrapper used to give basic styling principles.
    - Form a basic wrapper to hold inputs and holds the principle styling for all forms run in the app.
    - Inputs are highly reusable components that pass on it's value to the given function.
    - Button is also an highly reusable component that can either render as an a tag or as a button based on it's props

## Components

### Container
The container component is a simple component that gives structure to a set of components.

props:
- Children

### Form
The form component is meant to give structure to its child components and apply the proper form styling for the application.
When the Error prop is true the components border will be set to `border: solid 1px red;` to indicate something went wrong.
Other properties the component accepts are Title properties and description properties to display the components Title and description.

props:
- Children
- Title
- Description
- Error

### Input