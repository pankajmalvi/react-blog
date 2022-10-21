import React from 'react'
import { Link } from 'react-router-dom'
import BlogHeading from './BlogHeading'

function BlogHeader({ id, title, like }) {

    return (
        <Link to={`/blog/${id}`}>
            <BlogHeading title={title} like={like} />
        </Link>
    )
}

export default BlogHeader