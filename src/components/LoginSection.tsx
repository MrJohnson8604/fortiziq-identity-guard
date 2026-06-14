import { LogIn, Shield } from "lucide-react";

const LOGIN_URL = "https://www.identityprotection-services.com/Login.aspx?ID=JWsYxCTa8+ui/RTaN3TMEN5jaSHXRv89aZJcXwg+25E=";

const LoginSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 relative">
      <div className="container max-w-xl mx-auto">
        <div className="card-tech rounded-3xl p-8 sm:p-10 text-center border border-primary/20">
          <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mx-auto mb-5">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
            Already a Member?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-7 max-w-sm mx-auto leading-relaxed">
            Access your identity protection dashboard, review alerts, and manage your account securely.
          </p>
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold bg-primary text-primary-foreground text-sm sm:text-base hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all"
          >
            <LogIn className="h-4 w-4" />
            Log In to Member Portal
          </a>
          <p className="text-xs text-muted-foreground mt-5 flex items-center justify-center gap-1.5">
            <Shield className="h-3 w-3" />
            Secure, encrypted connection
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
