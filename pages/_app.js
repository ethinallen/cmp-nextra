import { GoogleAnalytics } from "nextjs-google-analytics";

const App = ({ Component, pageProps }) => {
  return (
    <>
        <Head>
          <meta property="og:title" content="Critical Mass Princeton" />
          <meta property="og:description" content="Join the community bicycle ride in Princeton. Open to all!" />
          <meta property="og:image" content="https://cdn.andrewemery.io/bkg.png" />
          <meta property="og:url" content="https://cmp.bike" />
          <meta property="og:type" content="website" />
          {/* Other head elements */}
        </Head>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
};

export default App;