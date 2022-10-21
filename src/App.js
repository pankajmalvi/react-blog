import './App.scss';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Blog from './components/blog/Blog';
import NewBlog from './components/pages/NewBlog';
import EditBlog from './components/pages/EditBlog';

function App() {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/new">New Post</Link>
          </li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/new' element={<NewBlog />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/edit' element={<EditBlog />} />
      </Routes>
    </>
  );
}

export default App;
