import React, { useEffect, useState } from "react";
import "./Blog.css";
// import  "./assets/rainbow.css";
// import "./assets/solarized-dark.css";

function Contact() {
  const [mediumArticles, setMediumArticles] = useState("");
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./assets/rainbow";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lee.wannacott",
      {}
    ).then((resp) =>
      resp
        .json()
        .then((json) => setMediumArticles(json.items))
        .catch((e) => console.log(e))
    );
  }, []);


  function processMediumContent(article) {
    var element = document.createElement("div");
    element.insertAdjacentHTML("beforeend", article.content);
    let preTags = element.querySelectorAll("pre");
    let imageTags = element.querySelectorAll("figure");

    for (let image of imageTags){
      image.classList.add("medium-image")
    }

    for (let pre of preTags) {
      let code = document.createElement("code");
      code.setAttribute("data-language", "javascript");
      code.classList.add("code-block")
      // code.innerText = rainbow.colorSync(code.textContent, 'javascript');
      code.innerHTML = pre.innerHTML;
      pre.innerHTML = "";
      pre.classList.add("pre-code")
      pre.appendChild(code);
    }
    return element.outerHTML;
  }

  return (
    <div className="container">
      <h1>latest posts</h1>
      <hr />

      {mediumArticles
        ? mediumArticles.map((article) => {
            return (
              <>
                <article className="blogTitle">
                  <b>
                    <p>{article.pubDate.substring(0, 10)}</p>
                  </b>
                  <p>{article.title}</p>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blogExternalLink"
                  >
                    <svg
                      width="3rem"
                      height="3rem"
                      viewBox="0 0 40 40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <path
                        d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9"
                        className="icon_svg-stroke"
                        stroke="#999"
                        stroke-width="1.5"
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </svg>
                  </a>
                </article>
              </>
            );
          })
        : undefined}

      {mediumArticles
        ? mediumArticles.map((article) => {
            return (
              <>
                <hr />
                <div className="blogTitle">
                  <h2>{article.title}</h2>
                </div>
                <div className="blogTags">
                  {article.categories.map((category) => (
                    <a href={"https://medium.com/tag/" + category}>
                      <p className="blogTag">{"#" + category}</p>
                    </a>
                  ))}
                </div>
                <p
                  dangerouslySetInnerHTML={{ __html: processMediumContent(article) }}
                ></p>
              </>
            );
          })
        : undefined}
    </div>
  );
}

export default Contact;
