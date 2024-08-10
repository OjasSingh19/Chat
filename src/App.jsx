import {useState} from 'react';

import './App.css'
import MessageBox from './components/MessageBox'
import Rno from './components/Rno'
import NewMessage from './components/NewMessage'

function App() {
  const [body,setEnteredBody] = useState('');
  const [msg,setMsg] = useState([]);
    
    function addMsgHandler(msgPost){
      console.log(msgPost.body);
      setMsg((prevMsgs) => [...prevMsgs,msgPost]);
    }

    function msgChangeBodyHandler(event){
        setEnteredBody(event.target.value);
    }
    function msghandler(event){
        event.preventDefault();
        if (body != ''){
          const msgPost ={
            type :"sent" ,
            body : body
        };
        
        addMsgHandler(msgPost);
        setEnteredBody('');
      }
        //this clears the input field after sending the message.
    }
        


  return (
    <div className='wrap'>
      <Rno/>
      <MessageBox messages={msg}/>
      <NewMessage onMsgSubmit={msghandler} onMsgBodyChange={msgChangeBodyHandler}/>
    </div>
  );
}

export default App
