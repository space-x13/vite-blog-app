// importing the react route parameters
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  // making use of the react parameters to specify the url id
  const { id } = useParams();

  //fetching data for blog details for each link visit with grabbing the id
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const history = useHistory("/");

  // deleting function
  const handleClick = () => {
    // making a delete request
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <>
      <div className="blog-details">
        {/* <h2>Blog Details - {id}</h2> */}

        {/* getting a loading message if isPending is true, error if false and the blog itself with the content*/}
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {blog && (
          <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
            {/* deleting blog details */}
            <button onClick={handleClick}>Delete</button>
          </article>
        )}
      </div>
    </>
  );
};

export default BlogDetails;
