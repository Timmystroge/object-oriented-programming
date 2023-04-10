const { log } = console;

const user = {
  personal: {
    name: "Stroge-Dev",
    age: 200,
    github: "https://github.com/Timmystroge",
  },
  profession: {
    stack: "Software Engineer",
    certificatios: 120,
    projects: {
      projects: 80,
      workInProgress: 30,
      completed: 50,
      new: 600,
    },
  },
  achievments: {
    projects: [
      {
        ProjectTitle: "Blog",
        duration: "1 week",
      },
      {
        ProjectTitle: "Food App",
        duration: "1 week",
      },
      {
        ProjectTitle: "Todo App",
        duration: "2 days",
      },
      {
        ProjectTitle: "Weather App",
        duration: "6 hours",
      },
      {
        ProjectTitle: "E-commerce Website",
        duration: "1 month",
      },
    ],
    books: [
      {
        title: "What we have to do!",
        likes: "500",
      },
      {
        title: "Choices and Consequences",
        likes: "1090",
      },
    ],
  },
  auth: {
    //create a function within the object to log in
    login() {
      log(`${user.personal.name} Logged In!`);
    },
    logOut() {
      log(`${user.personal.name} Logged Out!`);
    },
  },
  displayBooks() {
    log(`[${user.personal.name} has ${achievments.books.length} books:]`);
    achievments.books.forEach((book) => {
      log("Title: " + book.title, "Likes: " + book.likes);
    });
  },
  displayProjects() {
    log(`[${user.personal.name} has ${achievments.projects.length} projects:]`);
    achievments.projects.forEach((project) => {
      log(
        "Project Title: " + project.ProjectTitle,
        "Duration: " + project.duration
      );
    });
  },

  userAction(param) {
    if (param === "books") {
      user.displayBooks();
    } else if (param === "projects") {
      user.displayProjects();
    } else {
      log("What DO You Wanna Display?");
    }
  },
};
const { personal, profession, auth, achievments } = user;
auth.login();
user.userAction("projects");
// we are passing a string
auth.logOut();
