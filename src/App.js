import useInfiniteScroll from './hooks/useInfiniteScroll';
import useFetch from './hooks/useFetch';

import Loader from './components/Loader';
import PhotoCard from './components/PhotoCard';

import './App.css';

function App() {
  const { loadMoreRef, page } = useInfiniteScroll();
  const { loading, photos } = useFetch(page);

  return (
    <div className="App">
      <header>
        <h1>Photo Gallery</h1>
      </header>
      <div className="container">
        {photos?.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
      <div ref={loadMoreRef}>{loading && <Loader />}</div>
    </div>
  );
}

export default App;
