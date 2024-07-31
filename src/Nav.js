import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {  useStoreState, useStoreActions } from 'easy-peasy';

const Nav = () => {
    const posts = useStoreState((state) => state.posts);
    const search = useStoreState((state) => state.search);
    const setSearch = useStoreActions((actions) => actions.setSearch);
    const setSearchResults = useStoreActions((actions) => actions.setSearchResults);

    useEffect (() =>{
        const filteredResults = posts.filter(post => 
        (post.body).toLowerCase().includes(search.toLowerCase())
        || (post.title).toLowerCase().includes(search.toLowerCase()));

        setSearchResults(filteredResults.reverse());
    },[posts, search, setSearchResults])

  return (
    <nav className='bg-gray-800 text-white p-4 flex flex-col md:flex-row items-start md:items-center justify-between'>
        <div className='w-full md:max-w-xs'>
            <form onSubmit={(e) => e.preventDefault()}>
                <label className='hidden' htmlFor="search">Search Posts</label>
                <input 
                    className='p-2 rounded-md border border-gray-600 bg-gray-700 text-white w-full '
                    type="text" 
                    id="search"
                    placeholder="Search Posts"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
        </div>
            
        <div className='m-2'>
            <ul className='flex flex-row flex-wrap space-x-8'>
                <li className='hover:text-gray-400'><Link to="/">Home</Link></li>
                <li className='hover:text-gray-400'><Link to="/post">Post</Link></li>
                <li className='hover:text-gray-400'><Link to="/about">About</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav