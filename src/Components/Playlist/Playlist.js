import React from 'react';
import './Playlist.css';
import '../TrackList/TracKList';

export class Playlist extends React.Component {
    render() {
        <div className="Playlist">
             <input defaultValue= {'New Playlist'} />
                <Tracklist />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>        


    }



};