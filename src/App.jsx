
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PostsPage } from "./pages/PostsPage";
import { PostDetails } from "./components/post/PostDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/postDetails/:id" element={<PostDetails/>}/>

       
      </Routes>
    </>
  );
}

export default App;
