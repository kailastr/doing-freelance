import { Routes, Route, Navigate } from 'react-router-dom'

//Pages
import LandingPage from "./pages/LandingPage";
import ClientIndex from './pages/ClientIndex';
import FreelancerIndex from './pages/FreelancerIndex';
import FreelancerProfile from './pages/FreelancerProfile';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/index' />} />
        <Route path='/index' element={< LandingPage />} />
        <Route path='/client' element={<ClientIndex />} />
        <Route path='/freelancer' element={<FreelancerIndex />} />
      </Routes>
    </>
  );
}

export default App;
