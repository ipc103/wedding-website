import React from 'react'
import PropTypes from 'prop-types'
import Img from "gatsby-image"

import CloseButton from './CloseButton'

function Main(props) {
  return (
    <div ref={props.setWrapperRef} id="main" style={props.timeout ? {display: 'flex'} : {display: 'none'}}>
      <article id="details" className={`${props.article === 'details' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">Details</h2>
        <span className="image main">
          <Img title="Details"
              alt="Megan and Ian Dancing"
              fluid={props.images.details.childImageSharp.fluid}
            />
        </span>
        <p>
          The ceremony will take place at <a href="https://www.google.com/maps/place/Island+Park/@42.2903145,-83.7302252,15z/data=!4m5!3m4!1s0x0:0x3d8b796576b54f1!8m2!3d42.2903145!4d-83.7302252" target="_blank">Island Park</a> in Ann Arbor at 3:00pm. The reception will follow at 5:00pm at <a href="https://www.google.com/maps/place/Gandy+Dancer/@42.2872135,-83.7416809,15z/data=!4m2!3m1!1s0x0:0xec6603a85df213c0?ved=2ahUKEwjQ5pfnm57gAhUSooMKHRPZD24Q_BIwCnoECAUQCA" target="_blank">The Gandy Dancer</a> -- a short distance from the park.
        </p>
        <p>
          For those arriving in town on Friday, please join us for drinks! (More details to come.)
        </p>
        <p>
          We also invite everyone to join us for brunch on Sunday. (More details to come.)
        </p>
        <CloseButton onClose={props.onCloseArticle} />
      </article>

      <article id="travel" className={`${props.article === 'travel' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">Travel</h2>
        <span className="image main">
          <Img title="Travel"
              alt="Sleeping Bear Dunes"
              fluid={props.images.travel.childImageSharp.fluid}
            />
        </span>

        <h3>Getting To Ann Arbor</h3>

        <p>
          Ann Arbor is about a ~4.5 hour drive from the Western Pennsylvania area, and less than a 30 minute drive from Detroit Metro Airport (DTW). DTW is a convenient Delta hub with many flights in and out daily. Uber and Lyft are both readily available in the area.
        </p>

        <h3>Accommodations</h3>

        <p>A block of rooms is set aside at two hotels:</p>
        <ul>
          <li>
            <a href="https://www.graduatehotels.com/ann-arbor/" target="_blank">The Graduate Ann Arbor</a>: The Graduate is located right downtown and is about a 10-minute walk to/from the reception and a 20-minute walk or 5-minute drive to/from the ceremony. A group rate is available for $199 per night. To book, use this <a href="https://gc.synxis.com/rez.aspx?Hotel=68631&Chain=21643&arrive=6/21/2019&depart=6/23/2019&adult=1&child=0&group=190621NEST" target="_blank">link</a> or call 734-769-2200.

          </li>
          <li>
            <a href="https://hiltongardeninn3.hilton.com/en/hotels/michigan/hilton-garden-inn-ann-arbor-ARBGIGI/index.html" target="_blank">The Hilton Garden Inn</a>: The Hilton is located a bit out of town, near the mall - it’s about a 15-minute drive to/from the ceremony and reception. A group rate is available for $139 per night. To book, use this <a href="https://hiltongardeninn.hilton.com/en/gi/groups/personalized/A/ARBGIGI-NESCAN-20190621/index.jhtml?WT.mc_id=POG" target="_blank">link</a> or call 734.327.6400.
          </li>
        </ul>

        <p>
          There are also a number of bed and breakfasts in the area, as well as a good number of AirBnB options. We recommend looking for rentals in neighborhoods like Kerrytown, Old West Side, Water Hill, and Allmendinger Heights. Don’t hesitate to reach out to us if you want more advice!
        </p>
        <Img title="Wedding Map"
            alt="Wedding Map"
            fluid={props.images.map.childImageSharp.fluid}
          />
        <CloseButton onClose={props.onCloseArticle} />
      </article>

      <article id="ann-arbor-fun" className={`${props.article === 'ann-arbor-fun' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">Ann Arbor Fun</h2>
        <span className="image main">
          <Img title="Ann Arbor Fun"
              alt="Rooftop Picture"
              fluid={props.images.annArborFun.childImageSharp.fluid}
            />
        </span>
        <p>Ann Arbor is a great town with lots of things to do and see during the Summer. Below are a few of our favorites:</p>
        <ul>
          <li>The Arboretum - great for nature walks</li>
          <li>The Downtown Area - great for shopping, bars, and restaurants</li>
          <li>HOMES - local brewery with good Korean food and snacks</li>
          <li>Arbor Brewing Company - another great local brewery with pub snacks</li>
          <li>Zingermans - the best sandwiches in Michigan!</li>
          <li>Argo Park - rent canoes, tubes, and kayaks for a trip down the Huron River</li>
        </ul>
        <p>If you plan on spending more time in Michigan, “Up North” is a favorite place. Traverse City, the Sleeping Bear Dunes, and beautiful lakes are just a 4-hour drive from Ann Arbor.</p>
        <CloseButton onClose={props.onCloseArticle} />
      </article>

      <article id="registry" className={`${props.article === 'registry' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">Registry</h2>
        <p>Registered at <a href="https://www.crateandbarrel.com/gift-registry/megan-nestor-and-ian-candy/r5946531" target="_blank">Crate and Barrel</a> and <a href="https://www.anthropologie.com/registry/listing?registryId=ZTRJZMMXMTK1" target="_blank">Anthropologie</a></p>

        <span className="image main">
        <Img title="Registry"
            alt="Torch Lake"
            fluid={props.images.registry.childImageSharp.fluid}
          />
        </span>
        <CloseButton onClose={props.onCloseArticle} />
      </article>

    </div>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
  images: PropTypes.object.isRequired
}

export default Main
