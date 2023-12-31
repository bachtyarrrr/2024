import { useState } from "react";
import Countdown from "react-countdown";
import Particles from "react-particles";
import { Typewriter } from "react-simple-typewriter";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import ayang from "./img/img.JPG";

function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Nungguin 2024 ya ayang?", "Lucu kan fotonya :D"]);

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
      <img src={ayang} className="z-50 w-60 rounded-2xl" />
        
        <span className="text-white text-xl font-bold px-4 z-50">
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursorStyle={"🎉"}
            cursor
          />
        </span>
        <div className="z-50 text-white font-bold text-xl">
          <Countdown
            date={Date.now() + timeLeft()}
            onComplete={() =>
              setNewYearMessage([
                "Selamat Tahun Baru 2024 ayang",
                "Semoga lancar skripsinya yaa",
                "Maaf gabisa keluar sama ayang",
                "I Love U ❤",
              ])
            }
          />
        </div>
        <div className="z-50 text-white font-bold text-2xl">
            <h2>Putra</h2>
        </div>
      </div>
    </>
  );
}

export default App;
