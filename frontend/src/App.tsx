import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import View from './components/View';
import Edit from './components/Edit';
import Login from './components/Login'; 
import Register from './components/Register'; 
import RezervarePage from './components/Reservations';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rezervare" element={<RezervarePage />} />

        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
