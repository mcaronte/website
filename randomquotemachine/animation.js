function quotationText() {
  let quotes = {
    Aristotele: '"Le persone perfette non combattono, non mentono, non commettono errori e non esistono."',
    Mandela: '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
    WaltDisney: '"The way to get started is to quit talking and begin doing."',
    SteveJobs: '"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking."',
    Roosevelt: '"If life were predictable it would cease to be life, and be without flavor."'    
  };
  let colors = [ "Tomato", "Orange", "DodgerBlue", "MediumSeaGreen", "Gray", "Violet"
              ];
  keys = Object.keys(quotes);
  author = keys[(keys.length * Math.random()) << 0];
  text = quotes[author];
  rcolor = colors[(colors.length * Math.random()) << 0];

  document.getElementById("text").innerHTML = text;
  document.getElementById("author").innerHTML = author;
  document.body.style.background = rcolor;
}