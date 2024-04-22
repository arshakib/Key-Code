const container = document.getElementById("keyContainer");

// container.innerHTML = generateHTML("-","-","-")

window.addEventListener("keydown", (e) =>{

    container.innerHTML = generateHTML(e.key,e.code,e.key.charCodeAt(0));

});

function generateHTML(key,code,keyCode){

    return `
    <div class="keyContainer">
      <h4 class="animation">Key</h4>
      <div class="keyContent animation">${key === " " ? "Space" : key}
      </div>
    </div>

    <div class="keyContainer">
      <h4 class="animation">Code</h4>
      <div class="keyContent animation">${code}
      </div>
    </div>

    <div class="keyContainer">
      <h4 class="animation animation">Key Code</h4>
      <div class="keyContent">${keyCode}
      </div>
    </div>

    `;

}