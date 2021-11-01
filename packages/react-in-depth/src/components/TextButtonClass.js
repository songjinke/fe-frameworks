import React, { Component } from 'react';
export default class TextButton extends Component {
  constructor() {
    super();
    this.state = {
      text: '初始文本',
    };
  }

  changeText = () => {
    this.setState(() => {
      return {
        text: '修改后的文本',
      };
    });
  };
  render() {
    const { text } = this.state;
    return (
      <div className="textButton">
        <p>{text}</p>
        <button onClick={this.changeText}>点击修改文本</button>
      </div>
    );
  }
}
