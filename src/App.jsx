import Hero from "../src/Comp/Hero";
import Banner from "./Comp/Banner";
import Faq from "./Comp/Faq";
import FreeTrial from "./Comp/FreeTrial";
import Unlock from "./Comp/Unlock";
import Visitor from "./Comp/Visitor";
import Know from "./Comp/know";

function App() {
  return (
    <>
      <Hero></Hero>
      <Banner />
      <Visitor />
      <Unlock></Unlock>
      <Know></Know>
      <FreeTrial />
      <Faq />
    </>
  );
}

export default App;
