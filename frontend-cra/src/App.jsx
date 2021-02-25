// rfc
// jsx é a estrutura html com js
import React from 'react';
// props é um objeto
const Paragrafo = (props) => (
  <div>
    <p>
      Paragrafo
      {' '}
      {props.row}
    </p>
    <p>Paragrafo 2 (no row)</p>
    <p>Paragrafo 3 (no row)</p>
  </div>
);

const App = () => (
  <div cassName="app">
    <h1>Hello</h1>
    <Paragrafo row={1} />
    <Paragrafo row={2} />
    <Paragrafo row={3} />
  </div>
);

export default App;
