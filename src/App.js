import "./App.css";

const App = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <img src="Image/Logo3.png" alt="logo" className="logo" />

        <ul className="nav-links">
          <li>
            <a href="#">Travel Guide</a>
          </li>
          <li>
            <a href="#">Famous Places</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>

        <button className="btn">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/018/127/308/small_2x/simple-airplane-decal-free-png.png"
            alt="icon"
          />
          Bookings
        </button>
      </nav>

      {/* Hero section */}
      <div className="content">
        <h1>
          Beautiful <br /> Places to explore
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A fugit,
          reiciendis nam officia nulla alias, nobis sapiente dolorum magnam
          officiis aspernatur labore repellat! Explicabo autem illum beatae,
          iste aliquid quod voluptas odit labore id accusantium esse natus
          similique sint nesciunt.
        </p>

        <form action="">
          <input type="text" placeholder="Country Name" />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
