import { useEffect } from 'react';

const StravaEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://strava-embeds.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Check if the script is still a child of the body before removing it
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="strava-embed-placeholder" data-embed-type="route" data-embed-id="3247572318299820942" data-style="standard" data-map-hash="13.25/40.35601/-74.65197" data-from-embed="true"></div>
  );
};

export default StravaEmbed;