export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.png"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      My image:
      <br />
      <img
        id="wd-your-image"
        width="300px"
        alt="Mount Everest"
        src="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/Mt._Everest_from_Gokyo_Ri_November_5%2C_2012.jpg/960px-Mt._Everest_from_Gokyo_Ri_November_5%2C_2012.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
      />
      <br />
      Sample image:
      <br />
      <img
        id="wd-ai-image"
        width="200px"
        alt="Earth from space"
        src="https://www.nasa.gov/wp-content/uploads/2026/09/davinci-heat-test-2.jpg"
      />
    </div>
  );
}
