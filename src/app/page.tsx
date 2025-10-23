import Image from "next/image";

export default function Home() {
  const name = "Luis";
  return (
    <div className="mt-8">
      <header
        className="page-header"
        id="inicio"
        aria-label={`Titulo principal de la pagina: hola, soy ${name}`}
      >
        <h1 className="page-header__text text-blue-600">hola, soy {name}</h1>
      </header>

      <nav
        className="nav-bar"
        aria-label="barra de navegacion: sobre mi - proyectos y certificados - redes sociales"
      >
        <div className="nav-bar__text-container">
          <a className="nav-bar__text" href="#inicio">
            Inicio
          </a>
          <a className="nav-bar__text" href="#sobre-mi">
            Sobre mi
          </a>
          <a className="nav-bar__text" href="#proyectos-y-cert">
            Proyectos y Certificados
          </a>
          <a className="nav-bar__text" href="#redes-sociales">
            Redes Sociales
          </a>
        </div>
      </nav>
      <main>
        <section className="info-block" id="sobre-mi">
          <h2 className="info-block__title">Acerca de Mi</h2>
          <p className="info-block__paragraph bg-gray-100 p-4 rounded-lg">
            Actualmente estudio Ingeniería de Sistemas y tengo 18 años. <br />
            Me interesa aprender desarrollo frontend, por eso estoy tomando este
            curso.
            <br />
            En mi tiempo libre me gusta ver series, películas, jugar fútbol y
            más.
          </p>
        </section>
        <section className="info-block info-block--feature-horizontal">
          <article className="info-card" aria-label="Comidas que me gustan">
            <h3 className="info-card__title">
              Algunas de las comidas que me gustan
            </h3>
            <div className="info-block info-block--feature-img">
              <img
                className="img"
                src="https://uk.ooni.com/cdn/shop/articles/20220211142645-margherita-9920_e41233d5-dcec-461c-b07e-03245f031dfe.jpg?v=1737105431&width=1080"
                alt="pizza"
              />
              <img
                className="img"
                src="https://biteswithbri.com/wp-content/uploads/2021/02/HamburgerPattyRecipe04.jpg"
                alt="hamburguesa"
              />
              <img
                className="img"
                src="https://i.pinimg.com/736x/a1/bc/32/a1bc32e5c4a8ae7f128da91aa8f4537b.jpg"
                alt="ceviche"
              />
            </div>
          </article>

          <article className="info-card" aria-label="Mis hobbies">
            <h3 className="info-card__title">Mis hobbies</h3>
            <div className="info-block info-block--feature-img">
              <img
                className="img"
                src="https://cdna.artstation.com/p/assets/images/images/051/783/186/large/touati-fellouh-021.jpg?1658166568"
                alt="peliculas"
              />
              <img
                className="img"
                src="https://yt3.googleusercontent.com/W2KDWzfiuml1yad1e9utJiOJfb3YLimLTBqcZfUFKeiQmjdBfDAO-vr0WK9LRCMM6WTyK5BSo-0=s900-c-k-c0x00ffffff-no-rj"
                alt="netflix"
              />
              <img
                className="img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Football_in_Bloomington%2C_Indiana%2C_1995.jpg/1200px-Football_in_Bloomington%2C_Indiana%2C_1995.jpg"
                alt="futbol"
              />
            </div>
          </article>
        </section>

        <section
          className="estudio"
          id="proyectos-y-cert"
          aria-label="seccion de estudio"
        >
          <article className="estudioArticle" aria-label="Mis proyectos">
            <h3 className="subtitle">Mis Proyectos</h3>

            <section className="proyectos">
              <article className="proyectoN">
                <img />
                <h4>Proyecto1</h4>
              </article>
              <article className="proyectoN">
                <img />
                <h4>Proyecto2</h4>
              </article>
              <article className="proyectoN">
                <img />
                <h4>Proyecto3</h4>
              </article>
              <article className="proyectoN">
                <img />
                <h4>Proyecto4</h4>
              </article>
            </section>
          </article>
          <div className="separador"></div>
          <article
            className="estudioArticle"
            aria-label="mis certificados de ACM"
          >
            <h3 className="subtitle">Mis certificados de ACM↗</h3>
            <div>
              <a
                href=" https://www.linkedin.com/in/luisz-lopezs-32946b347/overlay/1755223004665/single-media-viewer/?profileId=ACoAAFa-UhEBI7GjIdytxFVLag78f3ly5O75uUE"
                target="_blank"
              >
                <img
                  className="img"
                  src="svgsLogos/python-127-svgrepo-com.svg"
                  alt="Python"
                />
              </a>
              <img
                className="img"
                src="svgsLogos/wait-time-svgrepo-com.svg"
                alt="Comming Soon"
              />
            </div>
          </article>
        </section>
        <section
          className="redes-sociales"
          id="redes-sociales"
          aria-label="seccion de redes sociales"
        >
          <h3 className="subtitle">Mis redes sociales↗</h3>
          <div className="logos-redes">
            <a
              href="https://www.linkedin.com/in/luisz-lopezs-32946b347/"
              target="_blank"
            >
              <img
                className="img"
                src="svgsLogos/linkedin-svgrepo-com.svg"
                alt="linkedin"
              />
            </a>
            <a href="https://www.github.com/luiszlopezs" target="_blank">
              <img
                className="img"
                src="svgsLogos/github-142-svgrepo-com.svg"
                alt="github"
              />
            </a>
            <a href="https://www.instagram.com/justhailen" target="_blank">
              <img
                className="img"
                src="svgsLogos/instagram-svgrepo-com.svg"
                alt="Instagram"
              />
            </a>
          </div>
        </section>
      </main>
      <footer aria-label="Footer - copyright">
        <p> 2025 AboutMeLuis</p>
        <p>Any questions? Dont hesitate to contact me.</p>
      </footer>
    </div>
  );
}
