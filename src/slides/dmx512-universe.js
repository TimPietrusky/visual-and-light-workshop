import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
import {RainbowText} from '../components'
import {ImportantLink} from '../components/links'
import {DmxChannels, Channel, Info} from '../components/dmxChannels'
import {topCenter, FitImageBorderLeft} from '../components/images'
import {css} from 'styled-components'
import {Half} from '../masters/index'

const {Slide, A, B} = Half

const notes = (
  <Notes>
    <h3>Fixture</h3>
    <p>In the DMX512 world you don't say light, but call it fixture</p>
    <p>
      One of the most basic and cheapest fixtures is a LED Flat PAR like you can
      see in this picture and here on stage
    </p>
    <p>
      A fixture usually has 1 or more functions. Each of these functions can be
      used individually
    </p>
    <p>
      This fixture has 6 function, the first ist to display Red, Green & Blue
    </p>
  </Notes>
)

export default (
  <Slide
    key={uuid()}
    background={`url("media/dmx512_universe.jpg")`}
    mixin="--slide-color: white">
    <Plugins.Data luminave={['']} />
    {notes}

    <A>
      <Title>Universe</Title>
    </A>

    <B>
      <Fragment fit order={1}>
        <FitImageBorderLeft
          src="media/dmx512_connector.jpg"
          alt="DMX512 connector"
        />
      </Fragment>
    </B>
  </Slide>
)
