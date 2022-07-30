import '../styles/home.scss'
import logo from '../assets/images/shuffle.svg';
import {useState } from 'react';
import { Film } from '../components/Film';


export function Home(){
    const [film, setFilm] = useState({});
    const [isFilm, setIsFilm] = useState(false);
    const [listedFilm, setListedFilm] = useState("");

    const moviesURL = import.meta.env.VITE_API;
    const apiKey = import.meta.env.VITE_API_KEY;
    
    async function getFilm(){
        const url = `${moviesURL}now_playing?${apiKey}`;
        const res = await fetch(url)
        const data = await res.json();

        const numberRandom = Math.floor(Math.random() * (19 - 0 + 1)) + 0;

        setFilm(data.results[numberRandom])
        setIsFilm(true);
        setListedFilm("listed-film")
    }

    return(
            <div id="page-home" className={listedFilm}>
                <h1>
                    <img src={logo} alt="Flix" id="logo"/>
                </h1>
                <h2>Não sabe o que assistir</h2>
                {isFilm
                    ? <Film film={film}/>
                    : <div></div>
                }
                <button onClick={getFilm}>
                    <img src={logo} alt="Flix" />
                    Encontrar filme
                </button>
                <p>Clique em "Encontrar filme" que traremos informações de algum filme para você assistir hoje.</p>
            </div>

    )
}
