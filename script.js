
import * as LocAR from 'locar';
import * as THREE from 'three';


AFRAME.registerComponent('rotation-reader', {

    tick: (function () {
      var position = new THREE.Vector3();
      var quaternion = new THREE.Quaternion();
  
      return function () {
        this.el.object3D.getWorldPosition(position);
        this.el.object3D.getWorldQuaternion(quaternion);
        // position and rotation now contain vector and quaternion in world space.
      };
    })
  });

//   AFRAME.registerComponent('query-selector-example', {
//   init: function () {
//     this.entities = document.querySelectorAll('.a-entity');
//   },
  
//   tick: function () {
//     // Don't call query selector in here, query beforehand.
//     for (let i = 0; i < this.entities.length; i++) {
//       // Do something with entities.
//     }
//   }
// });

 AFRAME.registerComponent("healthandwellness", {
      init: function() {
       this.el.addEventListener("click", () => {  
      //  window.open("http://www.google.com", "new win");     - this opens a new window w/ no popup
       document.getElementById("hwPopup").style.display ="unset";
          });}});
function removeHwPopup(){
  document.getElementById("hwPopup").style.display = "none";

};

  //            AFRAME.registerComponent('vanish', {
  //   // ...
  //   pause: function () {
      
  //     this.removeEventListener();
  //   }
  //   // ...
  // });
   

     
        window.onload = () => {navigator.geolocation.getCurrentPosition((position) => {
          document.querySelector('a-asset-item').setAttribute('gps-entity-place', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude};`)
        });
       }
