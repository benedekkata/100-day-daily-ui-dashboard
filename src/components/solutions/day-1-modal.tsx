import { useMemo, useState } from "react";

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
    <>
      {isOpen ? (
        <div>
          <button onClick={() => setIsModal(false)}>Open as Modal</button>
          <button onClick={() => setIsOpen(false)}>X</button>
          {modalContent}
        </div>
      ) : (
        <div className="flex flex-col flex-grow justify-center items-center ">
          <button onClick={() => setIsOpen(true)}>Open Modal</button>
        </div>
      )}
    </>
  );
}

export default Day1Modal;
