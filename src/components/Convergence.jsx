import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Convergence() {
  const heading = useScrollAnimation({
    clipStart: 0.25, clipEnd: 1.0,
    letterSpacingStart: 0, letterSpacingEnd: 0.12,
    scaleStart: 0.95, scaleEnd: 1,
    shiftStart: 20, shiftEnd: 0,
    rangeVH: 1.3
  });

  return (
    <section id="convergence">
      <div className="section-content">
        <h2 {...heading}>Everything Connects.</h2>
      </div>
    </section>
  );
}
