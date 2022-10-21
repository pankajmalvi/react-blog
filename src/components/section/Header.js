import React from 'react'
import NewPostButton from '../button/NewPostButton'

function Header() {
    return (
        <div className="header">
            <h1>React Blog</h1>
            <button>
                <NewPostButton />
            </button>
        </div>
    )
}

export default Header