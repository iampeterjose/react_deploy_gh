import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  format } from 'date-fns';
import { useStoreState, useStoreActions } from 'easy-peasy';

const NewPost = () => {
  const history = useNavigate();

  const posts = useStoreState((state) => state.posts);
  const postTitle = useStoreState((state) => state.postTitle);
  const postBody = useStoreState((state) => state.postBody);

  const savePost = useStoreActions((actions) => actions.savePost);
  const setPostTitle = useStoreActions((actions) => actions.setPostTitle);
  const setPostBody = useStoreActions((actions) => actions.setPostBody);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {id, title:postTitle, datetime, body:postBody};
    
    savePost(newPost);
    history('/');
  }
  
  return (
    <main className='text-left m-4'>
        <h2 className='text-xl mb-4'>New Post</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="postTitle">Title: </label>
            <input 
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2'
                type="text" 
                id="postTitle"
                required
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
            />
            <label className='block' htmlFor="postBody">Post: </label>
            <textarea cols="60" rows="10"
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                id="postBody"
                value={postBody}
                required
                onChange={(e) => setPostBody(e.target.value)}
            />
            <button className='focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-red-blue mt-4' type="submit">Submit</button>
        </form>
    </main>
  )
}

export default NewPost