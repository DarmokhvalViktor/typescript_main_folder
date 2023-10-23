import React, {FC} from 'react';

import {IPost} from "../interfaces/postInterface";
interface IProps {
    postDetails: IPost,

}
const PostDetails: FC<IProps> = ({postDetails}) => {
    const {id, userId, title, body} = postDetails;
    return (
        <div>
            <div> id: {id}</div>
            <div> userId: {userId}</div>
            <div> title: {title}</div>
            <div> body: {body}</div>
        </div>
    );
};

export {PostDetails};