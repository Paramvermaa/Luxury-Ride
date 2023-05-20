import {React, useState} from "react";
import classNames from "classnames";
function FaqQuestions(props){
    const [activeQ,setActiveQ]=useState("q1");
    const openQ =(id)=>{
        setActiveQ(id===activeQ?" ":id);
    };
    const openQuestion=(id)=>{
        return id==activeQ?"openQuestion":null;
    };
    const openAnswer=(id)=>{
        return id==activeQ?"openAnswer":null;
    };
    return <div>
        <div id={props.id} onClick={()=>openQ(props.id)} className={classNames("FaqQuestions",openQuestion(props.id))}>
            <p>{props.question}</p>
            <i className="fa-solid fa-angle-down"></i>
        </div>
        <div id={props.id} onClick={()=>openQ(props.id)} className={classNames("FaqQuestionsAns",openAnswer(props.id))}>
            {props.answer}
        </div>
        {console.log(activeQ)}
    </div>
}
export default FaqQuestions