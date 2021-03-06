import axios from 'axios';
import React, { Component } from 'react';

export default class DecodeUrl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      decodedUrl: '',
    };
    this.onDecode = this.onDecode.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
  }

  async onDecode() {
    const urlToDecode = this.state.url;
    const response = await axios.get(
      `http://localhost:5001/urls/decode?url=${urlToDecode}`
    );

    this.setState({
      decodedUrl: response.data.bigUrl,
    });
  }

  onChangeUrl(e) {
    this.setState({
      url: e.target.value,
    });
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <div className="row">
            <div className="col-md-12">
              <label for="urlTextbox">Enter Url To Decode</label>
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
                onClick={this.onDecode}
              >
                Decode
              </button>
            </div>
          </div>

          <small className="form-text text-muted">
            Url short url format examples:
            <br />
            1) contains /[ten-digit-path-id] --
            http://localhost:5001/[ten-digit-path-id]
            <br />
            2) contains [ten-digit-path-id]
          </small>
        </div>

        <div className="mt-3">
          {this.state.decodedUrl && <h3>Decoded Url:</h3>}
          <small>
            <a href={this.state.decodedUrl}>{this.state.decodedUrl}</a>
          </small>
        </div>
      </form>
    );
  }
}
