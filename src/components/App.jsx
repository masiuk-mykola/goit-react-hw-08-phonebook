import { Contacts } from 'pages/Contacts';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { Registration } from 'pages/Registation';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
// import { PrivateRoute } from './Routes/PrivateRoute';
// import { PublicRoute } from './Routes/PublicRoute';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />

          <Route path="contacts" element={<Contacts />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};
