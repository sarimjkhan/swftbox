import axios from 'axios';
import React, { Component } from 'react';
import UrlShortenerAlert from '../atoms/url-shortener-alert.component';
import UrlShortenerSpinner from '../atoms/url-shortener-spinner.component';
import UrlStatsItem from '../organisms/url-stats-item.component';
import { isEmpty } from 'lodash';
export default class CreateUrl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      isLoading: false,
      isCreated: false,
      createdUrl: {},
    };
    this.onCreate = this.onCreate.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
  }

  onCreate() {
    this.setState({ isLoading: true, isCreated: false });
    const body = {
      url: this.state.url,
    };
    axios
      .post('http://localhost:5001/urls/encode', body)
      .then((res) => {
        const { data } = res.data;
        this.setState({ isCreated: true, createdUrl: data });
      })
      .catch((err) => {
        this.setState({ createdUrl: null });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  onChangeUrl(e) {
    this.setState({
      url: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <UrlShortenerAlert
          config={{ message: 'success', show: this.state.isCreated }}
        />
        <UrlShortenerSpinner show={this.state.isLoading} />
        <form>
          <div className="form-group">
            <div className="row">
              <div className="col-md-12">
                <label for="urlTextbox">Enter Url</label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control mb-1"
                  id="urlTextbox"
                  placeholder="Enter url"
                  onChange={this.onChangeUrl}
                />
              </div>
              <div className="col-md-2">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.onCreate()}
                >
                  Create Url
                </button>
              </div>
            </div>

            <small className="form-text text-muted">
              Url format examples:
              <br />
              1) https://facebook.com
              <br />
              2) www.facebook.com
              <br />
              3) facebook.com
            </small>
          </div>
          <div className="mt-3">
            {!isEmpty(this.state.createdUrl) && (
              <>
                <h1>Url Details:</h1>
                <UrlStatsItem url={this.state.createdUrl} />
              </>
            )}
          </div>
        </form>
      </div>
    );
  }
}
