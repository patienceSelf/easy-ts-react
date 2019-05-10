import * as React from 'react'
import * as ReactDom from 'react-dom'

const render = () => {
  ReactDom.render(
    <div>123</div>, 
    document.querySelector('#app')
  )
}
render()