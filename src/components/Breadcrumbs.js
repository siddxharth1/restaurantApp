import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  let pathString = "";
  const breadCrumbsPath = pathname.split("/").filter((x) => x);
  console.log(breadCrumbsPath);
  return (
    <div className="m-10">
      {breadCrumbsPath.length > 0 && <Link to="/">Home</Link>}
      {breadCrumbsPath.map((path, i) => {
        pathString += path;
        return breadCrumbsPath.length - 1 !== i ? (
          <Link key={i} to={pathString}>/{path}</Link>
        ) : (
          <span key={i}> /{path} </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
