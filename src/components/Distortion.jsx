import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Distortion() {
  const heading = useScrollAnimation({
    clipStart: 0.2, clipEnd: 1.0,
    letterSpacingStart: -0.02, letterSpacingEnd: 0.10,
    scaleStart: 0.96, scaleEnd: 1,
    shiftStart: -15, shiftEnd: 0,
    rangeVH: 1.3
  });

  return (
    <section id="distortion">
      <div className="section-content">
        <h2 {...heading}>Beyond Knowledge.</h2>
      </div>
    </section>
  );
}
