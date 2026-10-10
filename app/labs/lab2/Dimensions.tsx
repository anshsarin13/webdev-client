export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div className="wd-dimension-own wd-bg-color-green wd-fg-color-white">
          My own box, a fixed 90x90 square
        </div>
        <div id="wd-ai-dimension" className="wd-ai-dimension wd-bg-color-yellow">
          This is a sample AI box with a long sentence to prove the declared
          120x60 size does not change no matter how much text is inside it.
        </div>
      </div>
    </div>
  );
}
