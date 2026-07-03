import { useState, useEffect } from "react";

export default function TypewriterText({ text }) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    // Start after 0.5s delay
    const startDelay = setTimeout(() => {
      setShowCursor(true);

      const startTyping = () => {
        let currentIndex = 0;
        const typeInterval = setInterval(() => {
          if (currentIndex < text.length) {
            setDisplayedText(text.substring(0, currentIndex + 1));
            currentIndex++;
          } else {
            // Typing complete
            clearInterval(typeInterval);
            setTypingComplete(true);

            // Cursor blinks 3 more times after typing
            let blinks = 0;
            const blinkInterval = setInterval(() => {
              blinks++;
              setShowCursor((prev) => !prev);

              if (blinks >= 6) {
                // 3 full blinks = 6 toggles
                clearInterval(blinkInterval);
                setShowCursor(false);

                // Wait 1 second then restart the animation
                const restartDelay = setTimeout(() => {
                  setDisplayedText("");
                  setTypingComplete(false);
                  setShowCursor(true);
                  startTyping();
                }, 1000);

                return () => clearTimeout(restartDelay);
              }
            }, 350); // 0.35s per blink toggle (0.7s per full blink)
          }
        }, 60); // 60ms per character

        return () => clearInterval(typeInterval);
      };

      startTyping();
    }, 500); // 0.5s delay before starting

    return () => clearTimeout(startDelay);
  }, [text]);

  // Find where "Built for " starts
  const builtForIndex = text.indexOf("Built for ");
  const africaIndex = text.indexOf("Africa.");

  // Build the display with proper styling
  const renderText = () => {
    const chars = displayedText.split("");
    return chars.map((char, index) => {
      const isGoldPart = builtForIndex !== -1 && index >= builtForIndex;
      const isAfricaPulse =
        typingComplete &&
        africaIndex !== -1 &&
        index >= africaIndex &&
        index < africaIndex + 8;

      return (
        <span
          key={index}
          className={isAfricaPulse ? "typewriter-africa-pulse" : ""}
          style={{
            color: isGoldPart ? "#D4A843" : "white",
          }}>
          {char}
        </span>
      );
    });
  };

  return (
    <span style={{ position: "relative", display: "inline" }}>
      <style>{`
        @keyframes goldPulse {
          0%, 100% { text-shadow: 0 0 0px transparent; }
          50%       { text-shadow: 0 0 20px rgba(212, 168, 67, 0.4); }
        }
        .typewriter-africa-pulse {
          animation: goldPulse 2s infinite;
        }
      `}</style>

      {renderText()}

      {showCursor && (
        <span
          style={{
            display: "inline-block",
            color: "#D4A843",
            animation: "blink 0.7s infinite",
            marginLeft: "2px",
          }}>
          |
        </span>
      )}
    </span>
  );
}
