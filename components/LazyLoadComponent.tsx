import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';

const LazyLoadComponent = ({ page }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [Content, setContent] = useState(null);

  useEffect(() => {
    if (inView) {
      // Dynamically import the MDX content
      const loadContent = async () => {
        const module = await import(`../pages/${page}.mdx`);
        setContent(() => module.default);
      };
      loadContent();
    }
  }, [inView, page]);

  return (
    <div ref={ref}>
      {Content ? <Content /> : <p>Loading...</p>}
    </div>
  );
};

export default LazyLoadComponent;