import React, {Component} from "react";
import "./movie.component.scss";
import Movie from "./movie.component";
import {getMovies} from "../../service/movieService";
import {connect} from "react-redux";
import {
    deleteMovieAction,
    dislikeMovieAction,
    likeMovieAction,
    saveMoviesAction
} from "../../store/actions/movies.action";
import {SpinnerComponent} from "../../common/spinner/spinner.component";
import moviesSelector from "../../store/selectors/movies.selector";

class MoviesContainer extends Component {
    state = {
        isLoading: true,
    }

    componentDidMount = async () => {
        const {movies} = await getMovies();
        this.props.loadMovies(movies);
        this.setState({isLoading: false});
    }

    renderMovies = () => {
        const {movies, onDelete, onLike, onDislike} = this.props;

        return (
            <div className="movies-container text-center">
                <div className="container mt-3 cards-container d-flex justify-content-center">
                    {movies.map((movie) =>
                        <Movie
                            key={movie.id}
                            movie={movie}
                            onDelete={onDelete}
                            onLike={onLike}
                            onDislike={onDislike}
                        />
                    )}
                </div>
            </div>
        );
    }

    renderNoMovies = () =>
        <a href={'/'} className={"text-center text-decoration-none text-info"}>
            <img src="/logo512.png" className={"d-flex m-auto logo"} alt="no-movies"/>
            <h3>React/Redux</h3>
        </a>

    render() {
        const {isLoading} = this.state;
        const {movies} = this.props;
        return !isLoading ? (
            movies.length ? (
                this.renderMovies()
            ) : (
                this.renderNoMovies()
            )
        ) : (
            <SpinnerComponent/>
        )
    };
}

const mapStateToProps = (state) => ({
    movies: moviesSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    loadMovies: (movies) => dispatch(saveMoviesAction(movies)),
    onDelete: (movieId) => dispatch(deleteMovieAction(movieId)),
    onLike: (movieId) => dispatch(likeMovieAction(movieId)),
    onDislike: (movieId) => dispatch(dislikeMovieAction(movieId)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviesContainer);
