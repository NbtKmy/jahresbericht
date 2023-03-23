
let buttonCanvasExample = document.getElementById("canvas");
const libraryCanvas = new rive.Rive({
    src: "https://nbtkmy.github.io/jahresbericht/assets/rive/ub_jahresbericht_final.riv",
    canvas: document.getElementById("canvas"),
    autoplay: true,
    artboard: "TestmitLadina",
    stateMachines: ["Ladina_Text_Blase"],
    onLoad: () => {
      libraryCanvas.resizeDrawingSurfaceToCanvas();
    },
    onStateChange: (riveEvent) => {
      const newStates = riveEvent.data;
      console.log(newStates);
      newStates.forEach((state) => {

        // Kontrollieren: Link-out 
        if (state.indexOf("Ladina_LinkOut") > -1) {
          const elemId = "popupContent";
          const popupContent = document.getElementById(elemId);
          popupContent.style.visibility = "visible";
          popupContent.innerHTML += "<button type='button' class='kreuz' onclick='hideVid(" + elemId + ");'>X</button> \
          <video src='./assets/vid/testVid.mov' controls></video>"
          
          //Kontrollieren: Mouse-Pointer-Formen 
        } else if (state.indexOf("Ladina_TextBlase_Hover") > -1) {
          buttonCanvasExample.style.cursor = "pointer";
        } else if (state.indexOf("Daniel_TextBlase_Hover") > -1) {
          buttonCanvasExample.style.cursor = "pointer";
        } else if (state.indexOf("Betuel_Textblase_Hover") > -1) {
          buttonCanvasExample.style.cursor = "pointer";
        } else {
          buttonCanvasExample.style.cursor = "default";
        }
      });
    }
  });


  function hideVid(elm) {

    const popupContent = document.getElementById(elm.id);
    popupContent.innerHTML = ""; // Dies ist nicht notwendig, solange die ganze Seite reloadet wird
    popupContent.style.visibility = "hidden";
    // Am besten sollte der Rive-State geändert werden...
    //location.reload(false);
  }