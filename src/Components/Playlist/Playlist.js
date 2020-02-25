import React from 'react';
import './Playlist.css';
import TrackList from'../TrackList/TrackList'

class Playlist extends React.Component{
    render() {
        return(
            <div className="Playlist">
                <input value="New Playlist"/>
                <TrackList tracks={this.state.playlistTracks}
                           onRemove={this.props.playlistTracks}
                           isRemoval={true}/>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist;