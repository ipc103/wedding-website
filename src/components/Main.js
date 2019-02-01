import React from 'react'
import PropTypes from 'prop-types'

import melissas_wedding from '../images/melissas-wedding.jpg'
import sleeping_bear_dunes from '../images/sleeping-bear-dunes.jpg'
import rooftop from '../images/rooftop.jpg'
import engaged from '../images/engaged.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="details" className={`${this.props.article === 'details' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Details</h2>
          <span className="image main"><img src={melissas_wedding} alt="" /></span>
          <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
          {close}
        </article>

        <article id="travel" className={`${this.props.article === 'travel' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Travel</h2>
          <span className="image main"><img src={sleeping_bear_dunes} alt="" /></span>

          <p>A block of rooms is set aside at two hotels:
            <ul>
              <li>
                The Graduate Ann Arbor: $199 per night; located right downtown; ~10 minute walk to/from the reception; ~20 minute walk or ~5 minute drive to/from the ceremony
              </li>
              <li>
                The Hilton Garden Inn: $139 per night; located a bit out of town, near the mall; ~15 minute drive to/from the ceremony and reception
              </li>
            </ul>
          </p>

          <p>
            There are also a number of bed and breakfasts in the area, as well as a good number of AirBnB options. Below is a map with the recommended area to search for an AirBnB -- the outlined area should be free of student housing and also walkable to downtown.
          </p>
          {close}
        </article>

        <article id="ann-arbor-fun" className={`${this.props.article === 'ann-arbor-fun' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Ann Arbor Fun</h2>
          <span className="image main"><img src={rooftop} alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="registry" className={`${this.props.article === 'registry' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Registry</h2>
          <p>Registry Coming Soon...</p>

          <span className="image main"><img src={engaged} alt="" /></span>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main