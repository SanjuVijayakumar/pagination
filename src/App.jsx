import { useEffect, useState } from "react";
import "./App.css";
import PostList from "./postList/PostList";
import Pagination from "./pagination/Pagination";
import Header from "./header/Header";
import Footer from "./footer/Footer";

function App() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const getPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const data = await response.json();

    return data;
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);

        const data = await getPost();

        setPost(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, []);

  // Pagination calculation
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = post.slice(
    firstPostIndex,
    lastPostIndex
  );

  // Total pages
  const totalPages = Math.ceil(post.length / postsPerPage);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

    <Header />

    <main className="flex-1 py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">

        {/* Your existing title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Latest Posts
          </h1>
        </div>

        <PostList
          posts={currentPosts}
          loading={loading}
        />

        {!loading && post.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        )}

      </div>
    </main>

    <Footer />

  </div>
  );
}

export default App;