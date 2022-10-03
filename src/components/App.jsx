//
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
//
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { Registration } from 'pages/Registration';
import { Contacts } from 'pages/Contacts';
import { NotFound } from 'pages/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;

//  <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
