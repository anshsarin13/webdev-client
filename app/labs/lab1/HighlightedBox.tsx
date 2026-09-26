import type { ReactNode } from "react";

function HighlightedBox({
  backgroundColor = "lightyellow",
  borderColor = "orange",
  borderWidth = 2,
  borderRadius = 8,
  children,
}: {
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string | number;
  borderRadius?: string | number;
  children?: ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor,
        borderColor,
        borderWidth,
        borderStyle: "solid",
        borderRadius,
        padding: "0.75rem 1rem",
        marginBottom: "0.75rem",
      }}
    >
      {children}
    </div>
  );
}

export default function HighlightedBoxLab() {
  return (
    <div id="wd-highlighted-box">
      <h3>Highlighted Box</h3>
      <HighlightedBox
        backgroundColor="lavender"
        borderColor="purple"
        borderWidth={3}
        borderRadius={12}
      >
        <h4>Callout</h4>
        <p>
          This box wraps <strong>any</strong> children: headings, paragraphs,
          lists, and more.
        </p>
        <ul>
          <li>backgroundColor</li>
          <li>borderColor</li>
          <li>borderWidth</li>
          <li>borderRadius</li>
        </ul>
      </HighlightedBox>

      <HighlightedBox
        backgroundColor="honeydew"
        borderColor="seagreen"
        borderWidth={3}
        borderRadius={12}
      >
        <h4>My Goals</h4>
        <ul>
          <li>Get comfortable with Next.js and React</li>
          <li>Finish the Kambaz project end to end</li>
          <li>Ship something solid at my co-op</li>
        </ul>
      </HighlightedBox>

      <HighlightedBox
        backgroundColor="honeydew"
        borderColor="seagreen"
        borderWidth={2}
        borderRadius={4}
      >
        <h5>Sample nested content</h5>
        <p>
          A <span>span</span>, a <a href="#wd-highlighted-box">link</a>, and
          a small <code>table</code> reference, all nested inside one box.
        </p>
      </HighlightedBox>
    </div>
  );
}
