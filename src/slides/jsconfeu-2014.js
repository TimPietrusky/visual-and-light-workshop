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
import {StyledListLarge, StyledList} from '../components/list'

// const {Slide, A} = Main
const {Slide, A, B} = Half
// const {Slide, A, B, C, D} = Grid

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
      <Subtitle>JSConf EU 2014</Subtitle>
      <br />

      <a href="">
        <SmallImage src="media/timpietrusky-jsconfeu2014-nerddisco.jpg" />
      </a>

      <br />

      <ImportantLink href="https://www.youtube.com/watch?v=tia6iP85Zuk">
        youtube.com/watch?v=tia6iP85Zuk
      </ImportantLink>

      {/*
      <Title>
        <TextMarker>this.stage</TextMarker>
      </Title>
      */}
      {/* 
        <Subtitle></Subtitle> 
      */}
      {/*
      <StyledList>
        <Fragment order={2}>
          <li></li>
        </Fragment>
        <Fragment order={3}>
          <li></li>
        </Fragment>
        <Fragment order={4}>
          <li></li>
        </Fragment>
        <Fragment order={5}>
          <li class="no-border"></li>
        </Fragment>
      </StyledList> 
      */}
      {/* 
      <LargeImage 
          src="media/"
          alt=""
      />
      */}
      {/* 
        <FitImage src="media/" alt="" /> 
      */}
      {/* 
      <Sequence order={1} steps={2} time={-1}>
        {(index, time, timeline) => {
          return <SuperVideo 
                //src="media/IMG_0659.m4v#t=93,170"
                // src="media/JSConfEU_18_Replay_Opener.mp4#t=623"
                src="media/JSConfEU_LiveJS_Performance_2018.mp4#t=2"
                isPlaying={index===0}
          />
        }}
      </Sequence>
      */}
      {/*
       <YouTube videoId="GiTkwz9AKhM" start={93}>
        {props => {
          return (
            <React.Fragment>
              <Sequence order={1} steps={2}>
                {(index, time, timeline) => {
                  return <Live><Video {...props} isPlaying={index===0} /></Live>
                }}
              </Sequence>
            </React.Fragment>
          )
        }}
      </YouTube>
      */}
    </A>

    <B>
      <Fragment order={2}>
        <SmallImage src="media/nerddisco.png" />
      </Fragment>

      <br />
      <br />

      <Fragment order={2}>
        <ImportantLink href="https://github.com/NERDDISCO">
          github.com/NERDDISCO
        </ImportantLink>

        <br />
        <br />

        <ImportantLink href="https://twitter.com/NERDDISCO">
          twitter.com/NERDDISCO
        </ImportantLink>
      </Fragment>
    </B>
  </Slide>
)
