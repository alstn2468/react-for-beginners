import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    error: null,
    loading: true,
    searchTerm: ""
  };

  handleSubmit = () => {
    const { searchTerm } = this.state;

    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });

    try {
      const {
        data: { results: movieResults }
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults }
      } = await tvApi.search(searchTerm);

      this.setState({
        movieResults,
        tvResults
      });
    } catch {
      this.setState({
        error: "Can't find results."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { movieResults, tvResults, error, loading, searchTerm } = this.state;

    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        error={error}
        loading={loading}
        searchTerm={searchTerm}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
