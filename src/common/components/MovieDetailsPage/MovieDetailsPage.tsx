import {useNavigate, useParams} from "react-router-dom";
import s from './MovieDetailsPage.module.css'
import {
    useGetCreditsQuery,
    useGetMovieDetailsQuery,
    useGetSimilarMoviesQuery
} from "@/features/CategoryMovies/api/movieListsApi.ts";
import {RatingBadge} from "@/common/components/FilmCard/RatingBadge/RatingBadge.tsx";
import {FilmCard} from "@/common/components/FilmCard/FilmCard.tsx";
import {toast} from "react-toastify";
import {
    MovieDetailsPageSkeleton
} from "@/common/components/MovieDetailsPage/MovieDetailsPageSkeleton/MovieDetailsPageSkeleton.tsx";

export const MovieDetailsPage = () => {
    const navigate = useNavigate()

    const {movieId} = useParams<{ movieId: string }>()

    const { data: movieDetails, isLoading: movieLoading } = useGetMovieDetailsQuery(Number(movieId))
    const { data: actors, isLoading: actorsLoading } = useGetCreditsQuery(Number(movieId))
    const { data: similarMovies, isLoading: similarLoading } = useGetSimilarMoviesQuery(Number(movieId))


    const isLoading = movieLoading || actorsLoading || similarLoading

    if (isLoading) {
        return <MovieDetailsPageSkeleton />
    }

    if (!movieDetails) {
        toast.error('Failed to load movie details')
        return <div className={s.error}>❌ Movie not found</div>
    }

    const hours = Math.floor(movieDetails.runtime / 60)
    const minutes = movieDetails.runtime % 60
    const year = new Date(movieDetails?.release_date).getFullYear()

    const topActors = actors?.cast.slice(0, 6)

    const topSimilarMovies = similarMovies?.results.slice(0,6)

    return (
        <div className={s.container}>

            <section className={s.movieDataContainer}>
                <div className={s.posterWrapper}>
                    <img alt={'Film Image'}
                         src={movieDetails?.poster_path
                             ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                             : '/placeholder-poster.jpg'}
                         className={s.currentFilmImage}
                         width={300}
                         height={450}
                    />
                </div>
                <div className={s.textInfoContainer}>
                    <div className={s.backButtonWrapper}>
                        <h2>{movieDetails.title}</h2>
                        <button className={s.buttonBack} onClick={()=>navigate(-1)}>Back</button>
                    </div>
                    <div className={s.meta}>
                        <span>Release year : {year}</span>
                        <RatingBadge rating={movieDetails.vote_average}/>
                        <span>Runtime: {hours}h {minutes}m</span>
                    </div>
                    <p>{movieDetails.overview}</p>
                    <div className={s.genreSection}>
                        <h2>Genres</h2>
                        <ul className={s.genreWrapper}>
                            {movieDetails.genres.map((g) => (
                                <li key={g.id} className={s.genre}>{g.name}</li>))}
                        </ul>
                    </div>
                </div>
            </section>


            <section  className={s.castSection}>
                <h2>Cast</h2>
                <div className={s.castGrid}>
                    {topActors?.map((actor) => (
                        <div key={actor.id} className={s.castCard}>
                            <img alt={actor.name}
                                 src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`}
                                 className={s.castPhoto}/>
                            <p className={s.actorName}>{actor.name}</p>
                            <p className={s.characterName}>{actor.character}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className={s.similarMoviesSection}>
                <h2>Similar Movies</h2>
                <ul className={s.similarMoviesWrapper}>
                    {topSimilarMovies?.map((film)=>(
                        <FilmCard key={film.id} film={film} isLoading={movieLoading} cardHeight={270} cardWidth={180}/>
                    ))}
                </ul>
            </section>

        </div>
    )
}