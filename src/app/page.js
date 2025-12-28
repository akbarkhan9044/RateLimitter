
import React from 'react'
import { getAllData } from '../lib/request'

export default async function Landing() {
    const response=await getAllData();
    console.log(response);
  return (
    <div>
      <h1>Welcome to Landing Page</h1>
      
    </div>
  )
}
