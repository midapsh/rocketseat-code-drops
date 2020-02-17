import React, { useEffect, useState } from "react";

import PostItem from "./PostItem";

export default function PostList() {
    const [post, setPosts] = useState([,]);
    const [newPost, setNewPost] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                response.json().then(data => {
                    setPosts(data);
                });
            });
    }, []);

    return (
        <>
            <input onChange={e => setNewPost(e.target.value)} />

            <ul>
                {post.map(post => <PostItem key={post.id} post={post} />)}
            </ul>
        </>
    )
}