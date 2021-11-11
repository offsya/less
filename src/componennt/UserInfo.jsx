import React from "react";

const UserInfo = function (props){
    return(
        <div className='Info'>
            <div>Имя: {props.post.userName}</div>
            <br/>
            <div>Пол: {props.post.userGender}</div>
            <br/>
            <div>Возраст: {props.post.userAge}</div>
            <br/>
            <div>Работает лет: {props.post.yearsWorked}</div>
            <br/>D
            <div>Зарплата: {props.post.yearsWorked*10+"$"}</div>
        </div>
    )
}

export default UserInfo;