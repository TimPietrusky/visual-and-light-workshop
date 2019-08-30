const fs = require('fs')
const Mustache = require('mustache')

const sourcePath = './src/slides'

// Overwrite generated files
const force = false

// The slides that should be generated
const mySlides = [
  'purpose-of-the-workshop',
  'why-do-we-want-to-generate-visuals-and-control-lights',
  'tim-pietrusky',
  'synoa',
  'party-hard',
  'problems-with-the-world',
  'jsconfeu-2014',
  'nerddisco',
  'livejs',
  'schickmalzwo',
  'what-about-you',
  'everything-in-the-browser',
  'implications-of-open-source-software',
  'schedule',

  'visualize-music-with-modv',
  'what-is-modv',
  'start-modv',

  'explain-modv-ui',
  'basic-modv-visual',
  'audio-analysis-with-meyda',
  'image-modv-module',
  'add-custom-visual',
  'add-custom-visual-from-shadertoy',

  'lunch',

  'control-lights-with-luminave',
  'what-is-luminave',
  'start-luminave',
  'explain-luminave-ui',
  'what-is-dmx512',

  'build-your-own-light-controller-using-an-arduino',
  'arduino-leonardo',
  'arduino-dmx512-shield',
  'webusb',
  'patch-fixture',
  'create-scene-and-animation',

  'connect-modv-and-luminave-with-each-other',
  'websocket-to-exchange-data',
  'map-modv-visuals-onto-lights-in-luminave',

  'how-to-perform-live',
  'jsconfeu-opening-2019',
  'use-webmidi-controller',
  'add-midi-controller-to-modv',
  'add-midi-controller-to-luminave',
  'audio-routing-in-modv',
  'audio-interface',
  'usb-hub',
  'laptop-stand',
  'cyberpunk-googles',
  'import-tims-preset-into-your-modv',
  'tim-performs-live-with-dj',
  'have-fun',

  'dinner',

  'setup-lights-for-party',

  'party'
]

// Load the template
var template = fs.readFileSync('template.js', 'utf8')

const fileExists = path => file => fs.existsSync(`${path}/${file}`)

const writeToPath = path => (file, content) => {
  const filePath = `${path}/${file}`

  if (!force && checkFileExists(file)) {
    console.log(filePath, 'already exists')
  } else {
    fs.writeFile(filePath, content, err => {
      if (err) throw err
      console.log('Created file: ', filePath)
      return true
    })
  }
}

const writeFile = writeToPath(sourcePath)
const checkFileExists = fileExists(sourcePath)

// Generate the slides
for (let i = 0; i < mySlides.length; i++) {
  const slide = mySlides[i]

  // Create the title based on the name of the slide
  const words = slide.split('-')
  let title = ''

  for (let j = 0; j < words.length; j++) {
    const word = words[j]

    title += letterCase(word)
  }

  title = title.trim()
  title = title.replace('And', '&')
  title = title.replace('Jsconfeu', 'JSConf EU')
  title = title.replace('Luminave', 'luminave')
  title = title.replace('Nerddisco', 'NERDDISCO')
  title = title.replace('Livejs', 'LiveJS')
  title = title.replace('Modv', 'modV')
  title = title.replace('Schickmalzwo', 'schickmalzwo')
  title = title.replace('To', 'to')
  title = title.replace('Dmx512', 'DMX512')
  title = title.replace('Webusb', 'WebUSB')
  title = title.replace('Webmidi', 'WebMIDI')
  title = title.replace('Midi', 'MIDI')
  title = title.replace('Usb', 'USB')
  title = title.replace('Dj', 'DJ')

  // Render the template
  var output = Mustache.render(template, {title})

  // Create the slide.js
  writeFile(`${slide}.js`, output)
}

// Transform the first letter into uppercase, use a space to seperate the words
function letterCase(string) {
  return `${string.charAt(0).toUpperCase() + string.slice(1)} `
}
