import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { getUser, loadUser } from "./actions/user";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import AdminTimeline from "./components/AdminPanel/Timeline";
import AdminProjects from "./components/AdminPanel/Project";

function App() {
  // const dispatch = useDispatch();
  // // const { isAuthenticated } = true;
  // // const { loading ,user} = useSelector((state) => state.user);

  // useEffect(() => {
  //   dispatch(getUser());
  //   {localStorage.getItem('token')&&
  //   dispatch(loadUser());
  // }
  // }, [dispatch]);

  return (
    <Router>
      <Header />
      {/* {loading ? (
        "loading"
      ) : ( */}
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/" element={<Home timelines={user.timeline} skills={user.skills} />} /> */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/about" element={<About about={user.about} />} /> */}
          {/* <Route path="/projects" element={<Projects projects={user.projects} />} /> */}
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route
            path="/account"
            element={<AdminPanel /> : <Login />}
          />
          <Route
            path="/admin/timeline"
            element={<AdminTimeline /> : <Login />}
          />
          <Route
            path="/admin/project"
            element={isAuthenticated ? <AdminProjects /> : <Login />}
          /> */}
          <Route path="/adminpanel" element={<AdminPanel/>}/>
        </Routes>
      {/* )} */}
      <Footer />
    </Router>
  );
}

export default App;
