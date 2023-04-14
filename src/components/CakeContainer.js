import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  return (
    <div className="App">
      <h2>Number of cakes - {props.numberOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
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
    buyCake: () => dispatch(buyCake())
  };
};

export default connect(mapStateToProps, mapActionToProps)(CakeContainer);
