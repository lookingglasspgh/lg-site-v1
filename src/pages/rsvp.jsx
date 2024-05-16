import { useEffect } from 'react';

const eventbritePage = 'https://www.eventbrite.com/e/looking-glass-beta-launch-tickets-907270980927?aff=oddtdtcreator';

const rsvpPage = () => {
  useEffect(() => {
    window.location.replace(eventbritePage);
  }, []);
};

export default rsvpPage;
