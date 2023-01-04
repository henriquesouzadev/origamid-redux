/**
 * ACTION CREATOR
 * 
 * Mais uma prática comum para facilitar o uso de ações
 * é a criação de funções que retornam o objeto da ação.
 * Essas são chamadas de Action Creators.
 */

const botaoIncrementar = document.querySelector('[data-js="incrementar"]');
const tituloTotal = document.querySelector('[data-js="total"]')
const botaoAbrir = document.querySelector('[data-js="abrir"]')
const botaoFechar = document.querySelector('[data-js="fechar"]')

// Constantes
const INCREMENTAR = 'INCREMENTAR';
const SOMAR = 'SOMAR';

// Action Creator
const somar = (payload) => ({ type: SOMAR, payload: payload });
const incrementar = () => ({ type: INCREMENTAR });

const initialState = 0;

function contador(state = initialState, action) {
  switch(action.type) {
    case INCREMENTAR:
      return state + 1;
    case SOMAR:
      return state + action.payload;
    default:
      return state;
  }
}

function modal(state = true, action) {
  switch(action.type) {
    case 'ABRIR':
      return true;
    case 'FECHAR':
      return false;
    default:
      return state;
  }
}

const reducers = Redux.combineReducers({ contador, modal })
const store = Redux.createStore(reducers);

const render = () => {
  const { contador, modal } = store.getState();

  tituloTotal.innerText = contador;

  if (modal) {
    tituloTotal.style.display = 'inline-block'
  } else {
    tituloTotal.style.display = 'none'
  }
}
render();

store.subscribe(render);

botaoIncrementar.addEventListener('click', () => {
  store.dispatch(incrementar());
});

botaoAbrir.addEventListener('click', () => store.dispatch({ type: 'ABRIR' }));
botaoFechar.addEventListener('click', () => store.dispatch({ type: 'FECHAR' }));