import Album from '../Album/album';
import PropTypes from 'prop-types';
import './albumList.scss'

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};

function AlbumList({albumList}) {
    return (
        <ul className='album-list'>
            {albumList.map(album => (
                <li key={album.id}>
                    <Album album={album} />
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;