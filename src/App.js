import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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

    const [selected, setSelected] = useState(options[0]);

    return(
        <div className="ui container">
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search/>
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                options={options}
                label="Select a colour" 
                selectedOption={selected}
                onSelectionChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
    </div>
    );
}

export default App;