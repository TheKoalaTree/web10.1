import React, {useState} from 'react'
import '../CSS/MainBody.css';
import Cards from './Cards'
import SubTitle from './SubTitle'
import RadioButton from './RadioButton';
import Button from './Button'

function MainBody() {
    const [task, setTask] = useState({
      task_type: '',
      task_title: '',
      task_desc: '',
      suburb: '',
      suburb_date: '',
      budget_type: '',
      budget_value: '$'
    })

    const handleChange = (event)=>{
      const {name, value} = event.target
      setTask((preValue)=>{  
        return {
          ...preValue,
          [name]: value
        }
      })
    }

    const createTask = ()=>{
      fetch('http://localhost:5000/createTask', {
          mode: 'no-cors',
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body : JSON.stringify({
            task_type: task.task_type,
            task_title: task.task_title,
            task_desc: task.task_desc,
            suburb: task.suburb,
            suburb_date: task.suburb_date,
            budget_type: task.budget_type,
            budget_value: task.budget_value
          })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => {
          console.log("Error:" + err)
      })
  }

  return (
    <div className="MainBody">
      <div className="left">
        <div> Experts Info</div>
        <br />
        <Cards/>
      </div>

      <div className="Main">
        <div>
          <SubTitle text="New Task" />
          <RadioButton description="Select Task Type: " value_1="InPerson" value_2="Online" onChange={handleChange} value={task.task_type}/>
        </div>

        <div>
          <SubTitle text = "Describe your task to Experts" />
          <div className="new_task">
            Task title: 
            <input type="text" name="task_title" id="task_title" placeholder="Enter task title" onChange={handleChange} value={task.task_title}/>
            <br />
            Description: 
            <input type="text" name="task_desc" id="task_desc" placeholder="Enter task description" onChange={handleChange} value={task.task_desc}/>
          </div>
        </div>

        <div className="suburb_setting">
          <SubTitle text = "Setting up your task" />
            This section is desiconditional renderingFor an online task, only date would be appeared, 
            would abased on the type of the task. It could be dean in-person task, both suburb and datebe appeared
          <div>
            Suburb: 
            <input type="text" name="suburb" id="suburb" placeholder="Enter a suburb" onChange={handleChange} value={task.suburb}/>
            <br />
            Date: 
            <input type="text" name="suburb_date" id="suburb_date" placeholder="Enter a date" onChange={handleChange} value={task.suburb_date}/>
          </div>
        </div>

        <div>
          <SubTitle text = "Suggest how much" />
          <RadioButton description="What is your budget? (This is an estimation)" value_1="total" value_2="hourly_rate" onChange = {handleChange} value={task.budget_type}/>
          <input type="text" name="budget_value" id="budget_value" placeholder="$" onChange={handleChange} value={task.budget_value}/>
        </div>

        <Button type='button' text='Post Task' name='create_task' id='create_task' onClick={createTask} />
      </div>
      
      <div className="right">
        <div> Experts</div>
        <br />
        <img src= { require('../images/expert_1.png')} alt='expert_1'/>
        <img src= { require('../images/expert_2.png')} alt='expert_2'/>
        <img src= { require('../images/expert_3.png')} alt='expert_3'/>
        <img src= { require('../images/expert_4.png')} alt='expert_4'/>
      </div>
    </div>
  );
}

export default MainBody;
