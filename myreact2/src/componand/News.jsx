import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = { country: "in", pageSize: 8, category: "general" };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      totalResults: 0,
      page: 1,
      error: null, // Add an error state
    };
  }

  componentDidMount() {
    this.fetchNews();
  }

  async fetchNews(page = 1) {
    const { country, category } = this.props;
    const apiKey = "YOUR_API_KEY"; // Replace with your API key
    const pageSize = this.props.pageSize || 20;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;

    try {
      this.setState({ loading: true });
      const response = await fetch(url);
      const data = await response.json();
      this.setState({
        articles: data.articles,
        totalResults: data.totalResults,
        page,
        loading: false,
        error: null, // Reset error state on success
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({
        loading: false,
        error: "An error occurred while fetching news.", // Set the error message
      });
    }
  }

  handleNext = () => {
    const { page, totalResults } = this.state;
    const nextPage = page + 1;
    if (nextPage <= Math.ceil(totalResults / this.props.pageSize)) {
      this.fetchNews(nextPage);
    }
  };

  handlePrevious = () => {
    const { page } = this.state;
    if (page > 1) {
      this.fetchNews(page - 1);
    }
  };

  render() {
    const { articles, page, loading, error } = this.state;
    const isPreviousDisabled = page <= 1;
    const isNextDisabled =
      page >= Math.ceil(this.state.totalResults / this.props.pageSize);

    return (
      <div className="container my-3">
        <h2>Top Headlines</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="container d-flex justify-content-between">
          <button
            disabled={isPreviousDisabled}
            type="button"
            onClick={this.handlePrevious}
            className="btn btn-primary my-3"
          >
            &larr; Previous
          </button>
          <button
            disabled={isNextDisabled}
            type="button"
            onClick={this.handleNext}
            className="btn btn-secondary my-3"
          >
            Next &rarr;
          </button>
        </div>
        {loading && <Spinner />}
        <div className="row">
          {articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItems
                title={element.title ? element.title.slice(0, 45) : ""}
                dis={
                  element.description ? element.description.slice(0, 88) : ""
                }
                uurl={element.urlToImage}
                uuurl={element.url}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={isPreviousDisabled}
            type="button"
            onClick={this.handlePrevious}
            className="btn btn-primary my-3"
          >
            &larr; Previous
          </button>
          <button
            disabled={isNextDisabled}
            type="button"
            onClick={this.handleNext}
            className="btn btn-secondary my-3"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
