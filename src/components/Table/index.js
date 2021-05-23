import React from 'react';

import './styles.css';

const Table = ({ itemsList, keysToRender, fieldsNames }) => {
  const thereAreItems = itemsList.length !== 0

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead className="table-head">
          <tr>
            {
              fieldsNames.map((key, index) => (
                <th
                  key={index + key}
                  className="head-cell"  
                >
                  {key}
                </th>
              ))
            }        
          </tr>
        </thead>
        <tbody>
          {
            !thereAreItems
              ? 
              <tr className="table-row">
                {
                  keysToRender.map((key, index) => (
                    <td
                      key={key + index}
                      data-label={key}
                      className="body-cell"
                    >
                      -
                    </td>
                  ))
                }        
              </tr>
              : 
              itemsList.map((item) => (
                <tr className="table-row">
                  {
                    keysToRender.map((key, index) => {                      
                      return (
                        <td
                          key={index + key}
                          data-label={fieldsNames[index]}
                          className="body-cell"
                        >
                          {
                            item[key] || '-'
                          }                            
                        </td>
                      )
                    })
                  }      
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table;
