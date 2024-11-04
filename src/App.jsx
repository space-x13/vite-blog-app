import Navbar from "./Blog_Components/Navbar";
import Home from "./Blog_Components/homePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBlog from "./Blog_Components/createBlog";
import BlogDetails from "./Blog_Components/BlogDetails";
import NotFound from "./Blog_Components/NotFound";

const App = () => {
  return (
    <>
      {/* routing */}
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            {/* react routing */}
            <Switch>
              {/* matching the / with home url with exact path method */}
              <Route exact path="/">
                <Home />
              </Route>
              {/* adding another routing component */}
              <Route path="/create">
                <CreateBlog />
              </Route>
              {/* route parameters */}
              <Route path="/blogs/:id">
                <BlogDetails />
              </Route>
              {/* * is for catching routes that is not found */}
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
