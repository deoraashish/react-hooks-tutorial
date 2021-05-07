// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';


const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Dutch',
        value: 'nl'
    }
];


const Translate = () => {

    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [text, setText] = useState('');

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => {setText(e.target.value)}}/>
                </div>
            </div>
            <Dropdown
            label='Select a language'
            options={options}
            selectedOption={selectedOption}
            onSelectionChange={setSelectedOption} />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert language={selectedOption} text={text} />
        </div>
    );

}

export default Translate;