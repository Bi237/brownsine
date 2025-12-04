class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          background-color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #3b82f6;
          text-decoration: none;
          display: flex;
          align-items: center;
        }
        .logo-icon {
          margin-right: 0.5rem;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-link {
          color: #4b5563;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
          position: relative;
        }
        .nav-link:hover {
          color: #3b82f6;
        }
        .nav-link.active {
          color: #3b82f6;
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #3b82f6;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background-color: white;
            padding: 1rem 2rem;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
          }
          .nav-links.open {
            display: flex;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <div class="navbar-container">
        <a href="/" class="logo">
          <i data-feather="compass" class="logo-icon"></i>
          Road & Rulers
        </a>
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        <div class="nav-links">
          <a href="#about" class="nav-link">About</a>
          <a href="#requirements" class="nav-link">Requirements</a>
          <a href="#testimonials" class="nav-link">Team Voices</a>
          <a href="#apply" class="nav-link">Apply</a>
          <a href="#contact" class="nav-link">Contact</a>
        </div>
      </div>
    `;

    // Initialize feather icons
    const featherScript = document.createElement('script');
    featherScript.src = 'https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js';
    this.shadowRoot.appendChild(featherScript);
    featherScript.onload = () => {
      feather.replace();
      
      // Mobile menu toggle
      const menuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
      const navLinks = this.shadowRoot.querySelector('.nav-links');
      
      menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        const icon = menuBtn.querySelector('i');
        if (navLinks.classList.contains('open')) {
          icon.setAttribute('data-feather', 'x');
        } else {
          icon.setAttribute('data-feather', 'menu');
        }
        feather.replace();
      });
    };
  }
}

customElements.define('custom-navbar', CustomNavbar);