import React, { Component } from "react";
import "./Projects.css";

export class Projects extends Component {
    render() {
        return (
            <div className="container">

                <article className="project">
                    <h2 className="display">
                        tweet-repair-game-django
                        <hr></hr>
                        <a href="https://tweet-repair-game.herokuapp.com/"  target="_blank">
                            <button className="btn btn-primary">
                                View Live Example.
                            </button>
                        </a>
                        <a href="https://github.com/LeeWannacott/tweet-repair-game-django"  target="_blank">
                            <button className="btn btn-primary">
                                View GitHub Page.
                            </button>
                        </a>
                    </h2>
                    <hr></hr>
                    <p>
                        Tweet repair game started during Global Game Jam 2020.
                        Uses Django, Javascript and the Twitter API. Search for topic of tweets and repair the broken tweets.
                    </p>
                    <img
                        src="https://user-images.githubusercontent.com/49783296/113653034-1e9bb780-96e9-11eb-8121-cc9c49c297ca.gif"
                        className="projectImages"
                    ></img>
                    <img
                        src="https://user-images.githubusercontent.com/49783296/113652550-142cee00-96e8-11eb-8d66-19062dc4991b.gif"
                        className="projectImages"
                    ></img>
                </article>

                <article className="project">
                    <h2 className="display">
                        {" "}
                        table-sort-js
                        <hr></hr>
                        <a href="https://leewannacott.github.io/Portfolio/#/GitHub" target="_blank">
                            <button className="btn btn-primary">
                                View live example.
                            </button>
                        </a>
                        <a href="https://github.com/LeeWannacott/table-sort-js" target="_blank">
                            <button className="btn btn-primary">
                                View GitHub page.
                            </button>
                        </a>
                        <a href="https://leewannacott.github.io/table-sort-js/table-sort.js"  target="_blank">
                            <button className="btn btn-primary">
                                View source code.
                            </button>

                        </a>
                        <a href="https://www.npmjs.com/package/table-sort-js"  target="_blank">
                            <button className="btn btn-primary">
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

                <article className="project">
                    <h2 className="display">
                        image-annotation-tool
                        <hr></hr>
                        <a href="https://github.com/LeeWannacott/image-selector-opencv-python/blob/master/image_selector_from_video.py" target="_blank">
                            <button
                                className="btn btn-primary"
                            >
                                View Source Code.
                            </button>
                        </a>
                        <a href="https://github.com/LeeWannacott/image-selector-opencv-python" target="_blank">
                            <button
                                className="btn btn-primary"
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
                        src="https://user-images.githubusercontent.com/49783296/113673561-43098b00-970d-11eb-865b-dc85971a7f9f.gif"
                        className="projectImages"
                    ></img>
                    <img
                        src="https://user-images.githubusercontent.com/49783296/113673605-5157a700-970d-11eb-8fc4-1c5bc5b92fe2.gif"
                        className="projectImages"
                    ></img>
                    <img
                        src="https://user-images.githubusercontent.com/49783296/113673683-692f2b00-970d-11eb-89d7-c4d25622d779.png"
                        className="projectImages"
                    ></img>
                    <img
                        src="https://user-images.githubusercontent.com/49783296/113673801-87952680-970d-11eb-8a6b-28f38e0d617b.png"
                        className="projectImages"
                    ></img>
                </article>

                <article className="project">
                    <h2 className="display">
                        Mark-Your-Spreadsheet.
                        <hr></hr>
                        <a href="https://github.com/LeeWannacott/MYS-Mark-Your-Spreadsheet" target="_blank">
                            <button className="btn btn-primary">
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
                        svg-style
                        <hr></hr>
                        <a href="https://github.com/LeeWannacott/svg-style" target="_blank">
                            <button className="btn btn-primary">
                                View GitHub Page.
                            </button>
                        </a>
                        <a href="https://www.npmjs.com/package/svg-style" target="_blank">
                            <button className="btn btn-primary">
                                View npm page.
                            </button>
                        </a>
                    </h2>
                    <hr></hr>
                    <p>
                    Change the style attribute of SVG files that are sourced from within img tags. 
                    </p>
                    <img
                        src="https://raw.githubusercontent.com/LeeWannacott/svg-style/main/rainbowBefore.png"
                        className="projectImages"
                    ></img>
                    <img
                        src="https://raw.githubusercontent.com/LeeWannacott/svg-style/main/rainbowAfter.png"
                        className="projectImages"
                    ></img>
                </article>
                
                <article className="project">
                    <h2 className="display">
                        nvim-dogecomments
                        <hr></hr>
                        <a href="https://github.com/LeeWannacott/nvim-dogecomments" target="_blank">
                            <button className="btn btn-primary">
                                View GitHub Page.
                            </button>
                        </a>
                    </h2>
                    <hr></hr>
                    <p>
                    Neovim plugin for commenting out code. Help get doge to the moon by commenting out your code!
                    </p>
                </article>

            </div>
        );
    }
}

export default Projects;
