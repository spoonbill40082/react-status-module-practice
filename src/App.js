import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react';

function App(props) {

  const { myCounter } = props;
  console.log('myCounter', myCounter);

  return (
    <div style={{ textAlign: 'center', padding: 16 }}>
      카운트: {myCounter.count}
      <br />
      <br />
      마이너스?: {myCounter.isNegative}
      <br />
      <br />
      <button onClick={() => myCounter.increase()}>+</button>
      <button onClick={() => myCounter.decrease()}>-</button>
    </div>
  );
}

//onclick과 함수만으로는 버튼을 눌러도 반응하지 않는다.
//counterStore를 구독할 수 있게 해야 동작한다.

export default observer(App);
