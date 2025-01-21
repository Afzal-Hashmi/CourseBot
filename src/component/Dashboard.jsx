import Card from "./card";
import Sidebar from "./Sidebar.jsx";
import "./Dashboard.css";

const Dashboard = () => {
  const courseList = [
    { id: 1, title: "React Js", description: "Learn React" },
    { id: 2, title: "Python", description: "Learn Python" },
    { id: 3, title: "JAVA", description: "Learn JAVA" },

    { id: 4, title: "Node Js", description: "Learn Node" },
    { id: 5, title: "Angular", description: "Learn Angular" },
    { id: 6, title: "Django", description: "Learn Django" },
    { id: 7, title: "Swift", description: "Learn Swift" },
    { id: 8, title: "C++", description: "Learn C++" },
    { id: 9, title: "Ruby", description: "Learn Ruby" },
    { id: 10, title: "Go", description: "Learn Go" },
    { id: 11, title: "Rust", description: "Learn Rust" },
  ];

  return (
    <div className="co">
      <div className="side">
        <Sidebar />
      </div>
      <div className="container">
        {courseList ? (
          courseList.map((course) => (
            <Card
              id={course.id}
              title={course.title}
              description={course.description}
            />
          ))
        ) : (
          <p>NO Course TO Display</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
