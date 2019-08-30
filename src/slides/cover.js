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
import {css} from 'styled-components'
import {Grid, Half, HalfVertical} from '../masters'
import {ImportantLink} from '../components/links'
import {topCenter, LargeImage} from '../components/images'
import {fade, flip, cube} from '@dekk/animation'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3 />
    <p />
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']} />
    {notes}

    <A>
      <Title>
        <RainbowText
          style={{filter: css`invert(0%)`}}
          time={30}
          text="Visual"
        />
        &nbsp;&&nbsp;
        <RainbowText style={{filter: css`invert(0%)`}} time={30} text="Light" />
      </Title>
      <Title>Workshop</Title>
    </A>
  </Slide>
)
