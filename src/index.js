import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import { BrowserRouter } from 'react-router-dom'

// const recuder = (state,action); {
//     switch (action.type){
//         case "ADD":
//         break;
//         default:
//     }
// }

const AppWithRouter = () => (
    <App />
)

ReactDOM.render(<AppWithRouter />, document.getElementById('root'))
registerServiceWorker();