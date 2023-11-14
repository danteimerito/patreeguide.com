import { createStore } from 'vuex';

const savedSelectedTypes = localStorage.getItem('selectedTypes');
const initialSelectedTypes = savedSelectedTypes ? JSON.parse(savedSelectedTypes) : [];

const savedSelectedNeedles = localStorage.getItem('selectedNeedles');
const initialSelectedNeedles = savedSelectedNeedles ? JSON.parse(savedSelectedNeedles) : [];

const savedSelectedClusters = localStorage.getItem('selectedClusters');
const initialSelectedClusters = savedSelectedClusters ? JSON.parse(savedSelectedClusters) : [];

const savedSelectedLeafTypes = localStorage.getItem('selectedLeafTypes');
const initialSelectedLeafTypes = savedSelectedLeafTypes ? JSON.parse(savedSelectedLeafTypes) : [];

const savedSelectedCompoundStructures = localStorage.getItem('selectedCompoundStructures');
const initialSelectedCompoundStructures = savedSelectedCompoundStructures ? JSON.parse(savedSelectedCompoundStructures) : [];

const savedSelectedLeafAttachments = localStorage.getItem('selectedLeafAttachments');
const initialSelectedLeafAttachments = savedSelectedLeafAttachments ? JSON.parse(savedSelectedLeafAttachments) : [];

const savedSelectedFallColors = localStorage.getItem('selectedFallColors');
const initialSelectedFallColors = savedSelectedFallColors ? JSON.parse(savedSelectedFallColors) : [];

