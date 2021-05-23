import React from 'react';
import { Route } from 'react-router';

import { Header } from '../../components';

import { Home, R2, R3, R4 } from '../../pages';

import './styles.css';

const PublicRoutes = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <main className="content-wrapper">
        <Route exact path='/' component={Home} /> 
        <Route exact path='/r2' component={R2} /> 
        <Route exact path='/r3' component={R3} /> 
        <Route exact path='/r4' component={R4} /> 
      </main>
    </div>
  )
}

export default PublicRoutes;
