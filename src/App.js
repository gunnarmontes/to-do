import './App.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';


function App() {
  const [checkBoxes, setCheckBoxes] = useState([
  

  ])

  const [inputValue, setInputValue] = useState("")

  const [taskIdVal, setTaskIdVal] = useState(0)

  const setChecked = (id) => {
    setCheckBoxes(p => 
    (p.map(
      (checkBox) =>

        checkBox.id === id ? {...checkBox, checked: !checkBox.checked}
        : checkBox

      
      )
    )
    )


  }

  const deleteEntry = (id) => {
    setCheckBoxes(p => p.filter((checkBox) => checkBox.id !== id))

  }

  const addEntry = () => {
    if (inputValue.trim() === "") return;
    setCheckBoxes(prev => [
      ...prev, {id: taskIdVal, checked: false, text: inputValue},]
    )
    setInputValue("")
    setTaskIdVal(p => p + 1)
     

  }
  return (
    <div className="App">
      <div className="content-container">
        <div className='white-backdrop'>
          <div className='user-input'>
            <input placeholder='Enter Task' onChange={(e) => setInputValue(e.target.value)}></input>
            <button onClick={() => addEntry()}>Submit</button>          

          </div>
          <div className='tasks'>
            
              {checkBoxes.map(({id, checked, text}) => (
                <div key={id} className='task-container'>
                  <span className='task-wrapper' onClick={() => setChecked(id)}>
                    {checked ? <CheckBoxIcon style={{fontSize: '32px'}}/> : <CheckBoxOutlineBlankIcon style={{fontSize: '32px'}}/>}
                    <span className='task'>{text}</span>
                    
                  </span>
                  <span className='delete-wrapper' onClick={() => deleteEntry(id)}>
                    <CloseIcon style={{fontSize: '32px'}}/>

                  </span>
                </div>

              ))}

            
            
            </div>
          
        </div>

      </div>
      

    </div>
  );
}

export default App;
