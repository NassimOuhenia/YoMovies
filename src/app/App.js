import './App.css';
import MoviesContainer from "../components/movie/movie.container";
import {Provider} from 'react-redux';
import store from "../store";
import {FilterContainer} from "../components/filter/filter";
import {PaginationBarContainer} from "../components/PaginationBar/paginationBar";

function App() {

    return (
        <Provider store={store}>
            <FilterContainer/>
            <MoviesContainer/>
            <PaginationBarContainer/>
        </Provider>
    );
}

export default App;
