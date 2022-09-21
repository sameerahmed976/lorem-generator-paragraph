import { useState } from "react";
import data from "./data.js";
import "./style/style.css";

function App() {
  const [people, setPeople] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  // console.log(data, data.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      let InputValue = parseInt(count);

      if (InputValue > data.length - 1) {
        InputValue = 8;
      }
      if (InputValue <= 0) {
        InputValue = 0;
      }

      setPeople(data.slice(0, InputValue));
      setLoading(false);
    }, 1000);

    // console.log("click");
    // console.log(count);
  };

  return (
    <main className="App">
      <section className="lorem__generator">
        <h1 className="lorem__title">Paragraph Generator</h1>
        <section className="lorem__input">
          <form onSubmit={handleSubmit} className="form__container">
            <label htmlFor="count" className="form__label">
              <input
                type="number"
                name="count"
                className="form__input"
                id="count"
                placeholder="enter number of paragraphs"
                onChange={(e) => {
                  setCount(e.target.value);
                }}
                value={count}
              />
            </label>
            <button className="btn btn--submit" type="submit">
              Submit
            </button>
          </form>
        </section>
        {loading ? (
          <div className="loading"></div>
        ) : (
          <section className="paragraph__container">
            {people.map((item, index) => {
              return (
                <p key={index} className="paragraph--text">
                  {item}
                </p>
              );
            })}
          </section>
        )}
      </section>
    </main>
  );
}

export default App;
