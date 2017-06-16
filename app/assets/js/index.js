import React from 'react'
import ReactDOM from 'react-dom'

// Import the App
import IGluco from './IGluco'

if (document.getElementById('IG_App')) {
  ReactDOM.render(<IGluco />, document.getElementById('IG_App'));
}
