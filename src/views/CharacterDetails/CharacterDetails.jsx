import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./CharacterDetails.css";

import MyButton from "../../components/MyButton/MyButton";
import Loader from "../../components/Loader/Loader";

class CharacterDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: null,
      data: [],
      charId: this.props.match.params.charId
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  // Fetch data
  fetchData = async () => {
    this.setState({ loading: true });

    try {
      let response = await fetch(
        `https://rickandmortyapi.com/api/character/${this.state.charId}`
      );
      response = await response.json();

      this.setState({
        loading: false,
        data: response
      });

      console.log(this.state);
    } catch (err) {
      this.setState({
        loading: false,
        error: err
      });

      throw new Error(err);
    }
  };

  render() {
    if (this.state.loading) {
      return <Loader loading={this.state.loading}></Loader>;
    }

    const data = this.state.data;
    return (
      <div className="character__container">
        <div className="character__image">
          <img src={data.image} alt={``} />
        </div>

        <div className="character__data">
          <p className="char__name">{data.name}</p>
          <p className="char__species">Species: {`${data.species}`}</p>
          <p className="char__status">Status: {`${data.status}`}</p>
        </div>

        <div className="similars">
          <p>Similars</p>
        </div>

        <div className="character__button">
          <Link to="/">
            <MyButton>Volver</MyButton>
          </Link>
        </div>
      </div>
    );
  }
}

export default CharacterDetails;
