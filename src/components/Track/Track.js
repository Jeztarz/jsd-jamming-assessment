import './Track.css';

function Track(props) {
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.title}</h3>
        <p>{props.track.artist} | {props.track.album}</p>
      </div>
      <button className="Track-action" onClick={() => props.handleTrackAction(props.track)}>
      {props.trackActionCharacter}
         </button>
    </div>
  );
}

export default Track;
