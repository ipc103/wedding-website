import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Main from './Main'

const pageQuery = graphql`
  query {
    details: file(relativePath: { eq: "melissas-wedding.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
    }
    travel: file(relativePath: { eq: "sleeping-bear-dunes.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
    }
    annArborFun: file(relativePath: { eq: "ianandmeg2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
    }
    registry: file(relativePath: { eq: "megiantorch.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
    }
    map: file(relativePath: { eq: "weddingmap.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
    }
  }
`

export default props => (
  <StaticQuery
    query={pageQuery}
    render={ data => <Main images={data} {...props} /> }
  />
)
