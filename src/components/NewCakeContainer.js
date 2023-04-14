import { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  console.log(number);
  return (
    <div className="App">
      <h2>Number of cakes - {props.numberOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button className="mt-2" onClick={() => props.buyCake(number)}>
        Buy {number} Cake
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes
  };
};

const mapActionToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number))
  };
};

export default connect(mapStateToProps, mapActionToProps)(NewCakeContainer);
