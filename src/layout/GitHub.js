import axios from 'axios'
import React, { Component } from 'react'
import { isCompositeComponent } from 'react-dom/test-utils'
import './GitHub.css';

export class Github extends Component {
    state = {
        repos: [],
        loading: false,
        data: false
    }

    componentDidMount() {
        this.setState({ loading: true })
        axios.get(`https://api.github.com/users/leewannacott/repos?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
            .then(res => {
                const repos = res.data;
                this.setState({ repos })
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

                <table class='table table-sm'>
                    <tr><td>Repository Name</td>
                        <td>Language</td>
                        <td>Description</td>
                        <td>Forks</td>
                        <td>Open issues</td>
                        <td>Watchers</td>
                        <td>Stars</td>
                        <td>Size</td>

                    </tr>

                    {
                        this.state.repos.map(repo => (

                            <tr key='id'><td><a href={repo.html}><div>{repo.name}</div></a></td>
                                <td>    {repo.language}</td>
                                <td>    {repo.description}</td>

                                <td>    {repo.forks}</td>
                                <td>    {repo.open_issues}</td>
                                <td>    {repo.watchers}</td>
                                <td>    {repo.stargazers_count}</td>
                                <td>    {repo.size + 'kB'}</td>



                            </tr>
                        ))
                    }


                </table>
            </div >

        )



    }

}

export default Github