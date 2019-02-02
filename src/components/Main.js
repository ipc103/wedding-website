import React from 'react'
import PropTypes from 'prop-types'

import details from '../images/melissas-wedding.jpg'
import travel from '../images/sleeping-bear-dunes.jpg'
import annArborFun from '../images/ianandmeg2.jpg'
import registry from '../images/megiantorch.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
        <article id="details" className={`${this.props.article === 'details' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Details</h2>
          <span className="image main"><img src={details} alt="" /></span>
          <p>
            The Wedding will take place June 22nd, 2019 at Island Park, Ann Arbor, Michigan. Reception to follow at The Gandy Dancer Restaurant, a short distance from the park.
          </p>
          <p>
            For those arriving in town Friday, we'll meet for drinks at The Bar at Braun Ct., 327 Braun Ct., Ann Arbor.
          </p>
          {close}
        </article>

        <article id="travel" className={`${this.props.article === 'travel' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Travel</h2>
          <span className="image main"><img src={travel} alt="" /></span>

          <p>
            Ann Arbor is about a ~4.5 hour drive from the Western Pennsylvania area, and less than a 30 minute drive from Detroit Metro Airport (DTW). DTW is a convienient Delta hub with many flights in and out daily. Uber and Lyft are both readily available in the area.
          </p>

          <p>A block of rooms is set aside at two hotels:</p>
          <ul>
            <li>
              The Graduate Ann Arbor: $199 per night; located right downtown; ~10 minute walk to/from the reception; ~20 minute walk or ~5 minute drive to/from the ceremony
            </li>
            <li>
              The Hilton Garden Inn: $139 per night; located a bit out of town, near the mall; ~15 minute drive to/from the ceremony and reception
            </li>
          </ul>

          <p>
            There are also a number of bed and breakfasts in the area, as well as a good number of AirBnB options. Below is a map with the recommended area to search for an AirBnB -- the outlined area should be free of student housing and also walkable to downtown. In general, anywhere west of Main Street on the North side of town, but south of the river is a good bet.
          </p>
          {close}
        </article>

        <article id="ann-arbor-fun" className={`${this.props.article === 'ann-arbor-fun' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Ann Arbor Fun</h2>
          <span className="image main"><img src={annArborFun} alt="" /></span>
          <p>Ann Arbor is a great town with lots of things to do and see during the Summer. Below are a few of our favorites:</p>
          <ul>
            <li>The Arboretum - great for nature walks</li>
            <li>The Downtown Area - great for shopping, bars, and restaurants</li>
            <li>HOMES - local brewery with good Korean food and snacks</li>
            <li>Arbor Brewing Company - another great local brewery with pub snacks</li>
          </ul>
          {close}
        </article>

        <article id="registry" className={`${this.props.article === 'registry' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Registry</h2>
          <p>Registry Coming Soon...</p>

          <span className="image main"><img src={registry} alt="" /></span>
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
