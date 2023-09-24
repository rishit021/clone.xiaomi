const styledcards = [];

 const addscard = (name,dis,prise,img) =>{
   let scard = {
        name : name,
        Discription : dis,
        prise :prise,
        Image : img
    }

    styledcards.push(scard)
}

addscard(
    'Home Pod',
    'High Qulity Music',
    'From 6,999',
    'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-homepod-202301?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1670389217441'

)
addscard(
    'MI Fit Pro',
    'A Healthy Leap',
    'From 5,999',
    'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-s8-202303_GEO_IN?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1677224522308'

)
addscard(
    'Redmi 13 Pro',
    'Next Gen.',
    'From 26,999',
    'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-14-pro-202303_GEO_IN?wid=400&hei=500&fmt=jpeg&qlt=95&.v=1677311461271'
    
)
    addscard(
        'MI NoteBook',
        'Faster and Boundry Breaker',
        'Starting At 39,999',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-macbook-pro-202301?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1671578693545'

)
addscard(
    'G10 pro',
    'Upcoming Charged Leptops',
    'From 39,999',
    'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-pro-202210_GEO_IN?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1667506331714'
)
export default styledcards