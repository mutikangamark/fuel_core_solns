const badges = [
  { name: "24/7 Support", icon: "🕐" },
  { name: "Licensed & Insured", icon: "✓" },
  { name: "100% Satisfaction", icon: "⭐" },
  { name: "Fast Response", icon: "⚡" },
];

export default function TrustBadges() {
  return (
    <section className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <span className="text-2xl">{badge.icon}</span>
              <span className="font-medium">{badge.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
