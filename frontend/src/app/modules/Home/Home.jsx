import React from 'react';
import { NavBar } from '../Navbar/NavBar';
import { Routes, Route } from 'react-router-dom';
import { Orders } from '../Orders/Orders';

export const Home = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Orders />} />
      </Routes>
    </>
  );
};
