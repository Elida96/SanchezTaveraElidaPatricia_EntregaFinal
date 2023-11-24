import { Outlet } from 'react-router-dom'



import { ContextProvider } from "./Components/utils/global.context";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <ContextProvider>
          <Navbar />
          <Outlet/>
          <Footer />
    </ContextProvider>
  );
}

export default App;