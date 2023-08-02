const express = require('express');
const cron = require('node-cron');
const fs = require('fs');
const cors = require('cors');

const corsOptions = {
  origin: "https://ekademe.com/"
}

const app = express();

cron.schedule('1 * * * * * *', () => {
  console.log('running'); 
  try {
    fs.writeFileSync('./data.json', JSON.stringify(exampleResponse));
  } catch (error) {
    console.log(error);
  }
});

app.get('/api', cors(corsOptions), (req, res) => {
  try {
    const data = fs.readFileSync('./data.json');
    const parsedData = JSON.parse(data);
    res.send({data: parsedData});
  } catch (error) {
    console.error(error);
  }
});

app.listen(3000, () => {
  console.log('app is active on 3000')
});


const exampleResponse = {
    "statusCode": 200,
    "messageCode": "success",
    "result": {
        "robotTasks": {
            "totalCount": 1,
            "pageNumber": 1,
            "hasMore": false,
            "items": [
                {
                    "id": "7081d73f-a4a3-4631-a5fa-5a61e3e91d43",
                    "status": "successful",
                    "createdAt": 1690966708986,
                    "finishedAt": 1690966771610,
                    "retriedOriginalTaskId": null,
                    "retriedTaskId": null,
                    "retriedByTaskId": null,
                    "startedAt": 1690966709140,
                    "robotId": "ca977b04-1209-4081-8a39-d729c737ddbd",
                    "triedRecordingVideo": false,
                    "robotBulkRunId": null,
                    "runByAPI": false,
                    "runByTaskMonitorId": null,
                    "runByUserId": "60cb2833-88dd-4b4e-ad45-b938b7053033",
                    "userFriendlyError": null,
                    "inputParameters": {
                        "originUrl": "https://www.farfetch.com/nl/shopping/Men/ekademe/items.aspx?page=1&view=12&sort=4&scale=282",
                        "ekademe_male_products_limit": 200
                    },
                    "videoRemovedAt": null,
                    "videoUrl": null,
                    "capturedDataTemporaryUrl": null,
                    "capturedTexts": {},
                    "capturedScreenshots": {},
                    "capturedLists": {
                        "Ekademe male products": [
                            {
                                "Position": "1",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/17/65/21/20/17652120_37011438_480.jpg",
                                "productBrand": "Suicoke",
                                "productDescription": "tie-dye ankle socks",
                                "productOriginalPrice": "60 €",
                                "productDiscountPercentage": "-50%",
                                "productNewPrice": "30 €"
                            },
                            {
                                "Position": "2",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/17/65/21/19/17652119_37011436_480.jpg",
                                "productBrand": "Suicoke",
                                "productDescription": "tie-dye ankle socks",
                                "productOriginalPrice": "60 €",
                                "productDiscountPercentage": "-50%",
                                "productNewPrice": "30 €"
                            },
                            {
                                "Position": "3",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/88/88/83/19888883_44726237_480.jpg",
                                "productBrand": "Comme Des Garçons Shirt",
                                "productDescription": "graphic-print short-sleeved T-shirt",
                                "productOriginalPrice": "114 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "68 €"
                            },
                            {
                                "Position": "4",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/62/00/97/19620097_44822652_480.jpg",
                                "productBrand": "Maison Kitsuné",
                                "productDescription": "fox-patch cotton T-shirt",
                                "productOriginalPrice": "105 €",
                                "productDiscountPercentage": "-35%",
                                "productNewPrice": "68 €"
                            },
                            {
                                "Position": "5",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/66/01/01/19660101_44245186_480.jpg",
                                "productBrand": "Maison Kitsuné",
                                "productDescription": "Vibrant Fox Head print T-shirt",
                                "productOriginalPrice": "115 €",
                                "productDiscountPercentage": "-35%",
                                "productNewPrice": "75 €"
                            },
                            {
                                "Position": "6",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/07/94/10/20079410_45299718_480.jpg",
                                "productBrand": "Comme Des Garçons Shirt",
                                "productDescription": "embossed-logo cotton T-shirt",
                                "productOriginalPrice": "127 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "76 €"
                            },
                            {
                                "Position": "7",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/13/81/56/88/13815688_17319745_480.jpg",
                                "productBrand": "Comme Des Garçons Play",
                                "productDescription": "logo print T-shirt",
                                "productOriginalPrice": "76 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "8",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/11/45/40/20114540_50064698_480.jpg",
                                "productBrand": "Comme Des Garçons Shirt",
                                "productDescription": "embossed-detail cotton T-shirt",
                                "productOriginalPrice": "130 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "78 €"
                            },
                            {
                                "Position": "9",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/77/22/98/19772298_44346767_480.jpg",
                                "productBrand": "Flaneur Homme",
                                "productDescription": "drawstring track pants",
                                "productOriginalPrice": "160 €",
                                "productDiscountPercentage": "-50%",
                                "productNewPrice": "80 €"
                            },
                            {
                                "Position": "10",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/77/14/22/19771422_44340781_480.jpg",
                                "productBrand": "Flaneur Homme",
                                "productDescription": "embroidered-logo trousers",
                                "productOriginalPrice": "160 €",
                                "productDiscountPercentage": "-50%",
                                "productNewPrice": "80 €"
                            },
                            {
                                "Position": "11",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/15/87/93/17/15879317_30626515_480.jpg",
                                "productBrand": "Maison Kitsuné",
                                "productDescription": "embroidered fox head T-shirt",
                                "productOriginalPrice": "85 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "12",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/15/87/78/93/15877893_30859986_480.jpg",
                                "productBrand": "Maison Kitsuné",
                                "productDescription": "fox-patch T-shirt",
                                "productOriginalPrice": "90 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "13",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/12/47/44/14/12474414_11610055_480.jpg",
                                "productBrand": "Comme Des Garçons Play",
                                "productDescription": "graphic print T-shirt",
                                "productOriginalPrice": "94 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "14",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/12/17/36/52/12173652_10317880_480.jpg",
                                "productBrand": "Comme Des Garçons Play",
                                "productDescription": "print T-shirt",
                                "productOriginalPrice": "94 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "15",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/12/07/54/99/12075499_9719883_480.jpg",
                                "productBrand": "Comme Des Garçons Play",
                                "productDescription": "heart print T-shirt",
                                "productOriginalPrice": "94 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "16",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/11/22/57/96/11225796_5920915_480.jpg",
                                "productBrand": "Comme Des Garçons Play",
                                "productDescription": "heart print T-shirt",
                                "productOriginalPrice": "94 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "17",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/17/99/47/68/17994768_42144329_480.jpg",
                                "productBrand": "AMI Paris",
                                "productDescription": "logo-print ribbed three-pack socks",
                                "productOriginalPrice": "95 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "18",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/17/96/07/24/17960724_42188233_480.jpg",
                                "productBrand": "AMI Paris",
                                "productDescription": "embroidered-logo ankle socks",
                                "productOriginalPrice": "95 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "19",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/12/12/50/59/12125059_10002134_480.jpg",
                                "productBrand": "Comme Des Garçons Play",
                                "productDescription": "heart print T-shirt",
                                "productOriginalPrice": "95 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "20",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/13/42/43/76/13424376_15617333_480.jpg",
                                "productBrand": "Comme Des Garçons Play",
                                "productDescription": "logo-print cotton T-shirt",
                                "productOriginalPrice": "96 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "21",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/14/43/29/12/14432912_22387861_480.jpg",
                                "productBrand": "Suicoke",
                                "productDescription": "flat touch strap sandals",
                                "productOriginalPrice": "245 €",
                                "productDiscountPercentage": "-60%",
                                "productNewPrice": "98 €"
                            },
                            {
                                "Position": "22",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/01/66/12/20016612_45185764_480.jpg",
                                "productBrand": "Casablanca",
                                "productDescription": "Mind Vibrations baseball cap",
                                "productOriginalPrice": "160 €",
                                "productDiscountPercentage": "-35%",
                                "productNewPrice": "104 €"
                            },
                            {
                                "Position": "23",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/10/27/24/20102724_45328295_480.jpg",
                                "productBrand": "Maison Kitsuné",
                                "productDescription": "logo-embroidered bucket hat",
                                "productOriginalPrice": "105 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "24",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/06/84/46/20068446_50153231_480.jpg",
                                "productBrand": "Maison Kitsuné",
                                "productDescription": "logo-patch cotton T-shirt",
                                "productOriginalPrice": "105 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "25",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/62/00/91/19620091_44927267_480.jpg",
                                "productBrand": "Maison Kitsuné",
                                "productDescription": "chest logo-patch detail T-shirt",
                                "productOriginalPrice": "105 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "26",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/14/41/94/50/14419450_21090721_480.jpg",
                                "productBrand": "Comme Des Garçons Play",
                                "productDescription": "Play logo T-shirt",
                                "productOriginalPrice": "105 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "27",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/05/75/07/20057507_45289062_480.jpg",
                                "productBrand": "C.P. Company",
                                "productDescription": "Lens-detail swim shorts",
                                "productOriginalPrice": "178 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "107 €"
                            },
                            {
                                "Position": "28",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/18/91/40/39/18914039_41934801_480.jpg",
                                "productBrand": "Suicoke",
                                "productDescription": "LETA-ab bungee lace-up sandals",
                                "productOriginalPrice": "215 €",
                                "productDiscountPercentage": "-50%",
                                "productNewPrice": "107 €"
                            },
                            {
                                "Position": "29",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/18/91/31/26/18913126_41916851_480.jpg",
                                "productBrand": "Suicoke",
                                "productDescription": "LETA-ab bungee lace-up sandals",
                                "productOriginalPrice": "215 €",
                                "productDiscountPercentage": "-50%",
                                "productNewPrice": "107 €"
                            },
                            {
                                "Position": "30",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/69/86/50/19698650_44319423_480.jpg",
                                "productBrand": "Flaneur Homme",
                                "productDescription": "logo-embroidery two-tone hoodie",
                                "productOriginalPrice": "220 €",
                                "productDiscountPercentage": "-50%",
                                "productNewPrice": "110 €"
                            },
                            {
                                "Position": "31",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/59/50/49/19595049_44240236_480.jpg",
                                "productBrand": "AMI Paris",
                                "productDescription": "Ami De Coeur ribbed beanie",
                                "productOriginalPrice": "110 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "32",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/18/91/17/04/18911704_41915510_480.jpg",
                                "productBrand": "Suicoke",
                                "productDescription": "MOTO-Cab paisley-print sandals",
                                "productOriginalPrice": "220 €",
                                "productDiscountPercentage": "-50%",
                                "productNewPrice": "110 €"
                            },
                            {
                                "Position": "33",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/17/99/54/20/17995420_41190405_480.jpg",
                                "productBrand": "AMI Paris",
                                "productDescription": "Ami de Cœur wool beanie",
                                "productOriginalPrice": "110 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "34",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/50/93/98/19509398_43553010_480.jpg",
                                "productBrand": "C.P. Company",
                                "productDescription": "logo-print crew neck sweatshirt",
                                "productOriginalPrice": "186 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "112 €"
                            },
                            {
                                "Position": "35",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/42/41/27/19424127_43277678_480.jpg",
                                "productBrand": "C.P. Company",
                                "productDescription": "Lens-detail crew neck sweatshirt",
                                "productOriginalPrice": "186 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "112 €"
                            },
                            {
                                "Position": "36",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/63/35/59/20633559_50707739_480.jpg",
                                "productBrand": "Comme Des Garçons Play",
                                "productDescription": "logo-patch cotton T-shirt",
                                "productOriginalPrice": "114 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "37",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/18/91/17/18/18911718_41936154_480.jpg",
                                "productBrand": "Suicoke",
                                "productDescription": "chunky open-toe sandals",
                                "productOriginalPrice": "230 €",
                                "productDiscountPercentage": "-50%",
                                "productNewPrice": "115 €"
                            },
                            {
                                "Position": "38",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/30/62/42/20306242_50368420_480.jpg",
                                "productBrand": "Maison Kitsuné",
                                "productDescription": "logo-print cotton T-shirt",
                                "productOriginalPrice": "120 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "39",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/14/57/92/64/14579264_22561167_480.jpg",
                                "productBrand": "Comme Des Garçons Play",
                                "productDescription": "heart appliqué striped T-shirt",
                                "productOriginalPrice": "121 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "40",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/12/86/42/56/12864256_13140541_480.jpg",
                                "productBrand": "Comme Des Garçons Play",
                                "productDescription": "mini heart striped jumper",
                                "productOriginalPrice": "123 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "41",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/17/42/35/08/17423508_37309531_480.jpg",
                                "productBrand": "Maison Kitsuné",
                                "productDescription": "Chillax Fox tapered track pants",
                                "productOriginalPrice": "190 €",
                                "productDiscountPercentage": "-35%",
                                "productNewPrice": "124 €"
                            },
                            {
                                "Position": "42",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/66/46/07/20664607_50609843_480.jpg",
                                "productBrand": "C.P. Company",
                                "productDescription": "ribbed-knit wool beanie",
                                "productOriginalPrice": "125 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "43",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/51/80/69/20518069_50537782_480.jpg",
                                "productBrand": "C.P. Company",
                                "productDescription": "Goggles-detail wool beanie",
                                "productOriginalPrice": "125 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "44",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/79/93/70/19799370_44527739_480.jpg",
                                "productBrand": "Ottolinger",
                                "productDescription": "gradient mesh cropped T-shirt",
                                "productOriginalPrice": "255 €",
                                "productDiscountPercentage": "-50%",
                                "productNewPrice": "128 €"
                            },
                            {
                                "Position": "45",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/73/61/46/19736146_44221058_480.jpg",
                                "productBrand": "Maison Kitsuné",
                                "productDescription": "chest patch sweatshirt",
                                "productOriginalPrice": "200 €",
                                "productDiscountPercentage": "-35%",
                                "productNewPrice": "130 €"
                            },
                            {
                                "Position": "46",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/18/91/18/93/18911893_41127978_480.jpg",
                                "productBrand": "Maison Kitsuné",
                                "productDescription": "logo-appliqué hoodie",
                                "productOriginalPrice": "200 €",
                                "productDiscountPercentage": "-35%",
                                "productNewPrice": "130 €"
                            },
                            {
                                "Position": "47",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/15/87/88/06/15878806_30859989_480.jpg",
                                "productBrand": "Maison Kitsuné",
                                "productDescription": "Fox Head cotton sweatshirt",
                                "productOriginalPrice": "130 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "48",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/16/05/55/19/16055519_30110660_480.jpg",
                                "productBrand": "Comme Des Garçons Play",
                                "productDescription": "multi logo T-shirt",
                                "productOriginalPrice": "133 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "49",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/78/41/36/19784136_44564666_480.jpg",
                                "productBrand": "Maison Kitsuné",
                                "productDescription": "Contour Fox embroidered T-shirt",
                                "productOriginalPrice": "135 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "50",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/78/41/16/19784116_44481305_480.jpg",
                                "productBrand": "Maison Kitsuné",
                                "productDescription": "Contour Fox embroidered T-shirt",
                                "productOriginalPrice": "135 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "51",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/77/15/02/19771502_44456568_480.jpg",
                                "productBrand": "Flaneur Homme",
                                "productDescription": "cotton checked hoodie",
                                "productOriginalPrice": "270 €",
                                "productDiscountPercentage": "-50%",
                                "productNewPrice": "135 €"
                            },
                            {
                                "Position": "52",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/13/27/53/19132753_42044372_480.jpg",
                                "productBrand": "Comme Des Garçons Play",
                                "productDescription": "stripe-pattern cotton T-shirt",
                                "productOriginalPrice": "138 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "53",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/18/05/99/47/18059947_38243580_480.jpg",
                                "productBrand": "Comme Des Garçons Shirt",
                                "productDescription": "tonal wool jumper",
                                "productOriginalPrice": "230 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "138 €"
                            },
                            {
                                "Position": "54",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/64/99/27/20649927_50602068_480.jpg",
                                "productBrand": "Stone Island",
                                "productDescription": "logo-patch ribbed beanie",
                                "productOriginalPrice": "140 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "55",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/25/11/95/20251195_50739924_480.jpg",
                                "productBrand": "AMI Paris",
                                "productDescription": "logo-embroidered organic cotton T-shirt",
                                "productOriginalPrice": "140 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "56",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/59/52/12/19595212_44245945_480.jpg",
                                "productBrand": "AMI Paris",
                                "productDescription": "logo-stamp organic-cotton T-shirt",
                                "productOriginalPrice": "140 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "57",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/94/58/00/19945800_44837726_480.jpg",
                                "productBrand": "Maison Kitsuné",
                                "productDescription": "Chillax Fox cotton hoodie",
                                "productOriginalPrice": "220 €",
                                "productDiscountPercentage": "-35%",
                                "productNewPrice": "143 €"
                            },
                            {
                                "Position": "58",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/93/34/61/19933461_44892843_480.jpg",
                                "productBrand": "Maison Kitsuné",
                                "productDescription": "logo-embroidered round-neck sweatshirt",
                                "productOriginalPrice": "220 €",
                                "productDiscountPercentage": "-35%",
                                "productNewPrice": "143 €"
                            },
                            {
                                "Position": "59",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/17/81/42/26/17814226_37478174_480.jpg",
                                "productBrand": "Maison Kitsuné",
                                "productDescription": "logo-patch zip-up hoodie",
                                "productOriginalPrice": "225 €",
                                "productDiscountPercentage": "-35%",
                                "productNewPrice": "146 €"
                            },
                            {
                                "Position": "60",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/18/48/43/44/18484344_39800132_480.jpg",
                                "productBrand": "Comme Des Garçons Shirt",
                                "productDescription": "leopard-print lace-up sneakers",
                                "productOriginalPrice": "295 €",
                                "productDiscountPercentage": "-50%",
                                "productNewPrice": "148 €"
                            },
                            {
                                "Position": "61",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/90/79/12/20907912_50965541_480.jpg",
                                "productBrand": "Lemaire",
                                "productDescription": "chest patch-pocket cotton T-shirt",
                                "productOriginalPrice": "150 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "62",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/84/34/57/20843457_50770779_480.jpg",
                                "productBrand": "OAMC",
                                "productDescription": "Ascent patch-detail cotton T-shirt",
                                "productOriginalPrice": "150 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "63",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/53/46/46/19534646_43630407_480.jpg",
                                "productBrand": "C.P. Company",
                                "productDescription": "Lens-detail zipped hoodie",
                                "productOriginalPrice": "257 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "154 €"
                            },
                            {
                                "Position": "64",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/15/73/71/14/15737114_28639559_480.jpg",
                                "productBrand": "Autry",
                                "productDescription": "Medalist low-top sneakers",
                                "productOriginalPrice": "155 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "65",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/48/93/10/19489310_43529834_480.jpg",
                                "productBrand": "Comme Des Garçons Wallet",
                                "productDescription": "zip-detailing leather wallet",
                                "productOriginalPrice": "156 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "66",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/66/08/18/19660818_44671455_480.jpg",
                                "productBrand": "OAMC",
                                "productDescription": "photograph-patch oversized T-shirt",
                                "productOriginalPrice": "320 €",
                                "productDiscountPercentage": "-50%",
                                "productNewPrice": "160 €"
                            },
                            {
                                "Position": "67",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/17/76/27/20177627_50571475_480.jpg",
                                "productBrand": "C.P. Company",
                                "productDescription": "Nylon B Lens-detail crinkled belt bag",
                                "productOriginalPrice": "165 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "68",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/89/04/87/19890487_44659627_480.jpg",
                                "productBrand": "OAMC",
                                "productDescription": "wide-leg bermuda shorts",
                                "productOriginalPrice": "330 €",
                                "productDiscountPercentage": "-50%",
                                "productNewPrice": "165 €"
                            },
                            {
                                "Position": "69",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/72/56/66/20725666_50660121_480.jpg",
                                "productBrand": "Stone Island",
                                "productDescription": "Compass-motif cotton polo shirt",
                                "productOriginalPrice": "170 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "70",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/56/12/17/20561217_50645896_480.jpg",
                                "productBrand": "Stone Island",
                                "productDescription": "Compass-patch cotton polo shirt",
                                "productOriginalPrice": "170 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "71",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/17/95/35/15/17953515_37953207_480.jpg",
                                "productBrand": "Comme Des Garçons Play",
                                "productDescription": "hooded pullover jacket",
                                "productOriginalPrice": "170 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "72",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/17/92/54/24/17925424_37840641_480.jpg",
                                "productBrand": "Comme Des Garçons Play",
                                "productDescription": "x K-Way pullover hooded jacket",
                                "productOriginalPrice": "170 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "73",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/17/40/59/02/17405902_36229600_480.jpg",
                                "productBrand": "OUR LEGACY",
                                "productDescription": "pin-buckle leather belt",
                                "productOriginalPrice": "170 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "74",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/99/19/57/19991957_45062521_480.jpg",
                                "productBrand": "C.P. Company",
                                "productDescription": "logo-patch tapered trousers",
                                "productOriginalPrice": "292 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "175 €"
                            },
                            {
                                "Position": "75",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/81/71/02/19817102_44513906_480.jpg",
                                "productBrand": "C.P. Company",
                                "productDescription": "logo-patch tapered trousers",
                                "productOriginalPrice": "292 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "175 €"
                            },
                            {
                                "Position": "76",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/18/97/68/62/18976862_50686791_480.jpg",
                                "productBrand": "Casablanca",
                                "productDescription": "monogram plaque buckle",
                                "productOriginalPrice": "275 €",
                                "productDiscountPercentage": "-35%",
                                "productNewPrice": "179 €"
                            },
                            {
                                "Position": "77",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/67/91/50/20679150_50627081_480.jpg",
                                "productBrand": "Rick Owens",
                                "productDescription": "fine-knit virgin wool beanie",
                                "productOriginalPrice": "180 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "78",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/55/49/83/20554983_50559482_480.jpg",
                                "productBrand": "Autry",
                                "productDescription": "Medalist low-top leather sneakers",
                                "productOriginalPrice": "180 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "79",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/27/44/59/20274459_50395607_480.jpg",
                                "productBrand": "Rick Owens",
                                "productDescription": "fine-knit virgin wool beanie",
                                "productOriginalPrice": "180 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "80",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/11/36/30/20113630_50225231_480.jpg",
                                "productBrand": "Juun.J",
                                "productDescription": "short-sleeved cotton T-shirt",
                                "productOriginalPrice": "300 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "180 €"
                            },
                            {
                                "Position": "81",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/07/11/78/20071178_45540944_480.jpg",
                                "productBrand": "Maison Kitsuné",
                                "productDescription": "logo-embroidered long-sleeved cotton hoodie",
                                "productOriginalPrice": "180 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "82",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/16/92/84/31/16928431_33756316_480.jpg",
                                "productBrand": "Autry",
                                "productDescription": "Action panelled low-top sneakers",
                                "productOriginalPrice": "180 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "83",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/48/92/75/19489275_43526654_480.jpg",
                                "productBrand": "Comme Des Garçons Wallet",
                                "productDescription": "zip-detailing leather wallet",
                                "productOriginalPrice": "184 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "84",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/48/88/74/19488874_44882061_480.jpg",
                                "productBrand": "Comme Des Garçons Wallet",
                                "productDescription": "zip-detailing leather wallet",
                                "productOriginalPrice": "184 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "85",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/17/82/91/20178291_50573191_480.jpg",
                                "productBrand": "C.P. Company",
                                "productDescription": "Nylon B drawstring crossbody bag",
                                "productOriginalPrice": "185 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "86",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/80/01/08/19800108_44449860_480.jpg",
                                "productBrand": "C.P. Company",
                                "productDescription": "logo patch pocket sweatshirt",
                                "productOriginalPrice": "186 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "87",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/22/39/70/20223970_50277634_480.jpg",
                                "productBrand": "Comme Des Garçons Shirt",
                                "productDescription": "crochet-knit cotton bucket hat",
                                "productOriginalPrice": "291 €",
                                "productDiscountPercentage": "-35%",
                                "productNewPrice": "189 €"
                            },
                            {
                                "Position": "88",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/61/19/42/19611942_43880519_480.jpg",
                                "productBrand": "Kenzo",
                                "productDescription": "graphic-print short-sleeve T-shirt",
                                "productOriginalPrice": "190 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "89",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/18/64/03/81/18640381_40885373_480.jpg",
                                "productBrand": "Maison Kitsuné",
                                "productDescription": "logo patch sweatshirt",
                                "productOriginalPrice": "190 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "90",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/16/24/96/73/16249673_31025133_480.jpg",
                                "productBrand": "Maison Kitsuné",
                                "productDescription": "embroidered logo sweatshirt",
                                "productOriginalPrice": "190 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "91",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/27/57/74/19275774_42386389_480.jpg",
                                "productBrand": "Wooyoungmi",
                                "productDescription": "logo-print drawstring hoodie",
                                "productOriginalPrice": "480 €",
                                "productDiscountPercentage": "-60%",
                                "productNewPrice": "192 €"
                            },
                            {
                                "Position": "92",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/35/85/40/20358540_50393152_480.jpg",
                                "productBrand": "Wooyoungmi",
                                "productDescription": "multi-pocket cargo shorts",
                                "productOriginalPrice": "330 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "198 €"
                            },
                            {
                                "Position": "93",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/11/36/38/20113638_50228847_480.jpg",
                                "productBrand": "Juun.J",
                                "productDescription": "short-sleeved panelled cotton T-shirt",
                                "productOriginalPrice": "330 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "198 €"
                            },
                            {
                                "Position": "94",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/51/80/62/20518062_50584828_480.jpg",
                                "productBrand": "C.P. Company",
                                "productDescription": "Lens-detail jersey fleece sweatshirt",
                                "productOriginalPrice": "200 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "95",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/17/97/54/27/17975427_37963538_480.jpg",
                                "productBrand": "1017 ALYX 9SM",
                                "productDescription": "round-toe chunky-sole slides",
                                "productOriginalPrice": "500 €",
                                "productDiscountPercentage": "-60%",
                                "productNewPrice": "200 €"
                            },
                            {
                                "Position": "96",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/15/77/92/49/15779249_28890810_480.jpg",
                                "productBrand": "Maison Kitsuné",
                                "productDescription": "fox patch crewneck jumper",
                                "productOriginalPrice": "200 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "97",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/59/51/81/19595181_44231906_480.jpg",
                                "productBrand": "AMI Paris",
                                "productDescription": "Ami de Coeur long-sleeve hoodie",
                                "productOriginalPrice": "310 €",
                                "productDiscountPercentage": "-35%",
                                "productNewPrice": "202 €"
                            },
                            {
                                "Position": "98",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/93/92/93/20939293_51004251_480.jpg",
                                "productBrand": "AMI Paris",
                                "productDescription": "mid-rise straight-leg jeans",
                                "productOriginalPrice": "210 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "99",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/35/75/83/20357583_50930607_480.jpg",
                                "productBrand": "Homme Plissé Issey Miyake",
                                "productDescription": "Pocket pleated messenger bag",
                                "productOriginalPrice": "210 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "100",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/04/72/33/20047233_45188696_480.jpg",
                                "productBrand": "Fear Of God",
                                "productDescription": "logo-embroidered long-sleeved cotton sweatshirt",
                                "productOriginalPrice": "350 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "210 €"
                            },
                            {
                                "Position": "101",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/73/76/36/19737636_44270215_480.jpg",
                                "productBrand": "Comme Des Garçons Play",
                                "productDescription": "hooded pullover jacket",
                                "productOriginalPrice": "210 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "102",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/73/76/35/19737635_44268482_480.jpg",
                                "productBrand": "Comme Des Garçons Play",
                                "productDescription": "lightweight hooded jacket",
                                "productOriginalPrice": "210 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "103",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/18/67/15/72/18671572_40360887_480.jpg",
                                "productBrand": "Maison Kitsuné",
                                "productDescription": "fox-embroidered cotton hoodie",
                                "productOriginalPrice": "210 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "104",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/17/77/30/75/17773075_37546272_480.jpg",
                                "productBrand": "Maison Kitsuné",
                                "productDescription": "logo patch hoodie",
                                "productOriginalPrice": "210 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "105",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/16/44/21/75/16442175_31863297_480.jpg",
                                "productBrand": "Autry",
                                "productDescription": "Medalist low-top sneakers",
                                "productOriginalPrice": "210 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "106",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/84/50/50/19845050_44883313_480.jpg",
                                "productBrand": "Comme Des Garçons Shirt",
                                "productDescription": "long-sleeve wool shirt",
                                "productOriginalPrice": "325 €",
                                "productDiscountPercentage": "-35%",
                                "productNewPrice": "211 €"
                            },
                            {
                                "Position": "107",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/70/28/89/19702889_44303282_480.jpg",
                                "productBrand": "Fear Of God",
                                "productDescription": "Los Feliz suede slides",
                                "productOriginalPrice": "355 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "213 €"
                            },
                            {
                                "Position": "108",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/35/85/95/20358595_50394954_480.jpg",
                                "productBrand": "Wooyoungmi",
                                "productDescription": "logo-embroidered half-sleeve hoodie",
                                "productOriginalPrice": "360 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "216 €"
                            },
                            {
                                "Position": "109",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/35/85/43/20358543_50392983_480.jpg",
                                "productBrand": "Wooyoungmi",
                                "productDescription": "logo-plaque tailored trousers",
                                "productOriginalPrice": "360 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "216 €"
                            },
                            {
                                "Position": "110",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/62/01/03/19620103_45268084_480.jpg",
                                "productBrand": "Maison Kitsuné",
                                "productDescription": "fox-patch cotton hoodie",
                                "productOriginalPrice": "220 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "111",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/18/54/29/28/18542928_39998835_480.jpg",
                                "productBrand": "Marni",
                                "productDescription": "logo-print card holder",
                                "productOriginalPrice": "220 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "112",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/18/01/29/19/18012919_38275278_480.jpg",
                                "productBrand": "OAMC",
                                "productDescription": "logo-print hoodie",
                                "productOriginalPrice": "550 €",
                                "productDiscountPercentage": "-60%",
                                "productNewPrice": "220 €"
                            },
                            {
                                "Position": "113",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/74/33/84/20743384_50692680_480.jpg",
                                "productBrand": "Maison Kitsuné",
                                "productDescription": "logo-print cotton sweatshirt",
                                "productOriginalPrice": "225 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "114",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/65/63/35/19656335_43948477_480.jpg",
                                "productBrand": "Kenzo",
                                "productDescription": "logo-patch straight-leg trousers",
                                "productOriginalPrice": "450 €",
                                "productDiscountPercentage": "-50%",
                                "productNewPrice": "225 €"
                            },
                            {
                                "Position": "115",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/50/95/56/19509556_43531469_480.jpg",
                                "productBrand": "OAMC",
                                "productDescription": "logo-print poplin shirt",
                                "productOriginalPrice": "450 €",
                                "productDiscountPercentage": "-50%",
                                "productNewPrice": "225 €"
                            },
                            {
                                "Position": "116",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/50/88/60/19508860_43531369_480.jpg",
                                "productBrand": "OAMC",
                                "productDescription": "chest logo-print detail shirt",
                                "productOriginalPrice": "450 €",
                                "productDiscountPercentage": "-50%",
                                "productNewPrice": "225 €"
                            },
                            {
                                "Position": "117",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/02/27/61/20022761_45242889_480.jpg",
                                "productBrand": "OAMC",
                                "productDescription": "logo-print drawstring hoodie",
                                "productOriginalPrice": "460 €",
                                "productDiscountPercentage": "-50%",
                                "productNewPrice": "230 €"
                            },
                            {
                                "Position": "118",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/53/99/24/19539924_43615729_480.jpg",
                                "productBrand": "C.P. Company",
                                "productDescription": "lightweight shirt jacket",
                                "productOriginalPrice": "383 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "230 €"
                            },
                            {
                                "Position": "119",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/35/69/89/20356989_50394824_480.jpg",
                                "productBrand": "Juun.J",
                                "productDescription": "flap-pocket T-shirt",
                                "productOriginalPrice": "390 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "234 €"
                            },
                            {
                                "Position": "120",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/18/67/15/22/18671522_40571423_480.jpg",
                                "productBrand": "Comme Des Garçons Play",
                                "productDescription": "heart-patch striped shirt",
                                "productOriginalPrice": "234 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "121",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/67/02/99/19670299_44052268_480.jpg",
                                "productBrand": "Homme Plissé Issey Miyake",
                                "productDescription": "short-sleeves ribbed T-shirt",
                                "productOriginalPrice": "235 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "122",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/09/63/31/20096331_50070519_480.jpg",
                                "productBrand": "Wooyoungmi",
                                "productDescription": "drawstring tapered-leg trousers",
                                "productOriginalPrice": "400 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "240 €"
                            },
                            {
                                "Position": "123",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/40/30/68/19403068_43772177_480.jpg",
                                "productBrand": "Rick Owens",
                                "productDescription": "Pocket Level T-shirt",
                                "productOriginalPrice": "350 €",
                                "productDiscountPercentage": "-30%",
                                "productNewPrice": "245 €"
                            },
                            {
                                "Position": "124",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/18/66/69/46/18666946_40923087_480.jpg",
                                "productBrand": "Kolor",
                                "productDescription": "roll-neck wool jumper",
                                "productOriginalPrice": "615 €",
                                "productDiscountPercentage": "-60%",
                                "productNewPrice": "246 €"
                            },
                            {
                                "Position": "125",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/59/50/22/19595022_44156032_480.jpg",
                                "productBrand": "AMI Paris",
                                "productDescription": "pouch-pocket drawstring hoodie",
                                "productOriginalPrice": "380 €",
                                "productDiscountPercentage": "-35%",
                                "productNewPrice": "247 €"
                            },
                            {
                                "Position": "126",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/59/43/97/19594397_44153695_480.jpg",
                                "productBrand": "AMI Paris",
                                "productDescription": "drop-shoulder drawstring hoodie",
                                "productOriginalPrice": "380 €",
                                "productDiscountPercentage": "-35%",
                                "productNewPrice": "247 €"
                            },
                            {
                                "Position": "127",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/03/37/12/20033712_50253283_480.jpg",
                                "productBrand": "LOEWE",
                                "productDescription": "Anagram-debossed leather cardholder",
                                "productOriginalPrice": "250 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "128",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/11/52/72/26/11527226_50004839_480.jpg",
                                "productBrand": "Thom Browne",
                                "productDescription": "Card Holder With Note Compartment In Black Pebble Grain",
                                "productOriginalPrice": "250 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "129",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/63/93/87/19639387_50261526_480.jpg",
                                "productBrand": "Comme Des Garçons Shirt",
                                "productDescription": "button-up cotton shirt",
                                "productOriginalPrice": "432 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "259 €"
                            },
                            {
                                "Position": "130",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/92/09/60/20920960_50930764_480.jpg",
                                "productBrand": "OAMC",
                                "productDescription": "logo-embroidered cotton T-shirt",
                                "productOriginalPrice": "260 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "131",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/85/18/60/20851860_50790245_480.jpg",
                                "productBrand": "OAMC",
                                "productDescription": "Anthem embroidered-logo cotton T-shirt",
                                "productOriginalPrice": "260 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "132",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/64/74/64/20647464_50626022_480.jpg",
                                "productBrand": "Stone Island",
                                "productDescription": "Compass patch cotton sweatshirt",
                                "productOriginalPrice": "270 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "133",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/35/69/90/20356990_50394802_480.jpg",
                                "productBrand": "Juun.J",
                                "productDescription": "zip-pocket T-shirt",
                                "productOriginalPrice": "450 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "270 €"
                            },
                            {
                                "Position": "134",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/59/51/69/19595169_43856814_480.jpg",
                                "productBrand": "AMI Paris",
                                "productDescription": "Ami De Coeur knitted jumper",
                                "productOriginalPrice": "270 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "135",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/59/51/68/19595168_44149740_480.jpg",
                                "productBrand": "AMI Paris",
                                "productDescription": "Ami de Coeur embroidered sweatshirt",
                                "productOriginalPrice": "270 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "136",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/18/70/33/16/18703316_40462446_480.jpg",
                                "productBrand": "Lanvin",
                                "productDescription": "Bumper lace-up sneakers",
                                "productOriginalPrice": "450 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "270 €"
                            },
                            {
                                "Position": "137",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/08/63/91/20086391_45307585_480.jpg",
                                "productBrand": "Comme Des Garçons Shirt",
                                "productDescription": "long-sleeve striped cotton shirt",
                                "productOriginalPrice": "455 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "273 €"
                            },
                            {
                                "Position": "138",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/04/60/80/19046080_41616145_480.jpg",
                                "productBrand": "OAMC",
                                "productDescription": "Aurora paneled Sneakers",
                                "productOriginalPrice": "550 €",
                                "productDiscountPercentage": "-50%",
                                "productNewPrice": "275 €"
                            },
                            {
                                "Position": "139",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/49/82/64/19498264_43504231_480.jpg",
                                "productBrand": "Rick Owens",
                                "productDescription": "gathered-detail long-sleeved top",
                                "productOriginalPrice": "400 €",
                                "productDiscountPercentage": "-30%",
                                "productNewPrice": "280 €"
                            },
                            {
                                "Position": "140",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/81/32/85/20813285_50862383_480.jpg",
                                "productBrand": "Axel Arigato",
                                "productDescription": "leather lace-up sneakers",
                                "productOriginalPrice": "285 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "141",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/80/46/42/20804642_50823715_480.jpg",
                                "productBrand": "Axel Arigato",
                                "productDescription": "Area Haze sneakers",
                                "productOriginalPrice": "285 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "142",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/78/81/44/19788144_44315616_480.jpg",
                                "productBrand": "sacai",
                                "productDescription": "contrast-hem crew-neck sweatshirt",
                                "productOriginalPrice": "505 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "303 €"
                            },
                            {
                                "Position": "143",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/55/18/23/19551823_43639437_480.jpg",
                                "productBrand": "sacai",
                                "productDescription": "buckle-fastened tailored shorts",
                                "productOriginalPrice": "505 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "303 €"
                            },
                            {
                                "Position": "144",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/62/01/27/19620127_44845888_480.jpg",
                                "productBrand": "Maison Kitsuné",
                                "productDescription": "logo-patch zip-up jacket",
                                "productOriginalPrice": "470 €",
                                "productDiscountPercentage": "-35%",
                                "productNewPrice": "306 €"
                            },
                            {
                                "Position": "145",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/55/85/35/20558535_50624593_480.jpg",
                                "productBrand": "Homme Plissé Issey Miyake",
                                "productDescription": "drawstring pleated shorts",
                                "productOriginalPrice": "310 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "146",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/98/54/79/19985479_44821491_480.jpg",
                                "productBrand": "Axel Arigato",
                                "productDescription": "Marathon R-Trail chunky sneakers",
                                "productOriginalPrice": "310 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "147",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/59/51/80/19595180_43860459_480.jpg",
                                "productBrand": "AMI Paris",
                                "productDescription": "Ami De Coeur long-sleeve hoodie",
                                "productOriginalPrice": "310 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "148",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/42/20/79/19422079_43370114_480.jpg",
                                "productBrand": "Thom Browne",
                                "productDescription": "RWB-tab leather cardholder",
                                "productOriginalPrice": "310 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "149",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/17/79/56/34/17795634_37965987_480.jpg",
                                "productBrand": "Axel Arigato",
                                "productDescription": "Marathon R-Trail sneakers",
                                "productOriginalPrice": "310 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "150",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/03/81/48/19038148_41565351_480.jpg",
                                "productBrand": "Lanvin",
                                "productDescription": "panelled low-top sneakers",
                                "productOriginalPrice": "520 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "312 €"
                            },
                            {
                                "Position": "151",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/40/13/31/19401331_43769494_480.jpg",
                                "productBrand": "Rick Owens",
                                "productDescription": "longline organic cotton hoodie",
                                "productOriginalPrice": "450 €",
                                "productDiscountPercentage": "-30%",
                                "productNewPrice": "315 €"
                            },
                            {
                                "Position": "152",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/17/89/20/18/17892018_37798067_480.jpg",
                                "productBrand": "sacai",
                                "productDescription": "contrast-panel hoodie",
                                "productOriginalPrice": "530 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "318 €"
                            },
                            {
                                "Position": "153",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/59/52/05/19595205_44233520_480.jpg",
                                "productBrand": "AMI Paris",
                                "productDescription": "stripe-detail straight-leg trousers",
                                "productOriginalPrice": "490 €",
                                "productDiscountPercentage": "-35%",
                                "productNewPrice": "319 €"
                            },
                            {
                                "Position": "154",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/59/45/21/19594521_44244089_480.jpg",
                                "productBrand": "AMI Paris",
                                "productDescription": "pressed-crease trousers",
                                "productOriginalPrice": "490 €",
                                "productDiscountPercentage": "-35%",
                                "productNewPrice": "319 €"
                            },
                            {
                                "Position": "155",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/16/67/70/63/16677063_34284097_480.jpg",
                                "productBrand": "Gucci Eyewear",
                                "productDescription": "Web detail navigator-frame sunglasses",
                                "productOriginalPrice": "320 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "156",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/82/21/46/19822146_44499098_480.jpg",
                                "productBrand": "Lanvin",
                                "productDescription": "Bumper low-top sneakers",
                                "productOriginalPrice": "550 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "330 €"
                            },
                            {
                                "Position": "157",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/59/51/84/19595184_44148723_480.jpg",
                                "productBrand": "AMI Paris",
                                "productDescription": "logo-print drawstring hoodie",
                                "productOriginalPrice": "330 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "158",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/59/51/46/19595146_43867043_480.jpg",
                                "productBrand": "AMI Paris",
                                "productDescription": "canvas low-top sneakers",
                                "productOriginalPrice": "330 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "159",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/59/51/45/19595145_44150742_480.jpg",
                                "productBrand": "AMI Paris",
                                "productDescription": "Ami 1980 low-top sneakers",
                                "productOriginalPrice": "330 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "160",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/53/71/63/19537163_43861324_480.jpg",
                                "productBrand": "OUR LEGACY",
                                "productDescription": "Third Cut straight-leg jeans",
                                "productOriginalPrice": "330 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "161",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/02/23/76/20022376_45061881_480.jpg",
                                "productBrand": "Jil Sander",
                                "productDescription": "patch-detail cotton T-shirt",
                                "productOriginalPrice": "510 €",
                                "productDiscountPercentage": "-35%",
                                "productNewPrice": "331 €"
                            },
                            {
                                "Position": "162",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/78/96/29/20789629_50758617_480.jpg",
                                "productBrand": "Homme Plissé Issey Miyake",
                                "productDescription": "Flip pleated V-neck vest",
                                "productOriginalPrice": "335 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "163",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/27/29/43/19272943_44558091_480.jpg",
                                "productBrand": "Axel Arigato",
                                "productDescription": "Astro low-top sneakers",
                                "productOriginalPrice": "335 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "164",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/79/06/53/20790653_50740813_480.jpg",
                                "productBrand": "Wooyoungmi",
                                "productDescription": "Double Lace sneakers",
                                "productOriginalPrice": "560 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "336 €"
                            },
                            {
                                "Position": "165",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/38/97/30/19389730_42632282_480.jpg",
                                "productBrand": "Jil Sander",
                                "productDescription": "logo-print cotton T-shirt",
                                "productOriginalPrice": "340 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "166",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/93/98/34/19939834_44828741_480.jpg",
                                "productBrand": "Juun.J",
                                "productDescription": "layered-effect short-sleeve shirt",
                                "productOriginalPrice": "570 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "342 €"
                            },
                            {
                                "Position": "167",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/79/07/07/20790707_50705977_480.jpg",
                                "productBrand": "Rick Owens",
                                "productDescription": "sleeveless organic cotton T-shirt",
                                "productOriginalPrice": "345 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "168",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/73/91/67/19739167_44242938_480.jpg",
                                "productBrand": "Kenzo",
                                "productDescription": "elephant-print varsity jacket",
                                "productOriginalPrice": "690 €",
                                "productDiscountPercentage": "-50%",
                                "productNewPrice": "345 €"
                            },
                            {
                                "Position": "169",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/53/71/72/19537172_43861382_480.jpg",
                                "productBrand": "OUR LEGACY",
                                "productDescription": "straight-leg denim jeans",
                                "productOriginalPrice": "350 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "170",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/16/16/49/44/16164944_30748235_480.jpg",
                                "productBrand": "OUR LEGACY",
                                "productDescription": "grey-wash high-waisted jeans",
                                "productOriginalPrice": "350 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "171",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/78/96/27/20789627_50688753_480.jpg",
                                "productBrand": "Wooyoungmi",
                                "productDescription": "double-lace high-top sneakers",
                                "productOriginalPrice": "590 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "354 €"
                            },
                            {
                                "Position": "172",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/35/69/48/20356948_50393530_480.jpg",
                                "productBrand": "Wooyoungmi",
                                "productDescription": "logo-plaque split-neck shirt",
                                "productOriginalPrice": "590 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "354 €"
                            },
                            {
                                "Position": "173",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/88/11/18/19881118_44811593_480.jpg",
                                "productBrand": "Lanvin",
                                "productDescription": "logo-embroidered striped T-shirt",
                                "productOriginalPrice": "590 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "354 €"
                            },
                            {
                                "Position": "174",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/50/17/87/19501787_43480188_480.jpg",
                                "productBrand": "C.P. Company",
                                "productDescription": "logo-patch zip-up jacket",
                                "productOriginalPrice": "365 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "175",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/12/54/36/81/12543681_11912805_480.jpg",
                                "productBrand": "Saint Laurent Eyewear",
                                "productDescription": "tortoiseshell square sunglasses",
                                "productOriginalPrice": "365 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "176",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/95/59/38/19955938_44935341_480.jpg",
                                "productBrand": "sacai",
                                "productDescription": "embroidered-logo striped shirt",
                                "productOriginalPrice": "610 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "366 €"
                            },
                            {
                                "Position": "177",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/74/08/14/19740814_44386249_480.jpg",
                                "productBrand": "sacai",
                                "productDescription": "Suiting Long-Sleeve Shirt",
                                "productOriginalPrice": "610 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "366 €"
                            },
                            {
                                "Position": "178",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/75/76/91/19757691_44288996_480.jpg",
                                "productBrand": "VETEMENTS",
                                "productDescription": "inside-out embroidered logo hoodie",
                                "productOriginalPrice": "750 €",
                                "productDiscountPercentage": "-50%",
                                "productNewPrice": "375 €"
                            },
                            {
                                "Position": "179",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/13/79/51/55/13795155_34369864_480.jpg",
                                "productBrand": "Maison Mihara Yasuhiro",
                                "productDescription": "Peterson Original Sole low-top sneakers",
                                "productOriginalPrice": "375 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "180",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/42/20/20/19422020_43279915_480.jpg",
                                "productBrand": "Thom Browne",
                                "productDescription": "stripe-print cotton T-Shirt",
                                "productOriginalPrice": "380 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "181",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/65/15/93/19651593_44111927_480.jpg",
                                "productBrand": "C.P. Company",
                                "productDescription": "Lens-detail lightweight shirt jacket",
                                "productOriginalPrice": "383 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "182",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/64/99/58/20649958_50618425_480.jpg",
                                "productBrand": "C.P. Company",
                                "productDescription": "logo-plaque shirt jacket",
                                "productOriginalPrice": "390 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "183",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/36/94/12/20369412_50403668_480.jpg",
                                "productBrand": "Jil Sander",
                                "productDescription": "logo-print long-sleeve top",
                                "productOriginalPrice": "390 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "184",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/75/54/19/19755419_44244327_480.jpg",
                                "productBrand": "Kenzo",
                                "productDescription": "Boke Flower-intarsia crew-neck jumper",
                                "productOriginalPrice": "390 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "185",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/14/53/14/20/14531420_22105980_480.jpg",
                                "productBrand": "OUR LEGACY",
                                "productDescription": "lightweight jacket",
                                "productOriginalPrice": "390 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "186",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/12/27/85/78/12278578_10713914_480.jpg",
                                "productBrand": "Thom Browne",
                                "productDescription": "cashmere ribbed-knit beanie",
                                "productOriginalPrice": "390 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "187",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/17/74/94/20177494_50573021_480.jpg",
                                "productBrand": "C.P. Company",
                                "productDescription": "Goggles-detail zip-up hooded gilet",
                                "productOriginalPrice": "395 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "188",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/18/88/39/26/18883926_42407663_480.jpg",
                                "productBrand": "Maison Margiela",
                                "productDescription": "50-50 low-top sneakers",
                                "productOriginalPrice": "790 €",
                                "productDiscountPercentage": "-50%",
                                "productNewPrice": "395 €"
                            },
                            {
                                "Position": "189",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/18/96/96/82/18969682_41381054_480.jpg",
                                "productBrand": "OAMC",
                                "productDescription": "Astral crew-neck jumper",
                                "productOriginalPrice": "990 €",
                                "productDiscountPercentage": "-60%",
                                "productNewPrice": "396 €"
                            },
                            {
                                "Position": "190",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/76/43/52/19764352_44681006_480.jpg",
                                "productBrand": "C.P. Company",
                                "productDescription": "logo-patch zip-up sweatshirt",
                                "productOriginalPrice": "397 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "191",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/91/20/87/20912087_50895638_480.jpg",
                                "productBrand": "Rick Owens",
                                "productDescription": "crew-neck cotton T-shirt",
                                "productOriginalPrice": "400 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "192",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/79/07/12/20790712_50705749_480.jpg",
                                "productBrand": "Rick Owens",
                                "productDescription": "crew-neck T-shirt",
                                "productOriginalPrice": "400 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "193",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/06/75/57/20067557_45311740_480.jpg",
                                "productBrand": "Maison Kitsuné",
                                "productDescription": "abstract-print windbreaker",
                                "productOriginalPrice": "615 €",
                                "productDiscountPercentage": "-35%",
                                "productNewPrice": "400 €"
                            },
                            {
                                "Position": "194",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/15/45/75/08/15457508_30169915_480.jpg",
                                "productBrand": "OUR LEGACY",
                                "productDescription": "Third Cut loose-fit jeans",
                                "productOriginalPrice": "400 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "195",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/40/05/90/19400590_43842071_480.jpg",
                                "productBrand": "Rick Owens",
                                "productDescription": "oversized round-neck jumper",
                                "productOriginalPrice": "585 €",
                                "productDiscountPercentage": "-30%",
                                "productNewPrice": "409 €"
                            },
                            {
                                "Position": "196",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/06/95/56/20069556_45193685_480.jpg",
                                "productBrand": "Lanvin",
                                "productDescription": "contrast-trim cotton Bermuda shorts",
                                "productOriginalPrice": "690 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "414 €"
                            },
                            {
                                "Position": "197",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/27/40/32/20274032_50407270_480.jpg",
                                "productBrand": "Rick Owens",
                                "productDescription": "Double LS organic cotton T-shirt",
                                "productOriginalPrice": "415 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "198",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/18/96/30/59/18963059_41437268_480.jpg",
                                "productBrand": "Maison Mihara Yasuhiro",
                                "productDescription": "Peterson high-top sneakers",
                                "productOriginalPrice": "415 €",
                                "productDiscountPercentage": null,
                                "productNewPrice": null
                            },
                            {
                                "Position": "199",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/20/06/91/33/20069133_50039472_480.jpg",
                                "productBrand": "Fear Of God",
                                "productDescription": "almond-toe calf-leather loafers",
                                "productOriginalPrice": "695 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "417 €"
                            },
                            {
                                "Position": "200",
                                "productImageUrl": "https://cdn-images.farfetch-contents.com/19/53/67/45/19536745_43552043_480.jpg",
                                "productBrand": "Fear Of God",
                                "productDescription": "drawstring track pants",
                                "productOriginalPrice": "695 €",
                                "productDiscountPercentage": "-40%",
                                "productNewPrice": "417 €"
                            }
                        ]
                    }
                }
            ]
        }
    }
}
