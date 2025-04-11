import React from 'react';
import Counter from './Counter';  // Import the Counter component
import TodoList from './TodoList';
import ToggleShowHide from './ToggleShowHide'; 
import CharacterCount from './CharacterCount';
import LiveSearchFilter from './LiveSearchFilter';
import ApiFetchDisplay from './ApiFetchDisplay'; 
import LoginForm from './LoginForm';
function App() {
  return (
    <div className="App">
      <h1>Welcome to the Counter App!</h1>
      <Counter />
      <TodoList /> 
      <ToggleShowHide /> 
      <CharacterCount />
      <LiveSearchFilter />
      <ApiFetchDisplay />
      <LoginForm /> 
    </div>
  );
}
export default App;
