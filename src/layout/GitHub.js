import axios from "axios";
import React, { Component } from "react";
import "./GitHub.css";
import tableSort from "table-sort-js/table-sort.js";
// import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";
const { Octokit } = require("@octokit/rest");

export class Github extends Component {
  state = {
    repos: [],
    loading: false,
    data: false,
    user: [],
    stars: [],
  };

  componentDidMount() {
    tableSort();
    // const script = document.createElement("script");
    // script.src =
    // "https://leewannacott.github.io/table-sort-js/table-sort.js";
    // script.async = true;
    // document.body.appendChild(script);

    const octokit = new Octokit({
      auth: window.atob(`${(process.env.REACT_APP_GITHUB_CLIENT_SECRET)}`),
    });

    let repos = octokit
      .request("GET /user/repos", {
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
          accept: "application/vnd.github+json",
        },
        per_page: 100,
        visibility: "public",
      })
      .then((res) => {
        const repos = res.data;
        this.setState({ repos });
      }).catch((e)=>console.log(e));
// 
    console.log(repos)
    const config = {
      // client_id:`${process.env.REACT_APP_GITHUB_CLIENT_ID}`,
      // client_secret: `${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
    };
    this.setState({ loading: true });
    axios
      .get(`https://api.github.com/users/leewannacott/repos`, config)
      .then((res) => {
        const repos = res.data;
        this.setState({ repos });
      });
    axios
      .get(`https://api.github.com/users/leewannacott`, config)
      .then((res) => {
        const user = res.data;
        this.setState({ user });
      });
    axios
      .get(`https://api.github.com/users/leewannacott/starred`, config)
      .then((res) => {
        const stars = res.data;
        this.setState({ stars });
      });
  }

  render() {
    return (
      // <div className="tableScroll">
      <div className="container">
        <hr></hr>
        <div className="bioInfo">
          <a
            href={this.state.user.html_url}
            className="GitHubIcon"
            target="_blank"
          >
            <img src={this.state.user.avatar_url} className="GitHubIcon"></img>
          </a>
          <div className="githubBasicStats">
            <span>
              <p className="githubBasicStats" style={{ whiteSpace: "nowrap" }}>
                {"Following: " + this.state.user.following + ""}
                <br />
                {"Followers: " + this.state.user.followers + " "}
                <br />
                {"Repositories: " + this.state.user.public_repos}
                <br />
                {"Stars: " + this.state.stars.length + " "}
              </p>
            </span>
          </div>
          <div className="GitHubChart">
            <img
              src="http://ghchart.rshah.org/LeeWannacott"
              alt="Loading: GitHub contributions chart..."
            ></img>
          </div>
        </div>
        <hr></hr>
        <h6 style={{ textAlign: "left", marginTop: "0.25em" }}>
          Statistics on public repositories pulled from the GitHub API v3:
        </h6>
        <div>
          <table className="table table-sort table-bordered table-responsive table-hover">
            <thead className="cw-light">
              <tr>
                <th>Repository Name</th>
                <th className="order-by-desc dates-ymd-sort">Created</th>
                <th>Language</th>
                <th>Description</th>
                <th className="order-by-desc numeric-sort">Forks</th>
                <th className="order-by-desc numeric-sort">Open issues</th>
                <th className="order-by-desc numeric-sort">Stars</th>
                <th className="col-md-2 file-size-sort">Size</th>
              </tr>
            </thead>
            <tbody className="table-hover">
              {this.state.repos.map((repo) => (
                <tr>
                  <td>
                    <a href={repo.html_url} target="_blank">
                      {repo.name}
                    </a>
                  </td>
                  <td>
                    {" "}
                    {repo.created_at.split("-")[0] +
                      "-" +
                      repo.created_at.split("-")[1] +
                      "-" +
                      repo.created_at.split("-")[2].substr(0, 2)}
                  </td>
                  <td> {repo.language}</td>
                  <td> {repo.description}</td>
                  <td> {repo.forks}</td>
                  <td> {repo.open_issues}</td>
                  <td> {repo.stargazers_count}</td>
                  <td> {repo.size * 1000 + "B"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Github;
