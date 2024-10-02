import './App.css';
import Start from "./components/Start.jsx";
import {teamsBundesliga, teamsLaLiga, teamsLigue1, teamsPremierLeague, teamsSerieA} from "./assets/data.js";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Menu from "./components/Menu.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route
                            path="/"
                            element={<Start teamsSerieA={teamsSerieA}
                                            teamsBundesliga={teamsBundesliga}
                                            teamsLaLiga={teamsLaLiga}
                                            teamsLigue1={teamsLigue1}
                                            teamsPremierLeague={teamsPremierLeague}
                                            onPlayMovie={() => alert('Playing!')}> </Start>}
                        />
                        <Route
                            path='/menu'
                            element={<Menu/>}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
