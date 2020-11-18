# Assignment
This App is an assignment I've made to create an ReactJS application with the following requirements

- Sign page app with a sign-up form.
- The sign-up form should require the following inputs with following requirements:
    - first name, last name, email and password.
    - Alle fields required and validated.
    - Password validation that checks casing.
- The app should be able to peform api calls to postman-echo's API.
- Use of latets version of React.
- Use of Hooks.
- mordern JavaScript syntax.
- Proper component logic and behavior.
- Support for modern browsers with ES6 or newer.

The application will be tested on correctness, code quality, testing, UX, documentation, techincal choices.



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

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Applications structure

I've built the application to run logic from the container and pass this logic down to it the components used inside this container.
This way I have more control of what the components should do and also allows the components to be easier to reuse.

- Containers are where the components are assembled and the states are passed down (unless specifick component requires to have its own state to decrease unnecessary rerenders).

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
- Childeren

