import { h } from "preact"

const practices = [
  "Do not call a ghost a ghost.",
  "Do not pat people on the head or shoulders.",
  "Avoid entering bodies of water when a ghost is nearby.",
  "Do not eat food that has two stick-like objects protruding from it.",
  "Do not lean against walls during the day.",
  "Do not whistle at night.",
  "Do not leave laundry out at night.",
  "If you hear someone call your name from behind you at night, do not turn around.",
]

export const EightPractices = () => {
  const Component = ({ fileData }) => {
    if (fileData.frontmatter?.show_eight_practices !== true) {
      return null
    }

    return h(
      "details",
      { class: "eight-practices" },
      h("summary", null, h("h3", null, "The Eight Practices")),
      h(
        "div",
        { class: "eight-practices-content" },
        h("p", null, "Advice followed during the first weeks of summer, the season of ghosts."),
        h(
          "ol",
          null,
          practices.map((practice) => h("li", { key: practice }, practice)),
        ),
      ),
    )
  }

  Component.css = `
    .eight-practices {
      margin: 1.5rem 0;
      font-size: 0.9rem;
    }

    .eight-practices summary {
      cursor: pointer;
      list-style: none;
    }

    .eight-practices summary::-webkit-details-marker {
      display: none;
    }

    .eight-practices summary h3 {
      display: inline;
      margin: 0;
    }

    .eight-practices summary::after {
      content: "⌄";
      float: right;
      font-size: 1.1rem;
      line-height: 1;
    }

    .eight-practices[open] summary::after {
      content: "⌃";
    }

    .eight-practices-content {
      max-height: min(26rem, 45vh);
      overflow-y: auto;
      padding-right: 0.4rem;
    }

    .eight-practices-content p {
      margin-top: 0.75rem;
    }

    .eight-practices-content ol {
      padding-left: 1.25rem;
    }

    .backlinks {
      font-size: 0.8rem;
    }

    .backlinks h3 {
      margin-bottom: 0.35rem;
      font-size: 1rem;
    }

    .backlinks li {
      margin: 0.15rem 0;
    }
  `

  return Component
}