
import HomePage from './pages/HomePage'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from './components/Login';
import Profile from './components/Profile';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import {AuthProvider} from './components/Auth'

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <NavBar />
    <Routes>
    <Route path="/" element={ <HomePage />} />
    <Route path="/Login" element={ <Login />} />
    <Route path="/Profile" element={ <Profile />} />

    </Routes>
       <Footer />
       </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
