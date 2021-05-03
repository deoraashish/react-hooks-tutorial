import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return(
        <div className="ui container">
            <button onClick={() => {setShowDropdown(!showDropdown)}} >Toggle Dropdown</button>

            { showDropdown ? <Dropdown
            selectedOption={selectedOption}
            onSelectionChange={setSelectedOption} 
            options={options}
            /> : null }

            <p style={{color: selectedOption.value}} >This is colour {selectedOption.label}</p>
    </div>
    );
}

export default App;