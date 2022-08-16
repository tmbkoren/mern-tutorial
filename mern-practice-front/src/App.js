import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import Users from './user/pages/Users';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/places/new' element={<NewPlace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
