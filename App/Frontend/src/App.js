import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [ items, setItems ] = useState([]);
  const [ itemText, setItemText ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ response, setResponse ] = useState(null);

  useEffect(() => {
      setLoading(true);
      axios.get('http://localhost:8080/items')
      .then((response) => {
        setItems(response.data);
        setLoading(false);
      });
  }, [response]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:8080/items', {
      itemText
    })
    .then((res) => {
      setResponse(res);
    });
  };

  const handleChange = (event) => {
    setItemText(event.target.value);
  };

  return (
    <>
      <p>Enter list item to append to list: </p>

      <form onSubmit={e => handleSubmit(e)}>
        <input type='text' value={itemText} onChange={e => handleChange(e)}/>
        <input type='submit' value='Add Item'/>
      </form>
      {
      loading ?
        <p>Loading...</p>
        :
        (items ? 
          <ul>
          {
            items.map((item) => {
              return <li key={item.id}>{item.item}</li>
            })
          }
          </ul>
          : 
          <p>No items found.</p>
          )
    }
    </>
  );
}

export default App;
