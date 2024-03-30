import './_global.css';
import { Header } from './organismes/Header/Header';
import { Aside } from "./organismes/Aside/Aside";
import { Routes, Route } from 'react-router-dom';
import { MasterTemplate } from './templates/MasterTemplate/MasterTemplate';
import { routerConfig } from './app/config/routerConfig';
import { useDispatch } from 'react-redux';
import { $api } from './app/config/api';
import { userActions } from './app/store/model/slices/userSlice';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();

  const checkUser = async () => {
    try { 
      const response = await $api.get('/profile');

      if(response.status === 200) {
        dispatch(userActions.setUser(response.data));
      }
    }
    
    catch(e) {
      console.error(e.message);
    }
  }

  useEffect(() => {
    checkUser();
  }, [checkUser])
  const renderWithWrapper = (route) => {
    const Template = () => {
      return (
        <MasterTemplate Header={route.header && <><Header/> <Aside/> </>}>
          {<route.element />}
        </MasterTemplate>
      )
    }

    return (
      <Route key={route.id} path={route.path} element={<Template />} />
    )
  }

  return (
    <Routes>
      {routerConfig.map(renderWithWrapper)}
    </Routes>
  );
}

export default App;
