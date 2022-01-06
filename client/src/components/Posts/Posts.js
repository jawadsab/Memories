import React from "react";
import Post from "./Post";
import "./styles.css"

const Posts = ({posts}) => {
    
    return (
        <div className="posts">
            {
                posts && posts.map((post,i) => {
                    console.log(post)
                    return <Post key={i} />
                })
            }
        </div>
    )
}


export default Posts;