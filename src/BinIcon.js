import React from 'react';
import bin from './assets/img/bin.png'
const styleBin = {
    width: "20px",
    height: "20px",
    float: "left"
}
const BinIcon= () => {
  return (
    <div style={styleBin}>
        <img src={bin} alt="bin icon" width="100%"/>
    </div>
  );
};

export default BinIcon;