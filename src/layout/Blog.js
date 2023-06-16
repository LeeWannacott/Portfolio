import React, { useEffect, useState } from "react";
import "./Blog.css";

function Contact() {
  const [mediumArticles, setMediumArticles] = useState("");
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
  console.log(mediumArticles);
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
                <code>
                  <p dangerouslySetInnerHTML={{ __html: article.content }}></p>
                </code>
              </>
            );
          })
        : undefined}
    </div>
  );
}

export default Contact;
