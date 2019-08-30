import React, {cloneElement, Component} from 'react'
import {render} from 'react-dom'
import styled, {css, keyframes} from 'styled-components'
import Deck, {Elements, Plugins} from '@dekk/dekk'
import Controller from './plugins/controller'
import LocalStorage from '@dekk/local-storage'
import SpeakerDeck from '@dekk/speaker-deck'
import Url, {search} from '@dekk/url'
import './styles/codemirror'
import Luminave from './plugins/luminave'
import StyledHeader from './components/styledHeader'
import StyledFooter from './components/styledFooter'
import LuminaveButton from './components/luminaveButton'

const mySlides = [
  'cover',
  'warning-flashing-lights-music',
  'purpose-of-the-workshop',
  'schickmalzwo-jasmins-bday-bash-2019',
  'why-do-we-want-to-generate-visuals-and-control-lights',
  'tim-pietrusky',
  'deadmau5',
  'jsconfeu-2014',
  'livejs',
  'schickmalzwo',
  'what-about-you', // Attendees tell about what they do and what they want to get out of the workshop, if they have coding experience, any visuals & lights experience
  'everything-in-the-browser',
  'implications-of-open-source-software',
  'schedule', // Feel free to go on the toilet, lunch, party
  'preperations',

  'modular-visualizations-with-modv',
  'modv-exercises',

  'lunch',

  'control-lights-with-luminave',

  'dmx512',
  'dmx512-fixture',
  'dmx512-universe',
  'dmx512-controller',
  'arduino-leonardo',
  'webusb-dmx512-controller',

  'luminave-exercises',

  'connect-modv-and-luminave-with-each-other',

  'how-to-perform-live',
  // 'jsconfeu-opening-2019',
  'checklist',
  // 'midi-controller',

  // 'audio-interface',
  // 'usb-hub',
  // 'laptop-stand',
  // 'cyberpunk-googles',
  // 'import-tims-preset-into-your-modv',
  'use-tims-setup',
  // 'have-fun',

  // 'dinner',

  // 'party',

  'thank-you'

  // 'setup-lights-for-party'
]

//   'image-modv-module', // https://github.com/vcync/modV/issues/329#issuecomment-468449142

const {present, live} = search.parse(window.location.href)

const baseStyles = css`
  --slide-color: #000;
  --font-family: 'Montserrat', sans-serif;
  --title-font-size: 6em;
  --subtitle-font-size: 3em;
  --theme-primary: #000;
  --theme-primary-dark: #333;
  --theme-on-primary: #fff;
  --theme-background: #fff;
  --theme-surface: #fff;

  --color-green: #35c9a4;
  --color-red: #da4453;
  --color-yellow: #ec9f00;
  --color-blue: #3caee5;

  background: var(--theme-background);

  h1,
  h2,
  h3 {
    /*text-align: left;*/
  }

  a {
    /* color: var(--color-red); */
  }

  h1,
  h2 {
    width: 100%;
  }

  .center {
    text-align: center;
    width: 100%;
    height: 100%;
  }

  .center > h2 {
    text-align: center;
  }

  .strobe-1 {
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    animation: strobe 500ms steps(1, end) infinite;

    @keyframes strobe {
      74% {
        background: white;
      }
      75% {
        background: black;
      }
    }
  }

  .invert {
    background: #fff;
    color: #000;
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;

    > h2 {
      text-align: center;
    }
  }

  .overlay {
    position: relative;
    height: 100%;
    width: 100%;

    .child {
      position: absolute;
      bottom: 15vh;
      left: 0;
    }
  }

  .columns {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1em;
    justify-items: center;
  }
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleFrame = this.handleFrame.bind(this)
    this.setFrame = this.setFrame.bind(this)
    this.slides = this.props.slides
  }

  handleFrame(showFrame) {
    this.setState({
      showFrame
    })
  }

  setFrame() {
    this.setState(prevState => ({
      showFrame: !prevState.showFrame
    }))
  }

  render() {
    return (
      <Deck mixin={baseStyles} timer={30}>
        <Elements mode={['live']}>
          <StyledHeader isActive={this.state.showFrame}>
            <iframe
              src="http://localhost:8081"
              allow="midi, usb"
              sandbox="allow-same-origin allow-scripts allow-forms"
              style={{width: 100 + 'vw', height: 100 + 'vh'}}
              frameBorder="0"
            />
          </StyledHeader>
        </Elements>

        <Plugins mode={['present']}>
          <Controller trigger="keydown" handleFrame={this.setFrame} />
          <Luminave
            publish
            showFrame={this.state.showFrame}
            handleFrame={this.setFrame}
          />
          <LuminaveButton onClick={this.setFrame}>Luminave</LuminaveButton>
        </Plugins>

        <Plugins mode={['live']}>
          <LocalStorage subscribe />
          <Luminave
            subscribe
            handleFrame={this.handleFrame}
            slides={this.slides}
          />
        </Plugins>

        <Plugins mode={['default']}>
          <Controller trigger="keydown" handleFrame={this.setFrame} />
        </Plugins>

        {this.slides}

        {/* <Elements mode={["default"]}>
          <StyledFooter isActive={true}>
            <h1>jo jo jo</h1>
          </StyledFooter>
        </Elements> */}
      </Deck>
    )
  }
}

const mountPoint = document.getElementById('mount-point')

/**
 * Dynamically import the slides
 */
async function loadSlides() {
  const slides = []

  await Promise.all(
    mySlides.map(async (slide, index) => {
      let module = await import(`./slides/${slide}.js`)
      slides[index] = module.default
    })
  )

  return slides
}

loadSlides().then(slides => {
  render(<App slides={slides} />, mountPoint)
})
