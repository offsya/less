import React from 'react';
import TaskItem from "./TaskItem";

const TaskList = ({posts}) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Список задач</h1>
            {posts.map((post)=>
                <TaskItem post={post} key={post.id}/>
            )}
        </div>
    );
};

export default TaskList;