export const getNextFiveDays = () => {
  const customDayNames: { [key: string]: string } = {
    Sun: "Su",
    Mon: "M",
    Tue: "T",
    Wed: "W",
    Thu: "Th",
    Fri: "F",
    Sat: "Sa",
  };

  const days: string[] = [];
  const options = { weekday: "short" } as Intl.DateTimeFormatOptions;
  const formatter = new Intl.DateTimeFormat("en-US", options);

  for (let i = 1; i <= 5; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    const shortName = formatter.format(date);
    days.push(customDayNames[shortName]);
  }

  return days;
};
