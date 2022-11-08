import React from 'react'
import { Link } from 'react-router-dom'
import error from "../assets/images/error-404.jpeg"

const NotFound = () => {
  return (
    <div>
      <img
        style={{ marginBottom: "20px" }}
        width={"100%"}
        src={error}
        alt="Error"
      />
      <Link className="btn btn-dark" to="/">
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound