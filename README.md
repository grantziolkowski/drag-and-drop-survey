# Drag and Drop Survey

This simple React app allows you to enter in JSON data in a form, and then renders a list of survey questions from the array of data, provided the JSON is valid and each question includes a "body". If there is more than one question, you can drag and drop the questions to reorder them and see the form data in sync with the updated questions list.

The drag and drop funtionality is done using the HTML Drag and Drop API to handle native DOM events. With more time I would focus on testing the components, specifically the reordering logic and the actions we trigger in the reducer to update the app's state.

I would also like to focus more on accessibility and found a great Drag and Drop plugin that would be very useful for this: https://github.com/schne324/dragon-drop.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run these after you `npm install`:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
