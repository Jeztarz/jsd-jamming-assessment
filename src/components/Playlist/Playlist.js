import './Playlist.css';

function Playlist() {
  return (
    <div className="Playlist">
      <input value="New Playlist"/>
  {/* <!-- Add a TrackList component --> */}
      <button class="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
