import React from 'react';

class NewChild extends React.Component {
  state = {
    text: '来自 newChild 的文本',
  };

  // NewChild 组件的按钮监听函数
  changeText = () => {
    // changeText 中，调用了父组件传入的 changeFatherText 方法
    this.props.changeFatherText(this.state.text);
  };

  render() {
    return (
      <div className="child">
        {/* 注意这里把修改父组件文本（同时也是 Child 组件的文本）的动作放在了 NewChild 里 */}
        <button onClick={this.changeText}>点击更新 Child 组件的文本</button>
      </div>
    );
  }
}

export default NewChild;
