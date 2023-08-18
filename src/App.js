import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Categories from './routes/Categories';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />} />
      </Route>
    </Routes>
  );
}

export default App;
