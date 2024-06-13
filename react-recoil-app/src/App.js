import { atom, selector } from 'recoil';
import './App.css';
import TextInput from './components/TextInput';
import CharacterCount from './components/CharacterCount';


export const textState = atom({
  key: 'textState',
  default: ''
})

export const CharCountState = selector({
  key: 'CharCountState',
  get: ({ get }) => {
    const text = get(textState)
    return text.length
  }
})

function App() {
  return (
    <div >
      <TextInput />
      <CharacterCount />
    </div>
  );
}

export default App;
