import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-heart-o"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Ian and Megan Are Getting Married</h1>
                <p>June 22nd, 2019. Ann Arbor, MI</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('details')}}>Details</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('travel')}}>Travel</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('ann-arbor-fun')}}>Ann Arbor Fun</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('registry')}}>Registry</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
