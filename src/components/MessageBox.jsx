import Message from './Message';
import classes from './MessageBox.module.css';
import {useState} from 'react';
import NewMessage from './NewMessage';

function MessageBox(props){
    // const [msg,setMsg] = useState([]);
    // function addMsg(msgPost ){
    //     setMsg([...msg,msgPost])
    // }
    return(
            <div className={classes.box}>
                 <ul className={classes.messageList} id="msgsList">
                       <Message type="recieved" value="Hi"/>
                       <Message type="sent" value="Hello" />
                       {props.messages.map((msg) =>(
                        <Message key={msg.body} type='sent' value={msg.body}/>
                       ))}
                </ul>
            </div>
    );
}

export default MessageBox;