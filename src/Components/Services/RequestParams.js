const limitPerPage = 20;
export const requests = ({ page, type }) => ({
  watchlist: `/ott/watchlist/like`,
  [type]: `/ott/show?filter={"type":"${type}"}&page=${page}&limit=${limitPerPage}`,
});
