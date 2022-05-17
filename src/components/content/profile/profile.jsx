import React from 'react';
import { ItemPost } from './posts/itemPost/itemPost';
import { NewPost } from './posts/newPost/newPost';
import st from './profileStyle.module.css';
import { Description } from './userInfo/description/description';
import { ProfileHeadPic } from './userInfo/profileHeader/profileHeader';
import { ProfilePic } from './userInfo/profilePic/profilePic';

const posts = [
    {id: 1, message: '1 post', likes: 13},
    {id: 2, message: '2 post', likes: 9},
    {id: 3, message: '3 post', likes: 12},
    {id: 4, message: '4 post', likes: 29},
]

export const Profile = () => {
    return (
        <div>
            <div>
                <ProfileHeadPic />
            </div>
            <div>
                <ProfilePic />
                <Description />
            </div>
            <div className={st.posts}>
                <NewPost />
                {
                    posts.map(post => (
                        <ItemPost key={post.id} message={post.message} likes= {post.likes}/>
                    ))
                }
            </div>
        </div>
    )
}

