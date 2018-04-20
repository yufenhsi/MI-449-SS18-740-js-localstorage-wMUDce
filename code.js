
var themeChangeButton = document.getElementById('theme-button')
var night = document.body.setAttribute('class', 'nightTheme')
var updateTheme = function () {
  night.body.setAttribute('class', 'nightTheme')
}
themeChangeButton.addEventListener('click', updateTheme)

// when browsing sites, window alert and the page show visited time
var timesVisited = window.localStorage.getItem('on-load-counter')
if (timesVisited === null) {
  timesVisited = 0
}

timesVisited++
window.localStorage.setItem('on-load-counter', timesVisited)
window.alert('Hi, you have visited this site ' + timesVisited + ' times.')

document.getElementById('counter').textContent = timesVisited
