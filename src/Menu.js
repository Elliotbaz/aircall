import classes from './Menu.module.css'
import {Extra, Keypad, Person, Phone, Settings} from './MenuIcons'

const Menu = (props) =>{
    return <div className={classes.navigation}>
        <ul>
            <li className={classes.list}> 
            <a href='#'>
                <span className={classes.icon}><Phone/> <span className={classes.missedCalls}> {props.missedCall}</span> </span>    
            </a>
            </li>
            <li className={classes.list}> 
            <a href='#'>
                <span className={classes.icon}><Person/> <span className={classes.missedCalls}> {props.missedCall}</span> </span>    
            </a>
            </li>



            <li className={classes.list}> 
            <a href='#'>
                <span className={classes.icon +" "+ classes.active +" "+ classes.keyPad}><Keypad/> <span className={classes.missedCalls}> {props.missedCall}</span> </span>    
            </a>
            </li>
            <li className={classes.list}> 
            <a href='#'>
                <span className={classes.icon}><Settings/> <span className={classes.missedCalls}> {props.missedCall}</span> </span>    
            </a>
            </li>
            <li className={classes.list}> 
            <a href='#'>
                <span className={classes.icon}><Extra/> <span className={classes.missedCalls}> {props.missedCall}</span> </span>    
            </a> 
            </li>
        </ul>
    </div>
}

export default Menu