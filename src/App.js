import styles from './App.module.scss';
import {Link, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home/Index';
import AboutUs from './Pages/AboutUS/Index';
import SignIn from './Pages/SignIn/Index';
import ErrorPage from './Pages/ErrorPage/Index';

function App() {
 
  return (
    <div className={styles["App"]}>
      <nav className={styles['header']}>
          <div>
          <Link to='/' className={styles['link2']}>Home</Link>
          </div>
          <div>
          <Link to='/aboutus' className={styles['link2']}>AboutUS</Link>  
          <Link to='/sign' className={styles['link2']}>SignIn</Link>  
          </div>
      </nav>
      <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/aboutus' element={<AboutUs />}></Route>
      <Route path='/sign' element={<SignIn />}></Route>
      <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
