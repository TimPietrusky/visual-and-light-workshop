# Visual & Light Workshop

Learn to create visuals and to control lights in this workshop, full of hands-on exercises. 

---

## Preparations

A list of suggestions that will make your time at the workshop even more productive:

* Bring a computer
* Check if your computer runs the latest version of each application: 
  * [Chrome](https://www.google.com/chrome/)
  * [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  * [Node.js](https://nodejs.org/en/download/package-manager/)
  * [modV](https://modv.js.org/guide/)
  * [luminave](https://github.com/NERDDISCO/luminave)

### Nice to have

* Coding experience (only needed for the "Use visuals from CodePen / Shadertoy" part, we will help you if you struggle)
* MIDI controller with USB (only needed for the "Perform live" part, we will have some to share)
  * Recommendation: [KORG nanoKONTROL 2](https://www.korg.com/us/products/computergear/nanokontrol2/) as it is has a reasonable price,is small & has a lot of buttons, faders and knobs
    ![korg nanoKONTROL 2](docs/media/korg_nanoKONTROL2.png)

---

## Schedule

* **Intro**: What are visuals & lights? 
* Visualize music with modV
* Control lights with luminave
* Connect modV & luminave with each other
* **Outro**: How to perform live!

---

## Concept

### What are visuals & lights? 

[![schickmalzwo - DNB ME UP](https://img.youtube.com/vi/RsqeSfyhzdw/0.jpg)](https://www.youtube.com/watch?v=RsqeSfyhzdw "schickmalzwo - DNB ME UP")   

- We want to do all of this in the browser with web technologies

---

### Visualize music with modV

- How does [modV](https://modv.js.org/) work?
  ![Visuals created in modV by Tim Pietrusky](docs/media/modv_visuals.png)
- [Live audio analysis with Meyda](https://jsbin.com/movezix/6/edit?html,js,output)
- Use visuals from [CodePen](https://codepen.io)
- Use visuals from [Shadertoy](https://www.shadertoy.com)

---

### Control lights with luminave

- How does [luminave](https://github.com/NERDDISCO/luminave) work?
- What is DMX512?
- Build your own light (DMX512) Controller using an Arduino
  ![WebUSB DMX512 Controller](docs/media/webusb_dmx512_controller.jpg)
- Let there be light
  ![Stairville Wild Wash Pro 648 LED RGB DMX](docs/media/stairville_wild_wash_pro_648_led_RGB_DMX.jpg)

---

### Connect modV & luminave with each other

- WebSockets to exchange data
- Map modV output onto lights in luminave

---

###  How to perform live!

[![LiveJS JSConfEU 2019 Intro](https://img.youtube.com/vi/o1rzsna263c/0.jpg)](https://youtu.be/o1rzsna263c?t=1222 "LiveJS JSConfEU 2019 Intro")

- Prepare for a show
- Use a Web MIDI controller