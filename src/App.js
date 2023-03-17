import './App.css';
import Examen from './Examen/Examen';
import Student from './Student/Student';

const App = () =>{
  return <>
    <Student name="Tigran" surname="Harutyunyan">
      <Examen 
        title = "Math"
        mid1 = {18}
        mid2 = {14}
        absences = {3}
      />
      <Examen 
        title = "JavaScript"
        mid1 = {[]}
        mid2 = {null}
        absences = {"1"}
      />  
      <Examen/>
    </Student>
  </>
}

export default App;
