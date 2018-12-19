let data = [
    {
      "isActive": true,
      "balance": "$1,379.22",
      "age": 26,
      "eyeColor": "green",
      "name": {
        "first": "White",
        "last": "Robles"
      },
      "email": "white.robles@undefined.me",
      "address": "247 Clymer Street, Dragoon, Wisconsin, 7618"
    },
    {
      "isActive": true,
      "balance": "$2,340.82",
      "age": 40,
      "eyeColor": "blue",
      "name": {
        "first": "Fisher",
        "last": "Holden"
      },
      "email": "fisher.holden@undefined.biz",
      "address": "468 Henry Street, Hebron, Alaska, 3796"
    },
    {
      "isActive": true,
      "balance": "$1,297.28",
      "age": 40,
      "eyeColor": "brown",
      "name": {
        "first": "Michael",
        "last": "Mcmahon"
      },
      "email": "michael.mcmahon@undefined.com",
      "address": "732 Oriental Court, Fostoria, Maine, 7592"
    },
    {
      "isActive": false,
      "balance": "$1,807.34",
      "age": 24,
      "eyeColor": "brown",
      "name": {
        "first": "Christensen",
        "last": "Clements"
      },
      "email": "christensen.clements@undefined.info",
      "address": "405 Hamilton Walk, Sparkill, Nevada, 579"
    },
    {
      "isActive": true,
      "balance": "$1,982.62",
      "age": 25,
      "eyeColor": "brown",
      "name": {
        "first": "Franco",
        "last": "Atkinson"
      },
      "email": "franco.atkinson@undefined.org",
      "address": "165 Hampton Place, Gardners, Ohio, 4970"
    },
    {
      "isActive": false,
      "balance": "$1,046.65",
      "age": 24,
      "eyeColor": "brown",
      "name": {
        "first": "Tania",
        "last": "Monroe"
      },
      "email": "tania.monroe@undefined.co.uk",
      "address": "993 Ainslie Street, Sattley, Georgia, 5504"
    },
    {
      "isActive": false,
      "balance": "$2,677.74",
      "age": 24,
      "eyeColor": "green",
      "name": {
        "first": "Pace",
        "last": "Kennedy"
      },
      "email": "pace.kennedy@undefined.tv",
      "address": "118 Montgomery Place, Troy, Palau, 3404"
    },
    {
      "isActive": true,
      "balance": "$3,157.50",
      "age": 32,
      "eyeColor": "brown",
      "name": {
        "first": "Chasity",
        "last": "Gross"
      },
      "email": "chasity.gross@undefined.name",
      "address": "108 Coventry Road, Wadsworth, Iowa, 367"
    },
    {
      "isActive": false,
      "balance": "$3,031.05",
      "age": 39,
      "eyeColor": "brown",
      "name": {
        "first": "Rosario",
        "last": "Houston"
      },
      "email": "rosario.houston@undefined.us",
      "address": "542 Chase Court, Cascades, Utah, 1536"
    },
    {
      "isActive": true,
      "balance": "$1,308.36",
      "age": 21,
      "eyeColor": "green",
      "name": {
        "first": "Elva",
        "last": "Preston"
      },
      "email": "elva.preston@undefined.io",
      "address": "597 Seton Place, Yonah, New York, 7892"
    }
  ]

let required_fields = ['name', 'email','age','balance', 'eyeColor'];
createTable(data)
let filterInput = document.getElementById("filter-input")
filterInput.addEventListener("input", (e) => {
    let searchVal = filterInput.value.trim()
    if(searchVal === "") {
        createTable(data)
    } else {
        let filteredData = data.filter((user) => {
            return user.name.first.indexOf(searchVal) !== -1
            || user.name.last.indexOf(searchVal) !== -1
            || user.email.indexOf(searchVal) !== -1
            || user.eyeColor.indexOf(searchVal) !== -1
            || (user.age + "").indexOf(searchVal) !== -1
            || user.balance.indexOf(searchVal) !== -1
        })

        createTable(filteredData)
    }
})
//Fills table form array
function createTable(array) {
    let table = document.getElementById("data-table")
    table.innerHTML = ""
    let headingsRow = document.createElement("tr")
    for(heading of required_fields) {
        let cell = document.createElement("th")
        cell.innerText = heading
        headingsRow.appendChild(cell)
    }
    table.appendChild(headingsRow)

    for(const user of array) {
        let row = getHtmlRow(user)
        table.appendChild(row)
    }
}

//creates html row from user
function getHtmlRow(user) {
    let row = document.createElement("tr")
    for(let heading of required_fields) {
        let cell = document.createElement("td")
        let value = null
        if(heading === "name") {
            value = user[heading].first + " " + user[heading].last
        } else {
            value = user[heading]
        }
        cell.innerText = value
        row.appendChild(cell)
    }

    return row
}