interface BaseProps {
  description: string;
}

export function Base({ description }: BaseProps) {
  return (
    <div className="w-full mt-6">
      {/* Temple base */}
      <div className="w-full h-4 bg-gradient-to-b from-temple-stone to-temple-gold/40 border-t-2 border-temple-gold/50 rounded-t-lg shadow-md" />
      <div className="w-full h-2 bg-temple-stone/80 border-t border-temple-gold/30" />
      
      {/* Description */}
      <p className="text-center text-muted-foreground mt-4 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
}