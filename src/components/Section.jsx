import React, { Component } from 'react';
import Error from './Error';
import Li from './Li';

class Section extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      list: [],
      error: '',
    };
  }

  componentDidMount() {
    this.renderLocalStorage();
  }

  componentDidUpdate() {
    this.updateLoacalStorage();
  }

  renderLocalStorage = () => {
    const storage = localStorage.getItem('lista');
    if(storage) {
      this.setState({ list: JSON.parse(storage) });
    }
  };

  updateLoacalStorage = () => {
    const { list } = this.state;
    localStorage.setItem('lista', JSON.stringify(list));
  };

  handleClickBtn = () => {
    const { input } = this.state;
    this.setState((anterior) => ({
      list: input.length <  2 || input.length > 40 ? anterior.list : [...anterior.list, input],
      input: '',
      error: input.length <  2 || input.length > 40 ? 'Campo Invalido' : '',
    }));
  };

  handleClickDelete = (event) => {
    const { list } = this.state;
    const textList = event.target.parentNode.parentNode.childNodes[0].innerText;
    console.log(event);
    const filterList = list.filter((item) => item !== textList)
    this.setState({
      list: filterList,
    });
  };

  handleChange = ({ target: { value } }) => {
    this.setState({
      input: value,
      localStorage: false,
    });
  };

  render() {
    const { input, error, list } = this.state;

    return (
      <section className="content-list">
        <div className="newList">
          <label className="form-label title-input" htmlFor="newList">Tarefas</label>
          <input onChange={ this.handleChange } className="form-control" value={ this.state.input } type="text" name="newList" id="newList" placeholder="Nova Tarefa" />
          <p className="limit">Limite de 40 Caracteres</p>
          <button className="btn btn-success" onClick={ this.handleClickBtn }>Adicionar Tarefa</button>
        </div>
        { error !== '' ? <Error input={ input } /> : '' }
        <h3 className="title">Lista de Tarefas</h3>
        <>
          {list.map((item, index) => <Li event={ this.handleClickDelete } tarefa={ item } key={ index } /> )}
        </>
      </section>
    );
  }
}

export default Section;