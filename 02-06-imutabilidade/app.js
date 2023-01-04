const obj1 = {
  nome: 'Carlos',
  idade: 32
}

const obj2 = { ...obj1, nome: 'André' }
const obj3 = immer.produce(obj1, (draft) => {
  draft.idade = 33
})

// console.log('obj1:', obj1)
// console.log('obj2:', obj2)
// console.log('obj3', obj3)

const initialState = {
  nome: 'Carlos',
  sobre: {
    dados: {
      idade: 32
    }
  }
}

const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case 'MUDAR_NOME':
      state.nome = action.payload
      break;
    case 'MUDAR_IDADE':
      state.sobre.dados.idade = action.payload;
      break;
  }
}, initialState);

const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch({ type: 'MUDAR_NOME', payload: 'André' })
store.dispatch({ type: 'MUDAR_IDADE', payload: 38 })
store.dispatch({ type: 'MUDAR_NOME', payload: 'Paulo' })
store.dispatch({ type: 'MUDAR_NOME', payload: 'Maria' })
store.dispatch({ type: 'MUDAR_IDADE', payload: 41 })