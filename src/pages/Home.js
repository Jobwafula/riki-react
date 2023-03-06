import React from 'react'
import Navbar from '../components/Navbar';
import ApplyLogin from '../components/ApplyLogin';
import Content from '../components/Content';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
        <Navbar /> 
        <ApplyLogin />
        <Content />
        <Footer />   
    </div>
  )
}
