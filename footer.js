class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: #1e293b;
          color: white;
          padding: 3rem 0;
        }
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .footer-logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
        }
        .footer-logo-icon {
          margin-right: 0.5rem;
        }
        .footer-description {
          color: #94a3b8;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        .footer-heading {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: white;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-link {
          margin-bottom: 0.75rem;
        }
        .footer-link a {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-link a:hover {
          color: white;
        }
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #334155;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s;
        }
        .social-link:hover {
          background-color: #3b82f6;
        }
        .footer-bottom {
          border-top: 1px solid #334155;
          padding-top: 2rem;
          text-align: center;
          color: #94a3b8;
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <div class="footer-container">
        <div class="footer-content">
          <div>
            <div class="footer-logo">
              <i data-feather="compass" class="footer-logo-icon"></i>
              Road & Rulers
            </div>
            <p class="footer-description">
              Building the infrastructure of tomorrow with innovation, collaboration, and excellence.
            </p>
            <div class="social-links">
              <a href="#" class="social-link">
                <i data-feather="linkedin"></i>
              </a>
              <a href="#" class="social-link">
                <i data-feather="twitter"></i>
              </a>
              <a href="#" class="social-link">
                <i data-feather="facebook"></i>
              </a>
              <a href="#" class="social-link">
                <i data-feather="instagram"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 class="footer-heading">Quick Links</h3>
            <ul class="footer-links">
              <li class="footer-link"><a href="#about">About Us</a></li>
              <li class="footer-link"><a href="#requirements">Requirements</a></li>
              <li class="footer-link"><a href="#testimonials">Testimonials</a></li>
              <li class="footer-link"><a href="#apply">Apply Now</a></li>
              <li class="footer-link"><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 class="footer-heading">Positions</h3>
            <ul class="footer-links">
              <li class="footer-link"><a href="#">Civil Engineers</a></li>
              <li class="footer-link"><a href="#">Urban Planners</a></li>
              <li class="footer-link"><a href="#">Project Managers</a></li>
              <li class="footer-link"><a href="#">Surveyors</a></li>
              <li class="footer-link"><a href="#">Internships</a></li>
            </ul>
          </div>
          <div>
            <h3 class="footer-heading">Contact</h3>
            <ul class="footer-links">
              <li class="footer-link">
                <a href="mailto:info@roadandrulers.com">
                  <i data-feather="mail" class="mr-2"></i> info@roadandrulers.com
                </a>
              </li>
              <li class="footer-link">
                <a href="tel:+15551234567">
                  <i data-feather="phone" class="mr-2"></i> (555) 123-4567
                </a>
              </li>
              <li class="footer-link">
                <a href="#">
                  <i data-feather="map-pin" class="mr-2"></i> 123 Infrastructure Way
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Road & Rulers. All rights reserved.</p>
        </div>
      </div>
    `;

    // Initialize feather icons
    const featherScript = document.createElement('script');
    featherScript.src = 'https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js';
    this.shadowRoot.appendChild(featherScript);
    featherScript.onload = () => {
      feather.replace();
    };
  }
}

customElements.define('custom-footer', CustomFooter);