import { Container } from 'react-bootstrap';
import { Outlet,useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';



const App = () => {
  const location = useLocation();
  return (
    <>
      <Header />
        <main className='py-3'>
          <Container>
            <Outlet key={location.pathname} />
          </Container>
        </main>
      <Footer />
    </>
    
  );
};

export default App;