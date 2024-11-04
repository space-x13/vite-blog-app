import BlogList from "./Blog-List";
import useFetch from "./useFetch";

const Home = () => {
  // custom hook 
  const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

  // useState hook
  // setting the
  //const [blogs, setBlog] = useState(null);
  //([
  //   {
  //     title: "My New Website",
  //     body: "lorem ipsum...",
  //     author: "mario",
  //     id: 1,
  //   },
  //   {
  //     title: "Welcome Party",
  //     body: "lorem ipsum...",
  //     author: "yoshi",
  //     id: 2,
  //   },
  //   {
  //     title: "Web Dev Top Tips",
  //     body: "lorem ipsum...",
  //     author: "mario",
  //     id: 3,
  //   },
  // ]);

  // another usestate
  // const [name, setName] = useState("mario");

  // updating the usestate hook by deleting a blog
  // defining the handleDelete method and passing the blog id as an argument
  // const handleDelete = (id) => {
  //   // using the filter method to update the setBlogs for removing an item
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlog(newBlogs);
  // };
  return (
    <>
      <div className="home">
        {/* props of the Blog list component from parent component Homepage.jsx*/}
        {/* passing the handleDelete function as a props */}
        {/* { blogs && <BlogList blogs={blogs} head="All Blogs!" handleDelete={handleDelete} /> } */}

        {/* outputing the error in a conditional template with and operator */}
        {error && <div>{error}</div>}

        {/* loading message to show for fetching data */}
        {isPending && <div>Loading...</div>}

        {blogs && <BlogList blogs={blogs} head="All Blogs!" />}
        {/* filtering the mario blog for display after all the blogs */}
        {/* conditional templating in react with the && operator */}
        {/*blogs && (
          <BlogList
            blogs={blogs}
            //blogs={blogs.filter((blog) => blog.author === "mario")}
            head="Mario's Blogs!"
          />
        )*/}

        {/* <button onClick={() => setName("luigi")}>change name</button>
        <p>{name}</p> */}
      </div>
    </>
  );
};

export default Home;
