const letterI = [
  '██████ ',
  '  ██   ',
  '  ██   ',
  '  ██   ',
  '██████ ',
]

const letterS = [
  ' █████ ',
  '█      ',
  ' █████ ',
  '      █',
  ' █████ ',
]

const letterD = [
  '██████ ',
  '██   ██',
  '██   ██',
  '██   ██',
  '██████ ',
]

const letterE = [
  '███████',
  '██     ',
  '█████  ',
  '██     ',
  '███████',
]

const letterV = [
  '█     █',
  '██   ██',
  ' ██ ██ ',
  '  ███  ',
  '   █   ',
]

const letter3 = [
  '██████ ',
  '     ██',
  '██████ ',
  '     ██',
  '██████ ',
]

const lettere = [
  '    ',
  '    ',
  '███ ',
  '██  ',
  '███ ',
]

const lettert = [
  '    ',
  '    ',
  '███ ',
  ' █  ',
  ' █  ',
]

const letterh = [
  '    ',
  '    ',
  '█ █ ',
  '███ ',
  '█ █ ',
]

const letteri = [
  '    ',
  '    ',
  ' █  ',
  ' █  ',
  ' █  ',
]

const lettern = [
  '    ',
  '    ',
  '███ ',
  '█ █ ',
  '█ █ ',
]

const letterp = [
  '    ',
  '    ',
  '███ ',
  '███ ',
  '█   ',
]

const letteru = [
  '    ',
  '    ',
  '█ █ ',
  '█ █ ',
  '███ ',
]

const letterb = [
  '    ',
  '    ',
  '███ ',
  '███ ',
  '███ ',
]

const letterl = [
  '    ',
  '    ',
  '█   ',
  '█   ',
  '███ ',
]

const letters = [
  '    ',
  '    ',
  '███ ',
  ' █  ',
  '███ ',
]

const letter_ = [
  '    ',
  '    ',
  '    ',
  '    ',
  ' █  ',
]

const initAsciiArt = `
  ██╗███╗   ██╗██╗████████╗
  ██║████╗  ██║██║╚══██╔══╝
  ██║██╔██╗ ██║██║   ██║   
  ██║██║╚██╗██║██║   ██║   
  ██║██║ ╚████║██║   ██║   
  ╚═╝╚═╝  ╚═══╝╚═╝   ╚═╝   
`

const publishAsciiArt = `
  ██████╗ ██╗   ██╗██████╗ ██╗     ██╗███████╗██╗  ██╗
  ██╔══██╗██║   ██║██╔══██╗██║     ██║██╔════╝██║  ██║
  ██████╔╝██║   ██║██████╔╝██║     ██║███████╗███████║
  ██╔═══╝ ██║   ██║██╔══██╗██║     ██║╚════██║██╔══██║
  ██║     ╚██████╔╝██████╔╝███████╗██║███████║██║  ██║
  ╚═╝      ╚═════╝ ╚═════╝ ╚══════╝╚═╝╚══════╝╚═╝  ╚═╝
`

const asciiArt = `
                                                  
                                       .:-=++:    
                               .:--=+***##*:  :+  
                       .::-=++++********+:  .+#+  
               .:--=++++++++++++******+:  .=**#:  
          ==+**+++++++++++++++++****+:  .=++***   
          =****+++++++++++++++++**+:  .=++++**=   
       -  .****+++++++++++++++++=.   =++++++**:   
      .+.  =***+++++++++++++++=.  .  -++++++**    
      -+=   ***+++++++++++++=.  :+#.  ++++++*=    
      =+*:  -**+++++++++++=.  :+**#=  :+++++*:    
     .++*+   +*+++++++++=.  :+****##.  ++++++     
     -++**:  -*+++++++=.  :+******##+  :++++-     
     +++**+   ++++++=.  :=********###.  =+++.     
    .+++***-  -+++=.  .=++********###+  :+++      
    -+++****   +=.  .=++++********####:  =+-      
    ++++***#-     .=++++++********####*  .+.      
   .++++***#+   .=++++++++********#####:  =       
   -++++**+:  .=++++++++++********#####*          
   +++++=:  .=++++++++++++********####*+.         
  .+++=.  .=++++++++++++++***++=--:.              
  -+=.  :=++++++++++++=--:..                      
  =.  :+*+++++=-::.                               
    .==-::.                                       
`

const combineLetters = (...lines) => lines.join(' ')

const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  lightgreen: "\x1b[92m",
  orange: "\x1b[91m",
  skyblue: "\x1b[96m",
};


// Function to print colored text
const print = (text, color) => {
  console.log(`${colors[color]}${text}${colors.reset}`)
}

// Prints dev3.eth logo
function logo() {
  for (let i = 0; i < letter3.length; i++) {
    print(
        combineLetters(
            ' ',
            letterD[i],
            letterE[i],
            letterV[i],
            letter3[i],
            letter_[i],
            lettere[i],
            lettert[i],
            letterh[i]
        ), "green"
    )
  }
}

export default {
  letterI,
  letterS,
  letterD,
  letterE,
  letterV,
  letter3,
  letter_,
  lettere,
  lettert,
  letteri,
  lettern,
  letterh,
  letterp,
  letteru,
  letterb,
  letterl,
  letters,
  initAsciiArt,
  publishAsciiArt,
  asciiArt,
  combineLetters,
  colors,
  print,
  logo
}


