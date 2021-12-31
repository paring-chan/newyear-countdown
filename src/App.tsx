import React, {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

const year = parseInt(window.location.search.slice(1))

const target = dayjs(new Date(year, 1, 1, 0, 0, 0, 0))

function App() {
    const [time, setTime] = useState('')

    React.useEffect(() => {
        const i = setInterval(() => {
            setTime(dayjs.duration(target.diff()).format('HH:mm:ss'))
        }, 100)

        return () => clearInterval(i)
    }, [])

    return (
        <div className="App">
            <title>Goodbye {year-1}!</title>
            {time}
        </div>
    )
}

export default App
