import React from 'react';
import { Route } from 'react-router';

import { Home } from '../../pages';

const PublicRoutes = () => {
  return (
    <>
      <Route exact path='/' component={Home} /> 
    </>
  )
}

export default PublicRoutes;
