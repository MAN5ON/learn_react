import React from 'react';
import { ItemPost } from './posts/itemPost/itemPost';
import { NewPost } from './posts/newPost/newPost';
import st from './profileStyle.module.css';
import { Description } from './userInfo/description/description';
import { ProfileHeadPic } from './userInfo/profileHeader/profileHeader';
import { ProfilePic } from './userInfo/profilePic/profilePic';

export const Profile = (posts) => {
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
                        <ItemPost key={post.id} message={post.message} likes={post.likes} />
                    ))
                }
            </div>
        </div>
    )
}
