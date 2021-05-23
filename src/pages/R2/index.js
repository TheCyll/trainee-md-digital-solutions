import React from 'react';

import { Table } from '../../components';

import './styles.css';

const R2 = () => {

  const fieldsNames = [
    "Número",    
    "Título",
    "Contenido",
  ];

  const keysToRender = [
    "number",
    "title",    
    "content",
  ];

  const content = [
    {
      number: 1,
      title: "Título 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id posuere quam. Proin id urna metus.",
    },    
    {
      number: 2,
      title: "Título 2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id posuere quam. Proin id urna metus.",
    },    
    {
      number: 3,
      title: "Título 3",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id posuere quam. Proin id urna metus.",
    },    
    {
      number: 4,
      title: "Título 4",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id posuere quam. Proin id urna metus.",
    },    
    {
      number: 5,
      title: "Título 5",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id posuere quam. Proin id urna metus.",
    },    
    {
      number: 6,
      title: "Título 6",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id posuere quam. Proin id urna metus.",
    },    
    {
      number: 7,
      title: "Título 7",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id posuere quam. Proin id urna metus.",
    }    
  ]

  return (
    <section className="R2-wrapper" >
      <Table 
        fieldsNames={ fieldsNames }
        keysToRender={ keysToRender }
        itemsList={ content }
      />      
    </section>
  )
}

export default R2;
