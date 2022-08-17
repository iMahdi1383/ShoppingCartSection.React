import * as ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App.func'; //?  functional component
import App from './App.class'; //?  class component

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
