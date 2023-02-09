import React from "react";
import Post from "./Post.jsx";

const Posts = (props) => (
  <div className="containerposts">
    {props.items.map((item, index) => (
      <div className="card" key={index}>
        <Post item={item} remove={props.remove} updated={props.updated}/>
      </div>
    ))}
  </div>
);

export default Posts;
