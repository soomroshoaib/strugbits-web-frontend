
// import Contact from "./component/Contact/Contact";

// import { Navbar } from "./component/Navbar/Navbar";
// import Intro from "./component/intro/Intro";
// import Skills from "./component/Skills/Skills";
// import Work from "./component/Work/Work";
// import Fotter from "./component/footer/Fotter";




// function App() {
//   return (
//     <div>
   {/* <Navbar />
   <Intro />
   <Skills />
   <Work />
   <Contact />
   <Fotter />  */}
//    <h1>soomro</h1>
//     </div>
//   );
// }

// export default App;

import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Error from './components/Error';
// import Chat from './components/Chat-App/Chat';
import "./App.css"

// import Join from './components/Chat-App/Join';

function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route  path='/' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/dash' element={<Dashboard />} />
        <Route path='*' element={<Error />} />
       
      </Routes>
      
      
    </div>
  );
}

export default App;