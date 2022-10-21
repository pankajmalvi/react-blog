import React, { useState } from 'react'
import Label from '../input/Label'
import { editBlog, getBlog } from '../../data/blogData'
import { useNavigate } from 'react-router-dom'

function EditForm({ id }) {
    const navigate = useNavigate()
    const blog = getBlog(id)
    const [title, setTitle] = useState(blog.title)
    const [category, setCategory] = useState(blog.category)
    const [content, setContent] = useState(blog.content)

    function handleSubmit(e) {
        e.preventDefault()
        let title = e.target.title.value
        let category = e.target.category.value
        let description = e.target.description.value

        editBlog(id, title, category, description)
        navigate('/')
        alert(`Edited blog with id ${id}`)

    }

    function handleChangeTitle(e) {
        setTitle(e.target.value)
    }

    function handleChangeCategory(e) {
        setCategory(e.target.value)
    }
    function handleChangeDescription(e) {
        setContent(e.target.value)
    }


    return (
        <form onSubmit={handleSubmit} className='form-new-blog'>
            <div className="group-text">
                <Label name={"Title"} />
                <input type="text" name={"title"} id={"title"} placeholder='Enter Blog Title' value={title} onChange={handleChangeTitle} />
            </div>
            <div className="group-text">
                <Label name={"Category"} />
                <input type="text" name={"category"} id={"category"} placeholder='Enter Category' value={category} onChange={handleChangeCategory} />
            </div>
            <div className="group-textbox">
                <Label name={"Description"} />
                <input type="text" name={"description"} id={"description"} placeholder='Enter Content' value={content} onChange={handleChangeDescription} />
            </div>
            <div className="group-btn">
                <button type="submit">Submit</button>
                <button type="reset">Cancel</button>
            </div>
        </form>
    )
}

export default EditForm