import { useState } from "react";
import Countdown from "react-countdown";
import Particles from "react-particles";
import { Typewriter } from "react-simple-typewriter";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Waiting for 2024..."]);

  const particleInitialization = async (engine) => {
    await loadFireworksPreset(engine);
  };

  function timeLeft() {
    const newYearDate = new Date("Januari 1, 2024 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const remaininTime = newYearDate - nowDate;
    return remaininTime;
  }

  return (
    <>
      <Particles
        init={particleInitialization}
        options={{ preset: "fireworks" }}
      />
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl font-bold px-4 z-50">
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursorStyle={"🎉"}
            cursor
          />
        </span>
        <div className="z-50 text-white font-bold text-2xl">
          <Countdown
            date={Date.now() + timeLeft()}
            onComplete={() =>
              setNewYearMessage([
                "Selamat Tahun Baru 2024! 🎉🎉 ",
                "Semoga segala hal terbaik terjadi padamu..",
              ])
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
