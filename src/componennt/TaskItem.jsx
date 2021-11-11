import React from "react";
import MyButton from "./UI/button/MyButton";


const TaskItem = function (props){
    let className = 'post';
    if(props.post.priority == 1){
        className += ' post-imp';
    }
    if(props.post.priority == 2){
        className += ' post-not'
    }
    return(
        <div className={className}>
            <div>Имя: {props.post.name}</div>
            <div>
                <MyButton>Delete</MyButton>
                <MyButton>Important</MyButton>
            </div>
        </div>

    )
}

export default TaskItem;