import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import FeaturesPage from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";
import TestimonialsPage from "./pages/Testimonials";
import FAQPage from "./pages/Faq";
import AuthPage from "./pages/LogInSignUp";
import RecentTasksPage from "./components/recenttasks";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/How-It-Works" element={<HowItWorks />} />
        <Route path="/stories" element={<TestimonialsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/Auth" element={<AuthPage />} />
        <Route path="/Task" element={<RecentTasksPage />} />
        {/* <Route path="/tasks" element={<RecentTasksPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
