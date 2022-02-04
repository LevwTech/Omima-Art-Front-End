import { useParams } from "react-router-dom";
function GalleryItem() {
  const { id } = useParams();
  return <div>{`Painting id is ${id}`}</div>;
}
export default GalleryItem;
