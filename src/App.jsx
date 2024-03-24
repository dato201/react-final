import './_global.css';
import { Header } from './organismes/Header/Header';
import { Aside } from "./organismes/Aside/Aside";
import { Routes, Route } from 'react-router-dom';
import { MasterTemplate } from './templates/MasterTemplate/MasterTemplate';
import { routerConfig } from './app/config/routerConfig';

const App = () => {

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
