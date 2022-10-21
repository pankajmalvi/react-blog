import React from 'react'
import Label from '../input/Label'
import TextBoxInput from '../input/TextBoxInput'
import TextInput from '../input/TextInput'

import { addBlog } from '../../data/blogData'
import { useNavigate } from 'react-router-dom'

function BlogForm() {
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        let title = e.target.title.value
        let category = e.target.category.value
        let description = e.target.description.value

        let id = addBlog(title, category, description)
        navigate('/')
        alert(`Added blog with title ${title} and id ${id}`)

    }

    return (
        <form onSubmit={handleSubmit} className='form-new-blog'>
            <div className="group-text">
                <Label name={"Title"} />
                <TextInput name={"title"} />
            </div>
            <div className="group-text">
                <Label name={"Category"} />
                <TextInput name={"category"} />
            </div>
            <div className="group-textbox">
                <Label name={"Description"} />
                <TextBoxInput name={"description"} />
            </div>
            <div className="group-btn">
                <button type="submit">Submit</button>
                <button type="reset">Cancel</button>
            </div>
        </form>
    )
}

export default BlogForm