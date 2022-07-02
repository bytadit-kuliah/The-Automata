import React, { Component } from 'react'

class Pangkat extends Component {
    state = {
        iter: 1,
        newList: [],
        pos: -1,
        auto: 'Auto',
        manual: 'Start'
    }

    listUpdate = (x,i) =>{
        let temp = this.state.newList.slice()
        temp[i] = x
        this.setState({
            newList:temp
        }, () => console.log("iterasi " + i +" diganti " + x))
    }
    start(){
        switch (this.state.pos) {
            case -1 : this.init();          break;
            case 0  : this.q0();           break;
            case 1  : this.q1();          break;
            case 2  : this.q2();          break;
            case 3  : this.q3();          break;
            case 4  : this.q4();         break;
            case 5  : this.q5();          break;
            case 6  : this.q6();          break;
            case 7  : this.q7();          break;
            case 8  : this.q8();          break;
            case 9  : this.q9();         break;
            case 10 : this.q10();       break;
            case 11 : this.q11();       break;
            case 12 : this.q12();         break;
            case 13 : this.q13();       break;
            case 14 : this.q14();      break;
            case 15 : this.q15();       break;
            case 16 : this.q16();      break;
            case 17 : this.q17();       break;
            case 18 : this.q18();       break;
            case 19 : this.q19();      break;
            case 20 : this.q20();     break;
            case 21 : this.q21();       break;
            case 22 : this.q22();       break;
            case 23 : this.q23();     break;
            case 24 : this.q24();      break;
            case 25 : this.q25();        break;
            case 26 : this.q26();      break;
            case 27 : this.q27();      break; //New state after finding error
            default : break;
        }
    }
    
