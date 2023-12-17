import gal1 from '../assets/gal1.jpg'
import gal2 from '../assets/gal2.jpg'
import gal3 from '../assets/gal3.jpg'
import gal4 from '../assets/gal4.jpg'
import gal5 from '../assets/gal5.jpg'
import gal6 from '../assets/gal6.jpg'
import gal7 from '../assets/gal7.jpg'
import gal8 from '../assets/gal8.jpg'
import gal9 from '../assets/gal9.jpg'
import gal10 from '../assets/gal10.jpg'
import gal11 from '../assets/gal11.jpg'
import gal12 from '../assets/gal12.jpg'
import gal13 from '../assets/gal13.jpg'
import gal14 from '../assets/gal14.jpg'
import activity1 from '../assets/activity1.jpg'
import activity2 from '../assets/activity2.jpg'
import activity3 from '../assets/activity3.jpg'
import activity4 from '../assets/activity4.jpg'
import activity5 from '../assets/activity5.jpg'
import activity6 from '../assets/gal12.jpg'
import activity7 from '../assets/activity7.jpg'
import activity8 from '../assets/activity8.jpg'
import activity9 from '../assets/activity9.jpg'

const gall = [gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8, gal9, gal10, gal11, gal12, gal13, gal14];

export const gallaryImage = gall.map(image => {
    return {
      src: image,
      orderS: 3,
      orderM: 4,
      orderL: 5,
    }
  });

export const activity = [activity1, activity2, activity3, activity4, activity5, activity6, activity7, activity8, activity9]
