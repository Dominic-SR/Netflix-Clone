import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import requests from './requests';
import Row from './Row';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Banner />
      <Row title="NETFLIX ORGINALS" 
      dataurl={requests.fettchNetflixOrginals}
      isLargeRow={true}
      />
      <Row title="Trending Now" dataurl={requests.fettchTrending}/>
      <Row title="Top Rated" dataurl={requests.fettchTopRated}/>
      <Row title="Actoion Movies" dataurl={requests.fettchActionMovies}/>
      <Row title="Comedy Movies" dataurl={requests.fettchComedyMovies}/>
      <Row title="Horror Movies" dataurl={requests.fettchHorrorMovies}/>
      <Row title="Romance Movies" dataurl={requests.fettchRomanceMovies}/>
      <Row title="Documentaries" dataurl={requests.fettchDocumentaries}/>
    </div>

  );
}

export default App;
