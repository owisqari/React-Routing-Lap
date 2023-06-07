import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Books from "./components/Books";
import NotFound from "./components/NotFound";
import "./App.css";
import BookPage from "./components/BookPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book">
          <Route path="" element={<Books />} />
          <Route
            path="/book/:id"
            element={<BookPage title="book1" author="owis" />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
