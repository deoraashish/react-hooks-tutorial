import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
    {
        title: "What is React?",
        content: "React is a front-end library"
    },
    {
        title: "How to use react?",
        content: "You can use react by creating components"
    },
    {
        title: "Is react better than Angular?",
        content: "You cannot compare apple with oranges"
    }
];

const App = () => {
    return(
    <div className="ui container">
        <Search />
    </div>
    );
}

export default App;