function printMeetingMessages(input) {
  const meetingBook = {};

  for (const pair of input) {
    [day, name] = pair.split(" ");

    if (meetingBook.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      meetingBook[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  }

  for (const key in meetingBook) {
    console.log(`${key} -> ${meetingBook[key]}`)
 }
}

printMeetingMessages([
  "Friday Bob",
  "Saturday Ted",
  "Monday Bill",
  "Monday John",
  "Wednesday George",
]);
