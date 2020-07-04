import React from 'react';
import './style.css';
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta" />
        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>
      
      <form>
        <h1>cadastro do <br />ponto de coleta</h1>
        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
        </fieldset>
      
        <fieldset>
          <legend>
            <h2>Endereço</h2>
          </legend>
        </fieldset>
        <fieldset>
          <legend>
            <h2>Ítens de coleta</h2>
          </legend>
        </fieldset>
        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
        </fieldset>
        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
        </fieldset>

      </form>
    </div>
  );
}

export default CreatePoint;