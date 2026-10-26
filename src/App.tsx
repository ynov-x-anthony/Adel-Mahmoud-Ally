import './App.css'

function App() {
  return (
    <div className="page">
      {/* L'en-tête principal et la navigation */}
      <header className="header">
        <div className="logo">DevBlog</div>
        <nav className="nav">
          <a href="/" className="nav-link">Accueil</a>
          <a href="/articles" className="nav-link">Articles</a>
          <a href="/contact" className="nav-link">Contact</a>
        </nav>
      </header>

      {/* Le contenu principal de la page */}
      <main className="main">
        {/* Un article indépendant */}
        <article className="article">
          <h1 className="title">Pourquoi apprendre TypeScript en 2026</h1>
          <p className="meta">Publié le 3 mars 2026</p>
          
          <h2 className="small-title">Un typage qui rassure</h2>
          <p>TypeScript attrape une classe entière de bugs avant même d'exécuter le code...</p>
          
          <h2 className="small-title">Un écosystème mature</h2>
          <p>La quasi-totalité des librairies JS fournissent désormais leurs types...</p>
        </article>

        {/* Action sur la page = vrai bouton */}
        <button className="like-btn" onClick={() => alert("Merci pour le like !")}>
          👍 J'aime cet article
        </button>

        {/* Section de newsletter avec un formulaire accessible */}
        <section className="newsletter">
          <h2 className="small-title">Reste informé</h2>
          
          {/* Le label est relié à l'input via htmlFor et id */}
          <label htmlFor="email-input">Ton adresse e-mail</label>
          <input id="email-input" type="email" placeholder="ton@email.fr" />
          
          <button className="submit-btn" onClick={() => alert('Inscription envoyée')}>
            S'inscrire
          </button>
        </section>
      </main>

      {/* Le pied de page */}
      <footer className="footer">© 2026 DevBlog</footer>
    </div>
  )
}

export default App