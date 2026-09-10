import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Hero() {
  const label = useScrollAnimation({
    clipStart: 0.2, clipEnd: 1.0,
    letterSpacingStart: -0.02, letterSpacingEnd: 0.10,
    scaleStart: 0.96, scaleEnd: 1,
    shiftStart: -20, shiftEnd: 0,
    rangeVH: 1.2
  });

  const heading = useScrollAnimation({
    clipStart: 0.3, clipEnd: 1.0,
    letterSpacingStart: -0.03, letterSpacingEnd: 0.15,
    scaleStart: 0.94, scaleEnd: 1,
    shiftStart: -30, shiftEnd: 0,
    rangeVH: 1.5
  });

  const subtext = useScrollAnimation({
    clipStart: 0.15, clipEnd: 1.0,
    letterSpacingStart: -0.01, letterSpacingEnd: 0.08,
    scaleStart: 0.97, scaleEnd: 1,
    shiftStart: -15, shiftEnd: 0,
    rangeVH: 1.3
  });

  const cta = useScrollAnimation({
    clipStart: 0.2, clipEnd: 1.0,
    letterSpacingStart: 0, letterSpacingEnd: 0.08,
    scaleStart: 0.96, scaleEnd: 1,
    shiftStart: 15, shiftEnd: 0,
    rangeVH: 1.1
  });

  return (
    <section id="hero">
      <div className="section-content">
        <div className="label" {...label}>T A N T R A V E D A</div>
        <h1 {...heading}>Shape the Flow.</h1>
        <div className="subtext" {...subtext}>
          Explore the Infinite. Learn Without Limits.
        </div>
        <a href="#explore" className="cta-button" {...cta}>EXPLORE SYSTEM</a>
      </div>
    </section>
  );
}
