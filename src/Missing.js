import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <main className='mt-4'>
        <h2 className='text-xl mb-2'>Page Not Found</h2>
        <p className='mb-1'>Well, that's disappointing.</p>
        <p className='text-blue-500 hover:underline'>
            <Link to='/' >Visit Our Homepage</Link> 
        </p>
    </main>
  )
}

export default Missing