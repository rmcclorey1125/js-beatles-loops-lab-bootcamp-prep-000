function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var jFacts = []
  let i = 0
  while (i < facts.length) {
    jFacts.push(`${facts[i]}!!!`)
    i++
  }
  return jFacts
}

function iLoveTheBeatles(num) {
  var love = []
  do {
    love.push("I love the Beatles!")
    num++
  } while (num < 15)
  return love
}