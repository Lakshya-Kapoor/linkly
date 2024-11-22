import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import NavOption from "./components/NavOption";
import Home from "./pages/Home";
import MyUrl from "./pages/MyUrl";
import Profile from "./pages/Profile";

// Layouts
const MainLayout = () => (
  <div className="flex flex-col min-h-screen min-w-full bg-zinc-900">
    <header className="flex justify-center mt-7 mb-20">
      <h1 className="text-8xl font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Linkly
        </span>
      </h1>
    </header>
    <div className="flex-grow flex">
      <nav className="flex flex-col pl-5 gap-10 w-[200px]">
        <NavOption
          to="/"
          icon="/home.svg"
          activeIcon="/home-active.svg"
          name="Home"
        />
        <NavOption
          to="/myurls"
          icon="/url.svg"
          activeIcon="/url-active.svg"
          name="My URLs"
        />
        <NavOption
          to="/profile"
          icon="/profile.svg"
          activeIcon="/profile-active.svg"
          name="Profile"
        />
      </nav>
      <div className="flex-grow pr-[200px]">
        <Outlet />
      </div>
    </div>
    <footer>
      <p className="text-center text-white">© 2024 Linkly</p>
    </footer>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="myurls" element={<MyUrl />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
