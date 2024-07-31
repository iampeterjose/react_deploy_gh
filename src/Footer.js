import React from 'react'

const Footer = () => {
    const today = new Date();
    return (
        <footer className='static bg-black bottom-0 mt-10 p-4 text-white text-center'>
            <p>Copyright &copy; {today.getFullYear()}</p>
        </footer>
    )
}

export default Footer