const initialTreesState = [
  // {
  //   nameCommon: "Alternate-leaved Dogwood",
  //   aka: [
  //     "Green Osier",
  //     "Pagoda Dogwood"
  //   ],
  //   order: "Cornales",
  //   family: "Cornaceae",
  //   familyCommon: "Dogwood",
  //   genus: "Cornus",
  //   species: "Cornus alternifolia",
  //   type: "deciduous",
  //   leafType: "simple",
  //   leafAttachment: "alternate",
  //   fallColor: [
  //     "red"
  //   ],
  //   slug: "alternate-leaveddogwood",
  //   background: "bg_pexels1.jpg", 
  //   backgroundSmall: "bg_pexels1_small.jpg",

  //   photo1Credit: '<a target="blank_" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/User:IvanTortuga">Cody Hough</a> <a target="blank_" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:Cornus_alternifolia_005.jpg">Cornus alternifolia 005</a> <a target="blank_" rel="noopener noreferrer" href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
  //   photo1Href: "https://en.wikipedia.org/wiki/Cornus_alternifolia#/media/File:Cornus_alternifolia_005.jpg",
  //   photo1Alt: "Cornus alternifolia 005",
  //   photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Cornus_alternifolia_005.jpg/256px-Cornus_alternifolia_005.jpg",

  //   photo2Credit: "Elbert L. Little, Jr., of the U.S. Department of Agriculture, Forest Service, and others, Public domain, via Wikimedia Commons",
  //   photo2Href: "https://en.wikipedia.org/wiki/Cornus_alternifolia#/media/File:Cornus_alternifolia_range_map_1.png",
  //   photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Cornus_alternifolia_range_map_1.png/256px-Cornus_alternifolia_range_map_1.png",

  //   photo3Credit: '<a target="blank_" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/User:Jaknouse">Jaknouse</a> <a target="blank_" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:Jk-cornus_alternifoliaflower.jpg">Jk-cornus alternifoliaflower</a> <a target="blank_" rel="noopener noreferrer" href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
  //   photo3Href: "https://en.wikipedia.org/wiki/Cornus_alternifolia#/media/File:Jk-cornus_alternifoliaflower.jpg",
  //   photo3Alt: "Jk-cornus alternifoliaflower",
  //   photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Jk-cornus_alternifoliaflower.jpg/256px-Jk-cornus_alternifoliaflower.jpg",

  //   description:  "<p>The Alternate-leaved Dogwood (Cornus alternifolia), also known as Pagoda Dogwood for its tiered, horizontal branches, is a deciduous tree that boasts a unique architectural flair in woodland gardens. This North American native typically matures to a modest 15-25 feet tall, flourishing in the understory with a preference for partial shade and well-drained, acidic soils. Its leaves, arranged alternately as its name suggests—uncommon among dogwoods—emerge as a bright green, turning to purplish-red in the fall. In late spring to early summer, the tree is adorned with clusters of small, creamy-white flowers, which give way to dark blue berries on red stems, providing a feast for native birds. The tree's bark, mottled and gray, adds winter interest. With a low canopy and non-invasive root system, the Alternate-leaved Dogwood is a versatile addition to residential landscapes, offering year-round visual appeal and ecological benefits.</p>"
  // },
  // {
  //   nameCommon: "American Basswood",
  //   aka: [
  //     "American Linden"
  //   ],
  //   order: "Malvales",
  //   family: "Malvaceae",
  //   familyCommon: "Linden",
  //   genus: "Tilia",
  //   species: "Tilia americana",
  //   type: "deciduous",
  //   leafType: "simple",
  //   leafAttachment: "alternate",
  //   fallColor: [
  //     "yellow",
  //     "orange"
  //   ],
  //   slug: "americanbasswood",
  //   background: "bg_pexels7.jpg", 
  //   backgroundSmall: "bg_pexels7_small.jpg",
  //   description: "<p>The American Basswood (Tilia americana), a stately decidome that can soar to grand heights of 60-120 feet, is renowned for its expansive canopy, which provides a lush, deep shade. This native North American tree is often found in rich, moist woods and along streams throughout the eastern and central United States. It has a broadly columnar to rounded shape, with a straight trunk and symmetrically branching crown. Heart-shaped, serrated leaves flutter in the slightest breeze and turn a vibrant yellow come autumn. In early summer, small, fragrant cream-colored flowers dangle from slender peduncles, drawing in a symphony of pollinators; these blooms later develop into small, nut-like fruits. The Basswood's soft, lightweight wood is highly valued for carving and woodworking. A gentle giant in the landscape, the American Basswood is a favorite for wildlife and a classical choice for shade in urban and rural settings.</p>",

  //   photo1Credit: '<a target="blank_" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:Tilia_americana,_Arnold_Arboretum_-_IMG_5911.JPG">Public domain, via Wikimedia Commons</a>',
  //   photo1Href: "https://en.wikipedia.org/wiki/Tilia_americana#/media/File:Tilia_americana,_Arnold_Arboretum_-_IMG_5911.JPG",
  //   photo1Alt: "Tilia americana, Arnold Arboretum - IMG 5911",
  //   photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Tilia_americana%2C_Arnold_Arboretum_-_IMG_5911.JPG/256px-Tilia_americana%2C_Arnold_Arboretum_-_IMG_5911.JPG",

  //   photo2Credit: '<a target="blank_" rel="noopener noreferrer" href="https://www.flickr.com/people/138014579@N08">Plant Image Library</a> <a target="blank_" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:Tilia_americana_(American_Linden)_(28268263222).jpg">Tilia americana (American Linden) (28268263222)</a> <a target="blank_" rel="noopener noreferrer" href="https://creativecommons.org/licenses/by-sa/2.0/legalcode" rel="license">CC BY-SA 2.0</a>',
  //   photo2Href: "https://en.wikipedia.org/wiki/Tilia_americana#/media/File:Tilia_americana_(American_Linden)_(28268263222).jpg",
  //   photo2Alt: "Tilia americana (American Linden) (28268263222)",
  //   photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Tilia_americana_%28American_Linden%29_%2828268263222%29.jpg/256px-Tilia_americana_%28American_Linden%29_%2828268263222%29.jpg",

  //   photo3Credit: "U.S. Geological Survey, Public domain, via Wikimedia Commons",
  //   photo3Href: "https://en.wikipedia.org/wiki/Tilia_americana#/media/File:Tlilia_americana_map.png",
  //   photo3Alt: "Tlilia americana map",
  //   photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Tlilia_americana_map.png/256px-Tlilia_americana_map.png",
  // },
  // {
  //   nameCommon: "American Beech",
  //   aka: [
  //     "North American Beech"
  //   ],
  //   order: "Fagales",
  //   family: "Fagaceae",
  //   familyCommon: "Beech",
  //   genus: "Fagus",
  //   species: "Fagus grandifolia",
  //   type: "deciduous",
  //   leafType: "simple",
  //   leafAttachment: "alternate",
  //   fallColor: [
  //     "yellow",
  //     "brown"
  //   ],
  //   slug: "americanbeech", 
  //   background:"bg_forest1.jpg",
  //   backgroundSmall: "bg_forest1_small.jpg",
  //   description: "<p>The American Beech (Fagus grandifolia) is a noble and imposing hardwood, native to the eastern United States and southeastern Canada. Its grandeur is evident as it reaches up to 80 feet tall with a broad, rounded crown. The smooth, silvery-gray bark is unmistakably sleek, often carved with initials that persist for decades. Its elliptical leaves are a glossy green, with finely toothed margins, turning a rich bronze in the fall, often lingering on the branches into winter. Spring unfurls tiny, inconspicuous flowers, succeeded by small, prickly husks that contain edible nuts, coveted by wildlife. This tree prefers well-drained, acidic soils and doesn't tolerate urban pollution well, making it a staple in less disturbed forested areas. American Beech is slow-growing but long-lived, often reaching 300 years, with its stately presence and dense canopy offering a serene backdrop or an anchor in larger landscapes.</p>",

  //   photo1Credit: '<a target="blank_" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/User:Marqqq">Marqqq</a> <a target="blank_" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:Beech_with_Branches.jpg">Beech with Branches</a> <a target="blank_" rel="noopener noreferrer" href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
  //   photo1Href: "https://en.wikipedia.org/wiki/Fagus_grandifolia#/media/File:Beech_with_Branches.jpg",
  //   photo1Alt: "Beech with Branches",
  //   photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Beech_with_Branches.jpg/256px-Beech_with_Branches.jpg",

  //   photo2Credit: '<a target="blank_" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/User:Dcrjsr">Dcrjsr</a> <a target="blank_" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:Fagus_grandifolia_beech_leaves_close.jpg">Fagus grandifolia beech leaves close</a> <a target="blank_" rel="noopener noreferrer" href="https://creativecommons.org/licenses/by/3.0/legalcode" rel="license">CC BY 3.0</a>',
  //   photo2Href: 'https://en.wikipedia.org/wiki/Fagus_grandifolia#/media/File:Fagus_grandifolia_beech_leaves_close.jpg',
  //   photo2Alt: "Fagus grandifolia beech leaves close",
  //   photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Fagus_grandifolia_beech_leaves_close.jpg/256px-Fagus_grandifolia_beech_leaves_close.jpg",

  //   photo3Credit: "Elbert L. Little, Jr., of the U.S. Department of Agriculture, Forest Service, and others, Public domain, via Wikimedia Commons",
  //   photo3Href: "https://commons.wikimedia.org/wiki/File:Fagus_grandifolia_range_map_1.png",
  //   photo3Alt: "Fagus grandifolia range map 1",
  //   photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Fagus_grandifolia_range_map_1.png/256px-Fagus_grandifolia_range_map_1.png",
  // },
  // {
  //   nameCommon: "American Bladdernut",
  //   order: "Crossosomatales",
  //   family: "Staphyleaceae",
  //   familyCommon: "Bladdernut",
  //   genus: "Staphylea",
  //   species: "Staphylea trifolia",
  //   type: "deciduous",
  //   leafType: "compound",
  //   compoundStructure: "single",
  //   leafAttachment: "opposite",
  //   fallColor: [
  //     "yellow",
  //     "brown"
  //   ],
  //   slug: "americanbladdernut", 
  //   description: "<p>The American Bladdernut (Staphylea trifolia) is a charming, underutilized deciduous shrub or small tree, typically growing to a modest height of 10-15 feet. Native to the understory of Eastern North America's forests, this plant thrives in moist, well-drained soils, often along stream banks and in rich woodlands. Its most distinctive feature is the inflated, bladder-like seed pods that hang in clusters, turning from green to a papery brown as they mature in the fall. These whimsical pods add a unique textural element to the landscape and a point of interest in winter after the leaves have fallen. The tree's foliage is comprised of trifoliate leaves, which are arranged oppositely on arching branches, presenting a soft green hue in spring and transforming to a clear yellow in autumn. In spring, drooping clusters of fragrant, bell-shaped white flowers grace the tree, providing a delicate floral display. The American Bladdernut is a versatile and low-maintenance choice for naturalized areas or woodland gardens.</p>",

  //   photo1Credit: '<a target="blank_" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/User:Nonenmac">Randy A. Nonenmacher</a> <a target="blank_" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:Staphylea_trifolia_SCA-3462.jpg">Staphylea trifolia SCA-3462</a> <a target="blank_" rel="noopener noreferrer" href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
  //   photo1Href: "https://en.wikipedia.org/wiki/Staphylea_trifolia#/media/File:Staphylea_trifolia_SCA-3462.jpg",
  //   photo1Alt: "Staphylea trifolia SCA-3462",
  //   photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Staphylea_trifolia_SCA-3462.jpg/256px-Staphylea_trifolia_SCA-3462.jpg",

  //   photo2Credit: "U.S. Geological Survey, Public domain, via Wikimedia Commons",
  //   photo2Href: "https://en.wikipedia.org/wiki/Staphylea_trifolia#/media/File:Staphylea_trifolia_range_map.png",
  //   photo2Alt: "Staphylea trifolia range map",
  //   photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Staphylea_trifolia_range_map.png/256px-Staphylea_trifolia_range_map.png",

  //   // photo3Credit: "",
  //   // photo3Href: "",
  //   // photo3Alt: "",
  //   // photo3Src: "",
  // },
  // {
  //   nameCommon: "American Chestnut",
  //   order: "Fagales",
  //   family: "Fagaceae",
  //   familyCommon: "Beech",
  //   genus: "Castanea",
  //   species: "Castanea dentata",
  //   type: "deciduous",
  //   leafType: "simple",
  //   leafAttachment: "alternate",
  //   fallColor: [
  //     "yellow"
  //   ],
  //   slug: "americanchestnut",
  //   description: "<p>The American Chestnut (Castanea dentata) was once a titan of the Eastern American forests, casting its shadow across the landscape with towering heights reaching up to 100 feet. Recognized by its broad, spreading canopy, the tree was both a timber staple and a critical wildlife food source, with its abundant, nutritious nuts. Its leaves are long and narrow with a toothed edge, and they turn to a golden hue in autumn. However, the early 20th century saw this species decimated by the chestnut blight, a fungal disease accidentally introduced from imported Asiatic chestnut trees. The blight's devastation transformed this once-dominant tree into a rarity, leaving behind only the sprouting stumps of former giants, as the blight does not affect the roots which can still resprout. Efforts are ongoing to restore this species through science and selective breeding with blight-resistant trees. The American Chestnut's tale is a poignant reminder of the fragility and interconnectedness of ecological systems.</p>",

  //   photo1Credit: 'The original uploader was <a target="blank_" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/de:User:Peatcher">Peatcher</a> at <a target="blank_" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/de:">German Wikipedia</a> <a target="blank_" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:American_Chestnut.JPG">American Chestnut</a> <a target="blank_" rel="noopener noreferrer" href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
  //   photo1Href: "https://en.wikipedia.org/wiki/American_chestnut#/media/File:American_Chestnut.JPG",
  //   photo1Alt: "American Chestnut",
  //   photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/American_Chestnut.JPG/256px-American_Chestnut.JPG",

  //   photo2Credit: "Elbert L. Little, Jr., of the U.S. Department of Agriculture, Forest Service, and others, Public domain, via Wikimedia Commons",
  //   photo2Href: "https://en.wikipedia.org/wiki/American_chestnut#/media/File:Castanea_dentata_range_map_2.png",
  //   photo2Alt: "Castanea dentata range map 2",
  //   photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Castanea_dentata_range_map_2.png/256px-Castanea_dentata_range_map_2.png",


  //   photo3Credit: 'Original uploader was <a target="blank_" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Vanvlitp">Vanvlitp</a> at <a href="https://en.wikipedia.org">en.wikipedia</a>, <a target="blank_" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:AmericanChestnutPollen.JPG">AmericanChestnutPollen</a>, <a target="blank_" rel="noopener noreferrer" href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
  //   photo3Href: "https://en.wikipedia.org/wiki/American_chestnut#/media/File:AmericanChestnutPollen.JPG",
  //   photo3Alt: "American Chestnut Pollen",
  //   photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/AmericanChestnutPollen.JPG/256px-AmericanChestnutPollen.JPG",

  


  // },
  // {
  //   nameCommon: "American Elm",
  //   aka: [
  //     "White Elm",
  //     "Water Elm"
  //   ],
  //   order: "Rosales",
  //   family: "Ulmaceae",
  //   familyCommon: "Elm",
  //   genus: "Ulmus",
  //   species: "Ulmus americana",
  //   type: "deciduous",
  //   leafType: "simple",
  //   leafAttachment: "alternate",
  //   fallColor: [
  //     "yellow"
  //   ],
  //   slug: "americanelm",
  //   description: "<p>The American Elm (Ulmus americana) once lined the streets of towns across North America with its distinctive vase-like silhouette reaching heights of 60-80 feet. This beloved deciduous tree was famed for its dense canopy of serrated, ovate leaves, which turned golden yellow in fall, and its ability to thrive in various soil types. In the spring, small, inconspicuous flowers appear before the leaves, developing into flat, papery samaras, or winged seeds. However, the mid-20th century saw this majestic tree besieged by Dutch elm disease, a fungal infection spread by bark beetles, leading to widespread decimation of the population. Despite this, the American Elm remains a symbol of strength and endurance, with ongoing efforts to cultivate disease-resistant varieties. Its wood, once used for shipbuilding and furniture, is now less commonly harvested due to its rarity. The American Elm's story is one of both ecological loss and the hope for restoration.</p>",

  //   photo1Credit: '<a href="https://commons.wikimedia.org/wiki/User:Msact">Marty Aligata</a>, <a href="https://commons.wikimedia.org/wiki/File:American_Elm_Tree,_Old_South_Street,_Northampton,_MA_-_October_2019.jpg">American Elm Tree, Old South Street, Northampton, MA - October 2019</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode" rel="license">CC BY-SA 4.0</a>',
  //   photo1Href: "https://en.wikipedia.org/wiki/Ulmus_americana#/media/File:American_Elm_Tree,_Old_South_Street,_Northampton,_MA_-_October_2019.jpg",
  //   photo1Alt: "American Elm Tree, Old South Street, Northampton, MA - October 2019",
  //   photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/American_Elm_Tree%2C_Old_South_Street%2C_Northampton%2C_MA_-_October_2019.jpg/256px-American_Elm_Tree%2C_Old_South_Street%2C_Northampton%2C_MA_-_October_2019.jpg",

  //   photo2Credit: '<a href="https://www.flickr.com/people/35478170@N08">Matt Lavin</a> from Bozeman, Montana, USA, <a href="https://commons.wikimedia.org/wiki/File:Ulmus_americana_(5102579562).jpg">Ulmus americana (5102579562)</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0/legalcode" rel="license">CC BY-SA 2.0</a>',
  //   photo2Href: "https://en.wikipedia.org/wiki/Ulmus_americana#/media/File:Ulmus_americana_(5102579562).jpg",
  //   photo2Alt: "Ulmus americana (5102579562)",
  //   photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Ulmus_americana_%285102579562%29.jpg/256px-Ulmus_americana_%285102579562%29.jpg",

  //   photo3Credit: 'Judy Gallagher, <a href="https://commons.wikimedia.org/wiki/File:American_Elm_-_Ulmus_americana,_Occoquan_Regional_Park,_Lorton,_Virginia.jpg">American Elm - Ulmus americana, Occoquan Regional Park, Lorton, Virginia</a>, <a href="https://creativecommons.org/licenses/by/2.0/legalcode" rel="license">CC BY 2.0</a>',
  //   photo3Href: "https://en.wikipedia.org/wiki/Ulmus_americana#/media/File:American_Elm_-_Ulmus_americana,_Occoquan_Regional_Park,_Lorton,_Virginia.jpg",
  //   photo3Alt: "American Elm - Ulmus americana, Occoquan Regional Park, Lorton, Virginia",
  //   photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/American_Elm_-_Ulmus_americana%2C_Occoquan_Regional_Park%2C_Lorton%2C_Virginia.jpg/256px-American_Elm_-_Ulmus_americana%2C_Occoquan_Regional_Park%2C_Lorton%2C_Virginia.jpg",


  // },
  // {
  //   nameCommon: "American Hophornbeam",
  //   aka: [
  //     "Eastern Hophornbeam",
  //     "Hardhack",
  //     "Ironwood",
  //     "Leverwood"
  //   ],
  //   order: "Fagales",
  //   family: "Betulaceae",
  //   familyCommon: "Birch",
  //   genus: "Ostrya",
  //   species: "Ostrya virginiana",
  //   type: "deciduous",
  //   leafType: "simple",
  //   leafAttachment: "alternate",
  //   fallColor: [
  //     "yellow"
  //   ],
  //   slug: "americanhophornbeam",
  //   description: "<p>The American Hophornbeam (Ostrya virginiana), also known as Ironwood for its dense, hard timber, is a small to medium-sized deciduous tree that often grows to 40 feet in height. It features a rounded crown with slender, spreading branches, and flaky bark that adds texture to landscapes. Native to North America, it thrives in well-drained soils, from deep forests to rocky slopes. Its leaves are ovate and sharply-toothed, resembling those of the elm but more finely textured, turning yellow to orange in the fall. Spring brings long, attractive catkins, followed by distinctive hop-like fruit clusters that persist through winter, providing interest and food for wildlife. The tree's wood is valued for tool handles and sporting equipment, owing to its toughness. Unassuming yet resilient, the American Hophornbeam is a low-maintenance choice for naturalized areas or as a landscape specimen where its subtle beauty and durable nature can be appreciated.</p>",
  //   photo1Credit: '<a href="https://commons.wikimedia.org/wiki/User:Eric_in_SF">Eric Hunt</a>, <a href="https://commons.wikimedia.org/wiki/File:Ostrya_virginiana_2.jpg">Ostrya virginiana 2</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
  //   photo1Href: "https://en.wikipedia.org/wiki/Ostrya_virginiana#/media/File:Ostrya_virginiana_2.jpg",
  //   photo1Alt: "Ostrya virginiana 2",
  //   photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Ostrya_virginiana_2.jpg/256px-Ostrya_virginiana_2.jpg",

  //   photo2Credit: '<a href="https://www.flickr.com/people/86548370@N00">Katja Schulz</a> from Washington, D. C., USA, <a href="https://commons.wikimedia.org/wiki/File:Eastern_Hophornbeam_-_Flickr_-_treegrow_(4).jpg">Eastern Hophornbeam - Flickr - treegrow (4)</a>, <a href="https://creativecommons.org/licenses/by/2.0/legalcode" rel="license">CC BY 2.0</a>',
  //   photo2Href: "https://en.wikipedia.org/wiki/Ostrya_virginiana#/media/File:Eastern_Hophornbeam_-_Flickr_-_treegrow_(4).jpg",
  //   photo2Alt: "Eastern Hophornbeam - Flickr - treegrow (4)",
  //   photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Eastern_Hophornbeam_-_Flickr_-_treegrow_%284%29.jpg/256px-Eastern_Hophornbeam_-_Flickr_-_treegrow_%284%29.jpg",
  //   photo3Credit: '<a href="https://www.flickr.com/people/86548370@N00">Katja Schulz</a> from Washington, D. C., USA, <a href="https://commons.wikimedia.org/wiki/File:Eastern_Hophornbeam_-_Flickr_-_treegrow_(3).jpg">Eastern Hophornbeam - Flickr - treegrow (3)</a>, <a href="https://creativecommons.org/licenses/by/2.0/legalcode" rel="license">CC BY 2.0</a>',
  //   photo3Href: "https://en.wikipedia.org/wiki/Ostrya_virginiana#/media/File:Eastern_Hophornbeam_-_Flickr_-_treegrow_(3).jpg",
  //   photo3Alt: "Eastern Hophornbeam - Flickr - treegrow (3)",
  //   photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Eastern_Hophornbeam_-_Flickr_-_treegrow_%283%29.jpg/256px-Eastern_Hophornbeam_-_Flickr_-_treegrow_%283%29.jpg",
  //   photo4Credit:'Elbert L. Little, Jr., Public domain, via Wikimedia Commons',
  //   photo4Href:"https://en.wikipedia.org/wiki/Ostrya_virginiana#/media/File:Ostrya_virginiana_range_map.jpg",
  //   photo4Alt: "Ostrya virginiana range map",
  //   photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Ostrya_virginiana_range_map.jpg/256px-Ostrya_virginiana_range_map.jpg",
  // },
  // {
  //   nameCommon: "American Mountain-ash",
  //   order: "Rosales",
  //   family: "Rosaceae",
  //   familyCommon: "Rose",
  //   genus: "Sorbus",
  //   species: "Sorbus americana",
  //   type: "deciduous",
  //   leafType: "compound",
  //   compoundStructure: "single",
  //   leafAttachment: "alternate",
  //   fallColor: [
  //     "yellow"
  //   ],
  //   slug: "americanmountain-ash", 
  //   description: "The American Mountain-ash (Sorbus americana) is a small, decorative tree native to the northeastern United States and eastern Canada, flourishing in the cooler climates of higher altitudes and northern latitudes. Typically reaching 15 to 30 feet in height, it graces the landscape with a rounded crown and fine, textured foliage. Its compound leaves are composed of numerous leaflets, turning a striking array of oranges and reds in the autumn. In late spring to early summer, the tree is adorned with dense clusters of white flowers, which develop into vibrant, orange-red berries by late summer. These berry clusters persist into winter, offering a valuable food source for birds and wildlife. The Mountain-ash is not a true ash but is so named for its ash-like leaves. Its slender gray bark and modest stature make it an excellent choice for residential gardens where its ornamental berries and fall color can be a focal point.",
  //   photo1Credit: '<a href="https://commons.wikimedia.org/wiki/User:Bruce_Marlin">Bruce Marlin</a>, <a href="https://commons.wikimedia.org/wiki/File:Sorbus_americana.jpg">Sorbus americana</a>, <a href="https://creativecommons.org/licenses/by-sa/2.5/legalcode" rel="license">CC BY-SA 2.5</a>',
  //   photo1Href: "https://en.wikipedia.org/wiki/Sorbus_americana#/media/File:Sorbus_americana.jpg",
  //   photo1Alt: "Sorbus americana",
  //   photo1Src: "https://upload.wikimedia.org/wikipedia/commons/4/48/Sorbus_americana.jpg",
  //   photo2Credit: "U.S. Geological Survey, Public domain, via Wikimedia Commons",
  //   photo2Href: "https://en.wikipedia.org/wiki/Sorbus_americana#/media/File:Sorbus_americana.png",
  //   photo2Alt: "Sorbus americana range map",
  //   photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Sorbus_americana.png/256px-Sorbus_americana.png",
  //   // photo3Credit: "",
  //   // photo3Href: "",
  //   // photo3Alt: "",
  //   // photo3Src: "",
  // },
  // {
  //   nameCommon: "American Papaw",
  //   order: "Magnoliales",
  //   family: "Annonaceae",
  //   familyCommon: "Custard-apple",
  //   genus: "Asimina",
  //   species: "Asimina triloba",
  //   type: "deciduous",
  //   leafType: "simple",
  //   leafAttachment: "alternate",
  //   fallColor: [
  //     "yellow"
  //   ],
  //   slug: "americanpapaw",
  //   description: "The American Pawpaw (Asimina triloba) presents a lush, tropical appearance, yet it is indigenous to the temperate woodlands of North America. This small deciduous tree grows to about 20 feet tall and thrives in the understory, preferring rich, well-drained soils. Its broad, oblong leaves, which can reach up to 12 inches in length, turn a deep yellow in the fall. In the spring, the pawpaw tree is distinctive for its unusual, purplish-brown flowers, which give way to large, green, mango-like fruits by late summer. The fruits have a custard-like texture with a flavor reminiscent of bananas mixed with mango, and are beloved by both humans and wildlife. As the largest edible fruit native to the United States, the pawpaw is gaining popularity for its unique taste and nutritional value. With its natural resilience and low maintenance, the American Pawpaw is a rewarding addition for those looking to cultivate native edibles and support local biodiversity.",
  //   photo1Credit: '<a href="https://commons.wikimedia.org/wiki/User:Cbarlow">Cbarlow</a>, <a href="https://commons.wikimedia.org/wiki/File:Pawpaw_patch_shade_2.jpg">Pawpaw patch shade 2</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode" rel="license">CC BY-SA 4.0</a>',
  //   photo1Href: "https://en.wikipedia.org/wiki/Asimina_triloba#/media/File:Pawpaw_patch_shade_2.jpg",
  //   photo1Alt: "Pawpaw patch shade 2",
  //   photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Pawpaw_patch_shade_2.jpg/256px-Pawpaw_patch_shade_2.jpg",
  //   photo2Credit: "Scott Bauer, USDA, Public domain, via Wikimedia Commons",
  //   photo2Href: "https://en.wikipedia.org/wiki/Asimina_triloba#/media/File:Asimina_triloba3.jpg",
  //   photo2Alt: "Asimina triloba3",
  //   photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Asimina_triloba3.jpg/256px-Asimina_triloba3.jpg",
  //   photo3Credit: "Elbert L. Little, Jr., of the U.S. Department of Agriculture, Forest Service, and others, Public domain, via Wikimedia Commons",
  //   photo3Href: "https://en.wikipedia.org/wiki/Asimina_triloba#/media/File:Asimina_triloba_range_map_1.png",
  //   photo3Alt: "Asimina triloba range map 1",
  //   photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Asimina_triloba_range_map_1.png/256px-Asimina_triloba_range_map_1.png",
  // },
  // {
  //   nameCommon: "American Persimmon",
  //   aka: [
  //     "Common Persimmon",
  //     "Eastern Persimmon",
  //     "Simmon",
  //     "Possumwood"
  //   ],
  //   order: "Ericales",
  //   family: "Ebenaceae",
  //   familyCommon: "Ebony",
  //   genus: "Diospyros",
  //   species: "Diospyros virginiana",
  //   type: "deciduous",
  //   leafType: "simple",
  //   leafAttachment: "alternate",
  //   fallColor: [
  //     "yellow"
  //   ],
  //   slug: "americanpersimmon",
  //   description: "<p>The American Persimmon (Diospyros virginiana) is a native deciduous tree that graces the Eastern United States with its presence. Growing to a height of 35-60 feet, this species is renowned for its hardiness and adaptability, thriving in a variety of soils and conditions. The persimmon's bark is distinctive—dark, thick, and deeply furrowed, providing textural interest throughout the year. Its leaves are broad and glossy, offering a rich, green canopy in summer before turning to vivid shades of yellow, orange, and red in the autumn.</p><p>Springtime blooms are inconspicuous, but they give way to the tree's true bounty: the persimmon fruit. These round, orange berries are astringent when unripe but become sweet and custard-like after the first frost, making them a treat for wildlife and humans alike. The fruits have a long history of use in traditional Native American cuisine and are still valued today for their flavor and nutritional content. The American Persimmon is not just a food source but also a striking ornamental tree, particularly attractive to those interested in native planting and wildlife gardening.</p>",
  //   photo1Credit: 'Gphoto, <a href="https://commons.wikimedia.org/wiki/File:Persimmon.jpg">Persimmon</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
  //   photo1Href: "https://en.wikipedia.org/wiki/Diospyros_virginiana#/media/File:Persimmon.jpg",
  //   photo1Alt: "Persimmon",
  //   photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Persimmon.jpg/256px-Persimmon.jpg",

  //   photo2Credit: '<a href="https://commons.wikimedia.org/wiki/User:Peterwchen">Peterwchen</a>, <a href="https://commons.wikimedia.org/wiki/File:Diospyros_virginiana-fruit.jpg">Diospyros virginiana-fruit</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode" rel="license">CC BY-SA 4.0</a>',
  //   photo2Href: "https://en.wikipedia.org/wiki/Diospyros_virginiana#/media/File:Diospyros_virginiana-fruit.jpg",
  //   photo2Alt: "Diospyros virginiana-fruit",
  //   photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Diospyros_virginiana-fruit.jpg/256px-Diospyros_virginiana-fruit.jpg",
  //   photo3Credit: "U.S. Geological Survey, Public domain, via Wikimedia Commons",
  //   photo3Href: "https://en.wikipedia.org/wiki/Diospyros_virginiana#/media/File:Diospyros_virginiana_map.png",
  //   photo3Alt: "Diospyros virginiana range map",
  //   photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Diospyros_virginiana_map.png/256px-Diospyros_virginiana_map.png",    
  // },
  // {
  //   nameCommon: "American Plum",
  //   aka: [
  //     "Wild Plum"
  //   ],
  //   order: "Rosales",
  //   family: "Rosaceae",
  //   familyCommon: "Rose",
  //   genus: "Prunus",
  //   species: "Prunus americana",
  //   type: "deciduous",
  //   leafType: "simple",
  //   leafAttachment: "alternate",
  //   fallColor: [
  //     "yellow",
  //     "gold"
  //   ],
  //   slug: "americanplum",
  //   description: "The American Plum (Prunus americana), also known as Wild Plum, is a versatile deciduous tree native to North America, adaptable to a range of environments from stream banks to prairies. Typically growing to 15-25 feet in height, it forms a rounded shape with a thicket of branches that can be trained as a single trunk or allowed to spread naturally. In early spring, before the foliage unfurls, the tree is covered with a profusion of fragrant white flowers, attracting pollinators and signaling the end of winter. The blossoms give way to small, red to yellow plums with a tart flavor, ripening by late summer. These fruits are enjoyed by wildlife and can be used in jams and jellies. The leaves are serrated and green, turning to yellow or red hues in the fall. The American Plum's rugged bark and branch structure provide winter interest, making it a resilient and attractive choice for naturalized areas or as a wildlife-friendly addition to the home garden.",
  //   photo1Credit: '<a href="https://www.flickr.com/photos/33762104@N00">Andrew Ciscel</a>, <a href="https://commons.wikimedia.org/wiki/File:Prunus_americana.jpg">Prunus americana</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0/legalcode" rel="license">CC BY-SA 2.0</a>',
  //   photo1Href: "https://en.wikipedia.org/wiki/Prunus_americana#/media/File:Prunus_americana.jpg",
  //   photo1Alt: "Prunus americana",
  //   photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Prunus_americana.jpg/256px-Prunus_americana.jpg",

  //   photo2Credit: 'USDA-NRCS PLANTS Database / Herman, D.E., et al. 1996. North Dakota tree handbook. USDA NRCS ND State Soil Conservation Committee; NDSU Extension and Western Area Power Administration, Bismarck., Public domain, via Wikimedia Commons',
  //   photo2Href: "https://en.wikipedia.org/wiki/Prunus_americana#/media/File:Pram_004_php.jpg",
  //   photo2Alt: "American Plum",
  //   photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Pram_004_php.jpg/256px-Pram_004_php.jpg",
    
  //   photo3Credit: "Elbert L. Little, Jr., of the U.S. Department of Agriculture, Forest Service, Public domain, via Wikimedia Commons",
  //   photo3Href: "https://en.wikipedia.org/wiki/Prunus_americana#/media/File:Prunus_americana_range_map_1.png",
  //   photo3Alt: "Prunus americana range map",
  //   photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Prunus_americana_range_map_1.png/256px-Prunus_americana_range_map_1.png",
  // },
  // {
  //   nameCommon: "American Pussy Willow",
  //   aka: [
  //     "Glaucous Willow"
  //   ],
  //   order: "Malpighiales",
  //   family: "Salicaceae",
  //   familyCommon: "Willow",
  //   genus: "Salix",
  //   species: "Salix discolor",
  //   type: "deciduous",
  //   leafType: "simple",
  //   leafAttachment: "alternate",
  //   fallColor: [
  //     "yellow"
  //   ],
  //   slug: "americanpussywillow",
  //   description: "<p>The American Pussy Willow (Salix discolor) is a beloved harbinger of spring, with its distinctive soft, silver catkins that burst forth on bare branches, often while the chill of winter still lingers. This deciduous shrub or small tree is native to North America, typically reaching 6 to 15 feet in height, and is cherished for its early-season interest and ease of care. The pussy willow's branches spread informally, creating a loosely structured, rounded silhouette.</p><p>The catkins, which precede the leaves, are a favorite in floral arrangements and are one of the first sources of pollen for bees. As the season progresses, the catkins give way to lance-shaped, light green leaves. The pussy willow thrives in moist, well-drained soil, and full to partial sunlight, often naturally occurring near wetlands and stream banks. Its ability to tolerate wet conditions makes it an excellent choice for rain gardens or naturalized areas. With minimal pruning, the American Pussy Willow remains a charming and rustic addition to any landscape.</p>",
  //   photo1Credit: 'Public domain, via Wikimedia Commons',
  //   photo1Href: "https://en.wikipedia.org/wiki/Salix_discolor#/media/File:Pussy_willow_branch.jpg",
  //   photo1Alt: "Pussy willow branch",
  //   photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Pussy_willow_branch.jpg/256px-Pussy_willow_branch.jpg",
  
  //   photo2Credit: "Public domain, via Wikimedia Commons",
  //   photo2Href: "https://en.wikipedia.org/wiki/Salix_discolor#/media/File:Salix_discolor_(USDA).jpg",
  //   photo2Alt: "American Pussy Willow",
  //   photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Salix_discolor_%28USDA%29.jpg/154px-Salix_discolor_%28USDA%29.jpg",
  //   photo3Credit: '<a href="https://commons.wikimedia.org/wiki/User:Silk666">Silk666</a>, <a href="https://commons.wikimedia.org/wiki/File:S_discolor_male_flowers.JPG">S discolor male flowers</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
  //   photo3Href: "https://en.wikipedia.org/wiki/Salix_discolor#/media/File:S_discolor_male_flowers.JPG",
  //   photo3Alt: "male flowers",
  //   photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/S_discolor_male_flowers.JPG/256px-S_discolor_male_flowers.JPG",
  // },
  // {
  //   nameCommon: "American Sweetgum",
  //   aka: [
  //     "Sweetgum"
  //   ],
  //   order: "Saxifragales",
  //   family: "Altingiaceae",
  //   genus: "Liquidambar",
  //   species: "Liquidambar styraciflua",
  //   type: "deciduous",
  //   leafType: "lobed",
  //   leafAttachment: "alternate",
  //   fallColor: [
  //     "red"
  //   ],
  //   slug: "americansweetgum",
  //   description: "<p>The American Sweetgum (Liquidambar styraciflua) is a striking deciduous tree cherished for its star-shaped leaves and brilliant autumnal colors. Towering at an impressive height of 60 to 75 feet, it casts a commanding presence with a pyramidal to oval form. The glossy green leaves transition through a splendid palette of reds, purples, and oranges as the seasons turn, offering a spectacular fall display.</p><p>Springtime ushers in inconspicuous flowers, which develop into the tree's distinctive spiky seed balls. These seed pods hang from the branches throughout the winter, adding texture to the bare limbs. The sweetgum's bark is deeply furrowed, featuring corky ridges that create an interesting pattern with age.</p><p>Preferring full sun and moist, rich soils, the sweetgum is a popular landscaping choice, often used in parks and large spaces. However, its seed pods can be a nuisance in residential settings. Despite this, the American Sweetgum remains valued for its ornamental beauty and as a source of hardwood.</p>",
  //   photo1Credit: '<a href="https://commons.wikimedia.org/wiki/User:Famartin">Famartin</a>, <a href="https://commons.wikimedia.org/wiki/File:2014-11-02_13_06_29_Sweet_Gum_during_autumn_along_Lower_Ferry_Road_in_Ewing,_New_Jersey.JPG">2014-11-02 13 06 29 Sweet Gum during autumn along Lower Ferry Road in Ewing, New Jersey</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode" rel="license">CC BY-SA 4.0</a>',
  //   photo1Href: "https://en.wikipedia.org/wiki/Liquidambar_styraciflua#/media/File:2014-11-02_13_06_29_Sweet_Gum_during_autumn_along_Lower_Ferry_Road_in_Ewing,_New_Jersey.JPG",
  //   photo1Alt: "Sweet Gum during autumn along Lower Ferry Road in Ewing, New Jersey 2014-11-02 13 06 29 ",
  //   photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/2014-11-02_13_06_29_Sweet_Gum_during_autumn_along_Lower_Ferry_Road_in_Ewing%2C_New_Jersey.JPG/256px-2014-11-02_13_06_29_Sweet_Gum_during_autumn_along_Lower_Ferry_Road_in_Ewing%2C_New_Jersey.JPG",

  //   photo2Credit: 'Photo: <a href="https://commons.wikimedia.org/wiki/User:JLPC">JLPC</a> /&nbsp;<a href="/wiki/Main_Page">Wikimedia Commons</a>&nbsp;/&nbsp;<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/wiki/File:Liquidambar_feuilles_FR_2013.jpg">Liquidambar feuilles FR 2013</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
  //   photo2Href: "https://en.wikipedia.org/wiki/Liquidambar_styraciflua#/media/File:Liquidambar_feuilles_FR_2013.jpg",
  //   photo2Alt: "Liquidambar feuilles FR 2013",
  //   photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Liquidambar_feuilles_FR_2013.jpg/256px-Liquidambar_feuilles_FR_2013.jpg",
   
  //   photo3Credit: 'Shane Vaughn, <a href="https://commons.wikimedia.org/wiki/File:Liquidambar_styraciflua_bloom.JPG">Liquidambar styraciflua bloom</a>, <a href="https://creativecommons.org/licenses/by/3.0/legalcode" rel="license">CC BY 3.0</a>',
  //   photo3Href: "https://en.wikipedia.org/wiki/Liquidambar_styraciflua#/media/File:Liquidambar_styraciflua_bloom.JPG",
  //   photo3Alt: "Liquidambar styraciflua bloom",
  //   photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Liquidambar_styraciflua_bloom.JPG/256px-Liquidambar_styraciflua_bloom.JPG",
  //   photo4Credit: "Elbert L. Little, Jr., of the U.S. Department of Agriculture, Forest Service, Public domain, via Wikimedia Commons",
  //   photo4Href: "https://en.wikipedia.org/wiki/Liquidambar_styraciflua#/media/File:Liquidambar_styraciflua_range_map_4.png",
  //   photo4Alt: "Liquidambar styraciflua range map",
  //   photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Liquidambar_styraciflua_range_map_4.png/256px-Liquidambar_styraciflua_range_map_4.png",
  // },
  // {
  //   nameCommon: "American Sycamore",
  //   aka: [
  //     "American Planetree",
  //     "Buttonwood",
  //     "Water Beech"
  //   ],
  //   order: "Proteales",
  //   family: "Platanaceae",
  //   familyCommon: "Sycamore",
  //   genus: "Platanus",
  //   species: "Platanus occidentalis",
  //   type: "deciduous",
  //   leafType: "simple",
  //   leafAttachment: "alternate",
  //   fallColor: [
  //     "brown"
  //   ],
  //   slug: "americansycamore",
  //   description: "<p>The American Sycamore (Platanus occidentalis), also known as the American Plane or Buttonwood, is a grand, fast-growing deciduous tree known for its size and longevity. Dominating the landscape with heights reaching 70 to 100 feet, it boasts a massive, sturdy trunk and a wide-spreading canopy that can provide ample shade. This tree is easily recognizable by its mottled exfoliating bark, which flakes off in patches to reveal a creamy white and green inner bark, giving the trunk and limbs a distinctive camouflage-like appearance.</p><p>Its large, palmate leaves are bright green and turn to a golden brown in the fall, before dropping to reveal round, ball-like seed clusters that dangle from the branches. These seeds persist through winter, decorating the bare tree. The American Sycamore is a hardy species, often planted in urban environments for its tolerance to pollution and its ability to thrive in a wide range of soil conditions. With its impressive stature and unique bark, it serves as a striking ornamental tree for large landscapes.</p>",
  //   photo1Credit: "Huw Williams (Huwmanbeing), Public domain, via Wikimedia Commons",
  //   photo1Href: "https://en.wikipedia.org/wiki/Platanus_occidentalis#/media/File:Sycamore_in_Warren_County,_Indiana.png",
  //   photo1Alt: "Sycamore in Warren County, Indiana",
  //   photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Sycamore_in_Warren_County%2C_Indiana.png/256px-Sycamore_in_Warren_County%2C_Indiana.png",

  //   photo2Credit: '<a href="https://commons.wikimedia.org/wiki/User:John_P_Salvatore">John P Salvatore</a>, <a href="https://commons.wikimedia.org/wiki/File:Sycamore_Tree_Leaf.jpg">Sycamore Tree Leaf</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode" rel="license">CC BY-SA 4.0</a>',
  //   photo2Href: "https://en.wikipedia.org/wiki/Platanus_occidentalis#/media/File:Sycamore_Tree_Leaf.jpg",
  //   photo2Alt: "Sycamore Tree Leaf",
  //   photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sycamore_Tree_Leaf.jpg/256px-Sycamore_Tree_Leaf.jpg",

  //   photo3Credit: '<a href="https://commons.wikimedia.org/wiki/User:Myrichiehaynes">Richard Stephen Haynes</a>, <a href="https://commons.wikimedia.org/wiki/File:Sycamore_Tree_Bark.jpg">Sycamore Tree Bark</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode" rel="license">CC BY-SA 4.0</a>',
  //   photo3Href: "https://en.wikipedia.org/wiki/Platanus_occidentalis#/media/File:Sycamore_Tree_Bark.jpg",
  //   photo3Alt: "Sycamore Tree Bark",
  //   photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Sycamore_Tree_Bark.jpg/256px-Sycamore_Tree_Bark.jpg",
  //   photo4Credit: 'U.S. Geological Survey, Public domain, via Wikimedia Commons',
  //   photo4Href: "https://en.wikipedia.org/wiki/Platanus_occidentalis#/media/File:Platanus_occidentalis_map.png",
  //   photo4Alt: "Platanus occidentalis range map",
  //   photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Platanus_occidentalis_map.png/256px-Platanus_occidentalis_map.png",    
  // },
  // {
  //   nameCommon: "Amur Maple",
  //   aka: [
  //     "Siberian Maple"
  //   ],
  //   order: "Sapindales",
  //   family: "Sapindaceae",
  //   familyCommon: "Maple",
  //   genus: "Acer",
  //   species: "Acer ginnala",
  //   type: "deciduous",
  //   leafType: "lobed",
  //   leafAttachment: "opposite",
  //   fallColor: [
  //     "red",
  //     "orange"
  //   ],
  //   slug: "amurmaple", 
  //   description: '<p>The Amur Maple (Acer ginnala), a native to the northeastern regions of Asia, is a small, versatile deciduous tree or large shrub that is increasingly popular in temperate climates for its ornamental qualities and modest size, typically growing to 15-20 feet in height. With a rounded to open crown, the tree is well-suited for urban gardens and spaces where larger maples would be overwhelming.</p><p>The leaves of the Amur Maple are simple and palmate, resembling miniature versions of the classic maple leaf. They emerge in spring as fresh green, turning to vibrant shades of yellow, orange, and deep red in the fall, providing a spectacular autumn display. In spring, fragrant yellow-white flowers appear, giving way to winged samaras (maple "helicopters") that mature from green to red.</p><p>Hardy and adaptable, the Amur Maple can tolerate a range of soil conditions and is drought-resistant once established. It is often used in landscaping for hedges, screens, or as a stand-alone specimen. Its ability to withstand harsh conditions makes it an attractive and practical choice for gardeners seeking a touch of fall color and year-round interest.</p>',
  //   photo1Credit: '<a href="https://commons.wikimedia.org/wiki/User:MPF">MPF</a>, <a href="https://commons.wikimedia.org/wiki/File:Acer_ginnala.jpg">Acer ginnala</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
  //   photo1Href: "https://en.wikipedia.org/wiki/Acer_ginnala#/media/File:Acer_ginnala.jpg",
  //   photo1Alt: "Acer ginnala",
  //   photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Acer_ginnala.jpg/256px-Acer_ginnala.jpg",
  //   // photo2Credit: "",
  //   // photo2Href: "",
  //   // photo2Alt: "",
  //   // photo2Src: "",
  //   // photo3Credit: "",
  //   // photo3Href: "",
  //   // photo3Alt: "",
  //   // photo3Src: "",
  // },
  // {
  //   nameCommon: "Austrian Pine",
  //   aka: [
  //     "European Black Pine"
  //   ],
  //   order: "Pinales",
  //   family: "Pinaceae",
  //   familyCommon: "Pine",
  //   genus: "Pinus",
  //   species: "Pinus nigra",
  //   type: "conifer",
  //   needleStructure: "clustered needles",
  //   needleCluster: [
  //     2
  //   ],
  //   slug: "austrianpine",
  //   description: "<p>The Austrian Pine (Pinus nigra), also known as the Black Pine, is a robust, evergreen conifer that brings a stately and enduring presence to landscapes. Native to Europe, this species has been widely planted across North America, reaching heights of 40 to 60 feet. It boasts a dense, pyramidal shape in its youth that matures into a rounded and sometimes irregular crown, providing a robust silhouette against the sky.</p><p>The tree's long, dark green needles, growing in pairs, are stiff and lush, offering year-round color and texture. They cluster densely on the branches, creating a thick canopy that provides ample shade. The Austrian Pine is easily recognizable by its thick, deeply fissured, dark gray to black bark, which adds a rugged character especially appreciated in winter months.</p><p>Highly adaptable to a variety of conditions, this pine is valued for its tolerance to urban pollution and soil compaction, making it a favored choice for city plantings and windbreaks. Its sturdy nature and classic coniferous form make the Austrian Pine a reliable and attractive addition to any setting seeking a touch of evergreen resilience.</p>",
  //   photo1Credit: '<a href="https://commons.wikimedia.org/wiki/User:Gvm">Gvm</a>, <a href="https://commons.wikimedia.org/wiki/File:Forest_in_Bulgaria_near_Dundukovo_dam.jpg">Forest in Bulgaria near Dundukovo dam</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0/legalcode" rel="license">CC BY-SA 3.0</a>',
  //   photo1Href: "https://en.wikipedia.org/wiki/Pinus_nigra#/media/File:Forest_in_Bulgaria_near_Dundukovo_dam.jpg",
  //   photo1Alt: "Forest in Bulgaria near Dundukovo dam",
  //   photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Forest_in_Bulgaria_near_Dundukovo_dam.jpg/256px-Forest_in_Bulgaria_near_Dundukovo_dam.jpg",
  //   photo2Credit: '<a href="https://cs.wikipedia.org/wiki/User:Dezidor">Dezidor</a>, <a href="https://commons.wikimedia.org/wiki/File:Borovicová_šiška.jpg">Borovicová šiška</a>, <a href="https://creativecommons.org/licenses/by/3.0/legalcode" rel="license">CC BY 3.0</a>',
  //   photo2Href: "https://en.wikipedia.org/wiki/Pinus_nigra#/media/File:Borovicov%C3%A1_%C5%A1i%C5%A1ka.jpg",
  //   photo2Alt: "Foliage and cone",
  //   photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Borovicov%C3%A1_%C5%A1i%C5%A1ka.jpg/256px-Borovicov%C3%A1_%C5%A1i%C5%A1ka.jpg",
  //   photo3Credit: '<a href="https://commons.wikimedia.org/wiki/User:Famartin">Famartin</a>, <a href="https://commons.wikimedia.org/wiki/File:2021-05-07_12_50_37_Pollen_cones_on_an_Austrian_Pine_within_Franklin_Glen_Park_in_the_Franklin_Glen_section_of_Chantilly,_Fairfax_County,_Virginia.jpg">2021-05-07 12 50 37 Pollen cones on an Austrian Pine within Franklin Glen Park in the Franklin Glen section of Chantilly, Fairfax County, Virginia</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode" rel="license">CC BY-SA 4.0</a>',
  //   photo3Href: "https://en.wikipedia.org/wiki/Pinus_nigra#/media/File:2021-05-07_12_50_37_Pollen_cones_on_an_Austrian_Pine_within_Franklin_Glen_Park_in_the_Franklin_Glen_section_of_Chantilly,_Fairfax_County,_Virginia.jpg",
  //   photo3Alt: "Pollen cones on an Austrian Pine within Franklin Glen Park in the Franklin Glen section of Chantilly, Fairfax County, Virginia 2021-05-07 12 50 37",
  //   photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2021-05-07_12_50_37_Pollen_cones_on_an_Austrian_Pine_within_Franklin_Glen_Park_in_the_Franklin_Glen_section_of_Chantilly%2C_Fairfax_County%2C_Virginia.jpg/256px-2021-05-07_12_50_37_Pollen_cones_on_an_Austrian_Pine_within_Franklin_Glen_Park_in_the_Franklin_Glen_section_of_Chantilly%2C_Fairfax_County%2C_Virginia.jpg",
  //   photo4Credit: 'Photo (c)2007 Derek Ramsey (<a href="https://en.wikipedia.org/wiki/User:Ram-Man">Ram-Man</a>), <a href="https://commons.wikimedia.org/wiki/File:Austrian_Pine_Pinus_nigra_Bark_Closeup_2000px.jpg">Austrian Pine Pinus nigra Bark Closeup 2000px</a>, <a href="https://creativecommons.org/licenses/by-sa/2.5/legalcode" rel="license">CC BY-SA 2.5</a>',
  //   photo4Href: "https://en.wikipedia.org/wiki/Pinus_nigra#/media/File:Austrian_Pine_Pinus_nigra_Bark_Closeup_2000px.jpg",
  //   photo4Alt: "Austrian Pine Pinus nigra Bark Closeup",
  //   photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Austrian_Pine_Pinus_nigra_Bark_Closeup_2000px.jpg/256px-Austrian_Pine_Pinus_nigra_Bark_Closeup_2000px.jpg",
  // },
  {
    nameCommon: "Bald Cypress",
    order: "Pinales",
    family: "Cupressaceae",
    familyCommon: "Bald Cypress",
    genus: "Taxodium",
    species: "Taxodium distichum",
    type: "conifer",
    needleStructure: "single needle",
    fallColor: [
      "brown"
    ],
    slug: "baldcypress",
    description: '<p>The Bald Cypress (Taxodium distichum) is a stately deciduous conifer, iconic in Southern swamps but adaptable to drier lands and cooler climates. Reaching heights of 50 to 70 feet, it is easily recognized by its unique, buttressed trunk and feathery, light green needles that turn a rusty orange before shedding in fall. The tree’s silhouette is strikingly elegant, with a straight, tapering trunk and a pyramidal canopy that becomes more open and spreading with age.</p><p>Native to the southeastern United States, the Bald Cypress is famed for its "knees," woody projections that rise from the roots around the tree, believed to help with gas exchange and stability in its often waterlogged habitat. This remarkable tree is not only a survivor of wet conditions but is also remarkably rot-resistant, making its wood valuable for construction.</p><p>The Bald Cypress is a tree of resilience and beauty, thriving where few others can, and providing vital ecosystem services, as well as aesthetic value to parks, gardens, and natural areas.</p>',
    photo1Credit: "",
    photo1Href: "",
    photo1Alt: "",
    photo1Src: "",
    photo2Credit: "",
    photo2Href: "",
    photo2Alt: "",
    photo2Src: "",
    photo3Credit: "",
    photo3Href: "",
    photo3Alt: "",
    photo3Src: "",
  },
  {
    nameCommon: "Balsam Fir",
    order: "Pinales",
    family: "Pinaceae",
    familyCommon: "Pine",
    genus: "Abies",
    species: "Abies balsamea",
    type: "conifer",
    needleStructure: "single needle",
    slug: "balsamfir",
    description: "<p>The Balsam Fir (Abies balsamea) is a quintessential evergreen conifer native to the cold climates of the northeastern United States and Canada. It reaches a mature height of 45 to 75 feet, displaying a classic conical shape that embodies the spirit of the northern woods. Its dark-green, aromatic needles are arranged in a spiral fashion along the branches, which are dense and contribute to the tree's compact appearance.</p><p>Distinct for its smooth, gray bark and the resin-filled blisters that dot its surface, the Balsam Fir exudes a distinctive fragrance, especially when its needles or resin blisters are crushed. In late fall, it produces upright, cylindrical cones that disintegrate on the tree, releasing seeds to the wind.</p><p>The Balsam Fir is highly valued for its wood, essential oils, and as a traditional Christmas tree. Its dense foliage provides shelter for wildlife and contributes to the picturesque, snow-laden landscapes of the boreal forest. Hardy and shade-tolerant, it’s a symbol of the wilderness and a staple in both natural forests and cultivated landscapes.</p>",
    photo1Credit: "",
    photo1Href: "",
    photo1Alt: "",
    photo1Src: "",
    photo2Credit: "",
    photo2Href: "",
    photo2Alt: "",
    photo2Src: "",
    photo3Credit: "",
    photo3Href: "",
    photo3Alt: "",
    photo3Src: "",
  },
  {
    nameCommon: "Balsam Poplar",
    aka: [
      "Hackmatack",
      "Tacamahac Poplar",
      "Tacamahaca"
    ],
    order: "Malpighiales",
    family: "Salicaceae",
    familyCommon: "Willow",
    genus: "Populus",
    species: "Populus balsamifera",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "balsampoplar",
    description: "<p>The Balsam Poplar (Populus balsamifera), also known as the Balm of Gilead, is a hardy deciduous tree native to the northern regions of North America. With a typical height of 50 to 80 feet, it grows rapidly, forming a tall and narrow silhouette that is robust and hardy against the backdrop of cold climates. Its bark is dark gray and deeply furrowed, providing textural interest throughout the year.</p><p>In early spring, before the leaves unfurl, the Balsam Poplar is adorned with resinous buds that exude a distinctively fragrant, sticky balsam scent. These buds are often harvested for medicinal salves and ointments. The leaves are shiny green, broad, and ovate with finely toothed edges, fluttering and rustling in the breeze, turning yellow in the fall.</p><p>Known for its cotton-like seeds that float through the air in spring, the Balsam Poplar plays a crucial role in riparian ecosystems, providing erosion control and habitat. It's valued for its quick growth, making it an excellent choice for windbreaks and privacy screens in landscape design.</p>",
    photo1Credit: "",
    photo1Href: "",
    photo1Alt: "",
    photo1Src: "",
    photo2Credit: "",
    photo2Href: "",
    photo2Alt: "",
    photo2Src: "",
    photo3Credit: "",
    photo3Href: "",
    photo3Alt: "",
    photo3Src: "",
  },
  {
    nameCommon: "Bitternut Hickory",
    order: "Fagales",
    family: "Juglandaceae",
    familyCommon: "Walnut",
    genus: "Carya",
    species: "Carya cordiformis",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "single",
    leafAttachment: "alternate",
    fallColor: [
      "yellow",
      "golden"
    ],
    slug: "bitternuthickory",
    description: "<p>The Bitternut Hickory (Carya cordiformis) is a tall and stately deciduous tree that is native to the eastern United States. It typically soars to heights of 50 to 80 feet, characterized by a straight, slender trunk and a well-formed, rounded crown. Its bark is smooth and gray when young, becoming shaggy and more deeply furrowed with age, adding to the tree's dignified appearance.</p><p>Noted for its pinnately compound leaves, which usually feature 7 to 11 lance-shaped, serrated leaflets, the Bitternut Hickory's foliage is a vibrant green that transitions to a cheerful yellow in the autumn, creating a bright canopy. The tree produces small, greenish-yellow male and female flowers on the same tree, with the females developing into the bitter-tasting nuts that give the tree its name. These nuts are encased in thin, yellow-green husks that split open when mature.</p><p>Although not favored for human consumption due to their bitter flavor, the nuts are an important food source for wildlife. The Bitternut Hickory is a valuable hardwood species, often used in furniture making and for its high-quality firewood. With its tall stature and strong wood, the Bitternut Hickory is a noble feature in forests, parks, and large landscapes.</p>",
    photo1Credit: "",
    photo1Href: "",
    photo1Alt: "",
    photo1Src: "",
    photo2Credit: "",
    photo2Href: "",
    photo2Alt: "",
    photo2Src: "",
    photo3Credit: "",
    photo3Href: "",
    photo3Alt: "",
    photo3Src: "",
  },
  {
    nameCommon: "Black Ash",
    order: "Lamiales",
    family: "Oleaceae",
    familyCommon: "Olive",
    genus: "Fraxinus",
    species: "Fraxinus nigra",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "single",
    leafAttachment: "opposite",
    fallColor: [
      "yellow",
      "brown"
    ],
    slug: "blackash",
    description: '<p>The Black Ash (Fraxinus nigra) is a deciduous hardwood tree that is indigenous to wetland areas of the northeastern United States and Canada. This slender, medium-sized tree typically grows to heights of 40 to 60 feet. It has a straight trunk with a narrow, rounded crown, and its bark is dark gray to brown with deep furrows and intersecting ridges, creating a diamond-like pattern.</p><p>The tree’s leaves are compound, with 7 to 11 leaflets that are dark green and turn a muted yellow in the fall. Black Ash is dioecious, with separate male and female flowers that appear on different trees before the emergence of leaves. The female trees produce winged samaras that are dispersed by the wind.</p><p>Black Ash is notable for its ability to thrive in wet, swampy conditions, and its wood is highly valued for its flexibility and strength, particularly in the making of baskets, hence its nickname, "basket ash." However, the species is under threat from the invasive Emerald Ash Borer, which has devastated populations of ash trees across North America.</p>',
    photo1Credit: "",
    photo1Href: "",
    photo1Alt: "",
    photo1Src: "",
    photo2Credit: "",
    photo2Href: "",
    photo2Alt: "",
    photo2Src: "",
    photo3Credit: "",
    photo3Href: "",
    photo3Alt: "",
    photo3Src: "",
  },
  {
    nameCommon: "Black Cherry",
    aka: [
      "Wild Black Cherry",
      "Rum Cherry",
      "Mountain Black Cherry"
    ],
    order: "Rosales",
    family: "Rosaceae",
    familyCommon: "Rose",
    genus: "Prunus",
    species: "Prunus serotina",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "blackcherry",
    description: "<p>The Black Cherry (Prunus serotina), also known as Wild Cherry, is a deciduous hardwood species esteemed for both its ecological contributions and valuable lumber. Native to Eastern North America, it reaches heights of 50 to 80 feet in forest settings, displaying a straight trunk and a round-topped canopy when grown in the open.</p><p>The tree's bark is dark and scaly, becoming deeply furrowed with age, and is easily recognizable by its burnt cornflake appearance. In spring, it bears elongated clusters of fragrant white flowers, followed by small, shiny, red-black cherries in late summer. These fruits are a favorite among birds and wildlife, though their bitter taste is less favored by humans until cooked and sweetened.</p><p>Black Cherry leaves are lanceolate and finely toothed, turning yellow to red in the fall. The wood is prized for its rich color and fine grain, used in cabinetry and fine furniture. This cherry species is also known for its medicinal properties, with bark that has been traditionally used as a cough remedy. However, care must be taken as parts of the plant contain cyanide and are toxic if ingested in large quantities.</p>",
    photo1Credit: "",
    photo1Href: "",
    photo1Alt: "",
    photo1Src: "",
    photo2Credit: "",
    photo2Href: "",
    photo2Alt: "",
    photo2Src: "",
    photo3Credit: "",
    photo3Href: "",
    photo3Alt: "",
    photo3Src: "",
  },
  {
    nameCommon: "Black Locust",
    order: "Fabales",
    family: "Fabaceae",
    familyCommon: "legume, pea or bean",
    genus: "Robinia",
    species: "Robinia pseudoacacia",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "single",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "blacklocust",
    description: "<p>The Black Locust (Robinia pseudoacacia) is a fast-growing deciduous tree that is native to the southeastern United States but has been widely planted and naturalized elsewhere. It typically reaches heights of 40 to 100 feet, with a narrow crown and an open, irregular form that lends a rugged appearance to the landscape.</p><p>The tree's bark is deeply furrowed, featuring a dark brown or gray color that provides textural interest. In late spring, it is adorned with fragrant, drooping clusters of white, pea-like flowers that attract bees and butterflies. These blossoms give way to smooth, flat seed pods that persist into winter.</p><p>Black Locust leaves are pinnately compound with small, oval leaflets that flutter in the breeze, creating dappled sunlight beneath. The foliage turns a modest yellow in the fall. Known for its extremely hard and rot-resistant wood, Black Locust is valued for use in outdoor construction and furniture. Despite its beauty and utility, it is often considered invasive outside its native range due to its prolific seeding and rapid growth.</p>",
    photo1Credit: "",
    photo1Href: "",
    photo1Alt: "",
    photo1Src: "",
    photo2Credit: "",
    photo2Href: "",
    photo2Alt: "",
    photo2Src: "",
    photo3Credit: "",
    photo3Href: "",
    photo3Alt: "",
    photo3Src: "",
  },
  {
    nameCommon: "Black Maple",
    order: "Sapindales",
    family: "Sapindaceae",
    familyCommon: "Maple",
    genus: "Acer",
    species: "Acer nigrum",
    type: "deciduous",
    leafType: "lobed",
    leafAttachment: "opposite",
    fallColor: [
      "yellow"
    ],
    slug: "blackmaple",
    description: "<p>The Black Maple (Acer nigrum), a close relative of the sugar maple, is a deciduous tree revered for its striking presence and valuable sap. Found in the central and eastern United States, it grows to heights of 60 to 80 feet, forming a rounded, dense canopy that provides generous shade. Its bark is dark, deeply furrowed, and becomes almost black with age, hence the name.</p><p>The tree’s leaves are telltale, with three main lobes that are less pronounced than those of its sugar maple cousin, featuring drooping edges and a deep green hue that shifts to vibrant yellow and burnt orange in autumn. Spring brings small, yellow-green flowers that are often hidden beneath the foliage, followed by the winged samaras typical of maples, twirling to the ground in a helicopter-like fashion.</p><p>Black Maple's sap is a source for maple syrup, and its hard, strong wood is sought after for furniture and flooring. Adaptable and hardy, the Black Maple is a testament to the enduring beauty and utility of the Acer family.</p>",
    photo1Credit: "",
    photo1Href: "",
    photo1Alt: "",
    photo1Src: "",
    photo2Credit: "",
    photo2Href: "",
    photo2Alt: "",
    photo2Src: "",
    photo3Credit: "",
    photo3Href: "",
    photo3Alt: "",
    photo3Src: "",
  },
  {
    nameCommon: "Black Oak",
    aka: [
      "Eastern Black Oak"
    ],
    order: "Fagales",
    family: "Fagaceae",
    familyCommon: "Beech",
    genus: "Quercus",
    species: "Quercus velutina",
    type: "deciduous",
    leafType: "lobed",
    leafAttachment: "alternate",
    fallColor: [
      "orange",
      "brown"
    ],
    slug: "blackoak",
    description: "<p>The Black Oak (Quercus velutina), a member of the broad oak genus, is a robust and enduring species indigenous to the eastern and central United States. This deciduous tree towers to heights of 50 to 60 feet, occasionally reaching up to 90 feet under optimal conditions. It boasts a broad, rounded crown supported by a sturdy trunk, its bark characteristically dark, deeply furrowed, and nearly black, giving rise to its common name.</p><p>The Black Oak's leaves are distinguished by their shiny, dark green upper surfaces and a paler, often bristly underside. Come autumn, these leaves transform into a brilliant display of reds, oranges, and yellows, decorating the landscape with a classic fall palette. The tree produces acorns that are a vital food source for local wildlife.</p><p>It is valued for its strong, heavy wood, commonly used in flooring, furniture, and interior finishes. Despite its tough exterior, the Black Oak is susceptible to oak wilt, a serious fungal disease. The tree's hardiness and the ecological richness it provides make it a staple of its native woodland habitats.</p>",
    photo1Credit: "",
    photo1Href: "",
    photo1Alt: "",
    photo1Src: "",
    photo2Credit: "",
    photo2Href: "",
    photo2Alt: "",
    photo2Src: "",
    photo3Credit: "",
    photo3Href: "",
    photo3Alt: "",
    photo3Src: "",
  },
  {
    nameCommon: "Black Poplar",
    aka: [
      "Lombardy Poplar"
    ],
    order: "Malpighiales",
    family: "Salicaceae",
    familyCommon: "Willow",
    genus: "Populus",
    species: "Populus nigra",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow",
      "brown"
    ],
    slug: "blackpoplar", 
    description: "<p>The Black Poplar (Populus nigra), a native of Europe and Western Asia, is a tall deciduous tree that has been widely cultivated elsewhere, including North America. It typically soars to heights of 80 to 100 feet, marked by a thick, deeply fissured bark that is dark grey-brown in color. The Black Poplar is particularly noted for its vigorous growth and lofty, spreading crown that provides expansive shade.</p><p>Its leaves are diamond-shaped to triangular, with serrated margins and a glossy, dark green appearance that turns yellow in the fall. The tree is dioecious, with male and female flowers developing on separate trees. The male catkins are red and showy, while the females are more subdued. After pollination, female trees produce fluffy, cotton-like seeds that are dispersed by the wind.</p><p>The Black Poplar is celebrated for its resilience in urban environments and its use in windbreaks and screening. Its timber is soft but tough, often used in manufacturing and for matches. With its imposing stature, the Black Poplar is a prominent feature in many European landscapes, symbolizing strength and endurance.</p>"
  },
  {
    nameCommon: "Black Spruce",
    order: "Pinales",
    family: "Pinaceae",
    familyCommon: "Pine",
    genus: "Picea",
    species: "Picea mariana",
    type: "conifer",
    needleStructure: "single needle",
    slug: "blackspruce",
    description: "<p>The Black Spruce (Picea mariana) is a hardy, evergreen conifer native to the boreal forests of North America. It stands with a straight, cylindrical trunk, reaching modest heights of 30 to 50 feet, a stature that is somewhat diminutive in comparison to other spruces. Its bark is thin, scaly, and gray-brown, flaking off in small circular plates.</p><p>This spruce's crown is narrowly conical, with short, stiff branches that are clothed in a dense cover of short, needle-like leaves. These needles exhibit a bluish-green hue, providing a year-round color display. In the spring, the Black Spruce shows off its reproductive prowess with purple (male) and red (female) cones, which later mature to a ruddy brown.</p><p>Adapted to cooler climates and wet, acidic soils, the Black Spruce often dominates in swampy areas. Its wood is utilized in the paper industry, and it is also a traditional source of spruce gum. The tree's compact size and tolerance of harsh conditions make it a symbol of the resilience and stark beauty of the northern wilderness.</p>"
  },
  {
    nameCommon: "Black Walnut",
    aka: [
      "Eastern Black Walnut"
    ],
    order: "Fagales",
    family: "Juglandaceae",
    familyCommon: "Walnut",
    genus: "Juglans",
    species: "Juglans nigra",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "single",
    leafAttachment: "alternate",
    fallColor: [
      "yellow-green",
      "yellow",
      "green"
    ],
    slug: "blackwalnut",
    description: "<p>The Black Walnut (Juglans nigra) is a majestic hardwood tree renowned for its valuable wood and distinctive nuts. Native to eastern North America, it reaches heights of 70 to 100 feet, often with a straight trunk and a rounded, spreading canopy. The tree's bark is dark brown to blackish, deeply furrowed, forming a rough, diamond pattern.</p><p>Its pinnate leaves are composed of 15-23 leaflets, exuding a unique fragrance when crushed. In spring, the Black Walnut produces inconspicuous, wind-pollinated flowers, followed by the development of its famous fruit: a large, green, globular nut encased in a solid, inedible husk. The nuts, though tough to crack, are sought after for their rich, distinctive flavor.</p><p>The wood of the Black Walnut is highly prized, dark in color, strong, and with a fine grain, making it a favorite for high-quality furniture, cabinetry, and gunstocks. This tree is also appreciated for its shade and ornamental qualities, though it should be planted with care due to the juglone toxin it produces, which can inhibit the growth of nearby plants.</p>"
  },
  {
    nameCommon: "Black Willow",
    aka: [
      "Swamp Willow"
    ],
    order: "Malpighiales",
    family: "Salicaceae",
    familyCommon: "Willow",
    genus: "Salix",
    species: "Salix nigra",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow",
      "light-yellow"
    ],
    slug: "blackwillow",
    description: "<p>The Black Willow (Salix nigra) is a native North American species commonly found along streams and in wetlands, appreciated for its environmental and erosion control benefits. This deciduous tree grows rapidly to heights of 30 to 60 feet, with a leaning, often multi-trunked form that is well adapted to its riparian habitats.</p><p>Its bark is dark brown to black, deeply furrowed, and becomes rough with age. The Black Willow’s narrow, lance-shaped leaves are yellow-green, offering a fluttering display in the breeze due to their long, flexible petioles. These leaves turn a modest yellow in the fall.</p><p>In early spring, it produces catkins, which are followed by small, cottony seeds that disperse widely by wind and water. The tree's wood is soft and is often used in the production of crates and pulp. Known for its prolific root system, the Black Willow plays a crucial role in stabilizing stream banks and is often used in reclamation projects. Despite its preference for moist soil, it can also tolerate drought, making it a resilient species within its native range.</p>"
  },
  {
    nameCommon: "Blackjack Oak",
    order: "Fagales",
    family: "Fagaceae",
    familyCommon: "Beech",
    genus: "Quercus",
    species: "Quercus marilandica",
    type: "deciduous",
    leafType: "lobed",
    leafAttachment: "alternate",
    fallColor: [
      "brown",
      "yellow"
    ],
    slug: "blackjackoak",
    description: "<p>The Blackjack Oak (Quercus marilandica) is a durable and hardy species native to the sandy soils and tough terrains of the central and southern United States. It is a small to medium-sized tree, typically reaching 20 to 40 feet in height, with a dense and irregular crown that provides ample shade. Its bark is dark, rough, and deeply furrowed, resembling blackjacks, which contributed to its common name.</p><p>The tree’s foliage is distinctive, with leaves that are leathery, glossy, and wedge-shaped, resembling a duck’s foot. The leaves display a rich green color that turns to vibrant reds and oranges in the fall, offering a burst of color to the landscape. Blackjack Oak produces small acorns that have a unique, striped cap, providing food for wildlife.</p><p>Adapted to survive in poor, dry soils where other oaks might struggle, the Blackjack Oak is often found in upland areas and savannas. Its wood is used for lumber and fuel, although it is not as commercially sought after as other oaks. The tree's resilience and the unique shape of its leaves make it an interesting and valuable component of the ecosystems it inhabits.</p>"
  },
  {
    nameCommon: "Blue Beech",
    aka: [
      "American Hornbeam",
      "Musclewood"
    ],
    order: "Fagales",
    family: "Betulaceae",
    familyCommon: "Birch",
    genus: "Carpinus",
    species: "Carpinus caroliniana",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "orange",
      "red",
      "dark red"
    ],
    slug: "bluebeech",
    description: "<p>The Blue Beech, also known as the American Hornbeam or Carpinus caroliniana, is a small, shade-tolerant deciduous tree native to the understory of eastern North American forests. It grows modestly to 20-30 feet high, featuring a short trunk and a rounded, spreading crown. The tree's bark is smooth, gray, and fluted, resembling the sinewy muscles of a human arm, which earns it another nickname, \"musclewood.\"</p><p>Its leaves are elliptical, with finely toothed edges and prominent veins, offering a vibrant green that transitions to a fiery mix of orange, red, and yellow in the fall. In spring, the Blue Beech displays modest yellow-green catkins, later developing small nutlets encased in papery bracts that provide food for wildlife.</p><p>Appreciated for its hard wood and ornamental appeal, the Blue Beech is often found along streams and rich bottomlands, thriving in moist, well-drained soils. Its tolerance for shade and unique bark texture make it a favorite for naturalistic landscaping and garden settings.</p>"
  },
  {
    nameCommon: "Blue Spruce",
    aka: [
      "Colorado Spruce",
      "Silver Spruce"
    ],
    order: "Pinales",
    family: "Pinaceae",
    familyCommon: "Pine",
    genus: "Picea",
    species: "Picea pungens",
    type: "conifer",
    needleStructure: "single needle",
    slug: "bluespruce",
    description:"<p>The Blue Spruce, scientifically known as Picea pungens, is a majestic evergreen native to the Rocky Mountains of the United States. Characterized by its impressive stature, it can reach skyward to heights of 50 to 75 feet, presenting a broad, pyramidal shape with sturdy, horizontal branches. The tree's most striking feature is its needle foliage, which ranges from a silvery blue to a rich blue-green hue, providing a year-round display of vibrant color.</p><p>These stiff, sharply pointed needles contribute to the species' name, \"pungens,\" which signifies their pungent nature. In the wild, the Blue Spruce prefers moist, well-drained soils, typically found in mountainous river valleys. It produces cylindrical cones that hang elegantly from the branches, starting out purple and maturing to a pale brown.</p><p>Widely used as an ornamental tree due to its unique color and classic conical Christmas tree shape, the Blue Spruce is also the state tree of Colorado. Despite its beauty, it is a hardy tree, capable of withstanding cold climates and various soil conditions, making it a popular choice in landscapes across various regions.</p>"
  },
  {
    nameCommon: "Boxelder",
    aka: [
      "Manitoba Maple",
      "Ash-leaved Maple"
    ],
    order: "Sapindales",
    family: "Sapindaceae",
    familyCommon: "Maple",
    genus: "Acer",
    species: "Acer negundo",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "single",
    leafAttachment: "opposite",
    fallColor: [
      "yellow"
    ],
    slug: "boxelder",
    description: "<p>The Boxelder, or Acer negundo, is a species of maple distinct for its adaptability and ruggedness. Often considered a lesser maple, this medium-sized tree typically grows to 30-50 feet tall. It has a broad crown and a high branching habit with several main limbs that create a somewhat irregular, rounded shape. Its bark is light gray-brown, deeply cleft into broad ridges, giving it a rough texture.</p><p>What sets the Boxelder apart from other maples is its compound leaves, which are unusual for the genus, consisting of 3-7 leaflets with a coarsely toothed margin. These leaves turn a pale yellow in the fall. It's a dioecious species, with male and female flowers appearing on separate trees in early spring, before the leaves emerge.</p><p>The Boxelder is often found along streams and in floodplains, thriving in a variety of soil conditions. While its wood is of little commercial value, the tree is known for its resilience and is sometimes planted as a fast-growing screen or shade tree. It's also known for attracting boxelder bugs, especially in the autumn and winter.</p>"
  },
  {
    nameCommon: "Buckthorn",
    aka: [
      "Purging Buckthorn",
      "European Buckthorn"
    ],
    order: "Rosales",
    family: "Rhamnaceae",
    familyCommon: "Buckthorn",
    genus: "Rhamnus",
    species: "Rhamnus cathartica",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "opposite",
    fallColor: [
      "green"
    ],
    slug: "buckthorn",
    description: "<p>The Buckthorn, Rhamnus cathartica, is a deciduous shrub or small tree native to Eurasia and known for its invasiveness in North American woodlands. It typically reaches 15-25 feet in height and thrives in a variety of soil types, often spreading aggressively in disturbed habitats.</p><p>Buckthorn is identifiable by its glossy, oval leaves with pronounced veins and finely serrated margins that turn yellow-green in fall. Inconspicuous yellow-green flowers bloom in spring and give way to small, dark berries in late summer and fall. These berries, while toxic to humans, are readily consumed by birds, facilitating the spread of Buckthorn seeds.</p><p>The tree's bark is gray-brown with prominent lenticels. It has a somewhat rounded to columnar shape, and its branches terminate in sharp thorns. While Buckthorn can be used for hedges and wildlife cover, its invasive nature has led many areas to discourage its planting. Control efforts are frequently employed to manage its spread in natural areas where it can outcompete native vegetation and disrupt ecosystems.</p>"
  },
  {
    nameCommon: "Bur Oak",
    aka: [
      "Mossycup Oak"
    ],
    order: "Fagales",
    family: "Fagaceae",
    familyCommon: "Beech",
    genus: "Quercus",
    species: "Quercus macrocarpa",
    type: "deciduous",
    leafType: "lobed",
    leafAttachment: "alternate",
    fallColor: [
      "yellow",
      "brown"
    ],
    slug: "buroak",
    description: "<p>The Bur Oak, Quercus macrocarpa, is a robust and stately tree native to North America, renowned for its longevity and strength. It can grow to an imposing height of 70 to 80 feet with an expansive crown that may reach just as wide. Its trunk is thick and deeply ridged, providing a rugged texture that adds to its impressive appearance.</p></p>Bur Oak leaves are large, with a classic lobed oak shape, turning a rich array of yellows and browns in the fall. It is especially known for its acorns, which are among the largest of any North American oak, featuring a distinctive, fringed cap that covers more than half of the nut.</p><p>Adapted to a variety of habitats, from floodplains to dry uplands, the Bur Oak is drought-resistant, thanks to its deep root system. It provides a habitat for wildlife, and its acorns are a valuable food source for several species. With its grand size and longevity, the Bur Oak is a cherished shade tree in landscapes and an important species in native woodland ecosystems.</p>"
  },
  {
    nameCommon: "Butternut",
    aka: [
      "White Walnut"
    ],
    order: "Fagales",
    family: "Juglandaceae",
    familyCommon: "Walnut",
    genus: "Juglans",
    species: "Juglans cinerea",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "single",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "butternut",
    description: "<p>The Butternut tree, Juglans cinerea, also known as the White Walnut, is a deciduous tree indigenous to the eastern United States and southeast Canada. This species grows to a height of 40 to 60 feet and often features a short trunk with a broad, open, spreading crown. The bark is light gray and deeply furrowed, developing a distinctive, diamond-shaped pattern as the tree matures.</p><p>Butternut's leaves are pinnately compound, with 11 to 17 leaflets that are finely toothed and sticky when young. In autumn, foliage turns a clear, bright yellow, adding seasonal interest to the landscape. Spring brings inconspicuous greenish flowers, followed by the production of oblong fruits encased in a green, hairy husk. These husks contain a rich, oily nut that is prized for its flavor and is often used in baking.</p><p>Unfortunately, the Butternut is facing decline due to the butternut canker disease, which has made it a species of conservation concern. Despite this, its light-colored wood is valued for carving and furniture-making, and its nuts continue to be a favorite for wildlife and humans alike.</p>"
  },
  {
    nameCommon: "Buttonbush",
    aka: [
      "Button-willow",
      "Honey-bells"
    ],
    order: "Gentianales",
    family: "Rubiaceae",
    familyCommon: "Madder",
    genus: "Cephalanthus",
    species: "Cephalanthus occidentalis",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "opposite",
    fallColor: [
      "brown",
      "green"
    ],
    slug: "buttonbush",
    description: "<p>The Buttonbush, Cephalanthus occidentalis, is a deciduous shrub or small tree, known for its unique and ornamental flower display. Typically found in wetlands and along waterways throughout eastern North America, it thrives in moist, rich soils, and can reach 6 to 12 feet in height.</p><p>Buttonbush's most striking feature is its spherical flower heads, which bloom in the summer. These fragrant, white to pale-pink flowers resemble pincushions and are a magnet for pollinators, including bees and butterflies. Following the flowers, the shrub produces button-like seed heads that persist into winter, offering continued visual interest and food for various bird species.</p><p>The plant's leaves are glossy green, arranged oppositely or in whorls of three, and become yellowish in fall. Its bark is light brown and roughened, adding texture to the winter landscape.</p><p>Though often used in rain gardens and naturalized plantings, Buttonbush is also an excellent choice for erosion control due to its dense root system. It's a valuable plant for wildlife and a charming addition to any water-influenced landscape design.</p>"
  },
  {
    nameCommon: "Chestnut Oak",
    aka: [
      "Rock Oak"
    ],
    order: "Fagales",
    family: "Fagaceae",
    familyCommon: "Beech",
    genus: "Quercus",
    species: "Quercus montana",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow",
      "orange"
    ],
    slug: "chestnutoak",
    description: "<p>The Chestnut Oak, Quercus montana, is a durable and noble tree that graces the eastern United States, particularly the Appalachian Mountains. It's recognized by its impressive stature, often reaching 60 to 70 feet in height with a similarly expansive spread. This oak is well-suited to rocky slopes and dry ridges, where it demonstrates remarkable drought resistance thanks to its deep taproot.</p><p>The tree's bark is deeply furrowed with broad, rough ridges, and it's this thick, rugged bark that distinguishes the Chestnut Oak from other oaks and aids in its survival in xeric conditions. The foliage consists of oblong, coarsely toothed leaves that resemble those of the chestnut—broad with a dull, dark green upper surface and a paler underside. These leaves turn shades of yellow and russet in the fall.</p><p>In spring, the Chestnut Oak produces inconspicuous yellow-green flowers, which give way to sizable, round acorns, a valuable food source for wildlife. The wood of the Chestnut Oak is strong and heavy, making it valuable for timber and veneer production. As a landscape tree, it offers stately beauty and a resilient character, providing robust shade and a steadfast presence.</p>"
  },
  {
    nameCommon: "Chinquapin Oak",
    order: "Fagales",
    family: "Fagaceae",
    familyCommon: "Beech",
    genus: "Quercus",
    species: "Quercus muehlenbergii",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "red",
      "brown"
    ],
    slug: "chinquapinoak",
    description: "<p>The Chinquapin Oak, Quercus muehlenbergii, stands as a testament to the diversity and adaptability of oaks in North America. This medium-sized tree can reach heights of 40 to 50 feet, presenting a rounded canopy that offers dense shade. It is often found on well-drained upland soils but is also remarkably tolerant of varying moisture levels and pH, allowing it to thrive in a range of environments.</p><p>The leaves of the Chinquapin Oak are distinctive, with their coarsely serrated edges resembling the teeth of a saw, a notable departure from the classic lobed oak leaf. They boast a glossy, dark green hue above and a paler tone beneath, transitioning to shades of yellow to bronze in autumn. Springtime flowers are subtle, leading to the development of small, sweet acorns that are a wildlife favorite.</p><p>Its bark is light gray to flaky brown, providing interesting texture to the landscape. The Chinquapin Oak is prized for its durable, attractive wood and is often selected for reforestation and conservation projects, as well as a stately ornamental tree in parks and spacious landscapes.</p>"
  },
  {
    nameCommon: "Chokecherry",
    aka: [
      "Bitter-berry",
      "Virginia Bird Cherry"
    ],
    order: "Rosales",
    family: "Rosaceae",
    familyCommon: "Rose",
    genus: "Prunus",
    species: "Prunus virginiana",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow",
      "red"
    ],
    slug: "chokecherry",
    description: "<p>The Chokecherry tree, Prunus virginiana, is a small deciduous tree or large shrub that is widespread across much of North America. It typically grows to between 15 and 30 feet in height, featuring a slender profile with a crown that tends to be round and dense. This hardy species is versatile, growing in a variety of conditions from moist stream banks to dry hillsides.</p><p>Chokecherry leaves are oval-shaped with finely toothed margins, glossy on the top surface, and a paler green underneath. Come spring, the tree is adorned with elongated clusters of fragrant white flowers, which develop into dense strings of small, dark purple to black fruit by late summer. While the fruit is tart and astringent when raw, it becomes palatable when cooked and is often used in jellies and wines.</p><p>The tree's bark is gray to reddish-brown, marked by horizontal lenticels. Though not a first choice for lumber due to its small size, Chokecherry is valued in landscaping for its attractive spring blossoms and its ability to attract birds and butterflies to the garden. However, care should be taken as the seeds, leaves, and twigs contain compounds that are toxic to many mammals, including humans, when not properly processed.</p>"
  },
  {
    nameCommon: "Common Hackberry",
    aka: [
      "Nettletree",
      "Sugarberry",
      "Beaverwood"
    ],
    order: "Rosales",
    family: "Cannabaceae",
    familyCommon: "Elm",
    genus: "Celtis",
    species: "Celtis occidentalis",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "commonhackberry",
    description: "<p>The Common Hackberry, Celtis occidentalis, is a sturdy native tree that graces the landscape with its distinctive presence. Adaptable and resilient, it commonly reaches 40 to 60 feet in height and thrives in a wide range of soil types, often found lining the streets or standing sentinel in parks due to its urban tolerance.</p><p>The Hackberry's bark is one of its most notable features, grayish in color, featuring a unique pattern of warty ridges and deep furrows. Its leaves are simple and serrated, oval to lance-shaped, with an asymmetrical base—emerging bright green in spring and maturing to a deeper green before yielding to a soft yellow in the fall.</p><p>Come autumn, the tree bears small, orange-red to dark purple berries, relished by birds and small mammals. These fruits, along with the tree’s ability to host butterfly larvae, make it an excellent choice for wildlife gardens. Despite its unassuming flowers, the Common Hackberry is a reliable and hardy species, offering a canopy of dappled shade and a robust, wind-resistant structure.</p>"
  },
  {
    nameCommon: "Common Hoptree",
    aka: [
      "Stinking Ash",
      "Water Ash"
    ],
    order: "Sapindales",
    family: "Rutaceae",
    familyCommon: "Rue",
    genus: "Ptelea",
    species: "Ptelea trifoliata",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "single",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "commonhoptree",
    description: "<p>The Common Hoptree, Ptelea trifoliata, is a deciduous understory tree or large shrub native to North America, typically found in woodlands and along streams. It usually grows to a modest height of 15 to 20 feet with a similar spread, characterized by a round, open crown that provides light, airy shade.</p><p>This tree is easily recognized by its compound leaves, which are arranged in groups of three (hence the name trifoliata). The leaves are a lustrous dark green, turning yellow-green in autumn. The Hoptree's tiny, greenish-white flowers may be inconspicuous, but they are fragrant and bloom in dense clusters in late spring to early summer. Following the flowers are distinctive, wafer-like samaras, or winged seeds, that persist through the winter, adding textural interest to the bare branches.</p><p>Adaptable to various soil conditions and drought-tolerant once established, the Common Hoptree is a versatile plant. It is often used in native plant gardens and as a filler in landscape borders, offering habitat and food for wildlife, including serving as a host plant for the Giant Swallowtail butterfly.</p>"
  },
  {
    nameCommon: "Common Prickly-ash",
    aka: [
      "Toothache Tree"
    ],
    order: "Sapindales",
    family: "Rutaceae",
    familyCommon: "Rue",
    genus: "Zanthoxylum",
    species: "Zanthoxylum americanum",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "single",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "commonprickly-ash",
    description: "<p>The Common Prickly-ash, Zanthoxylum americanum, is a deciduous shrub or small tree native to the eastern and central United States and Canada, where it thrives along forest edges and in open woodlands. It reaches modest heights of up to 20 feet and is known for its compound leaves, which are made up of 5 to 11 ovate, glossy leaflets that exude a citrus-like fragrance when crushed.</p><p>Perhaps its most distinctive feature is the sharp, stout spines that stud its gray-brown branches, which historically have earned it the nickname of 'toothache tree' due to the numbing effect of its bark and leaves on the mouth. In spring, small, greenish-yellow clusters of flowers emerge, providing an early-season feast for pollinators. These blooms give way to small, reddish-brown berry-like fruits that persist into winter, offering food for birds and other wildlife.</p><p>The Prickly-ash is drought-resistant and adaptable to various soils, often used in naturalistic plantings and restoration projects. Its textured bark, spiny branches, and aromatic foliage make it a unique specimen for an ecological garden or a naturalized area.</p>"
  },
  {
    nameCommon: "Crab Apple",
    order: "Rosales",
    family: "Rosaceae",
    familyCommon: "Rose",
    genus: "Malus",
    species: "multiple",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow",
      "red"
    ],
    slug: "crabapple",
    description: "<p>The Crab Apple tree, belonging to the genus Malus, is celebrated for its vibrant springtime display and its contributions to gardens and ecosystems. Typically growing to 15-25 feet tall, these deciduous trees are cherished for their abundant and fragrant blossoms that range in color from pristine whites to deep pinks and reds. The flowers not only add aesthetic value but also attract a variety of pollinators.</p><p>Following the floral showcase, the trees produce the namesake crab apples, small pome fruits that can be tart or mildly sweet. These fruits are often used in jellies and preserves and serve as an essential food source for birds and wildlife during the fall and winter months.</p><p>Crab Apple leaves are generally oval with a serrated edge, turning hues of yellow, orange, or red as autumn advances. The trees' rugged bark and twisting branches give them a picturesque appearance in the landscape year-round.</p><p>Highly adaptable, Crab Apple trees are used in urban settings for their modest size and are resistant to many diseases that affect larger fruiting apples. They offer year-round interest with their spring blooms, summer foliage, autumn fruit, and distinctive winter silhouette.</p>"
  },
  {
    nameCommon: "Cucumber Tree",
    order: "Magnoliales",
    family: "Magnoliaceae",
    familyCommon: "Magnolia",
    genus: "Magnolia",
    species: "Magnolia acuminata",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow",
      "dark yellow",
      "brown"
    ],
    slug: "cucumbertree",
    description: "<p>The Cucumber Tree, Magnolia acuminata, stands as a magnificent deciduous species within the Magnolia family, soaring to heights of 50 to 80 feet in its native Eastern United States forests. This stately tree exhibits a straight trunk and a pyramidal to rounded crown as it matures, exuding an aura of elegance and strength.</p><p>Its leaves are sizeable and oblong, with a lush green hue, turning to a golden-yellow in the fall, adding a splash of color to the autumnal landscape. The tree derives its common name from its unique, cucumber-shaped green fruits, which mature to a deep red as they ripen, revealing bright red seeds that are favored by wildlife.</p><p>Spring brings forth the Cucumber Tree’s flowers, which are less showy than those of its magnolia relatives but hold a subtle beauty; they are yellow-green, tulip-shaped, and emerge high in the tree. With its tall stature and low-maintenance character, the Cucumber Tree is a majestic addition to large spaces, parks, and rural landscapes, offering a serene and shady retreat.</p>"
  },
  {
    nameCommon: "Eastern Cottonwood",
    aka: [
      "Necklace Poplar"
    ],
    order: "Malpighiales",
    family: "Salicaceae",
    familyCommon: "Willow",
    genus: "Populus",
    species: "Populus deltoides",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "easterncottonwood",
    description: "<p>The Eastern Cottonwood, Populus deltoides, is a fast-growing, towering tree of the Poplar family, reaching heights of up to 100 feet or more. Native to North America, it thrives in moist, fertile soils along riverbanks, floodplains, and wetland areas. This species is easily identified by its broad, triangular (deltoid) leaves, which flutter audibly in the breeze due to their flattened petioles.</p><p>In the spring, the Eastern Cottonwood becomes especially noticeable when it produces its namesake cotton-like seeds, which blanket the surrounding ground and water surfaces. The bark of young trees is smooth and silvery-white, becoming deeply furrowed, thick, and rugged with age.</p><p>The tree is a vital component of riparian ecosystems, stabilizing riverbanks and providing habitat for wildlife. Despite its utility in such environments, it is often regarded as a nuisance in urban areas due to its large size, extensive root systems, and the mess created by its seeds. Nonetheless, the Eastern Cottonwood is a hardy survivor, with a majestic presence that dominates the landscapes it inhabits.</p>"
  },
  {
    nameCommon: "Eastern Hemlock",
    order: "Pinales",
    family: "Pinaceae",
    familyCommon: "Pine",
    genus: "Tsuga",
    species: "Tsuga canadensis",
    type: "conifer",
    needleStructure: "single needle",
    slug: "easternhemlock",
    description: "<p>The Eastern Hemlock, Tsuga canadensis, is a timeless evergreen native to the northeastern United States and Canada, revered for its longevity and grace. With the potential to reach heights of over 70 feet, this conifer often forms a dense, pyramidal shape, characterized by its drooping branches and fine, feathery foliage.</p><p>The tree’s needles are small, delicate, and dark green with two distinct white stripes beneath, contributing to a soft texture that is almost feathery to the touch. Tiny, pendulous cones dangle from the branches, offering a subtle decorative effect. The bark is thick and furrowed, featuring a rich brown color that deepens with age.</p><p>Eastern Hemlocks favor cool, shaded areas, often found thriving in forested ravines and valleys. They play a crucial ecological role, providing shelter and food for wildlife. Unfortunately, they are under threat from the invasive hemlock woolly adelgid, which poses significant risks to their populations. Nonetheless, the Eastern Hemlock remains a beloved emblem of eastern American forests, prized for its wood, ornamental beauty, and serene presence.</p>"
  },
  {
    nameCommon: "Eastern Redbud",
    aka: [
      "American Redbud",
      "Judas-tree"
    ],
    order: "Fabales",
    family: "Fabaceae",
    familyCommon: "legume, pea or bean",
    genus: "Cercis",
    species: "Cercis canadensis",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "easternredbud",
    description: "<p>The Eastern Redbud, Cercis canadensis, is a captivating small to medium-sized deciduous tree beloved for its early spring display of vivid, pink-purple flowers. Before its heart-shaped leaves unfurl, the redbud's bare branches and even its trunk are enveloped by clusters of these bright blooms, which later give way to flattened, bean-like seed pods that persist into winter.</p><p>Reaching heights of 20 to 30 feet, the redbud has a rounded canopy that provides dappled shade, making it a favored ornamental in gardens and parks. The leaves emerge reddish, turning to a lustrous green as they mature and then to shades of yellow in the fall, completing a year-round cycle of color.</p><p>Adaptable to a variety of soil conditions, though preferring well-drained sites, the Eastern Redbud is a native treasure from the eastern U.S. It is not only a feast for human eyes but also a source of nectar for pollinators, adding ecological value to its aesthetic appeal.</p>"
  },
  {
    nameCommon: "Eastern Redcedar",
    order: "Pinales",
    family: "Cupressaceae",
    familyCommon: "Cypress",
    genus: "Juniperus",
    species: "Juniperus virginiana",
    type: "conifer",
    needleStructure: "scaly needles",
    slug: "easternredcedar",
    description: "<p>The Eastern Redcedar, Juniperus virginiana, is an enduring evergreen tree with a broad natural range across the eastern United States. It is not a true cedar but a juniper, typically growing to 30-40 feet in height, though some specimens can soar up to 90 feet under ideal conditions. Its dense foliage takes on a conical shape in youth, becoming more columnar with age.</p><p>The tree’s needles are a deep, rich green, often with a tinge of blue, and can be prickly to the touch. With age, the Eastern Redcedar's bark becomes fibrous and reddish-brown, peeling off in long strips. This tree is dioecious, with separate male and female plants; the female trees bear small, blue, berry-like cones that are actually modified cones and are attractive to wildlife.</p><p>Hardy and drought-resistant, the Eastern Redcedar is frequently used as a windbreak or in landscape plantings, valued for its aromatic wood, which is commonly used in closets and chests to repel moths. Despite its usefulness, it is often considered invasive, as it can dominate prairies and grasslands if left unchecked.</p>"
  },
  {
    nameCommon: "Eastern Wahoo",
    aka: [
      "American Wahoo",
      "Burningbush",
      "Hearts Bursting With Love"
    ],
    order: "Celastrales",
    family: "Celastraceae",
    familyCommon: "Staff-tree",
    genus: "Euonymus",
    species: "Euonymus atropurpureus",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "opposite",
    fallColor: [
      "red"
    ],
    slug: "easternwahoo",
    description: "<p>The Eastern Wahoo, Euonymus atropurpureus, is a native North American shrub or small tree that graces the understory of woodlands with its modest yet attractive presence. Typically reaching heights between 10 to 20 feet, its multi-stemmed form sports opposing, elliptical leaves that turn a striking red-purple in autumn, creating a vivid display.</p><p>Spring brings small, purplish flowers that, while not overly showy, add subtle interest and are followed by distinctive, deeply lobed fruits that split open to reveal bright scarlet seeds, which persist into winter and provide food for birds and wildlife.</p><p>Eastern Wahoo's bark is gray-brown and textured, contributing to its winter interest. This adaptable plant is often found in open woods and along stream banks, thriving in a variety of soil conditions. With its year-round ornamental appeal and its role as a food source for fauna, Eastern Wahoo is a valued addition to naturalistic gardens and restoration projects.</p>"
  },
  {
    nameCommon: "Eastern White Pine",
    order: "Pinales",
    family: "Pinaceae",
    familyCommon: "Pine",
    genus: "Pinus",
    species: "Pinus strobus",
    type: "conifer",
    needleStructure: "clustered needles",
    needleCluster: [
      5
    ],
    slug: "easternwhitepine",
    background: "bg_conifer1.jpg", 
    backgroundSmall: "bg_conifer1_small.jpg",
    description: "The Eastern White Pine (Pinus strobus), native to the northeastern United States and eastern Canada, stands as a majestic symbol of the North American forests. Recognizable by its tall, straight trunk and whorled branches, this tree can grow upwards of 80 feet, with some ancient specimens reaching double that height. Its soft, flexible needles, grouped in bundles of five, give the tree a delicate, feathery appearance. Beyond its beauty, the Eastern White Pine has played a pivotal role in American history. In colonial times, its straight and tall trunks were coveted for ship masts. The tree's wood, light yet durable, is widely used in construction and woodworking today. This species also provides habitat and sustenance for various wildlife, including birds and squirrels. With its rich historical significance and continued ecological importance, the Eastern White Pine remains a cherished icon of the northeastern landscape.",
    background: "bg_conifer1.jpg",
    photo1: ""
  },
  {
    nameCommon: "Eastern White-cedar",
    order: "Pinales",
    family: "Cupressaceae",
    familyCommon: "Cypress",
    genus: "Thuja",
    species: "Thuja occidentalis",
    type: "conifer",
    needleStructure: "scaly needles",
    slug: "easternwhite-cedar"
  },
  {
    nameCommon: "English Oak",
    aka: [
      "European Oak",
      "Pedunculate Oak",
      "Common Oak"
    ],
    order: "Fagales",
    family: "Fagaceae",
    familyCommon: "Beech",
    genus: "Quercus",
    species: "Quercus robur",
    type: "deciduous",
    leafType: "lobed",
    leafAttachment: "alternate",
    fallColor: [
      "yellow",
      "brown"
    ],
    slug: "englishoak"
  },
  {
    nameCommon: "European Mountain-ash",
    order: "Rosales",
    family: "Rosaceae",
    familyCommon: "Rose",
    genus: "Sorbus",
    species: "Sorbus aucuparia",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "single",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "europeanmountain-ash"
  },
  {
    nameCommon: "Flowering Dogwood",
    order: "Cornales",
    family: "Cornaceae",
    familyCommon: "Dogwood",
    genus: "Cornus",
    species: "Cornus florida",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "opposite",
    fallColor: [
      "red"
    ],
    slug: "floweringdogwood"
  },
  {
    nameCommon: "Ginkgo ",
    aka: [
      "Maidenhair Tree"
    ],
    order: "Ginkgoales",
    family: "Ginkgoaceae",
    familyCommon: "Ginkgo",
    genus: "Ginkgo",
    species: "Ginkgo biloba",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "ginkgo"
  },
  {
    nameCommon: "Gray Birch",
    aka: [
      "Wire Birch",
      "White Birch"
    ],
    order: "Fagales",
    family: "Betulaceae",
    familyCommon: "Birch",
    genus: "Betula",
    species: "Betula populifolia",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "graybirch"
  },
  {
    nameCommon: "Green Ash",
    aka: [
      "Red Ash"
    ],
    order: "Lamiales",
    family: "Oleaceae",
    familyCommon: "Olive",
    genus: "Fraxinus",
    species: "Fraxinus pennsylvanica",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "single",
    leafAttachment: "opposite",
    fallColor: [
      "yellow"
    ],
    slug: "greenash"
  },
  {
    nameCommon: "Hawthorn",
    aka: [
      "Quickthorn",
      "Thornapple"
    ],
    order: "Rosales",
    family: "Rosaceae",
    familyCommon: "Rose",
    genus: "Crataegus",
    species: "Crataegus",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "red",
      "orange"
    ],
    slug: "hawthorn"
  },
  {
    nameCommon: "Honey Locust",
    aka: [
      "Thorny Locust",
      "Thorny Honeylocust"
    ],
    order: "Fabales",
    family: "Fabaceae",
    familyCommon: "legume, pea or bean",
    genus: "Gleditsia",
    species: "Gleditsia triacanthos",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "twice",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "honeylocust"
  },
  {
    nameCommon: "Horsechestnut",
    order: "Sapindales",
    family: "Sapindaceae",
    familyCommon: "Horsechestnut",
    genus: "Aesculus",
    species: "Aesculus hippocastanum",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "palmate",
    leafAttachment: "opposite",
    fallColor: [
      "yellow"
    ],
    slug: "horsechestnut"
  },
  {
    nameCommon: "Juneberry",
    aka: [
      "Serviceberry"
    ],
    order: "Rosales",
    family: "Rosaceae",
    familyCommon: "Rose",
    genus: "Amelanchier",
    species: "Amelanchier arborea",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow",
      "red"
    ],
    slug: "juneberry"
  },
  {
    nameCommon: "Kentucky Coffeetree",
    order: "Fabales",
    family: "Fabaceae",
    familyCommon: "legume, pea or bean",
    subFamily: "Caesalpinioideae",
    genus: "Gymnocladus",
    species: "Gymnocladus dioicus",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "twice",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "kentuckycoffeetree"
  },
  {
    nameCommon: "Large-tooth Aspen",
    aka: [
      "Big-tooth Aspen",
      "American Aspen",
      "Canadian Poplar",
      "White Poplar"
    ],
    order: "Malpighiales",
    family: "Salicaceae",
    familyCommon: "Willow",
    genus: "Populus",
    species: "Populus grandidentata",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "large-toothaspen"
  },
  {
    nameCommon: "Mockernut Hickory",
    aka: [
      "White Hickory"
    ],
    order: "Fagales",
    family: "Juglandaceae",
    familyCommon: "Walnut",
    genus: "Carya",
    species: "Carya tomentosa",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "single",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "mockernuthickory"
  },
  {
    nameCommon: "Mountain Maple",
    aka: [
      "Dwarf Maple",
      "Moose Maple",
      "White Maple"
    ],
    order: "Sapindales",
    family: "Sapindaceae",
    familyCommon: "Maple",
    genus: "Acer",
    species: "Acer spicatum",
    type: "deciduous",
    leafType: "lobed",
    leafAttachment: "opposite",
    fallColor: [
      "red",
      "orange"
    ],
    slug: "mountainmaple"
  },
  {
    nameCommon: "Nannyberry",
    aka: [
      "Sheepberry",
      "Sweet Viburnum"
    ],
    order: "Dipsacales",
    family: "Adoxaceae",
    familyCommon: "Honeysuckle",
    genus: "Viburnum",
    species: "Viburnum lentago",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "opposite",
    fallColor: [
      "red",
      "purple"
    ],
    slug: "nannyberry"
  },
  {
    nameCommon: "Northern Catalpa",
    aka: [
      "Hardy Catalpa",
      "Hardy Catalpa",
      "Western Catalpa",
      "Cigar Tree",
      "Catawba-tree",
      "Bois Chavanon"
    ],
    order: "Lamiales",
    family: "Bignoniaceae",
    familyCommon: "Trumpet creeper",
    genus: "Catalpa",
    species: "Catalpa speciosa",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "opposite",
    fallColor: [
      "yellow",
      "green",
      "yellow-green",
      "black"
    ],
    slug: "northerncatalpa"
  },
  {
    nameCommon: "Northern Red Oak",
    order: "Fagales",
    family: "Fagaceae",
    familyCommon: "Beech",
    genus: "Quercus",
    species: "Quercus rubra",
    type: "deciduous",
    leafType: "lobed",
    leafAttachment: "alternate",
    fallColor: [
      "red",
      "brown"
    ],
    slug: "northernredoak"
  },
  {
    nameCommon: "Norway Maple",
    order: "Sapindales",
    family: "Sapindaceae",
    familyCommon: "Maple",
    genus: "Acer",
    species: "Acer platanoides",
    type: "deciduous",
    leafType: "lobed",
    leafAttachment: "opposite",
    fallColor: [
      "yellow",
      "orange"
    ],
    slug: "norwaymaple"
  },
  {
    nameCommon: "Norway Spruce",
    order: "Pinales",
    family: "Pinaceae",
    familyCommon: "Pine",
    genus: "Picea",
    species: "Picea abies",
    type: "conifer",
    needleStructure: "single needle",
    slug: "norwayspruce"
  },
  {
    nameCommon: "Ohio Buckeye",
    aka: [
      "American Buckeye",
      "Fetid Buckeye"
    ],
    order: "Sapindales",
    family: "Sapindaceae",
    familyCommon: "Horsechestnut",
    genus: "Aesculus",
    species: "Aesculus glabra",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "palmate",
    leafAttachment: "opposite",
    fallColor: [
      "yellow",
      "orange"
    ],
    slug: "ohiobuckeye"
  },
  {
    nameCommon: "Osage Orange",
    aka: [
      "Hedge Apple"
    ],
    order: "Rosales",
    family: "Moraceae",
    familyCommon: "Mulberry",
    genus: "Maclura",
    species: "Maclura pomifera",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "osageorange"
  },
  {
    nameCommon: "Paper Birch",
    aka: [
      "(American) White Birch",
      "Canoe Birch"
    ],
    order: "Fagales",
    family: "Betulaceae",
    familyCommon: "Birch",
    genus: "Betula",
    species: "Betula papyrifera",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "paperbirch"
  },
  {
    nameCommon: "Pin Oak",
    aka: [
      "Spanish Oak"
    ],
    order: "Fagales",
    family: "Fagaceae",
    familyCommon: "Beech",
    genus: "Quercus",
    species: "Quercus palustris",
    type: "deciduous",
    leafType: "lobed",
    leafAttachment: "alternate",
    fallColor: [
      "red",
      "dark red",
      "brown"
    ],
    slug: "pinoak"
  },
  {
    nameCommon: "Pitch Pine",
    order: "Pinales",
    family: "Pinaceae",
    familyCommon: "Pine",
    genus: "Pinus",
    species: "Pinus rigida",
    type: "conifer",
    needleStructure: "clustered needles",
    needleCluster: [
      3
    ],
    slug: "pitchpine"
  },
  {
    nameCommon: "Poison Sumac",
    order: "Sapindales",
    family: "Anacardiaceae",
    familyCommon: "Cashew",
    genus: "Toxicodendron",
    species: "vernix",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "single",
    leafAttachment: "alternate",
    fallColor: [
      "yellow",
      "red"
    ],
    slug: "poisonsumac"
  },
  {
    nameCommon: "Post Oak",
    aka: [
      "Iron Oak"
    ],
    order: "Fagales",
    family: "Fagaceae",
    familyCommon: "Beech",
    genus: "Quercus",
    species: "Quercus stellata",
    type: "deciduous",
    leafType: "lobed",
    leafAttachment: "alternate",
    fallColor: [
      "brown"
    ],
    slug: "postoak"
  },
  {
    nameCommon: "Quaking Aspen",
    aka: [
      "Trembling Aspen",
      "Golden Aspen"
    ],
    order: "Malpighiales",
    family: "Salicaceae",
    familyCommon: "Willow",
    genus: "Populus",
    species: "Populus tremuloides",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow",
      "golden"
    ],
    slug: "quakingaspen"
  },
  {
    nameCommon: "Red Cherry",
    aka: [
      "Pin Cherry",
      "Fire Cherry",
      "Bird Cherry"
    ],
    order: "Rosales",
    family: "Rosaceae",
    familyCommon: "Rose",
    genus: "Prunus",
    species: "Prunus pensylvanica",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "purple",
      "red"
    ],
    slug: "redcherry"
  },
  {
    nameCommon: "Red Hickory",
    aka: [
      "Pignut Hickory",
      "Smoothbark Hickory"
    ],
    order: "Fagales",
    family: "Juglndaceae",
    familyCommon: "Walnut",
    genus: "Carya",
    species: "Carya glabra",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "single",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "redhickory"
  },
  {
    nameCommon: "Red Maple",
    aka: [
      "Swamp Maple",
      "Water Maple",
      "Soft Maple"
    ],
    order: "Sapindales",
    family: "Sapindaceae",
    familyCommon: "Maple",
    genus: "Acer",
    species: "Acer rubrum",
    type: "deciduous",
    leafType: "lobed",
    leafAttachment: "opposite",
    fallColor: [
      "red",
      "orange"
    ],
    slug: "redmaple"
  },
  {
    nameCommon: "Red Mulberry",
    order: "Rosales",
    family: "Moraceae",
    familyCommon: "Mulberry",
    genus: "Morus",
    species: "Morus rubra",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "redmulberry"
  },
  {
    nameCommon: "Red Pine",
    order: "Pinales",
    family: "Pinaceae",
    familyCommon: "Pine",
    genus: "Pinus",
    species: "Pinus resinosa",
    type: "conifer",
    needleStructure: "clustered needles",
    needleCluster: [
      2
    ],
    slug: "redpine"
  },
  {
    nameCommon: "Red Spruce",
    order: "Pinales",
    family: "Pinaceae",
    familyCommon: "Pine",
    genus: "Picea",
    species: "Picea rubens",
    type: "conifer",
    needleStructure: "single needle",
    slug: "redspruce"
  },
  {
    nameCommon: "Russian Olive",
    aka: [
      "Silver Berry",
      "Oleaster",
      "Wild Olive"
    ],
    order: "Rosales",
    family: "Elaeagnaceae",
    familyCommon: "Oleaster",
    genus: "Elaeagnus",
    species: "Elaeagnus angustifolia",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "brown"
    ],
    slug: "russianolive"
  },
  {
    nameCommon: "Sassafras",
    order: "Laurales",
    family: "Lauraceae",
    familyCommon: "Laurel",
    genus: "Sassafras",
    species: "Sassafras albidum",
    type: "deciduous",
    leafType: "lobed",
    leafAttachment: "alternate",
    fallColor: [
      "yellow",
      "red"
    ],
    slug: "sassafras"
  },
  {
    nameCommon: "Scarlet Oak",
    order: "Fagales",
    family: "Fagaceae",
    familyCommon: "Beech",
    genus: "Quercus",
    species: "Quercus coccinea",
    type: "deciduous",
    leafType: "lobed",
    leafAttachment: "alternate",
    fallColor: [
      "red",
      "scarlet"
    ],
    slug: "scarletoak"
  },
  {
    nameCommon: "Scotch Pine",
    aka: [
      "Scots Pine"
    ],
    order: "Pinales",
    family: "Pinaceae",
    familyCommon: "Pine",
    genus: "Pinus",
    species: "Pinus sylvestris",
    type: "conifer",
    needleStructure: "clustered needles",
    needleCluster: [
      2
    ],
    slug: "scotchpine"
  },
  {
    nameCommon: "Shagbark Hickory",
    order: "Fagales",
    family: "Juglandaceae",
    familyCommon: "Walnut",
    genus: "Carya",
    species: "Carya ovata",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "single",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "shagbarkhickory"
  },
  {
    nameCommon: "Shellbark Hickory",
    aka: [
      "Big Shagbark Hickory",
      "Kingnut"
    ],
    order: "Fagales",
    family: "Juglandaceae",
    familyCommon: "Walnut",
    genus: "Carya",
    species: "Carya laciniosa",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "single",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "shellbarkhickory"
  },
  {
    nameCommon: "Shingle Oak",
    order: "Fagales",
    family: "Fagaceae",
    familyCommon: "Beech",
    genus: "Quercus",
    species: "Quercus imbricaria",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow",
      "red",
      "brown"
    ],
    slug: "shingleoak"
  },
  {
    nameCommon: "Shortleaf Pine",
    order: "Pinales",
    family: "Pinaceae",
    familyCommon: "Pine",
    genus: "Pinus",
    species: "Pinus echinata",
    type: "conifer",
    needleStructure: "clustered needles",
    needleCluster: [
      2,
      3
    ],
    slug: "shortleafpine"
  },
  {
    nameCommon: "Shumard Oak",
    order: "Fagales",
    family: "Fagaceae",
    familyCommon: "Beech",
    genus: "Quercus",
    species: "Quercus shumardii",
    type: "deciduous",
    leafType: "lobed",
    leafAttachment: "alternate",
    fallColor: [
      "red",
      "brown"
    ],
    slug: "shumardoak"
  },
  {
    nameCommon: "Siberian Elm",
    aka: [
      "Asiatic Elm",
      "Dwarf Elm"
    ],
    order: "Rosales",
    family: "Ulmaceae",
    familyCommon: "Elm",
    genus: "Ulmus",
    species: "Ulmus pumila",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "siberianelm"
  },
  {
    nameCommon: "Silver Maple",
    order: "Sapindales",
    family: "Sapindaceae",
    familyCommon: "Maple",
    genus: "Acer",
    species: "Acer saccharinum",
    type: "deciduous",
    leafType: "lobed",
    leafAttachment: "opposite",
    fallColor: [
      "yellow",
      "orange"
    ],
    slug: "silvermaple"
  },
  {
    nameCommon: "Slippery Elm",
    aka: [
      "Red Elm",
      "Water Elm"
    ],
    order: "Rosales",
    family: "Ulmaceae",
    familyCommon: "Elm",
    genus: "Ulmus",
    species: "Ulmus rubra",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "slipperyelm"
  },
  {
    nameCommon: "Smooth Sumac",
    aka: [
      "White Sumac",
      "Upland Sumac",
      "Scarlet Sumac"
    ],
    order: "Sapindales",
    family: "Anacardiaceae",
    familyCommon: "Cashew",
    genus: "Rhus",
    species: "Rhus glabra",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "single",
    leafAttachment: "alternate",
    fallColor: [
      "red"
    ],
    slug: "smoothsumac"
  },
  {
    nameCommon: "Staghorn Sumac",
    order: "Sapindales",
    family: "Anacardiaceae",
    familyCommon: "Cashew",
    genus: "Rhus",
    species: "Rhus typhina",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "single",
    leafAttachment: "alternate",
    fallColor: [
      "red",
      "maroon"
    ],
    slug: "staghornsumac"
  },
  {
    nameCommon: "Striped Maple",
    aka: [
      "Moosewood",
      "Moose Maple",
      "Goosefoot Maple"
    ],
    order: "Sapindales",
    family: "Sapindaceae",
    familyCommon: "Maple",
    genus: "Acer",
    species: "Acer pensylvanicum",
    type: "deciduous",
    leafType: "lobed",
    leafAttachment: "opposite",
    fallColor: [
      "yellow"
    ],
    slug: "stripedmaple"
  },
  {
    nameCommon: "Sugar Maple",
    order: "Sapindales",
    family: "Sapindaceae",
    familyCommon: "Maple",
    genus: "Acer",
    species: "Acer saccharum",
    type: "deciduous",
    leafType: "lobed",
    leafAttachment: "opposite",
    fallColor: [
      "orange",
      "red"
    ],
    slug: "sugarmaple"
  },
  {
    nameCommon: "Swamp White Oak",
    aka: [
      "Bicolor Oak"
    ],
    order: "Fagales",
    family: "Fagaceae",
    familyCommon: "Beech",
    genus: "Quercus",
    species: "Quercus bicolor",
    type: "deciduous",
    leafType: "lobed",
    leafAttachment: "alternate",
    fallColor: [
      "brown"
    ],
    slug: "swampwhiteoak"
  },
  {
    nameCommon: "Table Mountain Pine",
    order: "Pinales",
    family: "Pinaceae",
    familyCommon: "Pine",
    genus: "Pinus",
    species: "Pinus pungens",
    type: "conifer",
    needleStructure: "clustered needles",
    needleCluster: [
      2
    ],
    slug: "tablemountainpine"
  },
  {
    nameCommon: "Tamarack",
    order: "Pinales",
    family: "Pinaceae",
    familyCommon: "Pine",
    genus: "Larix",
    species: "Larix laricina",
    type: "conifer",
    needleStructure: "clustered needles",
    needleCluster: ["12-30"],
    slug: "tamarack"
  },
  {
    nameCommon: "Tree Of Heaven",
    order: "Sapindales",
    family: "Simaroubaceae",
    familyCommon: "Quassia",
    genus: "Ailanthus",
    species: "Ailanthus altissima",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "single",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "treeofheaven"
  },
  {
    nameCommon: "Tulip Tree",
    aka: [
      "Yellow Poplar"
    ],
    order: "Magnoliales",
    family: "Magnoliaceae",
    familyCommon: "Magnolia",
    genus: "Liriodendron",
    species: "Liriodendron tulipifera",
    type: "deciduous",
    leafType: "lobed",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "tuliptree"
  },
  {
    nameCommon: "Tupelo",
    aka: [
      "Black Tupelo",
      "Black Gum",
      "Sour Gum"
    ],
    order: "Cornales",
    family: "Nyssaceae",
    familyCommon: "Dogwood",
    genus: "Nyssa",
    species: "Nyssa sylvatica",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "red"
    ],
    slug: "tupelo"
  },
  {
    nameCommon: "Virginia Pine",
    order: "Pinales",
    family: "Pinaceae",
    familyCommon: "Pine",
    genus: "Pinus",
    species: "Pinus virginiana",
    type: "conifer",
    needleStructure: "clustered needles",
    needleCluster: [
      2
    ],
    slug: "virginiapine"
  },
  {
    nameCommon: "Weeping Willow",
    aka: [
      "Babylon Willow"
    ],
    order: "Malpighiales",
    family: "Salicaceae",
    familyCommon: "Willow",
    genus: "Salix",
    species: "Salix babylonica",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "weepingwillow"
  },
  {
    nameCommon: "White Ash",
    aka: [
      "American Ash"
    ],
    order: "Lamiales",
    family: "Oleaceae",
    familyCommon: "Olive",
    genus: "Fraxinus",
    species: "Fraxinus americana",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "single",
    leafAttachment: "opposite",
    fallColor: [
      "bronze",
      "purple"
    ],
    slug: "whiteash"
  },
  {
    nameCommon: "White Oak",
    order: "Fagales",
    family: "Fagaceae",
    familyCommon: "Beech",
    genus: "Quercus",
    species: "Quercus alba",
    type: "deciduous",
    leafType: "lobed",
    leafAttachment: "alternate",
    fallColor: [
      "red",
      "brown"
    ],
    slug: "whiteoak"
  },
  {
    nameCommon: "White Poplar",
    order: "Malpighiales",
    family: "Salicaceae",
    familyCommon: "Willow",
    genus: "Populus",
    species: "Populus alba",
    type: "deciduous",
    leafType: "lobed",
    leafAttachment: "alternate",
    fallColor: [
      "yellow",
      "brown"
    ],
    slug: "whitepoplar"
  },
  {
    nameCommon: "White Spruce",
    order: "Pinales",
    family: "Pinaceae",
    familyCommon: "Pine",
    genus: "Picea",
    species: "Picea glauca",
    type: "conifer",
    needleStructure: "single needle",
    slug: "whitespruce"
  },
  {
    nameCommon: "Wild Apple",
    aka: [
      "Eating Apple",
      "Cooking Apple",
      "Culinary Apple"
    ],
    order: "Rosales",
    family: "Rosaceae",
    familyCommon: "Rose",
    genus: "Malus",
    species: "",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "brown"
    ],
    slug: "wildapple"
  },
  {
    nameCommon: "Witch-hazel",
    aka: [
      "Common Witch-hazel",
      "American Witch-hazel"
    ],
    order: "Saxifragales",
    family: "Hamamelidaceae",
    familyCommon: "Witch-hazel",
    genus: "Hamamelis",
    species: "Hamamelis virginiana",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "witch-hazel"
  },
  {
    nameCommon: "Yellow Birch",
    aka: [
      "Golden Birch"
    ],
    order: "Fagales",
    family: "Betulaceae",
    familyCommon: "Birch",
    genus: "Betula",
    species: "Betula alleghaniensis",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "yellowbirch"
  },
  {
    nameCommon: "Yellow Buckeye",
    aka: [
      "Common Buckeye",
      "Sweet Buckeye"
    ],
    order: "Sapindales",
    family: "Sapindaceae",
    familyCommon: "Horsechestnut",
    genus: "Aesculus",
    species: "Aesculus flava",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "palmate",
    leafAttachment: "opposite",
    fallColor: [
      "yellow",
      "orange"
    ],
    slug: "yellowbuckeye"
  }
];

