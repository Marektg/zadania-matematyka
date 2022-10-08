import React from 'react'
import { Outlet } from 'react-router-dom';
import styles from './layout.modules.scss';

const Layout = () => {
    const { main } = styles;
    return (
      <>
      <div className={main}>
      
      </div>
            <Outlet />
        </>
  )
}

export default Layout