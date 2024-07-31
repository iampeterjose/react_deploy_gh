import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';


const PostPage = () => {
    const {id} = useParams();
    const history = useNavigate();
    const deletePost = useStoreActions((actions) => actions.deletePost);
    const getPostById  = useStoreState((state) => state.getPostById);
    const post = getPostById(id);

    const handleDelete = (id) => {
        deletePost(id);
        history('/');
    }

    return (
        <main>
            <article className='text-left mb-2 p-4'>
                {post && 
                    <>
                        <h2 className='text-xl mb-1'>{post.title}</h2>
                        <p className='text-sm text-blue-500 mb-2'>{post.datetime}</p>
                        <p>{post.body}</p>
                        <Link to={`/edit/${post.id}`}>
                            <button className='focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-red-blue mt-4'>Edit Post</button>
                        </Link>
                        <button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-4' onClick={() => handleDelete(post.id)} >
                            Delete Post
                        </button>
                    </>
                }
                { !post &&
                    <>
                        <h2 className='text-xl mb-2'>Post Not Found</h2>
                        <p className='mb-1'>Well, that's disappointing.</p>
                        <p className='text-blue-500 hover:underline'>
                            <Link to='/' >Visit Our Homepage</Link> 
                        </p>
                    </>
                }

            </article>
        </main>
    )
}

export default PostPage