import "./HeroCodingWindow.css";

const code = [
  {
    number: 1,
    content: (
      <>
        <span className="keyword">const</span>{" "}
        <span className="variable">graeme</span>{" "}
        <span className="operator">=</span>{" "}
        <span className="punctuation">{"{"}</span>
      </>
    ),
  },
  {
    number: 2,
    content: (
      <>
        <span className="indent" />
        <span className="property">role</span>
        <span className="operator">:</span>{" "}
        <span className="string">"Senior Frontend Engineer"</span>,
      </>
    ),
  },
  {
    number: 3,
    content: (
      <>
        <span className="indent" />
        <span className="property">location</span>
        <span className="operator">:</span>{" "}
        <span className="string">"Ireland"</span>,
      </>
    ),
  },
  {
    number: 4,
    content: (
      <>
        <span className="indent" />
        <span className="property">experience</span>
        <span className="operator">:</span>{" "}
        <span className="string">"8+ Years"</span>,
      </>
    ),
  },
  {
    number: 5,
    content: (
      <>
        <span className="indent" />
        <span className="property">stack</span>
        <span className="operator">:</span>{" "}
        <span className="punctuation">[</span>
      </>
    ),
  },
  {
    number: 6,
    content: (
      <>
        <span className="indent-double" />
        <span className="string">"React"</span>,
      </>
    ),
  },
  {
    number: 7,
    content: (
      <>
        <span className="indent-double" />
        <span className="string">"TypeScript"</span>,
      </>
    ),
  },
  {
    number: 8,
    content: (
      <>
        <span className="indent-double" />
        <span className="string">"JavaScript"</span>,
      </>
    ),
  },
  {
    number: 9,
    content: (
      <>
        <span className="indent-double" />
        <span className="string">"Next.js"</span>,
      </>
    ),
  },
  {
    number: 10,
    content: (
      <>
        <span className="indent-double" />
        <span className="string">"GraphQL"</span>
      </>
    ),
  },
  {
    number: 11,
    content: (
      <>
        <span className="indent" />
        <span className="punctuation">]</span>,
      </>
    ),
  },
  {
    number: 12,
    content: (
      <>
        <span className="indent" />
        <span className="property">currentlyLooking</span>
        <span className="operator">:</span>{" "}
        <span className="boolean">true</span>
      </>
    ),
  },
  {
    number: 13,
    content: (
      <>
        <span className="punctuation">{"}"}</span>
      </>
    ),
  },
];

export default function HeroCodeWindow() {
  return (
    <div className="code-window">
      <div className="code-header">
        <div className="traffic-lights">
          <span className="red" />
          <span className="yellow" />
          <span className="green" />
        </div>

        <span className="window-title">Frontend Engineer.tsx</span>

        <button className="copy-button">
          ⧉
        </button>
      </div>

      <div className="code-body">
        {code.map((line) => (
          <div className="code-line" key={line.number}>
            <span className="line-number">
              {line.number}
            </span>

            <div className="line-content">
              {line.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}