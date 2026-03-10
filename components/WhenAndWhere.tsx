import { useState, useEffect } from 'react';

const WhenAndWhere = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const getLastFriday = (year, month) => {
      const lastDay = new Date(year, month + 1, 0);
      const day = lastDay.getDay();
      const lastFriday = lastDay.getDate() - ((day + 2) % 7);
      return new Date(year, month, lastFriday);
    };

    const today = new Date();
    let lastFriday = getLastFriday(today.getFullYear(), today.getMonth());

    if (lastFriday < today) {
      const nextMonth = today.getMonth() + 1;
      const year = nextMonth > 11 ? today.getFullYear() + 1 : today.getFullYear();
      lastFriday = getLastFriday(year, nextMonth % 12);
    }

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    setDate(lastFriday.toLocaleDateString(undefined, options));
  }, []);

  return (
    <div>
      <h2>When and Where</h2>
      <p>We meet on the <u>last Friday of every month</u> at 6:30 PM and roll out at 7:00 PM.</p>
      <h3><p><b>Next meeting date:</b> <u>{date}</u></p></h3>
      <p>Location: <a href="https://maps.google.com/?q=Hinds+Plaza,+Princeton,+NJ" target="_blank" rel="noopener noreferrer">Hinds Plaza</a></p>
      <p>Or open in:
        <a href="https://maps.google.com/?q=Hinds+Plaza,+Princeton,+NJ" target="_blank" rel="noopener noreferrer">Google Maps</a> |
        <a href="https://www.bing.com/maps?q=Hinds+Plaza,+Princeton,+NJ" target="_blank" rel="noopener noreferrer">Bing Maps</a> |
        <a href="https://www.openstreetmap.org/search?query=Hinds%20Plaza%2C%20Princeton%2C%20NJ" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>
      </p>
    </div>
  );
};

export default WhenAndWhere;
