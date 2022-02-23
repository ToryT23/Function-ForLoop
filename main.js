const findLocation = (bookobj) => {
    const location = bookobj.location
    return location
}

const findPrize = (bookobj) => {
    const prize = bookobj.prize
    return prize
}
const books = [
    { id: 1, prize: "A Brief History of Time", location: "United States" },
    { id: 2, prize: "Anna Karenina", location: "Russia" },
    { id: 3, prize: "Travelling with Djinns", location: "Sudan" },
    { id: 4, prize: "Ferdydurke", location: "Poland" }
]

// for loop is used to (iterate) through books(which is an array of objects)

 for (const book of books) {
    const location = findLocation(book)
    const prize = findPrize(book)
   // console.log(prize)
    if (book.location === "United States") {
     console.log(prize)
    }
 }
 
 const basketballGame = {

 }

 const ball = (game) => {
  return  game.ball = "29.5 Ball"
 }

 const homeTeam= (game) => {
  return  game.HomeTeam = "La Lakers"
 }

 const awayTeam = (game) => {
     return  game.AwayTeam = "Golden State"
  
 }

 const awayTeamScore = (game) => {

   return game.AwayTeamScore = 89
 }

 const homeTeamScore = (game) => {
     return game.HomeTeamScore = 100
 }

const winner = (game) => {
    if (game.AwayTeamScore > game.HomeTeamScore) {
         game.winner = game.AwayTeam
    } else if (game.AwayTeamScore < game.HomeTeamScore) {
         game.winner = game.HomeTeam
    }
    return game.winner
}

 let liveGame = basketballGame

 ball(liveGame)
 homeTeam(liveGame)
 awayTeam(liveGame)
 awayTeamScore(liveGame)
 homeTeamScore(liveGame)
 winner(liveGame)

 console.log(winner(liveGame))
 
 const dad = () => {
     const father = "My Dad IS AWESOME !"
     return father
 }

 console.log(dad())