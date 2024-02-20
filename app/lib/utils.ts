export const formatDateToLocal = (
  strDate: string,
  locale: string = "en-US"
) => {
  const date = new Date(strDate);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};
