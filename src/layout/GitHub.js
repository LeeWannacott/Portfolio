import axios from "axios";
import React, { Component } from "react";
import "./GitHub.css";
// import $ from 'jquery';

// import './table-sort'

export class Github extends Component {
    state = {
        repos: [],
        loading: false,
        data: false,
        user: [],
        stars: [],
    };

    componentDidMount() {
        const script = document.createElement("script");
        script.src =
            "https://leewannacott.github.io/table-sort-js/table-sort.js";
        script.async = true;
        document.body.appendChild(script);

        this.setState({ loading: true });
        axios
            .get(
                `https://api.github.com/users/leewannacott/repos?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
            )
            .then((res) => {
                const repos = res.data;
                this.setState({ repos });
            });
        axios
            .get(
                `https://api.github.com/users/leewannacott?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
            )
            .then((res) => {
                const user = res.data;
                this.setState({ user });
            });
        axios
            .get(
                `https://api.github.com/users/leewannacott/starred?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
            )
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
                            <img
                                src={this.state.user.avatar_url}
                                className="GitHubIcon"
                            ></img>
                        </a>

                        <div className="githubBasicStats">
                            <span>
                                <p className="githubBasicStats">
                                    {"Following: " +
                                        this.state.user.following +
                                        " "}
                                    <br />
                                    {"Followers: " +
                                        this.state.user.followers +
                                        " "}
                                    <br />
                                    {"Repositories: " +
                                        this.state.user.public_repos}
                                    <br />
                                    {"Stars: " + this.state.stars.length + " "}
                                </p>
                            </span>
                        </div>
                        <div className="GitHubChart">
                            <img src="http://ghchart.rshah.org/LeeWannacott" alt="Loading: GitHub contributions chart..."></img>
                        </div>
                    </div>
                    <hr></hr>
                    <h6 style={{ textAlign: "left", marginTop: "0.25em" }}>
                        Statistics on public repositories pulled from the GitHub
                        API v3:
                    </h6>
                    <div>

                        <table className="table table-sort table-bordered table-responsive table-hover">
                            <thead className="cw-light">
                                <tr>
                                    <th>Repository Name</th>
                                    <th>Language</th>
                                    <th className="order-by-desc">Created</th>
                                    <th>Description</th>
                                    <th className="order-by-desc">Forks</th>
                                    <th className="order-by-desc">
                                        Open issues
                                    </th>
                                    <th className="order-by-desc">Stars</th>
                                    <th className="order-by-desc">Size (MB)</th>
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
                                        <td> {repo.language}</td>
                                        <td>
                                            {" "}
                                            {repo.created_at.split("-")[0] +
                                                "-" +
                                                repo.created_at.split("-")[1]}
                                        </td>
                                        <td> {repo.description}</td>
                                        <td> {repo.forks}</td>
                                        <td> {repo.open_issues}</td>
                                        <td> {repo.stargazers_count}</td>
                                        <td> {Math.round(repo.size / 1000)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            // {/* </div> */}
        );
    }
}

export default Github;