'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sty from './page.module.css'

const CrossoutWordsTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate fetching data from MongoDB-like API
    axios.get('http://localhost:9000/route/todo') // Replace with your actual API endpoint
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleCheckboxChange = (itemId) => {
    setData(prevData => {
      return prevData.map(item => {
        if (item._id === itemId) {
          return { ...item, isChecked: !item.isChecked };
        }
        return item;
      });
    });
  };

  return (
    <div className={sty.sample}>

   
    <table className={sty.tabl} >
      <thead className={sty.th}>
        <tr>
          <th>Checkbox</th>
          <th>Word</th>
        </tr>
      </thead>
      <tbody className={sty.tr}>
        {data.map(item => (
          <tr key={item._id}>
            <td>
              <label className={sty.th}>
                <input
                  type="checkbox"
                  checked={item.isChecked || false}
                  onChange={() => handleCheckboxChange(item._id)}
                />
                Cross out
              </label>
            </td>
            <td style={{ textDecoration: item.isChecked ? 'line-through' : 'none' }}>
              {item.word}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default CrossoutWordsTable;
