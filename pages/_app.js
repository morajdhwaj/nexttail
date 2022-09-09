import NavBar from "../Components/NavBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-slate-900">
    <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
