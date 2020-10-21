import React, { Component } from 'react'
import './Projects.css'

export class Projects extends Component {
    render() {
        return (
            <div className='container'>

                <h1 className="display-4">Tweet Repair Game.
                <a href='https://tweet-repair-game.herokuapp.com/'><button className='btn btn-light'>View Live Example.</button></a>
                    <a href='https://github.com/LeeWannacott/tweet-repair-game-django'><button className='btn btn-light'>View GitHub Page.</button></a>
                </h1>
                <hr></hr>
                <p>Tweet repair game started during Global Game Jam 2020. Uses Django, Javascript and the Twitter API.</p>
                <img src='https://raw.githubusercontent.com/LeeWannacott/tweet-repair-game-django/master/Picture_of_tweet_repair_game.png' style={{ width: '70em' }} className='projectimages'></img>

                <h1 className="display-4">Image Selector.
                <a href='https://github.com/LeeWannacott/image-selector-opencv-python/blob/master/image_selector_from_video.py'><button className='btn btn-light' onclick="www.google.com">View Source Code.</button></a>
                    <a href='https://github.com/LeeWannacott/image-selector-opencv-python'><button className='btn btn-light' onclick="window.location.href='www.google.com'">View Github Page.</button></a>
                </h1>
                <hr></hr>
                <p>Speeds up image selection, tagging and bounding boxing of relevant images to then use in machine learning models.</p>
                <img src='https://raw.githubusercontent.com/LeeWannacott/image-selector-opencv-python/master/Example_of_use.png' style={{ width: '70em' }} className='projectimages'></img>


                <h1 className="display-4">Mark-Your-Spreadsheet.
                <a href='https://github.com/LeeWannacott/MYS-Mark-Your-Spreadsheet'><button className='btn btn-light'>View GitHub Page.</button></a>
                </h1>
                <hr></hr>
                <p>Software that applies conditional highlighting and grades students Excel spreadsheets. </p>
                <img src='https://raw.githubusercontent.com/LeeWannacott/MYS-Mark-Your-Spreadsheet/master/CompareAllExample.png' style={{ width: '70em' }} className='projectimages'></img>



            </div >
        )
    }
}

export default Projects
