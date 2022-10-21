import React from 'react'
import BlogHeader from './BlogHeader'
import { blogs } from '../../data/blogData'

function Blogs() {


    return (
        <div className='blogs'>
            {blogs.map(blog =>
                <BlogHeader key={blog.id} id={blog.id} title={blog.title} like={blog.like} />
            )}
        </div>
    )
}

export default Blogs