import { useState } from "react";

// importing a history so that the added new blog data goes to the homepage by routing
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  //tracking the value stored in state when type by user
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  // history for the data to redirecting user
  const history = useHistory();

  // want a loading message when button is clicked to submit a data
  const [isLoading, setIsLoading] = useState(false);

  // submit function
  const handleSubmit = (e) => {
    // preventing the page from refreshing
    e.preventDefault();

    // creating a blog object
    const blog = { title, body, author };
    console.log(blog);
    //updating the loading state
    setIsLoading(true);

    // making a psot request to be submitted into the json data
    fetch(
      "http://localhost:8000/blogs",
      /*adding a second argument thus post request, specifying the blog content and the type of application sent to the json*/ {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(blog),
      }
    ).then(() => {
      console.log("new blog posted");

      // setting the loading to false when completed submitting
      setIsLoading(false);

      // going back to previous page
      // using the - for backwards and + forward
      //history.go(-1);

      // redirecting the user to the homepage
      history.push("/");
    });
  };

  return (
    <>
      <div className="create">
        <h2>Add New Blog</h2>
        {/* creating posts by users: (thus: controlled inputs(forms) in react)*/}
        {/* adding a submit event to the form */}
        <form onSubmit={handleSubmit}>
          {/* blog title, content and the author that wrote it */}
          <label>Title</label>
          <input
            type="text"
            required
            placeholder="blog-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Content</label>
          <textarea
            required
            placeholder="type your blog"
            rows={10}
            cols={20}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>

          <label>Author</label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
            <option value="space-x">space-x</option>
          </select>

          {!isLoading && <button>Add Blog</button>}
          {isLoading && <button disabled>Adding Blog...</button>}
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
