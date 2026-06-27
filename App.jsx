import { useState } from "react";

function App() {
  // Assignment 1
  const [text, setText] = useState("");

  const wordCount =
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  // Assignment 2
  const [quantity, setQuantity] = useState(1);
  const price = 50000;

  // Assignment 3
  const [color, setColor] = useState("white");

  // Assignment 4
  const [player, setPlayer] = useState({
    name: "",
    role: "",
    country: "",
  });

  // Assignment 5
  const [feedback, setFeedback] = useState("");
  const [count, setCount] = useState(0);

  const handleFeedback = (value) => {
    setFeedback(value);
    setCount(count + 1);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Assignments</h1>

      <hr />

      {/* Assignment 1 */}
      <h2>Assignment 1: Live Character Counter</h2>

      <textarea
        rows="5"
        cols="40"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Characters: {text.length}</p>
      <p>Words: {wordCount}</p>

      <hr />

      {/* Assignment 2 */}
      <h2>Assignment 2: Product Quantity Selector</h2>

      <p>Product: Laptop</p>
      <p>Price: ₹50000</p>

      <button
        onClick={() => {
          if (quantity > 1) {
            setQuantity(quantity - 1);
          }
        }}
      >
        -
      </button>

      <span style={{ margin: "10px" }}>{quantity}</span>

      <button onClick={() => setQuantity(quantity + 1)}>+</button>

      <p>Quantity: {quantity}</p>
      <p>Total Amount: ₹{price * quantity}</p>

      <hr />

      {/* Assignment 3 */}
      <h2>Assignment 3: Favorite Color Picker</h2>

      <p>Selected Color: {color}</p>

      <div
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: color,
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        {color}
      </div>

      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("yellow")}>Yellow</button>

      <hr />

      {/* Assignment 4 */}
      <h2>Assignment 4: User Profile Card</h2>

      <button
        onClick={() =>
          setPlayer({
            name: "Virat Kohli",
            role: "Batsman",
            country: "India",
          })
        }
      >
        Virat Kohli
      </button>

      <button
        onClick={() =>
          setPlayer({
            name: "Rohit Sharma",
            role: "Batsman",
            country: "India",
          })
        }
      >
        Rohit Sharma
      </button>

      <button
        onClick={() =>
          setPlayer({
            name: "MS Dhoni",
            role: "Wicket Keeper",
            country: "India",
          })
        }
      >
        MS Dhoni
      </button>

      <p>Name: {player.name}</p>
      <p>Role: {player.role}</p>
      <p>Country: {player.country}</p>

      <hr />

      {/* Assignment 5 */}
      <h2>Assignment 5: Feedback Collector</h2>

      <button onClick={() => handleFeedback("Good")}>
        😊 Good
      </button>

      <button onClick={() => handleFeedback("Average")}>
        😐 Average
      </button>

      <button onClick={() => handleFeedback("Poor")}>
        😞 Poor
      </button>

      <p>Selected Feedback: {feedback}</p>
      <p>Total Feedback Given: {count}</p>

      {feedback === "Good" && (
        <p>Thank you for your positive feedback!</p>
      )}

      {feedback === "Average" && (
        <p>We'll try to improve.</p>
      )}

      {feedback === "Poor" && (
        <p>Sorry for the inconvenience.</p>
      )}
    </div>
  );
}

export default App;