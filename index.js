function myAccFunc() {
  var x = document.getElementById('demoAcc')
  if (x.className.indexOf('w3-show') == -1) {
    x.className += ' w3-show'
  } else {
    x.className = x.className.replace(' w3-show', '')
  }
}
document.getElementById('myBtn').click()

var request = new XMLHttpRequest()
request.open('GET', 'data.json', false)
request.send(null)
var mydata = JSON.parse(request.responseText)
var t = document.querySelectorAll('.card-title')
var t1 = document.querySelectorAll('.p1')
var t2 = document.querySelectorAll('.p2')
var t3 = document.querySelectorAll('.p3')
for (i = 0; i < mydata.data.length; i++) {
  t[i].innerHTML = 'Batch Name ' + mydata.data[i].batch
}
for (i = 0; i < mydata.data.length; i++) {
  t1[i].innerHTML = ' ' + mydata.data[i].class
}
for (i = 0; i < mydata.data.length; i++) {
  t2[i].innerHTML = ' ' + mydata.data[i].strength + ' Students '
}
for (i = 0; i < mydata.data.length; i++) {
  t3[i].innerHTML = mydata.data[i].date
}
console.log(mydata.data[0].batch)

const Utils = {
  showMore: function (element) {
    element.addEventListener('click', (event) => {
      const linkText = event.target.textContent.toLowerCase()
      event.preventDefault()
      var x = element.parentNode.querySelector('.content')
      if (linkText == 'show more') {
        element.textContent = 'Show less'
        x.classList.remove('excerpt-hidden')
        x.classList.add('excerpt-visible')
      } else {
        element.textContent = 'Show more'
        x.classList.remove('excerpt-visible')
        x.classList.add('excerpt-hidden')
      }
    })
  },
}

const ExcerptWidget = {
  showMore: function (showMoreLinksTarget, excerptTarget) {
    const showMoreLinks = document.querySelectorAll(showMoreLinksTarget)

    showMoreLinks.forEach(function (link) {
      const excerpt = link.previousElementSibling.querySelector(excerptTarget)
      Utils.showMore(link, excerpt)
    })
  },
}

ExcerptWidget.showMore('.js-show-more', '.js-excerpt')
