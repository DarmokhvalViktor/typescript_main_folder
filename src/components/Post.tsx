import React, {FC} from 'react';

import {IPost} from "../interfaces/postInterface";

interface IProps {
    post: IPost,
    click: (id: number)=>Promise<void>
}

const Post:FC<IProps> = ({post, click}) => {
    const {id, title} = post;
    return (
        <div>
            <div> id: {id}</div>
            <div> title: {title}</div>
            <button onClick={() => click(id)}>Details</button>
        </div>
    );
};

export {Post};