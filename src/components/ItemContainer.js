import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function HooksCakeContainer(props) {
  console.log(props);
  return (
    <div>
      <h3>{props.item}</h3>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const item = ownProps.cake
    ? "Number of Cake: " + state.cake.numberOfCakes
    : "Number of Ice Cream: " + state.iceCream.numOfIceCreams;
  return {
    item
  };
};

const mapActionToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction
  };
};

export default connect(mapStateToProps)(HooksCakeContainer);
