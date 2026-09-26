import CourseCard from "./CourseCard";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (3)</h2> <hr />
      <div id="wd-dashboard-courses">
        <CourseCard
          id="1234"
          title="CS5610 Web Development"
          subtitle="Full stack Next.js and React"
          image="/images/webdev.jpg"
        />
        <CourseCard
          id="2345"
          title="CS5004 Object-Oriented Design"
          subtitle="Java and design patterns"
          image="/images/oodesign.jpg"
        />
        <CourseCard
          id="3456"
          title="CS5800 Algorithms"
          subtitle="Data structures and algorithms"
          image="/images/algorithms.jpg"
        />
      </div>
    </div>
  );
}
