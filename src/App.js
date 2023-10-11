import logo from './logo.svg';
import './App.css';
import ControlledComponent from './components/Controlled/Controlled';
import Checkbox from './components/Checkbox/Checkbox';
import Dropdown from './components/Dropdown/Dropdown';
import Multiple from './components/Multiple/Multiple';
import Validate from './components/Validate/Validate';
import Uncontrolled from './components/Uncontrolled/Uncontrolled';
import ReactHookForm from './components/ReactHookForm/Example';

function App() {
  return (
    <div className="App">
      {<ControlledComponent/>}
      {<Checkbox/>}
      {<Dropdown/>}
      {<Multiple/>}
      {<Validate/>}
      {<Uncontrolled/>}
      {<ReactHookForm/>}
    </div>
  );
}

export default App;
