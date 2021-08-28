import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

import { removeLocalStorage } from '../utils/localStorage';

function Li({ tarefa, listTask, setListTask }) {

  const removeTask = () => {
    const filterTask = listTask.filter((task) => task !== tarefa);
    setListTask(filterTask);
    removeLocalStorage('lista', filterTask);
  };

  return (
    <li className="item-list">
      <p className="text-li">{ tarefa }</p>
      <AiFillDelete onClick={ removeTask } className="icon-delete" />
    </li>
  );
}

export default Li;