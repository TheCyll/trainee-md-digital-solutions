import React from 'react';
import { Redirect } from 'react-router';

import PublicRoutes from './PublicRoutes';

const Routes = () => {
  return (
    <>
      <PublicRoutes />
      <Redirect ro='/' />
    </>
  )
}

export default Routes;
