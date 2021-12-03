import './PhotoCard.module.css';

function index({ photo }) {
  return (
    <div className="image-card">
      <img alt={photo.author} src={photo.download_url} />
      <p>{photo.author}</p>
    </div>
  );
}

export default index;
