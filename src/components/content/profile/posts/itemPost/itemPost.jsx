import React from 'react';
import st from './itemPostStyle.module.css';

export const ItemPost = (props) => {
    return (
        <div className={st.posts}>
            <img className={st.img} src='https://yt3.ggpht.com/ytc/AKedOLQf5MBcFSDzo2FeZIXSqafCvdRMGjW2C-0j8RpD=s900-c-k-c0x00ffffff-no-rj'></img>
            <button>X</button>
            <div className={st.text}>{props.message}</div>
            <div className={st.likes}>{props.likes} <p>likes</p></div>

            <div>
                <span>Like</span>
            </div>

        </div>
    )

}