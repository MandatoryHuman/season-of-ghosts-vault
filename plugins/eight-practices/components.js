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
      "aside",
      { class: "eight-practices" },
      h("h3", null, "The Eight Practices"),
      h("p", null, "Advice followed during the first weeks of summer, the season of ghosts."),
      h(
        "ol",
        null,
        practices.map((practice) => h("li", { key: practice }, practice)),
      ),
    )
  }

  Component.css = `
    .eight-practices {
      margin: 1.5rem 0;
      font-size: 0.9rem;
    }

    .eight-practices h3 {
      margin-bottom: 0.5rem;
    }

    .eight-practices ol {
      padding-left: 1.25rem;
    }
  `

  return Component
}