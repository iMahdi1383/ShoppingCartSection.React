import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
return <div className="container" id="title">
    <h1>Shopping App</h1>
    <p>product #1 : book 1</p>
</div>
}

ReactDOM.render(<App/>, document.querySelector('#root'));