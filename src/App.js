import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Routes>
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
