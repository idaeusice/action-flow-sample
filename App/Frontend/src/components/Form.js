import React, { useState } from 'react';
import axios from 'axios';

const Form = (props) => {
    const [ itemText, setItemText ] = useState('');

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:8080/items', {
            itemText
        })
        .then((res) => {
            props.setResponse(res);
        });
    };

    const handleChange = (event) => {
        setItemText(event.target.value);
    };

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input type='text' value={itemText} onChange={e => handleChange(e)}/>
            <input type='submit' value='Add Item'/>
        </form>
    )
}
export default Form;