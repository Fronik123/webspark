import { useMemo, useState } from "react";
import "./App.css";
import ProfileHeader from "./components/profileHeader/ProfileHeader";
import { posts } from "./data/posts";
import background2 from "./assets/background-2.png";
import { filterPostsByDate } from "./utils/filterPostsByDate";

import PostList from "./components/posts/postList/PostList";
import ViewToggle from "./components/toolbar/ViewToggle";
import LoadMoreButton from "./components/loadMoreButton/LoadMoreButton";

const PAGE_SIZE = 8;

function App() {
  const [viewMode, setViewMode] = useState("grid");
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [showMore, setShowMore] = useState(PAGE_SIZE);

  const filteredPosts = useMemo(
    () => filterPostsByDate(posts, dateFrom, dateTo),
    [dateFrom, dateTo],
  );

  const visiblePosts = useMemo(
    () => filteredPosts.slice(0, showMore),
    [filteredPosts, showMore],
  );

  const hasMore = showMore < filteredPosts.length;

  const handleDateFromChange = (date) => {
    setDateFrom(date);
    setShowMore(PAGE_SIZE);
  };

  const handleDateToChange = (date) => {
    setDateTo(date);
    setShowMore(PAGE_SIZE);
  };

  const handleLoadMore = () => {
    setShowMore((count) => count + PAGE_SIZE);
  };

  return (
    <div className="page">
      <ProfileHeader
        dateFrom={dateFrom}
        dateTo={dateTo}
        onDateFromChange={handleDateFromChange}
        onDateToChange={handleDateToChange}
      />

      <div className="main">
        <ViewToggle viewMode={viewMode} onChange={setViewMode} />
        <PostList posts={visiblePosts} viewMode={viewMode} />

        {hasMore && <LoadMoreButton onClick={handleLoadMore} />}
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
