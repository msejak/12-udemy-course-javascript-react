import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// const text = 'Hello World!';

// const elem = (
//     <div>
//         <h2 className="text">Текст: {text}</h2>
//         <input type="text" />
//         <label htmlFor=""></label>
//         <button tabIndex={0}>Click</button>
//     </div>
// );

// const elem = React.createElement('h2', { className: 'greetings' }, 'Hello World!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // elem
    <StrictMode>
        <App />
    </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
