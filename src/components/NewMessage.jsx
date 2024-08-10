
import { useState } from 'react';
import MessageBox from './MessageBox';
import classes from './NewMessage.module.css';
function NewMessage({ onMsgSubmit, onMsgBodyChange }){
    // function displayMsg(event){
    //     event.preventDefault();
    //     setMsg(txt);
    //     setText("");
    // }
    return(
        <form method='post' onSubmit={onMsgSubmit}>
            <div className={classes.msgstypewrap}>
                <label htmlFor="body" />
                <textarea id="body" name='body' placeholder='Type Your Message...' row={2} onChange={onMsgBodyChange}/>
                <button type="submit" />
            </div>
        </form>
        
    );
}

export default NewMessage;