import React from "react";
import { useParams } from "react-router-dom";
import "./CourseDetail.css";
import { useNavigate } from "react-router-dom";

const CourseDetail = () => {
  const Navigate = useNavigate();
  const mockCourses = [
    {
      id: 1,
      title: "Learn React: Build Stunning Web Applications",
      subtitle:
        "Master React.js with hands-on projects and real-world applications",
      image:
        "data:image/png;base64,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",
      instructor: "John Doe",
      duration: "3 Hours 20 minutes",
      language: "English",
      enrolled: "25,000+ students",
      description:
        "This course offers a comprehensive guide to React.js, one of the most popular JavaScript libraries for building dynamic web applications. Through hands-on examples, you'll learn state management, component structure, and best practices.",
    },
    {
      id: 2,
      title: "Python",
      subtitle:
        "Master Python with hands-on projects and real-world applications",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuRqrQhuMwMsg2EhcMbUm4Vj9U9miNcI2lOA&s",
      instructor: "Yousuf",
      duration: "8 hours and 40 minutes",
      language: "Bilingual",
      enrolled: "25,000+ students",
      description:
        "This course offers a comprehensive guide to Python, one of the most popular python libraries for building dynamic web applications. Through hands-on examples, you'll learn state management, component structure, and best practices.",
    },
    {
      id: 3,
      title: "Java",
      subtitle:
        "Master Java with hands-on projects and real-world applications",
      image:
        "data:image/png;base64,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",
      duration: "5 hours and 30 minutes",
      language: "English",
      enrolled: "25,000+ students",
      description:
        "This course offers a comprehensive guide to Java, one of the most widely used programming languages in the world. Through hands-on examples, you'll learn the fundamentals of object-oriented programming, data structures, exception handling, multithreading, and best practices for building robust and scalable applications.",
    },
    // More courses can be added here
  ];

  const { title, id } = useParams();
  const course = mockCourses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <p>Course not found.</p>;
  }

  return (
    <div className="course-detail-container">
      <header className="course-header">
        <h1 className="course-title">{course.title}</h1>
        <p className="course-subtitle">{course.subtitle}</p>
      </header>
      <div className="course-content">
        <div className="course-image">
          <img src={course.image} alt={course.title} />
        </div>
        <div className="course-info">
          <div className="detail">
            <p>
              <strong>Instructor:</strong> {course.instructor}
            </p>
            <p>
              <strong>Duration:</strong> {course.duration}
            </p>
            <p>
              <strong>Language:</strong> {course.language}
            </p>
            <p>
              <strong>Enrolled:</strong> {course.enrolled}
            </p>
          </div>
          <button
            className="enroll-button"
            onClick={() => {
              Navigate(`/enroll/${title}/${course.id}`);
            }}
          >
            Enroll Now
          </button>
        </div>
      </div>
      <footer className="course-footer">
        <h3>About this Course</h3>
        <p>{course.description}</p>
      </footer>
    </div>
  );
};

export default CourseDetail;
