import React from "react";
import Post from "./Post";
import "./styles.css"

const Posts = ({posts}) => {
    console.log("This is data",posts)
    return (
        <div className="posts">
            {
                posts && posts.map((post,i) => {
                    
                    return <Post key={post._id} post={post} />
                })
            }
        </div>
    )
}


export default Posts;