import React, { Component } from 'react'
import './Content.css'

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const generateDiv = (obj) => {
  return (
    <div className='conteudo'>
      <p><strong>O conteúdo é:</strong> {obj.conteudo}</p>
      <p><strong>Status:</strong> {obj.bloco}</p>
      <p><strong>Bloco:</strong> {obj.status}</p>
    </div>
    );
}

class Content extends Component {
  render() { 
    return (
      <React.Fragment>
      {conteudos.map((conteudo) => generateDiv(conteudo))}
      </React.Fragment>
    );
  }
}
 
export default Content;