import React, { Component } from "react";
import "./Projects.css";

export class Projects extends Component {
    render() {
        return (
            <div className="container">
                <article clasName="project">
                    <h2 className="display">
                        Image Selector.
                        <hr></hr>
                        <a href="https://github.com/LeeWannacott/image-selector-opencv-python/blob/master/image_selector_from_video.py">
                            <button
                                className="btn btn-light"
                                onClick="www.google.com"
                            >
                                View Source Code.
                            </button>
                        </a>
                        <a href="https://github.com/LeeWannacott/image-selector-opencv-python">
                            <button
                                className="btn btn-light"
                                onClick="window.location.href='www.google.com'"
                            >
                                View Github Page.
                            </button>
                        </a>
                    </h2>
                    <hr></hr>
                    <p>
                        Speeds up image selection, tagging and bounding boxing
                        of relevant images to then use in machine learning
                        models.
                    </p>
                    <img
                        src="https://raw.githubusercontent.com/LeeWannacott/image-selector-opencv-python/master/Example_of_use.png"
                        className="projectImages"
                    ></img>
                </article>

                <article className="project">
                    <h2 className="display">
                        Mark-Your-Spreadsheet.
                        <hr></hr>
                        <a href="https://github.com/LeeWannacott/MYS-Mark-Your-Spreadsheet">
                            <button className="btn btn-light">
                                View GitHub Page.
                            </button>
                        </a>
                    </h2>
                    <hr></hr>
                    <p>
                        Software that applies conditional highlighting and
                        grades students Excel spreadsheets.{" "}
                    </p>
                    <img
                        src="https://raw.githubusercontent.com/LeeWannacott/MYS-Mark-Your-Spreadsheet/master/CompareAllExample.png"
                        className="projectImages"
                    ></img>
                </article>

                <article className="project">
                    <h2 className="display">
                        Tweet Repair Game.
                        <hr></hr>
                        <a href="https://tweet-repair-game.herokuapp.com/">
                            <button className="btn btn-light">
                                View Live Example.
                            </button>
                        </a>
                        <a href="https://github.com/LeeWannacott/tweet-repair-game-django">
                            <button className="btn btn-light">
                                View GitHub Page.
                            </button>
                        </a>
                    </h2>
                    <hr></hr>
                    <p>
                        Tweet repair game started during Global Game Jam 2020.
                        Uses Django, Javascript and the Twitter API.
                    </p>
                    <img
                        src="https://raw.githubusercontent.com/LeeWannacott/tweet-repair-game-django/master/Picture_of_tweet_repair_game.png"
                        className="projectImages"
                    ></img>
                </article>

                <article className="project">
                    <h2 className="display">
                        {" "}
                        table-sort-js
                        <hr></hr>
                        <a href="https://leewannacott.github.io/Portfolio/#/GitHub">
                            <button className="btn btn-light">
                                View live example.
                            </button>
                        </a>
                        <a href="https://github.com/LeeWannacott/table-sort-js">
                            <button className="btn btn-light">
                                View GitHub page.
                            </button>
                        </a>
                        <a href="https://leewannacott.github.io/table-sort-js/table-sort.js">
                            <button className="btn btn-light">
                                View source code.
                            </button>

                        </a>
                        <a href="https://www.npmjs.com/package/table-sort-js">
                            <button className="btn btn-light">
                                View npm page.
                            </button>
                        </a>
                    </h2>
                    <hr></hr>
                    <p>
                        A JavaScript client-side HTML table sorting library with
                        no dependencies required. Sorts alpha, dates, numerical
                        in natural order.
                    </p>
                </article>
            </div>
        );
    }
}

export default Projects;
