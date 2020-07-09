import React, { Component } from "react";

import "./Home.css";

import SearchBar from "../../components/SearchBar/SearchBar";
import ResultsList from "../../components/ResultsList/ResultsList";
import MyButton from "../../components/MyButton/MyButton";
import Loader from "../../components/Loader/Loader";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: null,
      nextPage: 1,
      data: [],
      query: ""
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  // Traemos los datos de la API
  fetchData = async () => {
    this.setState({ loading: true });

    try {
      let results = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
      );
      results = await results.json();

      this.setState({
        loading: false,
        nextPage: this.state.nextPage + 1,
        data: [].concat(this.state.data, results.results)
      });
    } catch (err) {
      this.setState({
        loading: false,
        error: err
      });
      throw new Error(err);
    }
  };

  // Manejamos el cambio de búsqueda
  handleChange = (event) => {
    this.setState({
      query: event.target.value
    });
  };

  // Limpiamos la búsqueda
  handleClearQuery = () => {
    this.setState({
      query: ""
    });
  };

  render() {
    if (this.state.loading && this.state.data.length === 0) {
      return <Loader loading={this.state.loading}></Loader>;
    }

    return (
      <div className="home__container">
        <div className="home__searchbar">
          <SearchBar
            onChange={this.handleChange}
            query={this.state.query}
          ></SearchBar>
        </div>
        <ResultsList
          characters={this.state.data}
          query={this.state.query}
          clearQuery={this.handleClearQuery}
        ></ResultsList>
        <div className="home__button">
          <MyButton function={this.fetchData}>
            {this.state.loading ? "Cargando..." : "Cargar más"}
          </MyButton>
        </div>
      </div>
    );
  }
}

export default Home;
