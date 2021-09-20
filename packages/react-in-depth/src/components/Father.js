import React from 'react';

import Child from './Child';
import NewChild from './NewChild';

class Father extends React.Component {
  // 初始化父组件的 state
  state = {
    text: '初始化的父组件的文本',
  };

  // 传给 NewChild 组件按钮的监听函数，用于更新父组件 text 值（这个 text 值同时也是 Child 的 props）
  changeText = (newText) => {
    this.setState({
      text: newText,
    });
  };

  // 渲染父组件
  render() {
    return (
      <div className="father">
        {/* 引入 Child 组件，并通过 props 中下发具体的状态值 实现父-子通信 */}
        <Child fatherText={this.state.text} />

        {/* 引入 NewChild 组件，并通过 props 中下发可传参的函数 实现子-父通信 */}
        <NewChild changeFatherText={this.changeText} />
      </div>
    );
  }
}

export default Father;
