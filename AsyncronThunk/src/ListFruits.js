import { useSelector } from "react-redux";
import { connect } from "react-redux";
import "./ListFruits.css";
function ListFruits(props) {
  const fruits = useSelector((data) => data.fruits);
  return (
    <div className="fruits">
      <h5>Composant liste fruits</h5>
      <ul>
        {props.fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
function mapStateToProps(state) {
  return { fruits: state.fruits };
}
export default connect(mapStateToProps, null)(ListFruits);
