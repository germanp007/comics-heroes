import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { getHeroByName } from "../helpers";
export const SearchHero = () => {
  const navigator = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroByName(q);

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: "",
  });
  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;
  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 2) return;
    navigator(`?q=${searchText}`);
    onResetForm("");
  };

  return (
    <>
      <h1 style={{ color: "white" }}>SearchHero</h1>
      <hr style={{ color: "white" }} />
      <div className="row">
        <div className="col-5">
          <h4 style={{ color: "white" }}>Searching</h4>
          <hr style={{ color: "white" }} />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search Hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button
              className="btn btn-primary"
              style={{
                background: "white",
                border: "none",
                color: "black",
                marginTop: "10px",
                width: "80px",
              }}
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4 style={{ color: "white" }}>Results</h4>
          <hr style={{ color: "white" }} />

          {/* {q === "" ? (
            <div
              className="alert alert"
              style={{ background: "rgb(131, 129, 129)" }}
            >
              Search a Hero...
            </div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger">
                No Hero with... <b>{q}</b>{" "}
              </div>
            )
          )} */}
          <div
            className="alert alert animate__animated animate__fadeIn"
            style={{
              background: "rgb(131, 129, 129)",
              display: showSearch ? "" : "none",
            }}
          >
            Search a Hero...
          </div>
          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}
          >
            No Hero with... <b>{q}</b>{" "}
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
