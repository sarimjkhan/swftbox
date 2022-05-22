import axios from 'axios';
import React, { Component } from 'react';
import UrlHeadingRow from '../organisms/url-head-row.component';
import UrlRow from '../organisms/url-row.component';
import UrlShortenerSpinner from '../atoms/url-shortener-spinner.component';

export default class UrlsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseUrl: '',
      urls: [],
      isLoading: false,
    };
  }

  loadUrls() {
    this.setState({ isLoading: true });
    axios
      .get('http://localhost:5001/urls')
      .then((res) => {
        this.setState({
          urls: res.data.urls,
          baseUrl: res.data.baseUrl,
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }
  componentDidMount() {
    this.loadUrls();
  }

  render() {
    return (
      <div className="container">
        <UrlShortenerSpinner show={this.state.isLoading} />
        <table className="table">
          <thead>
            <UrlHeadingRow />
          </thead>
          <tbody>
            {this.state.urls.map((url) => {
              let itemKey = url.shortUrl.substring(
                url.shortUrl.lastIndexOf('/') + 1
              );
              return (
                <UrlRow
                  url={url}
                  baseUrl={this.state.baseUrl}
                  loadParentData={() => this.loadUrls()}
                  key={itemKey}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
