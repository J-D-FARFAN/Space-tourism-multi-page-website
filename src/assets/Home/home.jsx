import { NavBarHomePage } from "./Navbar/navBar";
import "./home.css";

export function HomePage() {
  return (
    <>
      <header className="content__headerHomePage--and--navbarHomePage">
        <NavBarHomePage />
      </header>

      <main className="content__introductionHomePage">
        <article className="bx-introductionHomePage">
          <span className="travel">SO, YOU WANT TO TRAVEL TO</span>
          <h1 className="title">SPACE</h1>
          <p className="txt">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>

        <article className="bx-btnExploreMore">Explore</article>
      </main>
    </>
  );
}
