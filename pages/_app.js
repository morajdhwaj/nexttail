import NavBar from "../Components/NavBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className=" bg-[#0d1117] font-inter  ">
      <NavBar />
      <div className=" max-w-6xl mx-auto px-5 ">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
