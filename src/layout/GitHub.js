import axios from 'axios'
import React, { Component } from 'react'
import { isCompositeComponent } from 'react-dom/test-utils'
import './GitHub.css';
import $ from 'jquery'

export class Github extends Component {
    state = {
        repos: [],
        loading: false,
        data: false,
        user: [],
        stars: []
    }

    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://www.kryogenix.org/code/browser/sorttable/sorttable.js";
        script.async = true;
        document.body.appendChild(script);

        this.setState({ loading: true })
        axios.get(`https://api.github.com/users/leewannacott/repos?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
            .then(res => {
                const repos = res.data;
                this.setState({ repos })
            });
        axios.get(`https://api.github.com/users/leewannacott?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
            .then(res => {
                const user = res.data;
                this.setState({ user })
            });
        axios.get(`https://api.github.com/users/leewannacott/starred?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
            .then(res => {
                const stars = res.data;
                this.setState({ stars })
            });

    }

    render() {


        return (


            <div class='container' >


                { console.log(this.state.stars.length)}
                < div className="bioInfo" >
                    <a href={this.state.user.html_url} className='GitHubIcon'><img src={this.state.user.avatar_url} style={{ width: "7em" }}></img></a>
                    <span style={{ textAlign: 'left', marginLeft: '1em', marginTop: ' 0.5em', marginRight: '1em' }}>
                        <p>
                            {"Following: " + this.state.user.following + " "}<br />
                            {"Followers: " + this.state.user.followers + " "}<br />
                            {"Repositories: " + this.state.user.public_repos}<br />
                            {"Stars: " + this.state.stars.length + " "}</p></span>
                    <img src="http://ghchart.rshah.org/be4eb9/LeeWannacott" className="GitHubChart" alt="Lee Wannacott GitHub chart"></img>
                    <a href="#"><img src="https://media.xconomy.com/wordpress/wp-content/images/2016/06/06161811/github-logo.jpg" alt="LinkedIn" style={{ width: "8em", marginTop: '1em', marginLeft: '1em', alignContent: 'flex-end' }} ></img></a>



                </div>

                <h6 style={{ textAlign: 'left', marginTop: '0.25em' }}>Statistics on public repositories pulled from the GitHub API v3:</h6>

                <table id="myTable" className="sortable">
                    <thead>
                        <tr><th>Repository Name</th>
                            <th>Language</th>
                            <th>Created</th>
                            <th>Description</th>
                            <th>Forks</th>
                            <th>Open issues</th>
                            <th>Watchers</th>
                            <th>Stars</th>
                            <th>Size (MB)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.repos.map(repo => (

                                <tr key='id'>
                                    <td><a href={repo.html_url}>{repo.name}</a></td>
                                    <td>    {repo.language}</td>
                                    <td>    {repo.created_at.split('-')[0] + '-' + repo.created_at.split('-')[1]}</td>
                                    <td>    {repo.description}</td>
                                    <td>    {repo.forks}</td>
                                    <td>    {repo.open_issues}</td>
                                    <td>    {repo.watchers}</td>
                                    <td>    {repo.stargazers_count}</td>
                                    <td>    {Math.round(repo.size / 1000)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>


            </div >

        )
    }
}

export default Github

