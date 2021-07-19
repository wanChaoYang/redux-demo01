const defaultState = {
  inputValue: "Wite Someting",
  list: ["早8点送周倩雯上班", "早9点开始写代码", "中午12点吃午餐"],
};

export default function (state = defaultState, action) {
  //Reducer里只能接收state,不能改变state
  if (action.type === "changeInput") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === "addItem") {
    let newState = JSON.parse(JSON.stringify(state));
    if (newState.inputValue) {
      newState.list = [...newState.list, newState.inputValue];
      newState.inputValue = "";
    }
    return newState;
  }

  if (action.type === "deleteItem") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
}
