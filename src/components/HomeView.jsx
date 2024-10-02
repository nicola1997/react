import {useState} from 'react'
import Lega from "./Lega.jsx";
import {teamsA} from "../assets/data.js"
function HomeView() {
    const [count, setCount] = useState(0)
    return (
        <>
          <Lega teams={teamsA} ></Lega>
        </>
    )
}

export default HomeView
