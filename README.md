# YouTube Clone App
This is a responsive youtube clone web application built using ReactJS and RapidAPI. Users can search, watch, and interact with youtube videos.

Deployed Site: [Youtube Clone App](https://tuby-clone.netlify.app/)

## Features
* Search videos by keywords
* Watch videos with playback controls like play/pause, fullscreen, etc.
* Responsive UI for mobiles and desktops
* Dark theme
* Login and account features (coming soon)

## Technologies
* ReactJS
* RapidAPI YouTube v3 API
* React Player for video playback
* React Router for routing
* Context API for state management
* LocalStorage for watch later items
* React icons
* Deployed on Netlify

## Running Locally
To run this app locally:

* Clone the repository
```
git clone https://github.com/[your-username]/youtube-clone.git
```
* Navigate to the project directory
```
cd youtube-clone
```
* Install dependencies
```
npm install
```
* Create .env file in root and add RapidAPI key
```
REACT_APP_RAPID_API_KEY=YOUR_API_KEY
```
* Run the app
```
npm start
```

The app will now be running on [http://localhost:3000](http://localhost:3000)

## Available Scripts

In the project directory, you can run:

```
npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```
npm run eject
```
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
