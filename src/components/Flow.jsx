import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Flow() {
  const heading = useScrollAnimation({
    clipStart: 0.2, clipEnd: 1.0,
    letterSpacingStart: 0, letterSpacingEnd: 0.10,
    scaleStart: 0.95, scaleEnd: 1,
    shiftStart: -20, shiftEnd: 0,
    rangeVH: 1.2
  });

  return (
    <section id="flow">
      <div className="section-content">
        <h2 {...heading}>Meet The Future..</h2>
      </div>
    </section>
  );
}
