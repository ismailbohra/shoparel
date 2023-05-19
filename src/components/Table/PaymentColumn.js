import React from 'react'

function PaymentColumn(cellValues){
    const color=(cellValues.value=="Pending")?"#008080":"#FFA500"
    return(
      <div style={{color:color}}>
        {cellValues.value}
      </div>
    )
  }

export default PaymentColumn