import { useState } from "react";
import "./App.css";
import ProfileHeader from "./components/profileHeader/ProfileHeader";
import { posts } from "./data/posts";

import PostList from "./components/posts/postList/PostList";
import ViewToggle from "./components/toolbar/ViewToggle";

function App() {
  const [viewMode, setViewMode] = useState("grid");

  return (
    <div className="page">
      <ProfileHeader />
      <div className="main">
        <ViewToggle viewMode={viewMode} onChange={setViewMode} />
        <PostList posts={posts} viewMode={viewMode} />
      </div>
    </div>
  );
}

export default App;
