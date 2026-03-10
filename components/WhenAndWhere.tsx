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

  const linkStyle = {
    color: '#3b82f6',
    textDecoration: 'underline',
    textUnderlineOffset: '2px',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>When and Where</h2>

      <p>We meet on the <u>last Friday of every month</u> at 6:30 PM and roll out at 7:00 PM.</p>

      <p style={{ fontSize: '1.125rem' }}>
        <b>Next meeting date:</b>{' '}
        <u>{date}</u>
      </p>

      <p>
        📍 Location:{' '}
        <a href="https://maps.google.com/?q=Hinds+Plaza,+Princeton,+NJ" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          Hinds Plaza
        </a>
      </p>

      <p>
        Open in:{' '}
        <a href="https://maps.google.com/?q=Hinds+Plaza,+Princeton,+NJ" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          Google Maps
        </a>
        {' · '}
        <a href="https://www.bing.com/maps?q=Hinds+Plaza,+Princeton,+NJ" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          Bing Maps
        </a>
        {' · '}
        <a href="https://www.openstreetmap.org/search?query=Hinds%20Plaza%2C%20Princeton%2C%20NJ" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          OpenStreetMap
        </a>
      </p>
    </div>
  );
};

export default WhenAndWhere;
