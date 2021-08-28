import React, { useEffect, useState } from 'react';

import Error from './Error';
import Li from './Li';
import Input from './Input';

import { updateLocalStorage, getLocalStorage } from '../utils/localStorage';

function Section() {
  const [inputTask, setInputTask] = useState('');
  const [error, setError] = useState(false);
  const [listTask, setListTask] = useState([]);

  useEffect(() => {
    const storage = getLocalStorage('lista');
    if(storage) setListTask(storage);
  }, []);

  const handleClickBtn = () => {
    if (inputTask.length <  2 || inputTask.length > 50) {
      setError(true);
    } else {
      setListTask([...listTask, inputTask]);
      updateLocalStorage('lista', inputTask);
      setError(false);
      setInputTask('');
    }
  };

  return (
    <section>
      <div className="newList">
        <Input
          change={ setInputTask }
          value={ inputTask }
          text="Tarefas"
        />
        <p className="limit">Limite de 40 Caracteres</p>
        <button
          className="btn btn-success"
          onClick={ handleClickBtn }
        >
          Adicionar Tarefa
        </button>
      </div>
      { error && <Error input={ inputTask } />}
      <h3 className="title">Lista de Tarefas</h3>
      <>
        {listTask
          .map((task, index) => <Li listTask={ listTask } setListTask={ setListTask } tarefa={ task } key={ index } /> )}
      </>
    </section>
  );
}

export default Section;