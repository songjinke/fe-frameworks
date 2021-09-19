import React from 'react';

import LifeCycle from './LifeCycle';

// 定义 LifeCycle 组件的父组件
class LifeCycleContainer extends React.Component {
  // state 也可以像这样用属性声明的形式初始化
  state = {
    text: '父组件的文本',
    // 新增的只与父组件有关的 state
    ownText: '仅仅和父组件有关的文本',
    hideChild: false,
  };

  changeText = () => {
    this.setState({
      text: '修改后的父组件文本',
    });
  };

  // 修改 ownText 的方法
  changeOwnText = () => {
    this.setState({
      ownText: '修改后的父组件自有文本',
    });
  };

  hideChild = () => {
    this.setState({
      hideChild: true,
    });
  };

  render() {
    return (
      <div className="fatherContainer">
        <div>
          <button onClick={this.changeOwnText} className="changeText">
            修改父组件自有文本内容
          </button>
        </div>
        <div>
          <button onClick={this.changeText} className="changeText">
            修改父组件文本内容
          </button>
        </div>
        <div>
          <button onClick={this.hideChild} className="hideChild">
            隐藏子组件
          </button>
        </div>
        <p> {this.state.ownText} </p>
        {this.state.hideChild ? null : <LifeCycle text={this.state.text} />}
      </div>
    );
  }
}

export default LifeCycleContainer;
