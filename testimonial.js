class CustomTestimonial extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const name = this.getAttribute('name') || '';
    const role = this.getAttribute('role') || '';
    const image = this.getAttribute('image') || '';
    const quote = this.getAttribute('quote') || '';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .testimonial-card {
          background-color: white;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          padding: 1.5rem;
          height: 100%;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .testimonial-content {
          margin-bottom: 1.5rem;
          color: #4b5563;
          line-height: 1.6;
          position: relative;
        }
        .testimonial-content::before {
          content: '"';
          font-size: 4rem;
          color: #e2e8f0;
          position: absolute;
          top: -1.5rem;
          left: -0.5rem;
          z-index: 0;
        }
        .testimonial-text {
          position: relative;
          z-index: 1;
        }
        .testimonial-author {
          display: flex;
          align-items: center;
        }
        .author-image {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          object-fit: cover;
          margin-right: 1rem;
        }
        .author-info {
          display: flex;
          flex-direction: column;
        }
        .author-name {
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.25rem;
        }
        .author-role {
          color: #64748b;
          font-size: 0.875rem;
        }
      </style>
      <div class="testimonial-card animate-on-scroll">
        <div class="testimonial-content">
          <p class="testimonial-text">${quote}</p>
        </div>
        <div class="testimonial-author">
          <img src="${image}" alt="${name}" class="author-image">
          <div class="author-info">
            <span class="author-name">${name}</span>
            <span class="author-role">${role}</span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('custom-testimonial', CustomTestimonial);