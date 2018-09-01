import Waypoints from "../scripts/modules/waypoints";
import Onclick from "../scripts/modules/Onclick";

var banwanWaypoint = new Waypoints('banwan');
var souziWaypoint = new Waypoints('souzi');
var onclick = new Onclick();

/* Waypoint Controller */
banwanWaypoint.popUpTalk(70, -10);
banwanWaypoint.popUpIcon(75, 20);
souziWaypoint.popUpTalk(70, -10);
souziWaypoint.popUpIcon(46, 20);
souziWaypoint.popUpWishIcon(110, 0);

/* Click Controller */
onclick.banwanTalkClickEvent();
onclick.candleSwitchEvent();

// window.addEventListener('click',(event) => {
//     console.log(event.target);
// })
