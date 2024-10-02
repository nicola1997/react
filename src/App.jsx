import './App.css';
import Start from "./components/Start.jsx";
import {teamsSerieA} from "./assets/data.js";
import {teamsBundesliga} from "./assets/data.js";
import {teamsLigue1} from "./assets/data.js";
import {teamsLaLiga} from "./assets/data.js";
import {teamsPremierLeague} from "./assets/data.js";
function App() {
    return (
        <>
            <Start
                teamsSerieA={teamsSerieA}
                teamsBundesliga={teamsBundesliga}
                teamsLaLiga={teamsLaLiga}
                teamsLigue1={teamsLigue1}
                teamsPremierLeague={teamsPremierLeague}
            />
        </>
    );
}

export default App;
