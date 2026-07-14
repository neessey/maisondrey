interface LogoProps {
  className?: string;
  variant?: "circle" | "monogram" | "text" | "combined";
  size?: number;
  color?: string;
}

export default function Logo({
  className = "",
  variant = "combined",
  size = 80,
}: LogoProps) {
  const logoSrc = "/assets/logo.png";

  if (variant === "combined") {
    return (
      <div className={`flex items-center gap-2.5 md:gap-4 ${className}`}>
        <img
          src={logoSrc}
          alt="La Maison dreyy"
          width={size}
          height={size}
          className="shrink-0 rounded-full object-contain"
          
        />

        <div className="flex flex-col items-start justify-center">
          <span className="font-serif text-sm sm:text-lg md:text-2xl tracking-[0.12em] md:tracking-[0.15em] uppercase text-gold-accent font-medium leading-none">
            LA MAISON dreyy
          </span>

          <div className="flex items-center gap-1.5 md:gap-2 w-full mt-0.5 md:mt-1">
            <div className="h-px bg-champagne w-4 md:w-6"></div>

            <svg
              width="6"
              height="6"
              viewBox="0 0 10 10"
              fill="none"
              className="md:w-2 md:h-2"
            >
              <path
                d="M 0 5 Q 5 5 5 0 Q 5 5 10 5 Q 5 5 5 10 Q 5 5 0 5 Z"
                fill="#D8B26A"
              />
            </svg>

            <div className="h-px bg-champagne flex-1"></div>
          </div>

          <span className="font-sans text-[6px] sm:text-[8px] md:text-[9px] tracking-[0.15em] md:tracking-[0.25em] text-sage uppercase mt-0.5 md:mt-1 font-semibold leading-none">
            Maison de Réception & Gastronomie
          </span>
        </div>
      </div>
    );
  }

  if (variant === "text") {
    return (
      <div
        className={`flex flex-col items-center justify-center text-center ${className}`}
      >
        <span className="font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase text-gold-accent">
          LA MAISON dreyy
        </span>

        <div className="flex items-center gap-3 w-full max-w-[150px] mt-1">
          <div className="h-px bg-champagne flex-1"></div>

          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M 0 5 Q 5 5 5 0 Q 5 5 10 5 Q 5 5 5 10 Q 5 5 0 5 Z"
              fill="#D8B26A"
            />
          </svg>

          <div className="h-px bg-champagne flex-1"></div>
        </div>

        <span className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] text-sage uppercase mt-1 font-medium">
           Gastronomie Événementielle
        </span>
      </div>
    );
  }

  return (
    <img
      src={logoSrc}
      alt="La Maison dreyy"
      width={size}
      height={size}
      className={`object-contain rounded-full ${className}`}
    />
  );
}