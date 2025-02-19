import { useParams } from "react-router-dom";
export function SpecificProduct() {
  const params = useParams();
  console.log(params);

  return <h1>Specific</h1>;
}
