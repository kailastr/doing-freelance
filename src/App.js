import { Routes, Route, Navigate } from 'react-router-dom'

//Pages
import LandingPage from "./pages/LandingPage";

import Freelancer from './layouts/Freelancer';
import FreelancerIndex from './pages/freelancer/FreelancerIndex';
import FreelancerProfile from './pages/freelancer/FreelancerProfile';
import FreelancerAppliedGig from './pages/freelancer/FreelancerAppliedGig';

import Client from './layouts/Client';
import ClientIndex from './pages/client/ClientIndex';
import ClientGigs from './pages/client/ClientGigs';
import ClientProfile from './pages/client/ClientProfile';
import ClientGigRequest from './pages/client/ClientGigRequest';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/index' />} />
        <Route path='/index' element={< LandingPage />} />

        <Route path='/freelancer' element={<Freelancer />}>
          <Route index element={<FreelancerIndex />} />
          <Route path='profile' element={<FreelancerProfile />} />
          <Route path='appliedGig' element={<FreelancerAppliedGig />} />
        </Route>

        <Route path='/client' element={<Client />}>
          <Route index element={<ClientIndex />} />
          <Route path='gigs' element={<ClientGigs />} />
          <Route path='profile' element={<ClientProfile />} />
          <Route path='gigrequest' element={<ClientGigRequest />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
