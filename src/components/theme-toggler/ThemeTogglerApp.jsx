import { useState } from 'react';
import styles from "./style.module.css"

const ThemeTogglerApp = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setButtonStyle(backgroundColor === "white" ? "#1b1b1b" : "white");
  }

  return (
    <section className={styles['section']} style={{ backgroundColor, color: textColor }}>
      <h1 className={'title'}>Project-5: <em>Theme Toggler App</em></h1>
      <button
        onClick={handleClick}
        style={{
          buttonStyle,
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
      >
        {backgroundColor == "#1b1b1b" ? "Black Theme" : "White Theme"}
      </button>
      <section className={styles["content"]}>
        <h1>
          Welcome To A <br /> Real World..
        </h1>
      </section>
    </section>
  )
}

export default ThemeTogglerApp