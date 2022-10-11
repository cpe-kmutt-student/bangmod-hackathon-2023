import { createContext } from 'preact';
import { useState } from 'preact/hooks';
import { NavLink } from 'react-router-dom';


type Permission = {
  
}
const PermissionContext = createContext([false , false]);

export const RegisterPage = () => {
  return (
    <div>
      <NavLink to="/">home</NavLink>
    </div>
  );
};
