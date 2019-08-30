<h1>luminave exercises</h1>

- [1. Start luminave](#1-start-luminave)
- [2. Add a universe](#2-add-a-universe)
  - [Note](#note)
- [3. Patch a fixture (light)](#3-patch-a-fixture-light)
  - [Note](#note-1)
- [4. Add WebUSB DMX512 controller](#4-add-webusb-dmx512-controller)
- [5. Let there be light](#5-let-there-be-light)
- [6. Add an animation & a scene](#6-add-an-animation--a-scene)
  - [Note](#note-2)
- [7. Add keyframes to an animation in the fixture dialog](#7-add-keyframes-to-an-animation-in-the-fixture-dialog)
- [8. Use colors from modV to control fixtures](#8-use-colors-from-modv-to-control-fixtures)
- [9. Add a MIDI controller](#9-add-a-midi-controller)

---

## 1. Start luminave

* Open your terminal
* Go into the `luminave` folder
* Execute `npm start`
* After 30 to 60 seconds luminave is started and you can open it in Chrome via [localhost:8081](localhost:8081)

---

## 2. Add a universe

* Find the `Universes` tab
* Click on the `Add universe` button

### Note

* You can see 512 x 0, the amount of channels in one DMX512 universe


---


## 3. Patch a fixture (light)

* Find the `Fixtures` tab
* Add a new fixture using the form
    * Type: Select x
    * Address: 1
    * Name: Light 1
    * Amount: Leave it blank (we don't need it)
* Click the `Add` button and see the new fixture
* Click on the `edit` button (a pencil icon) for the `Fixture 1`
* The `fixture dialog` opens
* Change the color of the fixture at the bottom left of the dialog
* Switch back to the `Universes` tab
* You can see that the channels are updated

### Note

* Whenever you change the value of a fixture, it will be updated in the universe. This only works if the `timeline` is stopped (more later)

---

## 4. Add WebUSB DMX512 controller

* Connect the WebUSB DMX512 controller to your computer
* In the top right of luminave, you can find the menu icon. Click it
* The menu opens which gives a few configurations
* In the top you find the `USB` button, click it
* A dialog from Chrome opens where you can select the `Arduino Leonardo` and click `connect`

---

## 5. Let there be light

* Connect the DMX cable to the WebUSB DMX512 controller
* Connect the other end of the DMX cable with your fixture
* Open the `Fixtures` tab and then edit `Fixture 1`
* Change the `color` again and see that nothing happens
* Change the value of `dimmer` to `255` and hit the enter key on your keyboard
* The fixture should now show the color you selected


---

## 6. Add an animation & a scene

* Open the `Animations` tab
* Add a new `animation` by using the form:
  * Name: Red to Blue
  * Duration: 5000 (in ms)
  * Amount: Leave blank (we don't need it)
* Click the `Add` button and see the new `animation`
* In the `Step` field of the animation type `0`
* In the `Property` dropdown select `color`
* In the `Value` field type in `255,0,0` (RGB color = Red, Green, Blue)
* Click the `Add keyframe` button and see that the keyframe was added
* Now we have to create another keyframe in order to see the animation
* In the `Step` field of the animation type `1`
* In the `Property` dropdown `color` is still selected
* In the `Value` field type in `0,0,255` (RGB color = Red, Green, Blue)
* Click the `Add keyframe` button and see that the next keyframe was added
* The next thing we need is the dimmer in order to see the color on the fixture
* In the `Step` field of the animation type `0`
* In the `Property` dropdown select `dimmer`
* In the `Value` field type in `255`
* Click the `Add keyframe` button
* And now the final keyframe for dimmer
* In the `Step` field of the animation type `1`
* In the `Property` dropdown `dimmer` is still selecteed
* In the `Value` field type in `255`
* Click the `Add keyframe` button
* The animation is done, but in order to assign it to a fixture, we have to create a scene
* Open the `Scenes` tab
* Add a new `scene` by using the form:
  * Name: Red to Blue
  * Duration: 5000
* Click the `Add scene` button and see the new `scene`
* Now we have to assign the anmation to the scene, locate the first dropdown and select `Red to Blue` and then click the `Add Animation` button
* The animation is added underneath the `Add animation` button
* At last we have to add the fixture, select `Fixture 1` in the list shown underneath the animation and click `Add fixture`
* The fixture is added underneath the list
* In order to add the scene to the timeline, click on the `Run` button located near the `name` field of the scene (make sure not to hit the `Remove` button :D)
* The scene is added to the timeline in the top of luminave, you can see the name of the scene
* In the timeline you can see the `play` button, click it an the timeline starts
* The fixture will run change colors from Red to Blue and after 5 seconds it starts again
* Open the `Universe` tab to see the values updated as long as the timeline is playing  

### Note

* Animations work with keyframes, everything in between these keyframes gets interpolated when the Animation runs


---

## 7. Add keyframes to an animation in the fixture dialog

* Another way of adding a keyframe to an animation is by using the `fixture dialog`
* Open the `Fixtures` tab and click the edit button of `Fixture 1` to open the `fixture dialog`
* Underneath `Channels` you can find a dropdown, select `Red to Blue`
* Leave the step at `0`
* Change the dimmer to `50`
* Click the `Create keyframe` button
* Open the `Animataions` tab and see that the keyframe for `step 0` was changed to `50` for the `dimmer`

---

## 8. Use colors from modV to control fixtures

* Open the menu of luminave
* Find the `modV` section
* The `URL` is fine
* Click on the `Auto-Reconnect` checkbox to automatically reconnect to the server when luminave is restarted
* Click on the `connect` button
* On the left side of the `URL` the emoji should change to a heart ❤️
* Open the `Venues` tab
* Add a new venue using the form:
  * Venue
    * Name: Workshop
    * Width: 3
    * Height: 3
  * modV
    * Width: 3
    * Height: 3
* Click on the `Add` button and see that the new venue was added
* Click on the `edit` button (pencil icon)
* The `venue editor` opens
  
*Switch to modV*

* Open the `Plugins` tab
* Find `Grab Canvas` and open it's options using the arrow-button on the right
* Click on the `Show Canvas` button to open a preview in the top right of modV
  * This will show you which areas get selected and send over to luminave
* The selected areas should match the ones we defined in luminave:
  * SelectionX: 3
  * SelectionY: 3

*Switch to luminave*

* See that the squares underneath the `venue form` show the colors that we saw in the `Grab Canvas` preview in modV
* Underneatch the modV squares you find the venue, which is a representation of the room or area the lights are placed. 
* Click on the edit-button of the first `venue position`
* The first two fields are the location of the fixture inside the venue, only use them to move a fixture around (we will leave it like this)
* In the `Name` field enter `Fixture 1` (use the same name as the Fixture you want to add)
* In the `modV` field enter `1`
* Click the `Update` button
* See that `Fixture 1` was added to the `venue position` automatically because the name was the same
* See that in the `modV squares` the first square has a red border, when you hover it you see which `venue position` is assigned to it
* Open the `Animations` tab and see that there is a new animation called `Fixture 1` that has the keyframe `modV`
* Open the `Scenes` tab and see that there is a new scene called `Fixture 1` that has the animation and the fixture added to it
* In the timeline, hit the `Reset_` button to remove all scenes from the timeline
* In the `Scenes` tab, click on the `Run` button for the new `Fixture 1` scene
* When modV and luminave are both in the foreground, you can see that the fixture is updating according to what is happening in modV

---


## 9. Add a MIDI controller

* Open the `MIDI` tab
* Open the dev-tools of chrome (Chrome Menu > More Tools > Developer Tools)
  * Open the `Console` tab
  * Find the entries for the MIDI controller you added, especially some with the words `input` and `output` in them
* Connect the MIDI controller via USB to your computer
* Add a new MIDI controller using the form:
  * Name: MyController
  * Input: The name of the input as it is written in the Dev-tools console
    * Add `myinput` if you have no MIDI controller
  * Output: The name of the ouput as it is written in the Dev-tools console
    * Add `myoutput` if you have no MIDI controller
  * Width: The amount of buttons / knobs / faders in the x axis
  * Height: The amount of buttons / knobs / faders in the y axis
  * CC as NoteOn: Leave it unchecked
* Click on the `Add controller` button and see the new MIDI controller added
* Click on the edit button of the first button
* Name the button `Waveform`
* In the dropdown undearneath select `Button`
* Click on the `Learn` button underneath and hit the first button on the MIDI controller
* When you now press the button on the controller, the button in luminave also lights up

