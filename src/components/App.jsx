import { DesktopApp } from 'pages/DesktopApp';
import { Contacts } from 'pages/Contacts';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { Registration } from 'pages/Registation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useGetUserQuery } from 'redux/auth';
import { getToken } from 'redux/authSelectors';
import { setCurrentUser } from 'redux/authSlice';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';
import { NotFound } from './NotFound';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken);

  const mockQuery = '';
  const { data } = useGetUserQuery(mockQuery, { skip: !token });

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
          <Route path="*" element={<NotFound />} />

          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="app"
            element={
              <PrivateRoute>
                <DesktopApp />
              </PrivateRoute>
            }
          />
          <Route
            path="registration"
            element={
              <PublicRoute restricted>
                <Registration />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <Login />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
