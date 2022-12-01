import React from 'react'
import { useParams } from 'react-router-dom'

const Hello = (props) => {
  // const { fontColor, backgroundColor} = props;
  const {wordNumber,fontColor,backgroundColor}= useParams();
  return (
    
    <div> 
            {
            (!isNaN(wordNumber))
                    ? <p> The number is: {wordNumber} </p>
                    : <p style = {{color: fontColor, backgroundColor: backgroundColor }}> The word is: {wordNumber} </p>
            }
        </div>
  )
}

export default Hello ;