import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { addLike, deleteBlog } from '../../data/blogData'
import Button from '../button/Button'
import BackButton from '../BackButton'
import BlogContent from './BlogContent'

function Blog() {
    const { id } = useParams()
    return (
        <div className="blog-page">
            <div className="blog-header">
                <div>
                    <BackButton />
                    <h1>React Blog</h1>
                </div>
                <div>
                    <Link to='/' onClick={() => deleteBlog(id)}>
                        <Button name={"Delete"} />
                    </Link>
                    <Link
                    ></Link>
                    <Link to='/edit' state={id}>
                        <Button name={"Edit"} />
                    </Link>
                    <button onClick={() => addLike(id)}>Like</button>
                </div>
            </div>
            <BlogContent id={id} />
        </div>
    )
}

export default Blog