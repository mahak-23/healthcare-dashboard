const calendarData = {
  month: "October 2021",
  events: [
    { day: "Mon", date: 25, slots: ["10:00", "11:00", "12:00"] },
    {
      day: "Tues",
      date: 26,
      slots: ["08:00", "09:00", "10:00"],
      active: true,
      slotSelected: "09:00",
    },
    { day: "Wed", date: 27, slots: ["12:00", "", "13:00"] },
    {
      day: "Thurs",
      date: 28,
      slots: ["10:00", "11:00", ""],
      slotSelected: "11:00",
    },
    { day: "Fri", date: 29, slots: ["", "14:00", "16:00"] },
    {
      day: "Sat",
      date: 30,
      slots: ["12:00", "14:00", "15:00"],
      slotSelected: "12:00",
    },
    {
      day: "Sun",
      date: 31,
      slots: ["09:00", "10:00", "11:00"],
      isSunday: true,
      slotSelected: "09:00",
    },
  ],
};

export default calendarData;
