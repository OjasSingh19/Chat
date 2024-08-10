import classes from './Message.module.css';

function Message(props){
    if (props.type=='sent'){
        return(
            <div className={classes.wrap}>
                <div className={classes.sentwrap}>
                    <div className={classes.sent}>
                        <p className={classes.mssgcontent}>{props.value}</p>
                    </div>
                </div>
            </div>
        );
    
    } else {
        return(
            <div className={classes.wrap}>
                <div className={classes.recievedwrap}>
                    <div className={classes.recieved}>
                        <p className={classes.mssgcontent}>{props.value}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Message;