import axios from 'axios';
import React, { useState, useEffect } from 'react';


const Search = () => {

    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);

    console.log(results);

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
            });

            setResults(data.query.search);
        };

        if (term) {
            search();
        }


    }, [term]);

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search term</label>
                    <input
                    value={term}
                    onChange={e => {setTerm(e.target.value)}}
                    className="input" 
                    />
                </div>
            </div>
        </div>
    );
}

export default Search;