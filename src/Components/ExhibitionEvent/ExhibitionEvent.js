import { useParams } from "react-router-dom";
function ExhibitionEvent() {
  const { id } = useParams();
  return <div>{`Exhibition id is ${id}`}</div>;
}
export default ExhibitionEvent;
