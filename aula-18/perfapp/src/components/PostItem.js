import React from 'react';

// import { Container } from './styles';

export default function PostItem({ post }) {
    return (
        <li>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
        </li>
    );
}
