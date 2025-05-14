
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-beige relative">
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            Станите у одбрану правде
          </h2>
          
          <p className="text-lg text-navy-dark mb-8">
            Ако сте сведок корупције, жртва мобинга или непотизма у јавним институцијама, 
            не морате се борити сами. Наш тим је ту да вам помогне да заштитите своја права 
            и допринесете праведнијем друштву.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/kontakt" className="btn-primary">
              Контактирајте нас
            </Link>
            <Link to="/usluge?tab=prijava" className="btn-primary">
              Пријавите случај
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
