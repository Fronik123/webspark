function parsePostDate(dateStr) {
  const [day, month, year] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function filterPostsByDate(posts, dateFrom, dateTo) {
  if (!dateFrom && !dateTo) {
    return posts;
  }

  const from = dateFrom ? startOfDay(dateFrom) : null;
  const to = dateTo ? startOfDay(dateTo) : null;

  return posts.filter((post) => {
    const postDate = startOfDay(parsePostDate(post.snapshot.date));

    if (from && postDate < from) {
      return false;
    }

    if (to && postDate > to) {
      return false;
    }

    return true;
  });
}
