import useScrollAnimation from '../hooks/useScrollAnimation';
import { useNavigate } from '../router/Router';

export default function Final() {
  const navigate = useNavigate();

  const heading = useScrollAnimation({
    clipStart: 0.25, clipEnd: 1.0,
    letterSpacingStart: -0.01, letterSpacingEnd: 0.12,
    scaleStart: 0.96, scaleEnd: 1,
    shiftStart: 10, shiftEnd: 0,
    rangeVH: 1.2
  });
  const cta = useScrollAnimation({
    clipStart: 0.15, clipEnd: 1.0,
    letterSpacingStart: 0, letterSpacingEnd: 0.08,
    scaleStart: 0.97, scaleEnd: 1,
    shiftStart: -10, shiftEnd: 0,
    rangeVH: 1.1
  });

  const handleStartExploring = (e) => {
    e.preventDefault();
    navigate('/start');
  };

  return (
    <section id="final">
      <div className="section-content">
        <h2 {...heading}>ENTER THE FLOW</h2>
        <a
          href="#start"
          className="cta-button"
          onClick={handleStartExploring}
          {...cta}
        >
          Start Exploring
        </a>
      </div>
    </section>
  );
}
