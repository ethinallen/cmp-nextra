import { useEffect } from 'react';

const InstagramEmbed = ({ url }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <blockquote className="instagram-media" data-instgrm-permalink={url} data-instgrm-version="12">
      <a href={url}></a>
    </blockquote>
  );
};

export default InstagramEmbed;