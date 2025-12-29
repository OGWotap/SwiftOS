const apps = {

camera:{
  title:"Camera",
  render:()=>`
    <video id="cam" autoplay></video>
    <button onclick="snap()">📸</button>
    <canvas id="shot" hidden></canvas>
  `,
  onOpen:()=>{
    navigator.mediaDevices.getUserMedia({video:true})
      .then(s=>document.getElementById("cam").srcObject=s);
  }
},

photos:{
  title:"Photos",
  render:()=>`
    <div id="gallery"></div>
  `,
  onOpen:()=>{
    const g=document.getElementById("gallery");
    g.innerHTML=(JSON.parse(localStorage.getItem("photos")||"[]"))
      .map(p=>`<img src="${p}" width="100%">`).join("");
  }
},

appstore:{
  title:"App Store",
  render:()=>`
    <h3>Featured</h3>
    <p>SwiftOS Weather</p>
    <p>SwiftOS Calculator</p>
  `
},

notes:{
  title:"Notes",
  render:()=>`
    <textarea id="noteBox" style="width:100%;height:80vh;"></textarea>
  `,
  onOpen:()=>{
    const n=document.getElementById("noteBox");
    n.value=localStorage.getItem("note")||"";
    n.oninput=()=>localStorage.setItem("note",n.value);
  }
},

settings:{
  title:"Settings",
  render:()=>`
    <p>Wi-Fi</p>
    <p>Bluetooth</p>
    <p>General</p>
    <p>Sounds</p>
  `
}

};
