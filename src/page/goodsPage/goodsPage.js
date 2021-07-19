import React from "react";
import "./goodsPage.css";
export default class goods extends React.Component {
  state = {};
  render() {
    return <div id="goodsPage">商品</div>;
  }
  componentWillMount() {
    console.log(this.props.location.query);
  }
}
