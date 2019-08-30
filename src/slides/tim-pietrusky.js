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
  SuperVideo,
  Columns,
  ColumnCaption
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
const {Slide, A, B} = HalfVertical

const notes = (
  <Notes>
    <ul>
      <li>This is how I look like when you find me online</li>
      <li>
        I co-founded a company named Synoa 6 years ago and work there as the CTO
      </li>
      <li>
        Before all of that the only thing I did full-time was going to partys
        and festivals, because I had no idea what I should do with my life and I
        had many personal problems that I couldn't solve. And this was the only
        escape for me.
      </li>
    </ul>
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
      <Title>Tim Pietrusky</Title>

      {/*
      <ImportantLink href=""></ImportantLink>
      */}

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

      {/*
      <DmxChannels channels="6" width="90%" height="10em">
        <Channel background="" label="Red" value="0" className="inactive">
        </Channel>

        <Channel background="" label="Green" value="255" className="active">
        </Channel>

        <Channel background="" label="Blue" value="0" className="inactive">
        </Channel>

        <Channel background="" label="UV" value="0" className="inactive">
        </Channel>

        <Channel background="" label="Dimmer" value="255" className="active">
        </Channel>

        <Channel background="" label="Strobe" value="0" className="inactive">
        </Channel>
      </DmxChannels>
    */}
    </A>

    <B>
      <Columns amount="3">
        <div>
          <Fragment order={1} fit>
            <ColumnCaption>2019</ColumnCaption>
            <FitImage src="media/tim_avatar_real.jpg" alt="" />
          </Fragment>
        </div>

        <div>
          <Fragment order={2} fit>
            <ColumnCaption>2013</ColumnCaption>
            <FitImage src="media/synoa-shield.jpg" alt="" />
          </Fragment>
        </div>

        <div>
          <Fragment order={3} fit>
            <ColumnCaption>2005 – 2010</ColumnCaption>
            <FitImage src="media/party-hard.gif" alt="" />
          </Fragment>
        </div>
      </Columns>
    </B>
  </Slide>
)
