import EducationSection from "./components/EducationSection";
import GeneralSection from "./components/GeneralSection";
import JobSection from "./components/JobSection";
import "./styles/App.css";

function App() {
  return (
    <>
      <h1>CV Application</h1>
      <main>
        <GeneralSection />
        <EducationSection />
        <JobSection />
      </main>
    </>
  );
}

export default App;
