// change background color, based on day-theme or night-theme
var themeChangeButton = document.getElementById('theme-button')
var themeSelected = window.localStorage.getItem('theme-display')
document.body.setAttribute('class', themeSelected)
var updateTheme = function () {
  var bodyClass = document.body.getAttribute('class')
  if (bodyClass === 'dayTheme') {
    document.body.setAttribute('class', 'nightTheme')
    window.localStorage.setItem('theme-display', 'nightTheme')
  } else {
    document.body.setAttribute('class', 'dayTheme')
    window.localStorage.setItem('theme-display', 'dayTheme')
  }
}
themeChangeButton.addEventListener('click', updateTheme)

// when browsing sites, window alert and the page will show visited time
var timesVisited = window.localStorage.getItem('on-load-counter')
if (timesVisited === null) {
  timesVisited = 0
}

timesVisited++
window.localStorage.setItem('on-load-counter', timesVisited)
window.alert('Hi, you have visited this site ' + timesVisited + ' times.')

document.getElementById('counter').textContent = 'Hey, you have visited this site ' + timesVisited + ' times.'
