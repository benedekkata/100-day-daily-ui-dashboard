import { useMemo, useState } from "react";
import CosmicButton from "./cosmic-button";

/* Deliberately not using shadcn/ui components for this for learning purposes, but tailwind is allowed */
function Day1Modal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isModal, setIsModal] = useState<boolean>(false);

  const modalContent = useMemo(() => {
    return isModal ? (
      <>Real Modal</>
    ) : (
      <div>
        <p>This is my "modal"</p>
      </div>
    );
  }, [isModal]);

  return (
    <div className="flex flex-col h-full justify-center items-center relative">
      <img
        src="/mesh-gradient.png"
        alt="Mesh gradient background"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {isOpen ? (
          <div>
            <button onClick={() => setIsModal(false)}>Open as Modal</button>
            <button onClick={() => setIsOpen(false)}>X</button>
            {modalContent}
          </div>
        ) : (
          <CosmicButton onClick={() => setIsOpen(true)}>
            Open Modal
          </CosmicButton>
        )}
      </div>
    </div>
  );
}

export default Day1Modal;
