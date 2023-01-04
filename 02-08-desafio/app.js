import { incrementarTempo, reduzirTempo, modificarEmail } from './store/aluno.js';
import { completarAula, completarCurso, resetarCurso } from './store/aulas.js';

import store from './store/configureStore.js';

function render() {
  const { aluno, aulas } = store.getState();

  const alunoContainer = document.querySelector('[data-js="aluno"]');
  const aulasContainer = document.querySelector('[data-js="aulas"]');

  alunoContainer.innerText = `${aluno.nome} : ${aluno.email} : ${aluno.diasRestantes}`;
  aulasContainer.innerText = aulas.filter((aula) => aula.completa === true).length; 
}
render();
store.subscribe(render);

store.dispatch(resetarCurso());
store.dispatch(completarAula(3));
store.dispatch(completarCurso());
store.dispatch(reduzirTempo());
store.dispatch(incrementarTempo());
store.dispatch(incrementarTempo());
store.dispatch(modificarEmail('henriquesouzadev@gmail.com'));