export const store = createStore({
    state() {
        return {
          trees: [...initialTreesState], 
          selectedTypes: initialSelectedTypes,
          selectedNeedles: initialSelectedNeedles,
          selectedClusters: initialSelectedClusters,
          selectedLeafTypes: initialSelectedLeafTypes,
          selectedCompoundStructures: initialSelectedCompoundStructures,
          selectedLeafAttachments: initialSelectedLeafAttachments,
          selectedFallColors: initialSelectedFallColors,
          isMenuOpen: false,
        };
    },
    getters: {
        getTreeBySlug: (state) => (slug) => {
          return state.trees.find(tree => tree.slug === slug);
        },

        allItems: (state) => state.items,
        conifers: state => {
            let coniferTrees = state.trees.filter(tree => tree.type == 'conifer')
            return coniferTrees
        }, 
        getFilteredTrees: (state) => (selectedTypes, selectedNeedles, selectedClusters, selectedLeafTypes, selectedCompoundStructures, selectedLeafAttachments, selectedFallColors) => {
            return state.trees.filter(tree => {
            const typeMatch = !selectedTypes.length || selectedTypes.includes(tree.type);
            const needleMatch = !selectedNeedles.length || selectedNeedles.includes(tree.needleStructure);

            const clusterMatch = !selectedClusters.length || (tree.needleCluster && tree.needleCluster.some(cluster => selectedClusters.includes(cluster)));

            const leafTypeMatch = !selectedLeafTypes.length || selectedLeafTypes.includes(tree.leafType);
            const compoundStructureMatch = !selectedCompoundStructures.length || selectedCompoundStructures.includes(tree.compoundStructure);
            const leafAttachmentMatch = !selectedLeafAttachments.length || selectedLeafAttachments.includes(tree.leafAttachment);

            const fallColorMatch = !selectedFallColors.length || (tree.fallColor && tree.fallColor.some(color => selectedFallColors.includes(color)));

            return typeMatch && needleMatch && leafTypeMatch && compoundStructureMatch && leafAttachmentMatch && clusterMatch && fallColorMatch;
          });
        },
        getFilteredTreeCount: (state) => (selectedTypes, selectedNeedles, selectedClusters, selectedLeafTypes, selectedCompoundStructures, selectedLeafAttachments, selectedFallColors) => {
          const filteredTrees = state.trees.filter(tree => {
            const typeMatch = !selectedTypes.length || selectedTypes.includes(tree.type);
            const needleMatch = !selectedNeedles.length || selectedNeedles.includes(tree.needleStructure);
            const clusterMatch = !selectedClusters.length || (tree.needleCluster && tree.needleCluster.some(cluster => selectedClusters.includes(cluster)));
            const leafTypeMatch = !selectedLeafTypes.length || selectedLeafTypes.includes(tree.leafType);
            const compoundStructureMatch = !selectedCompoundStructures.length || selectedCompoundStructures.includes(tree.compoundStructure);
            const leafAttachmentMatch = !selectedLeafAttachments.length || selectedLeafAttachments.includes(tree.leafAttachment);
            const fallColorMatch = !selectedFallColors.length || (tree.fallColor && tree.fallColor.some(color => selectedFallColors.includes(color)));
        
            return typeMatch && needleMatch && leafTypeMatch && compoundStructureMatch && leafAttachmentMatch && clusterMatch && fallColorMatch;
          });
        
          return filteredTrees.length; // Return the count instead of the array
        }
    },
    mutations: {

      resetFilters(state) {
        // Reset filters to initial state or empty arrays
        state.selectedTypes = [];
        state.selectedNeedles = [];
        state.selectedClusters = [];
        state.selectedLeafTypes = [];
        state.selectedCompoundStructures = [];
        state.selectedLeafAttachments = [];
        state.selectedFallColors = [];
    
        // If you want to clear local storage as well:
        localStorage.removeItem('selectedTypes');
        localStorage.removeItem('selectedNeedles');
        localStorage.removeItem('selectedClusters');
        localStorage.removeItem('selectedLeafTypes');
        localStorage.removeItem('selectedCompoundStructures');
        localStorage.removeItem('selectedLeafAttachments');
        localStorage.removeItem('selectedFallColors');
      },
      toggleMenu(state) {
          state.isMenuOpen = !state.isMenuOpen;
      },
      addItem(state, newItem) {
          state.items.push(newItem);
      },
      setSelectedTypes(state, types) {
        state.selectedTypes = types;
      },
      setSelectedNeedles(state, needles) {
        state.selectedNeedles = needles;
      },
      setSelectedClusters(state, clusters) {
        state.selectedClusters = clusters;
      },
      setSelectedLeafTypes(state, leafTypes) {
        state.selectedLeafTypes = leafTypes;
      },
      setSelectedCompoundStructures(state, compoundStructures) {
        state.selectedCompoundStructures = compoundStructures;
      },
      setSelectedLeafAttachments(state, leafAttachments) {
        state.selectedLeafAttachments = leafAttachments;
      },
      setSelectedFallColors(state, fallColors) {
        state.selectedFallColors = fallColors;
      },
        // ... other mutations
    },
    actions: {      
        asyncAddItem({ commit }, newItem) {
            // For example, simulating an async action with a timeout
            setTimeout(() => {
                commit('addItem', newItem);
            }, 1000);
        },
        updateSelectedTypes({ commit }, types) {
          commit('setSelectedTypes', types);
        },
        updateSelectedNeedles({ commit }, needles) {
          commit('setSelectedNeedles', needles);
        },
        updateSelectedClusters({ commit }, clusters) {
          commit('setSelectedClusters', clusters);
        },
        updateSelectedLeafTypes({ commit }, leafTypes) {
          commit('setSelectedLeafTypes', leafTypes);
        },
        updateSelectedCompoundStructures({ commit }, compoundStructures) {
          commit('setSelectedCompoundStructures', compoundStructures);
        },
        updateSelectedLeafAttachments({ commit }, leafAttachments) {
          commit('setSelectedLeafAttachments', leafAttachments);
        },
        updateSelectedFallColors({ commit }, fallColors) {
          commit('setSelectedFallColors', fallColors);
        },
    },
    plugins: [
      (store) => {
        // Called when the store is initialized
        store.subscribe((mutation, state) => {
          // Check if the mutation is about the selectedTypes
          if (mutation.type === 'setSelectedTypes') {
            // Persist the new state to localStorage
            localStorage.setItem('selectedTypes', JSON.stringify(state.selectedTypes));
          } 
          if (mutation.type === 'setSelectedNeedles') {
            localStorage.setItem('selectedNeedles', JSON.stringify(state.selectedNeedles));
          }
          if (mutation.type === 'setSelectedClusters') {
            localStorage.setItem('selectedClusters', JSON.stringify(state.selectedClusters));
          }
          if (mutation.type === 'setSelectedLeafTypes') {
            localStorage.setItem('selectedLeafTypes', JSON.stringify(state.selectedLeafTypes));
          }
          if (mutation.type === 'setSelectedCompoundStructures') {
            localStorage.setItem('selectedCompoundStructures', JSON.stringify(state.selectedCompoundStructures));
          }
          if (mutation.type === 'setSelectedLeafAttachments') {
            localStorage.setItem('selectedLeafAttachments', JSON.stringify(state.selectedLeafAttachments));
          }
          if (mutation.type === 'setSelectedFallColors') {
            localStorage.setItem('selectedFallColors', JSON.stringify(state.selectedFallColors));
          }
        });
      },
    ],
})


