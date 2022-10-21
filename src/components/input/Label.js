import React from 'react'

function Label({ name }) {
    return (
        <label className='form-label' htmlFor={name}>{name}</label>
    )
}

export default Label