import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from './root-module';
import { Header } from './features/header/header/component';
import { MainPage } from './pages/main-page/component';
import { Top250MoviesPage } from './pages/top250movies-page/component';
import { Top250ShowsPage } from './pages/top250shows-page/component';
import { SearchedPage } from './pages/searched-page/component';
import { MoviePage } from './pages/movie-page/component';
import { PersonPage } from './pages/perosn-page/component';
import { WatchlistPage } from './pages/watchlist-page/component';
import { PersistGate } from 'redux-persist/integration/react';
import { Footer } from './features/footer/ui/footer/component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <BrowserRouter>
          <Header />
          <main className='wrapper'>
            <Routes>
              <Route path='/react-movie-app/' element={<MainPage/>} />
              <Route path='/react-movie-app/top250movies' element={<Top250MoviesPage/>} />
              <Route path='/react-movie-app/top250TVs' element={<Top250ShowsPage/>} />
              <Route path='/react-movie-app/search/:search' element={<SearchedPage />} />
              <Route path='/react-movie-app/movie/:movie' element={<MoviePage />} />
              <Route path='/react-movie-app/person/:person' element={<PersonPage/>} />
              <Route path='/react-movie-app/watchlist' element={<WatchlistPage/>} />
            </Routes>
          </main>
          <Footer/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

