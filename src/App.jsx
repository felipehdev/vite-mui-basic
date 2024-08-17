import "./App.css";
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ResponsiveNavBar from './components/ResponsiveNavbar';
import { Routes, Route } from 'react-router-dom';
import Item1 from "./pages/Item1";
import Item2 from "./pages/Item2";
import Item3 from "./pages/Item3";



function App() {
  return (
    <>
    <CssBaseline />
     
      <body>
      <ResponsiveNavBar/>   
      <Routes>
        <Route path='/item1' element={<Item1/>} />
        <Route path='/item2' element={<Item2/>} />
        <Route path='/item3' element={<Item3/>} />

      </Routes>
     
      </body>
    </>
  );
}

export default App;
