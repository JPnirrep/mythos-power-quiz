interface PedimentProps {
  title: string;
}

export function Pediment({ title }: PedimentProps) {
  return (
    <div className="relative w-full mb-6">
      {/* Triangular pediment */}
      <div 
        className="mx-auto w-3/4 h-12 bg-gradient-to-b from-temple-marble to-temple-stone relative"
        style={{
          clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)',
          filter: 'drop-shadow(0 4px 8px hsl(var(--temple-shadow) / 0.2))'
        }}
      >
        {/* Ornamental details */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-temple-gold/20 to-transparent"
          style={{ clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)' }}
        />
      </div>
      
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-center mt-4 text-temple-gold">
        {title}
      </h1>
    </div>
  );
}