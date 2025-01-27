import Card from "./card";
import Sidebar from "./Sidebar.jsx";
import "./css/mainPage.css";

const Dashboard = () => {
  const courseList = [
    {
      id: 1,
      title: "React Js",
      description: "Learn React",
      image:
        "https://kobaltsolutions.com/wp-content/uploads/2021/04/Screen-Shot-2021-04-08-at-4.06.03-PM.png",
    },
    {
      id: 2,
      title: "Python",
      description: "Learn Python",
      image: "https://1000logos.net/wp-content/uploads/2020/08/Python-Logo.jpg",
    },
    {
      id: 3,
      title: "JAVA",
      description: "Learn JAVA",
      image:
        "https://www.logolynx.com/images/logolynx/0a/0afbc6d4113a6aebd982ddbcc4d5eb91.jpeg",
    },

    {
      id: 4,
      title: "Node Js",
      description: "Learn Node",
      image:
        "https://c4.wallpaperflare.com/wallpaper/619/468/16/node-js-javascript-wallpaper-preview.jpg",
    },
    {
      id: 5,
      title: "Angular",
      description: "Learn Angular",
      image:
        "https://logowik.com/content/uploads/images/angular9826.logowik.com.webp",
    },
    {
      id: 6,
      title: "Django",
      description: "Learn Django",
      image:
        "https://theclevercompany.se/media/blog/article/image/1565645489-django-logo.gif.0x760_q85.jpg",
    },
    {
      id: 7,
      title: "Swift",
      description: "Learn Swift",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.icon-icons.com%2Ficons2%2F2699%2FPNG%2F512%2Fswift_logo_icon_168772.png&f=1&nofb=1&ipt=332725c2c223a79ad592f1d7ba5d1cc0f2237a05dae13bdcaeec3a461e6dad81&ipo=images",
    },
    {
      id: 8,
      title: "C++",
      description: "Learn C++",
      image: "https://img-c.udemycdn.com/course/750x422/5710478_6976_4.jpg",
    },
    {
      id: 9,
      title: "Ruby",
      description: "Learn Ruby",
      image: "https://logowik.com/content/uploads/images/ruby6530.jpg",
    },
    {
      id: 10,
      title: "Go",
      description: "Learn Go",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/0*yH_VXVCvYm_c_tLS.jpeg",
    },
    {
      id: 11,
      title: "Rust",
      description: "Learn Rust",
      image: "https://cdn.k4g.com/blog/app/uploads/2023/09/14183658/rust-1.png",
    },
  ];

  return (
    <div className="co" style={{ width: "100%" }}>
      <div className="side" style={{ width: "20%" }}>
        <Sidebar />
      </div>
      <div className="wrapper-container" style={{ width: "90%" }}>
        <div className="mainContainer">
          <h2 style={{ marginTop: 20 }}>All Courses</h2>
          <hr />
          <div className="container">
            {courseList ? (
              courseList.map((course) => (
                <Card
                  image={course.image}
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
      </div>
    </div>
  );
};

export default Dashboard;
