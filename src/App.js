import React from 'react'
import {Provider} from 'react-redux'

import store from './store'
import CourseList from './components/CourseList'

export default function App() {
  return (
    <Provider store={store}>
      <div style={{position: 'relative', zIndex:2, padding: '10px'}}>
        <h1>
          Exemplo simples e prático utilizado Redux
        </h1>
        
      </div>
      <CourseList />
      
    </Provider>
    
  );
}

