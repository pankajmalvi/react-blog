import React from 'react'

function TextBoxInput({ name }) {
    return (
        <textarea name={name} id={name} cols="30" rows="10" placeholder="Enter Blog Content"></textarea>
    )
}

export default TextBoxInput