export default function TailwindFilters() {
  // reactjs.jpg lives in public/images so the lab runs out of the box.
  const src = "/images/reactjs.jpg";
  return (
    <div>
      <h2>Blurs</h2>
      <div className="flex">
        <img className="blur-none w-1/4" src={src} alt="blur none" />
        <img className="blur-sm w-1/4" src={src} alt="blur sm" />
        <img className="blur-lg w-1/4" src={src} alt="blur lg" />
        <img className="blur-2xl w-1/4" src={src} alt="blur 2xl" />
      </div>
      <h2 className="mt-4">My own: brightness and contrast</h2>
      <div className="flex">
        <img className="brightness-50 w-1/4" src={src} alt="brightness 50" />
        <img className="contrast-200 w-1/4" src={src} alt="contrast 200" />
      </div>
      <h2 className="mt-4">Sample AI: grayscale and saturate</h2>
      <div id="wd-ai-filters" className="flex">
        <img className="grayscale w-1/4" src={src} alt="grayscale" />
        <img className="saturate-200 w-1/4" src={src} alt="saturate 200" />
      </div>
    </div>
  );
}
