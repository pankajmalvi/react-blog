import React, { useEffect } from 'react'
import { getBlog } from '../../data/blogData';

function BlogContent({ id }) {
    const blog = getBlog(id)
    const { title, content } = blog

    useEffect(() => {
        document.title = title
    },)

    return (
        <div className='blog-content'>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default BlogContent