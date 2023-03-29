import ReactDOM from 'react-dom/client'
// import React from 'react'
import App from './App'
import './index.css'



// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);


ReactDOM.createRoot(document.querySelector('#root')).render(<App/>);
// ReactDOM.render(<App />, document.querySelector("#root"));
