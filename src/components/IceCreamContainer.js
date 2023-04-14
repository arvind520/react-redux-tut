import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";
class IceCreamContainer extends React.Component {
  render() {
    return (
      <div>
        <h2>Number of IceCream - {this.props.numOfIceCreams}</h2>
        <button onClick={this.props.buyIceCream}>Buy Ice-cream</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams
  };
};

const mapActionToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  };
};

export default connect(mapStateToProps, mapActionToProps)(IceCreamContainer);
