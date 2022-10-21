import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import { Spinner } from './components';

const Home = lazy(() => import('./page/home'));


function App() {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense> 
    </>
  )
}

export default App;