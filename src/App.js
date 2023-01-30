
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage';
import { BrowserRouter ,Route, Router,Routes, Link} from 'react-router-dom';

import Layout from './Layout';
import Registration from './Page/Registration';
import LoginPage from './Page/LoginPage';
import Welcome from './Page/Welcome';
import Aboutus from './Aboutus';


function fuct(n)
{
  const rev = [];
for(let i = n.length-1;i>=0;i--)
{
  rev.push(n[i])
}
return rev.join('');
}

console.log(fuct('shiva'));
function App() {
  return (
    <>
    <Routes>
      <Route  path="/" element={<Layout/>} >
        <Route index element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
