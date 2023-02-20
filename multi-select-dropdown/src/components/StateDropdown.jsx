import { useState, useRef, useEffect } from "react";
import { states } from "./states";

function StateDropdown() {
  const [isDropdownDisplayed, setIsDropdownDisplayed] = useState(false);
  //   ! maps our states array to an object with the abbreviation as the key and false as the value
  const [selectedStates, setSelectedStates] = useState(
    states.reduce((obj, state) => ({ ...obj, [state.abbreviation]: false }), {})
  );

  //   ! useRef is a hook that allows us to create a reference to a DOM element, this is the same as document.querySelector
  const dropdownRef = useRef();

  useEffect(() => {
    const onClick = (e) => {
      if (e.target !== dropdownRef.current) {
        console.log("clicked outside");
        setIsDropdownDisplayed(false);
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <>
      <fieldset className="relative">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsDropdownDisplayed((prevState) => !prevState);
          }}
          className="bg-gray-400 h-[30px] w-[500px] flex items-center pl-3 hover:bg-gray-300"
        >
          ---Select your states---
        </button>
        {isDropdownDisplayed && (
          <div
            // ! hook it here
            onClick={(e) => e.stopPropagation()}
            ref={dropdownRef}
            className="absolute w-full bg-gray-500 h-[850px] mt-1 grid grid-cols-3 gap-1"
          >
            {states.map((state) => (
              <fieldset
                className={
                  selectedStates[state.abbreviation]
                    ? `bg-cyan-400`
                    : "hover:bg-gray-400"
                }
                key={state.abbreviation}
              >
                <input
                  onChange={(e) =>
                    setSelectedStates({
                      ...selectedStates,
                      [state.abbreviation]: e.target.checked,
                    })
                  }
                  checked={selectedStates[state.abbreviation]}
                  id={`input-${state.abbreviation}`}
                  type="checkbox"
                  className="mr-2"
                />
                <label htmlFor={`input-${state.abbreviation}`}>
                  {state.name}
                </label>
              </fieldset>
            ))}
          </div>
        )}
      </fieldset>
      <div className="text-white">
        <h2>Selected States</h2>
        <ul>
          {Object.entries(selectedStates).map(([key, value]) => {
            if (value) {
              return <li key={key}>{key}</li>;
            }
          })}
        </ul>
      </div>
    </>
  );
}

export default StateDropdown;
