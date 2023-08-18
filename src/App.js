import AppBarres from "./Global/Appbar";
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from "./pages/Home";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import FooterApplication from "./Global/Footer";
import Register from "./pages/Register";


function App() {
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});  
  return (
    <ThemeProvider theme={darkTheme}>
            <CssBaseline />
    <div>
      <AppBarres />
      <div>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Register' element={<Register />}/>

        </Routes>
       </BrowserRouter>
      </div>
    </div>
    <FooterApplication />
    </ThemeProvider>
  );
}

export default App;
