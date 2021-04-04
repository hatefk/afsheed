import React from "react";
import { useFormik } from "formik";

function PostForm() {
  const postFormik = useFormik({
    initialValues: {
      name: "",
      size: 0,
      body: "",
    },
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={postFormik.handleSubmit}>
      <div className="form-row">
        <label className="post-content-header">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={postFormik.handleChange}
          value={postFormik.values.name}
        />
      </div>
      <div>
        <label className="post-content-header">Size:</label>
        <input
          id="size"
          name="size"
          type="number"
          onChange={postFormik.handleChange}
          value={postFormik.values.size}
        />
      </div>
      <div>
        <label className="post-content-header">Body:</label>
        <textarea
          id="body"
          name="body"
          type="text"
          onChange={postFormik.handleChange}
          value={postFormik.values.body}
          rows={5}
          cols={50}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default PostForm;
