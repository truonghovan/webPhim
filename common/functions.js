export const convertToMinutes = (time) => {
  const minutes = Math.floor(time / 60);

  // 👇️ get remainder of seconds
  const seconds = time % 60;

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  // ✅ format as MM:SS
  const result = `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
  return result;
};
