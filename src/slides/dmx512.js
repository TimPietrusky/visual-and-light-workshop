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
import {Half} from '../masters'
import {topCenter} from '../components/images'

const {Slide, A, B} = Half

const notes = (
  <Notes>
    <h3>DMX512</h3>
    <p>DMX512 is a standard for professional lighting</p>
    <p>All the lights you can see in this picture are controller via DMX</p>
    <p>
      You can not only control lights (like the 4 you see in the top and the big
      one you see in the bottom, but all other kinds of show equipment)
    </p>
    <p>
      Like the laser you see here and the smoke machine (which you can't see
      because there is already super much smoke in the room)
    </p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']} />
    {notes}

    <A>
      <Title>DMX512</Title>

      <br />

      <ImportantLink href="https://en.wikipedia.org/wiki/DMX512">
        wikipedia.org/wiki/DMX512
      </ImportantLink>
    </A>

    <B>
      <FitImage
        topCenter
        src="media/newyears_eve_2017.jpg"
        alt="New Years Eve 2017"
      />
    </B>
  </Slide>
)
