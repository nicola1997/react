import {useState} from 'react'
import Player from "./Player.jsx";

function Team(props) {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="card" style={{width: '18rem'}}>
                <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">
                            <Player></Player>
                            <Player></Player>
                            <Player></Player>
                            <Player></Player>
                            <Player></Player>
                            <Player></Player>
                            <Player></Player>
                            <Player></Player>
                            <Player></Player>
                            <Player></Player>
                        </p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </>
)
}

export default Team
