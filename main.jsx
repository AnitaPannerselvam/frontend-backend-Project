// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { BrowserRouter } from "react-router-dom"
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);




