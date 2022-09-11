import React from 'react';
import phone from './assets/img/phone.png'
const stylePhone = {
    width: "20px",
    height: "20px",
    float: "left"
}
const PhoneIcon= () => {
  return (
    <div style={stylePhone}>
        <img src={phone} alt="phone icon" width="100%"/>
    </div>
  );
};

export default PhoneIcon;