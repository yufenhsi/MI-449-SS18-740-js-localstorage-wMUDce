document.getElementById('theme-button').addEventListener('click', function () {
  document.body.classList.toggle('night-theme')
})

var themeButtonEnabled = parseInt(window.localStorage.getItem('theme-button'))

if (themeButtonEnabled === null) {
  themeButtonEnabled = 0
} else {
  themeButtonEnabled = parseInt(themeButtonEnabled)
}

var timesVisited = window.localStorage.getItem('on-load-counter')
var visitedReminder = document.getElementById('counter')

if (timesVisited === null) {
  timesVisited = 0
}

timesVisited++
window.localStorage.setItem('on-load-counter', timesVisited)
window.alert('Hi, you have visit ' + timesVisited + ' times.')
