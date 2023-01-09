import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        backgroundColor: "skyblue",
        padding: "5px",
        width: "100%",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        position: "fixed",
        marginTop: "-8px",
      }}
    >
      <h1>
        <Link
          href="/"
          style={{ textDecoration: "none", fontSize: "25px", color: "black" }}
        >
          Himanshu Rana
        </Link>
      </h1>
      <h1>
        <Link
          href="/projects"
          style={{ textDecoration: "none", fontSize: "25px", color: "black" }}
        >
          Projects
        </Link>
      </h1>
    </div>
  );
};

export default Navbar;
