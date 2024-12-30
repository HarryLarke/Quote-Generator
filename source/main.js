const appInit = document.addEventListener("DOMContentLoaded", render, false)

function render() {
    console.log("Page Loaded!")

    const rNum = Math.floor(Math.random() * (4 - 1) + 1)
    console.log(rNum)
    if (rNum === 1) {
        console.log("BackGRound 1 load")
        backGroundGenOne()
    }
    if (rNum === 2) {
        console.log("BackGRound 2 load")
        backGroundGenTwo()
    }
    if (rNum === 3) {
        console.log("BackGRound 3 load")
        backGroundGenTHree()
    }
    if (rNum === 4) {
        console.log("BackGRound 4 load")
    }
}

function backGroundGenOne() {
    const htmlBody = document.getElementById("body")
    const main = document.createElement("main")
    main.className = "main one"
    main.id = 'main'
    htmlBody.append(main)
    TextGen()
}

function backGroundGenTwo() {
    const htmlBody = document.getElementById("body")
    const main = document.createElement("main")
    main.className = "main two"
    main.id = 'main'
    htmlBody.append(main)
    TextGen()
}

function backGroundGenTHree() {
    const htmlBody = document.getElementById("body")
    const main = document.createElement("main")
    main.className = "main three"
    main.id = 'main'
    htmlBody.append(main)
    TextGen()
}

function TextGen() {
    const main = document.getElementById("main")
    const div = document.createElement("div")
    div.className = 'container'
    main.append(div)

    const h1 = document.createElement("h1")
    h1.className = "title-main"
    h1.textContent = "Inspirational Quote Generator"
    div.append(h1)

    const h2 = document.createElement('h2')
    h2.className = "subtitle"
    h2.textContent = 'Generate!'
    div.append(h2)
}

