// Code EyesOnMe Component Here
import React from 'react'
function EyesOnMe() {
    return(
        <button onFocus={focus} onBlur={blur}>Eyes on me</button>
    )
}
function blur(){
    console.log('Hey! Eyes on me!')
}
function focus() {
    console.log('Good!')
}
export default EyesOnMe