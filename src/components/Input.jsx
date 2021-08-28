import React from 'react';

function Input({ change, value, text }) {
  return (
    <label className="form-label title-input" htmlFor="newList">
      { text }
      <input
        onChange={ (ev) => change(ev.target.value) }
        className="form-control"
        value={ value }
        type="text"
        id="newList"
        placeholder="Nova Tarefa"
      />
    </label>
  );
}

export default Input;