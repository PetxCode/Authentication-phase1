import { Header } from "antd/lib/layout/layout";
import React from "react";
import { Link } from "react-router-dom";

const HeaderView = () => {
  return (
    <div>
      <Header
        style={{
          color: "white",
          display: "flex",
          fontSize: "16px",
          fontWeight: "bold",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            cursor: "pointer",
          }}
        >
          <Link
            style={{
              color: "white",
            }}
            to="/"
          >
            Home
          </Link>
        </div>
        <div
          style={{
            cursor: "pointer",
          }}
        >
          <Link
            style={{
              color: "white",
            }}
            to="/about"
          >
            About
          </Link>
        </div>
        <div
          style={{
            cursor: "pointer",
          }}
        >
          <Link
            style={{
              color: "white",
            }}
            to="/course"
          >
            Course
          </Link>
        </div>
        <div
          style={{
            cursor: "pointer",
          }}
        >
          <Link
            style={{
              color: "white",
            }}
            to="/study"
          >
            Study
          </Link>
        </div>
      </Header>
    </div>
  );
};

export default HeaderView;
