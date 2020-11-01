export const callBacking = (callback) => {
  setTimeout(() => {
    callback("Hello Javascripters!");
  }, 3 * 1000);
};
