import { useEffect, useState } from "react";

const url =
  "https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=points%3E100";

function Content() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  if (data) {
    console.log(data.hits);
  }
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="Content">
      {loading && <div>One moment please...</div>}
      {error && <div>{`Error: ${error}`}</div>}
      <table>
        {data &&
          data.hits.map((el) => (
            <>
            <tr>
            <td id="title">1.</td>
            <td id="title">&#8679;</td>
              <td id="title" key={data.hits.objectID}>{el.title} <span id="subtext">({el.url})</span></td>
            </tr>
            <tr>
                <td colSpan={2}></td>
                <td id="subtext">{el.points} by {el.author}</td>
            </tr>
            </>
          ))}
      </table>
    </div>
  );
}

export default Content;
