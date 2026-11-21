import { useState } from "react";
import { profile } from "../data.js";

export default function Header({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="wrap nav">
        <a className="logo" href="#top" onClick={close}>{profile.name}</a>

        <nav className={"links" + (open ? " open" : "")} aria-label="Main">
          <a href="#skills" onClick={close}>About</a>
          <a href="#work" onClick={close}>Projects</a>
          <a href="#contact" onClick={close}>Contact</a>
        </nav>

        <div className="actions">
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button
            className="icon-btn menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
