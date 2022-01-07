import React, {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

const year = parseInt(window.location.search.slice(1))

const target = new Date(year, 0, 1).getTime()

console.log(Date.now(), target)

function App() {
    const [time, setTime] = useState('')

    React.useEffect(() => {
        const i = setInterval(() => {
            // setTime(dayjs.duration(target.diff()).format('HH:mm:ss'))
            const current = target - Date.now()
            const seconds = Math.floor(current / 1000 % 60)
            const minutes = Math.floor(current / (1000*60) % 60)
            const hours = Math.floor(current / 3_600_000)

            setTime(`${hours}:${minutes}:${seconds}`)
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
