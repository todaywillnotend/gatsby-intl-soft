import React from "react";

import { Logo } from "../Logo/Logo";

import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <Logo />
      </div>
    </footer>
  );
};
