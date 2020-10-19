import axios from 'axios'
import React, { Component } from 'react'
import { isCompositeComponent } from 'react-dom/test-utils'
import './GitHub.css';


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




        // this.setState({ repos: res.data, loading: false, data: true })


    }


    // state = {
    //     repos: [
    //         {
    //             login: "LeeWannacott",
    //             id: 49783296,
    //             node_id: "MDQ6VXNlcjQ5NzgzMjk2",
    //             avatar_url: "https://avatars1.githubusercontent.com/u/49783296?v=4",
    //             gravatar_id: "",
    //             url: "https://api.github.com/users/LeeWannacott",
    //             html_url: "https://github.com/LeeWannacott",
    //             followers_url: "https://api.github.com/users/LeeWannacott/followers",
    //             following_url: "https://api.github.com/users/LeeWannacott/following{/other_user}",
    //             gists_url: "https://api.github.com/users/LeeWannacott/gists{/gist_id}",
    //             starred_url: "https://api.github.com/users/LeeWannacott/starred{/owner}{/repo}",
    //             subscriptions_url: "https://api.github.com/users/LeeWannacott/subscriptions",
    //             organizations_url: "https://api.github.com/users/LeeWannacott/orgs",
    //             repos_url: "https://api.github.com/users/LeeWannacott/repos",
    //             events_url: "https://api.github.com/users/LeeWannacott/events{/privacy}",
    //             received_events_url: "https://api.github.com/users/LeeWannacott/received_events",
    //             type: "User",
    //             site_admin: false,
    //             name: "Lee Wannacott",
    //             company: "WannacottL@gmail.com",
    //             blog: "https://www.linkedin.com/in/lee-wannacott-64289b174/",
    //             location: null,
    //             email: null,
    //             hireable: null,
    //             bio: "Interested in Business and Data.\r\n",
    //             twitter_username: null,
    //             public_repos: 15,
    //             public_gists: 1,
    //             followers: 0,
    //             following: 1,
    //             created_at: "2019-04-19T10:38:52Z",
    //             updated_at: "2020-10-12T22:50:08Z"
    //         }
    //     ]
    // }

    render() {

        return (


            <div class='container'>


                {console.log(this.state.stars.length)}
                <div className="bioInfo" >
                    <a href={this.state.user.html_url}><img src={this.state.user.avatar_url} style={{ width: "7em" }}></img></a>
                    <span style={{ textAlign: 'left', marginLeft: '1em', marginTop: ' 0.5em', marginRight: '1em' }}>
                        <p>
                            {"Following: " + this.state.user.following + " "}<br />
                            {"Followers: " + this.state.user.followers + " "}<br />
                            {"Repositories: " + this.state.user.public_repos}<br />
                            {"Stars: " + this.state.stars.length + " "}</p></span>
                    <img src="http://ghchart.rshah.org/be4eb9/LeeWannacott" className="GitHubChart" alt="Name Your GitHub chart"></img>
                    <a href="https://www.linkedin.com/in/lee-wannacott-64289b174/"><img src="https://cdn.fastly.picmonkey.com/content4/previews/icons_linkedin/icons_linkedin_11_550.png" alt="LinkedIn" style={{ width: "7em", marginTop: '0.25em', marginLeft: '1em', alignContent: 'flex-end' }} ></img></a>



                </div>

                <h6 style={{ textAlign: 'left', marginTop: '0.25em' }}>Statistics on public repositories pulled from the GitHub API v3:</h6>

                <table>

                    <tr><th>Repository Name</th>
                        <th>Language</th>
                        <th>Created</th>
                        <th>Description</th>
                        <th>Forks</th>
                        <th>Open issues</th>
                        <th>Watchers</th>
                        <th>Stars</th>
                        <th>Size</th>


                    </tr>

                    {
                        this.state.repos.map(repo => (

                            <tr key='id'>
                                <td><a href={repo.html}><div>{repo.name}</div></a></td>
                                <td>    {repo.language}</td>
                                <td>    {repo.created_at.split('-')[0] + '-' + repo.created_at.split('-')[1]}</td>
                                <td>    {repo.description}</td>
                                <td>    {repo.forks}</td>
                                <td>    {repo.open_issues}</td>
                                <td>    {repo.watchers}</td>
                                <td>    {repo.stargazers_count}</td>
                                <td>    {Math.round(repo.size / 1000) + 'MB'}</td>



                            </tr>
                        ))
                    }


                </table>



            </div >

        )



    }

}

export default Github