export default function Home() {
  return (
    <>
      <header>
        <div className="logo-container">
          <span className="bee-icon">🐝</span>
          <h1>PAPERBEE BOOKS</h1>
          <p className="tagline">Where Billion Minds Become Brilliant Minds</p>
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
            <h2>a place where stories gently guide children into the world of language, imagination, and learning.</h2>
          </div>

          <p>
            We create books that feel warm, simple, and joyful. Each page invites children to read with
            confidence, think with curiosity, and learn without pressure. Our books are loved by young
            readers and trusted by parents and educators alike.
          </p>

          <p style={{ marginTop: '2rem' }}>
            At PAPERBEE BOOKS, we publish beautifully crafted children’s literature and thoughtfully
            designed educational books in multiple languages because every child deserves to learn in a
            language that feels familiar and comforting.
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
              <span className="language-tag">and more...</span>
            </div>
          </div>

          <p style={{ marginTop: '2rem', fontStyle: 'italic', fontWeight: 'bold' }}>
            From first words to lifelong reading habits, PAPERBEE BOOKS grows with every child.
          </p>
        </div>
      </section>

      <section id="special">
        <div className="container">
          <div className="section-header">
            <div className="section-icon">✨</div>
            <h2>What Makes Our Books Special</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--teal-accent)', fontWeight: 'bold' }}>SPARKWORD METHOD</p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ marginBottom: '2rem' }}>
              Every PAPERBEE BOOKS title is created using a unique creative approach that carefully
              blends storytelling with learning. Words are introduced naturally, ideas flow smoothly,
              and concepts stay clear and memorable.
            </p>

            <p>This approach helps readers:</p>
            <ul style={{ listStyle: 'none', margin: '1rem 0 2rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>✅ Understand faster</li>
              <li style={{ marginBottom: '0.5rem' }}>✅ Remember longer</li>
              <li style={{ marginBottom: '0.5rem' }}>✅ Enjoy reading without fear or difficulty</li>
            </ul>

            <p style={{ fontWeight: '600' }}>
              Our books feel easy to read, yet powerful in impact turning reading into a joyful habit rather than a task.
            </p>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="section-header">
            <div className="section-icon">📚</div>
            <h2>About Us</h2>
            <p style={{ fontSize: '1.2rem' }}>Inspiring young minds, one book at a time.</p>
          </div>

          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
            PAPERBEE BOOKS is a global children’s publishing company committed to nurturing young
            readers through meaningful stories and purposeful learning materials.
          </p>

          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
            We believe books should do more than teach — they should comfort, inspire, and stay with
            a child long after the last page is turned.
          </p>

          <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div className="card">
              <div className="card-icon">👶</div>
              <h3>Children</h3>
              <p>Discovering language and imagination.</p>
            </div>
            <div className="card">
              <div className="card-icon">🏡</div>
              <h3>Parents</h3>
              <p>Supporting learning at home.</p>
            </div>
            <div className="card">
              <div className="card-icon">🍎</div>
              <h3>Educators</h3>
              <p>Shaping young minds.</p>
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
              To become a trusted global publisher of multilingual children’s books that inspire
              imagination, strengthen language skills, and celebrate cultural diversity.
            </p>

            <hr style={{ margin: '2rem auto', width: '50%', border: '0', borderTop: '1px solid #ddd' }} />

            <h3 style={{ color: 'var(--teal-accent)' }}>Our Mission</h3>
            <ul className="mission-list">
              <li>Create joyful and meaningful reading experiences</li>
              <li>Publish high-quality books in multiple languages</li>
              <li>Support educators and parents with effective learning tools</li>
              <li>Make reading simple, natural, and enjoyable</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="publish">
        <div className="container">
          <div className="section-header">
            <div className="section-icon">📖</div>
            <h2>What We Publish</h2>
          </div>

          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">✨</div>
              <h3>Storybooks</h3>
              <p>Folktales, original stories, fantasy adventures, and gentle moral tales for different age groups.</p>
            </div>
            <div className="card">
              <div className="card-icon">🎓</div>
              <h3>Educational Books</h3>
              <ul>
                <li>Language learning & grammar</li>
                <li>Bilingual and multilingual books</li>
                <li>Alphabet, numbers & writing practice</li>
                <li>Art, creativity & activity books</li>
                <li>Early general knowledge</li>
              </ul>
            </div>
          </div>

          <p style={{ textAlign: 'center', marginTop: '3rem', fontSize: '1.2rem', fontStyle: 'italic' }}>
            Every book is thoughtfully structured to balance fun, clarity, and learning.
          </p>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="section-header">
            <div className="section-icon">🤝</div>
            <h2>Contact Us</h2>
          </div>

          <div className="contact-container">
            <h2 style={{ marginBottom: '2rem', color: 'var(--primary-yellow)' }}>We’d love to hear from you!</h2>

            <div className="contact-details">
              <p>📬 <strong>Email:</strong> <a href="mailto:paperbeebook@gmail.com">paperbeebook@gmail.com</a></p>
              <p style={{ marginTop: '1rem' }}>
                📍 <strong>Headquarters:</strong><br />
                PAPERBEE BOOKS<br />
                Near Scout Bhavan, Anangoor Vidyanagar P.O<br />
                Kasaragod, Kerala, India – 671123
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2025 Paperbee Books. All Rights Reserved. | 🐝 Where Billion Minds Become Brilliant Minds</p>
        </div>
      </footer>
    </>
  );
}