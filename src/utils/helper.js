export const generateUID = () => {
  // Get current date and time components
  const now = new Date();
  const year = now.getFullYear().toString().padStart(4, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const milliseconds = now.getMilliseconds().toString().padStart(3, "0");


  // Construct and return UID
  return `uid${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;
}


export const dateFormat = (date) => {
  const d = new Date(date);
  return d.toDateString();
}