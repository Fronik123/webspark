import { useMemo, useState } from "react";
import "./App.css";
import ProfileHeader from "./components/profileHeader/ProfileHeader";
import { posts } from "./data/posts";
import background2 from "./assets/background-2.png";
import { filterPostsByDate } from "./utils/filterPostsByDate";

import PostList from "./components/posts/postList/PostList";
import ViewToggle from "./components/toolbar/ViewToggle";

function App() {
  const [viewMode, setViewMode] = useState("grid");
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);

  const filteredPosts = useMemo(
    () => filterPostsByDate(posts, dateFrom, dateTo),
    [dateFrom, dateTo],
  );

  return (
    <div className="page">
      <ProfileHeader
        dateFrom={dateFrom}
        dateTo={dateTo}
        onDateFromChange={setDateFrom}
        onDateToChange={setDateTo}
      />

      <div className="main">
        <ViewToggle viewMode={viewMode} onChange={setViewMode} />
        <PostList posts={filteredPosts} viewMode={viewMode} />
      </div>

      <img
        src={background2}
        alt=""
        className="pageBackgroundBottom"
        aria-hidden="true"
      />
    </div>
  );
}

export default App;
