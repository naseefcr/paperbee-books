export default function Home() {
  return (
    <>
      <header>
        <div className="logo-container">
          <span className="bee-icon">🐝</span>
          <h1>PAPERBEE BOOKS</h1>
          <p className="tagline">MYPAPERBEE.COM</p>
        </div>
      </header>

      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#vision">Vision</a></li>
          <li><a href="#publish">Publications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home">
        <div className="container hero-content">
          <div className="section-header">
            <div className="section-icon">🌟</div>
            <p className="hero-lead">Welcome to PAPERBEE BOOKS</p>
            <h2>Bringing stories, creativity, and learning to children everywhere.</h2>
          </div>

          <p>
            At Paperbee Books, we believe that books open doors to imagination, curiosity, and understanding. We
            publish vibrant children&apos;s literature and high-quality educational materials in a wide range of
            languages—because every child deserves access to joyful learning in their mother tongue.
          </p>

          <div style={{ marginTop: '3rem' }}>
            <h3>Languages we publish in:</h3>
            <div className="languages-grid">
              <span className="language-tag">English</span>
              <span className="language-tag">Arabic</span>
              <span className="language-tag">Japanese</span>
              <span className="language-tag">Indonesian</span>
              <span className="language-tag">Hindi</span>
              <span className="language-tag">Malayalam</span>
              <span className="language-tag">Kannada</span>
              <span className="language-tag">Tamil</span>
              <span className="language-tag">Urdu</span>
            </div>
          </div>

          <p style={{ marginTop: '2rem' }}>
            Explore our collection of storybooks, poems, language workbooks, art activity
            books, and early learning resources for kids around the globe.
          </p>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="section-header">
            <div className="section-icon">📚</div>
            <h2>About Us</h2>
            <p style={{ fontSize: '1.2rem' }}>Inspiring young minds, one book at a time.</p>
          </div>

          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
            PAPERBEE BOOKS is a global publishing
            company dedicated to nurturing the next generation through reading. Our mission is to make learning
            delightful and accessible, regardless of geography or language.
          </p>

          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">📖</div>
              <h3>Children’s Literature</h3>
              <p>Imaginative storybooks, enchanting poems, and culturally rich tales.</p>
            </div>
            <div className="card">
              <div className="card-icon">✏️</div>
              <h3>Educational Materials</h3>
              <p>
                Language learning books, grammar guides, writing workbooks, vocabulary builders, and art books.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="vision">
        <div className="container">
          <div className="section-header">
            <div className="section-icon">🌍</div>
            <h2>Our Vision & Mission</h2>
          </div>

          <div className="mission-box">
            <h3 style={{ color: 'var(--teal-accent)' }}>Our Vision</h3>
            <p>
              To become a leading global publisher of multilingual children&apos;s books that spark imagination,
              encourage learning, and celebrate cultural diversity.
            </p>

            <hr style={{ margin: '2rem auto', width: '50%', border: '0', borderTop: '1px solid #ddd' }} />

            <h3 style={{ color: 'var(--teal-accent)' }}>Our Mission</h3>
            <ul className="mission-list">
              <li>Promote literacy and creativity through engaging content.</li>
              <li>Publish in multiple languages to reach children worldwide.</li>
              <li>Empower educators and parents with meaningful, effective learning tools.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="publish">
        <div className="container">
          <div className="section-header">
            <div className="section-icon">✨</div>
            <h2>What We Publish</h2>
          </div>

          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">📖</div>
              <h3>Storybooks</h3>
              <p>Folktales, original stories, fantasy, and moral tales for various age groups.</p>
            </div>
            <div className="card">
              <div className="card-icon">📝</div>
              <h3>Poetry Collections</h3>
              <p>Simple, rhythmic, and meaningful poems that children love.</p>
            </div>
            <div className="card">
              <div className="card-icon">🧠</div>
              <h3>Educational Books</h3>
              <ul>
                <li>Language learning & grammar</li>
                <li>Bilingual books</li>
                <li>Alphabet, numbers & writing practice</li>
                <li>Art & creativity books</li>
                <li>General knowledge for early learners</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="section-header">
            <div className="section-icon">🤝</div>
            <h2>Join Us</h2>
          </div>

          <div className="contact-container">
            <p>Are you an author, illustrator, or educator with a passion for children’s content?</p>
            <h2>We’d love to hear from you!</h2>
            <p>PAPERBEE BOOKS collaborates with creative minds across the globe.</p>

            <div className="contact-details">
              <p>📬 <strong>Email:</strong> <a href="mailto:paperbeebook@gmail.com">paperbeebook@gmail.com</a></p>
              <p style={{ marginTop: '1rem' }}>
                📍 <strong>Headquarters:</strong><br />
                Paperbee books, near Scout bhavan, Anangoor Vidyanagar po,<br /> kasaragod, kerala, india 671123
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2025 Paperbee Books. All Rights Reserved. | 🐝 Inspiring Young Minds</p>
        </div>
      </footer>
    </>
  );
}