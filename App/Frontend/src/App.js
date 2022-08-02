import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import './App.css';

const App = () => {
  const [ items, setItems ] = useState([]);
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


  return (
    <div id="main">
      <p>Enter list item to append to list: </p>

      <Form id="item-form" setResponse={setResponse}/>
      {
      loading ?
        <p>Loading...</p>
        :
        (items ? 
          <ul>
          {
            items.map((item) => {
              return <li key={item.id} class="list-item">{item.item}</li>
            })
          }
          </ul>
          : 
          <p>No items found.</p>
          )
    }
    </div>
  );
}

export default App;
