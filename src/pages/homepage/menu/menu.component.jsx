import React, { useState } from 'react'
import MENU_DATA from './menu.data'
import PreviewItem from '../preview-items/preview-item.component'

const MenuPage = (props) => {
    const [state, setState] = useState({MENU_DATA})   
    return (<div className='shop-page'>
        {
            state.MENU_DATA.map(item => (
                <PreviewItem
                    key={item.id}
                    title={item.title}
                    routeName={item.routeName}
                    items={item.items}
                />
            ))
        }
    </div>
    )
}

export default MenuPage