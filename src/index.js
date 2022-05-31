import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './root-module';
import { Header } from './features/header/header/component';
import { MainPage } from './pages/main-page/component';
import { Top250MoviesPage } from './pages/top250movies-page/component';
import { Top250ShowsPage } from './pages/top250shows-page/component';
import { SearchedPage } from './pages/searched-page/component';
import { MoviePage } from './pages/movie-page/component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div className='wrapper'>
          <Routes>
            <Route path='/' element={<MainPage/>} />
            <Route path='/top250movies' element={<Top250MoviesPage/>} />
            <Route path='/top250TVs' element={<Top250ShowsPage/>} />
            <Route path='/search/:search' element={<SearchedPage />} />
            <Route path='/movie/:movie' element={<MoviePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

