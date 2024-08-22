// function formatDate(date) {
//   const options = {
//     weekday: 'short',
//     day: 'numeric',
//     month: 'short',
//     year: 'numeric',
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
//     timeZone: 'GMT',
//   };
//   return date.toLocaleString('en-US', options);
// }

const getDate = (req, res) => {
  const dateParam = req.params.date;

  let date;

  // Checks if the date is in milliseconds(numeric) or in a standard string format
  if (!isNaN(dateParam)) {
    // Treat it as a timestamp in milliseconds
    date = new Date(parseInt(dateParam));
  } else {
    // Treat it as a date string
    date = new Date(dateParam);
  }

  if (date.toString() === 'Invalid Date') {
    return res.status(400).json({ error: 'Invalid Date' });
  }

  const formattedDate = date.toUTCString();

  const unixDate = date.getTime();

  res.status(200).json({ utc: formattedDate, unix: unixDate });
};

const getCurrentDate = (req, res) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toUTCString();
  const unixDate = currentDate.getTime();
  res.status(200).json({ utc: formattedDate, unix: unixDate });
};

module.exports = { getDate, getCurrentDate };
