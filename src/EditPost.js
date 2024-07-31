import React from 'react';
import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { useStoreState, useStoreActions } from 'easy-peasy';

const EditPost = () => {
    const history = useNavigate();
    const {id} = useParams();

    const editTitle = useStoreState((state) => state.editTitle);
    const editBody = useStoreState((state) => state.editBody);
  
    const editPost = useStoreActions((actions) => actions.editPost);
    const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
    const setEditBody = useStoreActions((actions) => actions.setEditBody);

    const getPostById  = useStoreState((state) => state.getPostById);
    const post = getPostById(id);

    useEffect(() => {
        if(post) {
            setEditTitle(post.title);
            setEditBody(post.body);

        }
    }, [post, setEditTitle, setEditBody]);

    const handleEdit = (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const updatedPost = {id, title:editTitle, datetime, body:editBody};
        editPost(updatedPost);
        history(`/post/${id}`);
    }


    return (
        <main className='text-left m-4'>
            {editTitle && 
            <>
        <h2 className='text-xl mb-4'>Edit Post</h2>
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="postTitle">Title: </label>
            <input 
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2'
                type="text" 
                id="postTitle"
                required
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
            />
            <label className='block' htmlFor="postBody">Post: </label>
            <textarea cols="60" rows="10"
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                id="postBody"
                value={editBody}
                required
                onChange={(e) => setEditBody(e.target.value)}
            />
            <button className='focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-red-blue mt-4' type="button" onClick={() => handleEdit(post.id)}>Save Changes</button>
            <Link to={`/post/${post.id}`}>
                <button className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-red-blue mt-4'>Cancel</button>
            </Link>
        </form>
        </>
        }
        {!editTitle &&
            <>
                <h2 className='text-xl mb-2'>Post Not Found</h2>
                <p className='mb-1'>Well, that's disappointing.</p>
                <p className='text-blue-500 hover:underline'>
                    <Link to='/' >Visit Our Homepage</Link> 
                </p>
            </>
        }
    </main>
    )
}

export default EditPost