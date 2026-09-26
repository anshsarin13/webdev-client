"use client";
export default function YourForm() {
  return (
    <div id="wd-your-form">
      <h4>Student Profile</h4>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="wd-your-form-name">Full name:</label>
        <input
          type="text"
          defaultValue="Ansh Sarin"
          id="wd-your-form-name"
        />
        <br />
        <label htmlFor="wd-your-form-password">Password:</label>
        <input type="password" id="wd-your-form-password" />
        <br />
        <label htmlFor="wd-your-form-email">Email:</label>
        <input
          type="email"
          defaultValue="ansh@husky.neu.edu"
          id="wd-your-form-email"
        />
        <br />
        <label>Short bio:</label>
        <br />
        <textarea
          id="wd-your-form-bio"
          cols={30}
          rows={5}
          defaultValue="Co-op student studying web development, currently learning Next.js."
        />
        <br />
        <label>Class standing:</label>
        <br />
        <input type="radio" name="wd-standing" id="wd-standing-freshman" />
        <label htmlFor="wd-standing-freshman">Freshman</label>
        <input type="radio" name="wd-standing" id="wd-standing-sophomore" />
        <label htmlFor="wd-standing-sophomore">Sophomore</label>
        <input type="radio" name="wd-standing" id="wd-standing-junior" />
        <label htmlFor="wd-standing-junior">Junior</label>
        <input
          type="radio"
          name="wd-standing"
          id="wd-standing-senior"
          defaultChecked
        />
        <label htmlFor="wd-standing-senior">Senior</label>
        <br />
        <label>Enrollment:</label>
        <br />
        <input
          type="radio"
          name="wd-enrollment"
          id="wd-enrollment-full"
          defaultChecked
        />
        <label htmlFor="wd-enrollment-full">Full-time</label>
        <input type="radio" name="wd-enrollment" id="wd-enrollment-part" />
        <label htmlFor="wd-enrollment-part">Part-time</label>
        <br />
        <label>Interests:</label>
        <br />
        <input type="checkbox" id="wd-interest-webdev" defaultChecked />
        <label htmlFor="wd-interest-webdev">Web Development</label>
        <input type="checkbox" id="wd-interest-ai" />
        <label htmlFor="wd-interest-ai">AI / ML</label>
        <input type="checkbox" id="wd-interest-mobile" />
        <label htmlFor="wd-interest-mobile">Mobile Apps</label>
        <br />
        <label htmlFor="wd-your-form-skill">Primary skill:</label>
        <br />
        <select id="wd-your-form-skill" defaultValue="REACT">
          <option value="REACT">React</option>
          <option value="NODE">Node.js</option>
          <option value="PYTHON">Python</option>
          <option value="JAVA">Java</option>
        </select>
        <br />
        <label htmlFor="wd-your-form-skills">Skills you know:</label>
        <br />
        <select
          multiple
          id="wd-your-form-skills"
          defaultValue={["REACT", "NODE"]}
        >
          <option value="REACT">React</option>
          <option value="NODE">Node.js</option>
          <option value="PYTHON">Python</option>
          <option value="JAVA">Java</option>
        </select>
        <br />
        <label htmlFor="wd-your-form-grad-year">Graduation year:</label>
        <input
          type="number"
          defaultValue="2027"
          min={2026}
          max={2030}
          id="wd-your-form-grad-year"
        />
        <br />
        <label htmlFor="wd-your-form-start">Co-op start date:</label>
        <input
          type="date"
          defaultValue="2026-07-06"
          id="wd-your-form-start"
        />
        <br />
        <label htmlFor="wd-your-form-excitement">
          How excited are you about this course (0-10):
        </label>
        <input
          type="range"
          min="0"
          max="10"
          defaultValue="9"
          id="wd-your-form-excitement"
        />
        <br />
        <button id="wd-your-form-save" type="submit">
          Save
        </button>
        <button id="wd-your-form-cancel" type="button">
          Cancel
        </button>
      </form>
    </div>
  );
}
