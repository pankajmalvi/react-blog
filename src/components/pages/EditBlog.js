import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getBlog } from '../../data/blogData'
import BackButton from '../BackButton'
import EditForm from '../blog/EditForm'

function EditBlog() {
    const location = useLocation()
    const id = location.state

    useEffect(() => {
        document.title = "Edit Blog"
    }, [])


    return (
        <div className='new-blog-page'>
            <div className="header">
                <h1>React Blog</h1>
                <BackButton />
            </div>
            <h3>Edit Blog {getBlog(id).title}</h3>
            <EditForm id={id} />
        </div>
    )
}

export default EditBlog