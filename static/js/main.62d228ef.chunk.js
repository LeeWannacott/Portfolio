(this["webpackJsonpleewannacott-website"]=this["webpackJsonpleewannacott-website"]||[]).push([[0],{147:function(e,t,a){e.exports=a(459)},151:function(e,t,a){},152:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},153:function(e,t,a){},430:function(e,t,a){},431:function(e,t,a){},448:function(e,t,a){},449:function(e,t,a){},459:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),c=a.n(l),o=a(35),s=(a(151),a(152),a(153),a(154),a(21)),i=a(22),m=a(24),u=a(23),E=a(4),h=a(461),p=(a(430),a(431),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("article",{clasName:"project"},r.a.createElement("h2",{className:"display"},"Image Selector.",r.a.createElement("a",{href:"https://github.com/LeeWannacott/image-selector-opencv-python/blob/master/image_selector_from_video.py"},r.a.createElement("button",{className:"btn btn-light",onClick:"www.google.com"},"View Source Code.")),r.a.createElement("a",{href:"https://github.com/LeeWannacott/image-selector-opencv-python"},r.a.createElement("button",{className:"btn btn-light",onClick:"window.location.href='www.google.com'"},"View Github Page."))),r.a.createElement("hr",null),r.a.createElement("p",null,"Speeds up image selection, tagging and bounding boxing of relevant images to then use in machine learning models."),r.a.createElement("img",{src:"https://raw.githubusercontent.com/LeeWannacott/image-selector-opencv-python/master/Example_of_use.png",style:{width:"70em"},className:"projectimages"})),r.a.createElement("article",{className:"project"},r.a.createElement("h2",{className:"display"},"Mark-Your-Spreadsheet.",r.a.createElement("a",{href:"https://github.com/LeeWannacott/MYS-Mark-Your-Spreadsheet"},r.a.createElement("button",{className:"btn btn-light"},"View GitHub Page."))),r.a.createElement("hr",null),r.a.createElement("p",null,"Software that applies conditional highlighting and grades students Excel spreadsheets. "),r.a.createElement("img",{src:"https://raw.githubusercontent.com/LeeWannacott/MYS-Mark-Your-Spreadsheet/master/CompareAllExample.png",style:{width:"70em"},className:"projectimages"})),r.a.createElement("article",{className:"project"},r.a.createElement("h2",{className:"display"},"Tweet Repair Game.",r.a.createElement("a",{href:"https://tweet-repair-game.herokuapp.com/"},r.a.createElement("button",{className:"btn btn-light"},"View Live Example.")),r.a.createElement("a",{href:"https://github.com/LeeWannacott/tweet-repair-game-django"},r.a.createElement("button",{className:"btn btn-light"},"View GitHub Page."))),r.a.createElement("hr",null),r.a.createElement("p",null,"Tweet repair game started during Global Game Jam 2020. Uses Django, Javascript and the Twitter API."),r.a.createElement("img",{src:"https://raw.githubusercontent.com/LeeWannacott/tweet-repair-game-django/master/Picture_of_tweet_repair_game.png",style:{width:"70em"},className:"projectimages"})),r.a.createElement("article",{className:"project"},r.a.createElement("h2",{className:"display"}," table-sort-js",r.a.createElement("a",{href:"https://leewannacott.github.io/Portfolio/#/GitHub"},r.a.createElement("button",{className:"btn btn-light"},"View Live Example.")),r.a.createElement("a",{href:"https://github.com/LeeWannacott/table-sort-js"},r.a.createElement("button",{className:"btn btn-light"},"View GitHub Page.")),r.a.createElement("a",{href:"https://leewannacott.github.io/table-sort-js/table-sort.js"},r.a.createElement("button",{className:"btn btn-light"},"View source code."))),r.a.createElement("hr",null),r.a.createElement("p",null,"A JavaScript client-side HTML table sorting library with no dependencies required. Sorts alpha, dates, numerical in natural order.")))}}]),a}(n.Component)),d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,null))}}]),a}(n.Component),g=a(48),b=a.n(g),_=(a(79),a(448),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={repos:[],loading:!1,data:!1,user:[],stars:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=document.createElement("script");t.src="https://leewannacott.github.io/table-sort-js/table-sort.js",t.async=!0,document.body.appendChild(t),this.setState({loading:!0}),b.a.get("https://api.github.com/users/leewannacott/repos?client_id=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GITHUB_CLIENT_ID,"&client_secret").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GITHUB_CLIENT_SECRET)).then((function(t){var a=t.data;e.setState({repos:a})})),b.a.get("https://api.github.com/users/leewannacott?client_id=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GITHUB_CLIENT_ID,"&client_secret").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GITHUB_CLIENT_SECRET)).then((function(t){var a=t.data;e.setState({user:a})})),b.a.get("https://api.github.com/users/leewannacott/starred?client_id=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GITHUB_CLIENT_ID,"&client_secret").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/Portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GITHUB_CLIENT_SECRET)).then((function(t){var a=t.data;e.setState({stars:a})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"bioInfo"},r.a.createElement("a",{href:this.state.user.html_url,className:"GitHubIcon"},r.a.createElement("img",{src:this.state.user.avatar_url,className:"GitHubIcon"})),r.a.createElement("span",{style:{textAlign:"left",marginLeft:"1em",marginTop:" 0.5em",marginRight:"1em"}},r.a.createElement("p",null,"Following: "+this.state.user.following+" ",r.a.createElement("br",null),"Followers: "+this.state.user.followers+" ",r.a.createElement("br",null),"Repositories: "+this.state.user.public_repos,r.a.createElement("br",null),"Stars: "+this.state.stars.length+" ")),r.a.createElement("img",{src:"http://ghchart.rshah.org/be4eb9/LeeWannacott",className:"GitHubChart",alt:"Lee Wannacott GitHub chart"}),r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:"https://media.xconomy.com/wordpress/wp-content/images/2016/06/06161811/github-logo.jpg",alt:"GitHub Icon",style:{width:"8em",marginTop:"1em",marginLeft:"1em",alignContent:"flex-end"}}))),r.a.createElement("h6",{style:{textAlign:"left",marginTop:"0.25em"}},"Statistics on public repositories pulled from the GitHub API v3:"),r.a.createElement("table",{className:"table-sort"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Repository Name"),r.a.createElement("th",null,"Language"),r.a.createElement("th",{className:"order-by-desc"},"Created"),r.a.createElement("th",null,"Description"),r.a.createElement("th",{className:"order-by-desc"},"Forks"),r.a.createElement("th",{className:"order-by-desc"},"Open issues"),r.a.createElement("th",{className:"order-by-desc"},"Watchers"),r.a.createElement("th",{className:"order-by-desc"},"Stars"),r.a.createElement("th",{className:"order-by-desc"},"Size (MB)"))),r.a.createElement("tbody",null,this.state.repos.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("a",{href:e.html_url},e.name)),r.a.createElement("td",null,"    ",e.language),r.a.createElement("td",null,"    ",e.created_at.split("-")[0]+"-"+e.created_at.split("-")[1]),r.a.createElement("td",null,"    ",e.description),r.a.createElement("td",null,"    ",e.forks),r.a.createElement("td",null,"    ",e.open_issues),r.a.createElement("td",null,"    ",e.watchers),r.a.createElement("td",null,"    ",e.stargazers_count),r.a.createElement("td",null,"    ",Math.round(e.size/1e3)))})))))}}]),a}(n.Component)),v=(a(449),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h6",{className:"heading"},"Email: WannacottL@gmail.com"),r.a.createElement("hr",null),r.a.createElement("a",{href:"https://www.linkedin.com/in/lee-wannacott-64289b174/"},r.a.createElement("img",{src:"/Portfolio/LinkedIn.png",className:"contact-images",style:{width:"10em",marginTop:"0.25em",marginLeft:"1em"}})),r.a.createElement("a",{href:"https://github.com/LeeWannacott"},r.a.createElement("img",{src:"/Portfolio/GithubLogo.jpeg",className:"contact-images",alt:"https://github.com/LeeWannacott",style:{width:"10em",marginTop:"0.25em",marginLeft:"0.75em"}})),r.a.createElement("a",{href:"mailto:WannacottL@gmail.com"},r.a.createElement("img",{src:"/Portfolio/Gmail.png",className:"contact-images",alt:"mailto:WannacottL@gmail.com",style:{width:"8em",marginTop:"0.25em",marginLeft:"0.1em",marginRight:"0.1em"}})))}}]),a}(n.Component)),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"navbar navbar-light navbar-expand-xl",style:{backgroundColor:"#e3f2fd"}},r.a.createElement("a",{className:"navbar-brand"},"Lee Wannacott"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.a.Link,{className:"Nav-link",as:o.b,to:"/Projects"},"Projects")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.a.Link,{className:"Nav-link",as:o.b,to:"/GitHub"},"Github Statistics")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.a.Link,{className:"Nav-link",as:o.b,to:"/Contact"},"Contact")),r.a.createElement("img",{src:"https://cdn.auth0.com/blog/react-js/react.png",className:"react-spinner",style:{width:"3rem",marginLeft:"34rem"}}))))),r.a.createElement("div",null,r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/",component:d}),r.a.createElement(E.a,{path:"/Projects",component:p}),r.a.createElement(E.a,{path:"/GitHub",component:_}),r.a.createElement(E.a,{path:"/Contact",component:v}))))}}]),a}(n.Component);var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement(f,null)),r.a.createElement("footer",null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(457),a(458);var T=r.a.createElement(o.a,null,r.a.createElement(N,null));c.a.render(T,document.getElementById("root"))}},[[147,1,2]]]);
//# sourceMappingURL=main.62d228ef.chunk.js.map