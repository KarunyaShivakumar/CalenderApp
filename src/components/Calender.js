import "./Calender.css";


function Calender(props) {
  const InputDate = props.date.split("/");
  const formattedDate = new Date(InputDate[2], InputDate[1] - 1, InputDate[0]);

  const month = formattedDate.getMonth(); // read the current month
  const year = formattedDate.getFullYear(); // read the current year
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthList[month];

  const FirstDate = new Date(year, month, "01");
  const firstDay = FirstDate.getDay(); //to get first day of present month

  formattedDate.setMonth(month + 1, 0); // Set to next month and one day backward.
  const lastDate = formattedDate.getDate(); // to get last date of current month

  const renderDates = () => {
    var day = 1; // day variable

    let values = [];
    for (let i = 0; i <= 41; i++) {
      if (i % 7 === 0) {
        values.push(<tr></tr>);
      } // to start a new line after week.
      if (i >= firstDay && day <= lastDate) {
        const className =
          InputDate[0] == day && InputDate[1] - 1 == month
            ? `date-highlight`
            : `date-${day}`;
        values.push(<td className={className}>{day}</td>);
        day = day + 1;
      } else if (i <= 7) {
        values.push(<td> </td>);
      } //for Blank dates.
    }

    return values;
  };

  return (
    <div className="wrapper">
      <p>
        {monthName} {year}
      </p>
      <div className="calender-wrapper">
        <table className="calender-table">
          <tr>
            <th>Su</th>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
          </tr>
          {renderDates()}
        </table>
      </div>
    </div>
  );
}

export default Calender;
