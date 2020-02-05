import React from 'react'
import './preview-item.styles.scss'

import CollectionPreview from '../../../components/collection-items/collection-item.component'

const PreviewItem = ({ title, items }) => (
    <div className='preview-item'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                    .filter((item, idx) => idx < 4)
                    .map((item) => (
                        <CollectionPreview
                            key={item.id}
                            name={item.name}
                            imageUrl={item.imageUrl}
                            price={item.price}
                            item={item}
                        />
                    ))
            }
        </div>
    </div>
)



export default PreviewItem