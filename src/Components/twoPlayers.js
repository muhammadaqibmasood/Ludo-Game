/* eslint-disable no-mixed-operators */
/* eslint-disable eqeqeq */
/* eslint-disable no-sequences */
/* eslint-disable no-loop-func */
import React, { Component } from 'react';
import red from '../images/red.png';
import blue from '../images/blue.png';
import yellow from '../images/yellow.png';
import green from '../images/green.png';
import {Link} from 'react-router-dom';
import rollADie from 'roll-a-die';

class Routes extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }
              state={
                winner : [],
                gameover:false,
                playerNo : 2,redNo:4,greenNo:4,yellowNo:4,blueNo:4,blue:[],red:[],green:[],yellow:[],
                   red0:0,
                   red1:0,
                   red2:0,
                   red3:0,
                   green0:0,
                   green1:0,
                   green2:0,
                   green3:0,
                   blue0:0,
                   blue1:0,
                   blue2:0,
                   blue3:0,
                   yellow0:0,
                   yellow1:0,
                   yellow2:0,
                   yellow3:0,
                   
                            }
              
                            response(res) {
                             
                              console.log(res)
                            }
              imageSelector(id,geti){
                
                const{red,green,blue,yellow,playerNo,blue0,blue1,blue2,blue3,green0,green1,green2,green3,red0,red1,red2,red3,yellow0,yellow1,yellow2,yellow3}=this.state
                // const{red,green,blue,yellow,playerNo}=this.state;
                
                
                
                this.score =Math.ceil(Math.random() * 6);
                console.log('score',this.score)
                let element =document.getElementById(id);
                
                const option={element, numberOfDice:1,values:[this.score],delay: 1000,callback:this.response};
                rollADie(option);
                
                
                
                if(this.score<6){
                  document.getElementById('button').disabled = true;
                }if(playerNo===1){if(document.getElementById(geti).getElementsByTagName('img').length<4&&this.score===6){
                  blue.push(this.score);
                }
                else if(document.getElementById(geti).getElementsByTagName('img').length===3&&document.getElementById('stop1').getElementsByTagName('img').length===1&&this.score===6){
                  blue.push(this.score);
                }else if(document.getElementById(geti).getElementsByTagName('img').length===2&&document.getElementById('stop1').getElementsByTagName('img').length===2&&this.score===6){
                  blue.push(this.score);
                
                }else if(document.getElementById(geti).getElementsByTagName('img').length===1&&document.getElementById('stop1').getElementsByTagName('img').length===3&&this.score===6){
                  blue.push(this.score);
                
                }
                else if(document.getElementById(geti).getElementsByTagName('img').length<=3&&document.getElementById('stop1').getElementsByTagName('img').length===0){
                  blue.push(this.score);
                }else if(document.getElementById(geti).getElementsByTagName('img').lengt<=2&&document.getElementById('stop1').getElementsByTagName('img').length===1){
                  blue.push(this.score);
                  
                }else if(document.getElementById(geti).getElementsByTagName('img').length<=1&&document.getElementById('stop1').getElementsByTagName('img').length===2){
                  blue.push(this.score);
                }else if(document.getElementById(geti).getElementsByTagName('img').length===0&&document.getElementById('stop1').getElementsByTagName('img').length===3){
                  blue.push(this.score);
                }
                else if(document.getElementById(geti).getElementsByTagName('img').length===4&&this.score===6){
                  blue.push(this.score);
                       }}
                       if(playerNo===2){if(document.getElementById(geti).getElementsByTagName('img').length<4&&this.score===6){
                        red.push(this.score);
                      }
                      else if(document.getElementById(geti).getElementsByTagName('img').length<=3&&document.getElementById('stop2').getElementsByTagName('img').length===1&&this.score===6){
                        red.push(this.score);
                      }else if(document.getElementById(geti).getElementsByTagName('img').length<=2&&document.getElementById('stop2').getElementsByTagName('img').length===2&&this.score===6){
                        red.push(this.score);
                      
                      }else if(document.getElementById(geti).getElementsByTagName('img').length<=1&&document.getElementById('stop2').getElementsByTagName('img').length===3&&this.score===6){
                        red.push(this.score);
                      
                      }
                      else if(document.getElementById(geti).getElementsByTagName('img').length<=3&&document.getElementById('stop2').getElementsByTagName('img').length===0){
                        red.push(this.score);
                      }else if(document.getElementById(geti).getElementsByTagName('img').length<=2&&document.getElementById('stop2').getElementsByTagName('img').length===1){
                        red.push(this.score);
                        
                      }else if(document.getElementById(geti).getElementsByTagName('img').length<1&&document.getElementById('stop2').getElementsByTagName('img').length===2){
                        red.push(this.score);
                      }else if(document.getElementById(geti).getElementsByTagName('img').length===0&&document.getElementById('stop2').getElementsByTagName('img').length===3){
                        red.push(this.score);
                      }
                      else if(document.getElementById(geti).getElementsByTagName('img').length===4&&this.score===6){
                        red.push(this.score);
                             }}
                        if(playerNo===3){if(document.getElementById(geti).getElementsByTagName('img').length<4&&this.score===6){
                          green.push(this.score);
                        }
                        else if(document.getElementById(geti).getElementsByTagName('img').length===3&&document.getElementById('stop3').getElementsByTagName('img').length===1&&this.score===6){
                          green.push(this.score);
                        }else if(document.getElementById(geti).getElementsByTagName('img').length===2&&document.getElementById('stop3').getElementsByTagName('img').length===2&&this.score===6){
                          green.push(this.score);
                        
                        }else if(document.getElementById(geti).getElementsByTagName('img').length===1&&document.getElementById('stop3').getElementsByTagName('img').length===3&&this.score===6){
                          green.push(this.score);
                        
                        }
                        else if(document.getElementById(geti).getElementsByTagName('img').length<=3&&document.getElementById('stop3').getElementsByTagName('img').length===0){
                          green.push(this.score);
                        }else if(document.getElementById(geti).getElementsByTagName('img').length<=2&&document.getElementById('stop3').getElementsByTagName('img').length===1){
                          green.push(this.score);
                          
                        }else if(document.getElementById(geti).getElementsByTagName('img').length<=1&&document.getElementById('stop3').getElementsByTagName('img').length===2){
                          green.push(this.score);
                        }else if(document.getElementById(geti).getElementsByTagName('img').length===0&&document.getElementById('stop3').getElementsByTagName('img').length===3){
                          green.push(this.score);
                        }
                        else if(document.getElementById(geti).getElementsByTagName('img').length===4&&this.score===6){
                          green.push(this.score);
                               }}
                        if(playerNo===4){if(document.getElementById(geti).getElementsByTagName('img').length<4&&this.score===6){
                          yellow.push(this.score);
                        }
                        else if(document.getElementById(geti).getElementsByTagName('img').length===3&&document.getElementById('stop4').getElementsByTagName('img').length===1&&this.score===6){
                          yellow.push(this.score);
                        }else if(document.getElementById(geti).getElementsByTagName('img').length===2&&document.getElementById('stop4').getElementsByTagName('img').length===2&&this.score===6){
                          yellow.push(this.score);
                        
                        }else if(document.getElementById(geti).getElementsByTagName('img').length===1&&document.getElementById('stop4').getElementsByTagName('img').length===3&&this.score===6){
                          yellow.push(this.score);
                        
                        }
                        else if(document.getElementById(geti).getElementsByTagName('img').length<=3&&document.getElementById('stop4').getElementsByTagName('img').length===0){
                          yellow.push(this.score);
                        }else if(document.getElementById(geti).getElementsByTagName('img').length<=2&&document.getElementById('stop4').getElementsByTagName('img').length===1){
                          yellow.push(this.score);
                          
                        }else if(document.getElementById(geti).getElementsByTagName('img').length<=1&&document.getElementById('stop4').getElementsByTagName('img').length===2){
                          yellow.push(this.score);
                        }else if(document.getElementById(geti).getElementsByTagName('img').length===0&&document.getElementById('stop4').getElementsByTagName('img').length===3){
                          yellow.push(this.score);
                        }
                        else if(document.getElementById(geti).getElementsByTagName('img').length===4&&this.score===6){
                          yellow.push(this.score);
                               }}
                       console.log('after update',red,green,blue,yellow)
                     if(playerNo===1){
  if (blue.length>0){
    for(let i=0;i<blue.length;i++){
      const number=Number(blue[i]);
      if(blue0>=53&&blue0!=58){if(((blue0===53&&blue1>53&&blue2>53&&blue3>53)||(blue0===53&&document.getElementById('stop1').getElementsByTagName('img').length===1&&document.getElementById('blue1').getElementsByTagName('img').length===2)||(blue0===53&&document.getElementById('stop1').getElementsByTagName('img').length===2&&document.getElementById('blue1').getElementsByTagName('img').length===1)||(blue0===53&&document.getElementById('stop1').getElementsByTagName('img').length===3&&document.getElementById('blue1').getElementsByTagName('img').length===0)||(blue0===53&&document.getElementById('stop1').getElementsByTagName('img').length===0&&document.getElementById('blue1').getElementsByTagName('img').length===3))&& (number===6)){
  blue.shift();}else if(((blue0===54&&blue1>54&&blue2>54&&blue3>54)||(blue0===54&&document.getElementById('stop1').getElementsByTagName('img').length===1&&document.getElementById('blue1').getElementsByTagName('img').length===2)||(blue0===54&&document.getElementById('stop1').getElementsByTagName('img').length===2&&document.getElementById('blue1').getElementsByTagName('img').length===1)||(blue0===54&&document.getElementById('stop1').getElementsByTagName('img').length===3&&document.getElementById('blue1').getElementsByTagName('img').length===0)||(blue0===54&&document.getElementById('stop1').getElementsByTagName('img').length===0&&document.getElementById('blue1').getElementsByTagName('img').length===3))&&((number===6)||(number===5))){
   blue.shift();}else if(((blue0===55&&blue1>55&&blue2>55&&blue3>55)||(blue0===55&&document.getElementById('stop1').getElementsByTagName('img').length===1&&document.getElementById('blue1').getElementsByTagName('img').length===2)||(blue0===55&&document.getElementById('stop1').getElementsByTagName('img').length===2&&document.getElementById('blue1').getElementsByTagName('img').length===1)||(blue0===55&&document.getElementById('stop1').getElementsByTagName('img').length===3&&document.getElementById('blue1').getElementsByTagName('img').length===0)||(blue0===55&&document.getElementById('stop1').getElementsByTagName('img').length===0&&document.getElementById('blue1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4))){
     blue.shift();}else if(((blue0===56&&blue1>56&&blue2>56&&blue3>56)||(blue0===56&&document.getElementById('stop1').getElementsByTagName('img').length===1&&document.getElementById('blue1').getElementsByTagName('img').length===2)||(blue0===56&&document.getElementById('stop1').getElementsByTagName('img').length===2&&document.getElementById('blue1').getElementsByTagName('img').length===1)||(blue0===56&&document.getElementById('stop1').getElementsByTagName('img').length===3&&document.getElementById('blue1').getElementsByTagName('img').length===0)||(blue0===56&&document.getElementById('stop1').getElementsByTagName('img').length===0&&document.getElementById('blue1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3))){
       blue.shift();}else if(((blue0===57&&blue1>57&&blue2>57&&blue3>57)||(blue0===57&&document.getElementById('stop1').getElementsByTagName('img').length===1&&document.getElementById('blue1').getElementsByTagName('img').length===2)||(blue0===57&&document.getElementById('stop1').getElementsByTagName('img').length===2&&document.getElementById('blue1').getElementsByTagName('img').length===1)||(blue0===57&&document.getElementById('stop1').getElementsByTagName('img').length===3&&document.getElementById('blue1').getElementsByTagName('img').length===0)||(blue0===57&&document.getElementById('stop1').getElementsByTagName('img').length===0&&document.getElementById('blue1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3)||(number===2))){
         blue.shift();}}else if(blue1>=53&&blue1!=58){if(((blue1===53&&blue0>53&&blue2>53&&blue3>53)||(blue1===53&&document.getElementById('stop1').getElementsByTagName('img').length===1&&document.getElementById('blue1').getElementsByTagName('img').length===2)||(blue1===53&&document.getElementById('stop1').getElementsByTagName('img').length===2&&document.getElementById('blue1').getElementsByTagName('img').length===1)||(blue1===53&&document.getElementById('stop1').getElementsByTagName('img').length===3&&document.getElementById('blue1').getElementsByTagName('img').length===0)||(blue1===53&&document.getElementById('stop1').getElementsByTagName('img').length===0&&document.getElementById('blue1').getElementsByTagName('img').length===3))&& (number===6)){
           blue.shift();}else if(((blue1===54&&blue0>54&&blue2>54&&blue3>54)||(blue1===54&&document.getElementById('stop1').getElementsByTagName('img').length===1&&document.getElementById('blue1').getElementsByTagName('img').length===2)||(blue1===54&&document.getElementById('stop1').getElementsByTagName('img').length===2&&document.getElementById('blue1').getElementsByTagName('img').length===1)||(blue1===54&&document.getElementById('stop1').getElementsByTagName('img').length===3&&document.getElementById('blue1').getElementsByTagName('img').length===0)||(blue1===54&&document.getElementById('stop1').getElementsByTagName('img').length===0&&document.getElementById('blue1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5))){
           blue.shift();}else if(((blue1===55&&blue0>55&&blue2>55&&blue3>55)||(blue1===55&&document.getElementById('stop1').getElementsByTagName('img').length===1&&document.getElementById('blue1').getElementsByTagName('img').length===2)||(blue1===55&&document.getElementById('stop1').getElementsByTagName('img').length===2&&document.getElementById('blue1').getElementsByTagName('img').length===1)||(blue1===55&&document.getElementById('stop1').getElementsByTagName('img').length===3&&document.getElementById('blue1').getElementsByTagName('img').length===0)||(blue1===55&&document.getElementById('stop1').getElementsByTagName('img').length===0&&document.getElementById('blue1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4))){
               blue.shift();}else if(((blue1===56&&blue0>56&&blue2>56&&blue3>56)||(blue1===56&&document.getElementById('stop1').getElementsByTagName('img').length===1&&document.getElementById('blue1').getElementsByTagName('img').length===2)||(blue1===56&&document.getElementById('stop1').getElementsByTagName('img').length===2&&document.getElementById('blue1').getElementsByTagName('img').length===1)||(blue1===56&&document.getElementById('stop1').getElementsByTagName('img').length===3&&document.getElementById('blue1').getElementsByTagName('img').length===0)||(blue1===56&&document.getElementById('stop1').getElementsByTagName('img').length===0&&document.getElementById('blue1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3))){
                 blue.shift();}else if(((blue1===57&&blue0>57&&blue2>57&&blue3>57)||(blue1===57&&document.getElementById('stop1').getElementsByTagName('img').length===1&&document.getElementById('blue1').getElementsByTagName('img').length===2)||(blue1===57&&document.getElementById('stop1').getElementsByTagName('img').length===2&&document.getElementById('blue1').getElementsByTagName('img').length===1)||(blue1===57&&document.getElementById('stop1').getElementsByTagName('img').length===3&&document.getElementById('blue1').getElementsByTagName('img').length===0)||(blue1===57&&document.getElementById('stop1').getElementsByTagName('img').length===0&&document.getElementById('blue1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3)||(number===2))){
                   blue.shift();}}else if(blue2>=53&&blue2!=58){if(((blue2===53&&blue0>53&&blue1>53&&blue3>53)||(blue2===53&&document.getElementById('stop1').getElementsByTagName('img').length===1&&document.getElementById('blue1').getElementsByTagName('img').length===2)||(blue2===53&&document.getElementById('stop1').getElementsByTagName('img').length===2&&document.getElementById('blue1').getElementsByTagName('img').length===1)||(blue2===53&&document.getElementById('stop1').getElementsByTagName('img').length===3&&document.getElementById('blue1').getElementsByTagName('img').length===0)||(blue2===53&&document.getElementById('stop1').getElementsByTagName('img').length===0&&document.getElementById('blue1').getElementsByTagName('img').length===3))&& (number===6)){
                     blue.shift();}else if(((blue2===54&&blue0>54&&blue1>54&&blue3>54)||(blue2===54&&document.getElementById('stop1').getElementsByTagName('img').length===1&&document.getElementById('blue1').getElementsByTagName('img').length===2)||(blue2===54&&document.getElementById('stop1').getElementsByTagName('img').length===2&&document.getElementById('blue1').getElementsByTagName('img').length===1)||(blue2===54&&document.getElementById('stop1').getElementsByTagName('img').length===3&&document.getElementById('blue1').getElementsByTagName('img').length===0)||(blue2===54&&document.getElementById('stop1').getElementsByTagName('img').length===0&&document.getElementById('blue1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5))){
                       blue.shift();}else if(((blue2===55&&blue0>55&&blue1>55&&blue3>55)||(blue2===55&&document.getElementById('stop1').getElementsByTagName('img').length===1&&document.getElementById('blue1').getElementsByTagName('img').length===2)||(blue2===55&&document.getElementById('stop1').getElementsByTagName('img').length===2&&document.getElementById('blue1').getElementsByTagName('img').length===1)||(blue2===55&&document.getElementById('stop1').getElementsByTagName('img').length===3&&document.getElementById('blue1').getElementsByTagName('img').length===0)||(blue2===55&&document.getElementById('stop1').getElementsByTagName('img').length===0&&document.getElementById('blue1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4))){
                         blue.shift();}else if(((blue2===56&&blue0>56&&blue1>56&&blue3>56)||(blue2===56&&document.getElementById('stop1').getElementsByTagName('img').length===1&&document.getElementById('blue1').getElementsByTagName('img').length===2)||(blue2===56&&document.getElementById('stop1').getElementsByTagName('img').length===2&&document.getElementById('blue1').getElementsByTagName('img').length===1)||(blue2===56&&document.getElementById('stop1').getElementsByTagName('img').length===3&&document.getElementById('blue1').getElementsByTagName('img').length===0)||(blue2===56&&document.getElementById('stop1').getElementsByTagName('img').length===0&&document.getElementById('blue1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3))){
                           blue.shift();}else if(((blue2===57&&blue0>57&&blue1>57&&blue3>57)||(blue2===57&&document.getElementById('stop1').getElementsByTagName('img').length===1&&document.getElementById('blue1').getElementsByTagName('img').length===2)||(blue2===57&&document.getElementById('stop1').getElementsByTagName('img').length===2&&document.getElementById('blue1').getElementsByTagName('img').length===1)||(blue2===57&&document.getElementById('stop1').getElementsByTagName('img').length===3&&document.getElementById('blue1').getElementsByTagName('img').length===0)||(blue2===57&&document.getElementById('stop1').getElementsByTagName('img').length===0&&document.getElementById('blue1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3)||(number===2))){
                             blue.shift();}}else if(blue3>=53&&blue3!=58){if(((blue3===53&&blue0>53&&blue1>53&&blue2>53)||(blue3===53&&document.getElementById('stop1').getElementsByTagName('img').length===1&&document.getElementById('blue1').getElementsByTagName('img').length===2)||(blue3===53&&document.getElementById('stop1').getElementsByTagName('img').length===2&&document.getElementById('blue1').getElementsByTagName('img').length===1)||(blue3===53&&document.getElementById('stop1').getElementsByTagName('img').length===3&&document.getElementById('blue1').getElementsByTagName('img').length===0)||(blue3===53&&document.getElementById('stop1').getElementsByTagName('img').length===0&&document.getElementById('blue1').getElementsByTagName('img').length===3))&& (number===6)){
                               blue.shift();}else if(((blue3===54&&blue0>54&&blue1>54&&blue2>54)||(blue3===54&&document.getElementById('stop1').getElementsByTagName('img').length===1&&document.getElementById('blue1').getElementsByTagName('img').length===2)||(blue3===54&&document.getElementById('stop1').getElementsByTagName('img').length===2&&document.getElementById('blue1').getElementsByTagName('img').length===1)||(blue3===54&&document.getElementById('stop1').getElementsByTagName('img').length===3&&document.getElementById('blue1').getElementsByTagName('img').length===0)||(blue3===54&&document.getElementById('stop1').getElementsByTagName('img').length===0&&document.getElementById('blue1').getElementsByTagName('img').length===3))&&((number===6)||(number===5))){
                                 blue.shift();}else if(((blue3===55&&blue0>55&&blue1>55&&blue2>55)||(blue3===55&&document.getElementById('stop1').getElementsByTagName('img').length===1&&document.getElementById('blue1').getElementsByTagName('img').length===2)||(blue3===55&&document.getElementById('stop1').getElementsByTagName('img').length===2&&document.getElementById('blue1').getElementsByTagName('img').length===1)||(blue3===55&&document.getElementById('stop1').getElementsByTagName('img').length===3&&document.getElementById('blue1').getElementsByTagName('img').length===0)||(blue3===55&&document.getElementById('stop1').getElementsByTagName('img').length===0&&document.getElementById('blue1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4))){
                                   blue.shift();}else if(((blue3===56&&blue0>56&&blue1>56&&blue2>56)||(blue3===56&&document.getElementById('stop1').getElementsByTagName('img').length===1&&document.getElementById('blue1').getElementsByTagName('img').length===2)||(blue3===56&&document.getElementById('stop1').getElementsByTagName('img').length===2&&document.getElementById('blue1').getElementsByTagName('img').length===1)||(blue3===56&&document.getElementById('stop1').getElementsByTagName('img').length===3&&document.getElementById('blue1').getElementsByTagName('img').length===0)||(blue3===56&&document.getElementById('stop1').getElementsByTagName('img').length===0&&document.getElementById('blue1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3))){
                                     blue.shift();}else if(((blue3===57&&blue0>57&&blue1>57&&blue2>57)||(blue3===57&&document.getElementById('stop1').getElementsByTagName('img').length===1&&document.getElementById('blue1').getElementsByTagName('img').length===2)||(blue3===57&&document.getElementById('stop1').getElementsByTagName('img').length===2&&document.getElementById('blue1').getElementsByTagName('img').length===1)||(blue3===57&&document.getElementById('stop1').getElementsByTagName('img').length===3&&document.getElementById('blue1').getElementsByTagName('img').length===0)||(blue3===57&&document.getElementById('stop1').getElementsByTagName('img').length===0&&document.getElementById('blue1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3)||(number===2))){
                                       blue.shift();}}
    }}}
      if(playerNo===2){if (red.length>0){
        for(let i=0;i<red.length;i++){
          const number=Number(red[i]);
          if(red0>=53&&red0!=58){if(((red0===53&&red1>53&&red2>53&&red3>53)||(red0===53&&document.getElementById('stop2').getElementsByTagName('img').length===1&&document.getElementById('blue1').getElementsByTagName('img').length===2)||(red0===53&&document.getElementById('stop2').getElementsByTagName('img').length===2&&document.getElementById('red1').getElementsByTagName('img').length===1)||(red0===53&&document.getElementById('stop2').getElementsByTagName('img').length===3&&document.getElementById('red1').getElementsByTagName('img').length===0)||(red0===53&&document.getElementById('stop2').getElementsByTagName('img').length===0&&document.getElementById('red1').getElementsByTagName('img').length===3))&& (number===6)){
           red.shift();}else if(((red0===54&&red1>54&&red2>54&&red3>54)||(red0===54&&document.getElementById('stop2').getElementsByTagName('img').length===1&&document.getElementById('red1').getElementsByTagName('img').length===2)||(red0===54&&document.getElementById('stop2').getElementsByTagName('img').length===2&&document.getElementById('red1').getElementsByTagName('img').length===1)||(red0===54&&document.getElementById('stop2').getElementsByTagName('img').length===3&&document.getElementById('red1').getElementsByTagName('img').length===0)||(red0===54&&document.getElementById('stop2').getElementsByTagName('img').length===0&&document.getElementById('red1').getElementsByTagName('img').length===3))&&((number===6)||(number===5))){
            red.shift();}else if(((red0===55&&red1>55&&red2>55&&red3>55)||(red0===55&&document.getElementById('stop2').getElementsByTagName('img').length===1&&document.getElementById('red1').getElementsByTagName('img').length===2)||(red0===55&&document.getElementById('stop2').getElementsByTagName('img').length===2&&document.getElementById('red1').getElementsByTagName('img').length===1)||(red0===55&&document.getElementById('stop2').getElementsByTagName('img').length===3&&document.getElementById('red1').getElementsByTagName('img').length===0)||(red0===55&&document.getElementById('stop2').getElementsByTagName('img').length===0&&document.getElementById('red1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4))){
              red.shift();}else if(((red0===56&&red1>56&&red2>56&&red3>56)||(red0===56&&document.getElementById('stop2').getElementsByTagName('img').length===1&&document.getElementById('red1').getElementsByTagName('img').length===2)||(red0===56&&document.getElementById('stop2').getElementsByTagName('img').length===2&&document.getElementById('red1').getElementsByTagName('img').length===1)||(red0===56&&document.getElementById('stop2').getElementsByTagName('img').length===3&&document.getElementById('red1').getElementsByTagName('img').length===0)||(red0===56&&document.getElementById('stop2').getElementsByTagName('img').length===0&&document.getElementById('red1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3))){
                red.shift();}else if(((red0===57&&red1>57&&red2>57&&red3>57)||(red0===57&&document.getElementById('stop2').getElementsByTagName('img').length===1&&document.getElementById('red1').getElementsByTagName('img').length===2)||(red0===57&&document.getElementById('stop2').getElementsByTagName('img').length===2&&document.getElementById('red1').getElementsByTagName('img').length===1)||(red0===57&&document.getElementById('stop2').getElementsByTagName('img').length===3&&document.getElementById('red1').getElementsByTagName('img').length===0)||(red0===57&&document.getElementById('stop2').getElementsByTagName('img').length===0&&document.getElementById('red1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3)||(number===2))){
                  red.shift();}}else if(red1>=53&&red1!=58){if(((red1===53&&red0>53&&red2>53&red3>53)||(red1===53&&document.getElementById('stop2').getElementsByTagName('img').length===1&&document.getElementById('red1').getElementsByTagName('img').length===2)||(red1===53&&document.getElementById('stop2').getElementsByTagName('img').length===2&&document.getElementById('red1').getElementsByTagName('img').length===1)||(red1===53&&document.getElementById('stop2').getElementsByTagName('img').length===3&&document.getElementById('red1').getElementsByTagName('img').length===0)||(red1===53&&document.getElementById('stop2').getElementsByTagName('img').length===0&&document.getElementById('red1').getElementsByTagName('img').length===3))&& (number===6)){
                    red.shift();}else if(((red1===54&&red0>54&&red2>54&&red3>54)||(red1===54&&document.getElementById('stop2').getElementsByTagName('img').length===1&&document.getElementById('red1').getElementsByTagName('img').length===2)||(red1===54&&document.getElementById('stop2').getElementsByTagName('img').length===2&&document.getElementById('red1').getElementsByTagName('img').length===1)||(red1===54&&document.getElementById('stop2').getElementsByTagName('img').length===3&&document.getElementById('red1').getElementsByTagName('img').length===0)||(red1===54&&document.getElementById('stop2').getElementsByTagName('img').length===0&&document.getElementById('red1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5))){
                    red.shift();}else if(((red1===55&&red0>55&&red2>55&&red3>55)||(red1===55&&document.getElementById('stop2').getElementsByTagName('img').length===1&&document.getElementById('red1').getElementsByTagName('img').length===2)||(red1===55&&document.getElementById('stop2').getElementsByTagName('img').length===2&&document.getElementById('red1').getElementsByTagName('img').length===1)||(red1===55&&document.getElementById('stop2').getElementsByTagName('img').length===3&&document.getElementById('red1').getElementsByTagName('img').length===0)||(red1===55&&document.getElementById('stop2').getElementsByTagName('img').length===0&&document.getElementById('red1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4))){
                        red.shift();}else if(((red1===56&&red0>56&&red2>56&&red3>56)||(red1===56&&document.getElementById('stop2').getElementsByTagName('img').length===1&&document.getElementById('red1').getElementsByTagName('img').length===2)||(red1===56&&document.getElementById('stop2').getElementsByTagName('img').length===2&&document.getElementById('red1').getElementsByTagName('img').length===1)||(red1===56&&document.getElementById('stop2').getElementsByTagName('img').length===3&&document.getElementById('red1').getElementsByTagName('img').length===0)||(red1===56&&document.getElementById('stop2').getElementsByTagName('img').length===0&&document.getElementById('red1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3))){
                          red.shift();}else if(((red1===57&&red0>57&&red2>57&&red3>57)||(red1===57&&document.getElementById('stop2').getElementsByTagName('img').length===1&&document.getElementById('red1').getElementsByTagName('img').length===2)||(red1===57&&document.getElementById('stop2').getElementsByTagName('img').length===2&&document.getElementById('red1').getElementsByTagName('img').length===1)||(red1===57&&document.getElementById('stop2').getElementsByTagName('img').length===3&&document.getElementById('red1').getElementsByTagName('img').length===0)||(red1===57&&document.getElementById('stop2').getElementsByTagName('img').length===0&&document.getElementById('red1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3)||(number===2))){
                            red.shift();}}else if(red2>=53&&red2!=58){if(((red2===53&&red0>53&&red1>53&&red3>53)||(red2===53&&document.getElementById('stop2').getElementsByTagName('img').length===1&&document.getElementById('red1').getElementsByTagName('img').length===2)||(red2===53&&document.getElementById('stop2').getElementsByTagName('img').length===2&&document.getElementById('red1').getElementsByTagName('img').length===1)||(red2===53&&document.getElementById('stop2').getElementsByTagName('img').length===3&&document.getElementById('red1').getElementsByTagName('img').length===0)||(red2===53&&document.getElementById('stop2').getElementsByTagName('img').length===0&&document.getElementById('red1').getElementsByTagName('img').length===3))&& (number===6)){
                              red.shift();}else if(((red2===54&&red0>54&&red1>54&&red3>54)||(red2===54&&document.getElementById('stop2').getElementsByTagName('img').length===1&&document.getElementById('red1').getElementsByTagName('img').length===2)||(red2===54&&document.getElementById('stop2').getElementsByTagName('img').length===2&&document.getElementById('red1').getElementsByTagName('img').length===1)||(red2===54&&document.getElementById('stop2').getElementsByTagName('img').length===3&&document.getElementById('red1').getElementsByTagName('img').length===0)||(red2===54&&document.getElementById('stop2').getElementsByTagName('img').length===0&&document.getElementById('red1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5))){
                                red.shift();}else if(((red2===55&&red0>55&&red1>55&&red3>55)||(red2===55&&document.getElementById('stop2').getElementsByTagName('img').length===1&&document.getElementById('red1').getElementsByTagName('img').length===2)||(red2===55&&document.getElementById('stop2').getElementsByTagName('img').length===2&&document.getElementById('red1').getElementsByTagName('img').length===1)||(red2===55&&document.getElementById('stop2').getElementsByTagName('img').length===3&&document.getElementById('red1').getElementsByTagName('img').length===0)||(red2===55&&document.getElementById('stop2').getElementsByTagName('img').length===0&&document.getElementById('red1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4))){
                                  red.shift();}else if(((red2===56&&red0>56&&red1>56&&red3>56)||(red2===56&&document.getElementById('stop2').getElementsByTagName('img').length===1&&document.getElementById('red1').getElementsByTagName('img').length===2)||(red2===56&&document.getElementById('stop2').getElementsByTagName('img').length===2&&document.getElementById('red1').getElementsByTagName('img').length===1)||(red2===56&&document.getElementById('stop2').getElementsByTagName('img').length===3&&document.getElementById('red1').getElementsByTagName('img').length===0)||(red2===56&&document.getElementById('stop2').getElementsByTagName('img').length===0&&document.getElementById('red1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3))){
                                    red.shift();}else if(((red2===57&&red0>57&&red1>57&&red3>57)||(red2===57&&document.getElementById('stop2').getElementsByTagName('img').length===1&&document.getElementById('red1').getElementsByTagName('img').length===2)||(red2===57&&document.getElementById('stop2').getElementsByTagName('img').length===2&&document.getElementById('red1').getElementsByTagName('img').length===1)||(red2===57&&document.getElementById('stop2').getElementsByTagName('img').length===3&&document.getElementById('red1').getElementsByTagName('img').length===0)||(red2===57&&document.getElementById('stop2').getElementsByTagName('img').length===0&&document.getElementById('red1').getElementsByTagName('img').length===3))&&((number===6)||(number===5)||(number===4)||(number===3)||(number===2))){
                                      red.shift();}}else if(red3>=53&&red3!=58){if(((red3===53&&red0>53&&red1&&red3>53)||(red3===53&&document.getElementById('stop2').getElementsByTagName('img').length===1&&document.getElementById('red1').getElementsByTagName('img').length===2)||(red3===53&&document.getElementById('stop2').getElementsByTagName('img').length===2&&document.getElementById('red1').getElementsByTagName('img').length===1)||(red3===53&&document.getElementById('stop2').getElementsByTagName('img').length===3&&document.getElementById('red1').getElementsByTagName('img').length===0)||(red3===53&&document.getElementById('stop2').getElementsByTagName('img').length===0&&document.getElementById('red1').getElementsByTagName('img').length===3))&& (number===6)){
                                        red.shift();}else if(((red3===54&&red0>54&&red1>54&&blue2>54)||(red3===54&&document.getElementById('stop2').getElementsByTagName('img').length===1&&document.getElementById('red1').getElementsByTagName('img').length===2)||(red3===54&&document.getElementById('stop2').getElementsByTagName('img').length===2&&document.getElementById('red1').getElementsByTagName('img').length===1)||(red3===54&&document.getElementById('stop2').getElementsByTagName('img').length===3&&document.getElementById('red1').getElementsByTagName('img').length===0)||(red3===54&&document.getElementById('stop2').getElementsByTagName('img').length===0&&document.getElementById('red1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5))){
                                          red.shift();}else if(((red3===55&&red0>55&&red1>55&&blue2>55)||(red3===55&&document.getElementById('stop2').getElementsByTagName('img').length===1&&document.getElementById('red1').getElementsByTagName('img').length===2)||(red3===55&&document.getElementById('stop2').getElementsByTagName('img').length===2&&document.getElementById('red1').getElementsByTagName('img').length===1)||(red3===55&&document.getElementById('stop2').getElementsByTagName('img').length===3&&document.getElementById('red1').getElementsByTagName('img').length===0)||(red3===55&&document.getElementById('stop2').getElementsByTagName('img').length===0&&document.getElementById('red1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4))){
                                            red.shift();}else if(((red3===56&&red0>56&&red1>56&&blue2>56)||(red3===56&&document.getElementById('stop2').getElementsByTagName('img').length===1&&document.getElementById('red1').getElementsByTagName('img').length===2)||(red3===56&&document.getElementById('stop2').getElementsByTagName('img').length===2&&document.getElementById('red1').getElementsByTagName('img').length===1)||(red3===56&&document.getElementById('stop2').getElementsByTagName('img').length===3&&document.getElementById('red1').getElementsByTagName('img').length===0)||(red3===56&&document.getElementById('stop2').getElementsByTagName('img').length===0&&document.getElementById('red1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3))){
                                              red.shift();}else if(((red3===57&&red0>57&&red1>57&&blue2>57)||(red3===57&&document.getElementById('stop2').getElementsByTagName('img').length===1&&document.getElementById('red1').getElementsByTagName('img').length===2)||(red3===57&&document.getElementById('stop2').getElementsByTagName('img').length===2&&document.getElementById('red1').getElementsByTagName('img').length===1)||(red3===57&&document.getElementById('stop2').getElementsByTagName('img').length===3&&document.getElementById('red1').getElementsByTagName('img').length===0)||(red3===57&&document.getElementById('stop2').getElementsByTagName('img').length===0&&document.getElementById('red1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3)||(number===2))){
                                                red.shift();}}
             }}}
      if(playerNo===3){if (green.length>0){
        for(let i=0;i<green.length;i++){
          const number=Number(green[i]);
          if(green0>=53&&green0!=58){if(((green0===53&&green1>53&&green2>53&&green3>53)||(green0===53&&document.getElementById('stop3').getElementsByTagName('img').length===1&&document.getElementById('green1').getElementsByTagName('img').length===2)||(green0===53&&document.getElementById('stop3').getElementsByTagName('img').length===2&&document.getElementById('green1').getElementsByTagName('img').length===1)||(green0===53&&document.getElementById('stop3').getElementsByTagName('img').length===3&&document.getElementById('green1').getElementsByTagName('img').length===0)||(green0===53&&document.getElementById('stop3').getElementsByTagName('img').length===0&&document.getElementById('green1').getElementsByTagName('img').length===3))&& (number===6)){
           green.shift();}else if(((green0===54&&green1>54&&green2>54&&green3>54)||(green0===54&&document.getElementById('stop3').getElementsByTagName('img').length===1&&document.getElementById('green1').getElementsByTagName('img').length===2)||(green0===54&&document.getElementById('stop3').getElementsByTagName('img').length===2&&document.getElementById('green1').getElementsByTagName('img').length===1)||(green0===54&&document.getElementById('stop3').getElementsByTagName('img').length===3&&document.getElementById('green1').getElementsByTagName('img').length===0)||(green0===54&&document.getElementById('stop3').getElementsByTagName('img').length===0&&document.getElementById('green1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5))){
            green.shift();}else if(((green0===55&&green1>55&&green2>55&&green3>55)||(green0===55&&document.getElementById('stop3').getElementsByTagName('img').length===1&&document.getElementById('green1').getElementsByTagName('img').length===2)||(green0===55&&document.getElementById('stop3').getElementsByTagName('img').length===2&&document.getElementById('green1').getElementsByTagName('img').length===1)||(green0===55&&document.getElementById('stop3').getElementsByTagName('img').length===3&&document.getElementById('green1').getElementsByTagName('img').length===0)||(green0===55&&document.getElementById('stop3').getElementsByTagName('img').length===0&&document.getElementById('green1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4))){
              green.shift();}else if(((green0===56&&green1>56&&green2>56&&green3>56)||(green0===56&&document.getElementById('stop3').getElementsByTagName('img').length===1&&document.getElementById('green1').getElementsByTagName('img').length===2)||(green0===56&&document.getElementById('stop3').getElementsByTagName('img').length===2&&document.getElementById('green1').getElementsByTagName('img').length===1)||(green0===56&&document.getElementById('stop3').getElementsByTagName('img').length===3&&document.getElementById('green1').getElementsByTagName('img').length===0)||(green0===56&&document.getElementById('stop3').getElementsByTagName('img').length===0&&document.getElementById('green1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3))){
                green.shift();}else if(((green0===57&&green1>57&&green2>57&&green3>57)||(green0===57&&document.getElementById('stop3').getElementsByTagName('img').length===1&&document.getElementById('green1').getElementsByTagName('img').length===2)||(green0===57&&document.getElementById('stop3').getElementsByTagName('img').length===2&&document.getElementById('green1').getElementsByTagName('img').length===1)||(green0===57&&document.getElementById('stop3').getElementsByTagName('img').length===3&&document.getElementById('green1').getElementsByTagName('img').length===0)||(green0===57&&document.getElementById('stop3').getElementsByTagName('img').length===0&&document.getElementById('green1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3)||(number===2))){
                  green.shift();}}else if(green1>=53&&green1!=58){if(((green1===53&&green0>53&&green2>53&&green3>53)||(green1===53&&document.getElementById('stop3').getElementsByTagName('img').length===1&&document.getElementById('green1').getElementsByTagName('img').length===2)||(green1===53&&document.getElementById('stop3').getElementsByTagName('img').length===2&&document.getElementById('green1').getElementsByTagName('img').length===1)||(green1===53&&document.getElementById('stop3').getElementsByTagName('img').length===3&&document.getElementById('green1').getElementsByTagName('img').length===0)||(green1===53&&document.getElementById('stop3').getElementsByTagName('img').length===0&&document.getElementById('green1').getElementsByTagName('img').length===3))&& (number===6)){
                    green.shift();}else if(((green1===54&&green0>54&&green2>54&&green3>54)||(green1===54&&document.getElementById('stop3').getElementsByTagName('img').length===1&&document.getElementById('green1').getElementsByTagName('img').length===2)||(green1===54&&document.getElementById('stop3').getElementsByTagName('img').length===2&&document.getElementById('green1').getElementsByTagName('img').length===1)||(green1===54&&document.getElementById('stop3').getElementsByTagName('img').length===3&&document.getElementById('green1').getElementsByTagName('img').length===0)||(green1===54&&document.getElementById('stop3').getElementsByTagName('img').length===0&&document.getElementById('green1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5))){
                    green.shift();}else if(((green1===55&&green0>55&&green2>55&&green3>55)||(green1===55&&document.getElementById('stop3').getElementsByTagName('img').length===1&&document.getElementById('green1').getElementsByTagName('img').length===2)||(green1===55&&document.getElementById('stop3').getElementsByTagName('img').length===2&&document.getElementById('green1').getElementsByTagName('img').length===1)||(green1===55&&document.getElementById('stop3').getElementsByTagName('img').length===3&&document.getElementById('green1').getElementsByTagName('img').length===0)||(green1===55&&document.getElementById('stop3').getElementsByTagName('img').length===0&&document.getElementById('green1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4))){
                        green.shift();}else if(((green1===56&&green0>56&&green2>56&&green3>56)||(green1===56&&document.getElementById('stop3').getElementsByTagName('img').length===1&&document.getElementById('green1').getElementsByTagName('img').length===2)||(green1===56&&document.getElementById('stop3').getElementsByTagName('img').length===2&&document.getElementById('green1').getElementsByTagName('img').length===1)||(green1===56&&document.getElementById('stop3').getElementsByTagName('img').length===3&&document.getElementById('green1').getElementsByTagName('img').length===0)||(green1===56&&document.getElementById('stop3').getElementsByTagName('img').length===0&&document.getElementById('green1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3))){
                          green.shift();}else if(((green1===57&&green0>57&&green2>57&&green3>57)||(green1===57&&document.getElementById('stop3').getElementsByTagName('img').length===1&&document.getElementById('green1').getElementsByTagName('img').length===2)||(green1===57&&document.getElementById('stop3').getElementsByTagName('img').length===2&&document.getElementById('green1').getElementsByTagName('img').length===1)||(green1===57&&document.getElementById('stop3').getElementsByTagName('img').length===3&&document.getElementById('green1').getElementsByTagName('img').length===0)||(green1===57&&document.getElementById('stop3').getElementsByTagName('img').length===0&&document.getElementById('green1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3)||(number===2))){
                            green.shift();}}else if(green2>=53&&green2!=58){ if(((green2===53&&green0>53&&green1>53&&green3>53)||(green2===53&&document.getElementById('stop3').getElementsByTagName('img').length===1&&document.getElementById('green1').getElementsByTagName('img').length===2)||(green2===53&&document.getElementById('stop3').getElementsByTagName('img').length===2&&document.getElementById('green1').getElementsByTagName('img').length===1)||(green2===53&&document.getElementById('stop3').getElementsByTagName('img').length===3&&document.getElementById('green1').getElementsByTagName('img').length===0)||(green2===53&&document.getElementById('stop3').getElementsByTagName('img').length===0&&document.getElementById('green1').getElementsByTagName('img').length===3))&& (number===6)){
                              green.shift();}else if(((green2===54&&green0>54&&green1>54&&green3>54)||(green2===54&&document.getElementById('stop3').getElementsByTagName('img').length===1&&document.getElementById('green1').getElementsByTagName('img').length===2)||(green2===54&&document.getElementById('stop3').getElementsByTagName('img').length===2&&document.getElementById('green1').getElementsByTagName('img').length===1)||(green2===54&&document.getElementById('stop3').getElementsByTagName('img').length===3&&document.getElementById('green1').getElementsByTagName('img').length===0)||(green2===54&&document.getElementById('stop3').getElementsByTagName('img').length===0&&document.getElementById('green1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5))){
                                green.shift();}else if(((green2===55&&green0>55&&green1>55&&green3>55)||(green2===55&&document.getElementById('stop3').getElementsByTagName('img').length===1&&document.getElementById('green1').getElementsByTagName('img').length===2)||(green2===55&&document.getElementById('stop3').getElementsByTagName('img').length===2&&document.getElementById('green1').getElementsByTagName('img').length===1)||(green2===55&&document.getElementById('stop3').getElementsByTagName('img').length===3&&document.getElementById('green1').getElementsByTagName('img').length===0)||(green2===55&&document.getElementById('stop3').getElementsByTagName('img').length===0&&document.getElementById('green1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4))){
                                  green.shift();}else if(((green2===56&&green0>56&&green1>56&&green3>56)||(green2===56&&document.getElementById('stop3').getElementsByTagName('img').length===1&&document.getElementById('green1').getElementsByTagName('img').length===2)||(green2===56&&document.getElementById('stop3').getElementsByTagName('img').length===2&&document.getElementById('green1').getElementsByTagName('img').length===1)||(green2===56&&document.getElementById('stop3').getElementsByTagName('img').length===3&&document.getElementById('green1').getElementsByTagName('img').length===0)||(green2===56&&document.getElementById('stop3').getElementsByTagName('img').length===0&&document.getElementById('green1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3))){
                                    green.shift();}else if(((green2===57&&green0>57&&green1>57&&green3>57)||(green2===57&&document.getElementById('stop3').getElementsByTagName('img').length===1&&document.getElementById('green1').getElementsByTagName('img').length===2)||(green2===57&&document.getElementById('stop3').getElementsByTagName('img').length===2&&document.getElementById('green1').getElementsByTagName('img').length===1)||(green2===57&&document.getElementById('stop3').getElementsByTagName('img').length===3&&document.getElementById('green1').getElementsByTagName('img').length===0)||(green2===57&&document.getElementById('stop3').getElementsByTagName('img').length===0&&document.getElementById('green1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3)||(number===2))){
                                      green.shift();}}else if(green3>=53&&green3!=58){if(((green3===53&&green0>53&&green1>53&&green2>53)||(green3===53&&document.getElementById('stop3').getElementsByTagName('img').length===1&&document.getElementById('green1').getElementsByTagName('img').length===2)||(green3===53&&document.getElementById('stop3').getElementsByTagName('img').length===2&&document.getElementById('green1').getElementsByTagName('img').length===1)||(green3===53&&document.getElementById('stop3').getElementsByTagName('img').length===3&&document.getElementById('green1').getElementsByTagName('img').length===0)||(green3===53&&document.getElementById('stop3').getElementsByTagName('img').length===0&&document.getElementById('green1').getElementsByTagName('img').length===3))&& (number===6)){
                                        green.shift();}else if(((green3===54&&green0>54&&green1>54&&green2>54)||(green3===54&&document.getElementById('stop3').getElementsByTagName('img').length===1&&document.getElementById('green1').getElementsByTagName('img').length===2)||(green3===54&&document.getElementById('stop3').getElementsByTagName('img').length===2&&document.getElementById('green1').getElementsByTagName('img').length===1)||(green3===54&&document.getElementById('stop3').getElementsByTagName('img').length===3&&document.getElementById('green1').getElementsByTagName('img').length===0)||(green3===54&&document.getElementById('stop3').getElementsByTagName('img').length===0&&document.getElementById('green1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5))){
                                          green.shift();}else if(((green3===55&&green0>55&&green1>55&&green2>55)||(green3===55&&document.getElementById('stop3').getElementsByTagName('img').length===1&&document.getElementById('green1').getElementsByTagName('img').length===2)||(green3===55&&document.getElementById('stop3').getElementsByTagName('img').length===2&&document.getElementById('green1').getElementsByTagName('img').length===1)||(green3===55&&document.getElementById('stop3').getElementsByTagName('img').length===3&&document.getElementById('green1').getElementsByTagName('img').length===0)||(green3===55&&document.getElementById('stop3').getElementsByTagName('img').length===0&&document.getElementById('green1').getElementsByTagName('img').length===3))&&((number===6)||(number===5)||(number===4))){
                                            green.shift();}else if(((green3===56&&green0>56&&green1>56&&green2>56)||(green3===56&&document.getElementById('stop3').getElementsByTagName('img').length===1&&document.getElementById('green1').getElementsByTagName('img').length===2)||(green3===56&&document.getElementById('stop3').getElementsByTagName('img').length===2&&document.getElementById('green1').getElementsByTagName('img').length===1)||(green3===56&&document.getElementById('stop3').getElementsByTagName('img').length===3&&document.getElementById('green1').getElementsByTagName('img').length===0)||(green3===56&&document.getElementById('stop3').getElementsByTagName('img').length===0&&document.getElementById('green1').getElementsByTagName('img').length===3))&&((number===6)||(number===5)||(number===4)||(number===3))){
                                              green.shift();}else if(((green3===57&&green0>57&&green1>57&&green2>57)||(green3===57&&document.getElementById('stop3').getElementsByTagName('img').length===1&&document.getElementById('green1').getElementsByTagName('img').length===2)||(green3===57&&document.getElementById('stop3').getElementsByTagName('img').length===2&&document.getElementById('green1').getElementsByTagName('img').length===1)||(green3===57&&document.getElementById('stop3').getElementsByTagName('img').length===3&&document.getElementById('green1').getElementsByTagName('img').length===0)||(green3===57&&document.getElementById('stop3').getElementsByTagName('img').length===0&&document.getElementById('green1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3)||(number===2))){
                                                green.shift();}}
             }}}
if(playerNo===4){if (yellow.length>0){
  for(let i=0;i<yellow.length;i++){
    const number=Number(yellow[i]);
    if(yellow0>=53&&yellow0!=58){if(((yellow0===53&&yellow1>53&&yellow2>53&&yellow3>53)||(yellow0===53&&document.getElementById('stop4').getElementsByTagName('img').length===1&&document.getElementById('yellow1').getElementsByTagName('img').length===2)||(yellow0===53&&document.getElementById('stop4').getElementsByTagName('img').length===2&&document.getElementById('yellow1').getElementsByTagName('img').length===1)||(yellow0===53&&document.getElementById('stop4').getElementsByTagName('img').length===3&&document.getElementById('yellow1').getElementsByTagName('img').length===0)||(yellow0===53&&document.getElementById('stop4').getElementsByTagName('img').length===0&&document.getElementById('yellow1').getElementsByTagName('img').length===3))&& (number===6)){
     yellow.shift();}else if(((yellow0===54&&yellow1>54&&yellow2>54&&yellow3>54)||(yellow0===54&&document.getElementById('stop4').getElementsByTagName('img').length===1&&document.getElementById('yellow1').getElementsByTagName('img').length===2)||(yellow0===54&&document.getElementById('stop4').getElementsByTagName('img').length===2&&document.getElementById('yellow1').getElementsByTagName('img').length===1)||(yellow0===54&&document.getElementById('stop4').getElementsByTagName('img').length===3&&document.getElementById('yellow1').getElementsByTagName('img').length===0)||(yellow0===54&&document.getElementById('stop4').getElementsByTagName('img').length===0&&document.getElementById('yellow1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5))){
      yellow.shift();}else if(((yellow0===55&&yellow1>55&&yellow2>55&&yellow3>55)||(yellow0===55&&document.getElementById('stop4').getElementsByTagName('img').length===1&&document.getElementById('yellow1').getElementsByTagName('img').length===2)||(yellow0===55&&document.getElementById('stop4').getElementsByTagName('img').length===2&&document.getElementById('yellow1').getElementsByTagName('img').length===1)||(yellow0===55&&document.getElementById('stop4').getElementsByTagName('img').length===3&&document.getElementById('yellow1').getElementsByTagName('img').length===0)||(yellow0===55&&document.getElementById('stop4').getElementsByTagName('img').length===0&&document.getElementById('yellow1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4))){
        yellow.shift();}else if(((yellow0===56&&yellow1>56&&yellow2>56&&yellow3>56)||(yellow0===56&&document.getElementById('stop4').getElementsByTagName('img').length===1&&document.getElementById('yellow1').getElementsByTagName('img').length===2)||(yellow0===56&&document.getElementById('stop4').getElementsByTagName('img').length===2&&document.getElementById('yellow1').getElementsByTagName('img').length===1)||(yellow0===56&&document.getElementById('stop4').getElementsByTagName('img').length===3&&document.getElementById('yellow1').getElementsByTagName('img').length===0)||(yellow0===56&&document.getElementById('stop4').getElementsByTagName('img').length===0&&document.getElementById('yellow1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3))){
          yellow.shift();}else if(((yellow0===57&&yellow1>57&&yellow2>57&&yellow3>57)||(yellow0===57&&document.getElementById('stop4').getElementsByTagName('img').length===1&&document.getElementById('yellow1').getElementsByTagName('img').length===2)||(yellow0===57&&document.getElementById('stop4').getElementsByTagName('img').length===2&&document.getElementById('yellow1').getElementsByTagName('img').length===1)||(yellow0===57&&document.getElementById('stop4').getElementsByTagName('img').length===3&&document.getElementById('yellow1').getElementsByTagName('img').length===0)||(yellow0===57&&document.getElementById('stop4').getElementsByTagName('img').length===0&&document.getElementById('yellow1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3)||(number===2))){
            yellow.shift();}} else if(yellow1>=53&&yellow1!=58){if(((yellow1===53&&yellow0>53&&yellow2>53&&yellow3>53)||(yellow1===53&&document.getElementById('stop4').getElementsByTagName('img').length===1&&document.getElementById('yellow1').getElementsByTagName('img').length===2)||(yellow1===53&&document.getElementById('stop4').getElementsByTagName('img').length===2&&document.getElementById('yellow1').getElementsByTagName('img').length===1)||(yellow1===53&&document.getElementById('stop4').getElementsByTagName('img').length===3&&document.getElementById('yellow1').getElementsByTagName('img').length===0)||(yellow1===53&&document.getElementById('stop4').getElementsByTagName('img').length===0&&document.getElementById('yellow1').getElementsByTagName('img').length===3))&& (number===6)){
              yellow.shift();}else if(((yellow1===54&&yellow0>54&&yellow2>54&&yellow3>54)||(yellow1===54&&document.getElementById('stop4').getElementsByTagName('img').length===1&&document.getElementById('yellow1').getElementsByTagName('img').length===2)||(yellow1===54&&document.getElementById('stop4').getElementsByTagName('img').length===2&&document.getElementById('yellow1').getElementsByTagName('img').length===1)||(yellow1===54&&document.getElementById('stop4').getElementsByTagName('img').length===3&&document.getElementById('yellow1').getElementsByTagName('img').length===0)||(yellow1===54&&document.getElementById('stop4').getElementsByTagName('img').length===0&&document.getElementById('yellow1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5))){
              yellow.shift();}else if(((yellow1===55&&yellow0>55&&yellow2>55&&yellow3>55)||(yellow1===55&&document.getElementById('stop4').getElementsByTagName('img').length===1&&document.getElementById('yellow1').getElementsByTagName('img').length===2)||(yellow1===55&&document.getElementById('stop4').getElementsByTagName('img').length===2&&document.getElementById('yellow1').getElementsByTagName('img').length===1)||(yellow1===55&&document.getElementById('stop4').getElementsByTagName('img').length===3&&document.getElementById('yellow1').getElementsByTagName('img').length===0)||(yellow1===55&&document.getElementById('stop4').getElementsByTagName('img').length===0&&document.getElementById('yellow1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4))){
                  yellow.shift();}else if(((yellow1===56&&yellow0>56&&yellow2>56&&yellow3>56)||(yellow1===56&&document.getElementById('stop4').getElementsByTagName('img').length===1&&document.getElementById('yellow1').getElementsByTagName('img').length===2)||(yellow1===56&&document.getElementById('stop4').getElementsByTagName('img').length===2&&document.getElementById('yellow1').getElementsByTagName('img').length===1)||(yellow1===56&&document.getElementById('stop4').getElementsByTagName('img').length===3&&document.getElementById('yellow1').getElementsByTagName('img').length===0)||(yellow1===56&&document.getElementById('stop4').getElementsByTagName('img').length===0&&document.getElementById('yellow1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3))){
                    yellow.shift();}else if(((yellow1===57&&yellow0>57&&yellow2>57&&yellow3>57)||(yellow1===57&&document.getElementById('stop4').getElementsByTagName('img').length===1&&document.getElementById('yellow1').getElementsByTagName('img').length===2)||(yellow1===57&&document.getElementById('stop4').getElementsByTagName('img').length===2&&document.getElementById('yellow1').getElementsByTagName('img').length===1)||(yellow1===57&&document.getElementById('stop4').getElementsByTagName('img').length===3&&document.getElementById('yellow1').getElementsByTagName('img').length===0)||(yellow1===57&&document.getElementById('stop4').getElementsByTagName('img').length===0&&document.getElementById('yellow1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3)||(number===2))){
                      yellow.shift();}}else if(yellow2>=53&&yellow2!=58){ if(((yellow2===53&&yellow1>53&&yellow0>53&&yellow3>53)||(yellow2===53&&document.getElementById('stop4').getElementsByTagName('img').length===1&&document.getElementById('yellow1').getElementsByTagName('img').length===2)||(yellow2===53&&document.getElementById('stop4').getElementsByTagName('img').length===2&&document.getElementById('yellow1').getElementsByTagName('img').length===1)||(yellow2===53&&document.getElementById('stop4').getElementsByTagName('img').length===3&&document.getElementById('yellow1').getElementsByTagName('img').length===0)||(yellow2===53&&document.getElementById('stop4').getElementsByTagName('img').length===0&&document.getElementById('yellow1').getElementsByTagName('img').length===3))&& (number===6)){
                        yellow.shift();}else if(((yellow2===54&&yellow0>54&&yellow1>54&&yellow3>54)||(yellow2===54&&document.getElementById('stop4').getElementsByTagName('img').length===1&&document.getElementById('yellow1').getElementsByTagName('img').length===2)||(yellow2===54&&document.getElementById('stop4').getElementsByTagName('img').length===2&&document.getElementById('yellow1').getElementsByTagName('img').length===1)||(yellow2===54&&document.getElementById('stop4').getElementsByTagName('img').length===3&&document.getElementById('yellow1').getElementsByTagName('img').length===0)||(yellow2===54&&document.getElementById('stop4').getElementsByTagName('img').length===0&&document.getElementById('yellow1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5))){
                          yellow.shift();}else if(((yellow2===55&&yellow0>55&&yellow1>55&&yellow3>55)||(yellow2===55&&document.getElementById('stop4').getElementsByTagName('img').length===1&&document.getElementById('yellow1').getElementsByTagName('img').length===2)||(yellow2===55&&document.getElementById('stop4').getElementsByTagName('img').length===2&&document.getElementById('yellow1').getElementsByTagName('img').length===1)||(yellow2===55&&document.getElementById('stop4').getElementsByTagName('img').length===3&&document.getElementById('yellow1').getElementsByTagName('img').length===0)||(yellow2===55&&document.getElementById('stop4').getElementsByTagName('img').length===0&&document.getElementById('yellow1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4))){
                            yellow.shift();}else if(((yellow2===56&&yellow0>56&&yellow1>56&&yellow3>56)||(yellow2===56&&document.getElementById('stop4').getElementsByTagName('img').length===1&&document.getElementById('yellow1').getElementsByTagName('img').length===2)||(yellow2===56&&document.getElementById('stop4').getElementsByTagName('img').length===2&&document.getElementById('yellow1').getElementsByTagName('img').length===1)||(yellow2===56&&document.getElementById('stop4').getElementsByTagName('img').length===3&&document.getElementById('yellow1').getElementsByTagName('img').length===0)||(yellow2===56&&document.getElementById('stop4').getElementsByTagName('img').length===0&&document.getElementById('yellow1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3))){
                              yellow.shift();}else if(((yellow2===57&&yellow0>57&&yellow1>57&&yellow3>57)||(yellow2===57&&document.getElementById('stop4').getElementsByTagName('img').length===1&&document.getElementById('yellow1').getElementsByTagName('img').length===2)||(yellow2===57&&document.getElementById('stop4').getElementsByTagName('img').length===2&&document.getElementById('yellow1').getElementsByTagName('img').length===1)||(yellow2===57&&document.getElementById('stop4').getElementsByTagName('img').length===3&&document.getElementById('yellow1').getElementsByTagName('img').length===0)||(yellow2===57&&document.getElementById('stop4').getElementsByTagName('img').length===0&&document.getElementById('yellow1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3)||(number===2))){
                                yellow.shift();}}else if(yellow3>=53&&yellow3!=58){ if(((yellow3===53&&yellow1>53&&yellow2>53&&yellow0>53)||(yellow3===53&&document.getElementById('stop4').getElementsByTagName('img').length===1&&document.getElementById('yellow1').getElementsByTagName('img').length===2)||(yellow3===53&&document.getElementById('stop4').getElementsByTagName('img').length===2&&document.getElementById('yellow1').getElementsByTagName('img').length===1)||(yellow3===53&&document.getElementById('stop4').getElementsByTagName('img').length===3&&document.getElementById('yellow1').getElementsByTagName('img').length===0)||(yellow3===53&&document.getElementById('stop4').getElementsByTagName('img').length===0&&document.getElementById('yellow1').getElementsByTagName('img').length===3))&& (number===6)){
                                  yellow.shift();}else if(((yellow3===54&&yellow0>54&&yellow1>54&&yellow2>54)||(yellow3===54&&document.getElementById('stop4').getElementsByTagName('img').length===1&&document.getElementById('yellow1').getElementsByTagName('img').length===2)||(yellow3===54&&document.getElementById('stop4').getElementsByTagName('img').length===2&&document.getElementById('yellow1').getElementsByTagName('img').length===1)||(yellow3===54&&document.getElementById('stop4').getElementsByTagName('img').length===3&&document.getElementById('yellow1').getElementsByTagName('img').length===0)||(yellow3===54&&document.getElementById('stop4').getElementsByTagName('img').length===0&&document.getElementById('yellow1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5))){
                                    yellow.shift();}else if(((yellow3===55&&yellow0>55&&yellow1>55&&yellow2>55)||(yellow3===55&&document.getElementById('stop4').getElementsByTagName('img').length===1&&document.getElementById('yellow1').getElementsByTagName('img').length===2)||(yellow3===55&&document.getElementById('stop4').getElementsByTagName('img').length===2&&document.getElementById('yellow1').getElementsByTagName('img').length===1)||(yellow3===55&&document.getElementById('stop4').getElementsByTagName('img').length===3&&document.getElementById('yellow1').getElementsByTagName('img').length===0)||(yellow3===55&&document.getElementById('stop4').getElementsByTagName('img').length===0&&document.getElementById('yellow1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4))){
                                      yellow.shift();}else if(((yellow3===56&&yellow0>56&&yellow1>56&&yellow2>56)||(yellow3===56&&document.getElementById('stop4').getElementsByTagName('img').length===1&&document.getElementById('yellow1').getElementsByTagName('img').length===2)||(yellow3===56&&document.getElementById('stop4').getElementsByTagName('img').length===2&&document.getElementById('yellow1').getElementsByTagName('img').length===1)||(yellow3===56&&document.getElementById('stop4').getElementsByTagName('img').length===3&&document.getElementById('yellow1').getElementsByTagName('img').length===0)||(yellow3===56&&document.getElementById('stop4').getElementsByTagName('img').length===0&&document.getElementById('yellow1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3))){
                                        yellow.shift();}else if(((yellow3===57&&yellow0>57&&yellow1>57&&yellow2>57)||(yellow3===57&&document.getElementById('stop4').getElementsByTagName('img').length===1&&document.getElementById('yellow1').getElementsByTagName('img').length===2)||(yellow3===57&&document.getElementById('stop4').getElementsByTagName('img').length===2&&document.getElementById('yellow1').getElementsByTagName('img').length===1)||(yellow3===57&&document.getElementById('stop4').getElementsByTagName('img').length===3&&document.getElementById('yellow1').getElementsByTagName('img').length===0)||(yellow3===57&&document.getElementById('stop4').getElementsByTagName('img').length===0&&document.getElementById('yellow1').getElementsByTagName('img').length===3))&& ((number===6)||(number===5)||(number===4)||(number===3)||(number===2))){
                                          yellow.shift();}}
       }}}
   this.update();

                      }
                      
                 eventListen=(id,idset)=>{
                  const{red,green,blue,yellow,}=this.state;

                   
                   console.log('hello event listener', id,idset)
                   if(id==='red'){
                     if (red.length>0){
                    for(let i=0;i<1;i++){
                      const number=Number(red[i]);
                        if(idset==='red0'){ this.setState((prevState)=>{return {red0 :prevState.red0 + number} },()=>this.update())
                       
                        
                      }else if(idset==='red1'){this.setState((prevState)=>{return {red1 :prevState.red1 + number} },()=>this.update())
                      
                      
                    }else if(idset==='red2'){this.setState((prevState)=>{return {red2 :prevState.red2 + number} },()=>this.update())
                    
                  }else if(idset==='red3'){this.setState((prevState)=>{return {red3 :prevState.red3 + number} },()=>this.update());
                }
                this.state.red.shift();
                
                   
                  
                  }
                }  
                  }
                  if(id==='green'){
                    if(green.length>0){
                      for(let i=0;i<1;i++){
                        const number=Number(green[i]);
                        if(idset==='green0'){if(this.state.green0===51&&number===2){
                          this.setState((prevState)=>{return {green0 :52-prevState.green0 }},()=>this.update()
                         )}else if(this.state.green0===51&&number===3){
                          this.setState((prevState)=>{return {green0 :53-prevState.green0 }},()=>this.update()
                         )}else if(this.state.green0===51&&number===4){
                          this.setState((prevState)=>{return {green0 :54-prevState.green0 }},()=>this.update()
                         )}else if(this.state.green0===51&&number===5){
                          this.setState((prevState)=>{return {green0 :55-prevState.green0 }},()=>this.update()
                         )}else if(this.state.green0===51&&number===6){
                          this.setState((prevState)=>{return {green0 :56-prevState.green0 }},()=>this.update()
                         )}else if(this.state.green0===50&&number===3){
                          this.setState((prevState)=>{return {green0 :51-prevState.green0 }},()=>this.update()
                         )}else if(this.state.green0===50&&number===4){
                          this.setState((prevState)=>{return {green0 :52-prevState.green0 }},()=>this.update()
                         )}else if(this.state.green0===50&&number===5){
                          this.setState((prevState)=>{return {green0 :53-prevState.green0 }},()=>this.update()
                         )}else if(this.state.green0===50&&number===6){
                          this.setState((prevState)=>{return {green0 :54-prevState.green0 }},()=>this.update()
                         )}else if(this.state.green0===49&&number===4){
                          this.setState((prevState)=>{return {green0 :50-prevState.green0 }},()=>this.update()
                         )}else if(this.state.green0===49&&number===5){
                          this.setState((prevState)=>{return {green0 :51-prevState.green0 }},()=>this.update()
                         )}else if(this.state.green0===49&&number===6){
                          this.setState((prevState)=>{return {green0 :52-prevState.green0 }},()=>this.update()
                         )}else if(this.state.green0===48&&number===5){
                          this.setState((prevState)=>{return {green0 :49-prevState.green0 }},()=>this.update()
                         )}else if(this.state.green0===48&&number===6){
                          this.setState((prevState)=>{return {green0 :50-prevState.green0 }},()=>this.update()
                         )}else if(this.state.green0===47&&number===6){
                          this.setState((prevState)=>{return {green0 :48-prevState.green0 }},()=>this.update()
                         )}else if(this.state.green0===52&&number===1){
                          this.setState((prevState)=>{return {green0 :prevState.green0 -51}},()=>this.update()
                         )}else if(this.state.green0===52&&number===2){
                          this.setState((prevState)=>{return {green0 :prevState.green0 -50}},()=>this.update()
                         )}else if(this.state.green0===52&&number===3){
                          this.setState((prevState)=>{return {green0 :prevState.green0 -49}},()=>this.update()
                         )}else if(this.state.green0===52&&number===4){
                          this.setState((prevState)=>{return {green0 :prevState.green0 -48}},()=>this.update()
                         )}else if(this.state.green0===52&&number===5){
                          this.setState((prevState)=>{return {green0 :prevState.green0 -47}},()=>this.update()
                         )}else if(this.state.green0===52&&number===6){
                          this.setState((prevState)=>{return {green0 :prevState.green0 -46}},()=>this.update()
                         )}else if(this.state.green0==12&&number==1){
                          this.setState((prevState)=>{return {green0 :prevState.green0 + 41}},()=>this.update()
                         )}else if(this.state.green0==12&&number==2){
                          this.setState((prevState)=>{return {green0 :prevState.green0 + 42}},()=>this.update()
                         )}else if(this.state.green0==12&&number==3){
                          this.setState((prevState)=>{return {green0 :prevState.green0 + 43}},()=>this.update()
                         )}else if(this.state.green0==12&&number==4){
                          this.setState((prevState)=>{return {green0 :prevState.green0 + 44}},()=>this.update()
                         )}else if(this.state.green0==12&&number==6){
                          this.setState((prevState)=>{return {green0 :prevState.green0 + 46}},()=>this.update()
                         )}else if(this.state.green0==12&&number==5){
                          this.setState((prevState)=>{return {green0 :prevState.green0 + 45}},()=>this.update()
                         )}else if(this.state.green0==8&&number==6){
                          this.setState((prevState)=>{return {green0 :prevState.green0 + 46}},()=>this.update()
                         )}else if(this.state.green0==8&&number==5){
                          this.setState((prevState)=>{return {green0 :prevState.green0 + 45}},()=>this.update()
                         )}else if(this.state.green0==9&&number==6){
                          this.setState((prevState)=>{return {green0 :prevState.green0 + 46}},()=>this.update()
                         )}else if(this.state.green0==9&&number==5){
                          this.setState((prevState)=>{return {green0 :prevState.green0 + 45}},()=>this.update()
                         )}else if(this.state.green0==9&&number==4){
                          this.setState((prevState)=>{return {green0 :prevState.green0 + 44}},()=>this.update()
                         )}else if(this.state.green0==10&&number==6){
                          this.setState((prevState)=>{return {green0 :prevState.green0 + 46}},()=>this.update()
                         )}else if(this.state.green0==10&&number==5){
                          this.setState((prevState)=>{return {green0 :prevState.green0 + 45}},()=>this.update()
                         )}else if(this.state.green0==10&&number==4){
                          this.setState((prevState)=>{return {green0 :prevState.green0 + 44}},()=>this.update()
                         )}else if(this.state.green0==10&&number==3){
                          this.setState((prevState)=>{return {green0 :prevState.green0 + 43}},()=>this.update()
                         )}else if(this.state.green0==11&&number==6){
                          this.setState((prevState)=>{return {green0 :prevState.green0 + 46}},()=>this.update()
                         )}else if(this.state.green0==11&&number==5){
                          this.setState((prevState)=>{return {green0 :prevState.green0 + 45}},()=>this.update()
                         )}else if(this.state.green0==11&&number==4){
                          this.setState((prevState)=>{return {green0 :prevState.green0 + 44}},()=>this.update()
                         )}else if(this.state.green0==11&&number==3){this.setState((prevState)=>{
                           return {green0 :prevState.green0 + 43}},()=>this.update()
                         )}else if(this.state.green0==11&&number==2){
                          this.setState((prevState)=>{return {green0 :prevState.green0 + 42}},()=>this.update()
                         )}else{this.setState((prevState)=>{
                          return {green0 :prevState.green0 + number} },()=>this.update())}
                      }else if(idset==='green1'){if(this.state.green1===51&&number===2){
                        this.setState((prevState)=>{return {green1 :52-prevState.green1 }},()=>this.update()
                       )}else if(this.state.green1===51&&number===3){
                        this.setState((prevState)=>{return {green1 :53-prevState.green1 }},()=>this.update()
                       )}else if(this.state.green1===51&&number===4){
                        this.setState((prevState)=>{return {green1 :54-prevState.green1 }},()=>this.update()
                       )}else if(this.state.green1===51&&number===5){
                        this.setState((prevState)=>{return {green1 :55-prevState.green1 }},()=>this.update()
                       )}else if(this.state.green1===51&&number===6){
                        this.setState((prevState)=>{return {green1 :56-prevState.green1 }},()=>this.update()
                       )}else if(this.state.green1===50&&number===3){
                        this.setState((prevState)=>{return {green1 :51-prevState.green1 }},()=>this.update()
                       )}else if(this.state.green1===50&&number===4){
                        this.setState((prevState)=>{return {green1 :52-prevState.green1 }},()=>this.update()
                       )}else if(this.state.green1===50&&number===5){
                        this.setState((prevState)=>{return {green1 :53-prevState.green1 }},()=>this.update()
                       )}else if(this.state.green1===50&&number===6){
                        this.setState((prevState)=>{return {green1 :54-prevState.green1 }},()=>this.update()
                       )}else if(this.state.green1===49&&number===4){
                        this.setState((prevState)=>{return {green1 :50-prevState.green1 }},()=>this.update()
                       )}else if(this.state.green1===49&&number===5){
                        this.setState((prevState)=>{return {green1 :51-prevState.green1 }},()=>this.update()
                       )}else if(this.state.green1===49&&number===6){
                        this.setState((prevState)=>{return {green1 :52-prevState.green1 }},()=>this.update()
                       )}else if(this.state.green1===48&&number===5){
                        this.setState((prevState)=>{return {green1 :49-prevState.green1 }},()=>this.update()
                       )}else if(this.state.green1===48&&number===6){
                        this.setState((prevState)=>{return {green1 :50-prevState.green1 }},()=>this.update()
                       )}else if(this.state.green1===47&&number===6){
                        this.setState((prevState)=>{return {green1 :48-prevState.green1 }},()=>this.update()
                       )}else if(this.state.green1===52&&number===1){
                        this.setState((prevState)=>{return {green1 :prevState.green1 -51}},()=>this.update()
                       )}else if(this.state.green1===52&&number===2){
                        this.setState((prevState)=>{return {green1 :prevState.green1 -50}},()=>this.update()
                       )}else if(this.state.green1===52&&number===3){
                        this.setState((prevState)=>{return {green1 :prevState.green1 -49}},()=>this.update()
                       )}else if(this.state.green1===52&&number===4){
                        this.setState((prevState)=>{return {green1 :prevState.green1 -48}},()=>this.update()
                       )}else if(this.state.green1===52&&number===5){
                        this.setState((prevState)=>{return {green1 :prevState.green1 -47}},()=>this.update()
                       )}else if(this.state.green1===52&&number===6){
                        this.setState((prevState)=>{return {green1 :prevState.green1 -46}},()=>this.update()
                       )}else if(this.state.green1==12&&number==1){
                        this.setState((prevState)=>{return {green1 :prevState.green1 + 41}},()=>this.update()
                       )}else if(this.state.green1==12&&number==2){
                        this.setState((prevState)=>{return {green1 :prevState.green1 + 42}},()=>this.update()
                       )}else if(this.state.green1==12&&number==3){
                        this.setState((prevState)=>{return {green1 :prevState.green1 + 43}},()=>this.update()
                       )}else if(this.state.green1==12&&number==4){
                        this.setState((prevState)=>{return {green1 :prevState.green1 + 44}},()=>this.update()
                       )}else if(this.state.green1==12&&number==6){
                        this.setState((prevState)=>{return {green1 :prevState.green1 + 46}},()=>this.update()
                       )}else if(this.state.green1==12&&number==5){
                        this.setState((prevState)=>{return {green1 :prevState.green1 + 45}},()=>this.update()
                       )}else if(this.state.green1==7&&number==6){
                        this.setState((prevState)=>{return {green1 :prevState.green1 + 46}},()=>this.update()
                       )}else if(this.state.green1==8&&number==6){
                        this.setState((prevState)=>{return {green1 :prevState.green1 + 46}},()=>this.update()
                       )}else if(this.state.green1==8&&number==5){
                        this.setState((prevState)=>{return {green1 :prevState.green1 + 45}},()=>this.update()
                       )}else if(this.state.green1==9&&number==6){
                        this.setState((prevState)=>{return {green1 :prevState.green1 + 46}},()=>this.update()
                       )}else if(this.state.green1==9&&number==5){
                        this.setState((prevState)=>{return {green1 :prevState.green1 + 45}},()=>this.update()
                       )}else if(this.state.green1==9&&number==4){
                        this.setState((prevState)=>{return {green1 :prevState.green1 + 44}},()=>this.update()
                       )}else if(this.state.green1==10&&number==6){
                        this.setState((prevState)=>{return {green1 :prevState.green1 + 46}},()=>this.update()
                       )}else if(this.state.green1==10&&number==5){
                        this.setState((prevState)=>{return {green1 :prevState.green1 + 45}},()=>this.update()
                       )}else if(this.state.green1==10&&number==4){
                        this.setState((prevState)=>{return {green1 :prevState.green1 + 44}},()=>this.update()
                       )}else if(this.state.green1==10&&number==3){
                        this.setState((prevState)=>{return {green1 :prevState.green1 + 43}},()=>this.update()
                       )}else if(this.state.green1==11&&number==6){
                        this.setState((prevState)=>{return {green1 :prevState.green1 + 46}},()=>this.update()
                       )}else if(this.state.green1==11&&number==5){
                        this.setState((prevState)=>{return {green1 :prevState.green1 + 45}},()=>this.update()
                       )}else if(this.state.green1==11&&number==4){
                        this.setState((prevState)=>{return {green1 :prevState.green1 + 44}},()=>this.update()
                       )}else if(this.state.green1==11&&number==3){this.setState((prevState)=>{
                         return {green1 :prevState.green1 + 43}},()=>this.update()
                       )}else if(this.state.green1==11&&number==2){
                        this.setState((prevState)=>{return {green1 :prevState.green1 + 42}},()=>this.update()
                       )}else{ this.setState((prevState)=>{ return {green1 :prevState.green1+ number}},()=>this.update())}
                    }else if(idset==='green2'){if(this.state.green2===51&&number===2){
                      this.setState((prevState)=>{return {green2 :52-prevState.green2 }},()=>this.update()
                     )}else if(this.state.green2===51&&number===3){
                      this.setState((prevState)=>{return {green2 :53-prevState.green2 }},()=>this.update()
                     )}else if(this.state.green2===51&&number===4){
                      this.setState((prevState)=>{return {green2 :54-prevState.green2 }},()=>this.update()
                     )}else if(this.state.green2===51&&number===5){
                      this.setState((prevState)=>{return {green2 :55-prevState.green2 }},()=>this.update()
                     )}else if(this.state.green2===51&&number===6){
                      this.setState((prevState)=>{return {green2 :56-prevState.green2 }},()=>this.update()
                     )}else if(this.state.green2===50&&number===3){
                      this.setState((prevState)=>{return {green2 :51-prevState.green2 }},()=>this.update()
                     )}else if(this.state.green2===50&&number===4){
                      this.setState((prevState)=>{return {green2 :52-prevState.green2 }},()=>this.update()
                     )}else if(this.state.green2===50&&number===5){
                      this.setState((prevState)=>{return {green2 :53-prevState.green2 }},()=>this.update()
                     )}else if(this.state.green2===50&&number===6){
                      this.setState((prevState)=>{return {green2 :54-prevState.green2 }},()=>this.update()
                     )}else if(this.state.green2===49&&number===4){
                      this.setState((prevState)=>{return {green2 :50-prevState.green2 }},()=>this.update()
                     )}else if(this.state.green2===49&&number===5){
                      this.setState((prevState)=>{return {green2 :51-prevState.green2 }},()=>this.update()
                     )}else if(this.state.green2===49&&number===6){
                      this.setState((prevState)=>{return {green2 :52-prevState.green2 }},()=>this.update()
                     )}else if(this.state.green2===48&&number===5){
                      this.setState((prevState)=>{return {green2 :49-prevState.green2 }},()=>this.update()
                     )}else if(this.state.green2===48&&number===6){
                      this.setState((prevState)=>{return {green2 :50-prevState.green2 }},()=>this.update()
                     )}else if(this.state.green2===47&&number===6){
                      this.setState((prevState)=>{return {green2 :48-prevState.green2 }},()=>this.update()
                     )}else if(this.state.green2===52&&number===1){
                      this.setState((prevState)=>{return {green2 :prevState.green2 -51}},()=>this.update()
                     )}else if(this.state.green2===52&&number===2){
                      this.setState((prevState)=>{return {green2 :prevState.green2 -50}},()=>this.update()
                     )}else if(this.state.green2===52&&number===3){
                      this.setState((prevState)=>{return {green2 :prevState.green2 -49}},()=>this.update()
                     )}else if(this.state.green2===52&&number===4){
                      this.setState((prevState)=>{return {green2 :prevState.green2 -48}},()=>this.update()
                     )}else if(this.state.green2===52&&number===5){
                      this.setState((prevState)=>{return {green2 :prevState.green2 -47}},()=>this.update()
                     )}else if(this.state.green2===52&&number===6){
                      this.setState((prevState)=>{return {green2 :prevState.green2 -46}},()=>this.update()
                     )}else if(this.state.green2==12&&number==1){
                      this.setState((prevState)=>{return {green2 :prevState.green2 + 41}},()=>this.update()
                     )}else if(this.state.green2==12&&number==2){
                      this.setState((prevState)=>{return {green2 :prevState.green2 + 42}},()=>this.update()
                     )}else if(this.state.green2==12&&number==3){
                      this.setState((prevState)=>{return {green2 :prevState.green2 + 43}},()=>this.update()
                     )}else if(this.state.green2==12&&number==4){
                      this.setState((prevState)=>{return {green2 :prevState.green2 + 44}},()=>this.update()
                     )}else if(this.state.green2==12&&number==6){
                      this.setState((prevState)=>{return {green2 :prevState.green2 + 46}},()=>this.update()
                     )}else if(this.state.green2==12&&number==5){
                      this.setState((prevState)=>{return {green2 :prevState.green2 + 45}},()=>this.update()
                     )}else if(this.state.green2==7&&number==6){
                      this.setState((prevState)=>{return {green2 :prevState.green2 + 46}},()=>this.update()
                     )}else if(this.state.green2==8&&number==6){
                      this.setState((prevState)=>{return {green2 :prevState.green2 + 46}},()=>this.update()
                     )}else if(this.state.green2==8&&number==5){
                      this.setState((prevState)=>{return {green2 :prevState.green2 + 45}},()=>this.update()
                     )}else if(this.state.green2==9&&number==6){
                      this.setState((prevState)=>{return {green2 :prevState.green2 + 46}},()=>this.update()
                     )}else if(this.state.green2==9&&number==5){
                      this.setState((prevState)=>{return {green2 :prevState.green2 + 45}},()=>this.update()
                     )}else if(this.state.green2==9&&number==4){
                      this.setState((prevState)=>{return {green2 :prevState.green2 + 44}},()=>this.update()
                     )}else if(this.state.green2==10&&number==6){
                      this.setState((prevState)=>{return {green2 :prevState.green2 + 46}},()=>this.update()
                     )}else if(this.state.green2==10&&number==5){
                      this.setState((prevState)=>{return {green2 :prevState.green2 + 45}},()=>this.update()
                     )}else if(this.state.green2==10&&number==4){
                      this.setState((prevState)=>{return {green2 :prevState.green2 + 44}},()=>this.update()
                     )}else if(this.state.green2==10&&number==3){
                      this.setState((prevState)=>{return {green2 :prevState.green2 + 43}},()=>this.update()
                     )}else if(this.state.green2==11&&number==6){
                      this.setState((prevState)=>{return {green2 :prevState.green2 + 46}},()=>this.update()
                     )}else if(this.state.green2==11&&number==5){
                      this.setState((prevState)=>{return {green2 :prevState.green2 + 45}},()=>this.update()
                     )}else if(this.state.green2==11&&number==4){
                      this.setState((prevState)=>{return {green2 :prevState.green2 + 44}},()=>this.update()
                     )}else if(this.state.green2==11&&number==3){this.setState((prevState)=>{
                       return {green2 :prevState.green2 + 43}},()=>this.update()
                     )}else if(this.state.green2==11&&number==2){
                      this.setState((prevState)=>{return {green2 :prevState.green2 + 42}},()=>this.update()
                     )}else{ this.setState((prevState)=>{ return {green2 :prevState.green2+ number}},()=>this.update())}

              }else if(idset==='green3'){if(this.state.green3===51&&number===2){
                this.setState((prevState)=>{return {green3 :52-prevState.green3 }},()=>this.update()
               )}else if(this.state.green3===51&&number===3){
                this.setState((prevState)=>{return {green3 :53-prevState.green3 }},()=>this.update()
               )}else if(this.state.green3===51&&number===4){
                this.setState((prevState)=>{return {green3 :54-prevState.green3 }},()=>this.update()
               )}else if(this.state.green3===51&&number===5){
                this.setState((prevState)=>{return {green3 :55-prevState.green3 }},()=>this.update()
               )}else if(this.state.green3===51&&number===6){
                this.setState((prevState)=>{return {green3 :56-prevState.green3 }},()=>this.update()
               )}else if(this.state.green3===50&&number===3){
                this.setState((prevState)=>{return {green3 :51-prevState.green3 }},()=>this.update()
               )}else if(this.state.green3===50&&number===4){
                this.setState((prevState)=>{return {green3 :52-prevState.green3 }},()=>this.update()
               )}else if(this.state.green3===50&&number===5){
                this.setState((prevState)=>{return {green3 :53-prevState.green3 }},()=>this.update()
               )}else if(this.state.green3===50&&number===6){
                this.setState((prevState)=>{return {green3 :54-prevState.green3 }},()=>this.update()
               )}else if(this.state.green3===49&&number===4){
                this.setState((prevState)=>{return {green3 :50-prevState.green3 }},()=>this.update()
               )}else if(this.state.green3===49&&number===5){
                this.setState((prevState)=>{return {green3 :51-prevState.green3 }},()=>this.update()
               )}else if(this.state.green3===49&&number===6){
                this.setState((prevState)=>{return {green3 :52-prevState.green3 }},()=>this.update()
               )}else if(this.state.green3===48&&number===5){
                this.setState((prevState)=>{return {green3 :49-prevState.green3 }},()=>this.update()
               )}else if(this.state.green3===48&&number===6){
                this.setState((prevState)=>{return {green3 :50-prevState.green3 }},()=>this.update()
               )}else if(this.state.green3===47&&number===6){
                this.setState((prevState)=>{return {green3 :48-prevState.green3 }},()=>this.update()
               )}else if(this.state.green3===52&&number===1){
                this.setState((prevState)=>{return {green3 :prevState.green3 -51}},()=>this.update()
               )}else if(this.state.green3===52&&number===2){
                this.setState((prevState)=>{return {green3 :prevState.green3 -50}},()=>this.update()
               )}else if(this.state.green3===52&&number===3){
                this.setState((prevState)=>{return {green3 :prevState.green3 -49}},()=>this.update()
               )}else if(this.state.green3===52&&number===4){
                this.setState((prevState)=>{return {green3 :prevState.green3 -48}},()=>this.update()
               )}else if(this.state.green3===52&&number===5){
                this.setState((prevState)=>{return {green3 :prevState.green3 -47}},()=>this.update()
               )}else if(this.state.green3===52&&number===6){
                this.setState((prevState)=>{return {green3 :prevState.green3 -46}},()=>this.update()
               )}else if(this.state.green3==12&&number==1){
                this.setState((prevState)=>{return {green3 :prevState.green3 + 41}},()=>this.update()
               )}else if(this.state.green3==12&&number==2){
                this.setState((prevState)=>{return {green3 :prevState.green3 + 42}},()=>this.update()
               )}else if(this.state.green3==12&&number==3){
                this.setState((prevState)=>{return {green3 :prevState.green3 + 43}},()=>this.update()
               )}else if(this.state.green3==12&&number==4){
                this.setState((prevState)=>{return {green3 :prevState.green3 + 44}},()=>this.update()
               )}else if(this.state.green3==12&&number==6){
                this.setState((prevState)=>{return {green3 :prevState.green3 + 46}},()=>this.update()
               )}else if(this.state.green3==12&&number==5){
                this.setState((prevState)=>{return {green3 :prevState.green3 + 45}},()=>this.update()
               )}else if(this.state.green3==7&&number==6){
                this.setState((prevState)=>{return {green3 :prevState.green3 + 46}},()=>this.update()
               )}else if(this.state.green3==8&&number==6){
                this.setState((prevState)=>{return {green3 :prevState.green3 + 46}},()=>this.update()
               )}else if(this.state.green3==8&&number==5){
                this.setState((prevState)=>{return {green3 :prevState.green3 + 45}},()=>this.update()
               )}else if(this.state.green3==9&&number==6){
                this.setState((prevState)=>{return {green3 :prevState.green3 + 46}},()=>this.update()
               )}else if(this.state.green3==9&&number==5){
                this.setState((prevState)=>{return {green3 :prevState.green3 + 45}},()=>this.update()
               )}else if(this.state.green3==9&&number==4){
                this.setState((prevState)=>{return {green3 :prevState.green3 + 44}},()=>this.update()
               )}else if(this.state.green3==10&&number==6){
                this.setState((prevState)=>{return {green3 :prevState.green3 + 46}},()=>this.update()
               )}else if(this.state.green3==10&&number==5){
                this.setState((prevState)=>{return {green3 :prevState.green3 + 45}},()=>this.update()
               )}else if(this.state.green3==10&&number==4){
                this.setState((prevState)=>{return {green3 :prevState.green3 + 44}},()=>this.update()
               )}else if(this.state.green3==10&&number==3){
                this.setState((prevState)=>{return {green3 :prevState.green3 + 43}},()=>this.update()
               )}else if(this.state.green3==11&&number==6){
                this.setState((prevState)=>{return {green3 :prevState.green3 + 46}},()=>this.update()
               )}else if(this.state.green3==11&&number==5){
                this.setState((prevState)=>{return {green3 :prevState.green3 + 45}},()=>this.update()
               )}else if(this.state.green3==11&&number==4){
                this.setState((prevState)=>{return {green3 :prevState.green3 + 44}},()=>this.update()
               )}else if(this.state.green3==11&&number==3){this.setState((prevState)=>{
                 return {green3 :prevState.green3 + 43}},()=>this.update()
               )}else if(this.state.green3==11&&number==2){
                this.setState((prevState)=>{return {green3 :prevState.green3 + 42}},()=>this.update()
               )}else{ this.setState((prevState)=>{ return {green3 :prevState.green3+ number}},()=>this.update())}
              }
              this.state.green.shift();  
                      }
            }
                        }
                        
                        if(id==='yellow') {
                          if (yellow.length>0){
                            for(var i=0;i<1;i++){
                             const number=Number(yellow[i]);
                             console.log(typeof(number))
                             if(idset==='yellow0'){if(this.state.yellow0===51&&number===2){
                              this.setState((prevState)=>{return {yellow0 :52-prevState.yellow0 }},()=>this.update()
                             )}else if(this.state.yellow0===51&&number===3){
                              this.setState((prevState)=>{return {yellow0 :53-prevState.yellow0 }},()=>this.update()
                             )}else if(this.state.yellow0===51&&number===4){
                              this.setState((prevState)=>{return {yellow0 :54-prevState.yellow0 }},()=>this.update()
                             )}else if(this.state.yellow0===51&&number===5){
                              this.setState((prevState)=>{return {yellow0 :55-prevState.yellow0 }},()=>this.update()
                             )}else if(this.state.yellow0===51&&number===6){
                              this.setState((prevState)=>{return {yellow0 :56-prevState.yellow0 }},()=>this.update()
                             )}else if(this.state.yellow0===50&&number===3){
                              this.setState((prevState)=>{return {yellow0 :51-prevState.yellow0 }},()=>this.update()
                             )}else if(this.state.yellow0===50&&number===4){
                              this.setState((prevState)=>{return {yellow0 :52-prevState.yellow0 }},()=>this.update()
                             )}else if(this.state.yellow0===50&&number===5){
                              this.setState((prevState)=>{return {yellow0 :53-prevState.yellow0 }},()=>this.update()
                             )}else if(this.state.yellow0===50&&number===6){
                              this.setState((prevState)=>{return {yellow0 :54-prevState.yellow0 }},()=>this.update()
                             )}else if(this.state.yellow0===49&&number===4){
                              this.setState((prevState)=>{return {yellow0 :50-prevState.yellow0 }},()=>this.update()
                             )}else if(this.state.yellow0===49&&number===5){
                              this.setState((prevState)=>{return {yellow0 :51-prevState.yellow0 }},()=>this.update()
                             )}else if(this.state.yellow0===49&&number===6){
                              this.setState((prevState)=>{return {yellow0 :52-prevState.yellow0 }},()=>this.update()
                             )}else if(this.state.yellow0===48&&number===5){
                              this.setState((prevState)=>{return {yellow0 :49-prevState.yellow0 }},()=>this.update()
                             )}else if(this.state.yellow0===48&&number===6){
                              this.setState((prevState)=>{return {yellow0 :50-prevState.yellow0 }},()=>this.update()
                             )}else if(this.state.yellow0===47&&number===6){
                              this.setState((prevState)=>{return {yellow0 :48-prevState.yellow0 }},()=>this.update()
                             )}else if(this.state.yellow0===52&&number===1){
                              this.setState((prevState)=>{return {yellow0 :prevState.yellow0 -51}},()=>this.update()
                             )}else if(this.state.yellow0===52&&number===2){
                              this.setState((prevState)=>{return {yellow0 :prevState.yellow0 -50}},()=>this.update()
                             )}else if(this.state.yellow0===52&&number===3){
                              this.setState((prevState)=>{return {yellow0 :prevState.yellow0 -49}},()=>this.update()
                             )}else if(this.state.yellow0===52&&number===4){
                              this.setState((prevState)=>{return {yellow0 :prevState.yellow0 -48}},()=>this.update()
                             )}else if(this.state.yellow0===52&&number===5){
                              this.setState((prevState)=>{return {yellow0 :prevState.yellow0 -47}},()=>this.update()
                             )}else if(this.state.yellow0===52&&number===6){
                              this.setState((prevState)=>{return {yellow0 :prevState.yellow0 -46}},()=>this.update()
                             )}else if(this.state.yellow0===25&&number===1){
                              this.setState((prevState)=>{return {yellow0 :prevState.yellow0 + 28}},()=>this.update()
                             )}else if(this.state.yellow0===25&&number===2){
                              this.setState((prevState)=>{return {yellow0 :prevState.yellow0 + 29}},()=>this.update()
                             )}else if(this.state.yellow0===25&&number===3){
                              this.setState((prevState)=>{return {yellow0 :prevState.yellow0 + 30}},()=>this.update()
                             )}else if(this.state.yellow0===25&&number===4){
                              this.setState((prevState)=>{return {yellow0 :prevState.yellow0 + 31}},()=>this.update()
                             )}else if(this.state.yellow0===25&&number===6){
                              this.setState((prevState)=>{return {yellow0 :prevState.yellow0 + 33}},()=>this.update()
                             )}else if(this.state.yellow0===25&&number===5){
                              this.setState((prevState)=>{return {yellow0 :prevState.yellow0 + 32}},()=>this.update()
                             )}else if(this.state.yellow0===20&&number===6){
                                this.setState((prevState)=>{return {yellow0 :prevState.yellow0 + 32}},()=>this.update())
                               }else if(this.state.yellow0===21&&number===6){
                                this.setState((prevState)=>{return {yellow0 :prevState.yellow0 + 33}},()=>this.update())
                               }else if(this.state.yellow0===21&&number===5){
                                this.setState((prevState)=>{return {yellow0 :prevState.yellow0 + 34}},()=>this.update())
                               }else if(this.state.yellow0===22&&number===6){
                               this.setState((prevState)=>{ return {yellow0 :prevState.yellow0 + 33}},()=>this.update())
                               }else if(this.state.yellow0===22&&number===5){
                                this.setState((prevState)=>{return {yellow0 :prevState.yellow0 + 32}},()=>this.update())
                               }else if(this.state.yellow0===22&&number===4){
                               this.setState((prevState)=>{ return {yellow0 :prevState.yellow0 + 31}},()=>this.update())
                               }else if(this.state.yellow0===23&&number===6){
                                this.setState((prevState)=>{return {yellow0 :prevState.yellow0 + 33}},()=>this.update())
                               }else if(this.state.yellow0===23&&number===5){
                               this.setState((prevState)=>{ return {yellow0 :prevState.yellow0 + 32}},()=>this.update())
                               }else if(this.state.yellow0===23&&number===4){
                               this.setState((prevState)=>{ return {yellow0 :prevState.yellow0 + 31}},()=>this.update())
                               }else if(this.state.yellow0===23&&number===3){
                               this.setState((prevState)=>{ return {yellow0 :prevState.yellow0 + 30}},()=>this.update())
                               }else if(this.state.yellow0===24&&number===6){
                               this.setState((prevState)=>{ return {yellow0 :prevState.yellow0 + 33}},()=>this.update())
                               }else if(this.state.yellow0===24&&number===5){
                               this.setState((prevState)=>{ return {yellow0 :prevState.yellow0 + 32}},()=>this.update())
                               }else if(this.state.yellow0===24&&number===4){
                               this.setState((prevState)=>{ return {yellow0 :prevState.yellow0 + 31}},()=>this.update())
                               }else if(this.state.yellow0===24&&number===3){
                               this.setState((prevState)=>{ return {yellow0 :prevState.yellow0 + 30}},()=>this.update())
                               }else if(this.state.yellow0===24&&number===2){
                               this.setState((prevState)=>{ return {yellow0 :prevState.yellow0 + 29}},()=>this.update())
                               }else{
                               this.setState((prevState)=>{return {yellow0 :prevState.yellow0 + number}} ,()=>this.update())
                            }}else if(idset==='yellow1'){if(this.state.yellow1===51&&number===2){
                              this.setState((prevState)=>{return {yellow1 :52-prevState.yellow1 }},()=>this.update()
                             )}else if(this.state.yellow1===51&&number===3){
                              this.setState((prevState)=>{return {yellow1 :53-prevState.yellow1 }},()=>this.update()
                             )}else if(this.state.yellow1===51&&number===4){
                              this.setState((prevState)=>{return {yellow1 :54-prevState.yellow1 }},()=>this.update()
                             )}else if(this.state.yellow1===51&&number===5){
                              this.setState((prevState)=>{return {yellow1 :55-prevState.yellow1 }},()=>this.update()
                             )}else if(this.state.yellow1===51&&number===6){
                              this.setState((prevState)=>{return {yellow1 :56-prevState.yellow1 }},()=>this.update()
                             )}else if(this.state.yellow1===50&&number===3){
                              this.setState((prevState)=>{return {yellow1 :51-prevState.yellow1 }},()=>this.update()
                             )}else if(this.state.yellow1===50&&number===4){
                              this.setState((prevState)=>{return {yellow1 :52-prevState.yellow1 }},()=>this.update()
                             )}else if(this.state.yellow1===50&&number===5){
                              this.setState((prevState)=>{return {yellow1 :53-prevState.yellow1 }},()=>this.update()
                             )}else if(this.state.yellow1===50&&number===6){
                              this.setState((prevState)=>{return {yellow1 :54-prevState.yellow1 }},()=>this.update()
                             )}else if(this.state.yellow1===49&&number===4){
                              this.setState((prevState)=>{return {yellow1 :50-prevState.yellow1 }},()=>this.update()
                             )}else if(this.state.yellow1===49&&number===5){
                              this.setState((prevState)=>{return {yellow1 :51-prevState.yellow1 }},()=>this.update()
                             )}else if(this.state.yellow1===49&&number===6){
                              this.setState((prevState)=>{return {yellow1 :52-prevState.yellow1 }},()=>this.update()
                             )}else if(this.state.yellow1===48&&number===5){
                              this.setState((prevState)=>{return {yellow1 :49-prevState.yellow1 }},()=>this.update()
                             )}else if(this.state.yellow1===48&&number===6){
                              this.setState((prevState)=>{return {yellow1 :50-prevState.yellow1 }},()=>this.update()
                             )}else if(this.state.yellow1===47&&number===6){
                              this.setState((prevState)=>{return {yellow1 :48-prevState.yellow1 }},()=>this.update()
                             )}else if(this.state.yellow1===52&&number===1){
                              this.setState((prevState)=>{return {yellow1 :prevState.yellow1 -51}},()=>this.update()
                             )}else if(this.state.yellow1===52&&number===2){
                              this.setState((prevState)=>{return {yellow1 :prevState.yellow1 -50}},()=>this.update()
                             )}else if(this.state.yellow1===52&&number===3){
                              this.setState((prevState)=>{return {yellow1 :prevState.yellow1 -49}},()=>this.update()
                             )}else if(this.state.yellow1===52&&number===4){
                              this.setState((prevState)=>{return {yellow1 :prevState.yellow1 -48}},()=>this.update()
                             )}else if(this.state.yellow1===52&&number===5){
                              this.setState((prevState)=>{return {yellow1 :prevState.yellow1 -47}},()=>this.update()
                             )}else if(this.state.yellow1===52&&number===6){
                              this.setState((prevState)=>{return {yellow1 :prevState.yellow1 -46}},()=>this.update()
                             )}else if(this.state.yellow1===25&&number===1){
                              this.setState((prevState)=>{return {yellow1 :prevState.yellow1 + 28}},()=>this.update()
                             )}else if(this.state.yellow1===25&&number===2){
                              this.setState((prevState)=>{return {yellow1 :prevState.yellow1 + 29}},()=>this.update()
                             )}else if(this.state.yellow1===25&&number===3){
                              this.setState((prevState)=>{return {yellow1 :prevState.yellow1 + 30}},()=>this.update()
                             )}else if(this.state.yellow1===25&&number===4){
                              this.setState((prevState)=>{return {yellow1 :prevState.yellow1 + 31}},()=>this.update()
                             )}else if(this.state.yellow1===25&&number===6){
                              this.setState((prevState)=>{return {yellow1 :prevState.yellow1 + 33}},()=>this.update()
                             )}else if(this.state.yellow1===25&&number===5){
                              this.setState((prevState)=>{return {yellow1 :prevState.yellow1 + 32}},()=>this.update()
                             )}else  if(this.state.yellow1===20&&number===6){
                              this.setState((prevState)=>{return {yellow1 :prevState.yellow1 + 32}},()=>this.update())
                             }else if(this.state.yellow1===21&&number===6){
                              this.setState((prevState)=>{return {yellow1 :prevState.yellow1 + 33}},()=>this.update())
                             }else if(this.state.yellow1===21&&number===5){
                              this.setState((prevState)=>{return {yellow1 :prevState.yellow1 + 34}},()=>this.update())
                             }else if(this.state.yellow1===22&&number===6){
                             this.setState((prevState)=>{ return {yellow1 :prevState.yellow1 + 33}},()=>this.update())
                             }else if(this.state.yellow1===22&&number===5){
                              this.setState((prevState)=>{return {yellow1 :prevState.yellow1 + 32}},()=>this.update())
                             }else if(this.state.yellow1===22&&number===4){
                             this.setState((prevState)=>{ return {yellow1 :prevState.yellow1 + 31}},()=>this.update())
                             }else if(this.state.yellow1===23&&number===6){
                              this.setState((prevState)=>{return {yellow1 :prevState.yellow1 + 33}},()=>this.update())
                             }else if(this.state.yellow1===23&&number===5){
                             this.setState((prevState)=>{ return {yellow1 :prevState.yellow1 + 32}},()=>this.update())
                             }else if(this.state.yellow1===23&&number===4){
                             this.setState((prevState)=>{ return {yellow1 :prevState.yellow1 + 31}},()=>this.update())
                             }else if(this.state.yellow1===23&&number===3){
                             this.setState((prevState)=>{ return {yellow1 :prevState.yellow1 + 30}},()=>this.update())
                             }else if(this.state.yellow1===24&&number===6){
                             this.setState((prevState)=>{ return {yellow1 :prevState.yellow1 + 33}},()=>this.update())
                             }else if(this.state.yellow1===24&&number===5){
                             this.setState((prevState)=>{ return {yellow1 :prevState.yellow1 + 32}},()=>this.update())
                             }else if(this.state.yellow1===24&&number===4){
                             this.setState((prevState)=>{ return {yellow1 :prevState.yellow1 + 31}},()=>this.update())
                             }else if(this.state.yellow1===24&&number===3){
                             this.setState((prevState)=>{ return {yellow1 :prevState.yellow1 + 30}},()=>this.update())
                             }else if(this.state.yellow1===24&&number===2){
                             this.setState((prevState)=>{ return {yellow1 :prevState.yellow1 + 29}},()=>this.update())
                             }else{
                             this.setState((prevState)=>{return {yellow1 :prevState.yellow1 + number}} ,()=>this.update())
                          }
                          }else if(idset==='yellow2'){if(this.state.yellow2===51&&number===2){
                            this.setState((prevState)=>{return {yellow2 :52-prevState.yellow2 }},()=>this.update()
                           )}else if(this.state.yellow2===51&&number===3){
                            this.setState((prevState)=>{return {yellow2 :53-prevState.yellow2 }},()=>this.update()
                           )}else if(this.state.yellow2===51&&number===4){
                            this.setState((prevState)=>{return {yellow2 :54-prevState.yellow2 }},()=>this.update()
                           )}else if(this.state.yellow2===51&&number===5){
                            this.setState((prevState)=>{return {yellow2 :55-prevState.yellow2 }},()=>this.update()
                           )}else if(this.state.yellow2===51&&number===6){
                            this.setState((prevState)=>{return {yellow2 :56-prevState.yellow2 }},()=>this.update()
                           )}else if(this.state.yellow2===50&&number===3){
                            this.setState((prevState)=>{return {yellow2 :51-prevState.yellow2 }},()=>this.update()
                           )}else if(this.state.yellow2===50&&number===4){
                            this.setState((prevState)=>{return {yellow2 :52-prevState.yellow2 }},()=>this.update()
                           )}else if(this.state.yellow2===50&&number===5){
                            this.setState((prevState)=>{return {yellow2 :53-prevState.yellow2 }},()=>this.update()
                           )}else if(this.state.yellow2===50&&number===6){
                            this.setState((prevState)=>{return {yellow2 :54-prevState.yellow2 }},()=>this.update()
                           )}else if(this.state.yellow2===49&&number===4){
                            this.setState((prevState)=>{return {yellow2 :50-prevState.yellow2 }},()=>this.update()
                           )}else if(this.state.yellow2===49&&number===5){
                            this.setState((prevState)=>{return {yellow2 :51-prevState.yellow2 }},()=>this.update()
                           )}else if(this.state.yellow2===49&&number===6){
                            this.setState((prevState)=>{return {yellow2 :52-prevState.yellow2 }},()=>this.update()
                           )}else if(this.state.yellow2===48&&number===5){
                            this.setState((prevState)=>{return {yellow2 :49-prevState.yellow2 }},()=>this.update()
                           )}else if(this.state.yellow2===48&&number===6){
                            this.setState((prevState)=>{return {yellow2 :50-prevState.yellow2 }},()=>this.update()
                           )}else if(this.state.yellow2===47&&number===6){
                            this.setState((prevState)=>{return {yellow2 :48-prevState.yellow2 }},()=>this.update()
                           )}else if(this.state.yellow2===52&&number===1){
                            this.setState((prevState)=>{return {yellow2 :prevState.yellow2 -51}},()=>this.update()
                           )}else if(this.state.yellow2===52&&number===2){
                            this.setState((prevState)=>{return {yellow2 :prevState.yellow2 -50}},()=>this.update()
                           )}else if(this.state.yellow2===52&&number===3){
                            this.setState((prevState)=>{return {yellow2 :prevState.yellow2 -49}},()=>this.update()
                           )}else if(this.state.yellow2===52&&number===4){
                            this.setState((prevState)=>{return {yellow2 :prevState.yellow2 -48}},()=>this.update()
                           )}else if(this.state.yellow2===52&&number===5){
                            this.setState((prevState)=>{return {yellow2 :prevState.yellow2 -47}},()=>this.update()
                           )}else if(this.state.yellow2===52&&number===6){
                            this.setState((prevState)=>{return {yellow2 :prevState.yellow2 -46}},()=>this.update()
                           )}else if(this.state.yellow2===25&&number===1){
                            this.setState((prevState)=>{return {yellow2 :prevState.yellow2 + 28}},()=>this.update()
                           )}else if(this.state.yellow2===25&&number===2){
                            this.setState((prevState)=>{return {yellow2 :prevState.yellow2 + 29}},()=>this.update()
                           )}else if(this.state.yellow2===25&&number===3){
                            this.setState((prevState)=>{return {yellow2 :prevState.yellow2 + 30}},()=>this.update()
                           )}else if(this.state.yellow2===25&&number===4){
                            this.setState((prevState)=>{return {yellow2 :prevState.yellow2 + 31}},()=>this.update()
                           )}else if(this.state.yellow2===25&&number===6){
                            this.setState((prevState)=>{return {yellow2 :prevState.yellow2 + 33}},()=>this.update()
                           )}else if(this.state.yellow2===25&&number===5){
                            this.setState((prevState)=>{return {yellow2 :prevState.yellow2 + 32}},()=>this.update()
                           )}else  if(this.state.yellow2===20&&number===6){
                            this.setState((prevState)=>{return {yellow2 :prevState.yellow2 + 32}},()=>this.update())
                           }else if(this.state.yellow2===21&&number===6){
                            this.setState((prevState)=>{return {yellow2 :prevState.yellow2 + 33}},()=>this.update())
                           }else if(this.state.yellow2===21&&number===5){
                            this.setState((prevState)=>{return {yellow2 :prevState.yellow2 + 34}},()=>this.update())
                           }else if(this.state.yellow2===22&&number===6){
                           this.setState((prevState)=>{ return {yellow2 :prevState.yellow2 + 33}},()=>this.update())
                           }else if(this.state.yellow2===22&&number===5){
                            this.setState((prevState)=>{return {yellow2 :prevState.yellow2 + 32}},()=>this.update())
                           }else if(this.state.yellow2===22&&number===4){
                           this.setState((prevState)=>{ return {yellow2 :prevState.yellow2 + 31}},()=>this.update())
                           }else if(this.state.yellow2===23&&number===6){
                            this.setState((prevState)=>{return {yellow2 :prevState.yellow2 + 33}},()=>this.update())
                           }else if(this.state.yellow2===23&&number===5){
                           this.setState((prevState)=>{ return {yellow2 :prevState.yellow2 + 32}},()=>this.update())
                           }else if(this.state.yellow2===23&&number===4){
                           this.setState((prevState)=>{ return {yellow2 :prevState.yellow2 + 31}},()=>this.update())
                           }else if(this.state.yellow2===23&&number===3){
                           this.setState((prevState)=>{ return {yellow2 :prevState.yellow2 + 30}},()=>this.update())
                           }else if(this.state.yellow2===24&&number===6){
                           this.setState((prevState)=>{ return {yellow2 :prevState.yellow2 + 33}},()=>this.update())
                           }else if(this.state.yellow2===24&&number===5){
                           this.setState((prevState)=>{ return {yellow2 :prevState.yellow2 + 32}},()=>this.update())
                           }else if(this.state.yellow2===24&&number===4){
                           this.setState((prevState)=>{ return {yellow2 :prevState.yellow2 + 31}},()=>this.update())
                           }else if(this.state.yellow2===24&&number===3){
                           this.setState((prevState)=>{ return {yellow2 :prevState.yellow2 + 30}},()=>this.update())
                           }else if(this.state.yellow2===24&&number===2){
                           this.setState((prevState)=>{ return {yellow2 :prevState.yellow2 + 29}},()=>this.update())
                           }else{
                           this.setState((prevState)=>{return {yellow2 :prevState.yellow2 + number}} ,()=>this.update())
                        }
                        }else if(idset==='yellow3'){ if(this.state.yellow3===51&&number===2){
                          this.setState((prevState)=>{return {yellow3 :52-prevState.yellow3 }},()=>this.update()
                         )}else if(this.state.yellow3===51&&number===3){
                          this.setState((prevState)=>{return {yellow3 :53-prevState.yellow3 }},()=>this.update()
                         )}else if(this.state.yellow3===51&&number===4){
                          this.setState((prevState)=>{return {yellow3 :54-prevState.yellow3 }},()=>this.update()
                         )}else if(this.state.yellow3===51&&number===5){
                          this.setState((prevState)=>{return {yellow3 :55-prevState.yellow3 }},()=>this.update()
                         )}else if(this.state.yellow3===51&&number===6){
                          this.setState((prevState)=>{return {yellow3 :56-prevState.yellow3 }},()=>this.update()
                         )}else if(this.state.yellow3===50&&number===3){
                          this.setState((prevState)=>{return {yellow3 :51-prevState.yellow3 }},()=>this.update()
                         )}else if(this.state.yellow3===50&&number===4){
                          this.setState((prevState)=>{return {yellow3 :52-prevState.yellow3 }},()=>this.update()
                         )}else if(this.state.yellow3===50&&number===5){
                          this.setState((prevState)=>{return {yellow3 :53-prevState.yellow3 }},()=>this.update()
                         )}else if(this.state.yellow3===50&&number===6){
                          this.setState((prevState)=>{return {yellow3 :54-prevState.yellow3 }},()=>this.update()
                         )}else if(this.state.yellow3===49&&number===4){
                          this.setState((prevState)=>{return {yellow3 :50-prevState.yellow3 }},()=>this.update()
                         )}else if(this.state.yellow3===49&&number===5){
                          this.setState((prevState)=>{return {yellow3 :51-prevState.yellow3 }},()=>this.update()
                         )}else if(this.state.yellow3===49&&number===6){
                          this.setState((prevState)=>{return {yellow3 :52-prevState.yellow3 }},()=>this.update()
                         )}else if(this.state.yellow3===48&&number===5){
                          this.setState((prevState)=>{return {yellow3 :49-prevState.yellow3 }},()=>this.update()
                         )}else if(this.state.yellow3===48&&number===6){
                          this.setState((prevState)=>{return {yellow3 :50-prevState.yellow3 }},()=>this.update()
                         )}else if(this.state.yellow3===47&&number===6){
                          this.setState((prevState)=>{return {yellow3 :48-prevState.yellow3 }},()=>this.update()
                         )}else if(this.state.yellow3===52&&number===1){
                          this.setState((prevState)=>{return {yellow3 :prevState.yellow3 -51}},()=>this.update()
                         )}else if(this.state.yellow3===52&&number===2){
                          this.setState((prevState)=>{return {yellow3 :prevState.yellow3 -50}},()=>this.update()
                         )}else if(this.state.yellow3===52&&number===3){
                          this.setState((prevState)=>{return {yellow3 :prevState.yellow3 -49}},()=>this.update()
                         )}else if(this.state.yellow3===52&&number===4){
                          this.setState((prevState)=>{return {yellow3 :prevState.yellow3 -48}},()=>this.update()
                         )}else if(this.state.yellow3===52&&number===5){
                          this.setState((prevState)=>{return {yellow3 :prevState.yellow3 -47}},()=>this.update()
                         )}else if(this.state.yellow3===52&&number===6){
                          this.setState((prevState)=>{return {yellow3 :prevState.yellow3 -46}},()=>this.update()
                         )}else if(this.state.yellow3===25&&number===1){
                          this.setState((prevState)=>{return {yellow3 :prevState.yellow3 + 28}},()=>this.update()
                         )}else if(this.state.yellow3===25&&number===2){
                          this.setState((prevState)=>{return {yellow3 :prevState.yellow3 + 29}},()=>this.update()
                         )}else if(this.state.yellow3===25&&number===3){
                          this.setState((prevState)=>{return {yellow3 :prevState.yellow3 + 30}},()=>this.update()
                         )}else if(this.state.yellow3===25&&number===4){
                          this.setState((prevState)=>{return {yellow3 :prevState.yellow3 + 31}},()=>this.update()
                         )}else if(this.state.yellow3===25&&number===6){
                          this.setState((prevState)=>{return {yellow3 :prevState.yellow3 + 33}},()=>this.update()
                         )}else if(this.state.yellow3===25&&number===5){
                          this.setState((prevState)=>{return {yellow3 :prevState.yellow3 + 32}},()=>this.update()
                         )}else  if(this.state.yellow3===20&&number===6){
                          this.setState((prevState)=>{return {yellow3 :prevState.yellow3 + 32}},()=>this.update())
                         }else if(this.state.yellow3===21&&number===6){
                          this.setState((prevState)=>{return {yellow3 :prevState.yellow3 + 33}},()=>this.update())
                         }else if(this.state.yellow3===21&&number===5){
                          this.setState((prevState)=>{return {yellow3 :prevState.yellow3 + 34}},()=>this.update())
                         }else if(this.state.yellow3===22&&number===6){
                         this.setState((prevState)=>{ return {yellow3 :prevState.yellow3 + 33}},()=>this.update())
                         }else if(this.state.yellow3===22&&number===5){
                          this.setState((prevState)=>{return {yellow3 :prevState.yellow3 + 32}},()=>this.update())
                         }else if(this.state.yellow3===22&&number===4){
                         this.setState((prevState)=>{ return {yellow3 :prevState.yellow3 + 31}},()=>this.update())
                         }else if(this.state.yellow3===23&&number===6){
                          this.setState((prevState)=>{return {yellow3 :prevState.yellow3 + 33}},()=>this.update())
                         }else if(this.state.yellow3===23&&number===5){
                         this.setState((prevState)=>{ return {yellow3 :prevState.yellow3 + 32}},()=>this.update())
                         }else if(this.state.yellow3===23&&number===4){
                         this.setState((prevState)=>{ return {yellow3 :prevState.yellow3 + 31}},()=>this.update())
                         }else if(this.state.yellow3===23&&number===3){
                         this.setState((prevState)=>{ return {yellow3 :prevState.yellow3 + 30}},()=>this.update())
                         }else if(this.state.yellow3===24&&number===6){
                         this.setState((prevState)=>{ return {yellow3 :prevState.yellow3 + 33}},()=>this.update())
                         }else if(this.state.yellow3===24&&number===5){
                         this.setState((prevState)=>{ return {yellow3 :prevState.yellow3 + 32}},()=>this.update())
                         }else if(this.state.yellow3===24&&number===4){
                         this.setState((prevState)=>{ return {yellow3 :prevState.yellow3 + 31}},()=>this.update())
                         }else if(this.state.yellow3===24&&number===3){
                         this.setState((prevState)=>{ return {yellow3 :prevState.yellow3 + 30}},()=>this.update())
                         }else if(this.state.yellow3===24&&number===2){
                         this.setState((prevState)=>{ return {yellow3 :prevState.yellow3 + 29}},()=>this.update())
                         }else{
                         this.setState((prevState)=>{return {yellow3 :prevState.yellow3 + number}},()=>this.update())
                      }}
                              
                        this.state.yellow.shift();
 
                      }}
                    }
                    if(id==='blue') {
                      if (blue.length>0){
                        for(let i=0;i<1;i++){
                          
                          const number=Number(blue[i]);
                          if(idset==='blue0'){ if(this.state.blue0===51&&number===2){
                            this.setState((prevState)=>{return {blue0 :52-prevState.blue0 }},()=>this.update()
                           )}else if(this.state.blue0===51&&number===3){
                            this.setState((prevState)=>{return {blue0 :53-prevState.blue0 }},()=>this.update()
                           )}else if(this.state.blue0===51&&number===4){
                            this.setState((prevState)=>{return {blue0 :54-prevState.blue0 }},()=>this.update()
                           )}else if(this.state.blue0===51&&number===5){
                            this.setState((prevState)=>{return {blue0 :55-prevState.blue0 }},()=>this.update()
                           )}else if(this.state.blue0===51&&number===6){
                            this.setState((prevState)=>{return {blue0 :56-prevState.blue0 }},()=>this.update()
                           )}else if(this.state.blue0===50&&number===3){
                            this.setState((prevState)=>{return {blue0 :51-prevState.blue0 }},()=>this.update()
                           )}else if(this.state.blue0===50&&number===4){
                            this.setState((prevState)=>{return {blue0 :52-prevState.blue0 }},()=>this.update()
                           )}else if(this.state.blue0===50&&number===5){
                            this.setState((prevState)=>{return {blue0 :53-prevState.blue0 }},()=>this.update()
                           )}else if(this.state.blue0===50&&number===6){
                            this.setState((prevState)=>{return {blue0 :54-prevState.blue0 }},()=>this.update()
                           )}else if(this.state.blue0===49&&number===4){
                            this.setState((prevState)=>{return {blue0 :50-prevState.blue0 }},()=>this.update()
                           )}else if(this.state.blue0===49&&number===5){
                            this.setState((prevState)=>{return {blue0 :51-prevState.blue0 }},()=>this.update()
                           )}else if(this.state.blue0===49&&number===6){
                            this.setState((prevState)=>{return {blue0 :52-prevState.blue0 }},()=>this.update()
                           )}else if(this.state.blue0===48&&number===5){
                            this.setState((prevState)=>{return {blue0 :49-prevState.blue0 }},()=>this.update()
                           )}else if(this.state.blue0===48&&number===6){
                            this.setState((prevState)=>{return {blue0 :50-prevState.blue0 }},()=>this.update()
                           )}else if(this.state.blue0===47&&number===6){
                            this.setState((prevState)=>{return {blue0 :48-prevState.blue0 }},()=>this.update()
                           )}else if(this.state.blue0===52&&number===1){
                            this.setState((prevState)=>{return {blue0 :prevState.blue0 -51}},()=>this.update()
                           )}else if(this.state.blue0===52&&number===2){
                            this.setState((prevState)=>{return {blue0 :prevState.blue0 -50}},()=>this.update()
                           )}else if(this.state.blue0===52&&number===3){
                            this.setState((prevState)=>{return {blue0 :prevState.blue0 -49}},()=>this.update()
                           )}else if(this.state.blue0===52&&number===4){
                            this.setState((prevState)=>{return {blue0 :prevState.blue0 -48}},()=>this.update()
                           )}else if(this.state.blue0===52&&number===5){
                            this.setState((prevState)=>{return {blue0 :prevState.blue0 -47}},()=>this.update()
                           )}else if(this.state.blue0===52&&number===6){
                            this.setState((prevState)=>{return {blue0 :prevState.blue0 -46}},()=>this.update()
                           )}else if(this.state.blue0===38&&number===1){
                            this.setState((prevState)=>{return {blue0 :prevState.blue0 + 15}},()=>this.update()
                           )}else if(this.state.blue0===38&&number===2){
                            this.setState((prevState)=>{return {blue0 :prevState.blue0 + 16}},()=>this.update()
                           )}else if(this.state.blue0===38&&number===3){
                            this.setState((prevState)=>{return {blue0 :prevState.blue0 + 17}},()=>this.update()
                           )}else if(this.state.blue0===38&&number===4){
                            this.setState((prevState)=>{return {blue0 :prevState.blue0 + 18}},()=>this.update()
                           )}else if(this.state.blue0===38&&number===6){
                            this.setState((prevState)=>{return {blue0 :prevState.blue0 + 20}},()=>this.update()
                           )}else if(this.state.blue0===33&&number===6){
                              this.setState((prevState)=>{return {blue0 :prevState.blue0 + 20}},()=>this.update())
                             }else if(this.state.blue0===34&&number===6){
                              this.setState((prevState)=>{return {blue0 :prevState.blue0 + 20}},()=>this.update())
                             }else if(this.state.blue0===34&&number===5){
                              this.setState((prevState)=>{return {blue0 :prevState.blue0 + 19}},()=>this.update())
                             }else if(this.state.blue0===35&&number===6){
                             this.setState((prevState)=>{ return {blue0 :prevState.blue0 + 20}},()=>this.update())
                             }else if(this.state.blue0===35&&number===5){
                              this.setState((prevState)=>{return {blue0 :prevState.blue0 + 19}},()=>this.update())
                             }else if(this.state.blue0===35&&number===4){
                             this.setState((prevState)=>{ return {blue0 :prevState.blue0 + 18}},()=>this.update())
                             }else if(this.state.blue0===36&&number===6){
                              this.setState((prevState)=>{return {blue0 :prevState.blue0 + 20}},()=>this.update())
                             }else if(this.state.blue0===36&&number===5){
                             this.setState((prevState)=>{ return {blue0 :prevState.blue0 + 19}},()=>this.update())
                             }else if(this.state.blue0===36&&number===4){
                             this.setState((prevState)=>{ return {blue0 :prevState.blue0 + 18}},()=>this.update())
                             }else if(this.state.blue0===36&&number===3){
                             this.setState((prevState)=>{ return {blue0 :prevState.blue0 + 17}},()=>this.update())
                             }else if(this.state.blue0===37&&number===6){
                             this.setState((prevState)=>{ return {blue0 :prevState.blue0 + 20}},()=>this.update())
                             }else if(this.state.blue0===37&&number===5){
                             this.setState((prevState)=>{ return {blue0 :prevState.blue0 + 19}},()=>this.update())
                             }else if(this.state.blue0===37&&number===4){
                             this.setState((prevState)=>{ return {blue0 :prevState.blue0 + 18}},()=>this.update())
                             }else if(this.state.blue0===37&&number===3){
                             this.setState((prevState)=>{ return {blue0 :prevState.blue0 + 17}},()=>this.update())
                             }else if(this.state.blue0===37&&number===2){
                             this.setState((prevState)=>{ return {blue0 :prevState.blue0 + 16}},()=>this.update())
                             }else{
                             this.setState((prevState)=>{return {blue0 :prevState.blue0 + number}} ,()=>this.update())
                          }}else if(idset==='blue1'){if(this.state.blue1===51&&number===2){
                            this.setState((prevState)=>{return {blue1 :52-prevState.blue1 }},()=>this.update()
                           )}else if(this.state.blue1===51&&number===3){
                            this.setState((prevState)=>{return {blue1 :53-prevState.blue1 }},()=>this.update()
                           )}else if(this.state.blue1===51&&number===4){
                            this.setState((prevState)=>{return {blue1 :54-prevState.blue1 }},()=>this.update()
                           )}else if(this.state.blue1===51&&number===5){
                            this.setState((prevState)=>{return {blue1 :55-prevState.blue1 }},()=>this.update()
                           )}else if(this.state.blue1===51&&number===6){
                            this.setState((prevState)=>{return {blue1 :56-prevState.blue1 }},()=>this.update()
                           )}else if(this.state.blue1===50&&number===3){
                            this.setState((prevState)=>{return {blue1 :51-prevState.blue1 }},()=>this.update()
                           )}else if(this.state.blue1===50&&number===4){
                            this.setState((prevState)=>{return {blue1 :52-prevState.blue1 }},()=>this.update()
                           )}else if(this.state.blue1===50&&number===5){
                            this.setState((prevState)=>{return {blue1 :53-prevState.blue1 }},()=>this.update()
                           )}else if(this.state.blue1===50&&number===6){
                            this.setState((prevState)=>{return {blue1 :54-prevState.blue1 }},()=>this.update()
                           )}else if(this.state.blue1===49&&number===4){
                            this.setState((prevState)=>{return {blue1 :50-prevState.blue1 }},()=>this.update()
                           )}else if(this.state.blue1===49&&number===5){
                            this.setState((prevState)=>{return {blue1 :51-prevState.blue1 }},()=>this.update()
                           )}else if(this.state.blue1===49&&number===6){
                            this.setState((prevState)=>{return {blue1 :52-prevState.blue1 }},()=>this.update()
                           )}else if(this.state.blue1===48&&number===5){
                            this.setState((prevState)=>{return {blue1 :49-prevState.blue1 }},()=>this.update()
                           )}else if(this.state.blue1===48&&number===6){
                            this.setState((prevState)=>{return {blue1 :50-prevState.blue1 }},()=>this.update()
                           )}else if(this.state.blue1===47&&number===6){
                            this.setState((prevState)=>{return {blue1 :48-prevState.blue1 }},()=>this.update()
                           )}else if(this.state.blue1===52&&number===1){
                            this.setState((prevState)=>{return {blue1 :prevState.blue1 -51}},()=>this.update()
                           )}else if(this.state.blue1===52&&number===2){
                            this.setState((prevState)=>{return {blue1 :prevState.blue1 -50}},()=>this.update()
                           )}else if(this.state.blue1===52&&number===3){
                            this.setState((prevState)=>{return {blue1 :prevState.blue1 -49}},()=>this.update()
                           )}else if(this.state.blue1===52&&number===4){
                            this.setState((prevState)=>{return {blue1 :prevState.blue1 -48}},()=>this.update()
                           )}else if(this.state.blue1===52&&number===5){
                            this.setState((prevState)=>{return {blue1 :prevState.blue1 -47}},()=>this.update()
                           )}else if(this.state.blue1===52&&number===6){
                            this.setState((prevState)=>{return {blue1 :prevState.blue1 -46}},()=>this.update()
                           )}else if(this.state.blue1===38&&number===1){
                            this.setState((prevState)=>{return {blue1 :prevState.blue1 + 15}},()=>this.update()
                           )}else if(this.state.blue1===38&&number===2){
                            this.setState((prevState)=>{return {blue1 :prevState.blue1 + 16}},()=>this.update()
                           )}else if(this.state.blue1===38&&number===3){
                            this.setState((prevState)=>{return {blue1 :prevState.blue1 + 17}},()=>this.update()
                           )}else if(this.state.blue1===38&&number===4){
                            this.setState((prevState)=>{return {blue1 :prevState.blue1 + 18}},()=>this.update()
                           )}else if(this.state.blue1===38&&number===6){
                            this.setState((prevState)=>{return {blue1 :prevState.blue1 + 20}},()=>this.update()
                           )}else if(this.state.blue1===33&&number===6){
                              this.setState((prevState)=>{return {blue1 :prevState.blue1 + 20}},()=>this.update())
                             }else if(this.state.blue1===34&&number===6){
                              this.setState((prevState)=>{return {blue1 :prevState.blue1 + 20}},()=>this.update())
                             }else if(this.state.blue1===34&&number===5){
                              this.setState((prevState)=>{return {blue1 :prevState.blue1 + 19}},()=>this.update())
                             }else if(this.state.blue1===35&&number===6){
                             this.setState((prevState)=>{ return {blue1 :prevState.blue1 + 20}},()=>this.update())
                             }else if(this.state.blue1===35&&number===5){
                              this.setState((prevState)=>{return {blue1 :prevState.blue1 + 19}},()=>this.update())
                             }else if(this.state.blue1===35&&number===4){
                             this.setState((prevState)=>{ return {blue1 :prevState.blue1 + 18}},()=>this.update())
                             }else if(this.state.blue1===36&&number===6){
                              this.setState((prevState)=>{return {blue1 :prevState.blue1 + 20}},()=>this.update())
                             }else if(this.state.blue1===36&&number===5){
                             this.setState((prevState)=>{ return {blue1 :prevState.blue1 + 19}},()=>this.update())
                             }else if(this.state.blue1===36&&number===4){
                             this.setState((prevState)=>{ return {blue1 :prevState.blue1 + 18}},()=>this.update())
                             }else if(this.state.blue1===36&&number===3){
                             this.setState((prevState)=>{ return {blue1 :prevState.blue1 + 17}},()=>this.update())
                             }else if(this.state.blue1===37&&number===6){
                             this.setState((prevState)=>{ return {blue1 :prevState.blue1 + 20}},()=>this.update())
                             }else if(this.state.blue1===37&&number===5){
                             this.setState((prevState)=>{ return {blue1 :prevState.blue1 + 19}},()=>this.update())
                             }else if(this.state.blue1===37&&number===4){
                             this.setState((prevState)=>{ return {blue1 :prevState.blue1 + 18}},()=>this.update())
                             }else if(this.state.blue1===37&&number===3){
                             this.setState((prevState)=>{ return {blue1 :prevState.blue1 + 17}},()=>this.update())
                             }else if(this.state.blue1===37&&number===2){
                             this.setState((prevState)=>{ return {blue1 :prevState.blue1 + 16}},()=>this.update())
                             }else{
                             this.setState((prevState)=>{return {blue1 :prevState.blue1 + number}} ,()=>this.update())
                          }
                      }else if(idset==='blue2'){if(this.state.blue2===51&&number===2){
                        this.setState((prevState)=>{return {blue2 :52-prevState.blue2 }},()=>this.update()
                       )}else if(this.state.blue2===51&&number===3){
                        this.setState((prevState)=>{return {blue2 :53-prevState.blue2 }},()=>this.update()
                       )}else if(this.state.blue2===51&&number===4){
                        this.setState((prevState)=>{return {blue2 :54-prevState.blue2 }},()=>this.update()
                       )}else if(this.state.blue2===51&&number===5){
                        this.setState((prevState)=>{return {blue2 :55-prevState.blue2 }},()=>this.update()
                       )}else if(this.state.blue2===51&&number===6){
                        this.setState((prevState)=>{return {blue2 :56-prevState.blue2 }},()=>this.update()
                       )}else if(this.state.blue2===50&&number===3){
                        this.setState((prevState)=>{return {blue2 :51-prevState.blue2 }},()=>this.update()
                       )}else if(this.state.blue2===50&&number===4){
                        this.setState((prevState)=>{return {blue2 :52-prevState.blue2 }},()=>this.update()
                       )}else if(this.state.blue2===50&&number===5){
                        this.setState((prevState)=>{return {blue2 :53-prevState.blue2 }},()=>this.update()
                       )}else if(this.state.blue2===50&&number===6){
                        this.setState((prevState)=>{return {blue2 :54-prevState.blue2 }},()=>this.update()
                       )}else if(this.state.blue2===49&&number===4){
                        this.setState((prevState)=>{return {blue2 :50-prevState.blue2 }},()=>this.update()
                       )}else if(this.state.blue2===49&&number===5){
                        this.setState((prevState)=>{return {blue2 :51-prevState.blue2 }},()=>this.update()
                       )}else if(this.state.blue2===49&&number===6){
                        this.setState((prevState)=>{return {blue2 :52-prevState.blue2 }},()=>this.update()
                       )}else if(this.state.blue2===48&&number===5){
                        this.setState((prevState)=>{return {blue2 :49-prevState.blue2 }},()=>this.update()
                       )}else if(this.state.blue2===48&&number===6){
                        this.setState((prevState)=>{return {blue2 :50-prevState.blue2 }},()=>this.update()
                       )}else if(this.state.blue2===47&&number===6){
                        this.setState((prevState)=>{return {blue2 :48-prevState.blue2 }},()=>this.update()
                       )}else if(this.state.blue2===52&&number===1){
                        this.setState((prevState)=>{return {blue2 :prevState.blue2 -51}},()=>this.update()
                       )}else if(this.state.blue2===52&&number===2){
                        this.setState((prevState)=>{return {blue2 :prevState.blue2 -50}},()=>this.update()
                       )}else if(this.state.blue2===52&&number===3){
                        this.setState((prevState)=>{return {blue2 :prevState.blue2 -49}},()=>this.update()
                       )}else if(this.state.blue2===52&&number===4){
                        this.setState((prevState)=>{return {blue2 :prevState.blue2 -48}},()=>this.update()
                       )}else if(this.state.blue2===52&&number===5){
                        this.setState((prevState)=>{return {blue2 :prevState.blue2 -47}},()=>this.update()
                       )}else if(this.state.blue2===52&&number===6){
                        this.setState((prevState)=>{return {blue2 :prevState.blue2 -46}},()=>this.update()
                       )}else if(this.state.blue0===38&&number===1){
                        this.setState((prevState)=>{return {blue2 :prevState.blue2 + 15}},()=>this.update()
                       )}else if(this.state.blue2===38&&number===2){
                        this.setState((prevState)=>{return {blue2 :prevState.blue2 + 16}},()=>this.update()
                       )}else if(this.state.blue2===38&&number===3){
                        this.setState((prevState)=>{return {blue2 :prevState.blue2 + 17}},()=>this.update()
                       )}else if(this.state.blue2===38&&number===4){
                        this.setState((prevState)=>{return {blue2 :prevState.blue2 + 18}},()=>this.update()
                       )}else if(this.state.blue2===38&&number===6){
                        this.setState((prevState)=>{return {blue2 :prevState.blue2 + 20}},()=>this.update()
                       )}else if(this.state.blue2===25&&number===5){
                        this.setState((prevState)=>{return {blue2 :prevState.blue2 + 19}},()=>this.update()
                       )}else if(this.state.blue2===33&&number===6){
                          this.setState((prevState)=>{return {blue2 :prevState.blue2 + 20}},()=>this.update())
                         }else if(this.state.blue2===34&&number===6){
                          this.setState((prevState)=>{return {blue2 :prevState.blue2 + 20}},()=>this.update())
                         }else if(this.state.blue2===34&&number===5){
                          this.setState((prevState)=>{return {blue2 :prevState.blue2 + 19}},()=>this.update())
                         }else if(this.state.blue2===35&&number===6){
                         this.setState((prevState)=>{ return {blue2 :prevState.blue2 + 20}},()=>this.update())
                         }else if(this.state.blue2===35&&number===5){
                          this.setState((prevState)=>{return {blue2 :prevState.blue2 + 19}},()=>this.update())
                         }else if(this.state.blue2===35&&number===4){
                         this.setState((prevState)=>{ return {blue2 :prevState.blue2 + 18}},()=>this.update())
                         }else if(this.state.blue2===36&&number===6){
                          this.setState((prevState)=>{return {blue2 :prevState.blue2 + 20}},()=>this.update())
                         }else if(this.state.blue2===36&&number===5){
                         this.setState((prevState)=>{ return {blue2 :prevState.blue2 + 19}},()=>this.update())
                         }else if(this.state.blue2===36&&number===4){
                         this.setState((prevState)=>{ return {blue2 :prevState.blue2 + 18}},()=>this.update())
                         }else if(this.state.blue2===36&&number===3){
                         this.setState((prevState)=>{ return {blue2 :prevState.blue2 + 17}},()=>this.update())
                         }else if(this.state.blue2===37&&number===6){
                         this.setState((prevState)=>{ return {blue2 :prevState.blue2 + 20}},()=>this.update())
                         }else if(this.state.blue2===37&&number===5){
                         this.setState((prevState)=>{ return {blue2 :prevState.blue2 + 19}},()=>this.update())
                         }else if(this.state.blue2===37&&number===4){
                         this.setState((prevState)=>{ return {blue2 :prevState.blue2 + 18}},()=>this.update())
                         }else if(this.state.blue2===37&&number===3){
                         this.setState((prevState)=>{ return {blue2 :prevState.blue2 + 17}},()=>this.update())
                         }else if(this.state.blue2===37&&number===2){
                         this.setState((prevState)=>{ return {blue2 :prevState.blue2 + 16}},()=>this.update())
                         }else{
                         this.setState((prevState)=>{return {blue2 :prevState.blue2 + number}} ,()=>this.update())
                      }
                    }else if(idset==='blue3'){if(this.state.blue3===51&&number===2){
                      this.setState((prevState)=>{return {blue3 :52-prevState.blue3 }},()=>this.update()
                     )}else if(this.state.blue3===51&&number===3){
                      this.setState((prevState)=>{return {blue3 :53-prevState.blue3 }},()=>this.update()
                     )}else if(this.state.blue3===51&&number===4){
                      this.setState((prevState)=>{return {blue3 :54-prevState.blue3 }},()=>this.update()
                     )}else if(this.state.blue3===51&&number===5){
                      this.setState((prevState)=>{return {blue3 :55-prevState.blue3 }},()=>this.update()
                     )}else if(this.state.blue3===51&&number===6){
                      this.setState((prevState)=>{return {blue3 :56-prevState.blue3 }},()=>this.update()
                     )}else if(this.state.blue3===50&&number===3){
                      this.setState((prevState)=>{return {blue3 :51-prevState.blue3 }},()=>this.update()
                     )}else if(this.state.blue3===50&&number===4){
                      this.setState((prevState)=>{return {blue3 :52-prevState.blue3 }},()=>this.update()
                     )}else if(this.state.blue3===50&&number===5){
                      this.setState((prevState)=>{return {blue3 :53-prevState.blue3 }},()=>this.update()
                     )}else if(this.state.blue3===50&&number===6){
                      this.setState((prevState)=>{return {blue3 :54-prevState.blue3 }},()=>this.update()
                     )}else if(this.state.blue3===49&&number===4){
                      this.setState((prevState)=>{return {blue3 :50-prevState.blue3 }},()=>this.update()
                     )}else if(this.state.blue3===49&&number===5){
                      this.setState((prevState)=>{return {blue3 :51-prevState.blue3 }},()=>this.update()
                     )}else if(this.state.blue3===49&&number===6){
                      this.setState((prevState)=>{return {blue3 :52-prevState.blue3 }},()=>this.update()
                     )}else if(this.state.blue3===48&&number===5){
                      this.setState((prevState)=>{return {blue3 :49-prevState.blue3 }},()=>this.update()
                     )}else if(this.state.blue3===48&&number===6){
                      this.setState((prevState)=>{return {blue3 :50-prevState.blue3 }},()=>this.update()
                     )}else if(this.state.blue3===47&&number===6){
                      this.setState((prevState)=>{return {blue3 :48-prevState.blue3 }},()=>this.update()
                     )}else if(this.state.blue3===52&&number===1){
                      this.setState((prevState)=>{return {blue3 :prevState.blue3 -51}},()=>this.update()
                     )}else if(this.state.blue3===52&&number===2){
                      this.setState((prevState)=>{return {blue3 :prevState.blue3 -50}},()=>this.update()
                     )}else if(this.state.blue3===52&&number===3){
                      this.setState((prevState)=>{return {blue3 :prevState.blue3 -49}},()=>this.update()
                     )}else if(this.state.blue3===52&&number===4){
                      this.setState((prevState)=>{return {blue3 :prevState.blue3 -48}},()=>this.update()
                     )}else if(this.state.blue3===52&&number===5){
                      this.setState((prevState)=>{return {blue3 :prevState.blue3 -47}},()=>this.update()
                     )}else if(this.state.blue3===52&&number===6){
                      this.setState((prevState)=>{return {blue3 :prevState.blue3 -46}},()=>this.update()
                     )}else if(this.state.blue3===38&&number===1){
                      this.setState((prevState)=>{return {blue3 :prevState.blue3 + 15}},()=>this.update()
                     )}else if(this.state.blue3===38&&number===2){
                      this.setState((prevState)=>{return {blue3 :prevState.blue3 + 16}},()=>this.update()
                     )}else if(this.state.blue3===38&&number===3){
                      this.setState((prevState)=>{return {blue3 :prevState.blue3 + 17}},()=>this.update()
                     )}else if(this.state.blue3===38&&number===4){
                      this.setState((prevState)=>{return {blue3 :prevState.blue3 + 18}},()=>this.update()
                     )}else if(this.state.blue3===38&&number===6){
                      this.setState((prevState)=>{return {blue3 :prevState.blue3 + 20}},()=>this.update()
                     )}else if(this.state.blue3===33&&number===6){
                        this.setState((prevState)=>{return {blue3 :prevState.blue3 + 20}},()=>this.update())
                       }else if(this.state.blue3===34&&number===6){
                        this.setState((prevState)=>{return {blue3 :prevState.blue3 + 20}},()=>this.update())
                       }else if(this.state.blue3===34&&number===5){
                        this.setState((prevState)=>{return {blue3 :prevState.blue3 + 19}},()=>this.update())
                       }else if(this.state.blue3===35&&number===6){
                       this.setState((prevState)=>{ return {blue3 :prevState.blue3 + 20}},()=>this.update())
                       }else if(this.state.blue3===35&&number===5){
                        this.setState((prevState)=>{return {blue3 :prevState.blue3 + 19}},()=>this.update())
                       }else if(this.state.blue3===35&&number===4){
                       this.setState((prevState)=>{ return {blue3 :prevState.blue3 + 18}},()=>this.update())
                       }else if(this.state.blue3===36&&number===6){
                        this.setState((prevState)=>{return {blue3 :prevState.blue3 + 20}},()=>this.update())
                       }else if(this.state.blue3===36&&number===5){
                       this.setState((prevState)=>{ return {blue3 :prevState.blue3 + 19}},()=>this.update())
                       }else if(this.state.blue3===36&&number===4){
                       this.setState((prevState)=>{ return {blue3 :prevState.blue3 + 18}},()=>this.update())
                       }else if(this.state.blue3===36&&number===3){
                       this.setState((prevState)=>{ return {blue3 :prevState.blue3 + 17}},()=>this.update())
                       }else if(this.state.blue3===37&&number===6){
                       this.setState((prevState)=>{ return {blue3 :prevState.blue3 + 20}},()=>this.update())
                       }else if(this.state.blue3===37&&number===5){
                       this.setState((prevState)=>{ return {blue3 :prevState.blue3 + 19}},()=>this.update())
                       }else if(this.state.blue3===37&&number===4){
                       this.setState((prevState)=>{ return {blue3 :prevState.blue3 + 18}},()=>this.update())
                       }else if(this.state.blue3===37&&number===3){
                       this.setState((prevState)=>{ return {blue3 :prevState.blue3 + 17}},()=>this.update())
                       }else if(this.state.blue3===37&&number===2){
                       this.setState((prevState)=>{ return {blue3 :prevState.blue3 + 16}},()=>this.update())
                       }else{
                       this.setState((prevState)=>{return {blue3 :prevState.blue3 + number}} ,()=>this.update())
                    }}
                    
                    this.state.blue.shift();
                    
                    
                    
                    
                  }}
                }
                 }
             update(){
                const{red,green,blue,yellow,playerNo,blue0,blue1,blue2,blue3,green0,green1,green2,green3,red0,red1,red2,red3,yellow0,yellow1,yellow2,yellow3}=this.state;
                if(playerNo===1){
                  if(document.getElementById('stop1').getElementsByTagName('img').length===4){
                this.state.winner.push("Blue Player is at");}
                if(blue0 !==53&&blue0 !==54&&blue0 !==55&&blue0 !==56&&blue0 !==57&&blue0 !==58&&blue0!==1&&blue0!==9&&blue0!==14&&blue0!==40&&blue0!==22&&blue0!==27&&blue0!==35&&blue0!==48){if (blue0===red0){this.setState({red0:0})}if (blue0===red1){this.setState({red1:0})}if (blue0===red2){this.setState({red2:0})}if (blue0===red3){this.setState({red3:0})}if (blue0===green0){this.setState({green0:0})}if (blue0===green1){this.setState({green1:0})}if (blue0===green2){this.setState({green2:0})}if (blue0===green3){this.setState({green3:0})}if (blue0===yellow0){this.setState({yellow0:0})}if (blue0===yellow1){this.setState({yellow1:0})}if (blue0===yellow2){this.setState({yellow2:0})}if (blue0===yellow3){this.setState({yellow3:0})}}
                if(blue1 !==53&&blue1 !==54&&blue1 !==55&&blue1 !==56&&blue1 !==57&&blue1 !==58&&blue1!==1&&blue1!==9&&blue1!==14&&blue1!==40&&blue1!==22&&blue1!==27&&blue1!==35&&blue1!==48){if (blue1===red0){this.setState({red0:0})}if (blue1===red1){this.setState({red1:0})}if (blue1===red2){this.setState({red2:0})}if (blue1===red3){this.setState({red3:0})}if (blue1===green0){this.setState({green0:0})}if (blue1===green1){this.setState({green1:0})}if (blue1===green2){this.setState({green2:0})}if (blue1===green3){this.setState({green3:0})}if (blue1===yellow0){this.setState({yellow0:0})}if (blue1===yellow1){this.setState({yellow1:0})}if (blue1===yellow2){this.setState({yellow2:0})}if (blue1===yellow3){this.setState({yellow3:0})}}
                if(blue2 !==53&&blue2 !==54&&blue2 !==55&&blue2 !==56&&blue2 !==57&&blue2 !==58&&blue2!==1&&blue2!==9&&blue2!==14&&blue2!==40&&blue2!==22&&blue2!==27&&blue2!==35&&blue2!==48){if (blue2===red0){this.setState({red0:0})}if (blue2===red1){this.setState({red1:0})}if (blue2===red2){this.setState({red2:0})}if (blue2===red3){this.setState({red3:0})}if (blue2===green0){this.setState({green0:0})}if (blue2===green1){this.setState({green1:0})}if (blue2===green2){this.setState({green2:0})}if (blue2===green3){this.setState({green3:0})}if (blue2===yellow0){this.setState({yellow0:0})}if (blue2===yellow1){this.setState({yellow1:0})}if (blue2===yellow2){this.setState({yellow2:0})}if (blue2===yellow3){this.setState({yellow3:0})}}
                if(blue3 !==53&&blue3 !==54&&blue3 !==55&&blue3 !==56&&blue3 !==57&&blue3 !==58&&blue3!==1&&blue3!==9&&blue3!==14&&blue3!==40&&blue3!==22&&blue3!==27&&blue3!==35&&blue3!==48){if (blue3===red0){this.setState({red0:0})}if (blue3===red1){this.setState({red1:0})}if (blue3===red2){this.setState({red2:0})}if (blue3===red3){this.setState({red3:0})}if (blue3===green0){this.setState({green0:0})}if (blue3===green1){this.setState({green1:0})}if (blue3===green2){this.setState({green2:0})}if (blue3===green3){this.setState({green3:0})}if (blue3===yellow0){this.setState({yellow0:0})}if (blue3===yellow1){this.setState({yellow1:0})}if (blue3===yellow2){this.setState({yellow2:0})}if (blue3===yellow3){this.setState({yellow3:0})}}
                if ((this.score<6&&blue.length===0)||document.getElementById('stop1').getElementsByTagName('img').length===4) {
                  document.getElementById('button').disabled = false;
                  this.setState((prevState)=>{return {playerNo :prevState.playerNo + 1} },()=>this.winning());
                  console.log('contain',this.state.playerNo)
                  if (this.state.playerNo>3){
                    const playerNo=1;
                    this.setState({playerNo});
                    
                  }  
                  
                }
                
              }
              if(playerNo===2){
                if(document.getElementById('stop2').getElementsByTagName('img').length===4){
                  this.state.winner.push("Red Player is at");}
                if(red0 !==53&&red0 !==54&&red0 !==55&&red0 !==56&&red0 !==57&&red0 !==58&&red0!==1&&red0!==9&&red0!==14&&red0!==40&&red0!==22&&red0!==27&&red0!==35&&red0!==48){if (red0===blue0){this.setState({blue0:0})}if (red0===blue1){this.setState({blue1:0})}if (red0===blue2){this.setState({blue2:0})}if (red0===blue3){this.setState({blue3:0})}if (red0===green0){this.setState({green0:0})}if (red0===green1){this.setState({green1:0})}if (red0===green2){this.setState({green2:0})}if (red0===green3){this.setState({green3:0})}if (red0===yellow0){this.setState({yellow0:0})}if (red0===yellow1){this.setState({yellow1:0})}if (red0===yellow2){this.setState({yellow2:0})}if (red0===yellow3){this.setState({yellow3:0})}}
                if(red1 !==53&&red1 !==54&&red1 !==55&&red1 !==56&&red1 !==57&&red1 !==58&&red1!==1&&red1!==9&&red1!==14&&red1!==40&&red1!==22&&red1!==27&&red1!==35&&red1!==48){if (red1===blue0){this.setState({blue0:0})}if (red1===blue1){this.setState({blue1:0})}if (red1===blue2){this.setState({blue2:0})}if (red1===blue3){this.setState({blue3:0})}if (red1===green0){this.setState({green0:0})}if (red1===green1){this.setState({green1:0})}if (red1===green2){this.setState({green2:0})}if (red1===green3){this.setState({green3:0})}if (red1===yellow0){this.setState({yellow0:0})}if (red1===yellow1){this.setState({yellow1:0})}if (red1===yellow2){this.setState({yellow2:0})}if (red1===yellow3){this.setState({yellow3:0})}}
                if(red2 !==53&&red2 !==54&&red2 !==55&&red2 !==56&&red2 !==57&&red2 !==58&&red2!==1&&red2!==9&&red2!==14&&red2!==40&&red2!==22&&red2!==27&&red2!==35&&red2!==48){if (red2===blue0){this.setState({blue0:0})}if (red2===blue1){this.setState({blue1:0})}if (red2===blue2){this.setState({blue2:0})}if (red2===blue3){this.setState({blue3:0})}if (red2===green0){this.setState({green0:0})}if (red2===green1){this.setState({green1:0})}if (red2===green2){this.setState({green2:0})}if (red2===green3){this.setState({green3:0})}if (red2===yellow0){this.setState({yellow0:0})}if (red2===yellow1){this.setState({yellow1:0})}if (red2===yellow2){this.setState({yellow2:0})}if (red2===yellow3){this.setState({yellow3:0})}}
                if(red3 !==53&&red3 !==54&&red3 !==55&&red3 !==56&&red3 !==57&&red3 !==58&&red3!==1&&red3!==9&&red3!==14&&red3!==40&&red3!==22&&red3!==27&&red3!==35&&red3!==48){if (red3===blue0){this.setState({blue0:0})}if (red3===blue1){this.setState({blue1:0})}if (red3===blue2){this.setState({blue2:0})}if (red3===blue3){this.setState({blue3:0})}if (red3===green0){this.setState({green0:0})}if (red3===green1){this.setState({green1:0})}if (red3===green2){this.setState({green2:0})}if (red3===green3){this.setState({green3:0})}if (red3===yellow0){this.setState({yellow0:0})}if (red3===yellow1){this.setState({yellow1:0})}if (red3===yellow2){this.setState({yellow2:0})}if (red3===yellow3){this.setState({yellow3:0})}}
                
                if ((this.score<6 &&red.length===0)||document.getElementById('stop2').getElementsByTagName('img').length===4) {
                  document.getElementById('button').disabled = false;
                  this.setState((prevState)=>{return {playerNo :prevState.playerNo + 1} },()=>this.winning());
                  console.log('contain',this.state.playerNo)
                  if (this.state.playerNo>3){
                    const playerNo=1;
                    this.setState({playerNo});
                    
                  }  
                  
                }
              }
                if(playerNo===3){
                  if(document.getElementById('stop3').getElementsByTagName('img').length===4){
                    this.state.winner.push("Green Player is at");}
                if(green0 !==53&&green0 !==54&&green0 !==55&&green0 !==56&&green0 !==57&&green0 !==58&&green0!==1&&green0!==9&&green0!==14&&green0!==40&&green0!==22&&green0!==27&&green0!==35&&green0!==48){if (green0===red0){this.setState({red0:0})}if (green0===red1){this.setState({red1:0})}if (green0===red2){this.setState({red2:0})}if (green0===red3){this.setState({red3:0})}if (green0===blue0){this.setState({blue0:0})}if (green0===blue1){this.setState({blue1:0})}if (green0===blue2){this.setState({blue2:0})}if (green0===blue3){this.setState({blue3:0})}if (green0===yellow0){this.setState({yellow0:0})}if (green0===yellow1){this.setState({yellow1:0})}if (green0===yellow2){this.setState({yellow2:0})}if (green0===yellow3){this.setState({yellow3:0})}}
                if(green1 !==53&&green1 !==54&&green1 !==55&&green1 !==56&&green1 !==57&&green1 !==58&&green1!==1&&green1!==9&&green1!==14&&green1!==40&&green1!==22&&green1!==27&&green1!==35&&green1!==48){if (green1===red0){this.setState({red0:0})}if (green1===red1){this.setState({red1:0})}if (green1===red2){this.setState({red2:0})}if (green1===red3){this.setState({red3:0})}if (green1===blue0){this.setState({blue0:0})}if (green1===blue1){this.setState({blue1:0})}if (green1===blue2){this.setState({blue2:0})}if (green1===blue3){this.setState({blue3:0})}if (green1===yellow0){this.setState({yellow0:0})}if (green1===yellow1){this.setState({yellow1:0})}if (green1===yellow2){this.setState({yellow2:0})}if (green1===yellow3){this.setState({yellow3:0})}}
                if(green2 !==53&&green2 !==54&&green2 !==55&&green2 !==56&&green2 !==57&&green2 !==58&&green2!==1&&green2!==9&&green2!==14&&green2!==40&&green2!==22&&green2!==27&&green2!==35&&green2!==48){if (green2===red0){this.setState({red0:0})}if (green2===red1){this.setState({red1:0})}if (green2===red2){this.setState({red2:0})}if (green2===red3){this.setState({red3:0})}if (green2===blue0){this.setState({blue0:0})}if (green2===blue1){this.setState({blue1:0})}if (green2===blue2){this.setState({blue2:0})}if (green2===blue3){this.setState({blue3:0})}if (green2===yellow0){this.setState({yellow0:0})}if (green2===yellow1){this.setState({yellow1:0})}if (green2===yellow2){this.setState({yellow2:0})}if (green2===yellow3){this.setState({yellow3:0})}}
                if(green3 !==53&&green3 !==54&&green3 !==55&&green3 !==56&&green3 !==57&&green3 !==58&&green3!==1&&green3!==9&&green3!==14&&green3!==40&&green3!==22&&green3!==27&&green3!==35&&green3!==48){if (green3===red0){this.setState({red0:0})}if (green3===red1){this.setState({red1:0})}if (green3===red2){this.setState({red2:0})}if (green3===red3){this.setState({red3:0})}if (green3===blue0){this.setState({blue0:0})}if (green3===blue1){this.setState({blue1:0})}if (green3===blue2){this.setState({blue2:0})}if (green3===blue3){this.setState({blue3:0})}if (green3===yellow0){this.setState({yellow0:0})}if (green3===yellow1){this.setState({yellow1:0})}if (green3===yellow2){this.setState({yellow2:0})}if (green3===yellow3){this.setState({yellow3:0})}}
                
                if ((this.score<6&&green.length===0)||document.getElementById('stop3').getElementsByTagName('img').length===4) {
                  document.getElementById('button').disabled = false;
                  this.setState((prevState)=>{return {playerNo :prevState.playerNo + 1} },()=>this.winning());
                  console.log('contain',this.state.playerNo)
                   
                        if (this.state.playerNo>3){
                          const playerNo=1;
                          this.setState({playerNo});
                        }
    }
              }
                if(playerNo===4){
                  if(document.getElementById('stop4').getElementsByTagName('img').length===4){
                    this.state.winner.push("Yellow Player is at");}
              if(yellow0 !==53&&yellow0 !==54&&yellow0 !==55&&yellow0 !==56&&yellow0 !==57&&yellow0 !==58&&yellow0!==1&&yellow0!==9&&yellow0!==14&&yellow0!==40&&yellow0!==22&&yellow0!==27&&yellow0!==35&&yellow0!==48){if (yellow0===red0){this.setState({red0:0})}if (yellow0===red1){this.setState({red1:0})}if (yellow0===red2){this.setState({red2:0})}if (yellow0===red3){this.setState({red3:0})}if (yellow0===blue0){this.setState({blue0:0})}if (yellow0===blue1){this.setState({blue1:0})}if (yellow0===blue2){this.setState({blue2:0})}if (yellow0===blue3){this.setState({blue3:0})}if (yellow0===green0){this.setState({green0:0})}if (yellow0===green1){this.setState({green1:0})}if (yellow0===green2){this.setState({green2:0})}if (yellow0===green3){this.setState({green3:0})}}
              if(yellow1 !==53&&yellow1 !==54&&yellow1 !==55&&yellow1 !==56&&yellow1 !==57&&yellow1 !==58&&yellow1!==1&&yellow1!==9&&yellow1!==14&&yellow1!==40&&yellow1!==22&&yellow1!==27&&yellow1!==35&&yellow1!==48){if (yellow1===red0){this.setState({red0:0})}if (yellow1===red1){this.setState({red1:0})}if (yellow1===red2){this.setState({red2:0})}if (yellow1===red3){this.setState({red3:0})}if (yellow1===blue0){this.setState({blue0:0})}if (yellow1===blue1){this.setState({blue1:0})}if (yellow1===blue2){this.setState({blue2:0})}if (yellow1===blue3){this.setState({blue3:0})}if (yellow1===green0){this.setState({green0:0})}if (yellow1===green1){this.setState({green1:0})}if (yellow1===green2){this.setState({green2:0})}if (yellow1===green3){this.setState({green3:0})}}
              if(yellow2 !==53&&yellow2 !==54&&yellow2 !==55&&yellow2 !==56&&yellow2 !==57&&yellow2 !==58&&yellow2!==1&&yellow2!==9&&yellow2!==14&&yellow2!==40&&yellow2!==22&&yellow2!==27&&yellow2!==35&&yellow2!==48){if (yellow2===red0){this.setState({red0:0})}if (yellow2===red1){this.setState({red1:0})}if (yellow2===red2){this.setState({red2:0})}if (yellow2===red3){this.setState({red3:0})}if (yellow2===blue0){this.setState({blue0:0})}if (yellow2===blue1){this.setState({blue1:0})}if (yellow2===blue2){this.setState({blue2:0})}if (yellow2===blue3){this.setState({blue3:0})}if (yellow2===green0){this.setState({green0:0})}if (yellow2===green1){this.setState({green1:0})}if (yellow2===green2){this.setState({green2:0})}if (yellow2===green3){this.setState({green3:0})}}
              if(yellow3 !==53&&yellow3 !==54&&yellow3 !==55&&yellow3 !==56&&yellow3 !==57&&yellow3 !==58&&yellow3!==1&&yellow3!==9&&yellow3!==14&&yellow3!==40&&yellow3!==22&&yellow3!==27&&yellow3!==35&&yellow3!==48){if (yellow3===red0){this.setState({red0:0})}if (yellow3===red1){this.setState({red1:0})}if (yellow3===red2){this.setState({red2:0})}if (yellow3===red3){this.setState({red3:0})}if (yellow3===blue0){this.setState({blue0:0})}if (yellow3===blue1){this.setState({blue1:0})}if (yellow3===blue2){this.setState({blue2:0})}if (yellow3===blue3){this.setState({blue3:0})}if (yellow3===green0){this.setState({green0:0})}if (yellow3===green1){this.setState({green1:0})}if (yellow3===green2){this.setState({green2:0})}if (yellow3===green3){this.setState({green3:0})}}
               
              if ((this.score<6&&yellow.length===0)||document.getElementById('stop4').getElementsByTagName('img').length===4) {
                this.setState((prevState)=>{return {playerNo :prevState.playerNo + 1} },()=>this.winning());
                console.log('contain',this.state.playerNo)
                if (this.state.playerNo>3){
                  const playerNo=1;
                  this.setState({playerNo});
               }}}}
               winning=()=>{
                 const {playerNo}=this.state;
                 if(playerNo===1){
                if(document.getElementById('blue1').getElementsByTagName('img').length===4){

                  this.setState((prevState)=>{return {playerNo :prevState.playerNo + 1} });
                }}
                 if(playerNo===2){
                if(document.getElementById('stope2').getElementsByTagName('img').length===4){
                  this.setState((prevState)=>{return {playerNo :prevState.playerNo + 1} });
                }}
                 if(playerNo===3){
                if(document.getElementById('green1').getElementsByTagName('img').length===4){
                  this.setState((prevState)=>{return {playerNo :prevState.playerNo + 1} });
                }}
                 if(playerNo===4){
                  if (this.state.playerNo===4){
                    const playerNo=2;
                    this.setState({playerNo});
                  }}
                console.log('nomber',playerNo); 
                if(this.state.winner.length===1){
                  this.setState({gameover:true})
                } 
               }
              removeGeti=(id,idset)=>{    
                
                  // var {red0}=this.state;
                  // var {red1}=this.state;
                  // var {red2}=this.state;
                  // var {red3}=this.state;
                  console.log(id)
                  console.log(idset)
                  if(id==='red'){
  for(let i=0;i<this.state.red.length;i++){
    if (this.state.red[i]===6){
      if(idset==='red0'){ this.setState((prevState)=>{return {red0 :prevState.red0 + 1} })}else if(idset==='red1'){this.setState((prevState)=>{return {red1 :prevState.red1 + 1} })}else if(idset==='red2'){this.setState((prevState)=>{return {red2 :prevState.red2 + 1} })}else if(idset==='red3'){this.setState((prevState)=>{return {red3 :prevState.red3 + 1} });}
      this.state.red.shift();
    
    }

}  
}
if(id==='green'){
for(let i=0;i<this.state.green.length;i++){
if (this.state.green[i]===6){
  if(idset==='green0'){ this.setState((prevState)=>{return {green0 :prevState.green0 + 14} })}else if(idset==='green1'){this.setState((prevState)=>{return {green1 :prevState.green1 + 14} })}else if(idset==='green2'){this.setState((prevState)=>{return {green2 :prevState.green2 + 14} })}else if(idset==='green3'){this.setState((prevState)=>{return {green3 :prevState.green3 + 14} });}
  this.state.green.shift();  
  

          }
        }
      }
      
      if(id==='yellow') {
        for(var i=0;i<this.state.yellow.length;i++){
          if (this.state.yellow[i]===6){
            
            if(idset==='yellow0'){ this.setState((prevState)=>{return {yellow0 :prevState.yellow0 + 27} })}else if(idset==='yellow1'){this.setState((prevState)=>{return {yellow1 :prevState.yellow1 + 27} })}else if(idset==='yellow2'){this.setState((prevState)=>{return {yellow2 :prevState.yellow2 + 27} })}else if(idset==='yellow3'){this.setState((prevState)=>{return {yellow3 :prevState.yellow3 + 27} });}
            
            this.state.yellow.shift();
            
          }
              
                  }
      }
      if(id==='blue') {
        for(let i=0;i<this.state.blue.length;i++){
          if (this.state.blue[i]===6){
            
            if(idset==='blue0'){ this.setState((prevState)=>{return {blue0 :prevState.blue0 + 40} })}else if(idset==='blue1'){this.setState((prevState)=>{return {blue1 :prevState.blue1 + 40} })}else if(idset==='blue2'){this.setState((prevState)=>{return {blue2 :prevState.blue2 + 40} })}else if(idset==='blue3'){this.setState((prevState)=>{return {blue3 :prevState.blue3 + 40} });}
            
            this.state.blue.shift();
            
          }
              
                  }
      }}
     
                render(){
                  const{playerNo,blue0,blue1,blue2,blue3,green0,green1,green2,green3,red0,red1,red2,red3,yellow0,yellow1,yellow2,yellow3}=this.state
                  console.log(this.state.blue,this.state.red,this.state.green,this.state.yellow);
                  console.log(red0,red1,red2,red3,blue0,blue1,blue2,blue3,green0,green1,green2,green3,yellow0,yellow1,yellow2,yellow3)
                  // const score
                  let blue_0=<img id='blue' src={blue} onClick={this.eventListen.bind(this,'blue','blue0')} alt='not found' />
                  let blue_1=<img id='blue' src={blue} onClick={this.eventListen.bind(this,'blue','blue1')} alt='not found' />
                  let blue_2=<img id='blue' src={blue} onClick={this.eventListen.bind(this,'blue','blue2')} alt='not found' />
                  let blue_3=<img id='blue' src={blue} onClick={this.eventListen.bind(this,'blue','blue3')} alt='not found' />
                  let red_0=<img id='red' src={red} onClick={this.eventListen.bind(this,'red','red0')} alt='not found' />
                  let red_1=<img id='red' src={red} onClick={this.eventListen.bind(this,'red','red1')} alt='not found' />
                  let red_2=<img id='red' src={red} onClick={this.eventListen.bind(this,'red','red2')} alt='not found' />
                  let red_3=<img id='red' src={red} onClick={this.eventListen.bind(this,'red','red3')} alt='not found' />
                  let yellow_0=<img id='yellow' src={yellow} onClick={this.eventListen.bind(this,'yellow','yellow0')} alt='not found' />
                  let yellow_1=<img id='yellow' src={yellow} onClick={this.eventListen.bind(this,'yellow','yellow1')} alt='not found' />
                  let yellow_2=<img id='yellow' src={yellow} onClick={this.eventListen.bind(this,'yellow','yellow2')} alt='not found' />
                  let yellow_3=<img id='yellow' src={yellow} onClick={this.eventListen.bind(this,'yellow','yellow3')} alt='not found' />
                  let green_0=<img id='green' src={green} onClick={this.eventListen.bind(this,'green','green0')} alt='not found' />
                  let green_1=<img id='green' src={green} onClick={this.eventListen.bind(this,'green','green1')} alt='not found' />
                  let green_2=<img id='green' src={green} onClick={this.eventListen.bind(this,'green','green2')} alt='not found' />
                  let green_3=<img id='green' src={green} onClick={this.eventListen.bind(this,'green','green3')} alt='not found' />
                  
                  return (
                    <div>
     {this.state.gameover? <div>
            <h1>Final Results</h1>
           
            {this.state.winner.map((el,index)=>{
                   return (
                    <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h4 class="display-4">Postion {index+1}</h4>
    <h4 class="display-4">Winner {index+1}</h4>
    <h4 class="display-4">{el} {index+1}</h4>
    
  </div>
</div>
                   )
            })}
            
            <button type="button" class="btn btn-outline-success"> <Link to='/'> Restart Game </Link>  </button>
        </div>
      :<table id='table' class="table table-bordered table-dark">
      <tbody>
          <tr >
            <td className='green' rowSpan='6'  colSpan='6'>
            <h4>Your Scores:</h4>{
              this.state.green.map((el,index)=>
                 <span key={index}> |{el}| </span>
              
              )
              } 
            <div id='green1'>
< br/><span>       </span>{green0===0&&<img id='green7' src={green} onClick={this.removeGeti.bind(this,'green','green0')} alt="not Found"/>}
<span>         </span>{green1===0&&<img id='green6' src={green} onClick={this.removeGeti.bind(this,'green','green1')} alt="not Found"/>}
< br/>< br/><span>       </span>{green2===0&&<img id='green5' src={green} onClick={this.removeGeti.bind(this,'green','green2')} alt="not Found"/>} 
<span>         </span>{green3===0&&<img id='green4' src={green} onClick={this.removeGeti.bind(this,'green','green3')} alt="not Found"/>}            
            </div>< br/> < br/> 
              <div id='greenButton'>   {playerNo===3&&<button id='button' type="button" class="btn btn-outline-secondary" onClick={this.imageSelector.bind(this,'greenButton','green1')}>Roll Dice</button>}
              </div>
              
              </td>
              <td id='24'>24
              {red0===24&&red_0}
              {red1===24&&red_1}
              {red2===24&&red_2}
              {red3===24&&red_3}
              {green0===24&&green_0}
              {green1===24&&green_1}
              {green2===24&&green_2}
              {green3===24&&green_3}
              {yellow0===24&&yellow_0}
              {yellow1===24&&yellow_1}
              {yellow2===24&&yellow_2}
              {yellow3===24&&yellow_3}
              {blue0===24&&blue_0}
              {blue1===24&&blue_1}
              {blue2===24&&blue_2}
              {blue3===24&&blue_3}
              </td>
              <td id='25'>25
              {red0===25&&red_0}
              {red1===25&&red_1}
              {red2===25&&red_2}
              {red3===25&&red_3}
              {green0===25&&green_0}
              {green1===25&&green_1}
              {green2===25&&green_2}
              {green3===25&&green_3}
              {yellow0===25&&yellow_0}
              {yellow1===25&&yellow_1}
              {yellow2===25&&yellow_2}
              {yellow3===25&&yellow_3}
              {blue0===25&&blue_0}
              {blue1===25&&blue_1}
              {blue2===25&&blue_2}
              {blue3===25&&blue_3}
              </td>
              <td id='26'>26
              {red0===26&&red_0}
              {red1===26&&red_1}
              {red2===26&&red_2}
              {red3===26&&red_3}
              {green0===26&&green_0}
              {green1===26&&green_1}
              {green2===26&&green_2}
              {green3===26&&green_3}
              {blue0===26&&blue_0}
              {blue1===26&&blue_1}
              {blue2===26&&blue_2}
              {blue3===26&&blue_3}
              </td>
              
              <td  className='yellow' rowSpan='6' colSpan='6'>
              <h4>Your Scores:</h4>{
              this.state.yellow.map((el,index)=>
                 <span key={index}> |{el}| </span>
              
              )
              }
              <div id='yellow1'>
< br/><span>       </span>{yellow0===0&& <img id='yellow7' src={yellow} onClick={this.removeGeti.bind(this,'yellow','yellow0')} alt="not Found"/>}
<span>         </span>{yellow1===0&&<img id='yellow6' src={yellow} onClick={this.removeGeti.bind(this,'yellow','yellow1')} alt="not Found"/>}
< br/>< br/><span>       </span>{yellow2===0&& <img id='yellow5' src={yellow} onClick={this.removeGeti.bind(this,'yellow','yellow2')} alt="not Found"/>}
<span>         </span>{yellow3===0&& <img id='yellow4' src={yellow} onClick={this.removeGeti.bind(this,'yellow','yellow3')} alt="not Found"/>}
          </div>< br/> < br/>  
          <div id='yellowButton'>{playerNo===4&&<button id='button' type="button" class="btn btn-outline-secondary" onClick={this.imageSelector.bind(this,'yellowButton','yellow1')}>Roll Dice</button>}
          </div>
              </td>
          </tr>
          
          <tr>
              <td id='23'>23
              {red0===23&&red_0}
              {red1===23&&red_1}
              {red2===23&&red_2}
              {red3===23&&red_3}
              {green0===23&&green_0}
              {green1===23&&green_1}
              {green2===23&&green_2}
              {green3===23&&green_3}
              {yellow0===23&&yellow_0}
              {yellow1===23&&yellow_1}
              {yellow2===23&&yellow_2}
              {yellow3===23&&yellow_3}
              {blue0===23&&blue_0}
              {blue1===23&&blue_1}
              {blue2===23&&blue_2}
              {blue3===23&&blue_3}
              </td>
              <td class='yellow'>53
              {yellow0===53&&yellow_0}
              {yellow1===53&&yellow_1}
              {yellow2===53&&yellow_2}
              {yellow3===53&&yellow_3}
              </td>
              <td id='27' class='yellow'>27
            
              {red0===27&&red_0}
              {red1===27&&red_1}
              {red2===27&&red_2}
              {red3===27&&red_3}
              {green0===27&&green_0}
              {green1===27&&green_1}
              {green2===27&&green_2}
              {green3===27&&green_3}
              {yellow0===27&&yellow_0}
              {yellow1===27&&yellow_1}
              {yellow2===27&&yellow_2}
              {yellow3===27&&yellow_3}
              {blue0===27&&blue_0}
              {blue1===27&&blue_1}
              {blue2===27&&blue_2}
              {blue3===27&&blue_3}
              </td>
              
          </tr>
          <tr>
              <td id='22'class='green'>22
              {red0===22&&red_0}
              {red1===22&&red_1}
              {red2===22&&red_2}
              {red3===22&&red_3}
              {green0===22&&green_0}
              {green1===22&&green_1}
              {green2===22&&green_2}
              {green3===22&&green_3}
              {yellow0===22&&yellow_0}
              {yellow1===22&&yellow_1}
              {yellow2===22&&yellow_2}
              {yellow3===22&&yellow_3}
              {blue0===22&&blue_0}
              {blue1===22&&blue_1}
              {blue2===22&&blue_2}
              {blue3===22&&blue_3}
              </td>
              <td class='yellow'>54
              {yellow0===54&&yellow_0}
              {yellow1===54&&yellow_1}
              {yellow2===54&&yellow_2}
              {yellow3===54&&yellow_3}
              </td>
              <td id='28'>28
              {red0===28&&red_0}
              {red1===28&&red_1}
              {red2===28&&red_2}
              {red3===28&&red_3}
              {green0===28&&green_0}
              {green1===28&&green_1}
              {green2===28&&green_2}
              {green3===28&&green_3}
              {yellow0===28&&yellow_0}
              {yellow1===28&&yellow_1}
              {yellow2===28&&yellow_2}
              {yellow3===28&&yellow_3}
              {blue0===28&&blue_0}
              {blue1===28&&blue_1}
              {blue2===28&&blue_2}
              {blue3===28&&blue_3}
              </td>
              
          </tr>
          <tr>
              <td id='21'>21
              {red0===21&&red_0}
              {red1===21&&red_1}
              {red2===21&&red_2}
              {red3===21&&red_3}
              {green0===21&&green_0}
              {green1===21&&green_1}
              {green2===21&&green_2}
              {green3===21&&green_3}
              {yellow0===21&&yellow_0}
              {yellow1===21&&yellow_1}
              {yellow2===21&&yellow_2}
              {yellow3===21&&yellow_3}
              {blue0===21&&blue_0}
              {blue1===21&&blue_1}
              {blue2===21&&blue_2}
              {blue3===21&&blue_3}
              </td>
              <td class='yellow'>55
              {yellow0===55&&yellow_0}
              {yellow1===55&&yellow_1}
              {yellow2===55&&yellow_2}
              {yellow3===55&&yellow_3}
              </td>
              <td id='29'>29
              {red0===29&&red_0}
              {red1===29&&red_1}
              {red2===29&&red_2}
              {red3===29&&red_3}
              {green0===29&&green_0}
              {green1===29&&green_1}
              {green2===29&&green_2}
              {green3===29&&green_3}
              {yellow0===29&&yellow_0}
              {yellow1===29&&yellow_1}
              {yellow2===29&&yellow_2}
              {yellow3===29&&yellow_3}
              {blue0===29&&blue_0}
              {blue1===29&&blue_1}
              {blue2===29&&blue_2}
              {blue3===29&&blue_3}
              
              
              
              </td>
              
          </tr>
          <tr>
              <td id='20'>20
              {red0===20&&red_0}
              {red1===20&&red_1}
              {red2===20&&red_2}
              {red3===20&&red_3}
              {green0===20&&green_0}
              {green1===20&&green_1}
              {green2===20&&green_2}
              {green3===20&&green_3}
              {yellow0===20&&yellow_0}
              {yellow1===20&&yellow_1}
              {yellow2===20&&yellow_2}
              {yellow3===20&&yellow_3}
              {blue0===20&&blue_0}
              {blue1===20&&blue_1}
              {blue2===20&&blue_2}
              {blue3===20&&blue_3}
              </td>
              <td class='yellow'>56
              {yellow0===56&&yellow_0}
              {yellow1===56&&yellow_1}
              {yellow2===56&&yellow_2}
              {yellow3===56&&yellow_3}
              </td>
              <td id='30'>30
              {red0===30&&red_0}
              {red1===30&&red_1}
              {red2===30&&red_2}
              {red3===30&&red_3}
              {green0===30&&green_0}
              {green1===30&&green_1}
              {green2===30&&green_2}
              {green3===30&&green_3}
              {yellow0===30&&yellow_0}
              {yellow1===30&&yellow_1}
              {yellow2===30&&yellow_2}
              {yellow3===30&&yellow_3}
              {blue0===30&&blue_0}
              {blue1===30&&blue_1}
              {blue2===30&&blue_2}
              {blue3===30&&blue_3}
              </td>
              
          </tr>
          <tr>
              <td id='19'>19
              {red0===19&&red_0}
              {red1===19&&red_1}
              {red2===19&&red_2}
              {red3===19&&red_3}
              {green0===19&&green_0}
              {green1===19&&green_1}
              {green2===19&&green_2}
              {green3===19&&green_3}
              {yellow0===19&&yellow_0}
              {yellow1===19&&yellow_1}
              {yellow2===19&&yellow_2}
              {yellow3===19&&yellow_3}
              {blue0===19&&blue_0}
              {blue1===19&&blue_1}
              {blue2===19&&blue_2}
              {blue3===19&&blue_3}
              </td>
              <td class='yellow'>57
              {yellow0===57&&yellow_0}
              {yellow1===57&&yellow_1}
              {yellow2===57&&yellow_2}
              {yellow3===57&&yellow_3}
              </td>
              <td id='31'>31
              {red0===31&&red_0}
              {red1===31&&red_1}
              {red2===31&&red_2}
              {red3===31&&red_3}
              {green0===31&&green_0}
              {green1===31&&green_1}
              {green2===31&&green_2}
              {green3===31&&green_3}
              {yellow0===31&&yellow_0}
              {yellow1===31&&yellow_1}
              {yellow2===31&&yellow_2}
              {yellow3===31&&yellow_3}
              {blue0===31&&blue_0}
              {blue1===31&&blue_1}
              {blue2===31&&blue_2}
              {blue3===31&&blue_3}
              </td>
              
          </tr>
<tr>
  <td id='13'>13
  {red0===13&&red_0}
              {red1===13&&red_1}
              {red2===13&&red_2}
              {red3===13&&red_3}
              {yellow0===13&&yellow_0}
              {yellow1===13&&yellow_1}
              {yellow2===13&&yellow_2}
              {yellow3===13&&yellow_3}
              {blue0===13&&blue_0}
              {blue1===13&&blue_1}
              {blue2===13&&blue_2}
              {blue3===13&&blue_3}
  </td>
  <td id='14' class='green'>14
              {red0===14&&red_0}
              {red1===14&&red_1}
              {red2===14&&red_2}
              {red3===14&&red_3}
              {green0===14&&green_0}
              {green1===14&&green_1}
              {green2===14&&green_2}
              {green3===14&&green_3}
              {yellow0===14&&yellow_0}
              {yellow1===14&&yellow_1}
              {yellow2===14&&yellow_2}
              {yellow3===14&&yellow_3}
              {blue0===14&&blue_0}
              {blue1===14&&blue_1}
              {blue2===14&&blue_2}
              {blue3===14&&blue_3}
  </td>
  <td id='15'>15
  {red0===15&&red_0}
              {red1===15&&red_1}
              {red2===15&&red_2}
              {red3===15&&red_3}
              {blue0===28&&blue_0}
              {green0===15&&green_0}
              {green1===15&&green_1}
              {green2===15&&green_2}
              {green3===15&&green_3}
              {yellow0===15&&yellow_0}
              {yellow1===15&&yellow_1}
              {yellow2===15&&yellow_2}
              {yellow3===15&&yellow_3}
              {blue0===15&&blue_0}
              {blue1===15&&blue_1}
              {blue2===15&&blue_2}
              {blue3===15&&blue_3}
  </td>
  <td id='16'>16
  {red0===16&&red_0}
              {red1===16&&red_1}
              {red2===16&&red_2}
              {red3===16&&red_3}
              {green0===16&&green_0}
              {green1===16&&green_1}
              {green2===16&&green_2}
              {green3===16&&green_3}
              {yellow0===16&&yellow_0}
              {yellow1===16&&yellow_1}
              {yellow2===16&&yellow_2}
              {yellow3===16&&yellow_3}
              {blue0===16&&blue_0}
              {blue1===16&&blue_1}
              {blue2===16&&blue_2}
              {blue3===16&&blue_3}
  </td>
  <td id='17'>17
  {red0===17&&red_0}
              {red1===17&&red_1}
              {red2===17&&red_2}
              {red3===17&&red_3}
              {green0===17&&green_0}
              {green1===17&&green_1}
              {green2===17&&green_2}
              {green3===17&&green_3}
              {yellow0===17&&yellow_0}
              {yellow1===17&&yellow_1}
              {yellow2===17&&yellow_2}
              {yellow3===17&&yellow_3}
              {blue0===17&&blue_0}
              {blue1===17&&blue_1}
              {blue2===17&&blue_2}
              {blue3===17&&blue_3}
  </td>
  <td id='18'>18
  {red0===18&&red_0}
              {red1===18&&red_1}
              {red2===18&&red_2}
              {red3===18&&red_3}
              {green0===18&&green_0}
              {green1===18&&green_1}
              {green2===18&&green_2}
              {green3===18&&green_3}
              {yellow0===18&&yellow_0}
              {yellow1===18&&yellow_1}
              {yellow2===18&&yellow_2}
              {yellow3===18&&yellow_3}
              {blue0===18&&blue_0}
              {blue1===18&&blue_1}
              {blue2===18&&blue_2}
              {blue3===18&&blue_3}
  </td>
  <td id='stop' rowSpan='3' colSpan='3'><div className="container">
  <div className="row">
  <div id='stop3' className="col-sm">{green0===58&&<img id='green' src={green} alt='not found'/>}
              {green1===58&&<img id='green' src={green} alt='not found'/>}<br/>
              {green2===58&&<img id='green' src={green} alt='not found'/>}
              {green3===58&&<img id='green' src={green} alt='not found'/>}<br/></div>
  <div  id='stop4' className="col-sm">{yellow0===58&&<img id='yellow' src={yellow} alt='not found'/>}
              {yellow1===58&&<img id='yellow' src={yellow} alt='not found'/>}<br/>
              {yellow2===58&&<img id='yellow' src={yellow} alt='not found'/>}
              {yellow3===58&&<img id='yellow' src={yellow} alt='not found'/>}<br/></div>
              </div>
              <div className="row">
  <div id='stop2' className="col-sm">{red0===57&&<img id='red'  src={red} alt='not found'/>}
              {red1===57&&<img  id='red' src={red} alt='not found'/>}<br/>
              {red2===57&&<img  id='red' src={red} alt='not found'/>}
              {red3===57&&<img  id='red' src={red} alt='not found'/>}<br/></div>
<div id='stop1' className="col-sm">   {blue0===58&&<img id='blue' src={blue} alt='not found'/>}
              {blue1===58&&<img id='blue' src={blue} alt='not found'/>}<br/>
              {blue2===58&&<img id='blue' src={blue} alt='not found'/>}
              {blue3===58&&<img id='blue' src={blue} alt='not found'/>}<br/></div></div>
              </div> </td>
  <td id='32'>32
  {red0===32&&red_0}
              {red1===32&&red_1}
              {red2===32&&red_2}
              {red3===32&&red_3}
              {green0===32&&green_0}
              {green1===32&&green_1}
              {green2===32&&green_2}
              {green3===32&&green_3}
              {yellow0===32&&yellow_0}
              {yellow1===32&&yellow_1}
              {yellow2===32&&yellow_2}
              {yellow3===32&&yellow_3}
              {blue0===32&&blue_0}
              {blue1===32&&blue_1}
              {blue2===32&&blue_2}
              {blue3===32&&blue_3}
  </td>
  <td id='33'>33
  {red0===33&&red_0}
              {red1===33&&red_1}
              {red2===33&&red_2}
              {red3===33&&red_3}
              {green0===33&&green_0}
              {green1===33&&green_1}
              {green2===33&&green_2}
              {green3===33&&green_3}
              {yellow0===33&&yellow_0}
              {yellow1===33&&yellow_1}
              {yellow2===33&&yellow_2}
              {yellow3===33&&yellow_3}
              {blue0===33&&blue_0}
              {blue1===33&&blue_1}
              {blue2===33&&blue_2}
              {blue3===33&&blue_3}
  </td>
  <td id='34'>34
  {red0===34&&red_0}
              {red1===34&&red_1}
              {red2===34&&red_2}
              {red3===34&&red_3}
              {green0===34&&green_0}
              {green1===34&&green_1}
              {green2===34&&green_2}
              {green3===34&&green_3}
              {yellow0===34&&yellow_0}
              {yellow1===34&&yellow_1}
              {yellow2===34&&yellow_2}
              {yellow3===34&&yellow_3}
              {blue0===34&&blue_0}
              {blue1===34&&blue_1}
              {blue2===34&&blue_2}
              {blue3===34&&blue_3}
  </td>
  <td id='35' class='yellow'>35
  {red0===35&&red_0}
              {red1===35&&red_1}
              {red2===35&&red_2}
              {red3===35&&red_3}
              {green0===35&&green_0}
              {green1===35&&green_1}
              {green2===35&&green_2}
              {green3===35&&green_3}
              {yellow0===35&&yellow_0}
              {yellow1===35&&yellow_1}
              {yellow2===35&&yellow_2}
              {yellow3===35&&yellow_3}
              {blue0===35&&blue_0}
              {blue1===35&&blue_1}
              {blue2===35&&blue_2}
              {blue3===35&&blue_3}
  </td>
  <td id='36'>36
  {red0===36&&red_0}
              {red1===36&&red_1}
              {red2===36&&red_2}
              {red3===36&&red_3}
              {green0===36&&green_0}
              {green1===36&&green_1}
              {green2===36&&green_2}
              {green3===36&&green_3}
              {yellow0===36&&yellow_0}
              {yellow1===36&&yellow_1}
              {yellow2===36&&yellow_2}
              {yellow3===36&&yellow_3}
              {blue0===36&&blue_0}
              {blue1===36&&blue_1}
              {blue2===36&&blue_2}
              {blue3===36&&blue_3}
  </td>
  <td id='37'>37
  {red0===37&&red_0}
              {red1===37&&red_1}
              {red2===37&&red_2}
              {red3===37&&red_3}
              {green0===37&&green_0}
              {green1===37&&green_1}
              {green2===37&&green_2}
              {green3===37&&green_3}
              {yellow0===37&&yellow_0}
              {yellow1===37&&yellow_1}
              {yellow2===37&&yellow_2}
              {yellow3===37&&yellow_3}
              {blue0===37&&blue_0}
              {blue1===37&&blue_1}
              {blue2===37&&blue_2}
              {blue3===37&&blue_3}
  </td>
</tr>
<tr>
  <td id='12'>12
  {red0===12&&red_0}
              {red1===12&&red_1}
              {red2===12&&red_2}
              {red3===12&&red_3}
              {green0===12&&green_0}
              {green1===12&&green_1}
              {green2===12&&green_2}
              {green3===12&&green_3}
              {yellow0===12&&yellow_0}
              {yellow1===12&&yellow_1}
              {yellow2===12&&yellow_2}
              {yellow3===12&&yellow_3}
              {blue0===12&&blue_0}
              {blue1===12&&blue_1}
              {blue2===12&&blue_2}
              {blue3===12&&blue_3}
  </td>
  <td class='green'>53
  {green0===57&&green_0}
              {green1===57&&green_1}
              {green2===57&&green_2}
              {green3===57&&green_3}
  </td>
  <td class='green'>54
  {green0===54&&green_0}
              {green1===54&&green_1}
              {green2===54&&green_2}
              {green3===54&&green_3}
  </td>
  <td class='green'>55
  {green0===55&&green_0}
              {green1===55&&green_1}
              {green2===55&&green_2}
              {green3===55&&green_3}
  </td>
  <td class='green'>56
  {green0===56&&green_0}
              {green1===56&&green_1}
              {green2===56&&green_2}
              {green3===56&&green_3}
  </td>
  <td class='green'>57
  {green0===57&&green_0}
              {green1===57&&green_1}
              {green2===57&&green_2}
              {green3===57&&green_3}
  </td>
  <td class='blue'>57
  {blue0===57&&blue_0}
  {blue1===57&&blue_1}
  {blue2===57&&blue_2}
  {blue3===57&&blue_3}
  </td>
  <td class='blue'>56
  {blue0===56&&blue_0}
  {blue1===56&&blue_1}
  {blue2===56&&blue_2}
  {blue3===56&&blue_3}
  </td>
  <td class='blue'>55
  {blue0===55&&blue_0}
  {blue1===55&&blue_1}
  {blue2===55&&blue_2}
  {blue3===55&&blue_3}
  </td>
  <td class='blue'>54
{blue0===54&&blue_0}
{blue1===54&&blue_1}
{blue2===54&&blue_2}
{blue3===54&&blue_3}
</td>
  <td class='blue'>53
  {blue0===53&&blue_0}
  {blue1===53&&blue_1}
  {blue2===53&&blue_2}
  {blue3===53&&blue_3}
  </td>
  <td id='38'>38
              {red0===38&&red_0}
              {red1===38&&red_1}
              {red2===38&&red_2}
              {red3===38&&red_3}
              {green0===38&&green_0}
              {green1===38&&green_1}
              {green2===38&&green_2}
              {green3===38&&green_3}
              {yellow0===38&&yellow_0}
              {yellow1===38&&yellow_1}
              {yellow2===38&&yellow_2}
              {yellow3===38&&yellow_3}
              {blue0===38&&blue_0}
              {blue1===38&&blue_1}
              {blue2===38&&blue_2}
              {blue3===38&&blue_3}
  </td>
</tr>
<tr>
  <td id='11'>11
  {red0===11&&red_0}
              {red1===11&&red_1}
              {red2===11&&red_2}
              {red3===11&&red_3}
              {green0===11&&green_0}
              {green1===11&&green_1}
              {green2===11&&green_2}
              {green3===11&&green_3}
              {yellow0===11&&yellow_0}
              {yellow1===11&&yellow_1}
              {yellow2===11&&yellow_2}
              {yellow3===11&&yellow_3}
              {blue0===11&&blue_0}
              {blue1===11&&blue_1}
              {blue2===11&&blue_2}
              {blue3===11&&blue_3}
  </td>
  <td id='10'>10
  {red0===10&&red_0}
              {red1===10&&red_1}
              {red2===10&&red_2}
              {red3===10&&red_3}
              {green0===10&&green_0}
              {green1===10&&green_1}
              {green2===10&&green_2}
              {green3===10&&green_3}
              {yellow0===10&&yellow_0}
              {yellow1===10&&yellow_1}
              {yellow2===10&&yellow_2}
              {yellow3===10&&yellow_3}
              {blue0===10&&blue_0}
              {blue1===10&&blue_1}
              {blue2===10&&blue_2}
              {blue3===10&&blue_3}
  </td>
  <td id='9'class='red'>9
  {red0===9&&red_0}
              {red1===9&&red_1}
              {red2===9&&red_2}
              {red3===9&&red_3}
              {green0===9&&green_0}
              {green1===9&&green_1}
              {green2===9&&green_2}
              {green3===9&&green_3}
              {yellow0===9&&yellow_0}
              {yellow1===9&&yellow_1}
              {yellow2===9&&yellow_2}
              {yellow3===9&&yellow_3}
              {blue0===9&&blue_0}
              {blue1===9&&blue_1}
              {blue2===9&&blue_2}
              {blue3===9&&blue_3}
  </td>
  <td id='8'>8
              {red0===8&&red_0}
              {red1===8&&red_1}
              {red2===8&&red_2}
              {red3===8&&red_3}
              {green0===8&&green_0}
              {green1===8&&green_1}
              {green2===8&&green_2}
              {green3===8&&green_3}
              {yellow0===8&&yellow_0}
              {yellow1===8&&yellow_1}
              {yellow2===8&&yellow_2}
              {yellow3===8&&yellow_3}
              {blue0===8&&blue_0}
              {blue1===8&&blue_1}
              {blue2===8&&blue_2}
              {blue3===8&&blue_3}
  </td>
  <td id='7'>7
              {red0===7&&red_0}
              {red1===7&&red_1}
              {red2===7&&red_2}
              {red3===7&&red_3}
              {green0===7&&green_0}
              {green1===7&&green_1}
              {green2===7&&green_2}
              {green3===7&&green_3}
              {yellow0===7&&yellow_0}
              {yellow1===7&&yellow_1}
              {yellow2===7&&yellow_2}
              {yellow3===7&&yellow_3}
              {blue0===7&&blue_0}
              {blue1===7&&blue_1}
              {blue2===7&&blue_2}
              {blue3===7&&blue_3}
  </td>
  <td id='6'>6
              {red0===6&&red_0}
              {red1===6&&red_1}
              {red2===6&&red_2}
              {red3===6&&red_3}
              {green0===6&&green_0}
              {green1===6&&green_1}
              {green2===6&&green_2}
              {green3===6&&green_3}
              {yellow0===6&&yellow_0}
              {yellow1===6&&yellow_1}
              {yellow2===6&&yellow_2}
              {yellow3===6&&yellow_3}
              {blue0===6&&blue_0}
              {blue1===6&&blue_1}
              {blue2===6&&blue_2}
              {blue3===6&&blue_3}
  </td>
  <td id='44'>44
  {red0===44&&red_0}
              {red1===44&&red_1}
              {red2===44&&red_2}
              {red3===44&&red_3}
              {green0===44&&green_0}
              {green1===44&&green_1}
              {green2===44&&green_2}
              {green3===44&&green_3}
              {yellow0===44&&yellow_0}
              {yellow1===44&&yellow_1}
              {yellow2===44&&yellow_2}
              {yellow3===44&&yellow_3}
              {blue0===44&&blue_0}
              {blue1===44&&blue_1}
              {blue2===44&&blue_2}
              {blue3===44&&blue_3}
  </td>
  <td id='43'>43
  {red0===43&&red_0}
              {red1===43&&red_1}
              {red2===43&&red_2}
              {red3===43&&red_3}
              {green0===43&&green_0}
              {green1===43&&green_1}
              {green2===43&&green_2}
              {green3===43&&green_3}
              {yellow0===43&&yellow_0}
              {yellow1===43&&yellow_1}
              {yellow2===43&&yellow_2}
              {yellow3===43&&yellow_3}
              {blue0===43&&blue_0}
              {blue1===43&&blue_1}
              {blue2===43&&blue_2}
              {blue3===43&&blue_3}
  </td>
  <td id='42'>42
  {red0===42&&red_0}
              {red1===42&&red_1}
              {red2===42&&red_2}
              {red3===42&&red_3}
              {green0===42&&green_0}
              {green1===42&&green_1}
              {green2===42&&green_2}
              {green3===42&&green_3}
              {yellow0===42&&yellow_0}
              {yellow1===42&&yellow_1}
              {yellow2===42&&yellow_2}
              {yellow3===42&&yellow_3}
              {blue0===42&&blue_0}
              {blue1===42&&blue_1}
              {blue2===42&&blue_2}
              {blue3===42&&blue_3}
  </td>
  <td id='41'>41
  {red0===41&&red_0}
              {red1===41&&red_1}
              {red2===41&&red_2}
              {red3===41&&red_3}
              {green0===41&&green_0}
              {green1===41&&green_1}
              {green2===41&&green_2}
              {green3===41&&green_3}
              {yellow0===41&&yellow_0}
              {yellow1===41&&yellow_1}
              {yellow2===41&&yellow_2}
              {yellow3===41&&yellow_3}
              {blue0===41&&blue_0}
              {blue1===41&&blue_1}
              {blue2===41&&blue_2}
              {blue3===41&&blue_3}
  </td>
  <td id='40' class='blue'>40
              {red0===40&&red_0}
              {red1===40&&red_1}
              {red2===40&&red_2}
              {red3===40&&red_3}
              {green0===40&&green_0}
              {green1===40&&green_1}
              {green2===40&&green_2}
              {green3===40&&green_3}
              {yellow0===40&&yellow_0}
              {yellow1===40&&yellow_1}
              {yellow2===40&&yellow_2}
              {yellow3===40&&yellow_3}
              {blue0===40&&blue_0}
              {blue1===40&&blue_1}
              {blue2===40&&blue_2}
              {blue3===40&&blue_3}
  </td>
  <td id='39'>39
  {red0===39&&red_0}
              {red1===39&&red_1}
              {red2===39&&red_2}
              {red3===39&&red_3}
              {green0===39&&green_0}
              {green1===39&&green_1}
              {green2===39&&green_2}
              {green3===39&&green_3}
              {yellow0===39&&yellow_0}
              {yellow1===39&&yellow_1}
              {yellow2===39&&yellow_2}
              {yellow3===39&&yellow_3}
              
  </td>
</tr>
              <td className='red' rowSpan='6' colSpan='6'>
              <h4>Your Scores:</h4>{
              this.state.red.map((el,index)=>
                 <span key={index}> |{el}| </span>
              
              )
              }
               <div id='redButton'>{playerNo===2&&<button id='button'type="button" class="btn btn-outline-secondary" onClick={this.imageSelector.bind(this,'redButton','red1')}>Roll Dice</button>}
               </div>
              <div id='red1'>
              < br/><span>       </span>{red0===0&& <img id='red7' src={red} onClick={this.removeGeti.bind(this,'red','red0')} alt="not Found"/>}
                             
<span>         </span>{red1===0&&<img id='red6' src={red} onClick={this.removeGeti.bind(this,'red','red1')} alt="not Found"/>}
< br/>< br/><span>       </span>{red2===0&& <img id='red5' src={red} onClick={this.removeGeti.bind(this,'red','red2')} alt="not Found"/>}
<span>         </span>{red3===0&& <img id='red5' src={red} onClick={this.removeGeti.bind(this,'red','red3')} alt="not Found"/>}
               </div>
              </td>
              <td id='5'>5
              {red0===5&&red_0}
              {red1===5&&red_1}
              {red2===5&&red_2}
              {red3===5&&red_3}
              {green0===5&&green_0}
              {green1===5&&green_1}
              {green2===5&&green_2}
              {green3===5&&green_3}
              {yellow0===5&&yellow_0}
              {yellow1===5&&yellow_1}
              {yellow2===5&&yellow_2}
              {yellow3===5&&yellow_3}
              {blue0===5&&blue_0}
              {blue1===5&&blue_1}
              {blue2===5&&blue_2}
              {blue3===5&&blue_3}
              </td>
              <td class='red'>57
              {red0===56&&red_0}
              {red1===56&&red_1}
              {red2===56&&red_2}
              {red3===56&&red_3}
              </td>
              <td id='45'>45
              {red0===45&&red_0}
              {red1===45&&red_1}
              {red2===45&&red_2}
              {red3===45&&red_3}
              {green0===45&&green_0}
              {green1===45&&green_1}
              {green2===45&&green_2}
              {green3===45&&green_3}
              {yellow0===45&&yellow_0}
              {yellow1===45&&yellow_1}
              {yellow2===45&&yellow_2}
              {yellow3===45&&yellow_3}
              {blue0===45&&blue_0}
              {blue1===45&&blue_1}
              {blue2===45&&blue_2}
              {blue3===45&&blue_3}
              </td>
              <td className='blue' rowSpan='6' colSpan='6'>
              <h4>Your Scores:</h4>{
              this.state.blue.map((el,index)=>
                 <span key={index}> |{el}| </span>
              
              )
              }
       <div id='blueButton'> {playerNo===1&&<button id='button' type="button" class="btn btn-outline-secondary" onClick={this.imageSelector.bind(this,'blueButton','blue1')}>Roll Dice</button>}
       </div>  
              <div id='blue1'>
         < br/><span>       </span>{blue0===0&& <img id='blue7' src={blue} onClick={this.removeGeti.bind(this,'blue','blue0')}  alt="not Found"/>}
              <span>         </span>{blue1===0&&<img id='blue6' src={blue} onClick={this.removeGeti.bind(this,'blue','blue1')}  alt="not Found"/>}
        < br/>< br/><span>       </span>{blue2===0&& <img id='blue5' src={blue} onClick={this.removeGeti.bind(this,'blue','blue2')}  alt="not Found"/>}
        <span>         </span>{blue3===0&& <img id='blue4' src={blue} onClick={this.removeGeti.bind(this,'blue','blue3')}  alt="not Found"/>}
        </div>
              </td>
<tr>
              <td id='4'>4
              {red0===4&&red_0}
              {red1===4&&red_1}
              {red2===4&&red_2}
              {red3===4&&red_3}
              {green0===4&&green_0}
              {green1===4&&green_1}
              {green2===4&&green_2}
              {green3===4&&green_3}
              {yellow0===4&&yellow_0}
              {yellow1===4&&yellow_1}
              {yellow2===4&&yellow_2}
              {yellow3===4&&yellow_3}
              {blue0===4&&blue_0}
              {blue1===4&&blue_1}
              {blue2===4&&blue_2}
              {blue3===4&&blue_3}
              </td>
              <td class='red'>56
              {red0===55&&red_0}
              {red1===55&&red_1}
              {red2===55&&red_2}
              {red3===55&&red_3}
              </td>
              <td id='46'>46
              {red0===46&&red_0}
              {red1===46&&red_1}
              {red2===46&&red_2}
              {red3===46&&red_3} 
              {green0===46&&green_0}
              {green1===46&&green_1}
              {green2===46&&green_2}
              {green3===46&&green_3}
              {yellow0===46&&yellow_0}
              {yellow1===46&&yellow_1}
              {yellow2===46&&yellow_2}
              {yellow3===46&&yellow_3}
              {blue0===46&&blue_0}
              {blue1===46&&blue_1}
              {blue2===46&&blue_2}
              {blue3===46&&blue_3}
              </td>
              
          </tr>
          <tr>
              <td id='3'>3
              {red0===3&&red_0}
              {red1===3&&red_1}
              {red2===3&&red_2}
              {red3===3&&red_3}
              {green0===3&&green_0}
              {green1===3&&green_1}
              {green2===3&&green_2}
              {green3===3&&green_3}
              {yellow0===3&&yellow_0}
              {yellow1===3&&yellow_1}
              {yellow2===3&&yellow_2}
              {yellow3===3&&yellow_3}
              {blue0===3&&blue_0}
              {blue1===3&&blue_1}
              {blue2===3&&blue_2}
              {blue3===3&&blue_3}
              </td>
              <td class='red'>55
              {red0===54&&red_0}
              {red1===54&&red_1}
              {red2===54&&red_2}
              {red3===54&&red_3}
              </td>
              <td id='47'>47
              {red0===47&&red_0}
              {red1===47&&red_1}
              {red2===47&&red_2}
              {red3===47&&red_3}
              {green0===47&&green_0}
              {green1===47&&green_1}
              {green2===47&&green_2}
              {green3===47&&green_3}
              {yellow0===47&&yellow_0}
              {yellow1===47&&yellow_1}
              {yellow2===47&&yellow_2}
              {yellow3===47&&yellow_3}
              {blue0===47&&blue_0}
              {blue1===47&&blue_1}
              {blue2===47&&blue_2}
              {blue3===47&&blue_3}
              </td>
              
          </tr>
          <tr>
              <td id='2'>2
              {red0===2&&red_0}
              {red1===2&&red_1}
              {red2===2&&red_2}
              {red3===2&&red_3}
              {green0===2&&green_0}
              {green1===2&&green_1}
              {green2===2&&green_2}
              {green3===2&&green_3}
              {yellow0===2&&yellow_0}
              {yellow1===2&&yellow_1}
              {yellow2===2&&yellow_2}
              {yellow3===2&&yellow_3}
              {blue0===2&&blue_0}
              {blue1===2&&blue_1}
              {blue2===2&&blue_2}
              {blue3===2&&blue_3}
              </td>
              <td class='red'>54
              {red0===53&&red_0}
              {red1===53&&red_1}
              {red2===53&&red_2}
              {red3===53&&red_3}
              </td>
              <td id='48'class='blue'>48
              {red0===48&&red_0}
              {red1===48&&red_1}
              {red2===48&&red_2}
              {red3===48&&red_3}
              {green0===48&&green_0}
              {green1===48&&green_1}
              {green2===48&&green_2}
              {green3===48&&green_3}
              {yellow0===48&&yellow_0}
              {yellow1===48&&yellow_1}
              {yellow2===48&&yellow_2}
              {yellow3===48&&yellow_3}
              {blue0===48&&blue_0}
              {blue1===48&&blue_1}
              {blue2===48&&blue_2}
              {blue3===48&&blue_3}
              </td>
              
          </tr>
          <tr>
          <td id='1' class='red'>1
          {red0===1&&red_0}
          {red1===1&&red_1}
          {red2===1&&red_2}
          {red3===1&&red_3}
          {green0===1&&green_0}
              {green1===1&&green_1}
              {green2===1&&green_2}
              {green3===1&&green_3}
              {yellow0===1&&yellow_0}
              {yellow1===1&&yellow_1}
              {yellow2===1&&yellow_2}
              {yellow3===1&&yellow_3}
              {blue0===1&&blue_0}
              {blue1===1&&blue_1}
              {blue2===1&&blue_2}
              {blue3===1&&blue_3}
          </td>
              <td class='red'>53
              {red0===52&&red_0}
              {red1===52&&red_1}
              {red2===52&&red_2}
              {red3===52&&red_3}
              </td>
              <td id='49'>49
              {red0===49&&red_0}
              {red1===49&&red_1}
              {red2===49&&red_2}
              {red3===49&&red_3}
              {green0===49&&green_0}
              {green1===49&&green_1}
              {green2===49&&green_2}
              {green3===49&&green_3}
              {yellow0===49&&yellow_0}
              {yellow1===49&&yellow_1}
              {yellow2===49&&yellow_2}
              {yellow3===49&&yellow_3}
              {blue0===49&&blue_0}
              {blue1===49&&blue_1}
              {blue2===49&&blue_2}
              {blue3===49&&blue_3}
              </td>
              
          </tr>
          <tr>
              <td id='52'>52
              {green0===52&&green_0}
              {green1===52&&green_1}
              {green2===52&&green_2}
              {green3===52&&green_3}
              {yellow0===52&&yellow_0}
              {yellow1===52&&yellow_1}
              {yellow2===52&&yellow_2}
              {yellow3===52&&yellow_3}
              {blue0===52&&blue_0}
              {blue1===52&&blue_1}
              {blue2===52&&blue_2}
              {blue3===52&&blue_3}
              </td>
              <td id='51'>51
              {red0===51&&red_0}
              {red1===51&&red_1}
              {red2===51&&red_2}
              {red3===51&&red_3}
              {green0===51&&green_0}
              {green1===51&&green_1}
              {green2===51&&green_2}
              {green3===51&&green_3}
              {yellow0===51&&yellow_0}
              {yellow1===51&&yellow_1}
              {yellow2===51&&yellow_2}
              {yellow3===51&&yellow_3}
              {blue0===51&&blue_0}
              {blue1===51&&blue_1}
              {blue2===51&&blue_2}
              {blue3===51&&blue_3}
              </td>
              <td id='50'>50
              {red0===50&&red_0}
              {red1===50&&red_1}
              {red2===50&&red_2}
              {red3===50&&red_3}
              {green0===50&&green_0}
              {green1===50&&green_1}
              {green2===50&&green_2}
              {green3===50&&green_3}
              {yellow0===50&&yellow_0}
              {yellow1===50&&yellow_1}
              {yellow2===50&&yellow_2}
              {yellow3===50&&yellow_3}
              {blue0===50&&blue_0}
              {blue1===50&&blue_1}
              {blue2===50&&blue_2}
              {blue3===50&&blue_3}
              </td>
              
          </tr>
          </tbody>
          
      </table>
     }
    </div>
  );
}
}

export default Routes;
