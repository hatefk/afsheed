import React from "react";

function PostItem({ id, name, size, title, body }) {
  return (
    <div className="post-item">
      <p className="post-index">#{id}</p>
      <p className="post-content-header">Name: </p>
      <p className="post-content-name-text">{name || title}</p>
      <br />
      <p className="post-content-header">Size: </p>
      <p className="post-content-size-text"> {size}</p>
      <br />
      <p className="post-content-header">Body: </p>
      <p className="post-content-body-text">{body}</p>
    </div>
  );
}

export default PostItem;
