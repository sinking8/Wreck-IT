import { Home } from './components/homepage/home';
import ProtectedRoute from './components/routes/ProtectedRoute';
import { Routes, Route } from 'react-router-dom';
import { UserAuthContextProvider } from './context/UserAuthContext';
import { Dashboard } from './components/userpage/Dashboard';
import LoginForm from './components/homepage/loginform';
import Signupform from './components/homepage/Signupform';
import Fpass from './components/homepage/fpass';
import Map from './components/userpage/map';

function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<Signupform />} />
        <Route path="/forgotpass" element={<Fpass />} />
        <Route exact path="/gmap" element={<Map />} />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
