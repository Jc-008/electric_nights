// frontend/src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ModalProvider } from "./context/Modal";

import configureStore from "./store";
import { restoreCSRF, csrfFetch } from "./store/csrf";
import * as sessionActions from "./store/session";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

function Root() {
  return (
    <Provider store={store}>
      <ModalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalProvider>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);









// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider as ReduxProvider } from 'react-redux';
// import './index.css';
// import App from './App';
// import configureStore from './store';
// import { restoreCSRF, csrfFetch } from './store/csrf';
// import * as sessionActions from './store/session';      // used to test, sessionAction is an object

// const store = configureStore();


// /*
//   In the frontend entry file (frontend/src/index.js), call the restoreCSRF function when in development before defining the Root functional component.
//     Also, attach the custom csrfFetch function onto the window when in development as window.csrfFetch
//  */

// if (process.env.NODE_ENV !== 'production') {
//   restoreCSRF();

//   window.csrfFetch = csrfFetch;
//   window.store = store;
//   window.sessionActions = sessionActions;         // use this line to test for any sessionActions
// }


// function Root() {
//   return (
//     <ReduxProvider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </ReduxProvider>
//   );
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <Root />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
