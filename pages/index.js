import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Yamaan Bakir</title>
        <link rel="icon" href="/profile pic.jpg" />
      </Head>

      <main>
        <h1 className="title">
          Hi, I'm <a href="">Yamaan Bakir</a>
        </h1>

        <p className="description">
          Mechatronics student, self driven learner, robotics enthusiast!
        </p>

        <div className="grid">
          <a href="/Resumes" className="card">
            <h3>Resumes &rarr;</h3>
            <p>
              Interested in my experience? Take a look at my past experienecs
              across the fields of software, electrical and mechanical
              engineering!
            </p>
          </a>

          <a href="" className="card">
            <h3>Projects &rarr;</h3>
            <p>
              Take a look at my list of projects! I've made plenty of things
              from apps, to PCB's to robotic actuators. <br />
              <br />{" "}
            </p>
          </a>

          <a href="" className="card">
            <h3>Resources &rarr;</h3>
            <p>🚧 under construction, coming soon!🚧</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://github.com/yamaan93"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.png" alt="Vercel" className="logo" />
          &nbsp; yamaan93
        </a>
        <a
          href="https://www.linkedin.com/in/yamaan-bakir/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin.png" alt="Vercel" className="logo" />
          &nbsp; yamaan-bakir
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 5em;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 2em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
