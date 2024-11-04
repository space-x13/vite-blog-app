import { Link } from "react-router-dom";

// reusable component
// accepting the handleDelete as a prop
const BlogList = ({ blogs, head, handleDelete }) => {
  //   // accessing blogs from it
  //   const blogs = props.blogs;
  //   const heading = props.head;
  return (
    <>
      {/* passing props from parent component homepage.jsx to child component BlogList.jsx */}
      <h2>{head}</h2>
      {/* outputting blog lists */}
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          {/* wrapping a link around the h2 and p tags for each visit to the id when clicked */}
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>

          {/* Allowing users to delete blog*/}
          {/* <button onClick={() => handleDelete(blog.id)}>delete blog</button> */}
        </div>
      ))}
    </>
  );
};

export default BlogList;
