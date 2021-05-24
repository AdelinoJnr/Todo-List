import React, { Component } from 'react';
import { AiFillDelete } from 'react-icons/ai';

class Li extends Component {
  render() {
    const { tarefa, event } = this.props;
    return (
      <li className="item-list">
        <p className="text-li">{ tarefa }</p>
        <AiFillDelete onClick={ event } className="icon-delete" />
      </li>
    );
  }
}

export default Li;