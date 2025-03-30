export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 md:px-12 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 md:gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="flex space-x-4 justify-center mb-8">
              <a 
                href="https://www.instagram.com/projeto_uai.py/" 
                className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Instagram"
                target="_blank"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://github.com/uaipy" 
                className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="GitHub"
                target="_blank"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
             
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <h3 className="font-medium">Seções</h3>
              <ul className="flex flex-row gap-4">
                <li><a href="#methodology" className="text-muted-foreground hover:text-foreground transition-colors">Metodologias</a></li>
                <li><a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testemunhas</a></li>
                <li><a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">Perguntas Frequentes</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t flex flex-col items-center">
          <p className="text-sm text-muted-foreground mb-4">
            © {currentYear} UAI.py. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};