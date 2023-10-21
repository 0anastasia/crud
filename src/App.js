import './App.css';
import { Route, Routes, Link } from 'react-router-dom'
import AddPost from "./components/addPost";
import PostsList from "./components/postList";
import Post from "./components/post";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
      <>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
              <a href="/notes" className="navbar-brand">
                  Notes app
              </a>
              <div className="navbar-nav mr-auto">
                  <li className="nav-item">
                      <Link to={"/notes"} className="nav-link">
                          Notes
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to={"/add"} className="nav-link">
                          Add
                      </Link>
                  </li>
              </div>
          </nav>
          <div className="container mt-3">
              <Routes>
                  <Route path="/" element={<PostsList/>} />
                  <Route path="/notes" element={<PostsList/>} />
                  <Route path="/add" element={<AddPost/>} />
                  <Route path="/notes/:id" element={<Post/>} />
              </Routes>
          </div>
      </>
  );
}

export default App;