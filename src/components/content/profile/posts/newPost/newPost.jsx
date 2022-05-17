import React from 'react';
import st from './newPostStyle.module.css';

export const NewPost = () => {
    return (
        <div className={st.newPost}>New post
            <textarea></textarea>
            <button>Create</button>
        </div>
    )
}
