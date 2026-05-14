class PortfolioFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="w-full py-12 bg-[#0b0e14] border-t border-white/5">
      <div
        class="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <div class="text-lg font-bold text-white tracking-widest">
          LUISA.DEV
        </div>
        <div class="flex gap-12">
          <a
            class="font-['Manrope'] text-[10px] tracking-[0.2em] font-medium text-slate-500 hover:text-[#00dbe9] transition-colors uppercase"
            href="https://github.com/Luisa-Maria"
            >GITHUB</a
          >
          <a
            class="font-['Manrope'] text-[10px] tracking-[0.2em] font-medium text-slate-500 hover:text-[#00dbe9] transition-colors uppercase"
            href="https://www.linkedin.com/in/luisa-maria-montalvo-giraldo-12b425161"
            >LINKEDIN</a
          >
        </div>
        <div
          class="font-['Manrope'] text-[10px] tracking-[0.2em] font-medium text-slate-500 uppercase"
        >
          © 2026 Luisa Montalvo. Todos los derechos reservados.
        </div>
      </div>
    </footer>
    `;
  }
}

customElements.define('portfolio-footer', PortfolioFooter);