import React, { memo } from 'react';

// import { Container } from './styles';

function PostItem({ post }) {
    return (
        <li>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
        </li>
    );
}

export default memo(PostItem);
