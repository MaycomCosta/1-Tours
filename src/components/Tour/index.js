import React, { useState } from 'react'

import * as C from './styles'

const Tour = ({ id, image, info, name, price, removeTour}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <C.SingleTour>
      <img src={image} alt={name} />
      <C.Footer>
        <C.TourInfo>
          <h4>{name}</h4>
          <C.TourPrice>${price}</C.TourPrice>
        </C.TourInfo>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <C.ReadMore onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </C.ReadMore>
        </p>
        <C.DeleteButton onClick={() => removeTour(id)}>
          Not interested
        </C.DeleteButton>
      </C.Footer>
    </C.SingleTour>
  )
}

export default Tour