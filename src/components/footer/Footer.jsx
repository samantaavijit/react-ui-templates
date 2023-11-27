import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <span className="text-muted">
          Your Website Footer &copy; {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
