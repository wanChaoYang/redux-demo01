import React from "react";
import { Button, Input, List } from "antd";
import store from "../../store/index";
export default class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState(); //获取redux的值
    this.changInputValue = this.changInputValue.bind(this);
    //rdux的订阅模式
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }
  render() {
    return (
      <div className="home">
        <div
          style={{
            width: "200px",
            marginTop: "50px",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Input
            onChange={this.changInputValue}
            value={this.state.inputValue}
          />
          <Button type="primary" onClick={this.addList.bind(this)}>
            新增
          </Button>
        </div>

        <List
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item key={index} onClick={this.deleateItem.bind(this, index)}>
              <div>{item}</div>
            </List.Item>
          )}
        />

        <div style={{ marginTop: "30px" }} onClick={this.openPage.bind(this)}>
          <Button type="primary">下一页</Button>
        </div>
      </div>
    );
  }
  componentDidMount() {}
  deleateItem(index) {
    const action = {
      type: "deleteItem",
      index,
    };
    store.dispatch(action);
  }
  addList() {
    const action = {
      type: "addItem",
    };
    store.dispatch(action);
  }

  changInputValue(e) {
    const action = {
      type: "changeInput",
      value: e.target.value,
    };
    store.dispatch(action);
  }

  storeChange() {
    //改变setState的状态就可以了
    this.setState(store.getState());
  }
  //点击跳转
  openPage() {
    this.props.history.push({
      pathname: "/page1",
      query: {
        json: "商品",
      },
    });
  }
}
