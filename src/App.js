import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewBlog from './pages/NewBlog';
import Blog from './components/Blog';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new">New Post</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/new' element={<NewBlog />} />
        <Route path='/blog/:id' element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
