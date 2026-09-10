import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Crossing() {
  const heading = useScrollAnimation({
    clipStart: 0.3, clipEnd: 1.0,
    letterSpacingStart: -0.03, letterSpacingEnd: 0.14,
    scaleStart: 0.94, scaleEnd: 1,
    shiftStart: 25, shiftEnd: 0,
    rangeVH: 1.4
  });

  return (
    <section id="crossing">
      <div className="section-content">
        <h2 {...heading}>ONE SYSTEM.<br />INFINITE MOTION.</h2>
      </div>
    </section>
  );
}
