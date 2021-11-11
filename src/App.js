import React, {useState} from 'react';
import './style/App.sass'
import TaskItem from "./componennt/TaskItem";
import TaskList from "./componennt/TaskList";

function App() {
    const posts = [
        {name: "Первая задача", id: 1, priority: 0},
        {name: "Вторая задача", id: 2, priority: 2},
        {name: "Третья задача", id: 3, priority: 1}
    ]
    return(
      <div className="App">
          <TaskList posts={posts}/>
      </div>
  )
}

export default App;
