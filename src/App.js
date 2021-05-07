import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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

const options = [
    {
        label: 'Red',
        value: 'red'
    },
    {
        label: 'Green',
        value: 'green'
    },
    {
        label: 'Blue',
        value: 'blue'
    }];

const App = () => {


    return(
        <div className="ui container">
            <Translate></Translate>
    </div>
    );
}

export default App;