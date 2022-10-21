import React from 'react'

function BlogHeading({ title, like }) {
    return (
        <span className='blog-header'>
            <h2>{title}</h2>
            <small>{like} <span>&hearts;</span> </small>
        </span>
    )
}

export default BlogHeading