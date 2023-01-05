import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { adicionarDatas } from '../store/date';

const FormExample = () => {
  const [formData, setFormData] = useState(null)

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(adicionarDatas({ formData: formData }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          name="nome"
          id="nome"
          onChange={(e) => setFormData(state => ({ ...state, nome: e.target.value }))}
        />
      </p>

      <p>
        <label htmlFor="sobrenome">Sobrenome:</label>
        <input
          type="text"
          name="sobrenome"
          id="sobrenome"
          onChange={(e) => setFormData(state => ({ ...state, sobrenome: e.target.value }))}
        />
      </p>

      <button>Enviar</button>
    </form>
  )
}

export default FormExample