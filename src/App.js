import { Routes, Route, Navigate } from 'react-router-dom'

//Pages
import LandingPage from "./pages/LandingPage";
import ClientIndex from './pages/client/ClientIndex';
import Freelancer from './layouts/Freelancer';
import FreelancerIndex from './pages/freelancer/FreelancerIndex';
import FreelancerProfile from './pages/freelancer/FreelancerProfile';
import FreelancerAppliedGig from './pages/freelancer/FreelancerAppliedGig';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/index' />} />
        <Route path='/index' element={< LandingPage />} />
        <Route path='/client' element={<ClientIndex />} />
        <Route path='/freelancer' element={<Freelancer />}>
          <Route index element={<FreelancerIndex />} />
          <Route path='profile' element={<FreelancerProfile />} />
          <Route path='appliedGig' element={<FreelancerAppliedGig />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
