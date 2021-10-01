



// 2021-09-30T21:22:30.174Z



export const timeSince = (timeStamp) => {
  // return timeStamp;
  let startDate = Date.parse(timeStamp);
  let currentTime = new Date();

  let seconds = (currentTime.getTime() - startDate) * 0.001;
  if (seconds < 60) {
    return `${seconds} seconds ago`;
  }

  let minutes = seconds / 60;
  if (minutes < 60) {
    return `${Math.ceil(minutes)} minutes ago`;
  }

  let hours = minutes / 60;
  if (hours < 24) {
    return `${Math.ceil(hours)} hours ago`;
  }

  let days = hours / 24;
  if (days < 30.4167) {
    return `${Math.ceil(days)} days ago`;
  }

  let months = days / 30.4167;
  if (months < 12) {
    return `${Math.ceil(months)} months ago`;
  }

  let years = months / 12;
  return `${Math.ceil(years)} years ago`;

}