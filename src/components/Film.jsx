import '../styles/film.scss';

const imagesURL = import.meta.env.VITE_IMG;

export function Film({film}){

    return(
        <div id="film">
            <img src={imagesURL + film.poster_path} alt="" />
            <div>
                <h3>{film.original_title}</h3>
                <p className="description">{film.overview}</p>
            </div>
        </div>
    )
}
