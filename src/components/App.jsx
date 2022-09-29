import { Contacts } from 'pages/Contacts';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { Registration } from 'pages/Registation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useGetUserQuery } from 'redux/auth';
import { setCurrentUser } from 'redux/authSlice';
import { Layout } from './Layout/Layout';

export const App = () => {
  const dispatch = useDispatch();

  const { data } = useGetUserQuery();

  useEffect(() => {
    if (!data) {
      return;
    }
    dispatch(setCurrentUser(data));
  }, [data, dispatch]);

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