    stateUpdate = (i,pos) => {
        this.setState({
            iter: i, pos: pos,
        })
    }
    init(){
        this.stateUpdate(this.state.iter, 0)
    }
    q0(){
        if(this.state.newList[this.state.iter] === 0){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter+1, 1)
        }else if(this.state.newList[this.state.iter] === 1){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter+1, 23)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    q1(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 1) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter+1, 2)
            : console.log("Outside Range")
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    q2(){
        if(this.state.newList[this.state.iter] === 0){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter+1, 3)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter+1, 7)
        }else if(this.state.newList[this.state.iter] === 'B'){
            this.stateUpdate(this.state.iter+1, 2)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    q3(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter+1, 3) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter+1, 4)
            : console.log("Outside Range")
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    q4(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter+1, 4)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter-1, 11)
        }else if(this.state.newList[this.state.iter] === 'B'){
            let temp = this.state.newList;  temp.push('B'); this.setState({newList:temp})
            this.listUpdate(0, this.state.iter)
            this.stateUpdate(this.state.iter-1, 5)
        }else if(this.state.newList[this.state.iter] === 'X'){
            this.stateUpdate(this.state.iter+1, 4)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    q5(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 5) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter-1, 6)
            : console.log("Outside Range")
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    q6(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 6) :
        (this.state.newList[this.state.iter] === 'B') ? this.stateUpdate(this.state.iter+1, 2)
            : console.log("Outside Range")
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    q7(){
        if(this.state.newList[this.state.iter] === 0){  
            this.stateUpdate(this.state.iter+1, 7) 
        }else if(this.state.newList[this.state.iter] === 1){
            this.listUpdate("X", this.state.iter)
            this.stateUpdate(this.state.iter-1, 27)
        }else if(this.state.newList[this.state.iter] === 'B'){
            let temp = this.state.newList;  temp.push('B'); this.setState({newList:temp})
            this.listUpdate(1, this.state.iter)
            this.stateUpdate(this.state.iter-1, 8)
        }else if(this.state.newList[this.state.iter] === 'X'){
            this.stateUpdate(this.state.iter+1, 7)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    q8(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 8) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter-1, 9)
            : console.log("Outside Range")
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    q9(){
        if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter-1, 10)
        }else if(this.state.newList[this.state.iter] === 'B'){
            this.listUpdate(0, this.state.iter)
            this.stateUpdate(this.state.iter-1, 9)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    q10(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 10) :
        (this.state.newList[this.state.iter] === 'B') ? this.stateUpdate(this.state.iter+1, 0)
            : console.log("Outside Range")
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    q11(){
        if(this.state.newList[this.state.iter] === 0){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter+1, 12)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter+1, 15)
        }else if(this.state.newList[this.state.iter] === "B"){
            this.stateUpdate(this.state.iter-1, 11)
        }else if(this.state.newList[this.state.iter] === 'X'){
            this.stateUpdate(this.state.iter+1, 15)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    q12(){
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter+1, 13) :
        (this.state.newList[this.state.iter] === 'B') ? this.stateUpdate(this.state.iter+1, 12)
            : console.log("Outside Range")
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    q13(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter+1, 13)
        }else if(this.state.newList[this.state.iter] === 'B'){
            let temp = this.state.newList;  temp.push('B'); this.setState({newList:temp})
            this.listUpdate(0, this.state.iter)
            this.stateUpdate(this.state.iter-1, 14)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    q14(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 14) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter-1, 11)
            : console.log("Outside Range")
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    q15(){
        if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter-1, 16)
        }else if(this.state.newList[this.state.iter] === "B"){
            this.listUpdate(0, this.state.iter)
            this.stateUpdate(this.state.iter+1, 15)
        }
    }
    q16(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter-1, 16)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter-1, 17)
        }else if(this.state.newList[this.state.iter] === 'X'){
            this.stateUpdate(this.state.iter-1, 16)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    q17(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 17) :
        (this.state.newList[this.state.iter] === 'B') ? this.stateUpdate(this.state.iter+1, 2)
            : console.log("Outside Range")
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    q18(){
        if(this.state.newList[this.state.iter] === 0){
            this.listUpdate('X', this.state.iter)
            this.stateUpdate(this.state.iter+1, 18)
        }else if(this.state.newList[this.state.iter] === "X"){
            this.stateUpdate(this.state.iter+1, 19)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    q19(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter+1, 19)
        }else if(this.state.newList[this.state.iter] === 'B'){
            let temp = this.state.newList;  temp.push('B'); this.setState({newList:temp})
            this.listUpdate(1, this.state.iter)
            this.stateUpdate(this.state.iter-1, 20)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    q20(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter-1, 20)
        }else if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter-1, 20)
        }else if(this.state.newList[this.state.iter] === 'B'){
            this.listUpdate(0, this.state.iter)
            this.stateUpdate(this.state.iter-1, 21)
        }else if(this.state.newList[this.state.iter] === 'X'){
            this.stateUpdate(this.state.iter-1, 20)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    q21(){
        if(this.state.newList[this.state.iter] === 1){
            this.stateUpdate(this.state.iter-1, 22)
        }else if(this.state.newList[this.state.iter] === 'B'){
            this.listUpdate(0, this.state.iter)
            this.stateUpdate(this.state.iter-1, 21)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    q22(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 22) :
        (this.state.newList[this.state.iter] === 'B') ? this.stateUpdate(this.state.iter+1, 0)
            : console.log("Outside Range")
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    q23(){
        if(this.state.newList[this.state.iter] === 0){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter+1, 23)
        }else if(this.state.newList[this.state.iter] === 1){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter+1, 24)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    q24(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter+1, 25)
        }else if(this.state.newList[this.state.iter] === 1){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter+1, 25)
        }else if(this.state.newList[this.state.iter] === 'B'){
            let temp = this.state.newList;  temp.push('B'); this.setState({newList:temp})
            this.listUpdate(0, this.state.iter)
            this.stateUpdate(this.state.iter+1, 26)
        }else if(this.state.newList[this.state.iter] === 'X'){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter+1, 24)
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    q25(){
        if(this.state.newList[this.state.iter] === 0){
            this.stateUpdate(this.state.iter+1, 25)
        }else if(this.state.newList[this.state.iter] === 1){
            this.listUpdate('B', this.state.iter)
            this.stateUpdate(this.state.iter+1, 26)          
        }
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    q26(){
        console.log("ENDED")
        console.log("ENDED")
    }
    q27(){
        (this.state.newList[this.state.iter] === 0) ? this.stateUpdate(this.state.iter-1, 27) :
        (this.state.newList[this.state.iter] === 1) ? this.stateUpdate(this.state.iter+1, 18) :
        (this.state.newList[this.state.iter] === "X") ? this.stateUpdate(this.state.iter+1, 18) 
            : console.log("Outside Range")
        console.log("iter " +  this.state.iter)
        console.log("state " + this.state.pos)
    }
    handleClick = () =>{
        if(this.state.newList.length === 0){
            this.setState({
                newList: [...this.props.variable.list],
                manual: 'Next'
            }, () => this.start(), console.log(this.state.newList) )
        }else{
            this.start()
        }
    }
    handleAuto = () =>{
        this.setState({
            auto: 'SpeedUp',
        })
        if(this.state.newList.length === 0){
            this.setState({
                newList: [...this.props.variable.list],
            }, () => this.start() )
        }else if(this.state.pos !== 26 ){ //TERMINATE THE LOOP
            this.start()
            setTimeout(this.handleAuto, 1000);
        }else if(this.state.pos == -1){
            clearTimeout(this.handleAuto)
        }
    }
    handleReset= () =>{
        clearTimeout(this.handleAuto)
        this.setState({
            newList: [],
            iter: 1,
            pos: -1,  //-1 karena baru kepikiran di akhir kalau pas initiate tu belum dirubah
            auto: 'Auto',
            manual: 'Start'
        }, () => console.log(this.state.newList))
    }


    tapeMaker = (props) =>{
        const print = this.state.newList.map((val, i) => {
            if(i === this.state.iter){
                return(
                    <div className="box white">
                        {val}
                    </div>   
                )
            }else{
                return (
                    <div className="box">
                        {val}
                    </div>  
                )
            } 
        })
        return(
            <div>
                <input className='bttn manual' type="submit" id="manual" value={this.state.manual} onClick={() => this.handleClick()}/>
                <input className='bttn auto' type="submit" id="auto" value={this.state.auto} onClick={() => this.handleAuto()}/>
                <input className='bttn' type="submit" id="" value="Reset" onClick={() => this.handleReset()}/>
                <div className="scroll-container">
                    {print}
                </div>
            </div>
        )
    }

    render(){
        return(
            <div>
                {this.tapeMaker()}
            </div>
        )
    }
}

export default Pangkat