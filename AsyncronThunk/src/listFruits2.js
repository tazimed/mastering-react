import { useSelector } from "react-redux";
import "./App.css";
export default function ListFruits2() {
  const fruits = useSelector((data) => data.fruits);
  return (
    <div className="fruits">
      <h5>Composant liste fruits 2</h5>
      {fruits.length > 0 ? (
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      ) : (
        <p>no fruit available , please add some fruits</p>
      )}
    </div>
  );
}
