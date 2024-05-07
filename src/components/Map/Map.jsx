import "./Map.styles.scss";

export function Map() {
  return (
    <div className="map">
      <iframe
        className="maps"
        title="map"
        src="https://www.google.com/maps/d/u/0/embed?mid=1R5IogP9SBb8ZUZlXJ0D3-fNipFwy724&ehbc=2E312F&noprof=1"></iframe>
    </div>
  );
}
