import React from 'react';
import moment from 'moment';
import { GiMusicalNotes } from 'react-icons/gi';
const Songs = ({ songs }) => {
    return (
        <div className='songs'>
            {songs.map((song) => {
                const {
                    result: {
                        id: songId,
                        header_image_url: image,
                        title,
                        artist_names: artist,
                        release_date_for_display: date,
                        url: lyrics,
                    },
                } = song;
                return (
                    <div key={songId} className='song'>
                        <img src={image} alt='' className='song-img' />

                        <div className='song-info'>
                            <div>
                                <h6>{title}</h6>
                                <p className='song-artist'>{artist}</p>
                                <p className='song-date'>
                                    {moment(date).format('YYYY')}
                                </p>
                            </div>
                            <div>
                                <a href={lyrics} className='song-lyrics'>
                                    <GiMusicalNotes className='icon' />
                                </a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Songs;
