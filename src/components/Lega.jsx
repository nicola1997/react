import {useState} from 'react'
import Player from "./Player.jsx";
import Team from "./Team.jsx";

function Lega(props) {
        const listItems = props.teams.map(team =>
            <li key={team.nome}>
                    <p>
                            <b>{team.nome}:</b>
                            {' ' + team.stadio + ' '}
                            -  {team.campionato}
                    </p>
            </li>
        );
        return (
        <>
                <div>
                        {listItems}
                </div>
        </>
    )
}

export default Lega
