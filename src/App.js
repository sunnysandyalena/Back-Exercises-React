import './App.css';
import { useState } from 'react';
import { data } from './data';
import previous from './back.png';
import next from './next.png';
import Like from './Like';
import Dislike from './Dislike';

function App() {
  const [exercises, setExercises]=useState(0);

  const [showMore, setShowMore] = useState(false);

  const [like, setLike] = useState (false);

  const {id, exercise, image, description}=data[exercises];

  const changeLike = () => {
    if (like === false) {
      setLike (true)
    }
    else {
      setLike (false)
    }
  }
  const previousExercise = () => {
    setExercises((exercises => {
      exercises --;
      if (exercises < 0) {
        return data.length -1
      }
      return exercises
    }))
  }
  
  const nextExercise = () => {
    setExercises ((exercises => {
      exercises ++;
      if (exercises > data.length -1) {
        exercises=0;
      }
      return exercises
    }))
  }

  return (
    <div className='main'>
      <div className='container'>
        <div>
          <h1>{data.length} back exercises at home</h1>
        </div>
        <div>
          <h2>{id} - {exercise}</h2>
        </div>
        <div>
          <img src = {image} width = '350px' alt = 'Exercise' />
        </div>
        <div>
          <p>{showMore ? description : description.substring(0, 150) + "..."} 
            <button className='show' onClick={() => setShowMore(!showMore)}>
            {showMore ? 'show less' : 'show more'}
            </button>
          </p>
        </div>
      </div>
      <div className='control-panel'>
        <div className='likes'>
          <button className='heart' onClick={changeLike}>{like ? <Like/> : <Dislike/>}</button>
        </div>
      </div>
      <div className='delete'>
        <button className='delete-btn' onClick = {() => setExercises ([])}>DELETE ALL</button>
      </div>
      <div className='control-btns'>
        <div className='back-btn'>
          <button className='back' onClick={previousExercise}><img src ={previous} width = '50px' alt = 'Previous'/></button>
        </div>
        <div className='next-btn'>
          <button className='next' onClick={nextExercise}><img src ={next} width = '50px' alt = 'Next'/></button>
        </div>
      </div>
    </div>
  )
}

export default App;
