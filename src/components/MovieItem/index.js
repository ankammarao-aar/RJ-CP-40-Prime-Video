import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  const closeButton = <IoMdClose />

  return (
    <div>
      <Popup
        modal
        trigger={
          <button type="button" className="thumbnail-button">
            <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
          </button>
        }
      >
        {close => (
          <div className="popup-card">
            <button
              type="button"
              data-testid="closeButton"
              className="close-button"
              onClick={() => close()}
            >
              {closeButton}
            </button>
            <div className="player-card">
              <ReactPlayer url={videoUrl} />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
