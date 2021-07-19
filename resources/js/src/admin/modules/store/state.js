/*=========================================================================================
  File Name: state.js
  Description: Vuex Store - state
==========================================================================================*/


// /////////////////////////////////////////////
// Helper
// /////////////////////////////////////////////

// Check if device is touch device
// This is used to remove perfect scrollbar from touch devices
// Using Dynamic components
const is_touch_device = () => {
  const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ')
  const mq = function (query) {
    return window.matchMedia(query).matches
  }

  if ('ontouchstart' in window || window.DocumentTouch) {
    return true
  }

  // include the 'heartz' as a way to have a non matching MQ to help terminate the join
  // https://git.io/vznFH
  const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join(
    ''
  )
  return mq(query)
}

// /////////////////////////////////////////////
// State
// /////////////////////////////////////////////

const state = {
  bodyOverlay: false,
  isVerticalNavMenuActive: true,
  is_touch_device: is_touch_device(),
  language: localStorage.getItem('language') || 'en',
  scrollY: 0,
  verticalNavMenuWidth: 'default',
  windowWidth: null
}

export default state
