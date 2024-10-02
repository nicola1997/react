import {Link} from "react-router-dom";

function Start({addTeam, teamsSerieA, teamsPremierLeague, teamsLigue1, teamsLaLiga, teamsBundesliga}) {
    const listTeamsSerieA = teamsSerieA.map(team =>
        <Link to={'/menu'}>
            <button key={team.nome} type="button"
                    onClick={() => addTeam(team.nome)}

                    className="list-group-item list-group-item-action">{team.nome}</button>
        </Link>
    );
    const listTeamsPremierLeague = teamsPremierLeague.map(team =>
        <Link to={'/menu'}>
            <button key={team.nome} type="button"
                    onClick={() => addTeam(team.nome)}

                    className="list-group-item list-group-item-action">{team.nome}</button>
        </Link>
    );
    const listTeamsLigue1 = teamsLigue1.map(team =>
        <Link to={'/menu'}>
            <button key={team.nome} type="button"
                    onClick={() => addTeam(team.nome)}

                    className="list-group-item list-group-item-action">{team.nome}</button>
        </Link>
    );
    const listTeamsLaLiga = teamsLaLiga.map(team =>
        <Link to={'/menu'}>
            <button key={team.nome} type="button"
                    onClick={() => addTeam(team.nome)}

                    className="list-group-item list-group-item-action">{team.nome}</button>
        </Link>
    );
    const listTeamsBundesliga = teamsBundesliga.map(team =>
        <Link to={'/menu'}>
            <button key={team.nome} type="button"
                    onClick={() => addTeam(team.nome)}

                    className="list-group-item list-group-item-action">{team.nome}</button>
        </Link>
    );

    return (
        <>
            <h3>Scegli una squadra...</h3>
            <div>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                SERIE A
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse"
                             data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <div className="list-group">{listTeamsSerieA}</div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                    aria-controls="flush-collapseTwo">
                                PREMIER LEAGUE
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse"
                             data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <div className="list-group">{listTeamsPremierLeague}</div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                LA LIGA
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse"
                             data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <div className="list-group">{listTeamsLaLiga}</div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapse4" aria-expanded="false"
                                    aria-controls="flush-collapse4">
                                BUNDESLIGA
                            </button>
                        </h2>
                        <div id="flush-collapse4" className="accordion-collapse collapse"
                             data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <div className="list-group">{listTeamsBundesliga}</div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapse5" aria-expanded="false"
                                    aria-controls="flush-collapse5">
                                LIGUE 1
                            </button>
                        </h2>
                        <div id="flush-collapse5" className="accordion-collapse collapse"
                             data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <div className="list-group">{listTeamsLigue1}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Start
