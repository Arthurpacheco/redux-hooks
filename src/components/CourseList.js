import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

function addCourseAction(title){
  return {  
    type: 'ADD_COURSE', title
  }
}

export default function CourseList() {
  const courses = useSelector(state => state.data)
  const dispatch = useDispatch()

  function addCourse(){
    dispatch(addCourseAction('GraphQL'))
  }

  return (
    <div style={{display:"block"}}>      
      <button onClick={addCourse} style={{marginLeft: 25}}>
        Adicionar curso
      </button>
      <div style={{backgroundColor:'#e1e1e1', width: '20%', marginLeft: 25, borderRadius:10}}>
        <ul style={{marginTop: 30}}>
            {             
              courses.map(course =><li key={course} style={{marginTop: 15, marginLeft: 40}}> {course} </li>) 
            }
        </ul>
      </div>
      
      
    </div>
  )

}

