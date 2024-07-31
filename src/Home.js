import React from 'react';
import Feed from './Feed';
import { useStoreState } from 'easy-peasy';

const Home = ({ isLoading, fetchError }) => {
  const searchResults = useStoreState((state) => state.searchResults);
  const postCount = useStoreState((state) => state.postCount);
  
  return (
    <main className='text-left m-4'>
        {isLoading && <p>Loading posts...</p>}
        {!isLoading && fetchError && <p>{fetchError}</p>}
        {!isLoading && !fetchError && (searchResults.length ? <><p className='pl-2 text-sm'>{`${postCount} Blog Posts`}</p><Feed posts={searchResults} ></Feed></> : <p>No posts to display.</p>)}
    </main>
  )
}

export default Home