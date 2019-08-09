<h1>Visual & Light Workshop</h1>

Learn to create visuals and to control lights in this workshop, full of hands-on exercises. 

- [Preparations](#preparations)
  - [Nice to have](#nice-to-have)
- [Schedule](#schedule)
- [Workshop](#workshop)
  - [What are visuals & lights?](#what-are-visuals--lights)
  - [Visualize music with modV](#visualize-music-with-modv)
  - [Control lights with luminave](#control-lights-with-luminave)
  - [Connect modV & luminave with each other](#connect-modv--luminave-with-each-other)
  - [How to perform live!](#how-to-perform-live)

---

## Preparations

A list of suggestions that will make your time at the workshop even more productive:

* Bring a computer
* Check if your computer runs the latest version of these applications: 
  * [Chrome](https://www.google.com/chrome/)
  * [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  * [Node.js](https://nodejs.org/en/download/package-manager/)
  * [modV](https://modv.js.org/guide/)
  * [luminave](https://github.com/NERDDISCO/luminave)

🚨 If you have problems with any of these preperations, please contact Tim Pietrusky! 🚨

### Nice to have

The following suggestions are totally optional, so please don't worry if you can't fulfill them: 

* Coding experience  
  * We will help you if you have no idea at all
* MIDI controller that can be connected via USB to the computer
  * We will have some spare MIDI controllers for you to use, but if you want to buy one we can recommend the [KORG nanoKONTROL 2](https://www.korg.com/us/products/computergear/nanokontrol2/) because it comes for a reasonable price, is portable & has a lot of buttons, faders and knobs
    ![korg nanoKONTROL 2](docs/media/korg_nanoKONTROL2.png)
* [Arduino IDE](https://www.arduino.cc/en/Guide/HomePage#install) if you want to put code onto the Arduino (if not then we will do this for you)

---

## Schedule

* **Intro**: What are visuals & lights? 
* Visualize music with modV
* Control lights with luminave
* Connect modV & luminave with each other
* **Outro**: How to perform live!

---

## Workshop

### What are visuals & lights?  

[![schickmalzwo - DNB ME UP](https://img.youtube.com/vi/RsqeSfyhzdw/0.jpg)](https://www.youtube.com/watch?v=RsqeSfyhzdw "schickmalzwo - DNB ME UP")  

- About the tutor
- We want to do all of this in the browser with web technologies
  - Implications of open source software

---

### Visualize music with modV

<p align="center">
  <img height="300" src="docs/media/modv_visuals.png" alt="Visuals created in modV by Tim Pietrusky">
</p>

- How does [modV](https://modv.js.org/) work?
- [Live audio analysis with Meyda](https://jsbin.com/movezix/6/edit?html,js,output)
- Use visuals from [CodePen](https://codepen.io)
- Use visuals from [Shadertoy](https://www.shadertoy.com)

---

### Control lights with luminave

<p align="center">
  <img height="300" src="docs/media/stairville_wild_wash_pro_648_led_RGB_DMX.jpg" alt="Stairville Wild Wash Pro 648 LED RGB DMX">
</p>

- How does [luminave](https://github.com/NERDDISCO/luminave) work?
  - What is DMX512?
- Build your own light (DMX512) Controller using an Arduino

  <img height="200" src="docs/media/webusb_dmx512_controller.jpg" alt="WebUSB DMX512 Controller">
- Patch a light
  
---

### Connect modV & luminave with each other

- WebSockets to exchange data
- Map modV output onto lights in luminave

---

###  How to perform live!

[![LiveJS JSConfEU 2019 Intro](https://img.youtube.com/vi/o1rzsna263c/0.jpg)](https://youtu.be/o1rzsna263c?t=1222 "LiveJS JSConfEU 2019 Intro")

- Prepare for a show
- Use a Web MIDI controller
- Use Tim's preset for modV