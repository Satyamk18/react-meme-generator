import { useEffect, useState } from 'react';
import './App.css';
import template from './components/template';

function App() {
  const [templates,settemplates] =  useState([]);
  const [meme,setmeme] =  useState(null);
  useEffect(()=>{
       fetch("https://api.imgflip.com/get_memes")
       .then((res)=> res.json())
       .then((data)=>{
         settemplates(data.data.memes);
       })
  },[]);

  return (
    <div className="App">
       <h1>Meme Generator</h1>
    </div>
  );
}

export default App;
