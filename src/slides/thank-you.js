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
import {StyledListLarge, StyledList} from '../components/list'

const {Slide, A} = Main
// const {Slide, A, B} = Half

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
      <Subtitle>Let's connect!</Subtitle>
      <br />
      <br />
      <StyledList className="center">
        <Fragment order={1}>
          <li className="no-border">
            <ImportantLink href="https://twitter.com/TimPietrusky">
              twitter.com/TimPietrusky
            </ImportantLink>
          </li>
        </Fragment>

        <Fragment order={2}>
          <li className="no-border">
            <ImportantLink href="https://github.com/TimPietrusky">
              github.com/TimPietrusky
            </ImportantLink>
          </li>
        </Fragment>

        <Fragment order={3}>
          <li className="no-border">
            <ImportantLink href="https://instagram.com/TimPietrusky">
              instagram.com/TimPietrusky
            </ImportantLink>
          </li>
        </Fragment>
      </StyledList>
      <br />
      <br />
      <Fragment order={5}>
        <Title>
          ❤️ <RainbowText text="THANK YOU" /> ❤️
        </Title>
      </Fragment>
    </A>

    {/* <B>

    </B> */}
  </Slide>
)
