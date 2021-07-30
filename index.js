//load the articles

/**
 * TEMPLATES
 */
const getMetaTemplate = (list = []) => `
<ul class="meta__div_content_ul">
${list.map(opts => getMetaListElementHTML(opts)).join("")}
</ul>
`;

const getMetaListElementHTML = ({ name, description, link } = {}) => `
<li>
    <a class="meta__content_li_header ${link ? "with_link" : ""}" ${
  link ? `href="${link}" target="_blank"` : ""
}>
        ${name}
    </a>
    <div class="meta__content_li_description">
        ${description}
    </div>
</li>
`;

/**
 * BUSINESS LOGIC
 */
(function() {
  const META_TYPE = {
    PEOPLE: "people",
    PLACES: "places",
    CONCEPTS: "concepts"
  };
  const ISSUE_TYPE = {
    PSYCHOLOGY: "psychology",
    CREATION: "creation",
    SOCIETY: "society"
  };
  $(document).ready(function() {
    let currentStyle = "";
    const styles = [
      { name: "regency", id: "#reg", path: "/regency_css/" },
      { name: "victorian", id: "#vic", path: "/victorian_css/" },
      { name: "2030", id: "#futr", path: "/futuristic_css/" },
      { name: "1920s", id: "#artnv", path: "/art_nouveau_css/" },
      { name: "grunge", id: "#gr", path: "/grunge_css/" },
      { name: "psych", id: "#psy", path: "/psychedelic_css/" },
      { name: "default", id: "#default", path: "" }
    ];
    const availableRoutes = [
      {
        id: "#load_thehindi",
        route: "/articles_giulia/thehindi.html",
        issue: {
          type: ISSUE_TYPE.SOCIETY,
          index: 1
        },
        meta: {
          people: [
            {
              name: "John Doe",
              description:
                "John Doe is the example figure of our time and well deserves an applouse",
              link: ""
            },
            {
              name: "Jane Doe",
              description:
                "Jane Doe is the example figure of our time and well deserves an applouse",
              link: "https://en.wikipedia.org/wiki/Elon_Musk"
            }
          ],
          places: [
            {
              name: "John Doe's Home",
              description:
                "John Doe's Home is the example place of our time and well deserves an applouse",
              link: "https://en.wikipedia.org/wiki/Elon_Musk"
            }
          ],
          concepts: [
            {
              name: "John Doe's Philosophy",
              description:
                "John Doe's Philosopyh is the example concept of our time and well deserves an applouse",
              link: "https://en.wikipedia.org/wiki/Elon_Musk"
            }
          ]
        }
      },
      {
        id: "#load_gamespot",
        route: "/articles_giulia/gamespot.html",
        issue: {
          type: ISSUE_TYPE.SOCIETY,
          index: 2
        },
        meta: {
          people: [
            {
              name: "John Doe",
              description:
                "John Doe is the example figure of our time and well deserves an applouse",
              link: ""
            },
            {
              name: "Jane Doe",
              description:
                "Jane Doe is the example figure of our time and well deserves an applouse",
              link: "https://en.wikipedia.org/wiki/Elon_Musk"
            }
          ],
          places: [
            {
              name: "John Doe's Home",
              description:
                "John Doe's Home is the example place of our time and well deserves an applouse",
              link: "https://en.wikipedia.org/wiki/Elon_Musk"
            }
          ],
          concepts: [
            {
              name: "John Doe's Philosophy",
              description:
                "John Doe's Philosopyh is the example concept of our time and well deserves an applouse",
              link: "https://en.wikipedia.org/wiki/Elon_Musk"
            }
          ]
        }
      },
      {
        id: "#load_theguardian",
        route: "/articles_giulia/theguardian.html",
        issue: {
          type: ISSUE_TYPE.SOCIETY,
          index: 0
        },
        meta: {
          people: [
            {
              name: "John Doe",
              description:
                "John Doe is the example figure of our time and well deserves an applouse",
              link: ""
            },
            {
              name: "Jane Doe",
              description:
                "Jane Doe is the example figure of our time and well deserves an applouse",
              link: "https://en.wikipedia.org/wiki/Elon_Musk"
            }
          ],
          places: [
            {
              name: "John Doe's Home",
              description:
                "John Doe's Home is the example place of our time and well deserves an applouse",
              link: "https://en.wikipedia.org/wiki/Elon_Musk"
            }
          ],
          concepts: [
            {
              name: "John Doe's Philosophy",
              description:
                "John Doe's Philosopyh is the example concept of our time and well deserves an applouse",
              link: "https://en.wikipedia.org/wiki/Elon_Musk"
            }
          ]
        }
      },
      {
        id: "#load_psychologytoday",
        route: "/articles_szilvi/psychologytoday.html",
        issue: {
          type: ISSUE_TYPE.PSYCHOLOGY,
          index: 0
        },
        meta: {
          people: [
            {
              name: "John Doe",
              description:
                "John Doe is the example figure of our time and well deserves an applouse",
              link: ""
            },
            {
              name: "Jane Doe",
              description:
                "Jane Doe is the example figure of our time and well deserves an applouse",
              link: "https://en.wikipedia.org/wiki/Elon_Musk"
            }
          ],
          places: [
            {
              name: "John Doe's Home",
              description:
                "John Doe's Home is the example place of our time and well deserves an applouse",
              link: "https://en.wikipedia.org/wiki/Elon_Musk"
            }
          ],
          concepts: [
            {
              name: "John Doe's Philosophy",
              description:
                "John Doe's Philosopyh is the example concept of our time and well deserves an applouse",
              link: "https://en.wikipedia.org/wiki/Elon_Musk"
            }
          ]
        }
      },
      {
        id: "#load_gamestudies",
        route: "/articles_szilvi/gamestudies.html",
        issue: {
          type: ISSUE_TYPE.PSYCHOLOGY,
          index: 1
        },
        meta: {
          people: [
            {
              name: "John Doe",
              description:
                "John Doe is the example figure of our time and well deserves an applouse",
              link: ""
            },
            {
              name: "Jane Doe",
              description:
                "Jane Doe is the example figure of our time and well deserves an applouse",
              link: "https://en.wikipedia.org/wiki/Elon_Musk"
            }
          ],
          places: [
            {
              name: "John Doe's Home",
              description:
                "John Doe's Home is the example place of our time and well deserves an applouse",
              link: "https://en.wikipedia.org/wiki/Elon_Musk"
            }
          ],
          concepts: [
            {
              name: "John Doe's Philosophy",
              description:
                "John Doe's Philosopyh is the example concept of our time and well deserves an applouse",
              link: "https://en.wikipedia.org/wiki/Elon_Musk"
            }
          ]
        }
      },
      {
        id: "#load_wired",
        route: "/articles_szilvi/wired.html",
        issue: {
          type: ISSUE_TYPE.CREATION,
          index: 0
        },
        meta: {
          people: [
            {
              name: "John Doe",
              description:
                "John Doe is the example figure of our time and well deserves an applouse",
              link: ""
            },
            {
              name: "Jane Doe",
              description:
                "Jane Doe is the example figure of our time and well deserves an applouse",
              link: "https://en.wikipedia.org/wiki/Elon_Musk"
            }
          ],
          places: [
            {
              name: "John Doe's Home",
              description:
                "John Doe's Home is the example place of our time and well deserves an applouse",
              link: "https://en.wikipedia.org/wiki/Elon_Musk"
            }
          ],
          concepts: [
            {
              name: "John Doe's Philosophy",
              description:
                "John Doe's Philosopyh is the example concept of our time and well deserves an applouse",
              link: "https://en.wikipedia.org/wiki/Elon_Musk"
            }
          ]
        }
      },
      {
        id: "#load_wired_2",
        route: "/articles_deniz/wired_2.html",
        issue: {
          type: ISSUE_TYPE.PSYCHOLOGY,
          index: 2
        },
        meta: {
          people: [
            {
              name: "John Doe",
              description:
                "John Doe is the example figure of our time and well deserves an applouse",
              link: ""
            },
            {
              name: "Jane Doe",
              description:
                "Jane Doe is the example figure of our time and well deserves an applouse",
              link: "https://en.wikipedia.org/wiki/Elon_Musk"
            }
          ],
          places: [
            {
              name: "John Doe's Home",
              description:
                "John Doe's Home is the example place of our time and well deserves an applouse",
              link: "https://en.wikipedia.org/wiki/Elon_Musk"
            }
          ],
          concepts: [
            {
              name: "John Doe's Philosophy",
              description:
                "John Doe's Philosopyh is the example concept of our time and well deserves an applouse",
              link: "https://en.wikipedia.org/wiki/Elon_Musk"
            }
          ]
        }
      },
      {
        id: "#load_venturebeat",
        route: "/articles_szilvi/venturebeat.html",
        issue: {
          type: ISSUE_TYPE.CREATION,
          index: 2
        },
        meta: {
          people: [
            {
              name: "John Doe",
              description:
                "John Doe is the example figure of our time and well deserves an applouse",
              link: ""
            },
            {
              name: "Jane Doe",
              description:
                "Jane Doe is the example figure of our time and well deserves an applouse",
              link: "https://en.wikipedia.org/wiki/Elon_Musk"
            }
          ],
          places: [
            {
              name: "John Doe's Home",
              description:
                "John Doe's Home is the example place of our time and well deserves an applouse",
              link: "https://en.wikipedia.org/wiki/Elon_Musk"
            }
          ],
          concepts: [
            {
              name: "John Doe's Philosophy",
              description:
                "John Doe's Philosopyh is the example concept of our time and well deserves an applouse",
              link: "https://en.wikipedia.org/wiki/Elon_Musk"
            }
          ]
        }
      },
      {
        id: "#load_metropolis",
        route: "/articles_deniz/metropolis.html",
        issue: {
          type: ISSUE_TYPE.CREATION,
          index: 1
        },
        meta: {
          people: [
            {
              name: "John Doe",
              description:
                "John Doe is the example figure of our time and well deserves an applouse",
              link: ""
            },
            {
              name: "Jane Doe",
              description:
                "Jane Doe is the example figure of our time and well deserves an applouse",
              link: "https://en.wikipedia.org/wiki/Elon_Musk"
            }
          ],
          places: [
            {
              name: "John Doe's Home",
              description:
                "John Doe's Home is the example place of our time and well deserves an applouse",
              link: "https://en.wikipedia.org/wiki/Elon_Musk"
            }
          ],
          concepts: [
            {
              name: "John Doe's Philosophy",
              description:
                "John Doe's Philosopyh is the example concept of our time and well deserves an applouse",
              link: "https://en.wikipedia.org/wiki/Elon_Musk"
            }
          ]
        }
      }
    ];

    /**
     * ROUTING
     */
    let currentRoute = "";
    let metaShow = false;
    let activeMeta = META_TYPE.PEOPLE;
    const switchRoute = (route, issue) => {
      currentRoute = route;
      $("#iframeHolder").load(route, () => {
        if (currentStyle === "") {
          return;
        }
        const styleItem = styles.find(({ name }) => name === currentStyle);
        removeAllStyles();
        $("#iframeHolder").append(
          `<link rel="stylesheet" type="text/css" href="${styleItem.path}${styleItem.name}.css">`
        );
      });
      changeMetaContent();
      $(".issue__nav").removeClass("d-none");
      switch (issue.index) {
        case 0:
          $("#issue__nav_prev").addClass("inactive");
          $("#issue__nav_next").removeClass("inactive");
          break;
        case 1:
          $("#issue__nav_prev").removeClass("inactive");
          $("#issue__nav_next").removeClass("inactive");
          break;
        case 2:
          $("#issue__nav_prev").removeClass("inactive");
          $("#issue__nav_next").addClass("inactive");
          break;
      }
    };
    availableRoutes.forEach(({ id, route, issue }) => {
      $(id).on("click", function() {
        switchRoute(route, issue);
      });
    });

    $("#issue__nav_prev").on("click", function() {
      const routeItem = availableRoutes.find(
        ({ route }) => route === currentRoute
      );
      if (routeItem.issue.index === 0) return;
      const toGo = availableRoutes.find(
        ({ issue }) =>
          issue.type === routeItem.issue.type &&
          issue.index === routeItem.issue.index - 1
      );
      switchRoute(toGo.route, toGo.issue);
    });
    $("#issue__nav_next").on("click", function() {
      const routeItem = availableRoutes.find(
        ({ route }) => route === currentRoute
      );
      if (routeItem.issue.index === 2) return;
      const toGo = availableRoutes.find(
        ({ issue }) =>
          issue.type === routeItem.issue.type &&
          issue.index === routeItem.issue.index + 1
      );
      switchRoute(toGo.route, toGo.issue);
    });

    /**
     * META HANDLING
     */
    const changeMetaContent = () => {
      const routeItem = availableRoutes.find(
        ({ route }) => route === currentRoute
      );
      $("#meta__div_content")
        .removeClass("d-none")
        .html(getMetaTemplate(routeItem.meta[activeMeta]));
    };
    Object.keys(META_TYPE).forEach(key => {
      $(`#meta__nav_${META_TYPE[key]}`).on("click", function() {
        activeMeta = META_TYPE[key];
        const nonActiveKeys = Object.keys(META_TYPE).filter(k => k !== key);
        const activeKey = key;
        nonActiveKeys.forEach(inactiveKey =>
          $(`#meta__nav_${META_TYPE[inactiveKey]}`).removeClass("active")
        );
        $(`#meta__nav_${META_TYPE[activeKey]}`).addClass("active");
        changeMetaContent();
      });
    });
    $("#meta_data__button").on("click", function() {
      if (currentRoute === "") {
        // If no article is selected just return
        return;
      }
      metaShow = !metaShow;
      if (metaShow) {
        $("#meta__div").removeClass("d-none");
        $("#iframeHolder").addClass("col-md-9");
        $("#meta_data__button_show").addClass("d-none");
        $("#meta_data__button_hide").removeClass("d-none");
        changeMetaContent();
        return;
      }
      $("#meta__div").addClass("d-none");
      $("#iframeHolder").removeClass("col-md-9");
      $("#meta_data__button_show").removeClass("d-none");
      $("#meta_data__button_hide").addClass("d-none");
      $("#meta__div_content").addClass("d-none");
    });

    /**
     * STYLE CHANGES
     */
    const removeAllStyles = () =>
      styles.forEach(({ name }) =>
        $(`link[rel=stylesheet][href*="${name}"]`).remove()
      );
    styles.forEach(({ name, path, id }) => {
      $(`${id}`).on("click", function() {
        removeAllStyles();
        $("#iframeHolder").append(
          `<link rel="stylesheet" type="text/css" href="${path}${name}.css">`
        );
        currentStyle = name;
      });
    });
  });
})();
