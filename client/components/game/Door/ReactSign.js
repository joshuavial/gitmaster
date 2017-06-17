import Door from './Door'

import {updateLog} from '../../../actions/currentLog'


export default class ReactSign extends Door {
  constructor (dispatch) {
    super (dispatch)
    this.img = 'images/items/ReactSign.png'
    this.msg = 'To React Room'
    this.name = 'reactSign'
    this.roomStyle = {
      width: '680px',
      height: '450px',
      position: 'absolute',
      top: '3%',
      left: '0%',
      zIndex: 5
  }
}

  mouseClick() {
    console.log('Surely I am the best looking sign you have ever seen right?')
    }

  mouseOver() {

  }

  mouseOff() {

  }
}