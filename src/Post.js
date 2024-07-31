import React from 'react';
import {Link} from 'react-router-dom';

const Post = ({post}) => {
  return (
    <article className='border-gray-400 border-b-2 mb-2 p-2 hover:bg-gray-200 rounded'>
        <Link to={`/post/${post.id}`} >
            <h2 className='text-lg mb-1'>{post.title}</h2>
            <p className='text-sm text-blue-500'>{post.datetime}</p>
        </Link>
        <p>
            {(post.body).length <= 25 
                ?  post.body
                :  `${(post.body).slice(0,25)}...`
            }
        </p>
    </article>
  )
}

export default Post