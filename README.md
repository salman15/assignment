# Assignment 🚀
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

## Addressing correctness 🚧 
I've changed the source of the API call from `postman-echo` to a local server that can be run with the application. The reason I have done this is because `postman-echo` API service kept rejecting my requests because of CORS reasons. 

After researching the nature of the rejection I've come to the conclusion that the fault lays with Postmans server.

With this being said, I have build an application as requested with al functionality in working order.

# To get started with the application 💼

You can perform the script below

## `npm install`

To install all the required packages/modules.

### `Running Mock Server`

I've used JSON-server library to replicate the intended use of Postman.

The mock json can be found in `db-mock/db.json` and be run using the following script: `npm run mock-server`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


# Libraries 🔧
I've used several libraries to unsure that the application could be properly run and tested.

- Json-server: Because I could not connect to the postman-echo API server. I decided to add an alternative to the application so it could be shown in proper form.
- Axios: I've added axios to perform simple API calls, however I am familiar with fetch and XMLHttpRequest calls. I do prefer axios because I find it easier to use.
- Axios-mock-adapter: This library enables me to allow me to easily perform API mocks during testing
- testing-library/react-hooks: When writing custom hooks this library offers easy to use tools so I can focus more on the purpose of the unit test.



### Applications structure ✨

I've built the application to run logic from the container and pass this logic down to it the components used inside this container.
This way I have more control of what the components should do and also allows the components to be easier to reuse.

- Containers are where the components are assembled and the states are passed down (unless specifics component requires to have its own state to decrease unnecessary re-renders).

- Components are the building blocks for the containers and should be highly reusable across different containers if necessary. 

- Hooks are where the custom hooks are stored to keep the code DRY

- Utils are where the reusable functions are stored that would be used across the application.

- Config is where basic principle values are defined across the application.

## Containers

### Sign up container 🔖

- Sign up Container (Holds the state and functions to perform tasks):
    - Container component is a wrapper used to give basic styling principles.
    - Form a basic wrapper to hold inputs and holds the principle styling for all forms run in the app.
    - Inputs are highly reusable components that pass on it's value to the given function.
    - Button is also an highly reusable component that can either render as an a tag or as a button based on it's props

## Components

### Container, WarningText, Column
The Container and Column component are a simple components that gives structure to a set of components. The Warning text component returns a text with the warning styling.

props:
- Children

### Form
The form component is meant to give structure to its child components and apply the proper form styling for the application.
When the Error prop is true the components border will be set to `border: solid 1px red;` to indicate something went wrong.
Other props the component accepts are `title` prop, `description` prop to display the components Title and description and `submit` prop. 

props:
- Children
- Title
- Description
- Error
- submit

### Input
Besides returning an input field the component also offers te possibility to return an `label` and a `warningText` option to allow the user to easier understand the situation.
When the `warning` value is true the `warningText` will  be shown. Passing on the `required` prop will show an  red `*` next to the `label` to indicate the input field is required.
The `type` prop is used to indicate what kind of input value it is and if possible populate the input with native options like auto-complete suggestions.

props:
- Placeholder
- InputValue
- setInputValue
- warningText
- warning
- required
- type

### Button
The button component can return two types of `HTML` elements. It can either return a `button` or an `anchor` depending if pass on a url in the `link` prop.
Other that that the button accepts an `disabled` prop to disable the button if needed and a `action` prop to pass on a function.

props:
- children
- action
- disabled
- type
- link

## Hooks 
The custom hooks in this application are the `UsePost` hook and the `UseGet` hook. Both hooks are similar and both return a `response`, `loading`, `error` `value` and a `send` function. However the natur of the hooks are different. Where one is to send data and the other is to fetch it.

The `UsePost` hook accepts two parameters, the url to indicate where it should send the data to and the second parameter is the  data that is suppose to be sent.

The `UseGet` hook accepts one parameter, the url to indicate where to fetch it's information from.