class PortfolioHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="fixed top-0 w-full z-50 bg-[#0b0e14]/40 backdrop-blur-xl border-b border-white/5 shadow-[0_0_20px_rgba(255,177,196,0.15)]">
        <div class="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <a href="index.html" class="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#FF007F] to-[#9D00FF]">
            LUISA.DEV
          </a>
          <div class="hidden md:flex items-center gap-10">
            <a class="nav-link font-['Space_Grotesk'] uppercase tracking-widest text-xs text-slate-400 hover:text-white transition-all hover:scale-105" href="projects.html">Proyectos</a>
            <a class="nav-link font-['Space_Grotesk'] uppercase tracking-widest text-xs text-slate-400 hover:text-white transition-all hover:scale-105" href="about.html">Sobre Mi</a>
            <a class="nav-link font-['Space_Grotesk'] uppercase tracking-widest text-xs text-slate-400 hover:text-white transition-all hover:scale-105" href="skills.html">Tecnologías</a>
            <a class="nav-link font-['Space_Grotesk'] uppercase tracking-widest text-xs text-slate-400 hover:text-white transition-all hover:scale-105" href="index.html#contact">Contacto</a>
          </div>
          <div class="flex items-center gap-3">
            <a href="resumen.pdf" class="bg-gradient-to-r from-[#FF007F] to-[#9D00FF] px-6 py-2 rounded-full text-white font-['Space_Grotesk'] uppercase tracking-widest text-[10px] font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(255,0,127,0.4)]">Resume</a>
            <button id="mobile-menu-btn" class="md:hidden p-2 text-white" aria-label="Toggle menu">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
        <div id="mobile-menu" class="hidden bg-[#0b0e14]/95 backdrop-blur-xl border-t border-white/5 px-8 py-6 flex-col gap-5">
          <a class="font-['Space_Grotesk'] uppercase tracking-widest text-xs text-slate-400 hover:text-white transition-all" href="projects.html">Proyectos</a>
          <a class="font-['Space_Grotesk'] uppercase tracking-widest text-xs text-slate-400 hover:text-white transition-all" href="about.html">Sobre Mi</a>
          <a class="font-['Space_Grotesk'] uppercase tracking-widest text-xs text-slate-400 hover:text-white transition-all" href="skills.html">Tecnologías</a>
          <a class="font-['Space_Grotesk'] uppercase tracking-widest text-xs text-slate-400 hover:text-white transition-all" href="index.html#contact">Contacto</a>
        </div>
      </nav>
    `;

    const btn = this.querySelector('#mobile-menu-btn');
    const menu = this.querySelector('#mobile-menu');
    btn.addEventListener('click', () => {
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('flex');
      } else {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
      }
    });
  }
}

customElements.define('portfolio-header', PortfolioHeader);
