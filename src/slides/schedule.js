import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment, {Sequence} from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
import {
  RainbowText,
  TextMarker,
  Code2,
  YouTube,
  SuperVideo
} from '../components'
import {css} from 'styled-components'
import {Grid, Half, HalfVertical} from '../masters'
import {ImportantLink} from '../components/links'
import {
  topCenter,
  LargeImage,
  MediumImage,
  SmallImage
} from '../components/images'
import {fade, flip, cube} from '@dekk/animation'
import {
  StyledListLarge,
  StyledOrderedListLarge,
  StyledList
} from '../components/list'

// const {Slide, A} = Main
const {Slide, A, B} = Half

const notes = (
  <Notes>
    <p />
  </Notes>
)

/*
        background={`url("media/dmx512_universe.jpg")`}
        background="#fff"
        mixin="--slide-color: black" 
        animationOut={flip.y} 
        animationIn={flip.y}
*/
export default (
  <Slide key={uuid()}>
    {/*
        luminave={['green']}
      */}
    <Plugins.Data luminave={['']} />
    {notes}

    <A>
      <Subtitle>Schedule</Subtitle>
    </A>

    <B>
      <StyledListLarge>
        <Fragment order={1}>
          <li>Modular visualizations with modV</li>
        </Fragment>
        <Fragment order={3}>
          <li>Control lights with luminave</li>
        </Fragment>
        <Fragment order={4}>
          <li>Connect modV & luminave with each other</li>
        </Fragment>
        <Fragment order={5}>
          <li>How to perform live</li>
        </Fragment>
        <Fragment order={6}>
          <li class="no-border">Party (starts at 00:00)</li>
        </Fragment>
      </StyledListLarge>
    </B>
  </Slide>
)
