import "./App.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRef } from "react";

function App() {
  const [collide, setCollide] = useState(null);
  const staticDivRef = useRef(null);
  const motionDivRef = useRef(null);

  function isCollide(a, b) {
    var aRect = a.current.getBoundingClientRect();
    var bRect = b.current.getBoundingClientRect();

    setCollide(
      !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width
      )
    );
  }

  return (
    <div className="App">
      <section
        style={{ height: "75vh", widht: "100vw", background: "#ccd5ae" }}
      >
        <p>Dragging</p>
        <motion.div
          drag
          dragMomentum={false}
          style={{
            width: "128px",
            height: "128px",
            background: "#2a9d8f",
          }}
        ></motion.div>
      </section>
      <section
        style={{ height: "75vh", widht: "100vw", background: "#fefae0" }}
      >
        <p>Dragging and Reset box position</p>
        <motion.div
          drag
          style={{
            width: "128px",
            height: "128px",
            background: "#e63946",
          }}
          dragSnapToOrigin
        ></motion.div>
      </section>
      <section
        style={{
          height: "75vh",
          widht: "100vw",
          background: "#e7c8a0",
        }}
      >
        <p>Dragging within Boundaries</p>
        <motion.div
          drag
          style={{
            width: "128px",
            height: "128px",
            background: "#606c38",
          }}
          dragConstraints={{
            top: 100,
            bottom: 100,
            left: 100,
            right: 100,
            border: "1px solid black",
          }}
        ></motion.div>
      </section>
      <section
        style={{
          height: "75vh",
          widht: "100vw",
          background: "#eeddd3",
        }}
      >
        <p>Dragging in one direction</p>
        <motion.div
          drag
          dragDirectionLock
          dragMomentum={false}
          style={{
            width: "128px",
            height: "128px",
            background: "#1c5987",
          }}
        ></motion.div>
      </section>
      <section
        style={{
          height: "75vh",
          widht: "100vw",
          background: "#e9edc9",
          position: "relative",
        }}
      >
        <p>Dragging & trigger event</p>
        <motion.div
          ref={motionDivRef}
          drag
          dragMomentum={false}
          onDrag={() => isCollide(staticDivRef, motionDivRef)}
          style={{
            width: "128px",
            height: "128px",
            background: "#28965a",
          }}
        >
          drag me
        </motion.div>
        <div
          ref={staticDivRef}
          style={{
            width: "128px",
            height: "128px",
            background: collide ? "red" : "#e9a87c",
            top: "125px",
            right: "128px",
          }}
        ></div>
      </section>
    </div>
  );
}

export default App;
