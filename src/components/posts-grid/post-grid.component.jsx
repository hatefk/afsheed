import React from 'react';
import PostItem from './post-item/post-item.component';

function PostGrid({postList}) {

    return (
        postList.map(p => (
            <PostItem key={p.id} id={p.id} name={p.name} size={p.size} title={p.title} body={p.body}/>
        ))
    );


}

export default PostGrid;