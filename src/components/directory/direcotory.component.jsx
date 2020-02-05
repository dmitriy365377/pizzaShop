import React from 'react'
import { useState } from 'react'
import MenuItem from '../menu-items/menu-item.component'
import './direcotory.styles.scss'

const sections = [
    {
        title: 'wings',
        imageUrl: 'https://hip2save.com/wp-content/uploads/2019/12/Buffalo-Wild-Wings-Boneless-Wings.jpg?resize=1024%2C538&strip=all',
        id: 1,
        linkUrl: 'hats'
    },
    {
        title: 'sandwich',
        imageUrl: 'https://st-gdefon.gallery.world/wallpapers_original/588122_gallery.world.jpg?9b30f88865a6ee068aa988b568d8492f',
        id: 2,
        linkUrl: ''
    },
    {
        title: 'drinks',
        imageUrl: 'https://bluelinepizza.com/wp/wp-content/uploads/2018/06/blueLinePizza-41-web-1400x935.jpg',
        id: 3,
        linkUrl:  ''
    },
    {
        title: 'sides',
        imageUrl: 'https://img5.goodfon.ru/wallpaper/nbig/4/b9/fried-potatoes-french-fries-yellow.jpg',
        size: 'large',
        id: 4,
        linkUrl: '' 
    },
    {
        title: 'pizza',
        imageUrl: 'https://www.cicis.com/wp-content/uploads/2020/01/garlicparmesan_websitecarousel_3200x1992-1-scaled.jpg',
        size: 'large',
        id: 5,
        linkUrl: '' 
    },
]


const Direcroty = ( ) => {
    const [state, setState] = useState({ sections })
    return (
        <div className='directory-menu'>
            {
               
                state.sections.map(section => (
                    <MenuItem key={section.id}
                        title={section.title}
                        imageUrl={section.imageUrl}
                        size={section.size} 
                        linkUrl={section.linkUrl}
                    /> 
                ))
            } 
        </div>
    )
}



export default Direcroty