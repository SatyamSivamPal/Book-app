import * as React from 'react';
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import {Navigate } from "react-router-dom"
import { useLocation } from 'react-router-dom';

import { Spinner } from 'flowbite-react';

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext)
  const location = useLocation();

  if(loading) {
    return (
      <div className='text-center'>
        <Spinner aria-label="Center-aligned spinner example" size="xl" />
      </div>
    )
  }

  if(user)
  {
    return children;
  }

  return (
    <Navigate to="/login" state={{from: location}} replace></Navigate>
  )
  
}

export default PrivateRoute