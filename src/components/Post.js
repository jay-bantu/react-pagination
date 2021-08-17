import React from 'react'

export const Post = ({posts, loading}) => {

    if(loading){
        return <h2>loading...</h2>
    }
    return (
        <div>

            {posts.map(post=>(
                <h1 key={post.id}>{post.name}</h1>
            ))}
            
        </div>
    )
}
