import { useState } from "react";
import Sticker from "./sticker";

function getRandomPosition(maxX, maxY) {
  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;
  return { left: newX, top: newY };
}

function App() {
  const [imageUrl, setImageUrl] = useState(
    "https://tenor.com/view/dirt-alone-upset-lonely-kick-gif-22236520.gif"
  );
  const [happy, setHappy] = useState(false);

  const [buttonPosition, setButtonPosition] = useState({ left: 0, top: 0 });

  const happyFunction = () => {
    setImageUrl(
      "https://tenor.com/view/tkthao219-bubududu-panda-gif-22746191.gif"
    );
    if (happy) {
      setButtonPosition({ left: 0 });
    }
  };

  const sadFunction = () => {
    const maxX = document.querySelector(".gifContainer").clientWidth;
    const maxY = document.querySelector(".gifContainer").clientHeight;

    const newPosition = getRandomPosition(maxX, maxY);
    setButtonPosition(newPosition);

    setImageUrl("https://tenor.com/view/tkthao219-bubududu-gif-25041153.gif");
  };
  console.log(happy);
  return (
    <div className="flex flex-col bg-gradient-to-t from-[#bde0fe] to-[#a2d2ff] p-2 min-h-screen items-center justify-center gap-3 relative">
      <div className="text-xl p-1 sm:text-2xl md:text-3xl lg:text-4xl font-normal text-[#03045e] capitalize">
        Coffee? ☕️ Dinner? 🍽️ You + Me?
      </div>
      <div className="flex justify-around">
        <div className="gifContainer w-2/3 h-2/3 relative">
          <Sticker url={imageUrl} />
        </div>
      </div>

      <div className="buttonsContainer flex text-xl gap-5 justify-between  ">
        {happy ? (
          <button className="bg-[#8ecae6] p-4 w-28 rounded-md hover:bg-white hover:scale-125 duration-200">
            Let"s Fix Date
          </button>
        ) : (
          <>
            <button
              className="bg-[#8ecae6] p-4 w-28 rounded-md hover:bg-white hover:scale-125 duration-200"
              onMouseEnter={happyFunction}
              onTouchStart={happyFunction}
              onClick={() => setHappy(true)}
            >
              Yes
            </button>
            <button
              className={` ${
                buttonPosition.left === 0 ? "" : "absolute "
              } bg-[#8ecae6] p-4 w-28 rounded-md`}
              style={{
                left: `${buttonPosition.left}px`,
                top: `${buttonPosition.top}px`,
              }}
              onMouseEnter={sadFunction}
              onTouchStart={sadFunction}
            >
              No
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
