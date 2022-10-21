import React, { useEffect } from 'react'
import BlogForm from '../blog/BlogForm'
import BackButton from '../BackButton'

function NewBlog() {
    useEffect(() => {
        document.title = "New Blog Post"
    }, [])


    return (
        <div className='new-blog-page'>
            <div className="header">
                <h1>React Blog</h1>
                <BackButton />
            </div>
            <h3>Create New Blog</h3>
            <BlogForm />
        </div>
    )
}

export default NewBlog