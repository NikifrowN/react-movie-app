import { Route, Routes } from 'react-router-dom';
import { MainPage } from './main-page/component';
// import { Movie } from './Movie';
// import { Person } from './Person';
// import { Searched } from './searched/Searched';
// import { Top250Movies } from './Top250Movies';
// import { Top250TVs } from './Top250TVShows';
// import { Watchlist } from './Watchlist';

export const Pages = () => {
   return(
      <Routes>
         <Route path='/' element={<MainPage />} />
         {/* <Route path='/top250movies' element={<Top250Movies />} />
         <Route path='/top250TVs' element={<Top250TVs />} />
         <Route path='/watchlist' element={<Watchlist />} />
         <Route path='/search/:search' element={<Searched />} />
         <Route path='/movie/:movie' element={<Movie />} />
         <Route path='/person/:person' element={<Person />} /> */}
      </Routes> 
   )
}