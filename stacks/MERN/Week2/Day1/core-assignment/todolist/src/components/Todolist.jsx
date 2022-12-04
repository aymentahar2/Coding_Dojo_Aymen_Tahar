import React, { useState } from 'react'
import uuid from 'react-uuid';

const Form = (props) => {

const [input, setInput] = useState('');
const [tasks,setTasks] = useState([]);

//GET INPUT VALUE
const onChangeHandler = e =>{ 
    setInput(e.target.value);
}

// ADD tasks

const onsubmitHandler = e =>{ 
    e.preventDefault();
    setTasks([...tasks, {task: input,id:uuid(), isCompleted: false}]);
    setInput("");
}
///

return (
    <main className="main">
    <div className="form">

        <form onSubmit={onsubmitHandler}>
             <div>
    <input type="text" name='input' onChange={onChangeHandler} value={input}/>
           </div>

    <button> Add</button>
    
        </form>
    
    </div>

    <div  className="tasks" >

        {tasks.map(({task, id, isCompleted}) => {
            return (
                <div key={id}>
                    <div>
                    <p> <input type="checkbox" onChange= {e =>{ 
                        setTasks((prevTasks) => {
                            const newTasks = prevTasks.map(prevTask => prevTask.task === task?{task,id,isCompleted:!isCompleted}:{task,id,isCompleted});
                            return newTasks;
                        }
                        );
                       
                    }
                    
                    } />  {task}</p> 
                       
                    </div>
                </div> 
        )})}
        
        


    </div>
    
    </main>

  )
}

export default Form ;