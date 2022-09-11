import menu1 from './assets/img/menu1.png'
import menu2 from './assets/img/menu2.png'
import menu3 from './assets/img/menu3.png'
import menu4 from './assets/img/menu4.png'
import extra from './assets/img/extra.png'
import undo from './assets/img/undo.png'

export const Phone = () =>{
    return (
        <div>
            <img src={menu1} alt="phone icon" width="100%"/>
        </div>
      );
}

export const Person = () =>{
    return (
        <div>
            <img src={menu2} alt="person icon" width="100%"/>
        </div>
      );
}

export const Keypad = () =>{
    return (
        <div>
            <img src={menu3} alt="keypad icon" width="100%"/>
        </div>
      );
}

export const Settings= () =>{
    return (
        <div>
            <img src={menu4} alt="settings icon" width="100%"/>
        </div>
      );
}

export const Extra= () =>{
    return (
        <div>
            <img src={extra} alt="record icon" width="100%"/>
        </div>
      );
}

export const Undo= () =>{
    return (
        <div style={{height: "30px", width: "30px", float:"left"}}>
            <img src={undo} alt="record icon" width="100%"/>
        </div>
      );
}