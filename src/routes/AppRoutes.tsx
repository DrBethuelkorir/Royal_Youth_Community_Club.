// ./src/routes/AppRoutes.tsx
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import ProtectedRoute from './ProtectedRoute';
import MembersPage from './pages/MembersPage';
import About from '../Components/Sections/About';
import LoginPage from '../Pages/Login';
import HomePage from '../Pages/LandingPage';
import ContactPage from '../Pages/Contact';
import RegisterPage from '../Pages/Register';
const AppRoutes = () => {
  return (
    <Routes>
      {/* Public pages — share Header + Footer */}
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path= "/login" element ={<LoginPage />} />
        <Route path = "/register" element = {<RegisterPage />} />
      </Route>

      {/* Protected pages — also share Header + Footer */}
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route
            path="/dashboard"
            element={
              <div className="bg-primary-950 px-6 py-20 text-white">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-white/70 mt-2">Welcome back, member.</p>
              </div>
            }
          />
        </Route>
      </Route>

      {/* Catch-all → home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;