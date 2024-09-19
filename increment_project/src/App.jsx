import './App.css'
import { useState } from 'react'
//import MyButton from './components/MyButton'


function App() {
    const [counter, setCounter] = useState(0);
 
    function handleClick(){
        setCounter(counter + 1);
    }

    function MyButton({myCounter, myEvent}) {
        <button onClick={myEvent}>
            {myCounter}
        </button>
    }

        return(
            <div className='App'>
                <MyButton myCounter={counter} myEvent={handleClick}/>
                <MyButton myCounter={counter} myEvent={handleClick}/>
                <MyButton myCounter={counter} myEvent={handleClick}/>
                <MyButton myCounter={counter} myEvent={handleClick}/>

            </div>
        )
    }


export default App
