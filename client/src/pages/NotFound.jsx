import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="not-found">
      <span>404 / PAGE NOT FOUND</span>
      <h1>This page isn't here.</h1>
      <p>The page may have moved, or the address may be incorrect.</p>
      <Link className="button button-red" to="/">
        Return home
      </Link>
    </section>
  );
}
