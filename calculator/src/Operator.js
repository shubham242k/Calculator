import "./Operator.css";
let Operator = (props) =>{
    return(
        <div className="operators">
            {
                props.operators.map((el) => {
                    return( 
                    <div className ="operator"
                        onClick ={
                            (e) =>{
                                props.bringOperator(e.currentTarget.innerText);
                            }
                        }
                    >{el}
                    </div>
                    );
                })
            }
        </div>
    )
}

export default Operator