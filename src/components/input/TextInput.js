import React from 'react'

function TextInput({ value, name }) {
    return (

        <div>
            <input type="text" value={value} name={name} id={name} placeholder={`Enter Blog ${name}`} />

        </div>
    )
}

export default TextInput