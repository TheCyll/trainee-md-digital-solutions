import React, { useEffect, useState } from 'react';

import { Table } from '../../components';

const R4 = () => {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();    
    setPosts(data);
    console.log(data);
  }, []);

  return (
    <div className="api-table-wrapper">
      <Table 
        fieldsNames={["id", "Título", "Contenido"]}
        keysToRender={["id", "title", "body"]}
        itemsList={ posts }
      />
    </div>
  )
}

export default R4;
