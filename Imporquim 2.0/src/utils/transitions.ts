//https://www.skies.dev/headless-ui-transitions
export const simpleTransitionClasses = {
  enter: "transition-opacity duration-75",
  enterFrom: "opacity-0",
  enterTo: "opacity-100",
  leave: "transition-opacity duration-150",
  leaveFrom: "opacity-100",
  leaveTo: "opacity-0",
};

export const spinInTransitionClasses = {
  enter: "transform transition duration-[400ms]",
  enterFrom: "opacity-0 rotate-[-120deg] scale-50",
  enterTo: "opacity-100 rotate-0 scale-100",
  leave: "transform duration-200 transition ease-in-out",
  leaveFrom: "opacity-100 rotate-0 scale-100",
  leaveTo: "opacity-0 scale-95",
};
export const notificationTransitionClasses = {
  enter: "transform ease-out duration-300 transition",
  enterFrom: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
  enterTo: "translate-y-0 opacity-100 sm:translate-x-0",
  leave: "transition ease-in duration-100",
  leaveFrom: "opacity-100",
  leaveTo: "opacity-0",
};

export const dropDownTransitionClasses = {
  enter: "transition ease-out duration-300",
  enterFrom: "transform opacity-0 scale-95",
  enterTo: "transform opacity-100 scale-100",
  leave: "transition ease-in duration-300",
  leaveFrom: "transform opacity-100 scale-100",
  leaveTo: "transform opacity-0 scale-95",
};

export const flyOutTopTransitionClasses = {
  enter: "transition ease-out duration-200",
  enterFrom: "opacity-0 -translate-y-1",
  enterTo: "opacity-100 translate-y-0",
  leave: "transition ease-in duration-150",
  leaveFrom: "opacity-100 translate-y-0",
  leaveTo: "opacity-0 -translate-y-1",
};

export const flyOutBottomTransitionClasses = {
  enter: "transition ease-out duration-200",
  enterFrom: "opacity-0 translate-y-1",
  enterTo: "opacity-100 translate-y-0",
  leave: "transition ease-in duration-150",
  leaveFrom: "opacity-100 translate-y-0",
  leaveTo: "opacity-0 translate-y-1",
};

export const menuTransitionClasses = {
  leave: "transition ease-in duration-100",
  leaveFrom: "opacity-100",
  leaveTo: "opacity-0",
};

export const modalBackTransitionClasses = {
  enter: "ease-out duration-300",
  enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
  enterTo: "opacity-100 translate-y-0 sm:scale-100",
  leave: "ease-in duration-200",
  leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
  leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
};

export const slideOverTransitionClasses = {
  enter: "transform transition ease-in-out duration-500 sm:duration-700",
  enterFrom: "translate-x-full",
  enterTo: "translate-x-0",
  leave: "transform transition ease-in-out duration-500 sm:duration-700",
  leaveFrom: "translate-x-0",
  leaveTo: "translate-x-full",
};

export const slideOverBackTransitionClasses = {
  enter: "ease-in-out duration-500",
  enterFrom: "opacity-0",
  enterTo: "opacity-100",
  leave: "ease-in-out duration-500",
  leaveFrom: "opacity-100",
  leaveTo: "opacity-0",
};

export const commandPaletteTransitionClasses = {
  enter: "ease-out duration-300",
  enterFrom: "opacity-0 scale-95",
  enterTo: "opacity-100 scale-100",
  leave: "ease-in duration-200",
  leaveFrom: "opacity-100 scale-100",
  leaveTo: "opacity-0 scale-95",
};
