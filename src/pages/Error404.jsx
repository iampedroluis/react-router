export const Error404 = () => {
  return (
    <div>
      <h1>
        Error 404{" "}
        <i
          className="bx bx-error-alt bx-tada"
          style={{
            color: "red",
            fontSize: "45px",
            fontWeight: "lighter",
            textShadow: "1px 1px 2px black, 0 0 1em red, 0 0 0.1em red",
          }}
        ></i>
        <lord-icon
          src="https://cdn.lordicon.com/ygvjgdmk.json"
          trigger="loop"
          delay="2000"
          colors="primary:#e83a30"
          style={{
            width: "40px",
            height: "40px",
          }}
        ></lord-icon>
      </h1>
    </div>
  );
};
