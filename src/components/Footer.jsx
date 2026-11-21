import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">© {new Date().getFullYear()} {profile.name}</div>
    </footer>
  );
}
