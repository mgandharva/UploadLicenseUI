import './App.css';
import DragDropFiles from "./components/DragDropFiles";
import FileUpload from './components/FileUpload';


const App=()  =>{
  return (
    <div className="Container">
      <h1>Hello World</h1>
      {/* <DragDropFiles/> */}
      <FileUpload/>
    </div>
    
  )  
};

export default App;

// let role :[number, string];
// role=[4,"hi"];
// let cid:string;
// cid="this is me";

// type Customer ={
//   customer_id:number;
//   customer_name?:string; 
// };

// let printName : (name:string)=>never;

// let customer: Customer = {
//   customer_id: 5
// };
// function print(cid:string)
// {
//   console.log(cid);
// }
// print(cid);



// const App: React.FC = () => {
//   return <div className="App">
//     <span className="heading">Taskify</span>
//     <InputField />
//   </div>;
// };

// export default App;
