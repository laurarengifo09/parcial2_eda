import { useSelector } from "react-redux";


export const Lista = () => {
    const photos = useSelector((state) => state.photos.photos);
    const loading = useSelector((state) => state.photos.loading);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="lista">
        {photos.map((photo) => (
          <div key={photo.id} className="item">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <div className="text-lg font-bold mt-4">{photo.title}</div>
          </div>
        ))}
      </div>
    );
  };