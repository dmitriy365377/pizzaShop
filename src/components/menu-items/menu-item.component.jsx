import React from 'react'
import { withRouter } from 'react-router-dom'
import './menu-item.styles.scss'

const MenuItem = (props) => (  
    <div 
    className={`${props.size} menu-item`} 
    > 
        <div
            className='background-image'
            style={{
                backgroundImage: `url(${props.imageUrl})`
            }}
        />
        <div className='content'
        onClick={() => props.history.push('/menu')}
        > 
            <h1 className='title'>{props.title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div> 
)
// props.history.push('/checkout')
// onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}
 
export default withRouter(MenuItem)