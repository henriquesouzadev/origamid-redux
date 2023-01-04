function reducer(state = 0, action) {
  switch (action.type) {
    case 'MODIFICAR_WIDTH':
      // Não criar efeitos colaterais dentro do reducer (local errado)

      // const caixa = document.querySelector('[data-js="caixa"]');
      // caixa.style.width = action.payload + 'px';
      return action.payload;
    default:
      return state;
  }
}

const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function render() {
  // Efeito colateral no render (local certo)
  const caixa = document.querySelector('[data-js="caixa"]');
  caixa.style.width = store.getState() + 'px';
}

store.subscribe(render)

store.dispatch({ type: 'MODIFICAR_WIDTH', payload: 100 });
store.dispatch({ type: 'MODIFICAR_WIDTH', payload: 20 });
store.dispatch({ type: 'MODIFICAR_WIDTH', payload: 30 });

console.log(store.getState())