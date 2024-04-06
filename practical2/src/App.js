
import ReusableCard from './Card';
import './style.css';

function App() {
  return (
    <div className="body">

      <h1 className="title"> Cources</h1>
      <div className="first-row">
        <ReusableCard/>
        <ReusableCard/>
        <ReusableCard/>

      </div>

      <h1 className="title"> Testmonials</h1>
      <div className="second-row">

        <ReusableCard/>
        <ReusableCard/>
        <ReusableCard/>

      </div>
    </div>
  );
}

export default App;
