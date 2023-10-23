import React, {useEffect, useState} from 'react';

import {Post} from "./Post";
import {IPost} from "../interfaces/postInterface";
import {postService} from "../services/postService";
import {PostDetails} from "./PostDetails";

const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([])

    const [postDetails, setPostDetails] = useState<IPost>(null)

    const click = async (postId:number): Promise<void> => {
        const {data} = await postService.getById(postId);
        setPostDetails(data);
    }

    useEffect(() => {
        postService.getAll().then(({data}) =>setPosts(data))
    }, [])

    return (
        <div>
            {postDetails && <PostDetails postDetails={postDetails}/>}
            {posts.map(post => <Post key={post.id} post={post} click={click}/>)}
        </div>
    );
};

export {Posts};