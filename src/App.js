import { Routes, Route, Navigate } from 'react-router-dom'

//components
import LandingPage from "./pages/LandingPage";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/index' />} />
        <Route path='/index' element={< LandingPage />} />
        <Route path='/' element={<></>} />
      </Routes>
    </>
  );
}

export default App;
