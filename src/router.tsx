import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import DashboardOne from './pages/DashboardOne';
import DashboardTwo from './pages/DashboardTwo';
import Login from './pages/Login';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard-one" element={<DashboardOne />} />
        <Route path="/dashboard-two" element={<DashboardTwo />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
