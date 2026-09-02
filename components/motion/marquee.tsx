type MarqueeProps = {
  items: readonly string[];
};

function Row({ items, hidden }: { items: readonly string[]; hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden}
      className="flex shrink-0 items-center animate-marquee"
    >
      {items.map((item) => (
        // El separador y el espacio viven dentro del <li>: así la lista no
        // depende de `gap` y las dos copias miden exactamente lo mismo.
        <li
          key={item}
          className="flex items-center gap-10 pr-10 font-mono text-sm tracking-widest whitespace-nowrap text-muted uppercase"
        >
          {item}
          <span className="text-accent/60">/</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Cinta infinita en CSS puro: dos listas idénticas desplazándose -100%.
 * Cuando la primera sale de cuadro, la segunda ocupa su lugar y el ciclo
 * reinicia sin salto visible. Sin JS, sin coste por frame.
 */
export function Marquee({ items }: MarqueeProps) {
  return (
    <div className="mask-fade-x relative flex overflow-hidden border-y border-line/60 py-5">
      <Row items={items} />
      <Row items={items} hidden />
    </div>
  );
}
