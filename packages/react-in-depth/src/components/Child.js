import React from 'react';

import { ThemeContext, UserContext } from '../index';

class Child extends React.Component {
  // 初始化子组件的 state
  state = {
    text: '子组件的文本',
  };

  // 子组件的按钮监听函数
  changeText = () => {
    // changeText 中，调用了父组件传入的 changeFatherText 方法
    this.props.changeFatherText(this.state.text);
  };

  render() {
    return (
      <div className="child">
        <p>{`子组件所接收到的来自父组件的文本内容是：[${this.props.fatherText}]`}</p>
        <ThemeContext.Consumer>
          {(theme) => (
            <UserContext.Consumer>
              {(user) => (
                <p>
                  {theme} / {user.name}
                </p>
              )}
            </UserContext.Consumer>
          )}
        </ThemeContext.Consumer>
      </div>
    );
  }
}

export default Child;
