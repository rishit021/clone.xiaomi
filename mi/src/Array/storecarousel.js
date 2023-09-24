export let posters = [];
export let movieposter = []
export let msposters = []

let addposter = (name, dis, price, img) =>{
    let poster = {
        name : name,
        dis : dis,
        price : price,
        img : img
    }

    posters.push(poster)
}

let addmovieposter = (img) =>{
    let poster = {
        img : img,
    }

    movieposter.push(poster)
}
let addmsposters = (dis,logo,img) =>{
    let poster = {
        dis : dis,
        logo : logo,
        img : img
    }

    msposters.push(poster)
}

addposter(
    'redmi 11 Prime',
    '5G all Rounder',
    '19,999',
    'https://i03.appmifile.com/631_operator_in/26/04/2023/1bb20d51c3f711b35e23d60ad1358cca.jpg?f=webp'
)

addposter(
    'Xiaomi Smart TV X Pro Series',
    'Disgned by Xiaomi. Powerd by Google',
    '29,999',
    'https://i03.appmifile.com/221_operator_in/27/04/2023/1e2669ad8444c9dfb60dcea6741c157e.jpg?f=webp'
)

addposter(
    'Redmi Note 12 Pro Plus 5G',
    '200MP supernote.',
    'Making memories with lens',
    'https://i03.appmifile.com/294_operator_in/27/04/2023/22b7ccd9108b1d835b4674df4e83ff5a.jpg?f=webp',
)

addposter(
    'Best Selling Tabs',
    'Carry your powerhouse',
    'From 12,999',
    'https://i03.appmifile.com/166_operator_in/27/04/2023/77b691e84a08e3d3dab68b8377458dca.jpg?f=webp'
)

addposter(
    'Xiaomi Robot Wacuum',
    'Mop 2I',
    '15,999',
    'https://i03.appmifile.com/929_operator_in/28/04/2023/75cc472e197d0bcf3914f76075acd754.jpg?f=webp'
)

addmovieposter(
    'https://is2-ssl.mzstatic.com/image/thumb/yz8wdRYi6Dput1ZLlsV0MA/980x551.jpg'
)

addmovieposter(
    'https://is2-ssl.mzstatic.com/image/thumb/JdmLVQN99mIa15_uECg4uw/980x551.jpg'
)

addmovieposter(
    'https://is3-ssl.mzstatic.com/image/thumb/OCdJtCx9e51TYxoG8aBJZQ/980x551.jpg'
)

addmovieposter(
    'https://is3-ssl.mzstatic.com/image/thumb/Ze8uZ-TWJ2JMbqmtcz8_BA/980x551.jpg'
)
addmovieposter(
    'https://is2-ssl.mzstatic.com/image/thumb/A_R7PS9DPKeHWxifN_JHFg/980x551.jpg'
)

addmsposters(
    'Thor',
    'love and thunder',
    'https://w0.peakpx.com/wallpaper/83/580/HD-wallpaper-movie-black-panther-wakanda-forever.jpg'  
)
addmsposters(
    'Thor',
    'love and thunder',
    'https://w0.peakpx.com/wallpaper/485/37/HD-wallpaper-doctor-strange-in-the-multiverse-of-madness.jpg'
)

