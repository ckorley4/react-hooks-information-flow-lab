import React from 'react'

export default function Header({ isDarkMode, onDarkModeClick }) {
  function modeChange() {
    onDarkModeClick()
  }
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={modeChange}>{isDarkMode ? 'Dark' : 'Light'} Mode</button>
    </header>
  )
}
