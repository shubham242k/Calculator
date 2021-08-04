import "./Operand.css";
let Operand = (props) => {


    return(
        <div className="keypad">
            {
                props.number.map((el) => {
                    return( <div className ="number"
                                onClick ={
                                    (e) =>{
                                        props.bringOperand(e.currentTarget.innerText);
                                    }
                                }
                            >{el}
                        
                        </div>
                    );
                })
            }
        </div>
        
    );
}

export default Operand