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
import {topCenter} from '../components/images'
import {css} from 'styled-components'
import {Grid, Half, HalfVertical} from '../masters'

// const {Slide, A} = Main
const {Slide, A, B} = HalfVertical

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
    background={`url("media/flat_par.jpg")`}
    mixin="--slide-color: white">
    <Plugins.Data luminave={['']} />
    {notes}

    <A>
      <Title>Light (Fixture)</Title>
      <br />
      <br />
      <br />
      <br />
      <br />
    </A>

    <B>
      <DmxChannels channels="6" width="90%" height="10em">
        <Fragment
          order={1}
          mixin={css`
            display: contents !important;
          `}>
          <Channel background="#f00" label="Red"></Channel>

          <Channel background="#0f0" label="Green"></Channel>

          <Channel background="#00f" label="Blue"></Channel>
        </Fragment>

        <Fragment
          order={2}
          mixin={css`
            display: contents !important;
          `}>
          <Channel background="#5b1ccf" label="UV" className="uv">
            <Info>Ultraviolet</Info>
          </Channel>
        </Fragment>

        <Fragment
          order={3}
          mixin={css`
            display: contents !important;
          `}>
          <Channel background="#fff" label="Dimmer">
            <Info>Brightness</Info>
          </Channel>
        </Fragment>

        <Fragment
          order={4}
          mixin={css`
            display: contents !important;
          `}>
          <Channel background="" label="Strobe" className="strobe"></Channel>
        </Fragment>
      </DmxChannels>
    </B>
  </Slide>
)
