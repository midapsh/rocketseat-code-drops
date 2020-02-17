import React, { useEffect, useState } from "react";

export default function PostList() {
    const [post, setPosts] = useState([,]);

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
            <ul>
                {post.map(post => <strong key={post.id}>{post.title}</strong>)}
            </ul>
        </>
    )
}