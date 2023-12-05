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
  {
    nameCommon: "Alternate-leaved Dogwood",
    aka: [
      "Green Osier",
      "Pagoda Dogwood"
    ],
    order: "Cornales",
    family: "Cornaceae",
    familyCommon: "Dogwood",
    genus: "Cornus",
    species: "Cornus alternifolia",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "red"
    ],
    slug: "alternate-leaveddogwood",
    background: "bg-large/bg-158.jpg",
    backgroundSmall: "bg-small/bg-158.jpg",
    description: "<p>The Alternate-leaved Dogwood (Cornus alternifolia), also known as Pagoda Dogwood for its tiered, horizontal branches, is a deciduous tree that boasts a unique architectural flair in woodland gardens. This North American native typically matures to a modest 15-25 feet tall, flourishing in the understory with a preference for partial shade and well-drained, acidic soils. Its leaves, arranged alternately as its name suggests—uncommon among dogwoods—emerge as a bright green, turning to purplish-red in the fall. In late spring to early summer, the tree is adorned with clusters of small, creamy-white flowers, which give way to dark blue berries on red stems, providing a feast for native birds. The tree's bark, mottled and gray, adds winter interest. With a low canopy and non-invasive root system, the Alternate-leaved Dogwood is a versatile addition to residential landscapes, offering year-round visual appeal and ecological benefits.</p>",
    photo1Credit: "<a target=\"blank_\" rel=\"noopener noreferrer\" href=\"https://commons.wikimedia.org/wiki/File:Cornus_alternifolia_005.jpg\">Fruit</a>, <a target=\"blank_\" rel=\"noopener noreferrer\" href=\"https://en.wikipedia.org/wiki/User:IvanTortuga\">Cody Hough</a>, <a target=\"blank_\" rel=\"noopener noreferrer\" href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Cornus_alternifolia#/media/File:Cornus_alternifolia_005.jpg",
    photo1Alt: "Cornus alternifolia 005",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Cornus_alternifolia_005.jpg/256px-Cornus_alternifolia_005.jpg",

    photo3Credit: "<a target=\"blank_\" rel=\"noopener noreferrer\" href=\"https://commons.wikimedia.org/wiki/File:Jk-cornus_alternifoliaflower.jpg\">Flowers</a>, <a target=\"blank_\" rel=\"noopener noreferrer\" href=\"https://commons.wikimedia.org/wiki/User:Jaknouse\">Jaknouse</a>, <a target=\"blank_\" rel=\"noopener noreferrer\" href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Cornus_alternifolia#/media/File:Jk-cornus_alternifoliaflower.jpg",
    photo3Alt: "Jk-cornus alternifoliaflower",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Jk-cornus_alternifoliaflower.jpg/256px-Jk-cornus_alternifoliaflower.jpg",

    photo4Credit: "Botanical illustration. Public domain, via Wikimedia Commons.",
    photo4Href: "https://en.wikipedia.org/wiki/Cornus_alternifolia#/media/File:Cornus_alternifolia_-_Krauss.jpg",
    photo4Alt: "Botanical illustration.",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/6/65/Cornus_alternifolia_-_Krauss.jpg",

    photo5Credit: "Natural range map. Public domain, via Wikimedia Commons.",
    photo5Href: "https://en.wikipedia.org/wiki/Cornus_alternifolia#/media/File:Cornus_alternifolia_range_map_1.png",
    photo5Alt: "Natural range map",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Cornus_alternifolia_range_map_1.png/256px-Cornus_alternifolia_range_map_1.png",

    photo6Credit: "Seedlings. Public domain, via Wikimedia Commons.",
    photo6Href: "https://en.wikipedia.org/wiki/Cornus_alternifolia#/media/File:Pagodaseedlings.jpg",
    photo6Alt: "Seedlings",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Pagodaseedlings.jpg/256px-Pagodaseedlings.jpg",
  },
  {
    nameCommon: "American Basswood",
    aka: [
      "American Linden"
    ],
    order: "Malvales",
    family: "Malvaceae",
    familyCommon: "Linden",
    genus: "Tilia",
    species: "Tilia americana",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow",
      "orange"
    ],
    slug: "americanbasswood",
    background: "bg-large/bg-4.jpg",
    backgroundSmall: "bg-small/bg-4.jpg",
    description: "<p>The American Basswood (Tilia americana), a stately decidome that can soar to grand heights of 60-120 feet, is renowned for its expansive canopy, which provides a lush, deep shade. This native North American tree is often found in rich, moist woods and along streams throughout the eastern and central United States. It has a broadly columnar to rounded shape, with a straight trunk and symmetrically branching crown. Heart-shaped, serrated leaves flutter in the slightest breeze and turn a vibrant yellow come autumn. In early summer, small, fragrant cream-colored flowers dangle from slender peduncles, drawing in a symphony of pollinators; these blooms later develop into small, nut-like fruits. The Basswood's soft, lightweight wood is highly valued for carving and woodworking. A gentle giant in the landscape, the American Basswood is a favorite for wildlife and a classical choice for shade in urban and rural settings.</p>",
    photo1Credit: "<a target=\"blank_\" rel=\"noopener noreferrer\" href=\"https://commons.wikimedia.org/wiki/File:Tilia_americana,_Arnold_Arboretum_-_IMG_5911.JPG\">American Basswood tree. Public domain, via Wikimedia Commons</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Tilia_americana#/media/File:Tilia_americana,_Arnold_Arboretum_-_IMG_5911.JPG",
    photo1Alt: "Tilia americana, Arnold Arboretum - IMG 5911",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Tilia_americana%2C_Arnold_Arboretum_-_IMG_5911.JPG/256px-Tilia_americana%2C_Arnold_Arboretum_-_IMG_5911.JPG",
    photo2Credit: "<a target=\"blank_\" rel=\"noopener noreferrer\" href=\"https://commons.wikimedia.org/wiki/File:Tilia_americana_(American_Linden)_(28268263222).jpg\">American Basswood foliage</a>, <a target=\"blank_\" rel=\"noopener noreferrer\" href=\"https://www.flickr.com/people/138014579@N08\">Plant Image Library</a>, <a target=\"blank_\" rel=\"noopener noreferrer\" href=\"https://creativecommons.org/licenses/by-sa/2.0/legalcode\" rel=\"license\">CC BY-SA 2.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Tilia_americana#/media/File:Tilia_americana_(American_Linden)_(28268263222).jpg",
    photo2Alt: "Tilia americana (American Linden) (28268263222)",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Tilia_americana_%28American_Linden%29_%2828268263222%29.jpg/256px-Tilia_americana_%28American_Linden%29_%2828268263222%29.jpg",

    photo3Credit: "American Basswood range map. Public domain, via Wikimedia Commons",
    photo3Href: "https://en.wikipedia.org/wiki/Tilia_americana#/media/File:Tlilia_americana_map.png",
    photo3Alt: "American Basswood range map",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Tlilia_americana_map.png/256px-Tlilia_americana_map.png"
  },
  {
    nameCommon: "American Beech",
    aka: [
      "North American Beech"
    ],
    order: "Fagales",
    family: "Fagaceae",
    familyCommon: "Beech",
    genus: "Fagus",
    species: "Fagus grandifolia",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow",
      "brown"
    ],
    slug: "americanbeech",
    background: "bg-large/bg-36.jpg",
    backgroundSmall: "bg-small/bg-36.jpg",
    description: "<p>The American Beech (Fagus grandifolia) is a noble and imposing hardwood, native to the eastern United States and southeastern Canada. Its grandeur is evident as it reaches up to 80 feet tall with a broad, rounded crown. The smooth, silvery-gray bark is unmistakably sleek, often carved with initials that persist for decades. Its elliptical leaves are a glossy green, with finely toothed margins, turning a rich bronze in the fall, often lingering on the branches into winter. Spring unfurls tiny, inconspicuous flowers, succeeded by small, prickly husks that contain edible nuts, coveted by wildlife. This tree prefers well-drained, acidic soils and doesn't tolerate urban pollution well, making it a staple in less disturbed forested areas. American Beech is slow-growing but long-lived, often reaching 300 years, with its stately presence and dense canopy offering a serene backdrop or an anchor in larger landscapes.</p>",
    photo1Credit: "<a target=\"blank_\" rel=\"noopener noreferrer\" href=\"https://commons.wikimedia.org/wiki/File:Beech_with_Branches.jpg\">Beech with Branches</a>, <a target=\"blank_\" rel=\"noopener noreferrer\" href=\"https://commons.wikimedia.org/wiki/User:Marqqq\">Marqqq</a>, <a target=\"blank_\" rel=\"noopener noreferrer\" href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Fagus_grandifolia#/media/File:Beech_with_Branches.jpg",
    photo1Alt: "Beech with Branches",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Beech_with_Branches.jpg/256px-Beech_with_Branches.jpg",

    photo2Credit: "<a target=\"blank_\" rel=\"noopener noreferrer\" href=\"https://commons.wikimedia.org/wiki/File:Fagus_grandifolia_beech_leaves_close.jpg\">American Beech leaves</a>, <a target=\"blank_\" rel=\"noopener noreferrer\" href=\"https://commons.wikimedia.org/wiki/User:Dcrjsr\">Dcrjsr</a>, <a target=\"blank_\" rel=\"noopener noreferrer\" href=\"https://creativecommons.org/licenses/by/3.0/legalcode\" rel=\"license\">CC BY 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Fagus_grandifolia#/media/File:Fagus_grandifolia_beech_leaves_close.jpg",
    photo2Alt: "Fagus grandifolia beech leaves close",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Fagus_grandifolia_beech_leaves_close.jpg/256px-Fagus_grandifolia_beech_leaves_close.jpg",

    photo3Credit: "Beech leaf and nut. Public domain, via Wikimedia Commons. ",
    photo3Href: "https://en.wikipedia.org/wiki/Fagus_grandifolia#/media/File:American_Beech.jpg",
    photo3Alt: "Beech leaf and nut",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/American_Beech.jpg/256px-American_Beech.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Fagus_grandifolia_in_winter.jpg\">Leaves in late winter</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Gorillo.Chimpo\">Gorillo.Chimpo</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Fagus_grandifolia#/media/File:Fagus_grandifolia_in_winter.jpg",
    photo4Alt: "leaves in late winter",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Fagus_grandifolia_in_winter.jpg/256px-Fagus_grandifolia_in_winter.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:American_Beech_Fagus_grandilolia_Trunk.JPG\">American Beech trunk and bark</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Ram-Man\">Derek Ramsey</a> /&nbsp;<a href=\"https://derekramsey.com/\">derekramsey.com</a>&nbsp;/&nbsp;<a href=\"https://creativecommons.org/licenses/by-sa/4.0/\">CC BY-SA 4.0</a> / <a href=\"https://www.gnu.org/licenses/old-licenses/fdl-1.2.en.html\">GFDL 1.2</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Fagus_grandifolia#/media/File:American_Beech_Fagus_grandilolia_Trunk.JPG",
    photo5Alt: "Trunk and bark",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/American_Beech_Fagus_grandilolia_Trunk.JPG/256px-American_Beech_Fagus_grandilolia_Trunk.JPG",

    photo6Credit: "American Beech range map. Public domain, via Wikimedia Commons",
    photo6Href: "https://commons.wikimedia.org/wiki/File:Fagus_grandifolia_range_map_1.png",
    photo6Alt: "Fagus grandifolia range map 1",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Fagus_grandifolia_range_map_1.png/256px-Fagus_grandifolia_range_map_1.png",

    photo7Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Fagus_grandifolia_nuts,_by_Omar_Hoftun.jpg\">Beechnuts</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Omar_hoftun\">Omar hoftun</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo7Href: "https://en.wikipedia.org/wiki/Fagus_grandifolia#/media/File:Fagus_grandifolia_nuts,_by_Omar_Hoftun.jpg",
    photo7Alt: "Beechnuts",
    photo7Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Fagus_grandifolia_nuts%2C_by_Omar_Hoftun.jpg/256px-Fagus_grandifolia_nuts%2C_by_Omar_Hoftun.jpg",
  },
  {
    nameCommon: "American Bladdernut",
    order: "Crossosomatales",
    family: "Staphyleaceae",
    familyCommon: "Bladdernut",
    genus: "Staphylea",
    species: "Staphylea trifolia",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "pinnate",
    leafAttachment: "opposite",
    fallColor: [
      "yellow",
      "brown"
    ],
    background: "bg-large/bg-11.jpg",
    backgroundSmall: "bg-small/bg-11.jpg",
    slug: "americanbladdernut",
    description: "<p>The American Bladdernut (Staphylea trifolia) is a charming, underutilized deciduous shrub or small tree, typically growing to a modest height of 10-15 feet. Native to the understory of Eastern North America's forests, this plant thrives in moist, well-drained soils, often along stream banks and in rich woodlands. Its most distinctive feature is the inflated, bladder-like seed pods that hang in clusters, turning from green to a papery brown as they mature in the fall. These whimsical pods add a unique textural element to the landscape and a point of interest in winter after the leaves have fallen. The tree's foliage is comprised of trifoliate leaves, which are arranged oppositely on arching branches, presenting a soft green hue in spring and transforming to a clear yellow in autumn. In spring, drooping clusters of fragrant, bell-shaped white flowers grace the tree, providing a delicate floral display. The American Bladdernut is a versatile and low-maintenance choice for naturalized areas or woodland gardens.</p>",

    photo1Credit: "<a target=\"blank_\" rel=\"noopener noreferrer\" href=\"https://commons.wikimedia.org/wiki/File:Staphylea_trifolia_SCA-3462.jpg\">Leaves and flowers</a>, <a target=\"blank_\" rel=\"noopener noreferrer\" href=\"https://commons.wikimedia.org/wiki/User:Nonenmac\">Randy A. Nonenmacher</a>, <a target=\"blank_\" rel=\"noopener noreferrer\" href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0\"</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Staphylea_trifolia#/media/File:Staphylea_trifolia_SCA-3462.jpg",
    photo1Alt: "Staphylea trifolia SCA-3462",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Staphylea_trifolia_SCA-3462.jpg/256px-Staphylea_trifolia_SCA-3462.jpg",

    photo2Credit: "American Bladdernut range map. Public domain, via Wikimedia Commons",
    photo2Href: "https://en.wikipedia.org/wiki/Staphylea_trifolia#/media/File:Staphylea_trifolia_range_map.png",
    photo2Alt: "American Bladdernut range map",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Staphylea_trifolia_range_map.png/256px-Staphylea_trifolia_range_map.png"
  },
  {
    nameCommon: "American Chestnut",
    order: "Fagales",
    family: "Fagaceae",
    familyCommon: "Beech",
    genus: "Castanea",
    species: "Castanea dentata",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "americanchestnut",
    background: "bg-large/bg-39.jpg",
    backgroundSmall: "bg-small/bg-39.jpg",
    description: "<p>The American Chestnut (Castanea dentata) was once a titan of the Eastern American forests, casting its shadow across the landscape with towering heights reaching up to 100 feet. Recognized by its broad, spreading canopy, the tree was both a timber staple and a critical wildlife food source, with its abundant, nutritious nuts. Its leaves are long and narrow with a toothed edge, and they turn to a golden hue in autumn. However, the early 20th century saw this species decimated by the chestnut blight, a fungal disease accidentally introduced from imported Asiatic chestnut trees. The blight's devastation transformed this once-dominant tree into a rarity, leaving behind only the sprouting stumps of former giants, as the blight does not affect the roots which can still resprout. Efforts are ongoing to restore this species through science and selective breeding with blight-resistant trees. The American Chestnut's tale is a poignant reminder of the fragility and interconnectedness of ecological systems.</p>",
    photo1Credit: "<a target=\"blank_\" rel=\"noopener noreferrer\" href=\"https://commons.wikimedia.org/wiki/File:American_Chestnut.JPG\">American Chestnut Nuts with Burrs and Leaves. </a>The original uploader was <a target=\"blank_\" rel=\"noopener noreferrer\" href=\"https://en.wikipedia.org/wiki/de:User:Peatcher\">Peatcher</a> at <a target=\"blank_\" rel=\"noopener noreferrer\" href=\"https://en.wikipedia.org/wiki/de:\">German Wikipedia</a>, <a target=\"blank_\" rel=\"noopener noreferrer\" href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/American_chestnut#/media/File:American_Chestnut.JPG",
    photo1Alt: "American Chestnut",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/American_Chestnut.JPG/256px-American_Chestnut.JPG",

    photo2Credit: "American Chestnut range map. Public domain, via Wikimedia Commons",
    photo2Href: "https://en.wikipedia.org/wiki/American_chestnut#/media/File:Castanea_dentata_range_map_2.png",
    photo2Alt: "American Chestnut range map",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Castanea_dentata_range_map_2.png/256px-Castanea_dentata_range_map_2.png",

    photo3Credit: "<a target=\"blank_\" rel=\"noopener noreferrer\" href=\"https://commons.wikimedia.org/wiki/File:AmericanChestnutPollen.JPG\">American chestnut male pollen</a>, Original uploader was <a target=\"blank_\" rel=\"noopener noreferrer\" href=\"https://en.wikipedia.org/wiki/Vanvlitp\">Vanvlitp</a> at <a href=\"https://en.wikipedia.org\">en.wikipedia</a>, <a target=\"blank_\" rel=\"noopener noreferrer\" href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/American_chestnut#/media/File:AmericanChestnutPollen.JPG",
    photo3Alt: "American Chestnut Pollen",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/AmericanChestnutPollen.JPG/256px-AmericanChestnutPollen.JPG",

    photo4Credit: "Chestnut blight affecting a young American chestnut. Public domain, via Wikimedia Commons",
    photo4Href: "https://en.wikipedia.org/wiki/American_chestnut#/media/File:Castanea_dentata_-_blight_1.jpg",
    photo4Alt: "Chestnut blight affecting a young American chestnut",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Castanea_dentata_-_blight_1.jpg/256px-Castanea_dentata_-_blight_1.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Castanea_dentata_at_Oakdale_Campus_in_Coralville,_Iowa.jpg\">Lone American chestnut in late winter in Iowa</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Rbreidbrown\">Rbreidbrown</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/American_chestnut#/media/File:Castanea_dentata_at_Oakdale_Campus_in_Coralville,_Iowa.jpg",
    photo5Alt: "Lone American chestnut in late winter in Iowa.",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Castanea_dentata_at_Oakdale_Campus_in_Coralville%2C_Iowa.jpg/256px-Castanea_dentata_at_Oakdale_Campus_in_Coralville%2C_Iowa.jpg",
  },
  {
    nameCommon: "American Elm",
    aka: [
      "White Elm",
      "Water Elm"
    ],
    order: "Rosales",
    family: "Ulmaceae",
    familyCommon: "Elm",
    genus: "Ulmus",
    species: "Ulmus americana",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "americanelm",
    background: "bg-large/bg-12.jpg",
    backgroundSmall: "bg-small/bg-12.jpg",
    description: "<p>The American Elm (Ulmus americana) once lined the streets of towns across North America with its distinctive vase-like silhouette reaching heights of 60-80 feet. This beloved deciduous tree was famed for its dense canopy of serrated, ovate leaves, which turned golden yellow in fall, and its ability to thrive in various soil types. In the spring, small, inconspicuous flowers appear before the leaves, developing into flat, papery samaras, or winged seeds. However, the mid-20th century saw this majestic tree besieged by Dutch elm disease, a fungal infection spread by bark beetles, leading to widespread decimation of the population. Despite this, the American Elm remains a symbol of strength and endurance, with ongoing efforts to cultivate disease-resistant varieties. Its wood, once used for shipbuilding and furniture, is now less commonly harvested due to its rarity. The American Elm's story is one of both ecological loss and the hope for restoration.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:American_Elm_Tree,_Old_South_Street,_Northampton,_MA_-_October_2019.jpg\">American elm tree known as \"Ed Cotton's elm,\"</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Msact\">Marty Aligata</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Ulmus_americana#/media/File:American_Elm_Tree,_Old_South_Street,_Northampton,_MA_-_October_2019.jpg",
    photo1Alt: "American Elm Tree, Old South Street, Northampton, MA - October 2019",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/American_Elm_Tree%2C_Old_South_Street%2C_Northampton%2C_MA_-_October_2019.jpg/256px-American_Elm_Tree%2C_Old_South_Street%2C_Northampton%2C_MA_-_October_2019.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Ulmus_americana_(5102579562).jpg\">American Elm leaf</a>, <a href=\"https://www.flickr.com/people/35478170@N08\">Matt Lavin</a> from Bozeman, Montana, USA, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/legalcode\" rel=\"license\">CC BY-SA 2.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Ulmus_americana#/media/File:Ulmus_americana_(5102579562).jpg",
    photo2Alt: "American Elm leaf",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Ulmus_americana_%285102579562%29.jpg/256px-Ulmus_americana_%285102579562%29.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Ulmus_americana_(5101983801).jpg\">American Elm foliage</a>, <a href=\"https://www.flickr.com/people/35478170@N08\">Matt Lavin</a> from Bozeman, Montana, USA, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/legalcode\" rel=\"license\">CC BY-SA 2.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Ulmus_americana#/media/File:Ulmus_americana_(5101983801).jpg",
    photo3Alt: "American Elm foliage",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Ulmus_americana_%285101983801%29.jpg/256px-Ulmus_americana_%285101983801%29.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:ElmBark.jpg\">American Elm bark</a>, <a href=\"https://commons.wikimedia.org/wiki/User:SriMesh\">SriMesh</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Ulmus_americana#/media/File:ElmBark.jpg",
    photo4Alt: "American Elm bark",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/ElmBark.jpg/256px-ElmBark.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:American_Elm_-_Ulmus_americana,_Occoquan_Regional_Park,_Lorton,_Virginia.jpg\">American Elm flowers</a>, Judy Gallagher, <a href=\"https://creativecommons.org/licenses/by/2.0/legalcode\" rel=\"license\">CC BY 2.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Ulmus_americana#/media/File:American_Elm_-_Ulmus_americana,_Occoquan_Regional_Park,_Lorton,_Virginia.jpg",
    photo5Alt: "American Elm flowers",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/American_Elm_-_Ulmus_americana%2C_Occoquan_Regional_Park%2C_Lorton%2C_Virginia.jpg/256px-American_Elm_-_Ulmus_americana%2C_Occoquan_Regional_Park%2C_Lorton%2C_Virginia.jpg",

    photo6Credit: "American Elm range map. Public domain, via Wikimedia Commons",
    photo6Href: "https://en.wikipedia.org/wiki/Ulmus_americana#/media/File:Ulmus_americana_range_map_2.png",
    photo6Alt: "American Elm range map",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Ulmus_americana_range_map_2.png/256px-Ulmus_americana_range_map_2.png",
  },
  {
    nameCommon: "American Hophornbeam",
    aka: [
      "Eastern Hophornbeam",
      "Hardhack",
      "Ironwood",
      "Leverwood"
    ],
    order: "Fagales",
    family: "Betulaceae",
    familyCommon: "Birch",
    genus: "Ostrya",
    species: "Ostrya virginiana",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "americanhophornbeam",
    background: "bg-large/bg-7.jpg",
    backgroundSmall: "bg-small/bg-7.jpg",
    description: "<p>The American Hophornbeam (Ostrya virginiana), also known as Ironwood for its dense, hard timber, is a small to medium-sized deciduous tree that often grows to 40 feet in height. It features a rounded crown with slender, spreading branches, and flaky bark that adds texture to landscapes. Native to North America, it thrives in well-drained soils, from deep forests to rocky slopes. Its leaves are ovate and sharply-toothed, resembling those of the elm but more finely textured, turning yellow to orange in the fall. Spring brings long, attractive catkins, followed by distinctive hop-like fruit clusters that persist through winter, providing interest and food for wildlife. The tree's wood is valued for tool handles and sporting equipment, owing to its toughness. Unassuming yet resilient, the American Hophornbeam is a low-maintenance choice for naturalized areas or as a landscape specimen where its subtle beauty and durable nature can be appreciated.</p>",
    
    photo1Credit: "An exceptionally large trunk. Public domain, via Wikimedia Commons",
    photo1Href: "https://en.wikipedia.org/wiki/Ostrya_virginiana#/media/File:Ostrya_virginiana_Blue_Ridge.jpg",
    photo1Alt: "An exceptionally large trunk",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Ostrya_virginiana_Blue_Ridge.jpg/256px-Ostrya_virginiana_Blue_Ridge.jpg", 

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Eastern_Hophornbeam_-_Flickr_-_treegrow_(4).jpg\">Male catkins hanging from the branches in spring</a>, <a href=\"https://www.flickr.com/people/86548370@N00\">Katja Schulz</a> from Washington, D. C., USA, <a href=\"https://creativecommons.org/licenses/by/2.0/legalcode\" rel=\"license\">CC BY 2.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Ostrya_virginiana#/media/File:Eastern_Hophornbeam_-_Flickr_-_treegrow_(4).jpg",
    photo2Alt: "Eastern Hophornbeam - Flickr - treegrow (4)",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Eastern_Hophornbeam_-_Flickr_-_treegrow_%284%29.jpg/256px-Eastern_Hophornbeam_-_Flickr_-_treegrow_%284%29.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Eastern_Hophornbeam_-_Flickr_-_treegrow_(3).jpg\">Leaf color in autumn</a>, <a href=\"https://www.flickr.com/people/86548370@N00\">Katja Schulz</a> from Washington, D. C., USA, <a href=\"https://creativecommons.org/licenses/by/2.0/legalcode\" rel=\"license\">CC BY 2.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Ostrya_virginiana#/media/File:Eastern_Hophornbeam_-_Flickr_-_treegrow_(3).jpg",
    photo3Alt: "Eastern Hophornbeam - Flickr - treegrow (3)",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Eastern_Hophornbeam_-_Flickr_-_treegrow_%283%29.jpg/256px-Eastern_Hophornbeam_-_Flickr_-_treegrow_%283%29.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Ostrya_virginiana_2.jpg\">A hophornbeam branch with the characteristic hop-resembling fruits[1] in early summer</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Eric_in_SF\">Eric Hunt</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Ostrya_virginiana#/media/File:Ostrya_virginiana_2.jpg",
    photo4Alt: "Ostrya virginiana 2",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Ostrya_virginiana_2.jpg/256px-Ostrya_virginiana_2.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Ironwood_tree_bark.jpg\">Bark of a mature tree</a>, <a href=\"https://en.wikipedia.org/wiki/User:420Traveler\">420Traveler</a> at <a href=\"https://en.wikipedia.org/wiki/\">English Wikipedia</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Ostrya_virginiana#/media/File:Ironwood_tree_bark.jpg",
    photo5Alt: "Bark of a mature tree",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ironwood_tree_bark.jpg/256px-Ironwood_tree_bark.jpg",

    photo6Credit: "American Hophornbeam range map. Public domain, via Wikimedia Commons",
    photo6Href: "https://en.wikipedia.org/wiki/Ostrya_virginiana#/media/File:Ostrya_virginiana_range_map.jpg",
    photo6Alt: "Ostrya virginiana range map",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Ostrya_virginiana_range_map.jpg/256px-Ostrya_virginiana_range_map.jpg",
  },
  {
    nameCommon: "American Mountain-ash",
    aka: ["rowan"],
    order: "Rosales",
    family: "Rosaceae",
    familyCommon: "Rose",
    genus: "Sorbus",
    species: "Sorbus americana",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "pinnate",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "americanmountain-ash",
    background: "bg-large/bg-107.jpg",
    backgroundSmall: "bg-small/bg-107.jpg",
    description: "The American Mountain-ash (Sorbus americana) is a small, decorative tree native to the northeastern United States and eastern Canada, flourishing in the cooler climates of higher altitudes and northern latitudes. Typically reaching 15 to 30 feet in height, it graces the landscape with a rounded crown and fine, textured foliage. Its compound leaves are composed of numerous leaflets, turning a striking array of oranges and reds in the autumn. In late spring to early summer, the tree is adorned with dense clusters of white flowers, which develop into vibrant, orange-red berries by late summer. These berry clusters persist into winter, offering a valuable food source for birds and wildlife. The Mountain-ash is not a true ash but is so named for its ash-like leaves. Its slender gray bark and modest stature make it an excellent choice for residential gardens where its ornamental berries and fall color can be a focal point.",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Sorbus_americana.jpg\">American Mountain-ash fruits and foliage</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Bruce_Marlin\">Bruce Marlin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/2.5/legalcode\" rel=\"license\">CC BY-SA 2.5</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Sorbus_americana#/media/File:Sorbus_americana.jpg",
    photo1Alt: "Sorbus americana",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/4/48/Sorbus_americana.jpg",

    photo2Credit: "Public domain, via Wikimedia Commons",
    photo2Href: "https://en.wikipedia.org/wiki/Sorbus_americana#/media/File:Sorbus_americana.png",
    photo2Alt: "American Mountain-ash range map",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Sorbus_americana.png/256px-Sorbus_americana.png"
  },
  {
    nameCommon: "American Papaw",
    order: "Magnoliales",
    family: "Annonaceae",
    familyCommon: "Custard-apple",
    genus: "Asimina",
    species: "Asimina triloba",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "americanpapaw",
    background: "bg-large/bg-17.jpg",
    backgroundSmall: "bg-small/bg-17.jpg",
    description: "<p>The American Pawpaw, Asimina triloba, is a small, deciduous tree native to the eastern United States. It stands out with its unique tropical-like appearance, unusual in temperate climates. The tree typically grows to 15-30 feet tall and is characterized by its broad, spreading form and large, drooping leaves, which turn a striking yellow in the fall.</p><p>The Pawpaw's most notable feature is its fruit, which is the largest edible fruit native to the United States. These oblong, green fruits turn brown or yellow when ripe and have a custard-like texture with a flavor reminiscent of bananas, mangoes, and melon. In spring, the Pawpaw produces small, dark red flowers that, while not particularly showy, are interesting and fragrant.</p><p>Often found in the understory of hardwood forests or along river banks, the Pawpaw is a valuable tree for wildlife, providing food and habitat. It's also gaining popularity in home gardens and orchards for its unique fruit and attractive foliage.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Pawpaw_patch_shade_2.jpg\">American Pawpaw trees</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Cbarlow\">Cbarlow</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Asimina_triloba#/media/File:Pawpaw_patch_shade_2.jpg",
    photo1Alt: "Pawpaw trees",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Pawpaw_patch_shade_2.jpg/256px-Pawpaw_patch_shade_2.jpg",

    photo2Credit: "American Pawpaw fruit. Public domain, via Wikimedia Commons",
    photo2Href: "https://en.wikipedia.org/wiki/Asimina_triloba#/media/File:Asimina_triloba3.jpg",
    photo2Alt: "Asimina triloba3",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Asimina_triloba3.jpg/256px-Asimina_triloba3.jpg",

    photo3Credit: "Yellow-billed Cuckoo with a background of Pawpaw foliage and fruits. Public domain, via Wikimedia Commons.",
    photo3Href: "https://en.wikipedia.org/wiki/Asimina_triloba#/media/File:Yellow-billed_Cuckoo_(Audubon).jpg",
    photo3Alt: "Yellow-billed Cuckoo with a background of Pawpaw foliage and fruits",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Yellow-billed_Cuckoo_%28Audubon%29.jpg/256px-Yellow-billed_Cuckoo_%28Audubon%29.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Ripe_fruit_of_Asimina_triloba.jpg\">Ripe fruit of American Pawpaw</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Cbarlow\">Cbarlow</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Asimina_triloba#/media/File:Ripe_fruit_of_Asimina_triloba.jpg",
    photo4Alt: "Ripe fruit of American Pawpaw",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Ripe_fruit_of_Asimina_triloba.jpg/256px-Ripe_fruit_of_Asimina_triloba.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Pawpaw_Flowers.jpg\">Pawpaw Flowers</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Regnidei\">Regnidei</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Asimina_triloba#/media/File:Pawpaw_Flowers.jpg",
    photo5Alt: "Pawpaw produces flowers before its leaves emerge",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Pawpaw_Flowers.jpg/256px-Pawpaw_Flowers.jpg",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Pawpaw_flowers_parts.jpg\">Pawpaw flowers</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Cbarlow\">Cbarlow</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Asimina_triloba#/media/File:Pawpaw_flowers_parts.jpg",
    photo6Alt: "Flower parts and stages (from female at bottom to pollen-rich male at right)",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Pawpaw_flowers_parts.jpg/256px-Pawpaw_flowers_parts.jpg",

    photo7Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Clonal_propagation_of_wild_pawpaw_in_Michigan.jpg\">Shallow outward stems of the American Pawpaw.</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Cbarlow\">Cbarlow</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo7Href: "https://en.wikipedia.org/wiki/Asimina_triloba#/media/File:Clonal_propagation_of_wild_pawpaw_in_Michigan.jpg",
    photo7Alt: "Pawpaw forms wild patches by growing shallow outward stems.",
    photo7Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Clonal_propagation_of_wild_pawpaw_in_Michigan.jpg/256px-Clonal_propagation_of_wild_pawpaw_in_Michigan.jpg",

    photo8Credit: "American Pawpaw range map. Public domain, via Wikimedia Commons",
    photo8Href: "https://en.wikipedia.org/wiki/Asimina_triloba#/media/File:Asimina_triloba_range_map_1.png",
    photo8Alt: "American Pawpaw range map",
    photo8Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Asimina_triloba_range_map_1.png/256px-Asimina_triloba_range_map_1.png",
  },
  {
    nameCommon: "American Persimmon",
    aka: [
      "Common Persimmon",
      "Eastern Persimmon",
      "Simmon",
      "Possumwood"
    ],
    order: "Ericales",
    family: "Ebenaceae",
    familyCommon: "Ebony",
    genus: "Diospyros",
    species: "Diospyros virginiana",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "americanpersimmon",
    background: "bg-large/bg-10.jpg",
    backgroundSmall: "bg-small/bg-10.jpg",
    description: "<p>The American Persimmon (Diospyros virginiana) is a native deciduous tree that graces the Eastern United States with its presence. Growing to a height of 35-60 feet, this species is renowned for its hardiness and adaptability, thriving in a variety of soils and conditions. The persimmon's bark is distinctive—dark, thick, and deeply furrowed, providing textural interest throughout the year. Its leaves are broad and glossy, offering a rich, green canopy in summer before turning to vivid shades of yellow, orange, and red in the autumn.</p><p>Springtime blooms are inconspicuous, but they give way to the tree's true bounty: the persimmon fruit. These round, orange berries are astringent when unripe but become sweet and custard-like after the first frost, making them a treat for wildlife and humans alike. The fruits have a long history of use in traditional Native American cuisine and are still valued today for their flavor and nutritional content. The American Persimmon is not just a food source but also a striking ornamental tree, particularly attractive to those interested in native planting and wildlife gardening.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Persimmon.jpg\">American persimmon tree bearing fruit in the fall</a>, Gphoto, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Diospyros_virginiana#/media/File:Persimmon.jpg",
    photo1Alt: "Persimmon",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Persimmon.jpg/256px-Persimmon.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Diospyros_virginiana-fruit.jpg\">American persimmon fruit</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Peterwchen\">Peterwchen</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0\"</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Diospyros_virginiana#/media/File:Diospyros_virginiana-fruit.jpg",
    photo2Alt: "Diospyros virginiana-fruit",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Diospyros_virginiana-fruit.jpg/256px-Diospyros_virginiana-fruit.jpg",

    photo6Credit: "American Persimmon range map. Public domain, via Wikimedia Commons",
    photo6Href: "https://en.wikipedia.org/wiki/Diospyros_virginiana#/media/File:Diospyros_virginiana_map.png",
    photo6Alt: "Diospyros virginiana range map",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Diospyros_virginiana_map.png/256px-Diospyros_virginiana_map.png",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Persimmon_0375.jpg\">American Persimmon flower</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Diospyros_virginiana#/media/File:Persimmon_0375.jpg",
    photo4Alt: "American Persimmon flower",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Persimmon_0375.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Common_Persimmon_Bark.jpg\">Distinctive heavily-scaled bark</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Jryandoherty\">Jryandoherty</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Diospyros_virginiana#/media/File:Common_Persimmon_Bark.jpg",
    photo3Alt: "Distinctive heavily-scaled bark",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Common_Persimmon_Bark.jpg/256px-Common_Persimmon_Bark.jpg",

    photo5Credit: "Botanical illustration. Public domain, via Wikimedia Commons.",
    photo5Href: "https://en.wikipedia.org/wiki/Diospyros_virginiana#/media/File:Diospyros_virginiana_BB-1913.png",
    photo5Alt: "Botanical illustration",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Diospyros_virginiana_BB-1913.png/256px-Diospyros_virginiana_BB-1913.png",

    photo7Credit: "",
    photo7Href: "https://en.wikipedia.org/wiki/Diospyros_virginiana#/media/File:D._virginiana_giant.jpg",
    photo7Alt: "A large American Persimmon tree in Indiana in 1935",
    photo7Src: "",

    photo8Credit: "A large American Persimmon tree in Indiana in 1935. Public domain, via Wikimedia Commons",
    photo8Href: "https://en.wikipedia.org/wiki/Diospyros_virginiana#/media/File:D._virginiana_giant.jpg",
    photo8Alt: "A large American Persimmon tree in Indiana in 1935",
    photo8Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/D._virginiana_giant.jpg/256px-D._virginiana_giant.jpg",
  },
  {
    nameCommon: "American Plum",
    aka: [
      "Wild Plum"
    ],
    order: "Rosales",
    family: "Rosaceae",
    familyCommon: "Rose",
    genus: "Prunus",
    species: "Prunus americana",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow",
      "gold"
    ],
    slug: "americanplum",
    background: "bg-large/bg-32.jpg",
    backgroundSmall: "bg-small/bg-32.jpg",
    description: "The American Plum (Prunus americana), also known as Wild Plum, is a versatile deciduous tree native to North America, adaptable to a range of environments from stream banks to prairies. Typically growing to 15-25 feet in height, it forms a rounded shape with a thicket of branches that can be trained as a single trunk or allowed to spread naturally. In early spring, before the foliage unfurls, the tree is covered with a profusion of fragrant white flowers, attracting pollinators and signaling the end of winter. The blossoms give way to small, red to yellow plums with a tart flavor, ripening by late summer. These fruits are enjoyed by wildlife and can be used in jams and jellies. The leaves are serrated and green, turning to yellow or red hues in the fall. The American Plum's rugged bark and branch structure provide winter interest, making it a resilient and attractive choice for naturalized areas or as a wildlife-friendly addition to the home garden.",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Prunus_americana.jpg\">American Plum flowers</a>, <a href=\"https://www.flickr.com/photos/33762104@N00\">Andrew Ciscel</a>, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/legalcode\" rel=\"license\">CC BY-SA 2.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Prunus_americana#/media/File:Prunus_americana.jpg",
    photo1Alt: "American Plum flowers",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Prunus_americana.jpg/256px-Prunus_americana.jpg",

    photo2Credit: "American Plum trees. Public domain, via Wikimedia Commons.",
    photo2Href: "https://en.wikipedia.org/wiki/Prunus_americana#/media/File:Pram_004_php.jpg",
    photo2Alt: "American Plum trees",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Pram_004_php.jpg/256px-Pram_004_php.jpg",

    photo3Credit: "American Plum range map. Public domain, via Wikimedia Commons.",
    photo3Href: "https://en.wikipedia.org/wiki/Prunus_americana#/media/File:Prunus_americana_range_map_1.png",
    photo3Alt: "American plum range map",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Prunus_americana_range_map_1.png/256px-Prunus_americana_range_map_1.png"
  },
  {
    nameCommon: "American Pussy Willow",
    aka: [
      "Glaucous Willow"
    ],
    order: "Malpighiales",
    family: "Salicaceae",
    familyCommon: "Willow",
    genus: "Salix",
    species: "Salix discolor",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "americanpussywillow",
    background: "bg-large/bg-61.jpg",
    backgroundSmall: "bg-small/bg-61.jpg",
    description: "<p>The American Pussy Willow (Salix discolor) is a beloved harbinger of spring, with its distinctive soft, silver catkins that burst forth on bare branches, often while the chill of winter still lingers. This deciduous shrub or small tree is native to North America, typically reaching 6 to 15 feet in height, and is cherished for its early-season interest and ease of care. The pussy willow's branches spread informally, creating a loosely structured, rounded silhouette.</p><p>The catkins, which precede the leaves, are a favorite in floral arrangements and are one of the first sources of pollen for bees. As the season progresses, the catkins give way to lance-shaped, light green leaves. The pussy willow thrives in moist, well-drained soil, and full to partial sunlight, often naturally occurring near wetlands and stream banks. Its ability to tolerate wet conditions makes it an excellent choice for rain gardens or naturalized areas. With minimal pruning, the American Pussy Willow remains a charming and rustic addition to any landscape.</p>",
    photo1Credit: "Branch with catkins in early spring. Public domain, via Wikimedia Commons",
    photo1Href: "https://en.wikipedia.org/wiki/Salix_discolor#/media/File:Pussy_willow_branch.jpg",
    photo1Alt: "Branch with catkins in early spring",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Pussy_willow_branch.jpg/256px-Pussy_willow_branch.jpg",

    photo5Credit: "American Pussy Willow leaves. Public domain, via Wikimedia Commons",
    photo5Href: "https://en.wikipedia.org/wiki/Salix_discolor#/media/File:Salix_discolor_(USDA).jpg",
    photo5Alt: "American Pussy Willow leaves",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Salix_discolor_%28USDA%29.jpg/154px-Salix_discolor_%28USDA%29.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:S_discolor_male_flowers.JPG\">Male flowers</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Silk666\">Silk666</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Salix_discolor#/media/File:S_discolor_male_flowers.JPG",
    photo3Alt: "male flowers",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/S_discolor_male_flowers.JPG/256px-S_discolor_male_flowers.JPG",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:S_discolor_female_flowers_01.JPG\">Female flowers</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Silk666\">Silk666</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Salix_discolor#/media/File:S_discolor_female_flowers_01.JPG",
    photo4Alt: "Female flowers",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/S_discolor_female_flowers_01.JPG/256px-S_discolor_female_flowers_01.JPG",

    photo2Credit: "American Pussy Willow range map. Public domain, via Wikimedia Commons.",
    photo2Href: "https://en.wikipedia.org/wiki/Salix_discolor#/media/File:Salix_discolor_range_map_1.png",
    photo2Alt: "American Pussy Willow range map",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Salix_discolor_range_map_1.png/256px-Salix_discolor_range_map_1.png",
  },
  {
    nameCommon: "American Sweetgum",
    aka: [
      "Sweetgum"
    ],
    order: "Saxifragales",
    family: "Altingiaceae",
    genus: "Liquidambar",
    species: "Liquidambar styraciflua",
    type: "deciduous",
    leafType: "lobed",
    leafAttachment: "alternate",
    fallColor: [
      "red"
    ],
    slug: "americansweetgum",
    background: "bg-large/bg-38.jpg",
    backgroundSmall: "bg-small/bg-38.jpg",
    description: "<p>The American Sweetgum (Liquidambar styraciflua) is a striking deciduous tree cherished for its star-shaped leaves and brilliant autumnal colors. Towering at an impressive height of 60 to 75 feet, it casts a commanding presence with a pyramidal to oval form. The glossy green leaves transition through a splendid palette of reds, purples, and oranges as the seasons turn, offering a spectacular fall display.</p><p>Springtime ushers in inconspicuous flowers, which develop into the tree's distinctive spiky seed balls. These seed pods hang from the branches throughout the winter, adding texture to the bare limbs. The sweetgum's bark is deeply furrowed, featuring corky ridges that create an interesting pattern with age.</p><p>Preferring full sun and moist, rich soils, the sweetgum is a popular landscaping choice, often used in parks and large spaces. However, its seed pods can be a nuisance in residential settings. Despite this, the American Sweetgum remains valued for its ornamental beauty and as a source of hardwood.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2014-11-02_13_06_29_Sweet_Gum_during_autumn_along_Lower_Ferry_Road_in_Ewing,_New_Jersey.JPG\">American Sweet Gum during autumn</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Liquidambar_styraciflua#/media/File:2014-11-02_13_06_29_Sweet_Gum_during_autumn_along_Lower_Ferry_Road_in_Ewing,_New_Jersey.JPG",
    photo1Alt: "Sweet Gum during autumn along Lower Ferry Road in Ewing, New Jersey 2014-11-02 13 06 29 ",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/2014-11-02_13_06_29_Sweet_Gum_during_autumn_along_Lower_Ferry_Road_in_Ewing%2C_New_Jersey.JPG/256px-2014-11-02_13_06_29_Sweet_Gum_during_autumn_along_Lower_Ferry_Road_in_Ewing%2C_New_Jersey.JPG",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Liquidambar_feuilles_FR_2013.jpg\">Summer foliage</a>, <a href=\"https://commons.wikimedia.org/wiki/User:JLPC\">JLPC</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Liquidambar_styraciflua#/media/File:Liquidambar_feuilles_FR_2013.jpg",
    photo2Alt: "Liquidambar feuilles FR 2013",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Liquidambar_feuilles_FR_2013.jpg/256px-Liquidambar_feuilles_FR_2013.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Liquidambar_styraciflua_bloom.JPG\">American Sweetgum bloom</a>, Shane Vaughn, <a href=\"https://creativecommons.org/licenses/by/3.0/legalcode\" rel=\"license\">CC BY 3.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Liquidambar_styraciflua#/media/File:Liquidambar_styraciflua_bloom.JPG",
    photo4Alt: "Liquidambar styraciflua bloom",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Liquidambar_styraciflua_bloom.JPG/256px-Liquidambar_styraciflua_bloom.JPG",

    photo7Credit: "American Sweetgum range map. Public domain, via Wikimedia Commons.",
    photo7Href: "https://en.wikipedia.org/wiki/Liquidambar_styraciflua#/media/File:Liquidambar_styraciflua_range_map_4.png",
    photo7Alt: "American Sweetgum range map",
    photo7Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Liquidambar_styraciflua_range_map_4.png/256px-Liquidambar_styraciflua_range_map_4.png",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:American_Sweetgum_Liquidambar_styraciflua_Bark_Horizontal.JPG\">American Sweetgum Bark</a>, Derek Ramsey (<a href=\"https://en.wikipedia.org/wiki/User:Ram-Man\">Ram-Man</a>), <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Liquidambar_styraciflua#/media/File:American_Sweetgum_Liquidambar_styraciflua_Bark_Horizontal.JPG",
    photo6Alt: "Deeply ridged bark",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/American_Sweetgum_Liquidambar_styraciflua_Bark_Horizontal.JPG/256px-American_Sweetgum_Liquidambar_styraciflua_Bark_Horizontal.JPG",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2014-11-02_13_07_00_Sweet_Gum_foliage_during_autumn_along_Lower_Ferry_Road_in_Ewing,_New_Jersey.JPG\">Sweet Gum foliage during autumn</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Liquidambar_styraciflua#/media/File:2014-11-02_13_07_00_Sweet_Gum_foliage_during_autumn_along_Lower_Ferry_Road_in_Ewing,_New_Jersey.JPG",
    photo5Alt: "Autumn foliage",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/2014-11-02_13_07_00_Sweet_Gum_foliage_during_autumn_along_Lower_Ferry_Road_in_Ewing%2C_New_Jersey.JPG/256px-2014-11-02_13_07_00_Sweet_Gum_foliage_during_autumn_along_Lower_Ferry_Road_in_Ewing%2C_New_Jersey.JPG",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Liquidambar-otonno-20071028-1.jpg\">A group of young sweetgum in autumn</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Luis_Fern%C3%A1ndez_Garc%C3%ADa\">Luis Fernández García</a>, <a href=\"https://creativecommons.org/licenses/by-sa/2.5/es/deed.en\" rel=\"license\">CC BY-SA 2.5 ES</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Liquidambar_styraciflua#/media/File:Liquidambar-otonno-20071028-1.jpg",
    photo3Alt: "A group of young sweetgum in autumn",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Liquidambar-otonno-20071028-1.jpg/256px-Liquidambar-otonno-20071028-1.jpg",    
  },
  {
    nameCommon: "American Sycamore",
    aka: [
      "American Planetree",
      "Buttonwood",
      "Water Beech"
    ],
    order: "Proteales",
    family: "Platanaceae",
    familyCommon: "Sycamore",
    genus: "Platanus",
    species: "Platanus occidentalis",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "brown"
    ],
    slug: "americansycamore",
    background: "bg-large/bg-125.jpg",
    backgroundSmall: "bg-small/bg-125.jpg",
    description: "<p>The American Sycamore (Platanus occidentalis), also known as the American Plane or Buttonwood, is a grand, fast-growing deciduous tree known for its size and longevity. Dominating the landscape with heights reaching 70 to 100 feet, it boasts a massive, sturdy trunk and a wide-spreading canopy that can provide ample shade. This tree is easily recognizable by its mottled exfoliating bark, which flakes off in patches to reveal a creamy white and green inner bark, giving the trunk and limbs a distinctive camouflage-like appearance.</p><p>Its large, palmate leaves are bright green and turn to a golden brown in the fall, before dropping to reveal round, ball-like seed clusters that dangle from the branches. These seeds persist through winter, decorating the bare tree. The American Sycamore is a hardy species, often planted in urban environments for its tolerance to pollution and its ability to thrive in a wide range of soil conditions. With its impressive stature and unique bark, it serves as a striking ornamental tree for large landscapes.</p>",

    photo1Credit: "Sycamore in winter showing persistent fruit. Public domain, via Wikimedia Commons.",
    photo1Href: "https://en.wikipedia.org/wiki/Platanus_occidentalis#/media/File:Sycamore_in_Warren_County,_Indiana.png",
    photo1Alt: "Sycamore in winter, showing persistent fruit",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Sycamore_in_Warren_County%2C_Indiana.png/256px-Sycamore_in_Warren_County%2C_Indiana.png",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Sycamore_Tree_Leaf.jpg\">Sycamore leaf in fall</a>, <a href=\"https://commons.wikimedia.org/wiki/User:John_P_Salvatore\">John P Salvatore</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Platanus_occidentalis#/media/File:Sycamore_Tree_Leaf.jpg",
    photo2Alt: "Sycamore Tree Leaf",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sycamore_Tree_Leaf.jpg/256px-Sycamore_Tree_Leaf.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Sycamore_Tree_Bark.jpg\">Sycamore Tree Bark</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Myrichiehaynes\">Richard Stephen Haynes</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Platanus_occidentalis#/media/File:Sycamore_Tree_Bark.jpg",
    photo3Alt: "Sycamore Tree Bark",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Sycamore_Tree_Bark.jpg/256px-Sycamore_Tree_Bark.jpg",

    photo4Credit: "Sycamore range map. Public domain, via Wikimedia Commons",
    photo4Href: "https://en.wikipedia.org/wiki/Platanus_occidentalis#/media/File:Platanus_occidentalis_map.png",
    photo4Alt: "Platanus occidentalis range map",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Platanus_occidentalis_map.png/256px-Platanus_occidentalis_map.png",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Sycamore_trunk_and_branches.JPG\">Trunk and branches</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Jakec\">Jakec</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Platanus_occidentalis#/media/File:Sycamore_trunk_and_branches.JPG",
    photo5Alt: "Trunk and branches",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Sycamore_trunk_and_branches.JPG/256px-Sycamore_trunk_and_branches.JPG",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Seedling_American_Sycamore.jpg\">American Sycamore Seedling</a>, <a href=\"https://commons.wikimedia.org/wiki/User:PerytonMango\">PerytonMango</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Platanus_occidentalis#/media/File:Seedling_American_Sycamore.jpg",
    photo6Alt: "Seedling sprouting in gravel",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Seedling_American_Sycamore.jpg/256px-Seedling_American_Sycamore.jpg",

    photo7Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Sycamore_Platanus_occidentalis.jpg\">Young Sycamore tree</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Bruce_Marlin\">Bruce Marlin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/2.5/legalcode\" rel=\"license\">CC BY-SA 2.5</a>",
    photo7Href: "https://en.wikipedia.org/wiki/Platanus_occidentalis#/media/File:Sycamore_Platanus_occidentalis.jpg",
    photo7Alt: "Young Sycamore tree",
    photo7Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Sycamore_Platanus_occidentalis.jpg/256px-Sycamore_Platanus_occidentalis.jpg",

    photo8Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2014-11-02_12_01_43_American_Sycamore_foliage_during_autumn_at_the_Ewing_Presbyterian_Church_Cemetery_in_Ewing,_New_Jersey.JPG\">American Sycamore foliage during autumn.</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo8Href: "https://en.wikipedia.org/wiki/Platanus_occidentalis#/media/File:2014-11-02_12_01_43_American_Sycamore_foliage_during_autumn_at_the_Ewing_Presbyterian_Church_Cemetery_in_Ewing,_New_Jersey.JPG",
    photo8Alt: "Autumn leaves",
    photo8Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2014-11-02_12_01_43_American_Sycamore_foliage_during_autumn_at_the_Ewing_Presbyterian_Church_Cemetery_in_Ewing%2C_New_Jersey.JPG/256px-2014-11-02_12_01_43_American_Sycamore_foliage_during_autumn_at_the_Ewing_Presbyterian_Church_Cemetery_in_Ewing%2C_New_Jersey.JPG",   
  },
  {
    nameCommon: "Amur Maple",
    aka: [
      "Siberian Maple"
    ],
    order: "Sapindales",
    family: "Sapindaceae",
    familyCommon: "Maple",
    genus: "Acer",
    species: "Acer ginnala",
    type: "deciduous",
    leafType: "lobed",
    leafAttachment: "opposite",
    fallColor: [
      "red",
      "orange"
    ],
    slug: "amurmaple",
    background: "bg-large/bg-6.jpg",
backgroundSmall: "bg-small/bg-6.jpg",
    description: "<p>The Amur Maple (Acer ginnala), a native to the northeastern regions of Asia, is a small, versatile deciduous tree or large shrub that is increasingly popular in temperate climates for its ornamental qualities and modest size, typically growing to 15-20 feet in height. With a rounded to open crown, the tree is well-suited for urban gardens and spaces where larger maples would be overwhelming.</p><p>The leaves of the Amur Maple are simple and palmate, resembling miniature versions of the classic maple leaf. They emerge in spring as fresh green, turning to vibrant shades of yellow, orange, and deep red in the fall, providing a spectacular autumn display. In spring, fragrant yellow-white flowers appear, giving way to winged samaras (maple \"helicopters\") that mature from green to red.</p><p>Hardy and adaptable, the Amur Maple can tolerate a range of soil conditions and is drought-resistant once established. It is often used in landscaping for hedges, screens, or as a stand-alone specimen. Its ability to withstand harsh conditions makes it an attractive and practical choice for gardeners seeking a touch of fall color and year-round interest.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/User:MPF\">MPF</a>, <a href=\"https://commons.wikimedia.org/wiki/File:Acer_ginnala.jpg\">Amur maple foliage</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Acer_ginnala#/media/File:Acer_ginnala.jpg",
    photo1Alt: "Amur maple foliage",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Acer_ginnala.jpg/256px-Acer_ginnala.jpg"
  },
  {
    nameCommon: "Austrian Pine",
    aka: [
      "European Black Pine"
    ],
    order: "Pinales",
    family: "Pinaceae",
    familyCommon: "Pine",
    genus: "Pinus",
    species: "Pinus nigra",
    type: "conifer",
    needleStructure: "clustered needles",
    needleCluster: [
      2
    ],
    slug: "austrianpine",
    background: "bg-large/bg-62.jpg",
    backgroundSmall: "bg-small/bg-62.jpg",
    description: "<p>The Austrian Pine (Pinus nigra), also known as the Black Pine, is a robust, evergreen conifer that brings a stately and enduring presence to landscapes. Native to Europe, this species has been widely planted across North America, reaching heights of 40 to 60 feet. It boasts a dense, pyramidal shape in its youth that matures into a rounded and sometimes irregular crown, providing a robust silhouette against the sky.</p><p>The tree's long, dark green needles, growing in pairs, are stiff and lush, offering year-round color and texture. They cluster densely on the branches, creating a thick canopy that provides ample shade. The Austrian Pine is easily recognizable by its thick, deeply fissured, dark gray to black bark, which adds a rugged character especially appreciated in winter months.</p><p>Highly adaptable to a variety of conditions, this pine is valued for its tolerance to urban pollution and soil compaction, making it a favored choice for city plantings and windbreaks. Its sturdy nature and classic coniferous form make the Austrian Pine a reliable and attractive addition to any setting seeking a touch of evergreen resilience.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Forest_in_Bulgaria_near_Dundukovo_dam.jpg\">Austrian Pine forest</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Gvm\">Gvm</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Pinus_nigra#/media/File:Forest_in_Bulgaria_near_Dundukovo_dam.jpg",
    photo1Alt: "Forest in Bulgaria near Dundukovo dam",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Forest_in_Bulgaria_near_Dundukovo_dam.jpg/256px-Forest_in_Bulgaria_near_Dundukovo_dam.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Borovicová_šiška.jpg\">Foliage and cone</a>, <a href=\"https://cs.wikipedia.org/wiki/User:Dezidor\">Dezidor</a>, <a href=\"https://creativecommons.org/licenses/by/3.0/legalcode\" rel=\"license\">CC BY 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Pinus_nigra#/media/File:Borovicov%C3%A1_%C5%A1i%C5%A1ka.jpg",
    photo2Alt: "Foliage and cone",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Borovicov%C3%A1_%C5%A1i%C5%A1ka.jpg/256px-Borovicov%C3%A1_%C5%A1i%C5%A1ka.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Crepuscular_rays_in_the_woods_of_Kasterlee,_Belgium.jpg\">Corsican pine plantation</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Donarreiskoffer\">Donar Reiskoffer</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Pinus_nigra#/media/File:Crepuscular_rays_in_the_woods_of_Kasterlee,_Belgium.jpg",
    photo3Alt: "Pinus nigra var. corsicana",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Crepuscular_rays_in_the_woods_of_Kasterlee%2C_Belgium.jpg/256px-Crepuscular_rays_in_the_woods_of_Kasterlee%2C_Belgium.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Pinus_nigra_MHNT.2022.4.3.jpg\">Cones and seeds from an Austrian Pine</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Erc%C3%A9\">Roger Culos</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Pinus_nigra#/media/File:Pinus_nigra_MHNT.2022.4.3.jpg",
    photo4Alt: "Cones",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Pinus_nigra_MHNT.2022.4.3.jpg/256px-Pinus_nigra_MHNT.2022.4.3.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Austrian_Pine_Pinus_nigra_Bark_Closeup_2000px.jpg\">Austrian Pine bark</a>, Photo (c)2007 Derek Ramsey (<a href=\"https://en.wikipedia.org/wiki/User:Ram-Man\">Ram-Man</a>), <a href=\"https://creativecommons.org/licenses/by-sa/2.5/legalcode\" rel=\"license\">CC BY-SA 2.5</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Pinus_nigra#/media/File:Austrian_Pine_Pinus_nigra_Bark_Closeup_2000px.jpg",
    photo5Alt: "Austrian Pine Pinus nigra Bark Closeup",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Austrian_Pine_Pinus_nigra_Bark_Closeup_2000px.jpg/256px-Austrian_Pine_Pinus_nigra_Bark_Closeup_2000px.jpg",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2021-05-07_12_50_37_Pollen_cones_on_an_Austrian_Pine_within_Franklin_Glen_Park_in_the_Franklin_Glen_section_of_Chantilly,_Fairfax_County,_Virginia.jpg\">Pollen cones</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Pinus_nigra#/media/File:2021-05-07_12_50_37_Pollen_cones_on_an_Austrian_Pine_within_Franklin_Glen_Park_in_the_Franklin_Glen_section_of_Chantilly,_Fairfax_County,_Virginia.jpg",
    photo6Alt: "Pollen cones on an Austrian Pine within Franklin Glen Park in the Franklin Glen section of Chantilly, Fairfax County, Virginia 2021-05-07 12 50 37",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2021-05-07_12_50_37_Pollen_cones_on_an_Austrian_Pine_within_Franklin_Glen_Park_in_the_Franklin_Glen_section_of_Chantilly%2C_Fairfax_County%2C_Virginia.jpg/256px-2021-05-07_12_50_37_Pollen_cones_on_an_Austrian_Pine_within_Franklin_Glen_Park_in_the_Franklin_Glen_section_of_Chantilly%2C_Fairfax_County%2C_Virginia.jpg",
  },
  {
    nameCommon: "Bald Cypress",
    aka: [
      "swamp cypress", "white cypress",
    ],
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
    background: "bg-large/bg-124.jpg",
    backgroundSmall: "bg-small/bg-124.jpg",
    description: "<p>The Bald Cypress (Taxodium distichum) is a stately deciduous conifer, iconic in Southern swamps but adaptable to drier lands and cooler climates. Reaching heights of 50 to 70 feet, it is easily recognized by its unique, buttressed trunk and feathery, light green needles that turn a rusty orange before shedding in fall. The tree’s silhouette is strikingly elegant, with a straight, tapering trunk and a pyramidal canopy that becomes more open and spreading with age.</p><p>Native to the southeastern United States, the Bald Cypress is famed for its \"knees,\" woody projections that rise from the roots around the tree, believed to help with gas exchange and stability in its often waterlogged habitat. This remarkable tree is not only a survivor of wet conditions but is also remarkably rot-resistant, making its wood valuable for construction.</p><p>The Bald Cypress is a tree of resilience and beauty, thriving where few others can, and providing vital ecosystem services, as well as aesthetic value to parks, gardens, and natural areas.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Baldcypress_cone.jpg\">Baldcypress cone</a>, <a href=\"https://en.wikipedia.org/wiki/User:CarTick\">CarTick</a> at <a href=\"https://en.wikipedia.org/wiki/\">English Wikipedia</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Taxodium_distichum#/media/File:Baldcypress_cone.jpg",
    photo1Alt: "Baldcypress cone",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Baldcypress_cone.jpg/256px-Baldcypress_cone.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Bald_Cypress_Leaves_2264px.jpg\">Bald Cypress leaves</a>, Photo by and (c)2006 Derek Ramsey (<a href=\"https://en.wikipedia.org/wiki/User:Ram-Man\">Ram-Man</a>), <a href=\"https://creativecommons.org/licenses/by-sa/2.5/legalcode\" rel=\"license\">CC BY-SA 2.5</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Taxodium_distichum#/media/File:Bald_Cypress_Leaves_2264px.jpg",
    photo2Alt: "Bald Cypress Leaves 2264px",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Bald_Cypress_Leaves_2264px.jpg/256px-Bald_Cypress_Leaves_2264px.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2014-11-02_14_12_30_Bald_Cypress_foliage_during_autumn_along_Hunters_Ridge_Drive_in_Hopewell_Township,_New_Jersey.jpg\">Foliage in autumn just before shedding</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Taxodium_distichum#/media/File:2014-11-02_14_12_30_Bald_Cypress_foliage_during_autumn_along_Hunters_Ridge_Drive_in_Hopewell_Township,_New_Jersey.jpg",
    photo3Alt: "Foliage in autumn just before shedding",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/2014-11-02_14_12_30_Bald_Cypress_foliage_during_autumn_along_Hunters_Ridge_Drive_in_Hopewell_Township%2C_New_Jersey.jpg/256px-2014-11-02_14_12_30_Bald_Cypress_foliage_during_autumn_along_Hunters_Ridge_Drive_in_Hopewell_Township%2C_New_Jersey.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Bald_Cypress_Taxodium_distichum_Bark_Vertical.JPG\">Bald Cypress bark</a>, Photo by and (c)2016 Derek Ramsey (<a href=\"https://en.wikipedia.org/wiki/User:Ram-Man\">Ram-Man</a>), <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Taxodium_distichum#/media/File:Bald_Cypress_Taxodium_distichum_Bark_Vertical.JPG",
    photo4Alt: "Bald Cypress Bark", 
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Bald_Cypress_Taxodium_distichum_Bark_Vertical.JPG/256px-Bald_Cypress_Taxodium_distichum_Bark_Vertical.JPG",

    photo5Credit: "Bald cypress forest in a central Mississippi lake. Public domain, via Wikimedia Commons.",
    photo5Href: "https://en.wikipedia.org/wiki/Taxodium_distichum#/media/File:Taxodium_distichum_NRCSMS01010.jpg",
    photo5Alt: "Bald cypress forest in a central Mississippi lake",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Taxodium_distichum_NRCSMS01010.jpg/343px-Taxodium_distichum_NRCSMS01010.jpg",

    photo6Credit: "Bald Cypress native range map. Public domain, via Wikimedia Commons",
    photo6Href: "https://en.wikipedia.org/wiki/Taxodium_distichum#/media/File:Baldcypress_range.jpg",
    photo6Alt: "Bald Cypress native range map",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Baldcypress_range.jpg/256px-Baldcypress_range.jpg",
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
    background: "bg-large/bg-75.jpg",
    backgroundSmall: "bg-small/bg-75.jpg",
    description: "<p>The Balsam Fir (Abies balsamea) is a quintessential evergreen conifer native to the cold climates of the northeastern United States and Canada. It reaches a mature height of 45 to 75 feet, displaying a classic conical shape that embodies the spirit of the northern woods. Its dark-green, aromatic needles are arranged in a spiral fashion along the branches, which are dense and contribute to the tree's compact appearance.</p><p>Distinct for its smooth, gray bark and the resin-filled blisters that dot its surface, the Balsam Fir exudes a distinctive fragrance, especially when its needles or resin blisters are crushed. In late fall, it produces upright, cylindrical cones that disintegrate on the tree, releasing seeds to the wind.</p><p>The Balsam Fir is highly valued for its wood, essential oils, and as a traditional Christmas tree. Its dense foliage provides shelter for wildlife and contributes to the picturesque, snow-laden landscapes of the boreal forest. Hardy and shade-tolerant, it’s a symbol of the wilderness and a staple in both natural forests and cultivated landscapes.</p>",

    photo1Credit: "Balsam Fir tree. Public domain, via Wikimedia Commons.",
    photo1Href: "https://en.wikipedia.org/wiki/Abies_balsamea#/media/File:Abies_balsamea.jpg",
    photo1Alt: "Balsam Fir tree",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Abies_balsamea.jpg/256px-Abies_balsamea.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Abies_balsamea_pollen_cones2.jpg\">Pollen cones</a>, Joseph O'Brien, USDA Forest Service, United States, <a href=\"https://creativecommons.org/licenses/by/3.0/us/deed.en\" rel=\"license\">CC BY 3.0 US</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Abies_balsamea#/media/File:Abies_balsamea_pollen_cones2.jpg",
    photo2Alt: "Pollen cones",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Abies_balsamea_pollen_cones2.jpg/256px-Abies_balsamea_pollen_cones2.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Abies_balsamea_bark.jpg\">Balsam Fir bark</a>, Keith Kanoti, Maine Forest Service, United States, <a href=\"https://creativecommons.org/licenses/by/3.0/us/deed.en\" rel=\"license\">CC BY 3.0 US</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Abies_balsamea#/media/File:Abies_balsamea_bark.jpg",
    photo3Alt: "Balsam Fir bark",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Abies_balsamea_bark.jpg/256px-Abies_balsamea_bark.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Abies_balsamea_2_(5097476331).jpg\">Needles on symmetrical branchlets</a>, <a href=\"https://www.flickr.com/people/53801642@N06\">Superior National Forest</a>, <a href=\"https://creativecommons.org/licenses/by/2.0/legalcode\" rel=\"license\">CC BY 2.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Abies_balsamea#/media/File:Abies_balsamea_2_(5097476331).jpg",
    photo4Alt: "Needles on symmetrical branchlets",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Abies_balsamea_2_%285097476331%29.jpg/256px-Abies_balsamea_2_%285097476331%29.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Morning_dew_on_Abies_balsamea.jpg\">Closeup of thickly leaved branchlets</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Ktr101\">Ktr101</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Abies_balsamea#/media/File:Morning_dew_on_Abies_balsamea.jpg",
    photo5Alt: "Closeup of thickly leaved branchlets",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Morning_dew_on_Abies_balsamea.jpg/256px-Morning_dew_on_Abies_balsamea.jpg",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Abies_balsamea_cones_Niapiskau_02.jpg\">Seed cones with resin oozing out</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Cephas\">Cephas</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Abies_balsamea#/media/File:Abies_balsamea_cones_Niapiskau_02.jpg",
    photo6Alt: "Seed cones with resin oozing out",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Abies_balsamea_cones_Niapiskau_02.jpg/256px-Abies_balsamea_cones_Niapiskau_02.jpg",

    photo7Credit: "Public domain, via Wikimedia Commons",
    photo7Href: "https://en.wikipedia.org/wiki/Abies_balsamea#/media/File:Abies_balsamea_range_map_3.png",
    photo7Alt: "Abies balsamea range map 3",
    photo7Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Abies_balsamea_range_map_3.png/256px-Abies_balsamea_range_map_3.png",
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
    background: "bg-large/bg-35.jpg",
backgroundSmall: "bg-small/bg-35.jpg",
    description: "<p>The Balsam Poplar (Populus balsamifera), also known as the Balm of Gilead, is a hardy deciduous tree native to the northern regions of North America. With a typical height of 50 to 80 feet, it grows rapidly, forming a tall and narrow silhouette that is robust and hardy against the backdrop of cold climates. Its bark is dark gray and deeply furrowed, providing textural interest throughout the year.</p><p>In early spring, before the leaves unfurl, the Balsam Poplar is adorned with resinous buds that exude a distinctively fragrant, sticky balsam scent. These buds are often harvested for medicinal salves and ointments. The leaves are shiny green, broad, and ovate with finely toothed edges, fluttering and rustling in the breeze, turning yellow in the fall.</p><p>Known for its cotton-like seeds that float through the air in spring, the Balsam Poplar plays a crucial role in riparian ecosystems, providing erosion control and habitat. It's valued for its quick growth, making it an excellent choice for windbreaks and privacy screens in landscape design.</p>",
    photo1Credit: "A stem with young leaves. Public domain, via Wikimedia Commons.",
    photo1Href: "https://en.wikipedia.org/wiki/Populus_balsamifera#/media/File:Populus_balsamifera.jpg",
    photo1Alt: "A stem with young leaves",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Populus_balsamifera.jpg/256px-Populus_balsamifera.jpg",
    
    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Reykjavík_-_tree_of_the_year_2016.jpeg\">Balsam poplar in Reykjavík, Iceland</a>, <a href=\"https://commons.wikimedia.org/wiki/User:1Veertje\">Vera de Kok</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Populus_balsamifera#/media/File:Reykjav%C3%ADk_-_tree_of_the_year_2016.jpeg",
    photo2Alt: "Reykjavík - tree of the year 2016",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Reykjav%C3%ADk_-_tree_of_the_year_2016.jpeg/256px-Reykjav%C3%ADk_-_tree_of_the_year_2016.jpeg",

    photo3Credit: "Balsam Poplar range map. Public domain, via Wikimedia Commons.",
    photo3Href: "https://en.wikipedia.org/wiki/Populus_balsamifera#/media/File:Populus_balsamifera_range_map_1.png",
    photo3Alt: "Balsam Poplar range map",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Populus_balsamifera_range_map_1.png/256px-Populus_balsamifera_range_map_1.png"
  },
  {
    nameCommon: "Bitternut Hickory",
    aka: ["bitternut", "yellowbud hickory", "swamp hickory"],
    order: "Fagales",
    family: "Juglandaceae",
    familyCommon: "Walnut",
    genus: "Carya",
    species: "Carya cordiformis",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "pinnate",
    leafAttachment: "alternate",
    fallColor: [
      "yellow",
      "golden"
    ],
    slug: "bitternuthickory",
    background: "bg-large/bg-18.jpg",
    backgroundSmall: "bg-small/bg-18.jpg",
    description: "<p>The Bitternut Hickory (Carya cordiformis) is a tall and stately deciduous tree that is native to the eastern United States. It typically soars to heights of 50 to 80 feet, characterized by a straight, slender trunk and a well-formed, rounded crown. Its bark is smooth and gray when young, becoming shaggy and more deeply furrowed with age, adding to the tree's dignified appearance.</p><p>Noted for its pinnately compound leaves, which usually feature 7 to 11 lance-shaped, serrated leaflets, the Bitternut Hickory's foliage is a vibrant green that transitions to a cheerful yellow in the autumn, creating a bright canopy. The tree produces small, greenish-yellow male and female flowers on the same tree, with the females developing into the bitter-tasting nuts that give the tree its name. These nuts are encased in thin, yellow-green husks that split open when mature.</p><p>Although not favored for human consumption due to their bitter flavor, the nuts are an important food source for wildlife. The Bitternut Hickory is a valuable hardwood species, often used in furniture making and for its high-quality firewood. With its tall stature and strong wood, the Bitternut Hickory is a noble feature in forests, parks, and large landscapes.</p>",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Carya_cordiformis.jpg\">Bitternut Hickory foliage</a>, <a href=\"https://commons.wikimedia.org/wiki/User:MPF\">MPF</a> assumed., <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Carya_cordiformis#/media/File:Carya_cordiformis.jpg",
    photo2Alt: "Carya cordiformis",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Carya_cordiformis.jpg/256px-Carya_cordiformis.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Carya_cordiformis_(Bitternut_Hickory)_(37064132791).jpg\">Maturing fruit</a>, <a href=\"https://www.flickr.com/people/138014579@N08\">Plant Image Library</a> from Boston, USA, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/legalcode\" rel=\"license\">CC BY-SA 2.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Carya_cordiformis#/media/File:Carya_cordiformis_(Bitternut_Hickory)_(37064132791).jpg",
    photo3Alt: "Carya cordiformis (Bitternut Hickory)",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Carya_cordiformis_%28Bitternut_Hickory%29_%2837064132791%29.jpg/256px-Carya_cordiformis_%28Bitternut_Hickory%29_%2837064132791%29.jpg",

    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Carya_cordiformis_AA.jpg\">Bitternut Hickory in autumn</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Akgarb\">William (Ned) Friedman</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Carya_cordiformis#/media/File:Carya_cordiformis_AA.jpg",
    photo1Alt: "Bitternut Hickory in autumn",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Carya_cordiformis_AA.jpg/256px-Carya_cordiformis_AA.jpg",

    photo7Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Carya_cordiformis_male_flowers.jpg\">Catkins of male flowers</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Akgarb\">William (Ned) Friedman</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo7Href: "https://en.wikipedia.org/wiki/Carya_cordiformis#/media/File:Carya_cordiformis_male_flowers.jpg",
    photo7Alt: "Carya cordiformis male flowers",
    photo7Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Carya_cordiformis_male_flowers.jpg/128px-Carya_cordiformis_male_flowers.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Carya_cordiformis_leaf.jpg\">Bitternut Hickory leaf</a>, Kristel Schoonderwoerd, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/legalcode\" rel=\"license\">CC BY-SA 2.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Carya_cordiformis#/media/File:Carya_cordiformis_leaf.jpg",
    photo5Alt: "Bitternut Hickory leaf",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Carya_cordiformis_leaf.jpg/256px-Carya_cordiformis_leaf.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Carya_cordiformis_(Bitternut_Hickory)_(33323804856).jpg\">Bitternut Hickory bark</a>, <a href=\"https://www.flickr.com/people/138014579@N08\">Plant Image Library</a> from Boston, USA, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/legalcode\" rel=\"license\">CC BY-SA 2.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Carya_cordiformis#/media/File:Carya_cordiformis_(Bitternut_Hickory)_(33323804856).jpg",
    photo4Alt: "Bitternut Hickory bark",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Carya_cordiformis_%28Bitternut_Hickory%29_%2833323804856%29.jpg/256px-Carya_cordiformis_%28Bitternut_Hickory%29_%2833323804856%29.jpg",

    photo6Credit: "Bitternut Hickory natural range map. Public domain, via Wikimedia Commons.",
    photo6Href: "https://en.wikipedia.org/wiki/Carya_cordiformis#/media/File:Carya_cordiformis_range_map_1.png",
    photo6Alt: "Bitternut Hickory natural range map",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Carya_cordiformis_range_map_1.png/256px-Carya_cordiformis_range_map_1.png",
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
    compoundStructure: "pinnate",
    leafAttachment: "opposite",
    fallColor: [
      "yellow",
      "brown"
    ],
    slug: "blackash",
    background: "bg-large/bg-76.jpg",
    backgroundSmall: "bg-small/bg-76.jpg",
    description: "<p>The Black Ash (Fraxinus nigra) is a deciduous hardwood tree that is indigenous to wetland areas of the northeastern United States and Canada. This slender, medium-sized tree typically grows to heights of 40 to 60 feet. It has a straight trunk with a narrow, rounded crown, and its bark is dark gray to brown with deep furrows and intersecting ridges, creating a diamond-like pattern.</p><p>The tree’s leaves are compound, with 7 to 11 leaflets that are dark green and turn a muted yellow in the fall. Black Ash is dioecious, with separate male and female flowers that appear on different trees before the emergence of leaves. The female trees produce winged samaras that are dispersed by the wind.</p><p>Black Ash is notable for its ability to thrive in wet, swampy conditions, and its wood is highly valued for its flexibility and strength, particularly in the making of baskets, hence its nickname, \"basket ash.\" However, the species is under threat from the invasive Emerald Ash Borer, which has devastated populations of ash trees across North America.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Fraxinus_nigra_leaves.jpg\">Black Ash leaves</a>, Keith Kanoti, Maine Forest Service, USA, <a href=\"https://creativecommons.org/licenses/by/3.0/us/deed.en\" rel=\"license\">CC BY 3.0 US</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Fraxinus_nigra#/media/File:Fraxinus_nigra_leaves.jpg",
    photo1Alt: "Black Ash leaves",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Fraxinus_nigra_leaves.jpg/256px-Fraxinus_nigra_leaves.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:FraNigBark.jpeg\">Black Ash trunk. Tree bark is corky and spongy.</a> <a href=\"https://commons.wikimedia.org/wiki/User:Kkl456\">Kkl456</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Fraxinus_nigra#/media/File:FraNigBark.jpeg",
    photo2Alt: "Fraxinus nigra Bark",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/FraNigBark.jpeg/256px-FraNigBark.jpeg",
    photo3Credit: "Black Ash range map. Public domain, via Wikimedia Commons.",
    photo3Href: "https://en.wikipedia.org/wiki/Fraxinus_nigra#/media/File:Fraxinus_nigra_range_map_3.png",
    photo3Alt: "Fraxinus nigra range map",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Fraxinus_nigra_range_map_3.png/256px-Fraxinus_nigra_range_map_3.png"
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
    background: "bg-large/bg-77.jpg",
    backgroundSmall: "bg-small/bg-77.jpg",
    description: "<p>The Black Cherry (Prunus serotina), also known as Wild Cherry, is a deciduous hardwood species esteemed for both its ecological contributions and valuable lumber. Native to Eastern North America, it reaches heights of 50 to 80 feet in forest settings, displaying a straight trunk and a round-topped canopy when grown in the open.</p><p>The tree's bark is dark and scaly, becoming deeply furrowed with age, and is easily recognizable by its burnt cornflake appearance. In spring, it bears elongated clusters of fragrant white flowers, followed by small, shiny, red-black cherries in late summer. These fruits are a favorite among birds and wildlife, though their bitter taste is less favored by humans until cooked and sweetened.</p><p>Black Cherry leaves are lanceolate and finely toothed, turning yellow to red in the fall. The wood is prized for its rich color and fine grain, used in cabinetry and fine furniture. This cherry species is also known for its medicinal properties, with bark that has been traditionally used as a cough remedy. However, care must be taken as parts of the plant contain cyanide and are toxic if ingested in large quantities.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Amerikaanse_vogelkers_Prunus_serotina_closeup.jpg\">Flowers and leaves</a>, anonymous, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Prunus_serotina#/media/File:Amerikaanse_vogelkers_Prunus_serotina_closeup.jpg",
    photo1Alt: "Flowers and leaves",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Amerikaanse_vogelkers_Prunus_serotina_closeup.jpg/195px-Amerikaanse_vogelkers_Prunus_serotina_closeup.jpg",

    photo6Credit: "Mature bark. Public domain, via Wikimedia Commons",
    photo6Href: "https://en.wikipedia.org/wiki/Prunus_serotina#/media/File:PrunusSerotinaBark.jpg",
    photo6Alt: "Mature bark",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/PrunusSerotinaBark.jpg/256px-PrunusSerotinaBark.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Amerikaanse_vogelkers_bessen_Prunus_serotina.jpg\">Immature fruit</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Rasbak\">Rasbak</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Prunus_serotina#/media/File:Amerikaanse_vogelkers_bessen_Prunus_serotina.jpg",
    photo3Alt: "Prunus Serotina",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Amerikaanse_vogelkers_bessen_Prunus_serotina.jpg/256px-Amerikaanse_vogelkers_bessen_Prunus_serotina.jpg",

    photo7Credit: "Black Cherry range map. Public domain, via Wikimedia Commons.",
    photo7Href: "https://en.wikipedia.org/wiki/Prunus_serotina#/media/File:Prunus_serotina_range_map_1.png",
    photo7Alt: "Black Cherry range map",
    photo7Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Prunus_serotina_range_map_1.png/256px-Prunus_serotina_range_map_1.png",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Prunus_serotina_kz11.jpg\">Immature bark</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Kenraiz\">Kenraiz</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Prunus_serotina#/media/File:Prunus_serotina_kz11.jpg",
    photo5Alt: "Immature bark",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Prunus_serotina_kz11.jpg/256px-Prunus_serotina_kz11.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Prunus-serotina-flowers.jpg\">Black Cherry flower cluster</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Awinch1001\">Awinch1001</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Prunus_serotina#/media/File:Prunus-serotina-flowers.jpg",
    photo2Alt: "Black Cherry flower cluster",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Prunus-serotina-flowers.jpg/256px-Prunus-serotina-flowers.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2014-11-02_11_47_15_Black_Cherry_foliage_during_autumn_along_Upper_Ferry_Road_in_Ewing,_New_Jersey.JPG\">Black Cherry foliage during autumn</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Prunus_serotina#/media/File:2014-11-02_11_47_15_Black_Cherry_foliage_during_autumn_along_Upper_Ferry_Road_in_Ewing,_New_Jersey.JPG",
    photo4Alt: "Autumn foliage",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/2014-11-02_11_47_15_Black_Cherry_foliage_during_autumn_along_Upper_Ferry_Road_in_Ewing%2C_New_Jersey.JPG/256px-2014-11-02_11_47_15_Black_Cherry_foliage_during_autumn_along_Upper_Ferry_Road_in_Ewing%2C_New_Jersey.JPG",   
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
    compoundStructure: "pinnate",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "blacklocust",
    background: "bg-large/bg-175.jpg",
    backgroundSmall: "bg-small/bg-175.jpg",
    description: "<p>The Black Locust (Robinia pseudoacacia) is a fast-growing deciduous tree that is native to the southeastern United States but has been widely planted and naturalized elsewhere. It typically reaches heights of 40 to 100 feet, with a narrow crown and an open, irregular form that lends a rugged appearance to the landscape.</p><p>The tree's bark is deeply furrowed, featuring a dark brown or gray color that provides textural interest. In late spring, it is adorned with fragrant, drooping clusters of white, pea-like flowers that attract bees and butterflies. These blossoms give way to smooth, flat seed pods that persist into winter.</p><p>Black Locust leaves are pinnately compound with small, oval leaflets that flutter in the breeze, creating dappled sunlight beneath. The foliage turns a modest yellow in the fall. Known for its extremely hard and rot-resistant wood, Black Locust is valued for use in outdoor construction and furniture. Despite its beauty and utility, it is often considered invasive outside its native range due to its prolific seeding and rapid growth.</p>",

    photo1Credit: "Tree in flower. AnRo0002, CC0, via Wikimedia Commons",
    photo1Href: "https://en.wikipedia.org/wiki/Robinia_pseudoacacia#/media/File:20130528Robinia_pseudoacacia_Hockenheim4.jpg",
    photo1Alt: "Robinia pseudoacacia",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/20130528Robinia_pseudoacacia_Hockenheim4.jpg/256px-20130528Robinia_pseudoacacia_Hockenheim4.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Black_Locust_Leaf_Close_Up.jpg\">Black Locust Leaf Close Up</a>, <a href=\"https://commons.wikimedia.org/wiki/User:HoHey22\">HoHey22</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Robinia_pseudoacacia#/media/File:Black_Locust_Leaf_Close_Up.jpg",
    photo5Alt: "Black Locust Leaf Close Up",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Black_Locust_Leaf_Close_Up.jpg/256px-Black_Locust_Leaf_Close_Up.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Robinia_pseudoacacia_004.JPG\">Closeup of flowers</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Llez\">H. Zell</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Robinia_pseudoacacia#/media/File:Robinia_pseudoacacia_004.JPG",
    photo3Alt: "Robinia pseudoacacia",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robinia_pseudoacacia_004.JPG/256px-Robinia_pseudoacacia_004.JPG",

    photo4Credit: "Black locust bark. Public domain, via Wikimedia Commons",
    photo4Href: "https://en.wikipedia.org/wiki/Robinia_pseudoacacia#/media/File:Robinia_pseudacacia02.jpg",
    photo4Alt: "Black locust bark",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Robinia_pseudacacia02.jpg/256px-Robinia_pseudacacia02.jpg",

    photo2Credit: "Black locust flowers. <a href=\"https://en.wikipedia.org/wiki/User:Pollinator\">Pollinator</a>, <a href=\"https://commons.wikimedia.org/wiki/File:Robina9146.JPG\">Robina9146</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Robinia_pseudoacacia#/media/File:Robina9146.JPG",
    photo2Alt: "Black locust flowers",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/8/86/Robina9146.JPG",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Robinia_pseudoacacia_seeds.jpg\">Fruit with seeds</a>, <a href=\"https://commons.wikimedia.org/wiki/User:LivingShadow\">Simon A. Eugster</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Robinia_pseudoacacia#/media/File:Robinia_pseudoacacia_seeds.jpg",
    photo6Alt: "Fruit with seeds",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Robinia_pseudoacacia_seeds.jpg/256px-Robinia_pseudoacacia_seeds.jpg",

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
    background: "bg-large/bg-162.jpg",
    backgroundSmall: "bg-small/bg-162.jpg",
    description: "<p>The Black Maple (Acer nigrum), a close relative of the sugar maple, is a deciduous tree revered for its striking presence and valuable sap. Found in the central and eastern United States, it grows to heights of 60 to 80 feet, forming a rounded, dense canopy that provides generous shade. Its bark is dark, deeply furrowed, and becomes almost black with age, hence the name.</p><p>The tree’s leaves are telltale, with three main lobes that are less pronounced than those of its sugar maple cousin, featuring drooping edges and a deep green hue that shifts to vibrant yellow and burnt orange in autumn. Spring brings small, yellow-green flowers that are often hidden beneath the foliage, followed by the winged samaras typical of maples, twirling to the ground in a helicopter-like fashion.</p><p>Black Maple's sap is a source for maple syrup, and its hard, strong wood is sought after for furniture and flooring. Adaptable and hardy, the Black Maple is a testament to the enduring beauty and utility of the Acer family.</p>",
    photo1Credit: "Black Maple tree. Daderot, CC0, via Wikimedia Commons",
    photo1Href: "https://en.wikipedia.org/wiki/Acer_nigrum#/media/File:Acer_nigrum_-_University_of_Kentucky_Arboretum_-_DSC09326.JPG",
    photo1Alt: "Acer nigrum - University of Kentucky Arboretum",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Acer_nigrum_-_University_of_Kentucky_Arboretum_-_DSC09326.JPG/256px-Acer_nigrum_-_University_of_Kentucky_Arboretum_-_DSC09326.JPG",

    photo3Credit: "Black Maple range map. Public domain, via Wikimedia Commons.",
    photo3Href: "https://en.wikipedia.org/wiki/Acer_nigrum#/media/File:Acer_nigrum_range_map_1.png",
    photo3Alt: "Black Maple range map",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Acer_nigrum_range_map_1.png/256px-Acer_nigrum_range_map_1.png",

    photo2Credit: "Botanical illustration. Public domain, via Wikimedia Commons.",
    photo2Href: "https://en.wikipedia.org/wiki/Acer_nigrum#/media/File:Acer_nigrum_drawing.png",
    photo2Alt: "Botanical illustration",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Acer_nigrum_drawing.png/256px-Acer_nigrum_drawing.png",
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
    background: "bg-large/bg-29.jpg",
    backgroundSmall: "bg-small/bg-29.jpg",
    description: "<p>The Black Oak (Quercus velutina), a member of the broad oak genus, is a robust and enduring species indigenous to the eastern and central United States. This deciduous tree towers to heights of 50 to 60 feet, occasionally reaching up to 90 feet under optimal conditions. It boasts a broad, rounded crown supported by a sturdy trunk, its bark characteristically dark, deeply furrowed, and nearly black, giving rise to its common name.</p><p>The Black Oak's leaves are distinguished by their shiny, dark green upper surfaces and a paler, often bristly underside. Come autumn, these leaves transform into a brilliant display of reds, oranges, and yellows, decorating the landscape with a classic fall palette. The tree produces acorns that are a vital food source for local wildlife.</p><p>It is valued for its strong, heavy wood, commonly used in flooring, furniture, and interior finishes. Despite its tough exterior, the Black Oak is susceptible to oak wilt, a serious fungal disease. The tree's hardiness and the ecological richness it provides make it a staple of its native woodland habitats.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Quercus_velutina_001.jpg\">Black Oak tree</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Quercus_velutina#/media/File:Quercus_velutina_001.jpg",
    photo1Alt: "Quercus velutina",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Quercus_velutina_001.jpg/256px-Quercus_velutina_001.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Quercus_velutina_(23837102639).jpg\">Acorns</a>, <a href=\"https://www.flickr.com/people/34669428@N06\">Bruce Kirchoff</a> from Greensboro, NC, USA, <a href=\"https://creativecommons.org/licenses/by/2.0/legalcode\" rel=\"license\">CC BY 2.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Quercus_velutina#/media/File:Quercus_velutina_(23837102639).jpg",
    photo4Alt: "Acorns",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Quercus_velutina_%2823837102639%29.jpg/256px-Quercus_velutina_%2823837102639%29.jpg",

    photo3Credit: "Black Oak range map. Public domain, via Wikimedia Commons.",
    photo3Href: "https://en.wikipedia.org/wiki/Quercus_velutina#/media/File:Quercus_velutina_range_map_1.png",
    photo3Alt: "Black Oak range map",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Quercus_velutina_range_map_1.png/256px-Quercus_velutina_range_map_1.png",

    photo2Credit: "Hairy immature leaf. Public domain, via Wikimedia Commons.",
    photo2Href: "https://en.wikipedia.org/wiki/Quercus_velutina#/media/File:Quercus_velutina_leaves.jpg",
    photo2Alt: "Hairy immature leaf",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Quercus_velutina_leaves.jpg/256px-Quercus_velutina_leaves.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Quercus_velutina_(23537664393).jpg\">Winter twig</a>, <a href=\"https://www.flickr.com/people/34669428@N06\">Bruce Kirchoff</a> from Greensboro, NC, USA, <a href=\"https://creativecommons.org/licenses/by/2.0/legalcode\" rel=\"license\">CC BY 2.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Quercus_velutina#/media/File:Quercus_velutina_(23537664393).jpg",
    photo5Alt: "Winter twig",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Quercus_velutina_%2823537664393%29.jpg/256px-Quercus_velutina_%2823537664393%29.jpg",  
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
    background: "bg-large/bg-85.jpg",
  backgroundSmall: "bg-small/bg-85.jpg",  
    description: "<p>The Black Poplar (Populus nigra), a native of Europe and Western Asia, is a tall deciduous tree that has been widely cultivated elsewhere, including North America. It typically soars to heights of 80 to 100 feet, marked by a thick, deeply fissured bark that is dark grey-brown in color. The Black Poplar is particularly noted for its vigorous growth and lofty, spreading crown that provides expansive shade.</p><p>Its leaves are diamond-shaped to triangular, with serrated margins and a glossy, dark green appearance that turns yellow in the fall. The tree is dioecious, with male and female flowers developing on separate trees. The male catkins are red and showy, while the females are more subdued. After pollination, female trees produce fluffy, cotton-like seeds that are dispersed by the wind.</p><p>The Black Poplar is celebrated for its resilience in urban environments and its use in windbreaks and screening. Its timber is soft but tough, often used in manufacturing and for matches. With its imposing stature, the Black Poplar is a prominent feature in many European landscapes, symbolizing strength and endurance.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Populus_nigra_kz1.jpg\">Black poplar trees</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Kenraiz\">Kenraiz</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Populus_nigra#/media/File:Populus_nigra_kz1.jpg",
    photo1Alt: "Black poplar trees",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Populus_nigra_kz1.jpg/256px-Populus_nigra_kz1.jpg",
    

    photo2Credit: "Poplar seed tufts. Public domain, via Wikimedia Commons",
    photo2Href: "https://en.wikipedia.org/wiki/Populus_nigra#/media/File:Poplar_seed_tufts_2009_G1.jpg",
    photo2Alt: "Poplar seed tufts",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Poplar_seed_tufts_2009_G1.jpg/256px-Poplar_seed_tufts_2009_G1.jpg",

    photo3Credit: "Burrs and normal bark on a black poplar tree (subspecies betulifolia). Public domain, via Wikimedia Commons.",
    photo3Href: "https://en.wikipedia.org/wiki/Populus_nigra#/media/File:Burr_on_Black_poplar.JPG",
    photo3Alt: "Burrs and normal bark on a black poplar tree (subspecies betulifolia)",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Burr_on_Black_poplar.JPG/256px-Burr_on_Black_poplar.JPG",
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
    background: "bg-large/bg-21.jpg",
    backgroundSmall: "bg-small/bg-21.jpg",
    description: "<p>The Black Spruce (Picea mariana) is a hardy, evergreen conifer native to the boreal forests of North America. It stands with a straight, cylindrical trunk, reaching modest heights of 30 to 50 feet, a stature that is somewhat diminutive in comparison to other spruces. Its bark is thin, scaly, and gray-brown, flaking off in small circular plates.</p><p>This spruce's crown is narrowly conical, with short, stiff branches that are clothed in a dense cover of short, needle-like leaves. These needles exhibit a bluish-green hue, providing a year-round color display. In the spring, the Black Spruce shows off its reproductive prowess with purple (male) and red (female) cones, which later mature to a ruddy brown.</p><p>Adapted to cooler climates and wet, acidic soils, the Black Spruce often dominates in swampy areas. Its wood is utilized in the paper industry, and it is also a traditional source of spruce gum. The tree's compact size and tolerance of harsh conditions make it a symbol of the resilience and stark beauty of the northern wilderness.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Black_spruce_stand_at_Arctic_Chalet,_Inuvik,_NT.jpg\">Stand of Black Spruce</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Daniel_Case\">Daniel Case</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Picea_mariana#/media/File:Black_spruce_stand_at_Arctic_Chalet,_Inuvik,_NT.jpg",
    photo1Alt: "Black spruce stand at Arctic Chalet, Inuvik, NT",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Black_spruce_stand_at_Arctic_Chalet%2C_Inuvik%2C_NT.jpg/256px-Black_spruce_stand_at_Arctic_Chalet%2C_Inuvik%2C_NT.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Picea_mariana_cone.JPG\">Mature, open cones</a>, <a href=\"https://commons.wikimedia.org/wiki/User:TP12\">Tilo Podner</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Picea_mariana#/media/File:Picea_mariana_cone.JPG",
    photo2Alt: "Mature, open cones",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Picea_mariana_cone.JPG/256px-Picea_mariana_cone.JPG",
    
    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Picea_mariana_cones_Ontario.jpg\">Immature cones</a>, <a href=\"https://www.flickr.com/photos/clairity/\">clairity on Flickr</a>, <a href=\"https://creativecommons.org/licenses/by/2.0/legalcode\" rel=\"license\">CC BY 2.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Picea_mariana#/media/File:Picea_mariana_cones_Ontario.jpg",
    photo3Alt: "Immature cones",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Picea_mariana_cones_Ontario.jpg/256px-Picea_mariana_cones_Ontario.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Small_lake_in_the_depths_of_the_taïga.jpg\">Black spruce trees in boggy taiga habitat</a>, <a href=\"https://www.flickr.com/photos/10601432@N08\">peupleloup</a>, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/legalcode\" rel=\"license\">CC BY-SA 2.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Picea_mariana#/media/File:Small_lake_in_the_depths_of_the_ta%C3%AFga.jpg",
    photo4Alt: "Black spruce trees in boggy taiga habitat",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Small_lake_in_the_depths_of_the_ta%C3%AFga.jpg/256px-Small_lake_in_the_depths_of_the_ta%C3%AFga.jpg",

    
    photo5Credit: "Black spruce range map. Public domain, via Wikimedia Commons.",
    photo5Href: "https://en.wikipedia.org/wiki/Picea_mariana#/media/File:Picea_mariana_levila.png",
    photo5Alt: "Picea mariana levila",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Picea_mariana_levila.png/256px-Picea_mariana_levila.png",
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
    compoundStructure: "pinnate",
    leafAttachment: "alternate",
    fallColor: [
      "yellow",
      "green"
    ],
    slug: "blackwalnut",
    background: "bg-large/bg-137.jpg",
    backgroundSmall: "bg-small/bg-137.jpg",
    description: "<p>The Black Walnut (Juglans nigra) is a majestic hardwood tree renowned for its valuable wood and distinctive nuts. Native to eastern North America, it reaches heights of 70 to 100 feet, often with a straight trunk and a rounded, spreading canopy. The tree's bark is dark brown to blackish, deeply furrowed, forming a rough, diamond pattern.</p><p>Its pinnate leaves are composed of 15-23 leaflets, exuding a unique fragrance when crushed. In spring, the Black Walnut produces inconspicuous, wind-pollinated flowers, followed by the development of its famous fruit: a large, green, globular nut encased in a solid, inedible husk. The nuts, though tough to crack, are sought after for their rich, distinctive flavor.</p><p>The wood of the Black Walnut is highly prized, dark in color, strong, and with a fine grain, making it a favorite for high-quality furniture, cabinetry, and gunstocks. This tree is also appreciated for its shade and ornamental qualities, though it should be planted with care due to the juglone toxin it produces, which can inhibit the growth of nearby plants.</p>",

    photo1Credit: "Black Walnut nut and leaves. Public domain, via Wikimedia Commons.",
    photo1Href: "https://en.wikipedia.org/wiki/Juglans_nigra#/media/File:Black_Walnut_nut_and_leave_detail.JPG",
    photo1Alt: "Black Walnut nut and leaves",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Black_Walnut_nut_and_leave_detail.JPG/320px-Black_Walnut_nut_and_leave_detail.JPG",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Black_walnut_tree.jpg\">A young black walnut tree full of fruit</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Geo_Lightspeed7\">Geo Lightspeed7</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Juglans_nigra#/media/File:Black_walnut_tree.jpg",
    photo2Alt: "A young black walnut tree full of fruit",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Black_walnut_tree.jpg/256px-Black_walnut_tree.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2014-10-30_10_16_45_Black_Walnut_foliage_during_autumn_along_Fireside_Avenue_in_Ewing,_New_Jersey.JPG\">Black Walnut foliage during autumn</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Juglans_nigra#/media/File:2014-10-30_10_16_45_Black_Walnut_foliage_during_autumn_along_Fireside_Avenue_in_Ewing,_New_Jersey.JPG",
    photo3Alt: "Autumn foliage",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/2014-10-30_10_16_45_Black_Walnut_foliage_during_autumn_along_Fireside_Avenue_in_Ewing%2C_New_Jersey.JPG/256px-2014-10-30_10_16_45_Black_Walnut_foliage_during_autumn_along_Fireside_Avenue_in_Ewing%2C_New_Jersey.JPG",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Black_Walnut_Juglans_nigra_Nut_2400px.jpg\">Black Walnut nut</a>, Photo by and (c)2007 Derek Ramsey (<a href=\"https://en.wikipedia.org/wiki/User:Ram-Man\">Ram-Man</a>). Location credit to the Chanticleer Garden., <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Juglans_nigra#/media/File:Black_Walnut_Juglans_nigra_Nut_2400px.jpg",
    photo4Alt: "Black Walnut Juglans nigra Nut",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Black_Walnut_Juglans_nigra_Nut_2400px.jpg/256px-Black_Walnut_Juglans_nigra_Nut_2400px.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Juglans_nigra_vs._Juglans_regia_–_shell_comparison.jpg\">The black walnut (on the left) is harder to process than the English walnut (on the right).</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Eiku\">Eiku</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Juglans_nigra#/media/File:Juglans_nigra_vs._Juglans_regia_%E2%80%93_shell_comparison.jpg",
    photo5Alt: "The black walnut (on the left) is harder to process than the English walnut (on the right).",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Juglans_nigra_vs._Juglans_regia_%E2%80%93_shell_comparison.jpg/256px-Juglans_nigra_vs._Juglans_regia_%E2%80%93_shell_comparison.jpg",

    photo6Credit: "Black Walnut range map. Public domain, via Wikimedia Commons.",
    photo6Href: "https://en.wikipedia.org/wiki/Juglans_nigra#/media/File:Juglans_nigra_range_map_1.png",
    photo6Alt: "Black Walnut range map",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Juglans_nigra_range_map_1.png/256px-Juglans_nigra_range_map_1.png",

    photo7Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Black_walnut_fruits_on_the_ground.jpg\">Fruits after falling from tree</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Geo_Lightspeed7\">Geo Lightspeed7</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo7Href: "https://en.wikipedia.org/wiki/Juglans_nigra#/media/File:Black_walnut_fruits_on_the_ground.jpg",
    photo7Alt: "Fruits after falling from tree",
    photo7Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Black_walnut_fruits_on_the_ground.jpg/256px-Black_walnut_fruits_on_the_ground.jpg",

    photo8Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Sauvie_Island_Black_Walnut.jpg\">The largest known living black walnut tree is on Sauvie Island, Oregon.</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Gobywalnut\">Gobywalnut</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo8Href: "https://en.wikipedia.org/wiki/Juglans_nigra#/media/File:Sauvie_Island_Black_Walnut.jpg",
    photo8Alt: "The largest known living black walnut tree is on Sauvie Island, Oregon.",
    photo8Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Sauvie_Island_Black_Walnut.jpg/256px-Sauvie_Island_Black_Walnut.jpg",
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
    background: "bg-large/bg-102.jpg",
    backgroundSmall: "bg-small/bg-102.jpg",
    description: "<p>The Black Willow (Salix nigra) is a native North American species commonly found along streams and in wetlands, appreciated for its environmental and erosion control benefits. This deciduous tree grows rapidly to heights of 30 to 60 feet, with a leaning, often multi-trunked form that is well adapted to its riparian habitats.</p><p>Its bark is dark brown to black, deeply furrowed, and becomes rough with age. The Black Willow’s narrow, lance-shaped leaves are yellow-green, offering a fluttering display in the breeze due to their long, flexible petioles. These leaves turn a modest yellow in the fall.</p><p>In early spring, it produces catkins, which are followed by small, cottony seeds that disperse widely by wind and water. The tree's wood is soft and is often used in the production of crates and pulp. Known for its prolific root system, the Black Willow plays a crucial role in stabilizing stream banks and is often used in reclamation projects. Despite its preference for moist soil, it can also tolerate drought, making it a resilient species within its native range.</p>",

    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Salix_nigra_Morton_180-88-3.jpg\">Black Willow tree</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Bruce_Marlin\">Bruce Marlin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/2.5/legalcode\" rel=\"license\">CC BY-SA 2.5</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Salix_nigra#/media/File:Salix_nigra_Morton_180-88-3.jpg",
    photo1Alt: "Black Willow tree",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Salix_nigra_Morton_180-88-3.jpg/256px-Salix_nigra_Morton_180-88-3.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Salix_nigra_catkins_8001.JPG\">Black Willow catkins</a>, <a href=\"https://commons.wikimedia.org/wiki/User:SB_Johnny\">SB Johnny</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Salix_nigra#/media/File:Salix_nigra_catkins_8001.JPG",
    photo2Alt: "Black Willow catkins",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Salix_nigra_catkins_8001.JPG/256px-Salix_nigra_catkins_8001.JPG",

    photo3Credit: "Black Willow range map. Public domain, via Wikimedia Commons.",
    photo3Href: "https://en.wikipedia.org/wiki/Salix_nigra#/media/File:Salix_nigra_range_map_1.png",
    photo3Alt: "Black Willow range map",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Salix_nigra_range_map_1.png/256px-Salix_nigra_range_map_1.png",
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
    background: "bg-large/bg-33.jpg",
    backgroundSmall: "bg-small/bg-33.jpg",
    description: "<p>The Blackjack Oak (Quercus marilandica) is a durable and hardy species native to the sandy soils and tough terrains of the central and southern United States. It is a small to medium-sized tree, typically reaching 20 to 40 feet in height, with a dense and irregular crown that provides ample shade. Its bark is dark, rough, and deeply furrowed, resembling blackjacks, which contributed to its common name.</p><p>The tree’s foliage is distinctive, with leaves that are leathery, glossy, and wedge-shaped, resembling a duck’s foot. The leaves display a rich green color that turns to vibrant reds and oranges in the fall, offering a burst of color to the landscape. Blackjack Oak produces small acorns that have a unique, striped cap, providing food for wildlife.</p><p>Adapted to survive in poor, dry soils where other oaks might struggle, the Blackjack Oak is often found in upland areas and savannas. Its wood is used for lumber and fuel, although it is not as commercially sought after as other oaks. The tree's resilience and the unique shape of its leaves make it an interesting and valuable component of the ecosystems it inhabits.</p>",
    photo1Credit: "Blackjack Oak tree. Public domain, via Wikimedia Commons.",
    photo1Href: "https://en.wikipedia.org/wiki/Quercus_marilandica#/media/File:Blackjack_and_little_bluestem.png",
    photo1Alt: "Blackjack Oak tree",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Blackjack_and_little_bluestem.png",    

    photo2Credit: "Blackjack Oak leaves. Public domain, via Wikimedia Commons.",
    photo2Href: "https://en.wikipedia.org/wiki/Quercus_marilandica#/media/File:Lewis_County_Blackjack_Oak.JPG",
    photo2Alt: "Blackjack Oak leaves",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Lewis_County_Blackjack_Oak.JPG/256px-Lewis_County_Blackjack_Oak.JPG",
    
    photo3Credit: "Blackjack Oak range map. Public domain, via Wikimedia Commons.",
    photo3Href: "https://en.wikipedia.org/wiki/Quercus_marilandica#/media/File:Quercus_marilandica_range_map_1.png",
    photo3Alt: "Blackjack Oak range map",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Quercus_marilandica_range_map_1.png/256px-Quercus_marilandica_range_map_1.png",
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
    background: "bg-large/bg-26.jpg",
    backgroundSmall: "bg-small/bg-26.jpg",
    description: "<p>The Blue Beech, also known as the American Hornbeam or Carpinus caroliniana, is a small, shade-tolerant deciduous tree native to the understory of eastern North American forests. It grows modestly to 20-30 feet high, featuring a short trunk and a rounded, spreading crown. The tree's bark is smooth, gray, and fluted, resembling the sinewy muscles of a human arm, which earns it another nickname, \"musclewood.\"</p><p>Its leaves are elliptical, with finely toothed edges and prominent veins, offering a vibrant green that transitions to a fiery mix of orange, red, and yellow in the fall. In spring, the Blue Beech displays modest yellow-green catkins, later developing small nutlets encased in papery bracts that provide food for wildlife.</p><p>Appreciated for its hard wood and ornamental appeal, the Blue Beech is often found along streams and rich bottomlands, thriving in moist, well-drained soils. Its tolerance for shade and unique bark texture make it a favorite for naturalistic landscaping and garden settings.</p>",

    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:American_Hornbeam_Leaves_600.jpg\">Blue Beech foliage</a>, (c)2005 Derek Ramsey (<a href=\"https://en.wikipedia.org/wiki/User:Ram-Man\">Ram-Man</a>), <a href=\"https://creativecommons.org/licenses/by-sa/2.5/legalcode\" rel=\"license\">CC BY-SA 2.5</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Carpinus_caroliniana#/media/File:American_Hornbeam_Leaves_600.jpg",
    photo1Alt: "Blue Beech foliage",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/e/e7/American_Hornbeam_Leaves_600.jpg",

    photo2Credit: "Fruiting branch. Public domain, via Wikimedia Commons.",
    photo2Href: "https://en.wikipedia.org/wiki/Carpinus_caroliniana#/media/File:Carpinus_caroliniana_3.JPG",
    photo2Alt: "Fruiting branch",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Carpinus_caroliniana_3.JPG/256px-Carpinus_caroliniana_3.JPG",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Carpinus_caroliniana_bark.jpg\">Blue Beech bark</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Rob_Duval\">Rob Duval</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Carpinus_caroliniana#/media/File:Carpinus_caroliniana_bark.jpg",
    photo3Alt: "Blue Beech bark",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/5/55/Carpinus_caroliniana_bark.jpg",

    photo4Credit: "Blue Beech range map. Public domain, via Wikimedia Commons.",
    photo4Href: "https://en.wikipedia.org/wiki/Carpinus_caroliniana#/media/File:Carpinus_caroliniana_range_map_3.png",
    photo4Alt: "Blue Beech range map",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Carpinus_caroliniana_range_map_3.png/256px-Carpinus_caroliniana_range_map_3.png",
  },
  {
    nameCommon: "Blue Spruce",
    aka: [
      "Colorado Spruce",
      "Colorado blue spruce",
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
    background: "bg-large/bg-70.jpg",
    backgroundSmall: "bg-small/bg-70.jpg",
    description: "<p>The Blue Spruce, scientifically known as Picea pungens, is a majestic evergreen native to the Rocky Mountains of the United States. Characterized by its impressive stature, it can reach skyward to heights of 50 to 75 feet, presenting a broad, pyramidal shape with sturdy, horizontal branches. The tree's most striking feature is its needle foliage, which ranges from a silvery blue to a rich blue-green hue, providing a year-round display of vibrant color.</p><p>These stiff, sharply pointed needles contribute to the species' name, \"pungens,\" which signifies their pungent nature. In the wild, the Blue Spruce prefers moist, well-drained soils, typically found in mountainous river valleys. It produces cylindrical cones that hang elegantly from the branches, starting out purple and maturing to a pale brown.</p><p>Widely used as an ornamental tree due to its unique color and classic conical Christmas tree shape, the Blue Spruce is also the state tree of Colorado. Despite its beauty, it is a hardy tree, capable of withstanding cold climates and various soil conditions, making it a popular choice in landscapes across various regions.</p>",
    photo1Credit: "Blue Spruce tree. Public domain, via Wikimedia Commons.",
    photo1Href: "https://en.wikipedia.org/wiki/Blue_spruce#/media/File:Picea_pungens_tree.jpg",
    photo1Alt: "Blue Spruce tree",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Picea_pungens_tree.jpg/256px-Picea_pungens_tree.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2015-05-18_13_01_32_Blue_Spruce_new_growth_along_Terrace_Boulevard_in_Ewing,_New_Jersey.jpg\">New growth in spring</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Blue_spruce#/media/File:2015-05-18_13_01_32_Blue_Spruce_new_growth_along_Terrace_Boulevard_in_Ewing,_New_Jersey.jpg",
    photo2Alt: "New growth in spring",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/2015-05-18_13_01_32_Blue_Spruce_new_growth_along_Terrace_Boulevard_in_Ewing%2C_New_Jersey.jpg/256px-2015-05-18_13_01_32_Blue_Spruce_new_growth_along_Terrace_Boulevard_in_Ewing%2C_New_Jersey.jpg",

    photo3Credit: "Mature cone. Public domain, via Wikimedia Commons",
    photo3Href: "https://en.wikipedia.org/wiki/Blue_spruce#/media/File:Picea_pungens2.jpg",
    photo3Alt: "Mature cone",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Picea_pungens2.jpg/256px-Picea_pungens2.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Picea_Pungens_Young_Cones.jpg\">Immature cones</a>, <a href=\"https://commons.wikimedia.org/wiki/User:JJ_Harrison\">JJ Harrison</a> (<a href=\"https://www.jjharrison.com.au/\">https://www.jjharrison.com.au/</a>), <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Blue_spruce#/media/File:Picea_Pungens_Young_Cones.jpg",
    photo4Alt: "Immature cones",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Picea_Pungens_Young_Cones.jpg/256px-Picea_Pungens_Young_Cones.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Picea_pungens_Žilina.JPG\">Mature tree</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Crusier\">Crusier</a>, <a href=\"https://creativecommons.org/licenses/by/3.0/legalcode\" rel=\"license\">CC BY 3.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Blue_spruce#/media/File:Picea_pungens_%C5%BDilina.JPG",
    photo5Alt: "Mature tree",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Picea_pungens_%C5%BDilina.JPG/256px-Picea_pungens_%C5%BDilina.JPG",   
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
    compoundStructure: "pinnate",
    leafAttachment: "opposite",
    fallColor: [
      "yellow"
    ],
    slug: "boxelder",
    background: "bg-large/bg-138b.jpg",
    backgroundSmall: "bg-small/bg-138b.jpg",
    description: "<p>The Boxelder, or Acer negundo, is a species of maple distinct for its adaptability and ruggedness. Often considered a lesser maple, this medium-sized tree typically grows to 30-50 feet tall. It has a broad crown and a high branching habit with several main limbs that create a somewhat irregular, rounded shape. Its bark is light gray-brown, deeply cleft into broad ridges, giving it a rough texture.</p><p>What sets the Boxelder apart from other maples is its compound leaves, which are unusual for the genus, consisting of 3-7 leaflets with a coarsely toothed margin. These leaves turn a pale yellow in the fall. It's a dioecious species, with male and female flowers appearing on separate trees in early spring, before the leaves emerge.</p><p>The Boxelder is often found along streams and in floodplains, thriving in a variety of soil conditions. While its wood is of little commercial value, the tree is known for its resilience and is sometimes planted as a fast-growing screen or shade tree. It's also known for attracting boxelder bugs, especially in the autumn and winter.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Boxelder_(Acer_negudo)_with_young_fruit_-_Flickr_-_Jay_Sturner.jpg\">Leaves and fruit</a>, <a href=\"https://www.flickr.com/people/50352333@N06\">Jay Sturner</a> from USA, <a href=\"https://creativecommons.org/licenses/by/2.0/legalcode\" rel=\"license\">CC BY 2.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Acer_negundo#/media/File:Boxelder_(Acer_negudo)_with_young_fruit_-_Flickr_-_Jay_Sturner.jpg",
    photo1Alt: "Leaves and fruit",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Boxelder_%28Acer_negudo%29_with_young_fruit_-_Flickr_-_Jay_Sturner.jpg/256px-Boxelder_%28Acer_negudo%29_with_young_fruit_-_Flickr_-_Jay_Sturner.jpg",


    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Acer_negundo_44809168.jpg\">Boxelder tree</a>, <a href=\"https://www.inaturalist.org/people/ck2az\">CK Kelly</a>, <a href=\"https://creativecommons.org/licenses/by/4.0/legalcode\" rel=\"license\">CC BY 4.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Acer_negundo#/media/File:Acer_negundo_44809168.jpg",
    photo2Alt: "Boxelder",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Acer_negundo_44809168.jpg/256px-Acer_negundo_44809168.jpg",

    photo3Credit: "Boxelder range map. Public domain, via Wikimedia Commons.",
    photo3Href: "https://en.wikipedia.org/wiki/Acer_negundo#/media/File:Acer_negundo_range_map.png",
    photo3Alt: "Boxelder range map",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Acer_negundo_range_map.png/256px-Acer_negundo_range_map.png",

    photo7Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Acer_negundo_female_flowers_-_Keila.jpg\">Female flowers</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Iifar\">Ivar Leidus</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo7Href: "https://en.wikipedia.org/wiki/Acer_negundo#/media/File:Acer_negundo_female_flowers_-_Keila.jpg",
    photo7Alt: "Female flowers",
    photo7Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Acer_negundo_female_flowers_-_Keila.jpg/256px-Acer_negundo_female_flowers_-_Keila.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Acer_negundo_31685019.jpg\">Male flowers</a>, <a href=\"https://www.inaturalist.org/people/alexis_orion\">Alexis</a>, <a href=\"https://creativecommons.org/licenses/by/4.0/legalcode\" rel=\"license\">CC BY 4.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Acer_negundo#/media/File:Acer_negundo_31685019.jpg",
    photo5Alt: "Male flowers",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Acer_negundo_31685019.jpg/256px-Acer_negundo_31685019.jpg",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2014-10-11_12_48_07_Box_Elder_Maple_foliage_during_autumn_in_Elko,_Nevada.JPG\">Autumn leaf color</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Acer_negundo#/media/File:2014-10-11_12_48_07_Box_Elder_Maple_foliage_during_autumn_in_Elko,_Nevada.JPG",
    photo6Alt: "Autumn leaf color",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/2014-10-11_12_48_07_Box_Elder_Maple_foliage_during_autumn_in_Elko%2C_Nevada.JPG/256px-2014-10-11_12_48_07_Box_Elder_Maple_foliage_during_autumn_in_Elko%2C_Nevada.JPG",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2020_year._Herbarium._Acer_negundo._img-010.jpg\">Boxelder fruit</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Knopik-som\">Dmitry Makeev</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Acer_negundo#/media/File:2020_year._Herbarium._Acer_negundo._img-010.jpg",
    photo4Alt: "Fruit",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/2020_year._Herbarium._Acer_negundo._img-010.jpg/256px-2020_year._Herbarium._Acer_negundo._img-010.jpg",

    photo8Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Ясенолистен_явор_2.jpg\">Acer negundo often grows alongside waterbodies</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Utar_Sigmal\">Dimìtar Nàydenov</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo8Href: "https://en.wikipedia.org/wiki/Acer_negundo#/media/File:%D0%AF%D1%81%D0%B5%D0%BD%D0%BE%D0%BB%D0%B8%D1%81%D1%82%D0%B5%D0%BD_%D1%8F%D0%B2%D0%BE%D1%80_2.jpg",
    photo8Alt: "Boxelder often grows alongside waterbodies",
    photo8Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/%D0%AF%D1%81%D0%B5%D0%BD%D0%BE%D0%BB%D0%B8%D1%81%D1%82%D0%B5%D0%BD_%D1%8F%D0%B2%D0%BE%D1%80_2.jpg/256px-%D0%AF%D1%81%D0%B5%D0%BD%D0%BE%D0%BB%D0%B8%D1%81%D1%82%D0%B5%D0%BD_%D1%8F%D0%B2%D0%BE%D1%80_2.jpg",
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
    background: "bg-large/bg-103.jpg",
    backgroundSmall: "bg-small/bg-103.jpg",
    description: "<p>The Buckthorn, Rhamnus cathartica, is a deciduous shrub or small tree native to Eurasia and known for its invasiveness in North American woodlands. It typically reaches 15-25 feet in height and thrives in a variety of soil types, often spreading aggressively in disturbed habitats.</p><p>Buckthorn is identifiable by its glossy, oval leaves with pronounced veins and finely serrated margins that turn yellow-green in fall. Inconspicuous yellow-green flowers bloom in spring and give way to small, dark berries in late summer and fall. These berries, while toxic to humans, are readily consumed by birds, facilitating the spread of Buckthorn seeds.</p><p>The tree's bark is gray-brown with prominent lenticels. It has a somewhat rounded to columnar shape, and its branches terminate in sharp thorns. While Buckthorn can be used for hedges and wildlife cover, its invasive nature has led many areas to discourage its planting. Control efforts are frequently employed to manage its spread in natural areas where it can outcompete native vegetation and disrupt ecosystems.</p>",
    photo1Credit: "Botanical illustration. Public domain, via Wikimedia Commons",
    photo1Href: "https://en.wikipedia.org/wiki/Rhamnus_cathartica#/media/File:Illustration_of_Rhamnus_catharticus_63-cropped.png",
    photo1Alt: "Botanical illustration of Rhamnus catharticus",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Illustration_of_Rhamnus_catharticus_63-cropped.png/256px-Illustration_of_Rhamnus_catharticus_63-cropped.png",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Rhamnus_cathartica_(8023754928).jpg\">Buckthorn fruit</a>, <a href=\"https://www.flickr.com/people/35478170@N08\">Matt Lavin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/legalcode\" rel=\"license\">CC BY-SA 2.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Rhamnus_cathartica#/media/File:Rhamnus_cathartica_(8023754928).jpg",
    photo2Alt: "Buckthorn fruit",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Rhamnus_cathartica_%288023754928%29.jpg/256px-Rhamnus_cathartica_%288023754928%29.jpg",
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
    background: "bg-large/bg-139.jpg",
    backgroundSmall: "bg-small/bg-139.jpg",
    description: "<p>The Bur Oak, Quercus macrocarpa, is a robust and stately tree native to North America, renowned for its longevity and strength. It can grow to an imposing height of 70 to 80 feet with an expansive crown that may reach just as wide. Its trunk is thick and deeply ridged, providing a rugged texture that adds to its impressive appearance.</p></p>Bur Oak leaves are large, with a classic lobed oak shape, turning a rich array of yellows and browns in the fall. It is especially known for its acorns, which are among the largest of any North American oak, featuring a distinctive, fringed cap that covers more than half of the nut.</p><p>Adapted to a variety of habitats, from floodplains to dry uplands, the Bur Oak is drought-resistant, thanks to its deep root system. It provides a habitat for wildlife, and its acorns are a valuable food source for several species. With its grand size and longevity, the Bur Oak is a cherished shade tree in landscapes and an important species in native woodland ecosystems.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Big_Tree_with_spring_picnic.jpg\">Large Bur Oak tree</a>, Heath Cajandig, <a href=\"https://creativecommons.org/licenses/by/2.0/legalcode\" rel=\"license\">CC BY 2.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Quercus_macrocarpa#/media/File:Big_Tree_with_spring_picnic.jpg",
    photo1Alt: "Big Tree with spring picnic",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Big_Tree_with_spring_picnic.jpg/256px-Big_Tree_with_spring_picnic.jpg",

    photo2Credit: "Leaves and acorn. Public domain, via Wikimedia Commons.",
    photo2Href: "https://en.wikipedia.org/wiki/Quercus_macrocarpa#/media/File:Quercus_macrocarpa_USDA.jpg",
    photo2Alt: "Leaves and acorn",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Quercus_macrocarpa_USDA.jpg/320px-Quercus_macrocarpa_USDA.jpg",

    photo4Credit: "Bur Oak bark. Public domain, via Wikimedia Commons.",
    photo4Href: "https://en.wikipedia.org/wiki/Quercus_macrocarpa#/media/File:QuercusMacrocarpa.jpg",
    photo4Alt: "Bur Oak bark",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/QuercusMacrocarpa.jpg/256px-QuercusMacrocarpa.jpg",

    photo6Credit: "Bur Oak range map. Public domain, via Wikimedia Commons.",
    photo6Href: "https://en.wikipedia.org/wiki/Quercus_macrocarpa#/media/File:Quercus_macrocarpa_range_map_1.png",
    photo6Alt: "Bur Oak range map",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Quercus_macrocarpa_range_map_1.png/256px-Quercus_macrocarpa_range_map_1.png",

    photo5Credit: "Spreading branches. Public domain, via Wikimedia Commons.",
    photo5Href: "https://en.wikipedia.org/wiki/Quercus_macrocarpa#/media/File:Bur_Oak_Winter_Form.jpg",
    photo5Alt: "Spreading branches",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Bur_Oak_Winter_Form.jpg/256px-Bur_Oak_Winter_Form.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Quercus_macrocarpa-Acorn_R_51_g_edit_(24212435556).jpg\">Acorns</a>, <a href=\"https://www.flickr.com/people/34669428@N06\">Bruce Kirchoff</a> <a href=\"https://creativecommons.org/licenses/by/2.0/legalcode\" rel=\"license\">CC BY 2.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Quercus_macrocarpa#/media/File:Quercus_macrocarpa-Acorn_R_51_g_edit_(24212435556).jpg",
    photo3Alt: "Acorns",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Quercus_macrocarpa-Acorn_R_51_g_edit_%2824212435556%29.jpg/256px-Quercus_macrocarpa-Acorn_R_51_g_edit_%2824212435556%29.jpg",
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
    compoundStructure: "pinnate",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "butternut",
    background: "bg-large/bg-8.jpg",
    backgroundSmall: "bg-small/bg-8.jpg",
    description: "<p>The Butternut tree, Juglans cinerea, also known as the White Walnut, is a deciduous tree indigenous to the eastern United States and southeast Canada. This species grows to a height of 40 to 60 feet and often features a short trunk with a broad, open, spreading crown. The bark is light gray and deeply furrowed, developing a distinctive, diamond-shaped pattern as the tree matures.</p><p>Butternut's leaves are pinnately compound, with 11 to 17 leaflets that are finely toothed and sticky when young. In autumn, foliage turns a clear, bright yellow, adding seasonal interest to the landscape. Spring brings inconspicuous greenish flowers, followed by the production of oblong fruits encased in a green, hairy husk. These husks contain a rich, oily nut that is prized for its flavor and is often used in baking.</p><p>Unfortunately, the Butternut is facing decline due to the butternut canker disease, which has made it a species of conservation concern. Despite this, its light-colored wood is valued for carving and furniture-making, and its nuts continue to be a favorite for wildlife and humans alike.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Juglans_cinerea_002.JPG\">A mature butternut tree</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Llez\">H. Zell</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Juglans_cinerea#/media/File:Juglans_cinerea_002.JPG",
    photo1Alt: "A mature butternut tree",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Juglans_cinerea_002.JPG/256px-Juglans_cinerea_002.JPG",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Butternut_nut.jpg\">Butternut nut</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Modal_Jig\">Modal Jig</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Juglans_cinerea#/media/File:Butternut_nut.jpg",
    photo2Alt: "Butternut nut",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/5/58/Butternut_nut.jpg",

    photo3Credit: "Butternut range map. Public domain, via Wikimedia Commons.",
    photo3Href: "https://en.wikipedia.org/wiki/Juglans_cinerea#/media/File:Juglans_cinerea_range_map_1.png",
    photo3Alt: "Butternut range map",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Juglans_cinerea_range_map_1.png/256px-Juglans_cinerea_range_map_1.png",
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
    background: "bg-large/bg-109.jpg",
    backgroundSmall: "bg-small/bg-109.jpg",
    description: "<p>The Buttonbush, Cephalanthus occidentalis, is a deciduous shrub or small tree, known for its unique and ornamental flower display. Typically found in wetlands and along waterways throughout eastern North America, it thrives in moist, rich soils, and can reach 6 to 12 feet in height.</p><p>Buttonbush's most striking feature is its spherical flower heads, which bloom in the summer. These fragrant, white to pale-pink flowers resemble pincushions and are a magnet for pollinators, including bees and butterflies. Following the flowers, the shrub produces button-like seed heads that persist into winter, offering continued visual interest and food for various bird species.</p><p>The plant's leaves are glossy green, arranged oppositely or in whorls of three, and become yellowish in fall. Its bark is light brown and roughened, adding texture to the winter landscape.</p><p>Though often used in rain gardens and naturalized plantings, Buttonbush is also an excellent choice for erosion control due to its dense root system. It's a valuable plant for wildlife and a charming addition to any water-influenced landscape design.</p>",
    photo1Credit: "Buttonbush tree. Mx. Granger, CC0, via Wikimedia Commons.",
    photo1Href: "https://en.wikipedia.org/wiki/Cephalanthus_occidentalis#/media/File:Buttonwillow_tree_in_Buttonwillow,_California.jpg",
    photo1Alt: "Buttonbush tree",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Buttonwillow_tree_in_Buttonwillow%2C_California.jpg/256px-Buttonwillow_tree_in_Buttonwillow%2C_California.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Buttonbush_--_Cephalanthus_occidentalis.jpg\">Buttonbush blooming</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Jim_Evans\">Jim Evans</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Cephalanthus_occidentalis#/media/File:Buttonbush_--_Cephalanthus_occidentalis.jpg",
    photo2Alt: "Buttonbush blooming",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Buttonbush_--_Cephalanthus_occidentalis.jpg/256px-Buttonbush_--_Cephalanthus_occidentalis.jpg",

    photo3Credit: "Buttonbush range map. Public domain, via Wikimedia Commons.",
    photo3Href: "https://en.wikipedia.org/wiki/Cephalanthus_occidentalis#/media/File:Cephalanthus_occidentalis_range_map_1.png",
    photo3Alt: "Buttonbush range map",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Cephalanthus_occidentalis_range_map_1.png/256px-Cephalanthus_occidentalis_range_map_1.png",
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
    background: "bg-large/bg-115.jpg",
    backgroundSmall: "bg-small/bg-115.jpg",
    description: "<p>The Chestnut Oak, Quercus montana, is a durable and noble tree that graces the eastern United States, particularly the Appalachian Mountains. It's recognized by its impressive stature, often reaching 60 to 70 feet in height with a similarly expansive spread. This oak is well-suited to rocky slopes and dry ridges, where it demonstrates remarkable drought resistance thanks to its deep taproot.</p><p>The tree's bark is deeply furrowed with broad, rough ridges, and it's this thick, rugged bark that distinguishes the Chestnut Oak from other oaks and aids in its survival in xeric conditions. The foliage consists of oblong, coarsely toothed leaves that resemble those of the chestnut—broad with a dull, dark green upper surface and a paler underside. These leaves turn shades of yellow and russet in the fall.</p><p>In spring, the Chestnut Oak produces inconspicuous yellow-green flowers, which give way to sizable, round acorns, a valuable food source for wildlife. The wood of the Chestnut Oak is strong and heavy, making it valuable for timber and veneer production. As a landscape tree, it offers stately beauty and a resilient character, providing robust shade and a steadfast presence.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Chestnut_Oak_in_Weiser_State_Forest.JPG\">Chestnut Oak in Weiser State Forest</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Jakec\">Jakec</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Quercus_montana#/media/File:Chestnut_Oak_in_Weiser_State_Forest.JPG",
    photo1Alt: "Chestnut Oak in Weiser State Forest",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Chestnut_Oak_in_Weiser_State_Forest.JPG/256px-Chestnut_Oak_in_Weiser_State_Forest.JPG",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Chestnut_Oak.jpg\">Chestnut Oak leaf cluster with acorn</a>, <a href=\"https://en.wikipedia.org/wiki/User:Mwanner\">Mwanner</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Quercus_montana#/media/File:Chestnut_Oak.jpg",
    photo2Alt: "Chestnut Oak leaf cluster with acorn",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Chestnut_Oak.jpg/256px-Chestnut_Oak.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Chestnut_Oak_Bark.jpg\">The distinctive Chestnut Oak bark</a>, <a href=\"https://en.wikipedia.org/wiki/User:Mwanner\">Mwanner</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Quercus_montana#/media/File:Chestnut_Oak_Bark.jpg",
    photo3Alt: "The distinctive Chestnut Oak bark",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Chestnut_Oak_Bark.jpg/256px-Chestnut_Oak_Bark.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Chestnut_oak_rock.jpg\">Chestnut oak growing on rock</a>, <a href=\"https://en.wikipedia.org/wiki/User:Jaknouse\">Jaknouse</a> at the <a href=\"https://en.wikipedia.org/wiki/\">English Wikipedia</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Quercus_montana#/media/File:Chestnut_oak_rock.jpg",
    photo4Alt: "Chestnut oak growing on rock",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chestnut_oak_rock.jpg/256px-Chestnut_oak_rock.jpg",

    photo5Credit: "Chestnut Oak range map. Public domain, via Wikimedia Commons.",
    photo5Href: "https://en.wikipedia.org/wiki/Quercus_montana#/media/File:Quercus_prinus_range_map.jpg",
    photo5Alt: "Chestnut Oak range map",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Quercus_prinus_range_map.jpg/256px-Quercus_prinus_range_map.jpg",
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
    background: "bg-large/bg-110.jpg",
    backgroundSmall: "bg-small/bg-110.jpg",
    description: "<p>The Chinquapin Oak, Quercus muehlenbergii, stands as a testament to the diversity and adaptability of oaks in North America. This medium-sized tree can reach heights of 40 to 50 feet, presenting a rounded canopy that offers dense shade. It is often found on well-drained upland soils but is also remarkably tolerant of varying moisture levels and pH, allowing it to thrive in a range of environments.</p><p>The leaves of the Chinquapin Oak are distinctive, with their coarsely serrated edges resembling the teeth of a saw, a notable departure from the classic lobed oak leaf. They boast a glossy, dark green hue above and a paler tone beneath, transitioning to shades of yellow to bronze in autumn. Springtime flowers are subtle, leading to the development of small, sweet acorns that are a wildlife favorite.</p><p>Its bark is light gray to flaky brown, providing interesting texture to the landscape. The Chinquapin Oak is prized for its durable, attractive wood and is often selected for reforestation and conservation projects, as well as a stately ornamental tree in parks and spacious landscapes.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Ruth_the_chinkapin_oak.jpg\">'Ruth' a Chinquapin Oak Tree</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Tameraclark\">Tameraclark</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Quercus_muehlenbergii#/media/File:Ruth_the_chinkapin_oak.jpg",
    photo1Alt: "'Ruth' a Chinquapin White Oak Tree",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Ruth_the_chinkapin_oak.jpg/256px-Ruth_the_chinkapin_oak.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2494-Quercus_muehlenbergii-Arb.Brno-8.12.JPG\">Chinquapin Oak leaves and acorns</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Vojt%C4%9Bch_Zavadil\">Vojtěch Zavadil</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Quercus_muehlenbergii#/media/File:2494-Quercus_muehlenbergii-Arb.Brno-8.12.JPG",
    photo2Alt: "Chinquapin Oak leaves and acorns",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/2494-Quercus_muehlenbergii-Arb.Brno-8.12.JPG/256px-2494-Quercus_muehlenbergii-Arb.Brno-8.12.JPG",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Chinkapin_oak.jpg\">Mature Chinkapin oak tree</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Chowbok\">Kim Scarborough</a>, <a href=\"https://creativecommons.org/licenses/by-sa/2.5/legalcode\" rel=\"license\">CC BY-SA 2.5</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Quercus_muehlenbergii#/media/File:Chinkapin_oak.jpg",
    photo3Alt: "Mature Chinkapin oak tree",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Chinkapin_oak.jpg/256px-Chinkapin_oak.jpg",

    photo4Credit: "Chinquapin Oak range map. Public domain, via Wikimedia Commons.",
    photo4Href: "https://en.wikipedia.org/wiki/Quercus_muehlenbergii#/media/File:Quercus_muehlenbergii_range_map_1.png",
    photo4Alt: "Chinquapin Oak range map",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Quercus_muehlenbergii_range_map_1.png/256px-Quercus_muehlenbergii_range_map_1.png",
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
    background: "bg-large/bg-116.jpg",
    backgroundSmall: "bg-small/bg-116.jpg",
    description: "<p>The Chokecherry tree, Prunus virginiana, is a small deciduous tree or large shrub that is widespread across much of North America. It typically grows to between 15 and 30 feet in height, featuring a slender profile with a crown that tends to be round and dense. This hardy species is versatile, growing in a variety of conditions from moist stream banks to dry hillsides.</p><p>Chokecherry leaves are oval-shaped with finely toothed margins, glossy on the top surface, and a paler green underneath. Come spring, the tree is adorned with elongated clusters of fragrant white flowers, which develop into dense strings of small, dark purple to black fruit by late summer. While the fruit is tart and astringent when raw, it becomes palatable when cooked and is often used in jellies and wines.</p><p>The tree's bark is gray to reddish-brown, marked by horizontal lenticels. Though not a first choice for lumber due to its small size, Chokecherry is valued in landscaping for its attractive spring blossoms and its ability to attract birds and butterflies to the garden. However, care should be taken as the seeds, leaves, and twigs contain compounds that are toxic to many mammals, including humans, when not properly processed.</p>",

    photo1Credit: "Chokecherry in bloom. Public domain, via Wikimedia Commons.",
    photo1Href: "https://en.wikipedia.org/wiki/Prunus_virginiana#/media/File:Prunus_virginiana_flowers.jpg",
    photo1Alt: "Chokecherry in bloom",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Prunus_virginiana_flowers.jpg/256px-Prunus_virginiana_flowers.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:SK-Prunus-Closeup.JPG\">Leaf and drupes</a>, <a href=\"https://commons.wikimedia.org/wiki/User:SriMesh\">SriMesh</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Prunus_virginiana#/media/File:SK-Prunus-Closeup.JPG",
    photo5Alt: "Leaf and drupes",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/SK-Prunus-Closeup.JPG/256px-SK-Prunus-Closeup.JPG",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2014-10-03_15_15_35_Chokecherry_showing_autumn_foliage_coloration_along_the_main_ridge_of_the_Diamond_Mountains_south_of_Diamond_Peak,_Nevada.JPG\">Chokecherry showing autumn foliage</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Prunus_virginiana#/media/File:2014-10-03_15_15_35_Chokecherry_showing_autumn_foliage_coloration_along_the_main_ridge_of_the_Diamond_Mountains_south_of_Diamond_Peak,_Nevada.JPG",
    photo3Alt: "Chokecherry showing autumn foliage coloration along the main ridge of the Diamond Mountains south of Diamond Peak, Nevada 2014-10-03 15 15 35",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/2014-10-03_15_15_35_Chokecherry_showing_autumn_foliage_coloration_along_the_main_ridge_of_the_Diamond_Mountains_south_of_Diamond_Peak%2C_Nevada.JPG/256px-2014-10-03_15_15_35_Chokecherry_showing_autumn_foliage_coloration_along_the_main_ridge_of_the_Diamond_Mountains_south_of_Diamond_Peak%2C_Nevada.JPG",

    photo4Credit: "Chokecherry range map. Public domain, via Wikimedia Commons.",
    photo4Href: "https://en.wikipedia.org/wiki/Prunus_virginiana#/media/File:Prunus_virginiana_range_map_1.png",
    photo4Alt: "Chokecherry range map",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Prunus_virginiana_range_map_1.png/256px-Prunus_virginiana_range_map_1.png",

    photo2Credit: "Chokecherry trees. Public domain, via Wikimedia Commons.",
    photo2Href: "https://en.wikipedia.org/wiki/Prunus_virginiana#/media/File:Chokecherry2web.jpg",
    photo2Alt: "Chokecherry trees",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Chokecherry2web.jpg",
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
    background: "bg-large/bg-140.jpg",
    backgroundSmall: "bg-small/bg-140.jpg",
    description: "<p>The Common Hackberry, Celtis occidentalis, is a sturdy native tree that graces the landscape with its distinctive presence. Adaptable and resilient, it commonly reaches 40 to 60 feet in height and thrives in a wide range of soil types, often found lining the streets or standing sentinel in parks due to its urban tolerance.</p><p>The Hackberry's bark is one of its most notable features, grayish in color, featuring a unique pattern of warty ridges and deep furrows. Its leaves are simple and serrated, oval to lance-shaped, with an asymmetrical base—emerging bright green in spring and maturing to a deeper green before yielding to a soft yellow in the fall.</p><p>Come autumn, the tree bears small, orange-red to dark purple berries, relished by birds and small mammals. These fruits, along with the tree’s ability to host butterfly larvae, make it an excellent choice for wildlife gardens. Despite its unassuming flowers, the Common Hackberry is a reliable and hardy species, offering a canopy of dappled shade and a robust, wind-resistant structure.</p>",
    photo1Credit: "Common Hackberry. Public domain, via Wikimedia Commons.",
    photo1Href: "https://en.wikipedia.org/wiki/Celtis_occidentalis#/media/File:Celtis_occidentalis_20090606.jpg",
    photo1Alt: "Common Hackberry",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Celtis_occidentalis_20090606.jpg/256px-Celtis_occidentalis_20090606.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Celtis_occidentalis_leaf.png\">Common Hackberry leaf</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Sapphosyne\">Sapphosyne</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Celtis_occidentalis#/media/File:Celtis_occidentalis_leaf.png",
    photo2Alt: "Common Hackberry leaf",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Celtis_occidentalis_leaf.png/256px-Celtis_occidentalis_leaf.png",

    photo3Credit: "Common Hackberry range map. Public domain, via Wikimedia Commons.",
    photo3Href: "https://en.wikipedia.org/wiki/Celtis_occidentalis#/media/File:Celtis_occidentalis_range_map_1.png",
    photo3Alt: "Common Hackberry range map",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Celtis_occidentalis_range_map_1.png/512px-Celtis_occidentalis_range_map_1.png",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Celtis_occidentalis_(26).JPG\">Common Hackberry tree in autumn</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Marrrrrra\">Marija Gajić</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Celtis_occidentalis#/media/File:Celtis_occidentalis_(26).JPG",
    photo4Alt: "Common Hackberry tree in autumn",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Celtis_occidentalis_%2826%29.JPG/256px-Celtis_occidentalis_%2826%29.JPG",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Celtis-occidentalis-flower.jpg\">Flowers</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Sten\">Sten Porse</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Celtis_occidentalis#/media/File:Celtis-occidentalis-flower.jpg",
    photo5Alt: "Flowers",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Celtis-occidentalis-flower.jpg/256px-Celtis-occidentalis-flower.jpg",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Celtis_occidentalis_NewGrowth.jpg\">Young leaves are tomentous</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Misolonax\">Misolonax</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Celtis_occidentalis#/media/File:Celtis_occidentalis_NewGrowth.jpg",
    photo6Alt: "Young leaves are tomentous",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Celtis_occidentalis_NewGrowth.jpg/256px-Celtis_occidentalis_NewGrowth.jpg",

    photo7Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Hackberry_bark_(Celtis_occidentalis).jpg\">Common Hackberry bark</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Ams100272\">Adam Shaw</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo7Href: "https://en.wikipedia.org/wiki/Celtis_occidentalis#/media/File:Hackberry_bark_(Celtis_occidentalis).jpg",
    photo7Alt: "Common Hackberry bark",
    photo7Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Hackberry_bark_%28Celtis_occidentalis%29.jpg/256px-Hackberry_bark_%28Celtis_occidentalis%29.jpg", 
    
    photo8Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Celtis-occidentalis-fruits.JPG\">The fruits often hang on the tree through the winter</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Sten\">Sten</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo8Href: "https://en.wikipedia.org/wiki/Celtis_occidentalis#/media/File:Celtis-occidentalis-fruits.JPG",
    photo8Alt: "The fruits often hang on the tree through the winter.",
    photo8Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Celtis-occidentalis-fruits.JPG/256px-Celtis-occidentalis-fruits.JPG",
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
    compoundStructure: "pinnate",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "commonhoptree",
    background: "bg-large/bg-141.jpg",
    backgroundSmall: "bg-small/bg-141.jpg",
    description: "<p>The Common Hoptree, Ptelea trifoliata, is a deciduous understory tree or large shrub native to North America, typically found in woodlands and along streams. It usually grows to a modest height of 15 to 20 feet with a similar spread, characterized by a round, open crown that provides light, airy shade.</p><p>This tree is easily recognized by its compound leaves, which are arranged in groups of three (hence the name trifoliata). The leaves are a lustrous dark green, turning yellow-green in autumn. The Hoptree's tiny, greenish-white flowers may be inconspicuous, but they are fragrant and bloom in dense clusters in late spring to early summer. Following the flowers are distinctive, wafer-like samaras, or winged seeds, that persist through the winter, adding textural interest to the bare branches.</p><p>Adaptable to various soil conditions and drought-tolerant once established, the Common Hoptree is a versatile plant. It is often used in native plant gardens and as a filler in landscape borders, offering habitat and food for wildlife, including serving as a host plant for the Giant Swallowtail butterfly.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Ptelea_trifoliata_MN_2007.JPG\">Multi-trunk tree form</a>, <a href=\"https://commons.wikimedia.org/wiki/User:SEWilco\">SEWilco</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Ptelea_trifoliata#/media/File:Ptelea_trifoliata_MN_2007.JPG",
    photo1Alt: "Multi-trunk tree form",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Ptelea_trifoliata_MN_2007.JPG/256px-Ptelea_trifoliata_MN_2007.JPG",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Ptelea_trifoliata_Arkansas.jpg\">Common hoptree fruit</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Eric_in_SF\">Eric Hunt</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Ptelea_trifoliata#/media/File:Ptelea_trifoliata_Arkansas.jpg",
    photo2Alt: "Common hoptree fruit",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Ptelea_trifoliata_Arkansas.jpg/256px-Ptelea_trifoliata_Arkansas.jpg",

    photo3Credit: "Common Hoptree flowers. Public domain, via Wikimedia Commons.",
    photo3Href: "https://en.wikipedia.org/wiki/Ptelea_trifoliata#/media/File:Ptelea_trifoliata_Kentucky.jpg",
    photo3Alt: "Common Hoptree flowers",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Ptelea_trifoliata_Kentucky.jpg/256px-Ptelea_trifoliata_Kentucky.jpg",

    photo4Credit: "Common Hoptree range map. Public domain, via Wikimedia Commons.",
    photo4Href: "https://en.wikipedia.org/wiki/Ptelea_trifoliata#/media/File:Ptelea_trifoliata_range_map.jpg",
    photo4Alt: "Common Hoptree range map",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Ptelea_trifoliata_range_map.jpg/256px-Ptelea_trifoliata_range_map.jpg",
  },
  {
    nameCommon: "Common Prickly-ash",
    aka: [
      "Toothache Tree", "yellow wood", "suterberry"
    ],
    order: "Sapindales",
    family: "Rutaceae",
    familyCommon: "Rue",
    genus: "Zanthoxylum",
    species: "Zanthoxylum americanum",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "pinnate",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "commonprickly-ash",
    background: "bg-large/bg-117.jpg",
    backgroundSmall: "bg-small/bg-117.jpg",
    description: "<p>The Common Prickly-ash, Zanthoxylum americanum, is a deciduous shrub or small tree native to the eastern and central United States and Canada, where it thrives along forest edges and in open woodlands. It reaches modest heights of up to 20 feet and is known for its compound leaves, which are made up of 5 to 11 ovate, glossy leaflets that exude a citrus-like fragrance when crushed.</p><p>Perhaps its most distinctive feature is the sharp, stout spines that stud its gray-brown branches, which historically have earned it the nickname of 'toothache tree' due to the numbing effect of its bark and leaves on the mouth. In spring, small, greenish-yellow clusters of flowers emerge, providing an early-season feast for pollinators. These blooms give way to small, reddish-brown berry-like fruits that persist into winter, offering food for birds and other wildlife.</p><p>The Prickly-ash is drought-resistant and adaptable to various soils, often used in naturalistic plantings and restoration projects. Its textured bark, spiny branches, and aromatic foliage make it a unique specimen for an ecological garden or a naturalized area.</p>",
    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Zanthoxylum_americanum.jpg\">Foliage and fruit</a>, A. Barra, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Zanthoxylum_americanum#/media/File:Zanthoxylum_americanum.jpg",
    photo2Alt: "Foliage and fruit",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Zanthoxylum_americanum.jpg/256px-Zanthoxylum_americanum.jpg",

    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Zantthoxylum_americanum.jpg\">Common Prickly-ash</a>, A. Barra, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Zanthoxylum_americanum#/media/File:Zantthoxylum_americanum.jpg",
    photo1Alt: "Zantthoxylum americanum",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Zantthoxylum_americanum.jpg/256px-Zantthoxylum_americanum.jpg",

    photo5Credit: "Common Prickly-ash range map. Public domain, via Wikimedia Commons",
    photo5Href: "https://en.wikipedia.org/wiki/Zanthoxylum_americanum#/media/File:Zanthoxylum_americanum_range_map.png",
    photo5Alt: "Common Prickly-ash range map",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Zanthoxylum_americanum_range_map.png/256px-Zanthoxylum_americanum_range_map.png",
    
    photo4Credit: "Botanical illustration. Public domain, via Wikimedia Commons",
    photo4Href: "https://en.wikipedia.org/wiki/Zanthoxylum_americanum#/media/File:Zanthophylum_americanum.jpg",
    photo4Alt: "Botanical illustration",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Zanthophylum_americanum.jpg/256px-Zanthophylum_americanum.jpg",

    photo3Credit: "Common Prickly-ash berries. Public domain, via Wikimedia Commons",
    photo3Href: "https://en.wikipedia.org/wiki/Zanthoxylum_americanum#/media/File:Zanthoxylum_americanum_-_USDA.jpg",
    photo3Alt: "Common Prickly-ash berries",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Zanthoxylum_americanum_-_USDA.jpg/256px-Zanthoxylum_americanum_-_USDA.jpg",
  },
  {
    nameCommon: "Crab Apple",
    order: "Rosales",
    family: "Rosaceae",
    familyCommon: "Rose",
    genus: "Malus",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "yellow",
      "red"
    ],
    slug: "crabapple",
    background: "bg-large/bg-153.jpg",
    backgroundSmall: "bg-small/bg-153.jpg",
    description: "<p>The Crab Apple tree, belonging to the genus Malus, is celebrated for its vibrant springtime display and its contributions to gardens and ecosystems. Typically growing to 15-25 feet tall, these deciduous trees are cherished for their abundant and fragrant blossoms that range in color from pristine whites to deep pinks and reds. The flowers not only add aesthetic value but also attract a variety of pollinators.</p><p>Following the floral showcase, the trees produce the namesake crab apples, small pome fruits that can be tart or mildly sweet. These fruits are often used in jellies and preserves and serve as an essential food source for birds and wildlife during the fall and winter months.</p><p>Crab Apple leaves are generally oval with a serrated edge, turning hues of yellow, orange, or red as autumn advances. The trees' rugged bark and twisting branches give them a picturesque appearance in the landscape year-round.</p><p>Highly adaptable, Crab Apple trees are used in urban settings for their modest size and are resistant to many diseases that affect larger fruiting apples. They offer year-round interest with their spring blooms, summer foliage, autumn fruit, and distinctive winter silhouette.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Purple_prince_crabapple_tree.JPG\">Purple prince crabapple tree</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Bruce_Marlin\">Bruce Marlin</a>, <a href=\"https://creativecommons.org/licenses/by/3.0/legalcode\" rel=\"license\">CC BY 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Malus#/media/File:Purple_prince_crabapple_tree.JPG",
    photo1Alt: "Purple prince crab apple tree",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Purple_prince_crabapple_tree.JPG/256px-Purple_prince_crabapple_tree.JPG",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Flowering_crabapple_in_Washington_DC.jpg\">Flowering crab apple blooms</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Kilo22\">Kilo22</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Malus#/media/File:Flowering_crabapple_in_Washington_DC.jpg",
    photo2Alt: "Flowering crab apple blooms",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flowering_crabapple_in_Washington_DC.jpg/256px-Flowering_crabapple_in_Washington_DC.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Crabapples.jpg\">Ripe wild crab apples</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Wehha\">Wehha</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Malus#/media/File:Crabapples.jpg",
    photo3Alt: "Ripe wild crab apples",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Crabapples.jpg/256px-Crabapples.jpg",

    photo4Credit: "Crab Apple trunk. Public domain, via Wikimedia Commons",
    photo4Href: "https://en.wikipedia.org/wiki/Malus#/media/File:20071103Tradkrafta1.JPG",
    photo4Alt: "Crab Apple trunk",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/20071103Tradkrafta1.JPG/256px-20071103Tradkrafta1.JPG",
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
    background: "bg-large/bg-142.jpg",
    backgroundSmall: "bg-small/bg-142.jpg",
    description: "<p>The Cucumber Tree, Magnolia acuminata, stands as a magnificent deciduous species within the Magnolia family, soaring to heights of 50 to 80 feet in its native Eastern United States forests. This stately tree exhibits a straight trunk and a pyramidal to rounded crown as it matures, exuding an aura of elegance and strength.</p><p>Its leaves are sizeable and oblong, with a lush green hue, turning to a golden-yellow in the fall, adding a splash of color to the autumnal landscape. The tree derives its common name from its unique, cucumber-shaped green fruits, which mature to a deep red as they ripen, revealing bright red seeds that are favored by wildlife.</p><p>Spring brings forth the Cucumber Tree’s flowers, which are less showy than those of its magnolia relatives but hold a subtle beauty; they are yellow-green, tulip-shaped, and emerge high in the tree. With its tall stature and low-maintenance character, the Cucumber Tree is a majestic addition to large spaces, parks, and rural landscapes, offering a serene and shady retreat.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Magnolia_acuminata.jpg\">Cucumber Tree</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Bruce_Marlin\">Bruce Marlin</a>, <a href=\"https://creativecommons.org/licenses/by/3.0/legalcode\" rel=\"license\">CC BY 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Magnolia_acuminata#/media/File:Magnolia_acuminata.jpg",
    photo1Alt: "Magnolia acuminata",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Magnolia_acuminata.jpg/256px-Magnolia_acuminata.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Magnolia_acuminata_tree.jpg\">Upward view of Cucumber Tree</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Akgarb\">William (Ned) Friedman</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Magnolia_acuminata#/media/File:Magnolia_acuminata_tree.jpg",
    photo2Alt: "Upward view of Cucumber Tree",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Magnolia_acuminata_tree.jpg/256px-Magnolia_acuminata_tree.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Magnolia_acuminata_leaves_01_by_Line1.jpg\">Leaves</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Lin%C3%A91\">Liné1</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Magnolia_acuminata#/media/File:Magnolia_acuminata_leaves_01_by_Line1.jpg",
    photo3Alt: "Leaves",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Magnolia_acuminata_leaves_01_by_Line1.jpg/256px-Magnolia_acuminata_leaves_01_by_Line1.jpg",

    photo4Credit: "<a href=\"https://en.wikipedia.org/wiki/File:Cucumber_magnolia.jpg\">Immature fruit</a>, <a href=\"https://commons.wikimedia.org/wiki/User:MikeParker\">MikeParker</a>, <a href=\"https://creativecommons.org/licenses/by/3.0/legalcode\" rel=\"license\">CC BY 3.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Magnolia_acuminata#/media/File:Cucumber_magnolia.jpg",
    photo4Alt: "Immature fruit",
    photo4Src: "https://upload.wikimedia.org/wikipedia/en/4/4c/Cucumber_magnolia.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Magnolia_acuminata_maturing_fruit.jpg\">Maturing fruit</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Arnoldarb\">William (Ned) Friedman</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Magnolia_acuminata#/media/File:Magnolia_acuminata_maturing_fruit.jpg",
    photo5Alt: "Maturing fruit",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Magnolia_acuminata_maturing_fruit.jpg/256px-Magnolia_acuminata_maturing_fruit.jpg",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Magnolia_acuminata_mature_fruit.jpg\">Mature fruit</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Akgarb\">William (Ned) Friedman</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Magnolia_acuminata#/media/File:Magnolia_acuminata_mature_fruit.jpg",
    photo6Alt: "Mature fruit",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Magnolia_acuminata_mature_fruit.jpg/256px-Magnolia_acuminata_mature_fruit.jpg",

    photo7Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Cucumber_Magnolia_Magnolia_acuminata_Bark_Vertical.JPG\">Cucumber Tree bark</a>, Photo by and (c)2016 Derek Ramsey (<a href=\"https://en.wikipedia.org/wiki/User:Ram-Man\">Ram-Man</a>), <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo7Href: "https://en.wikipedia.org/wiki/Magnolia_acuminata#/media/File:Cucumber_Magnolia_Magnolia_acuminata_Bark_Vertical.JPG",
    photo7Alt: "Bark",
    photo7Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Cucumber_Magnolia_Magnolia_acuminata_Bark_Vertical.JPG/256px-Cucumber_Magnolia_Magnolia_acuminata_Bark_Vertical.JPG",

    photo8Credit: "Botanical illustration. Public domain, via Wikimedia Commons",
    photo8Href: "https://en.wikipedia.org/wiki/Zanthoxylum_americanum#/media/File:Zanthophylum_americanum.jpg",
    photo8Alt: "Botanical illustration",
    photo8Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Zanthophylum_americanum.jpg/256px-Zanthophylum_americanum.jpg",
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
    background: "bg-large/bg-118.jpg",
    backgroundSmall: "bg-small/bg-118.jpg",
    description: "<p>The Eastern Cottonwood, Populus deltoides, is a fast-growing, towering tree of the Poplar family, reaching heights of up to 100 feet or more. Native to North America, it thrives in moist, fertile soils along riverbanks, floodplains, and wetland areas. This species is easily identified by its broad, triangular (deltoid) leaves, which flutter audibly in the breeze due to their flattened petioles.</p><p>In the spring, the Eastern Cottonwood becomes especially noticeable when it produces its namesake cotton-like seeds, which blanket the surrounding ground and water surfaces. The bark of young trees is smooth and silvery-white, becoming deeply furrowed, thick, and rugged with age.</p><p>The tree is a vital component of riparian ecosystems, stabilizing riverbanks and providing habitat for wildlife. Despite its utility in such environments, it is often regarded as a nuisance in urban areas due to its large size, extensive root systems, and the mess created by its seeds. Nonetheless, the Eastern Cottonwood is a hardy survivor, with a majestic presence that dominates the landscapes it inhabits.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Peuplier_deltoïde_feuillage.jpg\">Eastern Cottonwood foliage</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Laurent_B%C3%A9langer\">Laurent Bélanger</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Populus_deltoides#/media/File:Peuplier_delto%C3%AFde_feuillage.jpg",
    photo1Alt: "Populus deltoides foliage",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Peuplier_delto%C3%AFde_feuillage.jpg/256px-Peuplier_delto%C3%AFde_feuillage.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Bark_on_bole_of_mature_Eastern_Cottonwood.jpg\">Bark on bole of mature Eastern Cottonwood</a>, <a href=\"https://en.wikipedia.org/wiki/User:Cohee\">Cohee</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Populus_deltoides#/media/File:Bark_on_bole_of_mature_Eastern_Cottonwood.jpg",
    photo2Alt: "Bark on bole of mature Eastern Cottonwood",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Bark_on_bole_of_mature_Eastern_Cottonwood.jpg/256px-Bark_on_bole_of_mature_Eastern_Cottonwood.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Cottonwood_20090521_083459_1.jpg\">Seeds and seed hairs from an eastern cottonwood</a>, <a href=\"https://commons.wikimedia.org/wiki/User:EnLorax\">EnLorax</a> <a href=\"http://edwardjohnson.com/\">G. Edward Johnson</a>, <a href=\"https://creativecommons.org/licenses/by/3.0/legalcode\" rel=\"license\">CC BY 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Populus_deltoides#/media/File:Cottonwood_20090521_083459_1.jpg",
    photo3Alt: "Seeds and seed hairs from an eastern cottonwood",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Cottonwood_20090521_083459_1.jpg/256px-Cottonwood_20090521_083459_1.jpg",

    photo4Credit: "Eastern Cottonwood range map. Public domain, via Wikimedia Commons",
    photo4Href: "https://en.wikipedia.org/wiki/Populus_deltoides#/media/File:Populus_deltoides_range_map_2.png",
    photo4Alt: "Eastern Cottonwood range map",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Populus_deltoides_range_map_2.png/256px-Populus_deltoides_range_map_2.png",
  },
  {
    nameCommon: "Eastern Hemlock",
    aka: ["eastern hemlock-spruce", "Canadian hemlock"],
    order: "Pinales",
    family: "Pinaceae",
    familyCommon: "Pine",
    genus: "Tsuga",
    species: "Tsuga canadensis",
    type: "conifer",
    needleStructure: "single needle",
    slug: "easternhemlock",
    background: "bg-large/bg-71.jpg",
    backgroundSmall: "bg-small/bg-71b.jpg",
    description: "<p>The Eastern Hemlock, Tsuga canadensis, is a timeless evergreen native to the northeastern United States and Canada, revered for its longevity and grace. With the potential to reach heights of over 70 feet, this conifer often forms a dense, pyramidal shape, characterized by its drooping branches and fine, feathery foliage.</p><p>The tree’s needles are small, delicate, and dark green with two distinct white stripes beneath, contributing to a soft texture that is almost feathery to the touch. Tiny, pendulous cones dangle from the branches, offering a subtle decorative effect. The bark is thick and furrowed, featuring a rich brown color that deepens with age.</p><p>Eastern Hemlocks favor cool, shaded areas, often found thriving in forested ravines and valleys. They play a crucial ecological role, providing shelter and food for wildlife. Unfortunately, they are under threat from the invasive hemlock woolly adelgid, which poses significant risks to their populations. Nonetheless, the Eastern Hemlock remains a beloved emblem of eastern American forests, prized for its wood, ornamental beauty, and serene presence.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Tsuga_canadensis_morton.jpg\">Eastern Hemlock tree</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Bruce_Marlin\">Bruce Marlin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Tsuga_canadensis#/media/File:Tsuga_canadensis_morton.jpg",
    photo1Alt: "Eastern Hemlock tree",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Tsuga_canadensis_morton.jpg/256px-Tsuga_canadensis_morton.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Eastern_Hemlock_Branch_253271179.jpg\">Eastern Hemlock Branch</a>, <a href=\"https://www.inaturalist.org/users/6295544\">Noah Poropat</a>, <a href=\"https://creativecommons.org/licenses/by/4.0/legalcode\" rel=\"license\">CC BY 4.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Tsuga_canadensis#/media/File:Eastern_Hemlock_Branch_253271179.jpg",
    photo2Alt: "Eastern Hemlock Branch",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Eastern_Hemlock_Branch_253271179.jpg/256px-Eastern_Hemlock_Branch_253271179.jpg",

    photo3Credit: "Eastern Hemlock bark. Public domain, via Wikimedia Commons",
    photo3Href: "https://en.wikipedia.org/wiki/Tsuga_canadensis#/media/File:TsugaCanadensisBark.jpg",
    photo3Alt: "Eastern Hemlock bark",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/TsugaCanadensisBark.jpg/256px-TsugaCanadensisBark.jpg",

    photo4Credit: "Botanical illustration. Public domain, via Wikimedia Commons",
    photo4Href: "https://en.wikipedia.org/wiki/Tsuga_canadensis#/media/File:Tsuga_canadensis_drawing.png",
    photo4Alt: "Botanical illustration",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Tsuga_canadensis_drawing.png/256px-Tsuga_canadensis_drawing.png",

    photo5Credit: "Shoot infested with hemlock woolly adelgid. Public domain, via Wikimedia Commons",
    photo5Href: "https://en.wikipedia.org/wiki/Tsuga_canadensis#/media/File:Tsuga_canadensis_adelges.jpg",
    photo5Alt: "Shoot infested with hemlock woolly adelgid.",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Tsuga_canadensis_adelges.jpg",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Stand_of_Eastern_Hemlock_and_White_Pine_in_Tiadaghton_State_Forest,_Pennsylvania.jpg\">Stand of Eastern Hemlock and White Pine in Tiadaghton State Forest, Pennsylvania</a>, Nicholas A. Tonelli, <a href=\"https://creativecommons.org/licenses/by/2.0/legalcode\" rel=\"license\">CC BY 2.0</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Tsuga_canadensis#/media/File:Stand_of_Eastern_Hemlock_and_White_Pine_in_Tiadaghton_State_Forest,_Pennsylvania.jpg",
    photo6Alt: "Stand of eastern hemlock and eastern white pine in Tiadaghton State Forest, Pennsylvania; note the hemlocks' deeply fissured bark",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Stand_of_Eastern_Hemlock_and_White_Pine_in_Tiadaghton_State_Forest%2C_Pennsylvania.jpg/256px-Stand_of_Eastern_Hemlock_and_White_Pine_in_Tiadaghton_State_Forest%2C_Pennsylvania.jpg",  

    photo7Credit: "Eastern Hemlock range map. Public domain, via Wikimedia Commons",
    photo7Href: "https://en.wikipedia.org/wiki/Tsuga_canadensis#/media/File:Tsuga_canadensis_range_map_4.png",
    photo7Alt: "Eastern Hemlock range map",
    photo7Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Tsuga_canadensis_range_map_4.png/256px-Tsuga_canadensis_range_map_4.png",
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
    background: "bg-large/bg-96.jpg",
    backgroundSmall: "bg-small/bg-96.jpg",
    description: "<p>The Eastern Redbud, Cercis canadensis, is a captivating small to medium-sized deciduous tree beloved for its early spring display of vivid, pink-purple flowers. Before its heart-shaped leaves unfurl, the redbud's bare branches and even its trunk are enveloped by clusters of these bright blooms, which later give way to flattened, bean-like seed pods that persist into winter.</p><p>Reaching heights of 20 to 30 feet, the redbud has a rounded canopy that provides dappled shade, making it a favored ornamental in gardens and parks. The leaves emerge reddish, turning to a lustrous green as they mature and then to shades of yellow in the fall, completing a year-round cycle of color.</p><p>Adaptable to a variety of soil conditions, though preferring well-drained sites, the Eastern Redbud is a native treasure from the eastern U.S. It is not only a feast for human eyes but also a source of nectar for pollinators, adding ecological value to its aesthetic appeal.</p>",
  
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Columbus_Wisconsin_Redbud_Tree_small.jpg\">Eastern Redbud in bloom</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Downspec\">Downspec</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Cercis_canadensis#/media/File:Columbus_Wisconsin_Redbud_Tree_small.jpg",
    photo1Alt: "Eastern Redbud in bloom",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Columbus_Wisconsin_Redbud_Tree_small.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:RedbudsOhio.jpg\">Detail of buds</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Greg5030\">Greg Hume</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Cercis_canadensis#/media/File:RedbudsOhio.jpg",
    photo2Alt: "Detail of buds",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/RedbudsOhio.jpg/256px-RedbudsOhio.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Cercis_canadensis_'Forest_Pansy'_JPG1Fe.jpg\">Eastern Redbud leaves</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Jean-Pol_GRANDMONT\">Jean-Pol Grandmont</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Cercis_canadensis#/media/File:Cercis_canadensis_'Forest_Pansy'_JPG1Fe.jpg",
    photo3Alt: "Eastern Redbud leaves",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Cercis_canadensis_%27Forest_Pansy%27_JPG1Fe.jpg/256px-Cercis_canadensis_%27Forest_Pansy%27_JPG1Fe.jpg",

    photo4Credit: "Eastern Redbud range map. Public domain, via Wikimedia Commons",
    photo4Href: "https://en.wikipedia.org/wiki/Cercis_canadensis#/media/File:Cercis_canadensis_range_map_2.png",
    photo4Alt: "Eastern Redbud range map",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Cercis_canadensis_range_map_2.png/256px-Cercis_canadensis_range_map_2.png",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:RedbudOhio02.jpg\">Eastern Redbud tree</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Greg5030\">Greg Hume</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Cercis_canadensis#/media/File:RedbudOhio02.jpg",
    photo5Alt: "Eastern Redbud tree",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/RedbudOhio02.jpg/256px-RedbudOhio02.jpg",
  },
  {
    nameCommon: "Eastern Redcedar",
    aka: ["red cedar", "Virginian juniper", "eastern juniper", "red juniper"],
    order: "Pinales",
    family: "Cupressaceae",
    familyCommon: "Cypress",
    genus: "Juniperus",
    species: "Juniperus virginiana",
    type: "conifer",
    needleStructure: "scaly needles",
    slug: "easternredcedar",
    background: "bg-large/bg-126.jpg",
    backgroundSmall: "bg-small/bg-126.jpg",
    description: "<p>The Eastern Redcedar, Juniperus virginiana, is an enduring evergreen tree with a broad natural range across the eastern United States. It is not a true cedar but a juniper, typically growing to 30-40 feet in height, though some specimens can soar up to 90 feet under ideal conditions. Its dense foliage takes on a conical shape in youth, becoming more columnar with age.</p><p>The tree’s needles are a deep, rich green, often with a tinge of blue, and can be prickly to the touch. With age, the Eastern Redcedar's bark becomes fibrous and reddish-brown, peeling off in long strips. This tree is dioecious, with separate male and female plants; the female trees bear small, blue, berry-like cones that are actually modified cones and are attractive to wildlife.</p><p>Hardy and drought-resistant, the Eastern Redcedar is frequently used as a windbreak or in landscape plantings, valued for its aromatic wood, which is commonly used in closets and chests to repel moths. Despite its usefulness, it is often considered invasive, as it can dominate prairies and grasslands if left unchecked.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2014-05-13_08_32_55_Eastern_Red_Cedar_at_South_Riding_Golf_Club_in_South_Riding,_Virginia.JPG\">Eastern Red Cedar tree</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Juniperus_virginiana#/media/File:2014-05-13_08_32_55_Eastern_Red_Cedar_at_South_Riding_Golf_Club_in_South_Riding,_Virginia.JPG",
    photo1Alt: "Eastern Red Cedar at South Riding Golf Club in South Riding, Virginia",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/2014-05-13_08_32_55_Eastern_Red_Cedar_at_South_Riding_Golf_Club_in_South_Riding%2C_Virginia.JPG/256px-2014-05-13_08_32_55_Eastern_Red_Cedar_at_South_Riding_Golf_Club_in_South_Riding%2C_Virginia.JPG",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Juniper_berries_q.jpg\">Foliage and mature cones</a>, <a href=\"https://en.wikipedia.org/wiki/User:Quadell\">Quadell</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Juniperus_virginiana#/media/File:Juniper_berries_q.jpg",
    photo2Alt: "Foliage and mature cones",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Juniper_berries_q.jpg/256px-Juniper_berries_q.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Juniperus_virginiana_near_Oxford,_Ohio.jpg\">Characteristic shape in old field succession</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Greg5030\">Greg Hume</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Juniperus_virginiana#/media/File:Juniperus_virginiana_near_Oxford,_Ohio.jpg",
    photo3Alt: "Characteristic shape in old field succession",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Juniperus_virginiana_near_Oxford%2C_Ohio.jpg/256px-Juniperus_virginiana_near_Oxford%2C_Ohio.jpg",

    photo4Credit: "Logs turned on a lathe, exposing the pale sapwood and the reddish heartwood. Public domain, via Wikimedia Commons",
    photo4Href: "https://en.wikipedia.org/wiki/Juniperus_virginiana#/media/File:JuniperLogs.jpg",
    photo4Alt: "Logs turned on a lathe, exposing the pale sapwood and the reddish heartwood",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/JuniperLogs.jpg/256px-JuniperLogs.jpg",

    photo6Credit: "Natural distribution of varieties: J. virginiana var. virginiana (green) and J. virginiana var. silicicola (red). Public domain, via Wikimedia Commons",
    photo6Href: "https://en.wikipedia.org/wiki/Juniperus_virginiana#/media/File:Juniperus_virginiana_vars_range_map_3.png",
    photo6Alt: "Natural distribution of varieties: J. virginiana var. virginiana (green) and J. virginiana var. silicicola (red).",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Juniperus_virginiana_vars_range_map_3.png/256px-Juniperus_virginiana_vars_range_map_3.png",
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
    background: "bg-large/bg-143.jpg",
    backgroundSmall: "bg-small/bg-143.jpg",
    description: "<p>The Eastern Wahoo, Euonymus atropurpureus, is a native North American shrub or small tree that graces the understory of woodlands with its modest yet attractive presence. Typically reaching heights between 10 to 20 feet, its multi-stemmed form sports opposing, elliptical leaves that turn a striking red-purple in autumn, creating a vivid display.</p><p>Spring brings small, purplish flowers that, while not overly showy, add subtle interest and are followed by distinctive, deeply lobed fruits that split open to reveal bright scarlet seeds, which persist into winter and provide food for birds and wildlife.</p><p>Eastern Wahoo's bark is gray-brown and textured, contributing to its winter interest. This adaptable plant is often found in open woods and along stream banks, thriving in a variety of soil conditions. With its year-round ornamental appeal and its role as a food source for fauna, Eastern Wahoo is a valued addition to naturalistic gardens and restoration projects.</p>",
    photo1Credit: "Eastern Wahoo fruit. Public domain, via Wikimedia Commons",
    photo1Href: "https://en.wikipedia.org/wiki/Euonymus_atropurpureus#/media/File:Euonymus_atropurpureus_fruit.jpg",
    photo1Alt: "Eastern Wahoo fruit",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Euonymus_atropurpureus_fruit.jpg/256px-Euonymus_atropurpureus_fruit.jpg",

    photo2Credit: "Eastern Wahoo range map. Public domain, via Wikimedia Commons",
    photo2Href: "https://en.wikipedia.org/wiki/Euonymus_atropurpureus#/media/File:Euonymus_atropurpureus_range_map.jpg",
    photo2Alt: "Eastern Wahoo range map",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Euonymus_atropurpureus_range_map.jpg/256px-Euonymus_atropurpureus_range_map.jpg",
  },
  {
    nameCommon: "Eastern White Pine",
    aka: ["northern white pine", "white pine"],
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
    background: "bg-large/bg-50.jpg",
    backgroundSmall: "bg-small/bg-50.jpg",
    description: "<p>The Eastern White Pine, Pinus strobus, is a majestic evergreen conifer that holds a place of honor in the forests of Eastern North America. Towering to heights of 50 to 80 feet, and sometimes reaching up to 150 feet in the wild, it is known for its straight, tall trunk and a gracefully slender, pyramidal shape, becoming more irregular with age.</p><p>The tree’s needles, soft and flexible, are grouped in bundles of five, a distinctive feature of this species. They are bluish-green, lending a fine, feathery texture to the foliage. In the spring, the Eastern White Pine produces small, inconspicuous flowers, followed by long, slender cones that mature to a light brown and hang elegantly from the branches.</p><p>The bark of the Eastern White Pine is smooth and gray when young, developing into deeply furrowed, ridged plates with age. This tree is not only admired for its stately beauty but also valued for its lumber, historically significant in the shipbuilding and construction industries. In landscapes, it’s cherished for its fast growth, towering presence, and the soft whisper of wind through its needles, making it a favorite for large spaces and natural settings.</p>",
    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Pinus_strobus_Syvania.jpg\">Eastern White Pine trees</a>, Joseph O'Brien, USDA Forest Service, <a href=\"https://creativecommons.org/licenses/by/3.0/us/deed.en\" rel=\"license\">CC BY 3.0 US</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Pinus_strobus#/media/File:Pinus_strobus_Syvania.jpg",
    photo5Alt: "Pinus strobus Syvania",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Pinus_strobus_Syvania.jpg/256px-Pinus_strobus_Syvania.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Pinus_strobus_Cone.jpg\">Eastern White Pine cone</a>, Keith Kanoti, Maine Forest Service, USA, <a href=\"https://creativecommons.org/licenses/by/3.0/us/deed.en\" rel=\"license\">CC BY 3.0 US</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Pinus_strobus#/media/File:Pinus_strobus_Cone.jpg",
    photo3Alt: "Pinus strobus Cone",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pinus_strobus_Cone.jpg/256px-Pinus_strobus_Cone.jpg",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Malecones.jpg\">Male cones</a>, <a href=\"https://commons.wikimedia.org/wiki/User:DigbyDalton\">DigbyDalton</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Pinus_strobus#/media/File:Malecones.jpg",
    photo6Alt: "Male cones",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Malecones.jpg/256px-Malecones.jpg",
 
    photo7Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Eastern_White_Pine_Pinus_strobus_Bark_Vertical.JPG\">Eastern White Pine bark</a>, Photo by and (c)2016 Derek Ramsey (<a href=\"https://en.wikipedia.org/wiki/User:Ram-Man\">Ram-Man</a>), <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo7Href: "https://en.wikipedia.org/wiki/Pinus_strobus#/media/File:Eastern_White_Pine_Pinus_strobus_Bark_Vertical.JPG",
    photo7Alt: "Eastern White Pine Pinus strobus Bark",
    photo7Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Eastern_White_Pine_Pinus_strobus_Bark_Vertical.JPG/256px-Eastern_White_Pine_Pinus_strobus_Bark_Vertical.JPG",

    photo8Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Mature_White_Pine.jpg\">Mature White Pine in Cook Forest State Park</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Bernini123\">Bernini123</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo8Href: "https://en.wikipedia.org/wiki/Pinus_strobus#/media/File:Mature_White_Pine.jpg",
    photo8Alt: "Mature White Pine in Cook Forest State Park",
    photo8Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Mature_White_Pine.jpg/256px-Mature_White_Pine.jpg",

    photo2Credit: "Leaves (needles) of new shoots in late summer. Public domain, via Wikimedia Commons",
    photo2Href: "https://en.wikipedia.org/wiki/Pinus_strobus#/media/File:Pinus_strobus_needles3.jpg",
    photo2Alt: "Leaves (needles) of new shoots in late summer",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Pinus_strobus_needles3.jpg/256px-Pinus_strobus_needles3.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Pinus_strobus_MHNT.2022.4.2.jpg\">Cones and seeds</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Erc%C3%A9\">Roger Culos</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Pinus_strobus#/media/File:Pinus_strobus_MHNT.2022.4.2.jpg",
    photo4Alt: "Cones and seeds",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Pinus_strobus_MHNT.2022.4.2.jpg/256px-Pinus_strobus_MHNT.2022.4.2.jpg",

    photo1Credit: "Eastern White Pine trees. Public domain, via Wikimedia Commons",
    photo1Href: "https://en.wikipedia.org/wiki/Pinus_strobus#/media/File:Pinus_strobus_trees.jpg",
    photo1Alt: "Eastern White Pine trees",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Pinus_strobus_trees.jpg/256px-Pinus_strobus_trees.jpg",
  },
  {
    nameCommon: "Eastern White-cedar",
    aka: ["northern white-cedar"],
    order: "Pinales",
    family: "Cupressaceae",
    familyCommon: "Cypress",
    genus: "Thuja",
    species: "Thuja occidentalis",
    type: "conifer",
    needleStructure: "scaly needles",
    slug: "easternwhite-cedar",
    background: "bg-large/bg-127.jpg",
    backgroundSmall: "bg-small/bg-127.jpg",
    description: "<p>The Eastern White-cedar, Thuja occidentalis, is a slender, evergreen conifer indigenous to the northeastern United States and southeastern Canada. Renowned for its longevity and resilience, it typically reaches heights of 40 to 60 feet in cultivation, though it can grow taller in the wild. This tree features a narrow, conical shape with dense, scale-like foliage that provides year-round greenery. Its leaves are arranged in flat sprays, presenting a soft, feathery texture, and emit a pleasant aroma when crushed.</p><p>In the spring, the Eastern White-cedar produces small, inconspicuous cones that mature to a subtle brown and blend seamlessly with the foliage. The tree's bark is fibrous, reddish-brown, and peels off in narrow strips, adding a layer of textural interest. Adapted to a variety of conditions, it thrives in both wet and dry soils, often found in swampy areas, rocky landscapes, and cold northern terrains.</p><p>Popular in landscaping, the Eastern White-cedar is frequently used for hedges, screens, and as a specimen tree due to its attractive form and ease of pruning. Additionally, its wood is valued for its resistance to decay and rot, making it ideal for outdoor construction. With its elegant form and versatile nature, the Eastern White-cedar is a stalwart presence in both cultivated gardens and wild settings.</p>",

    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Something_out_of_nothing_2.jpg\">Old trees growing on a rock ledge</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Brynn\">Brynn</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Thuja_occidentalis#/media/File:Something_out_of_nothing_2.jpg",
    photo1Alt: "Old trees growing on a rock ledge",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Something_out_of_nothing_2.jpg/256px-Something_out_of_nothing_2.jpg", 

    photo2Credit: "Public domain, via Wikimedia Commons",
    photo2Href: "https://en.wikipedia.org/wiki/Thuja_occidentalis#/media/File:Thuja_occidentalis_trunk.jpg",
    photo2Alt: "Thuja occidentalis trunk",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Thuja_occidentalis_trunk.jpg/256px-Thuja_occidentalis_trunk.jpg",
    
    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Northern_Whitecedar_(Thuja_occidentalis)_-_Algonquin_Provincial_Park,_Ontario_2019-09-20.jpg\">Northern Whitecedar (Thuja occidentalis) - Algonquin Provincial Park, Ontario</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Ryan_Hodnett\">Ryan Hodnett</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Thuja_occidentalis#/media/File:Northern_Whitecedar_(Thuja_occidentalis)_-_Algonquin_Provincial_Park,_Ontario_2019-09-20.jpg",
    photo3Alt: "Northern Whitecedar (Thuja occidentalis) - Algonquin Provincial Park, Ontario",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Northern_Whitecedar_%28Thuja_occidentalis%29_-_Algonquin_Provincial_Park%2C_Ontario_2019-09-20.jpg/256px-Northern_Whitecedar_%28Thuja_occidentalis%29_-_Algonquin_Provincial_Park%2C_Ontario_2019-09-20.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Thuja_occidentalis_foliage_Wisconsin.jpg\">Eastern White-cedar foliage</a>, <a href=\"https://www.flickr.com/people/8584048@N05\">Joshua Mayer</a> from Madison, WI, USA, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/legalcode\" rel=\"license\">CC BY-SA 2.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Thuja_occidentalis#/media/File:Thuja_occidentalis_foliage_Wisconsin.jpg",
    photo4Alt: "Thuja occidentalis foliage Wisconsin",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Thuja_occidentalis_foliage_Wisconsin.jpg/256px-Thuja_occidentalis_foliage_Wisconsin.jpg",

    photo5Credit: "Leaves and immature cones. Public domain, via Wikimedia Commons",
    photo5Href: "https://en.wikipedia.org/wiki/Thuja_occidentalis#/media/File:Thuja_occidentalis.jpg",
    photo5Alt: "Leaves and immature cones",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Thuja_occidentalis.jpg",

    photo6Credit: "Eastern White-cedar range map. Public domain, via Wikimedia Commons",
    photo6Href: "https://en.wikipedia.org/wiki/Thuja_occidentalis#/media/File:Thuja_occidentalis_range_map.png",
    photo6Alt: "Eastern White-cedar range map",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Thuja_occidentalis_range_map.png/256px-Thuja_occidentalis_range_map.png",
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
    slug: "englishoak",
    background: "bg-large/bg-119.jpg",
    backgroundSmall: "bg-small/bg-119.jpg",
    description: "<p>The English Oak, Quercus robur, is a venerable and iconic tree deeply rooted in the history and landscapes of Europe. Revered for its strength and longevity, this majestic deciduous tree can reach heights of 40 to 70 feet, and in some cases, much taller in its natural habitat. It possesses a broad, spreading crown, offering a dense canopy of deep green leaves. The English Oak's leaves are distinctive, with their lobed margins and a somewhat wavy texture, turning a rich gold or russet in the fall.</p><p>Spring brings forth long, pendulous catkins, followed by the tree's trademark acorns, set in a knobby cup, which are a vital food source for wildlife. The bark of the English Oak is deeply furrowed, rugged, and dark, becoming more pronounced with age. It's not just the tree's physical stature that impresses; its wood has been a cornerstone of shipbuilding and construction for centuries, valued for its strength and durability.</p><p>In parks, estates, and larger landscapes, the English Oak is often a centerpiece, appreciated for its grandeur and the ecosystem it supports. It symbolizes endurance and strength, making it a cherished and protected species across its native range. The English Oak's ability to weather centuries makes it a living historical monument, often hosting a rich diversity of flora and fauna within its boughs.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Zapis-0454-Kolare-hrast-luznjak-spomenik-prirode_20150828_1335.jpg\">A sacred pedunculate oak tree</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Zblagojevic\">Zblagojevic</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Quercus_robur#/media/File:Zapis-0454-Kolare-hrast-luznjak-spomenik-prirode_20150828_1335.jpg",
    photo1Alt: "Large oak tree from afar",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Zapis-0454-Kolare-hrast-luznjak-spomenik-prirode_20150828_1335.jpg/256px-Zapis-0454-Kolare-hrast-luznjak-spomenik-prirode_20150828_1335.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Philbhu_P9020127_Knopper_Gall_-_Andricus_quercuscalicis.jpg\">An oak knopper gall and acorns</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Philbhu\">Philbhu</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Quercus_robur#/media/File:Philbhu_P9020127_Knopper_Gall_-_Andricus_quercuscalicis.jpg",
    photo2Alt: "Philbhu P9020127 Knopper Gall - Andricus quercuscalicis",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Philbhu_P9020127_Knopper_Gall_-_Andricus_quercuscalicis.jpg/256px-Philbhu_P9020127_Knopper_Gall_-_Andricus_quercuscalicis.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Quercus_robur_flowers_kz01.jpg\">Female flowers</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Kenraiz\">Krzysztof Ziarnek, Kenraiz</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Quercus_robur#/media/File:Quercus_robur_flowers_kz01.jpg",
    photo3Alt: "Female flowers",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Quercus_robur_flowers_kz01.jpg/256px-Quercus_robur_flowers_kz01.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Oak_bark.jpg\">English Oak bark</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Bloxgros\">Martin Vorel</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Quercus_robur#/media/File:Oak_bark.jpg",
    photo4Alt: "English Oak bark",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Oak_bark.jpg/256px-Oak_bark.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Quercus_robur.jpg\">Leaves and acorns (note the long acorn stalks)</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Quercus_robur#/media/File:Quercus_robur.jpg",
    photo5Alt: "Leaves and acorns (note the long acorn stalks)",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Quercus_robur.jpg/355px-Quercus_robur.jpg",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Baginton_oak_tree_july06.JPG\">An old pedunculate oak</a>, <a href=\"https://en.wikipedia.org/wiki/User:Snowmanradio\">Snowmanradio</a> at <a href=\"https://en.wikipedia.org/wiki/\">English Wikipedia</a>. <a href=\"https://creativecommons.org/licenses/by-sa/2.5/legalcode\" rel=\"license\">CC BY-SA 2.5</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Quercus_robur#/media/File:Baginton_oak_tree_july06.JPG",
    photo6Alt: "An old pedunculate oak",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Baginton_oak_tree_july06.JPG/256px-Baginton_oak_tree_july06.JPG",
  },
  {
    nameCommon: "European Mountain-ash",
    aka: [
      "Rowan",
      "Mountain-ash",
    ],
    order: "Rosales",
    family: "Rosaceae",
    familyCommon: "Rose",
    genus: "Sorbus",
    species: "Sorbus aucuparia",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "pinnate",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "europeanmountainash",
    background: "bg-large/bg-144.jpg",
    backgroundSmall: "bg-small/bg-144.jpg",
    description: "<p>The European Mountain-ash, Sorbus aucuparia, commonly known as the Rowan tree, is a graceful, deciduous tree native to Europe, but widely planted and naturalized in various regions. Typically reaching heights of 30 to 40 feet, it exhibits an elegant, slender profile with a smooth, gray-bark trunk and a rounded to pyramidal canopy. The tree is cherished for its compound leaves, which consist of multiple leaflets, each with serrated edges, creating a fine, feathery texture. In spring, these leaves emerge in a bright green hue, transitioning to golden-yellow tones in autumn.</p><p>In late spring, the Mountain-ash is adorned with dense clusters of creamy white flowers, attracting bees and other pollinators. By autumn, these blossoms have transformed into vibrant clusters of orange-red berries, which persist through winter, providing a striking contrast against the bare branches and a vital food source for birds. The berries, while bitter to human taste, can be made into jellies and preserves.</p><p>The European Mountain-ash is not only admired for its ornamental beauty but also for its folklore and symbolic meanings, often associated with protection and good fortune. Its manageable size and attractive features make it a popular choice for garden landscapes, particularly in urban and suburban settings, where it adds year-round interest and a touch of wilderness charm.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Rowan_tree_20081002b.jpg\">Rowan tree</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Eeno11\">Eeno11</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Sorbus_aucuparia#/media/File:Rowan_tree_20081002b.jpg",
    photo1Alt: "Rowan tree",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Rowan_tree_20081002b.jpg/256px-Rowan_tree_20081002b.jpg",

    photo2Credit: "Rowan in the Italian Alps. Public domain, via Wikimedia Commons",
    photo2Href: "https://en.wikipedia.org/wiki/Sorbus_aucuparia#/media/File:Sorbus-aucuparia.JPG",
    photo2Alt: "Rowan tree, Sorbus aucuparia",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sorbus-aucuparia.JPG/256px-Sorbus-aucuparia.JPG",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Young_trees_of_Sorbus_aucuparia.jpg\">Saplings showing the typical leaf form</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Triops1972\">Triops1972</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Sorbus_aucuparia#/media/File:Young_trees_of_Sorbus_aucuparia.jpg",
    photo3Alt: "Young trees of Sorbus aucuparia",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Young_trees_of_Sorbus_aucuparia.jpg/256px-Young_trees_of_Sorbus_aucuparia.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Sorbus_aucuparia_inflorescence_kz.jpg\">Rowan inflorescence</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Kenraiz\">Kenraiz</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Sorbus_aucuparia#/media/File:Sorbus_aucuparia_inflorescence_kz.jpg",
    photo4Alt: "Sorbus aucuparia inflorescence",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Sorbus_aucuparia_inflorescence_kz.jpg/256px-Sorbus_aucuparia_inflorescence_kz.jpg",
  },
  {
    nameCommon: "Flowering Dogwood",
    aka: ["American dogwood", "Florida dogwood", "white dogwood"],
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
    slug: "floweringdogwood",
    background: "bg-large/bg-145.jpg",
    backgroundSmall: "bg-small/bg-145.jpg",
    description: "<p>The Flowering Dogwood, Cornus florida, is a beloved small deciduous tree native to Eastern North America. Famed for its striking beauty, it typically grows to 20-30 feet in height, forming a low, spreading canopy that becomes covered in blossoms in spring. The tree's most striking feature is its large, showy bracts, which are commonly mistaken for petals. These bracts are typically white, but can also be pink or red, encircling the small, greenish-yellow flowers at their center.</p><p>Following the spring bloom, the Flowering Dogwood bears bright red fruits that are attractive to birds and wildlife. Its leaves are oval to heart-shaped, turning a vibrant red-purple in the fall, adding another layer of seasonal interest. The bark of the Flowering Dogwood is also distinctive, breaking into small, block-like plates, giving it a somewhat mosaic-like appearance.</p><p>Admired for its elegant form and stunning floral display, the Flowering Dogwood is a popular choice in landscaping, often planted as a specimen or accent tree. Its moderate size and stunning beauty throughout the seasons make it a favorite for enhancing residential and public spaces alike.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Cornus_florida_Arkansas.jpg\">Flowering dogwood in Spring</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Eric_in_SF\">Eric Hunt</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Cornus_florida#/media/File:Cornus_florida_Arkansas.jpg",
    photo1Alt: "Flowering dogwood in Spring",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Cornus_florida_Arkansas.jpg/256px-Cornus_florida_Arkansas.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Cornus_florida_in_Eastwoodhill_Arboretum_(3).jpg\">Leaf</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Tournasol7\">Krzysztof Golik</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Cornus_florida#/media/File:Cornus_florida_in_Eastwoodhill_Arboretum_(3).jpg",
    photo2Alt: "Cornus florida in Eastwoodhill Arboretum",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Cornus_florida_in_Eastwoodhill_Arboretum_%283%29.jpg/256px-Cornus_florida_in_Eastwoodhill_Arboretum_%283%29.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Flowering_Dogwood_Cornus_florida_Flower_High_DoF_Cropped.JPG\">Cornus florida inflorescence, showing four large white bracts and central flower cluster.</a>, Derek Ramsey (<a href=\"https://en.wikipedia.org/wiki/User:Ram-Man\">Ram-Man</a>), <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Cornus_florida#/media/File:Flowering_Dogwood_Cornus_florida_Flower_High_DoF_Cropped.JPG",
    photo3Alt: "Flowering Dogwood Cornus florida Flower",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flowering_Dogwood_Cornus_florida_Flower_High_DoF_Cropped.JPG/256px-Flowering_Dogwood_Cornus_florida_Flower_High_DoF_Cropped.JPG",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Benthamidia_florida8.jpg\">Fruits</a>, KENPEI, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Cornus_florida#/media/File:Benthamidia_florida8.jpg",
    photo4Alt: "Fruits",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Benthamidia_florida8.jpg/256px-Benthamidia_florida8.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Dogwood_flower_closeup_20080427_141400_1_crop_sharp.png\">Close up of a flower cluster showing the four pale green petals on each flower.</a>, <a href=\"https://commons.wikimedia.org/wiki/User:EnLorax\">G. Edward Johnson</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Cornus_florida#/media/File:Dogwood_flower_closeup_20080427_141400_1_crop_sharp.png",
    photo5Alt: "Close up of a flower cluster showing the four pale green petals on each flower.",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Dogwood_flower_closeup_20080427_141400_1_crop_sharp.png",

    photo6Credit: "Flowering Dogwood range map. Public domain, via Wikimedia Commons",
    photo6Href: "https://en.wikipedia.org/wiki/Cornus_florida#/media/File:Cornus_florida_range_map_1.png",
    photo6Alt: "Flowering Dogwood range map",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Cornus_florida_range_map_1.png/256px-Cornus_florida_range_map_1.png",

    photo7Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Flowering_Dogwood_Cornus_florida_Bark_2000px.jpg\">Bark</a>, Derek Ramsey (<a href=\"https://en.wikipedia.org/wiki/User:Ram-Man\">Ram-Man</a>), <a href=\"https://creativecommons.org/licenses/by-sa/2.5/legalcode\" rel=\"license\">CC BY-SA 2.5</a>",
    photo7Href: "https://en.wikipedia.org/wiki/Cornus_florida#/media/File:Flowering_Dogwood_Cornus_florida_Bark_2000px.jpg",
    photo7Alt: "Bark",
    photo7Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flowering_Dogwood_Cornus_florida_Bark_2000px.jpg/256px-Flowering_Dogwood_Cornus_florida_Bark_2000px.jpg",
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
    slug: "ginkgo",
    background: "bg-large/bg-147.jpg",
    backgroundSmall: "bg-small/bg-147.jpg",
    description: "<p>The Ginkgo tree, Ginkgo biloba, often hailed as a living fossil, is a unique species with no close living relatives. Originating from China, it has been widely cultivated for millennia and revered for both its historical significance and medicinal properties. Ginkgos can reach up to 80 feet in height, characterized by their tall, straight trunks and irregular, often angular crowns. The bark is light grey and deeply furrowed, adding a rugged texture to the tree's appearance.</p><p>Its fan-shaped leaves are one of its most distinctive features, turning a brilliant yellow in the fall, creating a stunning display before they drop almost simultaneously to form a golden carpet beneath the tree. The Ginkgo is dioecious, meaning it has separate male and female trees. The female trees produce small, plum-like seeds with a soft, fruit-like covering that emits an unpleasant odor when decayed, making male trees a more popular choice for urban planting.</p><p>The Ginkgo's exceptional tolerance to pollution and pests, along with its resilience in urban environments, makes it a favored ornamental tree for city streets and public gardens. Its ancient lineage and striking foliage render the Ginkgo a symbol of endurance and vitality, capturing the fascination of botanists and tree lovers worldwide.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/User:Ginkgotree\">Ginkgo tree.</a> <a href=\"https://commons.wikimedia.org/wiki/User:Cayambe\">Cayambe</a> derivative work: <a href=\"https://commons.wikimedia.org/wiki/File:GINKGOBAUM-2.jpg\">ginkobaum-2</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Ginkgo_biloba#/media/File:GINKGOBAUM-2.jpg",
    photo1Alt: "Ginkgo tree",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/GINKGOBAUM-2.jpg/256px-GINKGOBAUM-2.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Ginkgo_Biloba_Leaves_-_Black_Background.jpg\">Ginkgo Biloba Leaves.</a>, James Field (<a href=\"https://commons.wikimedia.org/wiki/User:Jame\">Jame</a>), <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Ginkgo_biloba#/media/File:Ginkgo_Biloba_Leaves_-_Black_Background.jpg",
    photo2Alt: "Ginkgo Biloba Leaves - Black Background",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ginkgo_Biloba_Leaves_-_Black_Background.jpg/256px-Ginkgo_Biloba_Leaves_-_Black_Background.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Ginkgo_biloba._filare.jpg\">Ginkgo in autumn in Florence (Italy)</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Giaccai\">Susanna Giaccai</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Ginkgo_biloba#/media/File:Ginkgo_biloba._filare.jpg",
    photo3Alt: "Ginkgo in autumn in Florence (Italy)",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Ginkgo_biloba._filare.jpg/256px-Ginkgo_biloba._filare.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Gingko_biloba_JPG2b.jpg\">Gingko biloba trunks</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Jean-Pol_GRANDMONT\">Jean-Pol grandmont</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Ginkgo_biloba#/media/File:Gingko_biloba_JPG2b.jpg",
    photo4Alt: "Gingko biloba trunks",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Gingko_biloba_JPG2b.jpg/256px-Gingko_biloba_JPG2b.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Ginkgo_biloba_male_flower.jpg\">Ginkgo biloba male flower</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Branko_M._Begovi%C4%87_Bego_Ginkgob\">Ginkgob</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Ginkgo_biloba#/media/File:Ginkgo_biloba_male_flower.jpg",
    photo5Alt: "Ginkgo biloba male flower.",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Ginkgo_biloba_male_flower.jpg/256px-Ginkgo_biloba_male_flower.jpg",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Ginkgo_biloba_female_flower.jpg\">Ginkgo biloba female flower</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Ginkgob\">Ginkgob</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Ginkgo_biloba#/media/File:Ginkgo_biloba_female_flower.jpg",
    photo6Alt: "Ginkgo biloba female strobilus.",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Ginkgo_biloba_female_flower.jpg/256px-Ginkgo_biloba_female_flower.jpg",

    photo7Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Ginkgo_biloba_007.jpg\">Ginkgo tree bearing ripe, fruit-like sarcotestae.</a> <a href=\"https://commons.wikimedia.org/wiki/User:Llez\">H. Zell</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo7Href: "https://en.wikipedia.org/wiki/Ginkgo_biloba#/media/File:Ginkgo_biloba_007.jpg",
    photo7Alt: "Close-up of Ginkgo tree bearing ripe, fruit-like sarcotestae",
    photo7Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Ginkgo_biloba_007.jpg/256px-Ginkgo_biloba_007.jpg",

    photo8Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Ginkgo_biloba_MacAbee_BC.jpg\">Ginkgo biloba leaf from the Eocene epoch from the McAbee fossil beds.</a> <a href=\"https://commons.wikimedia.org/wiki/User:SNP\">SNP</a>; <a href=\"https://commons.wikimedia.org/wiki/User:Tangopaso\">tangopaso</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo8Href: "https://en.wikipedia.org/wiki/Ginkgo_biloba#/media/File:Ginkgo_biloba_MacAbee_BC.jpg",
    photo8Alt: "Ginkgo biloba leaf from the Eocene epoch from the McAbee fossil beds, BC, Canada",
    photo8Src: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Ginkgo_biloba_MacAbee_BC.jpg",
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
    slug: "graybirch",
    background: "bg-large/bg-148.jpg",
    backgroundSmall: "bg-small/bg-148.jpg",
    description: "<p>The Gray Birch, Betula populifolia, is a slender, fast-growing deciduous tree native to the northeastern United States. Reaching up to 20-30 feet in height, it's known for its narrow, upright form and delicate branching pattern, making it a favored choice in both naturalized and residential landscapes. This tree is particularly noted for its smooth, gray-white bark, which peels off in papery strips, adding visual interest throughout the year. Unlike the more commonly known Paper Birch, the Gray Birch's bark does not exfoliate as extensively.</p><p>The leaves of the Gray Birch are triangular and somewhat resembling those of a poplar, hence its species name, 'populifolia.' They are bright green and glossy, turning a clear yellow in the fall. In the spring, the tree produces catkins, which are followed by small winged seeds that disperse in the wind. Though short-lived compared to other birches, typically surviving around 30 years, it's an important pioneer species that quickly colonizes open areas, contributing to the ecological succession process.</p><p>With its modest size and graceful appearance, the Gray Birch is often used for ornamental planting, particularly effective in groupings or as a focal point in smaller gardens. It thrives in a variety of conditions but prefers moist, well-drained soils and full sun to partial shade. Its ability to withstand harsh conditions, including poor soils and wind, makes it a resilient and adaptable tree for various landscapes.</p>",

    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Gray_birch_against_gray_sky.jpg\">Gray birches in winter</a>, © <a href=\"http://www.inmygarden.org/\">Sue Sweeney</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Betula_populifolia#/media/File:Gray_birch_against_gray_sky.jpg",
    photo1Alt: "Gray birch against gray sky",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/0/04/Gray_birch_against_gray_sky.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Betula_populifolia_leaves.jpg\">The triangular leaves of the Gray Birch.</a> <a href=\"https://commons.wikimedia.org/wiki/User:Richtid\">Richtid</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Betula_populifolia#/media/File:Betula_populifolia_leaves.jpg",
    photo3Alt: "The triangular leaves of the Gray Birch.",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Betula_populifolia_leaves.jpg/256px-Betula_populifolia_leaves.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Betula_populifolia_bark.jpg\">Gray Birch bark with its signature black chevron patches.</a> Charlie Hohn, <a href=\"https://creativecommons.org/licenses/by/4.0/legalcode\" rel=\"license\">CC BY 4.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Betula_populifolia#/media/File:Betula_populifolia_bark.jpg",
    photo2Alt: "Betula populifolia bark",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Betula_populifolia_bark.jpg/256px-Betula_populifolia_bark.jpg",

    photo4Credit: "Gray Birch range map. Public domain, via Wikimedia Commons",
    photo4Href: "https://en.wikipedia.org/wiki/Betula_populifolia#/media/File:Betula_populifolia_range_map_2.png",
    photo4Alt: "Gray Birch range map",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Betula_populifolia_range_map_2.png/256px-Betula_populifolia_range_map_2.png",
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
    compoundStructure: "pinnate",
    leafAttachment: "opposite",
    fallColor: [
      "yellow"
    ],
    slug: "greenash",
    background: "bg-large/bg-149.jpg",
    backgroundSmall: "bg-small/bg-149.jpg",
    description: "<p>The Green Ash, Fraxinus pennsylvanica, is a hardy and adaptable deciduous tree, widely distributed across eastern and central North America. It typically reaches heights of 50 to 70 feet, characterized by a straight, tall trunk and a rounded or pyramidal canopy. This species is especially valued for its ability to thrive in a variety of environments, including wet, swampy areas as well as urban settings, making it a popular choice for street and landscape plantings.</p><p>The leaves of the Green Ash are pinnately compound, featuring 5 to 9 leaflets with a bright green color that turns to an attractive yellow in the fall. In spring, the tree produces small purple flowers, followed by the development of winged samaras, commonly known as keys. These seeds are particularly noticeable as they whirl to the ground in the autumn.</p><p>While the Green Ash is known for its toughness and adaptability, it has faced significant challenges due to the invasive Emerald Ash Borer, which has devastated ash populations. Despite these challenges, the Green Ash continues to be appreciated for its aesthetic appeal and its utility in providing shade and habitat in both natural and urban areas.</p>",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Fraxinus_pensylvanica_a1.jpg\">Leaves and fruit</a>, Jerzy Opioła, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Fraxinus_pennsylvanica#/media/File:Fraxinus_pensylvanica_a1.jpg",
    photo5Alt: "Leaves and fruit",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Fraxinus_pensylvanica_a1.jpg/256px-Fraxinus_pensylvanica_a1.jpg",

    photo1Credit: "Green Ash leaf. Public domain, via Wikimedia Commons",
    photo1Href: "https://en.wikipedia.org/wiki/Fraxinus_pennsylvanica#/media/File:Fraxinus_pennsylvanica.jpg",
    photo1Alt: "Green Ash leaf",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Fraxinus_pennsylvanica.jpg/319px-Fraxinus_pennsylvanica.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Пенсилвански_ясен_-_клонка.jpg\">Winter twig of Green Ash. Green ash can usually be distinguished from white ash by its D-shaped leaf scars.</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Utar_Sigmal\">Dimìtar Nàydenov</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Fraxinus_pennsylvanica#/media/File:%D0%9F%D0%B5%D0%BD%D1%81%D0%B8%D0%BB%D0%B2%D0%B0%D0%BD%D1%81%D0%BA%D0%B8_%D1%8F%D1%81%D0%B5%D0%BD_-_%D0%BA%D0%BB%D0%BE%D0%BD%D0%BA%D0%B0.jpg",
    photo2Alt: "Winter twig of Green Ash. Green ash can usually be distinguished from white ash by its D-shaped leaf scars.",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/%D0%9F%D0%B5%D0%BD%D1%81%D0%B8%D0%BB%D0%B2%D0%B0%D0%BD%D1%81%D0%BA%D0%B8_%D1%8F%D1%81%D0%B5%D0%BD_-_%D0%BA%D0%BB%D0%BE%D0%BD%D0%BA%D0%B0.jpg/256px-%D0%9F%D0%B5%D0%BD%D1%81%D0%B8%D0%BB%D0%B2%D0%B0%D0%BD%D1%81%D0%BA%D0%B8_%D1%8F%D1%81%D0%B5%D0%BD_-_%D0%BA%D0%BB%D0%BE%D0%BD%D0%BA%D0%B0.jpg",

    photo3Credit: "Green Ash range map. Public domain, via Wikimedia Commons",
    photo3Href: "https://en.wikipedia.org/wiki/Fraxinus_pennsylvanica#/media/File:Fraxinus_pennsylvanica_range_map_3.png",
    photo3Alt: "Green Ash range map",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Fraxinus_pennsylvanica_range_map_3.png/256px-Fraxinus_pennsylvanica_range_map_3.png",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2014-10-29_13_12_58_Green_Ash_foliage_during_autumn_coloration_in_Ewing,_New_Jersey.JPG\">Autumn leaf color</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Fraxinus_pennsylvanica#/media/File:2014-10-29_13_12_58_Green_Ash_foliage_during_autumn_coloration_in_Ewing,_New_Jersey.JPG",
    photo4Alt: "Autumn leaf color",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/2014-10-29_13_12_58_Green_Ash_foliage_during_autumn_coloration_in_Ewing%2C_New_Jersey.JPG/256px-2014-10-29_13_12_58_Green_Ash_foliage_during_autumn_coloration_in_Ewing%2C_New_Jersey.JPG",
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
    // species: "",
    type: "deciduous",
    leafType: "simple",
    leafAttachment: "alternate",
    fallColor: [
      "red",
      "orange"
    ],
    slug: "hawthorn",
    background: "bg-large/bg-150.jpg",
    backgroundSmall: "bg-small/bg-150.jpg",
    description: "<p>The Hawthorn tree, belonging to the genus Crataegus, is a group of small, deciduous trees or shrubs known for their delicate, ornamental beauty and hardiness. Common in temperate regions of the Northern Hemisphere, Hawthorns typically grow to 15-30 feet tall. They are often appreciated for their dense, thorny branches, which make them excellent choices for privacy hedges or natural barriers.</p><p>In late spring, Hawthorns burst into a profusion of fragrant white or pink flowers, which are a magnet for pollinators. These blossoms give way to small, apple-like fruits, known as haws, ranging in color from red to blue-black. The fruits persist into winter, providing a vital food source for birds and wildlife. The leaves of the Hawthorn are generally lobed and serrated, adding a textured green backdrop to the tree's seasonal displays.</p><p>Beyond their aesthetic and ecological value, Hawthorns have been used in herbal medicine for centuries, particularly for heart-related conditions. With their compact size, showy flowers, and colorful fruit, Hawthorns are a charming addition to gardens, parks, and public spaces, offering year-round interest and a connection to folklore and tradition.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Common_hawthorn.jpg\">Crataegus monogyna</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Crataegus#/media/File:Common_hawthorn.jpg",
    photo1Alt: "Hawthorn",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Common_hawthorn.jpg",

    photo2Credit: "Fruit of four different species of Crataegus. Public domain, via Wikimedia Commons",
    photo2Href: "https://en.wikipedia.org/wiki/Crataegus#/media/File:Crataegus,_various_species,_fruit.jpg",
    photo2Alt: "Fruit of four different species of Crataegus",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Crataegus%2C_various_species%2C_fruit.jpg/256px-Crataegus%2C_various_species%2C_fruit.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:(MHNT)_Crataegus_monogyna_-_flowers_and_buds.jpg\">Crataegus monogyna - flowers and buds</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Archaeodontosaurus\">Didier Descouens</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Crataegus#/media/File:(MHNT)_Crataegus_monogyna_-_flowers_and_buds.jpg",
    photo3Alt: "Crataegus monogyna - flowers and buds",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/%28MHNT%29_Crataegus_monogyna_-_flowers_and_buds.jpg/256px-%28MHNT%29_Crataegus_monogyna_-_flowers_and_buds.jpg",
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
    compoundStructure: "twice pinnate",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "honeylocust",
    background: "bg-large/bg-151.jpg",
  backgroundSmall: "bg-small/bg-151.jpg",
    description: "<p>The Honey Locust, Gleditsia triacanthos, is a deciduous tree renowned for its unique appearance and adaptability. Native to central North America, it can grow to a height of 60 to 80 feet, featuring a rapid growth rate and a spreading, open canopy that provides light, dappled shade. One of the most distinctive features of the Honey Locust is its long, twisted, and often branched thorns, which can grow up to several inches long on both its trunk and branches.</p><p>The tree's leaves are pinnately or bipinnately compound, creating a delicate, fern-like texture. In the fall, these leaves turn a bright, clear yellow, offering a beautiful contrast to the landscape. Honey Locusts also produce long, flat, and twisted seed pods that mature in the fall. These pods contain a sweet, edible pulp, which was historically used as a food source by Native Americans and early settlers.</p><p>Highly tolerant of different environmental conditions, including poor soils and urban pollution, the Honey Locust is a popular choice in urban landscaping. Its wood is strong and durable, making it useful for furniture and flooring. Despite its thorns, which can be absent in thornless cultivated varieties, the Honey Locust is valued for its beauty, shade, and environmental resilience.</p>",

    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2014-10-11_12_49_16_Honey_Locust_foliage_during_autumn_in_Elko,_Nevada.JPG\">Honey Locust foliage during autumn</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Honey_locust#/media/File:2014-10-11_12_49_16_Honey_Locust_foliage_during_autumn_in_Elko,_Nevada.JPG",
    photo1Alt: "Honey Locust foliage during autumn in Elko, Nevada",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/2014-10-11_12_49_16_Honey_Locust_foliage_during_autumn_in_Elko%2C_Nevada.JPG/256px-2014-10-11_12_49_16_Honey_Locust_foliage_during_autumn_in_Elko%2C_Nevada.JPG",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Honeylocust_fruits.jpg\">Honey Locust fruits</a>, <a href=\"https://commons.wikimedia.org/wiki/User:FUchesco\">FUchesco</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Honey_locust#/media/File:Honeylocust_fruits.jpg",
    photo2Alt: "Honeylocust fruits",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Honeylocust_fruits.jpg/256px-Honeylocust_fruits.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:HoneyLocustThorn.JPG\">Honey Locust Thorn</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Greg5030\">Greg Hume</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Honey_locust#/media/File:HoneyLocustThorn.JPG",
    photo3Alt: "Honey Locust Thorn",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/HoneyLocustThorn.JPG/256px-HoneyLocustThorn.JPG",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Gleditsia_triacanthos_Maryhill_Museum_01.jpg\">A medium (~12-15 foot tall) Honey Locust.</a> <a href=\"https://commons.wikimedia.org/wiki/User:Kevmin\">Kevmin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Honey_locust#/media/File:Gleditsia_triacanthos_Maryhill_Museum_01.jpg",
    photo4Alt: "Gleditsia triacanthos Maryhill Museum",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Gleditsia_triacanthos_Maryhill_Museum_01.jpg/256px-Gleditsia_triacanthos_Maryhill_Museum_01.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Gleditsia_triacanthos_Flower_HW1.jpg\">Honey Locust flowers</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Hannes_wilms\">Hannes wilms</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Honey_locust#/media/File:Gleditsia_triacanthos_Flower_HW1.jpg",
    photo5Alt: "Gleditsia triacanthos Flower",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Gleditsia_triacanthos_Flower_HW1.jpg/256px-Gleditsia_triacanthos_Flower_HW1.jpg",

    photo6Credit: "Honey Locust range map. Public domain, via Wikimedia Commons",
    photo6Href: "https://en.wikipedia.org/wiki/Honey_locust#/media/File:Gleditsia_triacanthos_range_map.jpg",
    photo6Alt: "Honey Locust range map",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gleditsia_triacanthos_range_map.jpg/256px-Gleditsia_triacanthos_range_map.jpg",
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
    slug: "horsechestnut",
    background: "bg-large/bg-152.jpg",
    backgroundSmall: "bg-small/bg-152.jpg",
    description: "<p>The Horsechestnut tree, Aesculus hippocastanum, is a large, deciduous hardwood tree renowned for its striking appearance and ornamental value. Originating from the Balkans, it has become a beloved feature in temperate regions worldwide. Typically reaching heights of 50 to 75 feet, the Horsechestnut forms a broad, domed crown, making it a prominent feature in the landscape. Its bark is smooth and gray when young, becoming darker and developing scaly ridges with age.</p><p>In spring, the tree puts on a spectacular show with its upright clusters of white flowers, each marked with a splash of pink or yellow. These distinctive flowers, known as 'candles,' make it a favorite in parks and large gardens. The foliage consists of large, palmate compound leaves that provide dense shade. In autumn, the tree produces its namesake horsechestnuts: glossy, brown nuts encased in a green, spiky husk. While these nuts are inedible for humans, they are often collected for decorative purposes or traditional games.</p><p>The Horsechestnut is appreciated not only for its aesthetic qualities but also for its medicinal properties, particularly in the treatment of varicose veins and circulation problems. Its grandeur and seasonal beauty make it a captivating choice for landscape design, contributing to its widespread planting in urban and suburban settings.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Horse-chestnut_800.jpg\">Horsechestnut tree</a>, <a href=\"https://en.wikipedia.org/wiki/User:Sannse\">Sannse</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Aesculus_hippocastanum#/media/File:Horse-chestnut_800.jpg",
    photo1Alt: "Horsechestnut tree",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Horse-chestnut_800.jpg/256px-Horse-chestnut_800.jpg",

    photo2Credit: "Inflorescence. W.carter, CC0, via Wikimedia Commons",
    photo2Href: "https://en.wikipedia.org/wiki/Aesculus_hippocastanum#/media/File:Horse_chestnut_flowers_in_Brodalen_4.jpg",
    photo2Alt: "Inflorescence",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Horse_chestnut_flowers_in_Brodalen_4.jpg/256px-Horse_chestnut_flowers_in_Brodalen_4.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Illustration_Aesculus_hippocastanum0_clean.jpg\">Botanical illustration</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Kilom691\">User:Kilom691</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Aesculus_hippocastanum#/media/File:Illustration_Aesculus_hippocastanum0_clean.jpg",
    photo3Alt: "Botanical illustration",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Illustration_Aesculus_hippocastanum0_clean.jpg/256px-Illustration_Aesculus_hippocastanum0_clean.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Aesculus_hippocastanum_fruit.jpg\">A selection of fresh conkers</a>, <a href=\"https://en.wikipedia.org/wiki/User:Solipsist\">Solipsist</a>, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/legalcode\" rel=\"license\">CC BY-SA 2.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Aesculus_hippocastanum#/media/File:Aesculus_hippocastanum_fruit.jpg",
    photo4Alt: "A selection of fresh conkers",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Aesculus_hippocastanum_fruit.jpg/256px-Aesculus_hippocastanum_fruit.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Aesculus_hippocastanum-1.jpg\">Leaves and trunk</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Alvesgaspar\">Alvesgaspar</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Aesculus_hippocastanum#/media/File:Aesculus_hippocastanum-1.jpg",
    photo5Alt: "Aesculus hippocastanum",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Aesculus_hippocastanum-1.jpg/256px-Aesculus_hippocastanum-1.jpg",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2010.05.09_Horse_chestnut_blossom,_Kyiv,_Ukraine_001c.jpg\">Close-up of flowers</a>, <a href=\"https://commons.wikimedia.org/wiki/User:WBeckon\">William N. Beckon</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Aesculus_hippocastanum#/media/File:2010.05.09_Horse_chestnut_blossom,_Kyiv,_Ukraine_001c.jpg",
    photo6Alt: "Close-up of flowers",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/2010.05.09_Horse_chestnut_blossom%2C_Kyiv%2C_Ukraine_001c.jpg/256px-2010.05.09_Horse_chestnut_blossom%2C_Kyiv%2C_Ukraine_001c.jpg",

    photo7Credit: "Horsechestnut trunk. Public domain, via Wikimedia Commons",
    photo7Href: "https://en.wikipedia.org/wiki/Aesculus_hippocastanum#/media/File:AesculusHippocastanumTrunk.jpg",
    photo7Alt: "Horsechestnut trunk",
    photo7Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/AesculusHippocastanumTrunk.jpg/256px-AesculusHippocastanumTrunk.jpg", 
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
    slug: "juneberry", 
    description: "<p>The Juneberry, Amelanchier arborea, also known as the Downy Serviceberry, is a small, deciduous tree or large shrub native to North America. It typically grows to about 15-25 feet tall and is cherished for its multi-seasonal interest in landscapes. In early spring, the Juneberry is one of the first trees to bloom, showcasing an abundance of delicate, star-shaped, white flowers that create a striking contrast against the bare branches.</p><p>Following the bloom, it produces small, round, and edible berries that ripen to a dark purple in early summer, giving the tree its common name. These berries are favored by both wildlife and humans, often used in jams and pies. The leaves of the Juneberry are oval and finely toothed, starting as a soft green, then turning to a rich orange-red in the fall, adding yet another layer of visual interest.</p><p>The bark of the Juneberry is smooth and gray, adding winter interest to the landscape. Due to its modest size and ornamental appeal, the Juneberry is an excellent choice for small gardens, naturalized areas, and as an understory tree in larger landscapes. Its adaptability to a range of soil types and conditions, combined with its beauty and utility, make it a valuable addition to diverse planting schemes.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Amelanchier_arborea_leaves.JPG\">Juneberry leaves</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Dcrjsr\">Dcrjsr</a>, <a href=\"https://creativecommons.org/licenses/by/3.0/legalcode\" rel=\"license\">CC BY 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Amelanchier_arborea#/media/File:Amelanchier_arborea_leaves.JPG",
    photo1Alt: "Juneberry leaves",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Amelanchier_arborea_leaves.JPG/256px-Amelanchier_arborea_leaves.JPG",
 
    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Amelanchier_arborea_sarvis_close.jpg\">Juneberry flower</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Dcrjsr\">Dcrjsr</a>, <a href=\"https://creativecommons.org/licenses/by/3.0/legalcode\" rel=\"license\">CC BY 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Amelanchier_arborea#/media/File:Amelanchier_arborea_sarvis_close.jpg",
    photo2Alt: "Juneberry flower",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Amelanchier_arborea_sarvis_close.jpg/256px-Amelanchier_arborea_sarvis_close.jpg",

    photo3Credit: "Public domain, via Wikimedia Commons",
    photo3Href: "https://en.wikipedia.org/wiki/Amelanchier_arborea#/media/File:Amelanchier_arborea_range_map_1.png",
    photo3Alt: "Amelanchier arborea range map",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Amelanchier_arborea_range_map_1.png/256px-Amelanchier_arborea_range_map_1.png",
  },
  {
    nameCommon: "Kentucky Coffeetree",
    aka: ["Kentucky mahogany"],
    order: "Fabales",
    family: "Fabaceae",
    familyCommon: "legume, pea or bean",
    subFamily: "Caesalpinioideae",
    genus: "Gymnocladus",
    species: "Gymnocladus dioicus",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "twice pinnate",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "kentuckycoffeetree",
    background: "bg-large/bg-170.jpg",
    backgroundSmall: "bg-small/bg-170.jpg",
    description: "<p>The Kentucky Coffeetree, Gymnocladus dioicus, is a unique and robust deciduous tree native to the central United States. It typically reaches heights of 60 to 75 feet, with a spread almost as wide. The tree's most striking feature is its bold, architectural form; during winter, its thick, contorted branches create a striking silhouette against the sky. The bark is rough and scaly, adding further interest to the tree's appearance.</p><p>The Kentucky Coffeetree's leaves are bipinnately compound, among the largest of any native tree in North America, turning a bright yellow in the fall. In late spring to early summer, the tree produces clusters of greenish-white flowers, which are particularly noticeable on female trees. Following flowering, the female trees bear large, leathery seed pods, which resemble giant beans and contain hard seeds traditionally roasted as a coffee substitute, hence the tree's name.</p><p>Known for its tolerance to urban conditions, including pollution and various soil types, the Kentucky Coffeetree is an excellent choice for city planting. Its unique appearance, from leaf-out to leaf-drop, makes it a standout specimen in parks, large yards, and public spaces. Despite its slow growth, the tree's strong structure and striking form make it a worthwhile long-term addition to any landscape.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Gymnocladus_dioicus.JPG\">Kentucky Coffeetree</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Bruce_Marlin\">Bruce Marlin</a>, <a href=\"https://creativecommons.org/licenses/by/3.0/legalcode\" rel=\"license\">CC BY 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Kentucky_coffeetree#/media/File:Gymnocladus_dioicus.JPG",
    photo1Alt: "Kentucky Coffeetree",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Gymnocladus_dioicus.JPG/256px-Gymnocladus_dioicus.JPG",

    photo2Credit: "Fruit. Public domain, via Wikimedia Commons",
    photo2Href: "https://en.wikipedia.org/wiki/Kentucky_coffeetree#/media/File:Gymnocladus-dioicus.jpg",
    photo2Alt: "Fruit",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Gymnocladus-dioicus.jpg/256px-Gymnocladus-dioicus.jpg",

    photo3Credit: "Illustration of flowers. Public domain, via Wikimedia Commons",
    photo3Href: "https://en.wikipedia.org/wiki/Kentucky_coffeetree#/media/File:Kentucky_coffee-tree_flowers.png",
    photo3Alt: "Illustration of flowers",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/7/77/Kentucky_coffee-tree_flowers.png",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Kentucky_Coffee-tree_Gymnocladus_dioicus_3264px.jpg\">Bark of the Kentucky coffeetree. </a>Photo (c)2007 Derek Ramsey (<a href=\"https://en.wikipedia.org/wiki/User:Ram-Man\">Ram-Man</a>), <a href=\"https://creativecommons.org/licenses/by-sa/2.5/legalcode\" rel=\"license\">CC BY-SA 2.5</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Kentucky_coffeetree#/media/File:Kentucky_Coffee-tree_Gymnocladus_dioicus_3264px.jpg",
    photo4Alt: "Kentucky Coffee-tree Gymnocladus dioicus",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Kentucky_Coffee-tree_Gymnocladus_dioicus_3264px.jpg/256px-Kentucky_Coffee-tree_Gymnocladus_dioicus_3264px.jpg",

    photo5Credit: "Kentucky Coffeetree range map. Public domain, via Wikimedia Commons",
    photo5Href: "https://en.wikipedia.org/wiki/Kentucky_coffeetree#/media/File:Gymnocladus_dioicus_range_map_4.png",
    photo5Alt: "Kentucky Coffeetree range map",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Gymnocladus_dioicus_range_map_4.png/256px-Gymnocladus_dioicus_range_map_4.png",
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
    slug: "largetoothaspen",
    background: "bg-large/bg-155.jpg",
    backgroundSmall: "bg-small/bg-155.jpg",
    description: "<p>The Large-tooth Aspen, Populus grandidentata, is a deciduous tree native to North America, known for its rapid growth and trembling foliage. It typically attains heights of 50 to 70 feet, characterized by a straight, slender trunk and a rounded, open canopy. The tree's bark is smooth and pale when young, becoming darker and deeply furrowed with age.</p><p>As suggested by its name, the Large-tooth Aspen's leaves are its defining feature, notable for their large, coarse teeth along the margins. These leaves are bright green and shimmer in the wind due to their flattened petioles, a characteristic shared with its relative, the Quaking Aspen. In autumn, the foliage turns a brilliant yellow, providing a striking display. The tree is also known for its ability to rapidly colonize open areas, thanks to its prolific seeding and root suckers, playing a crucial role in ecological succession.</p><p>Often found in moist, sandy, or well-drained soils, the Large-tooth Aspen is frequently used for pulp and paper production. In natural settings, it provides habitat and food for wildlife. Its quick growth and vibrant fall color make it a popular choice for reforestation projects and naturalized landscaping, although its aggressive root system can be problematic in urban or small garden settings.</p>",
    photo1Credit: "Leaves of Large-tooth Aspen. Public domain, via Wikimedia Commons",
    photo1Href: "https://en.wikipedia.org/wiki/Populus_grandidentata#/media/File:Populus_grandidentata.JPG",
    photo1Alt: "Leaves of Large-tooth Aspen",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Populus_grandidentata.JPG/256px-Populus_grandidentata.JPG",
  
    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Large-toothed_aspen_leaf_(Grasett_Twp).JPG\">Large-toothed aspen leaf</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Fungus_Guy\">Fungus Guy</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Populus_grandidentata#/media/File:Large-toothed_aspen_leaf_(Grasett_Twp).JPG",
    photo2Alt: "Large-toothed aspen leaf",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Large-toothed_aspen_leaf_%28Grasett_Twp%29.JPG/256px-Large-toothed_aspen_leaf_%28Grasett_Twp%29.JPG",

    photo3Credit: "Large-tooth Aspen. Public domain, via Wikimedia Commons",
    photo3Href: "https://en.wikipedia.org/wiki/Populus_grandidentata#/media/File:Populus_grandidentata_range_map_2.png",
    photo3Alt: "Large-tooth Aspen range map",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Populus_grandidentata_range_map_2.png/256px-Populus_grandidentata_range_map_2.png",
  },
  {
    nameCommon: "Mockernut Hickory",
    aka: [
      "White Hickory",
      "Mockernut",
      "Whiteheart Hickory"
    ],
    order: "Fagales",
    family: "Juglandaceae",
    familyCommon: "Walnut",
    genus: "Carya",
    species: "Carya tomentosa",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "pinnate",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "mockernuthickory",
    background: "bg-large/bg-156.jpg",
    backgroundSmall: "bg-small/bg-156.jpg",
    description: "<p>The Mockernut Hickory, Carya tomentosa, is a tall and stately hardwood tree native to the eastern United States. Growing to heights of 50 to 80 feet, it boasts a straight trunk and a rounded canopy that provides dense shade. The tree is named for its large, hard-shelled nuts, which are difficult to crack but offer a sweet reward, hence the term \"mockernut.\" These nuts are not only favored by humans but are also an important food source for wildlife.</p><p>The leaves of the Mockernut Hickory are pinnately compound, typically featuring 7 to 9 leaflets with a rich green color, turning to golden hues in the fall. Its bark is gray and deeply furrowed, developing a rugged texture as the tree matures. In spring, the tree produces small, greenish male and female flowers on the same tree, followed by the fruit.</p><p>Valued for its strong, resilient wood, the Mockernut Hickory is often used in tool handles and other applications requiring durable timber. Its ability to grow in a variety of soil types, coupled with its aesthetic appeal and the provision of shade, makes it a respected and enduring feature in larger landscapes and forested areas.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Carya_tomentosa_12zz.jpg\">Mockernut Hickory tree. </a>Photo by David J. Stang, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Carya_tomentosa#/media/File:Carya_tomentosa_12zz.jpg",
    photo1Alt: "White Hickory tree",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Carya_tomentosa_12zz.jpg/256px-Carya_tomentosa_12zz.jpg",

    photo2Credit: "Mockernut Hickory nuts. Public domain, via Wikimedia Commons",
    photo2Href: "https://en.wikipedia.org/wiki/Carya_tomentosa#/media/File:Carya_tomentosa_nuts_USDA.jpg",
    photo2Alt: "White Hickory nuts",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Carya_tomentosa_nuts_USDA.jpg/256px-Carya_tomentosa_nuts_USDA.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Carya_tomentosa_female_flower.jpg\">Female flower</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Akgarb\">William (Ned) Friedman</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Carya_tomentosa#/media/File:Carya_tomentosa_female_flower.jpg",
    photo3Alt: "Female flower",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Carya_tomentosa_female_flower.jpg/256px-Carya_tomentosa_female_flower.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Carya_tomentosa.jpg\">Bud break. </a>Kristel Schoonderwoerd,  <a href=\"https://creativecommons.org/licenses/by-sa/2.0/legalcode\" rel=\"license\">CC BY-SA 2.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Carya_tomentosa#/media/File:Carya_tomentosa.jpg",
    photo4Alt: "Bud break",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Carya_tomentosa.jpg/256px-Carya_tomentosa.jpg",

    photo5Credit: "Bark. Public domain, via Wikimedia Commons",
    photo5Href: "https://en.wikipedia.org/wiki/Carya_tomentosa#/media/File:CaryaTomentosaBark.jpg",
    photo5Alt: "Bark",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/CaryaTomentosaBark.jpg/256px-CaryaTomentosaBark.jpg",

    photo6Credit: "Mockernut Hickory range map. Public domain, via Wikimedia Commons",
    photo6Href: "https://en.wikipedia.org/wiki/Carya_tomentosa#/media/File:Carya_tomentosa_range_map_1.png",
    photo6Alt: "Mockernut Hickory range map",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Carya_tomentosa_range_map_1.png/256px-Carya_tomentosa_range_map_1.png",
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
    slug: "mountainmaple",
    background: "bg-large/bg-19.jpg",
    backgroundSmall: "bg-small/bg-19.jpg",
    description: "<p>The Mountain Maple, Acer spicatum, is a small, deciduous understory tree or large shrub native to the northeastern regions of North America. It typically grows to a height of 15 to 25 feet, making it one of the smaller species in the maple family. The Mountain Maple is often found in cool, moist, forested areas, particularly in mountainous regions, where it thrives under the canopy of larger hardwoods.</p><p>Its leaves are classic maple in shape, with three to five lobes and a toothed margin, turning a vibrant red or orange in the fall. In late spring to early summer, the tree displays showy, upright, yellow-green flower clusters, which stand out against the foliage. These flowers give way to winged samaras that mature by late summer. The bark of the Mountain Maple is thin and smooth, gray-brown in color, adding a subtle texture to the landscape.</p><p>Due to its modest size and attractive foliage, the Mountain Maple is a popular choice for naturalistic landscaping in smaller spaces and woodland gardens. Its ability to grow in shaded areas, along with its ornamental features, makes it a valuable addition to diverse ecosystems, providing habitat and food for local wildlife.</p>",

    photo1Credit: "Flowering Mountain Maple tree. Public domain, via Wikimedia Commons",
    photo1Href: "https://en.wikipedia.org/wiki/Acer_spicatum#/media/File:Acer_spicatum_whole_tree.jpg",
    photo1Alt: "Flowering tree, Acer spicatum",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Acer_spicatum_whole_tree.jpg/256px-Acer_spicatum_whole_tree.jpg",

    photo2Credit: "Botanical illustration. Public domain, via Wikimedia Commons",
    photo2Href: "https://en.wikipedia.org/wiki/Acer_spicatum#/media/File:NAS-047_Acer_spicatum.png",
    photo2Alt: "Botanical illustration",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/NAS-047_Acer_spicatum.png/256px-NAS-047_Acer_spicatum.png",

    photo3Credit: "Fruits (samaras) with measurement. Public domain, via Wikimedia Commons",
    photo3Href: "https://en.wikipedia.org/wiki/Acer_spicatum#/media/File:Acer_spicatum_seeds.jpg",
    photo3Alt: "Fruits (samaras) with measurement for scale",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Acer_spicatum_seeds.jpg/256px-Acer_spicatum_seeds.jpg",

    photo4Credit: "Mountain Maple range map. Public domain, via Wikimedia Commons.",
    photo4Href: "https://en.wikipedia.org/wiki/Acer_spicatum#/media/File:Acer_spicatum_range_map_1.png",
    photo4Alt: "Mountain Maple range map",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Acer_spicatum_range_map_1.png/256px-Acer_spicatum_range_map_1.png",
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
    slug: "nannyberry",
    background: "bg-large/bg-185.jpg",
    backgroundSmall: "bg-small/bg-185.jpg",
    description: "<p>The Nannyberry, Viburnum lentago, is a versatile and hardy deciduous shrub or small tree, native to the woodlands and wetlands of North America. It typically reaches heights of 14 to 16 feet, but can grow taller under ideal conditions, making it a suitable choice for a variety of landscape settings. The Nannyberry is characterized by its upright, spreading habit and dense foliage, providing substantial visual interest throughout the year.</p><p>In the spring, the Nannyberry produces showy clusters of creamy white flowers, which are not only visually appealing but also attract a variety of pollinators. These blossoms give way to clusters of dark blue to black berries in the fall, which are edible and favored by birds and wildlife. The leaves of the Nannyberry are glossy, dark green, and oval-shaped, turning to a striking burgundy or deep red in the autumn, adding another layer of color to the landscape.</p><p>Adaptable to both sun and partial shade, the Nannyberry thrives in a range of soil types, including moist conditions, making it a popular choice for naturalized areas, hedges, and wildlife gardens. Its berries, flowers, and fall coloration make it an attractive option for those seeking a multifunctional and low-maintenance plant for their outdoor spaces.</p>",
    photo1Credit: "Flowering Nannyberry. Public domain, via Wikimedia Commons",
    photo1Href: "https://en.wikipedia.org/wiki/Viburnum_lentago#/media/File:Viburnum_lentago_NRCS-006.jpg",
    photo1Alt: "Flowering Nannyberry",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Viburnum_lentago_NRCS-006.jpg/320px-Viburnum_lentago_NRCS-006.jpg",

    photo2Credit: "Nannyberry with fruit. Public domain, via Wikimedia Commons",
    photo2Href: "https://en.wikipedia.org/wiki/Viburnum_lentago#/media/File:Viburnum_lentago_NRCS-005.jpg",
    photo2Alt: "Nannyberry with fruit",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Viburnum_lentago_NRCS-005.jpg/256px-Viburnum_lentago_NRCS-005.jpg",

    photo3Credit: "Nannyberry range map. Public domain, via Wikimedia Commons",
    photo3Href: "https://en.wikipedia.org/wiki/Viburnum_lentago#/media/File:Viburnum_lentago_range_map_3.png",
    photo3Alt: "Nannyberry range map",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Viburnum_lentago_range_map_3.png/256px-Viburnum_lentago_range_map_3.png",
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
    slug: "northerncatalpa",
    background: "bg-large/bg-157.jpg",
    backgroundSmall: "bg-small/bg-157.jpg",
    description: "<p>The Northern Catalpa, Catalpa speciosa, is a visually striking deciduous tree, native to the central United States. It stands out in the landscape with its large stature, often reaching 40 to 60 feet in height, and a broad, irregular canopy that spreads almost as wide. This tree is particularly noted for its large, heart-shaped leaves, which can be up to 12 inches across, providing a lush, tropical appearance and dense shade beneath its branches.</p><p>In late spring to early summer, the Northern Catalpa produces showy clusters of white flowers, marked with yellow and purple spots, resembling orchids. These fragrant blooms are a favorite among pollinators and give way to long, slender, bean-like seed pods that persist through the winter, adding visual interest. The tree's bark is thick and furrowed, with a light gray-brown color.</p><p>Due to its dramatic appearance and rapid growth, the Northern Catalpa is often planted as an ornamental tree in parks and large gardens. While it thrives in moist, fertile soils, it is adaptable to various conditions, including urban environments. Its bold foliage, distinctive flowers, and seed pods make it a conversation piece and a focal point in any landscape where space allows.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Catalpa_speciosa_20060624.jpg\">Northern Catalpa tree</a>, Mark Wagner, <a href=\"https://creativecommons.org/licenses/by/2.5/legalcode\" rel=\"license\">CC BY 2.5</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Catalpa_speciosa#/media/File:Catalpa_speciosa_20060624.jpg",
    photo1Alt: "Northern Catalpa tree",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Catalpa_speciosa_20060624.jpg/256px-Catalpa_speciosa_20060624.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Catalpa_speciosa_leaf_20060624.jpg\">Northern Catalpa leaf</a>, Mark Wagner, <a href=\"https://creativecommons.org/licenses/by/2.5/legalcode\" rel=\"license\">CC BY 2.5</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Catalpa_speciosa#/media/File:Catalpa_speciosa_leaf_20060624.jpg",
    photo2Alt: "Catalpa speciosa leaf",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Catalpa_speciosa_leaf_20060624.jpg/256px-Catalpa_speciosa_leaf_20060624.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2014-06-12_10_43_09_Catalpa_speciosa_in_flower_along_Nevada_State_Route_289_(Winnemucca_Boulevard)_near_U.S._Route_95_(West_Winnemucca_Boulevard_and_Melarkey_Street)_in_Winnemucca,_Nevada-cropped.jpg\">Northern Catalpa in flower. </a> <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>,  <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Catalpa_speciosa#/media/File:2014-06-12_10_43_09_Catalpa_speciosa_in_flower_along_Nevada_State_Route_289_(Winnemucca_Boulevard)_near_U.S._Route_95_(West_Winnemucca_Boulevard_and_Melarkey_Street)_in_Winnemucca,_Nevada-cropped.jpg",
    photo3Alt: "Catalpa speciosa in flower along Nevada State Route 289",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/2014-06-12_10_43_09_Catalpa_speciosa_in_flower_along_Nevada_State_Route_289_%28Winnemucca_Boulevard%29_near_U.S._Route_95_%28West_Winnemucca_Boulevard_and_Melarkey_Street%29_in_Winnemucca%2C_Nevada-cropped.jpg/256px-thumbnail.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2014-06-12_10_45_44_Catalpa_speciosa_flowers_in_Winnemucca,_Nevada.JPG\">Northern Catalpa flowers</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Catalpa_speciosa#/media/File:2014-06-12_10_45_44_Catalpa_speciosa_flowers_in_Winnemucca,_Nevada.JPG",
    photo4Alt: "Catalpa speciosa flowers in Winnemucca, Nevada",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/2014-06-12_10_45_44_Catalpa_speciosa_flowers_in_Winnemucca%2C_Nevada.JPG/256px-2014-06-12_10_45_44_Catalpa_speciosa_flowers_in_Winnemucca%2C_Nevada.JPG",

    photo5Credit: "Beanpods and leaves of the northern catalpa. Public domain, via Wikimedia Commons",
    photo5Href: "https://en.wikipedia.org/wiki/Catalpa_speciosa#/media/File:Northern_Catalpa_beanpods.jpg",
    photo5Alt: "Beanpods and leaves of the northern catalpa",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Northern_Catalpa_beanpods.jpg/256px-Northern_Catalpa_beanpods.jpg",


    photo6Credit: "Northern Catalpa range map. Public domain, via Wikimedia Commons",
    photo6Href: "https://en.wikipedia.org/wiki/Catalpa_speciosa#/media/File:Catalpa_speciosa_range_map_2.png",
    photo6Alt: "Northern Catalpa range map",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Catalpa_speciosa_range_map_2.png/256px-Catalpa_speciosa_range_map_2.png",
  },
  {
    nameCommon: "Northern Red Oak",
    aka: ["red oak"],
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
    slug: "northernredoak",
    background: "bg-large/bg-2.jpg",
    backgroundSmall: "bg-small/bg-2.jpg",
    description: "<p>The Northern Red Oak, Quercus rubra, is a majestic and robust deciduous tree, native to North America. It is renowned for its rapid growth and grandeur, typically reaching heights of 60 to 75 feet, with some specimens soaring even taller. The tree's impressive stature is matched by its broad, rounded crown, making it a dominant feature in both forested and urban landscapes.</p><p>The leaves of the Northern Red Oak are distinctive, with pointed lobes and deep sinuses, turning a brilliant red or russet in the fall. This autumnal display is one of the tree's most admired attributes. In spring, it produces inconspicuous flowers, followed by the development of acorns that are a crucial food source for wildlife. The bark is dark and ridged, providing significant textural interest throughout the year.</p><p>Valued for its strength, durability, and beauty, the wood of the Northern Red Oak is extensively used in furniture and flooring. The tree itself is a popular choice for landscaping due to its tolerance of various soil types and conditions, including urban environments. Its size, longevity, and vibrant fall color make the Northern Red Oak a timeless and cherished addition to parks, large yards, and natural settings.</p>",
    photo1Credit: "Northern Red Oak tree. Public domain, via Wikimedia Commons",
    photo1Href: "https://en.wikipedia.org/wiki/Quercus_rubra#/media/File:Quercus_rubra_@_Tortworth_Court.jpg",
    photo1Alt: "Northern Red Oak tree",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Quercus_rubra_%40_Tortworth_Court.jpg/256px-Quercus_rubra_%40_Tortworth_Court.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2014-10-30_10_49_37_Red_Oak_foliage_during_autumn_on_Farrell_Avenue_in_Ewing,_New_Jersey.JPG\">Autumn foliage</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Quercus_rubra#/media/File:2014-10-30_10_49_37_Red_Oak_foliage_during_autumn_on_Farrell_Avenue_in_Ewing,_New_Jersey.JPG",
    photo2Alt: "Red Oak foliage during autumn on Farrell Avenue in Ewing, New Jersey",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/2014-10-30_10_49_37_Red_Oak_foliage_during_autumn_on_Farrell_Avenue_in_Ewing%2C_New_Jersey.JPG/256px-2014-10-30_10_49_37_Red_Oak_foliage_during_autumn_on_Farrell_Avenue_in_Ewing%2C_New_Jersey.JPG",

    photo3Credit: "Sapling. Leo Michels, CC0, via Wikimedia Commons",
    photo3Href: "https://en.wikipedia.org/wiki/Quercus_rubra#/media/File:Quercus_rubra_IP0905004.jpg",
    photo3Alt: "Sapling",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Quercus_rubra_IP0905004.jpg/256px-Quercus_rubra_IP0905004.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Red_Oak_Quercus_Rubra_Bark_Vertical_High_DoF.JPG\">Red Oak bark</a>, (c)2016 Derek Ramsey (<a href=\"https://en.wikipedia.org/wiki/User:Ram-Man\">Ram-Man</a>), <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Quercus_rubra#/media/File:Red_Oak_Quercus_Rubra_Bark_Vertical_High_DoF.JPG",
    photo4Alt: "Red Oak Quercus Rubra Bark",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Red_Oak_Quercus_Rubra_Bark_Vertical_High_DoF.JPG/256px-Red_Oak_Quercus_Rubra_Bark_Vertical_High_DoF.JPG",

    photo5Credit: "Northern Red Oak range map. Public domain, via Wikimedia Commons",
    photo5Href: "https://en.wikipedia.org/wiki/Quercus_rubra#/media/File:Quercus_rubra_range_map_1.png",
    photo5Alt: "Northern Red Oak range map",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Quercus_rubra_range_map_1.png/256px-Quercus_rubra_range_map_1.png",
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
    slug: "norwaymaple",
    background: "bg-large/bg-134.jpg",
    backgroundSmall: "bg-small/bg-134.jpg",
    description: "<p>The Norway Maple, Acer platanoides, is a deciduous tree native to Europe but widely planted and naturalized across North America. Renowned for its adaptability and robustness, it typically grows to 40-60 feet in height, with a dense, rounded crown that provides ample shade. The Norway Maple is distinguishable by its large, glossy, dark green leaves, which are deeply lobed and resemble those of the sycamore. These leaves turn a vivid yellow or occasionally red in the fall, offering a striking autumnal display.</p><p>In early spring, the tree produces showy yellow-green flowers before the leaves emerge, which are followed by the characteristic winged samaras, commonly known as 'helicopter seeds.' The bark of the Norway Maple is gray and smooth in younger trees, becoming more furrowed with age.</p><p>While appreciated for its shade and ornamental value, the Norway Maple's aggressive growth can sometimes outcompete native species, making it a controversial choice in some regions. Nevertheless, its tolerance to pollution and soil compaction makes it a frequent choice for urban landscaping, contributing greenery and aesthetic appeal to city streets and parks.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Ahorn_bluehend2.JPG\">Tree in flower.</a> Welleschik, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Acer_platanoides#/media/File:Ahorn_bluehend2.JPG",
    photo1Alt: "Tree in flower",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Ahorn_bluehend2.JPG/256px-Ahorn_bluehend2.JPG",
    
    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Spitz-Ahorn(mbo).jpg\">Leaves. </a> Martin Bobka (<a href=\"https://commons.wikimedia.org/wiki/User:Martin120\">Martin120</a>), <a href=\"https://creativecommons.org/licenses/by-sa/2.5/legalcode\" rel=\"license\">CC BY-SA 2.5</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Acer_platanoides#/media/File:Spitz-Ahorn(mbo).jpg",
    photo2Alt: "Leaves",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Spitz-Ahorn%28mbo%29.jpg/256px-Spitz-Ahorn%28mbo%29.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2020_year._Herbarium._Acer_platanoides._img-001.jpg\">Leaf. </a> <a href=\"https://commons.wikimedia.org/wiki/User:Knopik-som\">Dmitry Makeev</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Acer_platanoides#/media/File:2020_year._Herbarium._Acer_platanoides._img-001.jpg",
    photo3Alt: "Acer platanoides",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/2020_year._Herbarium._Acer_platanoides._img-001.jpg/256px-2020_year._Herbarium._Acer_platanoides._img-001.jpg",

    photo4Credit: "Krzysztof Ziarnek, <a href=\"https://commons.wikimedia.org/wiki/File:Acer_platanoides_fruit_kz.jpg\">Acer platanoides fruit kz</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Acer_platanoides#/media/File:Acer_platanoides_fruit_kz.jpg",
    photo4Alt: "Acer platanoides fruit",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Acer_platanoides_fruit_kz.jpg/256px-Acer_platanoides_fruit_kz.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2014-10-30_10_39_54_Norway_Maple_foliage_during_autumn_on_Durham_Avenue_in_Ewing,_New_Jersey.JPG\">Norway Maple foliage during autumn. </a> <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Acer_platanoides#/media/File:2014-10-30_10_39_54_Norway_Maple_foliage_during_autumn_on_Durham_Avenue_in_Ewing,_New_Jersey.JPG",
    photo4Alt: "Norway Maple foliage during autumn on Durham Avenue in Ewing, New Jersey",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/2014-10-30_10_39_54_Norway_Maple_foliage_during_autumn_on_Durham_Avenue_in_Ewing%2C_New_Jersey.JPG/256px-2014-10-30_10_39_54_Norway_Maple_foliage_during_autumn_on_Durham_Avenue_in_Ewing%2C_New_Jersey.JPG",  

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Acer_platanoides_fruit_kz.jpg\">Fruit (samara). <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Acer_platanoides#/media/File:Acer_platanoides_fruit_kz.jpg",
    photo5Alt: "Acer platanoides fruit",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Acer_platanoides_fruit_kz.jpg/256px-Acer_platanoides_fruit_kz.jpg",  
  },
  {
    nameCommon: "Norway Spruce",
    aka: [
      "European spruce",
    ],
    order: "Pinales",
    family: "Pinaceae",
    familyCommon: "Pine",
    genus: "Picea",
    species: "Picea abies",
    type: "conifer",
    needleStructure: "single needle",
    slug: "norwayspruce",
    background: "bg-large/bg-129.jpg",
    backgroundSmall: "bg-small/bg-129.jpg",
    description: "<p>The Norway Spruce, Picea abies, is a majestic evergreen conifer native to Europe, widely cultivated across the globe for its beauty and utility. This towering tree can reach heights of up to 100 feet or more, displaying a classic, pyramidal shape with a straight, robust trunk. Its branches extend horizontally, drooping slightly at the tips, giving the Norway Spruce its distinctive silhouette.</p><p>The tree's needles are short, sharp, and dark green, covering the branches densely to create a lush, full appearance. In the spring, it produces small, inconspicuous red or purple flowers, which are followed by its characteristic cones. These cones are long, cylindrical, and pendulous, starting out green and maturing to a woody brown, often persisting well into the winter months.</p><p>Renowned for its fast growth and cold hardiness, the Norway Spruce is a popular choice for Christmas trees, timber, and ornamental plantings in parks and large gardens. Its ability to adapt to a range of soil types and conditions, along with its imposing presence and graceful form, make it a favorite in landscapes seeking a touch of the majestic and timeless beauty of northern forests.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Kuusk_Keila-Paldiski_rdt_ääres.jpg\">Norway Spruce tree. </a> <a href=\"https://commons.wikimedia.org/wiki/User:Iifar\">Ivar Leidus</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/ee/deed.en\" rel=\"license\">CC BY-SA 3.0 EE</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Picea_abies#/media/File:Kuusk_Keila-Paldiski_rdt_%C3%A4%C3%A4res.jpg",
    photo1Alt: "A Spruce (Picea abies) by Keila-Paldiski railway (Estonia)",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Kuusk_Keila-Paldiski_rdt_%C3%A4%C3%A4res.jpg/256px-Kuusk_Keila-Paldiski_rdt_%C3%A4%C3%A4res.jpg",

    photo2Credit: "Botanical illustration. Public domain, via Wikimedia Commons",
    photo2Href: "https://en.wikipedia.org/wiki/Picea_abies#/media/File:Picea_abies_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-105.jpg",
    photo2Alt: "Botanical illustration",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/8/82/Picea_abies_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-105.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Picea_abies_young_female_cone_-_Keila.jpg\">Immature female cone. <a href=\"https://commons.wikimedia.org/wiki/User:Iifar\">Ivar Leidus</a>, </a> <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Picea_abies#/media/File:Picea_abies_young_female_cone_-_Keila.jpg",
    photo3Alt: "Picea abies young female cone",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Picea_abies_young_female_cone_-_Keila.jpg/256px-Picea_abies_young_female_cone_-_Keila.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Picea_abies_cone.jpg\">Cone and seeds. </a> Agnieszka Kwiecień (<a href=\"https://commons.wikimedia.org/wiki/User:Nova\">Nova</a>), <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Picea_abies#/media/File:Picea_abies_cone.jpg",
    photo4Alt: "Picea abies cone and seeds",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Picea_abies_cone.jpg/256px-Picea_abies_cone.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Picea_abies_range.svg\">Norway Spruce range map. Green: native range. Orange: introduced areas. </a>, <a href=\"https://commons.wikimedia.org/wiki/User:Giovanni_Caudullo\">Giovanni Caudullo</a>, <a href=\"https://creativecommons.org/licenses/by/4.0/legalcode\" rel=\"license\">CC BY 4.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Picea_abies#/media/File:Picea_abies_range.svg",
    photo5Alt: "Picea abies range",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Picea_abies_range.svg/256px-Picea_abies_range.svg.png",
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
    slug: "ohiobuckeye",
    background: "bg-large/bg-192b.jpg",
    backgroundSmall: "bg-small/bg-192b.jpg",
    description: "<p>The Ohio Buckeye, Aesculus glabra, is a medium-sized deciduous tree native to the Midwestern and lower Great Plains regions of the United States. It typically reaches heights of 20 to 40 feet, characterized by a rounded, spreading crown that makes it a favored ornamental tree in landscapes. The tree is named for its distinctive seeds, which are shiny, brown, and resemble the eye of a deer, enclosed in a light brown, spiky husk.</p><p>The Ohio Buckeye's leaves are palmately compound, consisting of five to seven leaflets that emerge a light green and darken as they mature. In the fall, the foliage turns a striking yellow, sometimes with hints of red. Spring brings clusters of small, yellow-green flowers, which are slightly fragrant and attract a variety of pollinators. The bark is gray and becomes deeply furrowed with age, adding texture to the tree's appearance.</p><p>While the Ohio Buckeye is an attractive addition to parks and large yards, it is important to note that all parts of the tree, particularly the seeds, are toxic if ingested. Despite this, its distinctive seeds, spring flowers, and fall color make it a visually appealing choice for a variety of landscape settings.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Aesculus_glabra_var._glabra.jpg\">Ohio Buckeye tree. </a> <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Aesculus_glabra#/media/File:Aesculus_glabra_var._glabra.jpg",
    photo1Alt: "Aesculus glabra",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Aesculus_glabra_var._glabra.jpg/359px-Aesculus_glabra_var._glabra.jpg",

    photo2Credit: "Foliage and fruit. Public domain, via Wikimedia Commons",
    photo2Href: "https://en.wikipedia.org/wiki/Aesculus_glabra#/media/File:Aesculus_glabra_USDA.jpg",
    photo2Alt: "Foliage and fruit",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Aesculus_glabra_USDA.jpg/320px-Aesculus_glabra_USDA.jpg",

    photo3Credit: "Inflorescence. Public domain, via Wikimedia Commons",
    photo3Href: "https://en.wikipedia.org/wiki/Aesculus_glabra#/media/File:Aesculus_glabra.jpg",
    photo3Alt: "Inflorescence, Aesculus glabra",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Aesculus_glabra.jpg/256px-Aesculus_glabra.jpg",

    photo4Credit: "Dried buckeye nuts. Public domain, via Wikimedia Commons",
    photo4Href: "https://en.wikipedia.org/wiki/Aesculus_glabra#/media/File:Aesculus_glabra_seeds.png",
    photo4Alt: "Dried buckeye nuts",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Aesculus_glabra_seeds.png/320px-Aesculus_glabra_seeds.png",

    photo5Credit: "Trunk and bark. Public domain, via Wikimedia Commons",
    photo5Href: "https://en.wikipedia.org/wiki/Aesculus_glabra#/media/File:AesculusGlabraBark.jpg",
    photo5Alt: "Closeup of trunk and bark",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/AesculusGlabraBark.jpg/256px-AesculusGlabraBark.jpg",

    photo6Credit: "Ohio Buckeye range map. Public domain, via Wikimedia Commons",
    photo6Href: "https://en.wikipedia.org/wiki/Aesculus_glabra#/media/File:Aesculus_glabra_range_map_1.png",
    photo6Alt: "Ohio Buckeye range map Aesculus glabra",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Aesculus_glabra_range_map_1.png/256px-Aesculus_glabra_range_map_1.png",
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
    slug: "osageorange",
    background: "bg-large/bg-159.jpg",
    backgroundSmall: "bg-small/bg-159.jpg",
    description: "<p>The Osage Orange tree, Maclura pomifera, is a unique and historically significant deciduous tree native to the south-central United States. Often growing to around 30 to 40 feet in height, it is renowned for its dense, thorny branches and distinctive fruit. The tree's irregular, often contorted form and rough, deeply furrowed bark give it a rugged appearance.</p><p>One of the most notable features of the Osage Orange is its large, green, brain-like fruit, commonly called \"hedge apples.\" These bumpy, inedible fruits can grow to the size of a grapefruit and are often used decoratively or reputed as natural insect repellents. The tree's leaves are broad, shiny, and dark green, turning yellow in the fall. In spring, small, greenish-yellow flowers bloom, which are inconspicuous compared to its striking fruit.</p><p>Osage Orange wood is highly valued for its strength and rot resistance, historically used by Native Americans for making bows. The tree was also widely planted as hedgerows in the agricultural landscape before the invention of barbed wire. Today, it is often found in parks and rural areas, valued for its unique appearance and hardy nature.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Maclura_pomifera_001.JPG\">Mature Osage Orange tree. </a> <a href=\"https://commons.wikimedia.org/wiki/User:Llez\">H. Zell</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Maclura_pomifera#/media/File:Maclura_pomifera_001.JPG",
    photo1Alt: "Maclura pomifera, Mature tree",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Maclura_pomifera_001.JPG/256px-Maclura_pomifera_001.JPG",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Maclura_pomifera_002.JPG\">Leaves. </a> <a href=\"https://commons.wikimedia.org/wiki/User:Llez\">H. Zell</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Maclura_pomifera#/media/File:Maclura_pomifera_002.JPG",
    photo2Alt: "Maclura pomifera leaves",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Maclura_pomifera_002.JPG/256px-Maclura_pomifera_002.JPG",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Maclura_pomifera_003.JPG\">Female inflorescence</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Llez\">H. Zell</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Maclura_pomifera#/media/File:Maclura_pomifera_003.JPG",
    photo3Alt: "Maclura pomifera Female inflorescence",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Maclura_pomifera_003.JPG/256px-Maclura_pomifera_003.JPG",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Osage_orange_1.jpg\">Mature multiple fruit. </a> <a href=\"https://commons.wikimedia.org/wiki/User:Bruce_Marlin\">Bruce Marlin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/2.5/legalcode\" rel=\"license\">CC BY-SA 2.5</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Maclura_pomifera#/media/File:Osage_orange_1.jpg",
    photo4Alt: "Mature multiple fruit",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Osage_orange_1.jpg/256px-Osage_orange_1.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Maclura_pomifera_008.jpg\">Mature bark</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Llez\">H. Zell</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Maclura_pomifera#/media/File:Maclura_pomifera_008.jpg",
    photo5Alt: "Mature bark",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Maclura_pomifera_008.jpg/256px-Maclura_pomifera_008.jpg",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Maclura_trunk.jpg\">Typical bright yellow newly-cut wood</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Fernando_Lopez_Anido\">Fernando Lopez Anido</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Maclura_pomifera#/media/File:Maclura_trunk.jpg",
    photo6Alt: "Typical bright yellow newly-cut wood",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Maclura_trunk.jpg/256px-Maclura_trunk.jpg",
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
    slug: "paperbirch",
    background: "bg-large/bg-161.jpg",
    backgroundSmall: "bg-small/bg-161.jpg",
    description: "<p>The Paper Birch, Betula papyrifera, is a graceful deciduous tree, renowned for its striking white bark that peels off in papery layers, giving it both its common name and a distinctive appearance. Native to the northern regions of North America, this tree typically reaches 50 to 70 feet in height, with a slender, upright form. The bark, smooth and white on younger trees, becomes more deeply furrowed and dark at the base as the tree ages.</p><p>The leaves of the Paper Birch are ovate to triangular, with a sharp, serrated margin, turning a brilliant yellow in the fall. In the spring, the tree produces catkins, which are followed by small, winged seeds that disperse with the wind. The tree's light green leaves turn a vibrant yellow in the fall, creating a striking contrast against its white bark.</p><p>Symbolizing renewal and new beginnings in many cultures, the Paper Birch is not only valued for its ornamental appeal but also for its historical uses. Native Americans utilized the waterproof bark for making canoes, containers, and other items. In modern times, it's a popular choice in landscape design for its unique beauty and ability to thrive in cold climates.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:13._The_Fall_of_Acadia_(4039110079).jpg\">Paper birch forest. </a> <a href=\"https://www.flickr.com/people/36783643@N05\">InAweofGod'sCreation</a>,  <a href=\"https://creativecommons.org/licenses/by/2.0/legalcode\" rel=\"license\">CC BY 2.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Betula_papyrifera#/media/File:13._The_Fall_of_Acadia_(4039110079).jpg",
    photo1Alt: "Paper birch forest in Maine",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/13._The_Fall_of_Acadia_%284039110079%29.jpg/256px-13._The_Fall_of_Acadia_%284039110079%29.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Betula_papyrifera_8853.JPG\">Leaves are doubly serrated with sharp teeth.</a> <a href=\"https://commons.wikimedia.org/wiki/User:Wsiegmund\">Walter Siegmund</a>,  <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Betula_papyrifera#/media/File:Betula_papyrifera_8853.JPG",
    photo2Alt: "Betula papyrifera. Leaves are doubly serrated with sharp teeth.",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Betula_papyrifera_8853.JPG/256px-Betula_papyrifera_8853.JPG",

    photo3Credit: "Peeling bark. Public domain, via Wikimedia Commons",
    photo3Href: "https://en.wikipedia.org/wiki/Betula_papyrifera#/media/File:Ecorce_de_bouleau.JPG",
    photo3Alt: "Peeling bark",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Ecorce_de_bouleau.JPG/256px-Ecorce_de_bouleau.JPG",

    photo4Credit: "Paper Birch range map. Public domain, via Wikimedia Commons",
    photo4Href: "https://en.wikipedia.org/wiki/Betula_papyrifera#/media/File:Betula_papyrifera_range_map_1.png",
    photo4Alt: "Betula papyrifera Paper Birch range map",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Betula_papyrifera_range_map_1.png/512px-Betula_papyrifera_range_map_1.png",
  },
  {
    nameCommon: "Pignut Hickory",
    aka: [
      "Red Hickory",
      "Smoothbark Hickory"
    ],
    order: "Fagales",
    family: "Juglndaceae",
    familyCommon: "Walnut",
    genus: "Carya",
    species: "Carya glabra",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "pinnate",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "pignuthickory",
    background: "bg-large/bg-59.jpg",
    backgroundSmall: "bg-small/bg-59.jpg",
    description: "<p>The Pignut Hickory, Carya glabra, is a durable and tall deciduous tree that is part of the walnut family, native to eastern North America. It typically grows to heights of 50 to 80 feet, with some trees reaching up to 120 feet. The Pignut Hickory is characterized by a straight and slender trunk, crowned with a narrow, oblong canopy that provides light shade. This tree is known for its tough, resilient wood and deep taproots.</p><p>The leaves of the Pignut Hickory are pinnately compound, usually with five (sometimes seven) leaflets. These leaves are dark green, turning to an attractive yellow in the fall. The tree produces small, greenish flowers in spring, and its fruit is a nut encased in a thin husk that splits open when mature. The nuts, known as pignuts, are bitter and not typically favored for human consumption but are an important food source for wildlife.</p><p>The bark of the Pignut Hickory is gray and smooth when young, becoming more furrowed and ridged as the tree ages. Due to its deep rooting system and strong wood, it is commonly used in areas needing erosion control and is valued for its use in tool handles, furniture, and flooring.</p>",

    photo1Credit: "Pignut hickory leaf. Public domain, via Wikimedia Commons",
    photo1Href: "https://en.wikipedia.org/wiki/Carya_glabra#/media/File:Carya_glabra_NRCS-1.jpg",
    photo1Alt: "Carya glabra leaf",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Carya_glabra_NRCS-1.jpg/256px-Carya_glabra_NRCS-1.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Phylloxera_galls._Carya_glabra.jpg\">Tree with catkins and galls made by Phylloxera perniciosa. </a>, <a href=\"https://commons.wikimedia.org/wiki/User:Polinizador\">Beatriz Moisset</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Carya_glabra#/media/File:Phylloxera_galls._Carya_glabra.jpg",
    photo2Alt: "Phylloxera galls. Carya glabra",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Phylloxera_galls._Carya_glabra.jpg/256px-Phylloxera_galls._Carya_glabra.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Carya_glabra_AA.jpg\">Carya glabra in fall. </a>, <a href=\"https://commons.wikimedia.org/wiki/User:Akgarb\">William (Ned) Friedman</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Carya_glabra#/media/File:Carya_glabra_AA.jpg",
    photo3Alt: "Carya glabra in fall",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Carya_glabra_AA.jpg/256px-Carya_glabra_AA.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Carya_glabra_immature_fruit.jpg\">Immature fruit. </a>, <a href=\"https://commons.wikimedia.org/wiki/User:Akgarb\">William (Ned) Friedman</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Carya_glabra#/media/File:Carya_glabra_immature_fruit.jpg",
    photo4Alt: "Carya glabra immature fruit",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Carya_glabra_immature_fruit.jpg/256px-Carya_glabra_immature_fruit.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Carya_glabra_(Pignut_Hickory)_(35052583791).jpg\">Female flowers. </a>, <a href=\"https://www.flickr.com/people/138014579@N08\">Plant Image Library</a> from Boston, USA, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/legalcode\" rel=\"license\">CC BY-SA 2.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Carya_glabra#/media/File:Carya_glabra_(Pignut_Hickory)_(35052583791).jpg",
    photo5Alt: "Female flowers",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Carya_glabra_%28Pignut_Hickory%29_%2835052583791%29.jpg/256px-Carya_glabra_%28Pignut_Hickory%29_%2835052583791%29.jpg",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Carya_glabra_bud_break.jpg\">Bud break </a>, Kristel Schoonderwoerd, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/legalcode\" rel=\"license\">CC BY-SA 2.0</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Carya_glabra#/media/File:Carya_glabra_bud_break.jpg",
    photo6Alt: "Carya glabra bud break",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Carya_glabra_bud_break.jpg/256px-Carya_glabra_bud_break.jpg",

    photo7Credit: "Pignut hickory nuts. Public domain, via Wikimedia Commons",
    photo7Href: "https://en.wikipedia.org/wiki/Carya_glabra#/media/File:Pignut-hickory-nut.jpg",
    photo7Alt: "Pignut hickory nut",
    photo7Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Pignut-hickory-nut.jpg/256px-Pignut-hickory-nut.jpg",
  },
  {
    nameCommon: "Pin Oak",
    aka: [
      "Spanish Oak", 
      "Swamp Oak",
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
    slug: "pinoak",
    background: "bg-large/bg-189.jpg",
    backgroundSmall: "bg-small/bg-189.jpg",
    description: "<p>The Pin Oak, Quercus palustris, is a commonly planted deciduous tree known for its distinctive growth habit and adaptability. Native to the eastern and central United States, it typically grows to 60-70 feet in height, with some trees reaching up to 100 feet. The Pin Oak has a straight, tall trunk and a pyramidal shape in its youth, which gradually becomes more oval or rounded as the tree matures.</p><p>A distinguishing feature of the Pin Oak is its lower branches that angle downwards, middle branches that grow horizontally, and upper branches that angle upwards. This unique branching gives the tree a tiered appearance, especially noticeable in winter. The leaves are deeply lobed with pointed tips and turn a brilliant red or bronze in the fall, creating a striking display. The tree produces small acorns, which are a food source for wildlife.</p><p>With its tolerance for wet conditions and ability to adapt to urban environments, the Pin Oak is a popular choice for street plantings, parks, and large landscapes. Its attractive form and striking fall color make it a favorite for adding aesthetic appeal to various outdoor settings.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Pin_oak_quercus_palustris.jpg\">Pin oak tree. </a> <a href=\"https://commons.wikimedia.org/wiki/User:Bruce_Marlin\">Bruce Marlin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/2.5/legalcode\" rel=\"license\">CC BY-SA 2.5</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Quercus_palustris#/media/File:Pin_oak_quercus_palustris.jpg",
    photo1Alt: "Pin Oak quercus palustris",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Pin_oak_quercus_palustris.jpg/256px-Pin_oak_quercus_palustris.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Quercus-palustris.JPG\">Pin Oak leaves</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Quercus_palustris#/media/File:Quercus-palustris.JPG",
    photo2Alt: "Pin oak leaves",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Quercus-palustris.JPG",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2016-04-15_15_31_48_Pin_Oak_catkins_at_Franklin_Farm_Park_in_the_Franklin_Farm_section_of_Oak_Hill,_Fairfax_County,_Virginia.jpg\">Pin Oak catkins. </a> <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Quercus_palustris#/media/File:2016-04-15_15_31_48_Pin_Oak_catkins_at_Franklin_Farm_Park_in_the_Franklin_Farm_section_of_Oak_Hill,_Fairfax_County,_Virginia.jpg",
    photo3Alt: "Pin Oak catkins at Franklin Farm Park in the Franklin Farm section of Oak Hill, Fairfax County, Virginia",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/2016-04-15_15_31_48_Pin_Oak_catkins_at_Franklin_Farm_Park_in_the_Franklin_Farm_section_of_Oak_Hill%2C_Fairfax_County%2C_Virginia.jpg/256px-2016-04-15_15_31_48_Pin_Oak_catkins_at_Franklin_Farm_Park_in_the_Franklin_Farm_section_of_Oak_Hill%2C_Fairfax_County%2C_Virginia.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2014-11-02_11_29_54_Pin_Oak_during_autumn_along_Lower_Ferry_Road_in_Ewing,_New_Jersey.JPG\">Pin Oak during autumn. </a> <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Quercus_palustris#/media/File:2014-11-02_11_29_54_Pin_Oak_during_autumn_along_Lower_Ferry_Road_in_Ewing,_New_Jersey.JPG",
    photo4Alt: "Pin Oak during autumn along Lower Ferry Road in Ewing, New Jersey",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/2014-11-02_11_29_54_Pin_Oak_during_autumn_along_Lower_Ferry_Road_in_Ewing%2C_New_Jersey.JPG/256px-2014-11-02_11_29_54_Pin_Oak_during_autumn_along_Lower_Ferry_Road_in_Ewing%2C_New_Jersey.JPG",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Bark_Quercus_palustris.jpg\">Bark. </a> <a href=\"https://commons.wikimedia.org/wiki/User:Dodshe\">Dodshe</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Quercus_palustris#/media/File:Bark_Quercus_palustris.jpg",
    photo5Alt: "Bark Quercus palustris",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Bark_Quercus_palustris.jpg/256px-Bark_Quercus_palustris.jpg",

    photo6Credit: "Pin Oak range map. Public domain, via Wikimedia Commons",
    photo6Href: "https://en.wikipedia.org/wiki/Quercus_palustris#/media/File:Quercus_palustris_range_map_1.png",
    photo6Alt: "Quercus palustris range map",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Quercus_palustris_range_map_1.png/256px-Quercus_palustris_range_map_1.png",
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
    slug: "pitchpine",
    background: "bg-large/bg-41.jpg",
    backgroundSmall: "bg-small/bg-41.jpg",
    description: "<p>The Pitch Pine, Pinus rigida, is a resilient and adaptable evergreen conifer native to the eastern United States. Recognizable by its irregular, rugged form, the Pitch Pine typically grows to 40-60 feet in height but can exhibit a wide range of shapes depending on its growing conditions. Its thick, scaly bark and gnarled branches give it a distinctive, somewhat untamed appearance.</p><p>One of the key features of the Pitch Pine is its needles, which are grouped in threes, are long, twisted, and a dark green color, contributing to the tree's dense and somewhat shaggy look. It produces small, oval cones that remain on the tree for several years. The Pitch Pine is known for its ability to sprout needles and branches directly from the trunk, a trait that allows it to recover from damage.</p><p>Adaptable to a variety of soil types, including sandy and rocky soils, the Pitch Pine plays a crucial role in its native ecosystems and is especially important in fire-prone habitats, as it can regenerate after burns. This hardiness and its distinctive, rugged beauty make it a popular choice for reforestation projects and naturalistic landscaping.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2013-05-12_11_23_41_Pitch_Pine_trees_and_view_west_from_the_Hoeferlin_Trail_in_Ramapo_Mountain_State_Forest_in_New_Jersey.jpg\">Pitch Pine trees. </a> <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Pinus_rigida#/media/File:2013-05-12_11_23_41_Pitch_Pine_trees_and_view_west_from_the_Hoeferlin_Trail_in_Ramapo_Mountain_State_Forest_in_New_Jersey.jpg",
    photo1Alt: "Pitch Pine trees and view west from the Hoeferlin Trail in Ramapo Mountain State Forest in New Jersey",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/2013-05-12_11_23_41_Pitch_Pine_trees_and_view_west_from_the_Hoeferlin_Trail_in_Ramapo_Mountain_State_Forest_in_New_Jersey.jpg/256px-2013-05-12_11_23_41_Pitch_Pine_trees_and_view_west_from_the_Hoeferlin_Trail_in_Ramapo_Mountain_State_Forest_in_New_Jersey.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Pinus_rigida_cone_Poland.jpg\">Cone and needles</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Crusier\">Crusier</a>, <a href=\"https://creativecommons.org/licenses/by/3.0/legalcode\" rel=\"license\">CC BY 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Pinus_rigida#/media/File:Pinus_rigida_cone_Poland.jpg",
    photo2Alt: "Pinus rigida cone and needles",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Pinus_rigida_cone_Poland.jpg/256px-Pinus_rigida_cone_Poland.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Pinus_rigida.JPG\">Pollen cones</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Dalgial\">Dalgial</a>,  <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Pinus_rigida#/media/File:Pinus_rigida.JPG",
    photo3Alt: "Pinus rigida pollen cones",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Pinus_rigida.JPG/256px-Pinus_rigida.JPG",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2013-05-10_09_02_57_Pitch_Pine_new_growth_and_pollen_cones_along_the_Batona_Trail_in_Brendan_T._Byrne_State_Forest,_New_Jersey.jpg\">New growth and pollen cones. </a> <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Pinus_rigida#/media/File:2013-05-10_09_02_57_Pitch_Pine_new_growth_and_pollen_cones_along_the_Batona_Trail_in_Brendan_T._Byrne_State_Forest,_New_Jersey.jpg",
    photo4Alt: "Pitch Pine new growth and pollen cones along the Batona Trail in Brendan T. Byrne State Forest, New Jersey",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/2013-05-10_09_02_57_Pitch_Pine_new_growth_and_pollen_cones_along_the_Batona_Trail_in_Brendan_T._Byrne_State_Forest%2C_New_Jersey.jpg/256px-2013-05-10_09_02_57_Pitch_Pine_new_growth_and_pollen_cones_along_the_Batona_Trail_in_Brendan_T._Byrne_State_Forest%2C_New_Jersey.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Pitch_pine_in_Quogue_(92734p).jpg\">Pitch pine on Long Island in New York, USA</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Rhododendrites\">Rhododendrites</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Pinus_rigida#/media/File:Pitch_pine_in_Quogue_(92734p).jpg",
    photo5Alt: "Pitch pine on Long Island in New York, USA",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Pitch_pine_in_Quogue_%2892734p%29.jpg/256px-Pitch_pine_in_Quogue_%2892734p%29.jpg",
  },
  {
    nameCommon: "Poison Sumac",
    order: "Sapindales",
    family: "Anacardiaceae",
    familyCommon: "Cashew",
    genus: "Toxicodendron",
    species: "Toxicodendron vernix",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "pinnate",
    leafAttachment: "alternate",
    fallColor: [
      "yellow",
      "red"
    ],
    slug: "poisonsumac",
    background: "bg-large/bg-176.jpg",
    backgroundSmall: "bg-small/bg-176.jpg",
    description: "<p>The Poison Sumac, Toxicodendron vernix, is a highly toxic plant native to swampy, wet areas in eastern North America. This deciduous shrub or small tree can grow up to 20 feet tall, though it is more commonly seen as a smaller shrub. It is often identified by its smooth, gray bark and the striking red stems that hold its leaves.</p><p>Poison Sumac's leaves are pinnately compound, usually with 7 to 13 leaflets per leaf. The leaflets are smooth-edged, oblong, and have a glossy texture, turning a brilliant red-orange in the fall. In early summer, it produces small greenish-white flowers, followed by white or grayish fruit that persists through winter. This tree should be avoided, as all parts of the plant contain urushiol, the same oil found in poison ivy and poison oak, which can cause severe allergic reactions upon contact with skin.</p><p>While Poison Sumac is not typically used in landscaping due to its toxic nature, it plays a role in its native wetland ecosystems, providing habitat and food for wildlife. Its striking fall foliage adds a splash of color to these wet environments, but caution is advised when near this plant.</p>",
    photo1Credit: "Poison Sumac foliage. Freekee, CC0, via Wikimedia Commons",
    photo1Href: "https://en.wikipedia.org/wiki/Toxicodendron_vernix#/media/File:Poison_sumac_-_Cedarburg_Bog_State_Natural_Area_in_Ozaukee_County,_Wisconsin,_June2013.jpg",
    photo1Alt: "Poison sumac - Cedarburg Bog State Natural Area in Ozaukee County, Wisconsin, June2013",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Poison_sumac_-_Cedarburg_Bog_State_Natural_Area_in_Ozaukee_County%2C_Wisconsin%2C_June2013.jpg/256px-Poison_sumac_-_Cedarburg_Bog_State_Natural_Area_in_Ozaukee_County%2C_Wisconsin%2C_June2013.jpg",

    photo2Credit: "Poison sumac leaf. Public domain, via Wikimedia Commons",
    photo2Href: "https://en.wikipedia.org/wiki/Toxicodendron_vernix#/media/File:Toxicodendron_vernix.jpg",
    photo2Alt: "Poison sumac leaf",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Toxicodendron_vernix.jpg/320px-Toxicodendron_vernix.jpg",

    photo3Credit: "Poison Sumac range map. Public domain, via Wikimedia Commons",
    photo3Href: "https://en.wikipedia.org/wiki/Toxicodendron_vernix#/media/File:Toxicodendron_vernix_map.png",
    photo3Alt: "Poison Sumac range map",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Toxicodendron_vernix_map.png/256px-Toxicodendron_vernix_map.png",

    photo4Credit: "Botanical illustration. Public domain, via Wikimedia Commons",
    photo4Href: "https://en.wikipedia.org/wiki/Toxicodendron_vernix#/media/File:PoisonSumacDrawing1.jpeg",
    photo4Alt: "Botanical illustration",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/3/33/PoisonSumacDrawing1.jpeg",
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
    slug: "postoak",
    background: "bg-large/bg-187.jpg",
    backgroundSmall: "bg-small/bg-187.jpg",
    description: "<p>The Post Oak, Quercus stellata, is a sturdy and resilient tree native to the eastern United States, particularly valued for its ability to thrive in poor, dry soils. This deciduous tree typically grows to 40-50 feet in height, though it can be taller, and features a dense, rounded canopy, making it an excellent shade tree. Its growth habit is moderate, with the tree developing a thick, rugged trunk and stout branches.</p><p>One of the distinctive features of the Post Oak is its leaves, which have a unique cross-like shape with five lobes, lending a textured appearance to the foliage. These leaves are dark green and leathery, turning to a rich brown or sometimes russet-red in the fall. The Post Oak produces acorns that are a valuable food source for wildlife. Its bark is dark gray, deeply furrowed, adding a rugged texture to the landscape.</p><p>Due to its hardiness and durability, the wood of the Post Oak has traditionally been used for fence posts and railroad ties, hence its common name. Its tolerance to various environmental conditions, coupled with its distinctive appearance, makes it a popular choice for landscaping in both rural and urban areas, particularly in regions with challenging soil conditions.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Houston_campsite_oak.jpg\">Post Oak tree. </a> Larry D. Moore, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Quercus_stellata#/media/File:Houston_campsite_oak.jpg",
    photo1Alt: "Oak tree",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Houston_campsite_oak.jpg/256px-Houston_campsite_oak.jpg",
   
    photo2Credit: "Botanical illustration. Public domain, via Wikimedia Commons",
    photo2Href: "https://en.wikipedia.org/wiki/Quercus_stellata#/media/File:NAS-005f_Quercus_stellata.png",
    photo2Alt: "Quercus stellata, Botanical illustration",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/NAS-005f_Quercus_stellata.png/256px-NAS-005f_Quercus_stellata.png",
  
    photo3Credit: "Post Oak range map. Public domain, via Wikimedia Commons",
    photo3Href: "https://en.wikipedia.org/wiki/Quercus_stellata#/media/File:Quercus_stellata_range_map_1.png",
    photo3Alt: "Post Oak range map, Quercus stellata",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Quercus_stellata_range_map_1.png/256px-Quercus_stellata_range_map_1.png",
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
    slug: "quakingaspen",
    background: "bg-large/bg-163.jpg",
    backgroundSmall: "bg-small/bg-163.jpg",
    description: "<p>The Quaking Aspen, Populus tremuloides, is a captivating and widely distributed deciduous tree, known for its striking foliage and unique bark. Native to cooler regions of North America, it typically reaches 20 to 50 feet in height, forming colonies that are interconnected through their root systems. The tree is most notable for its leaves, which are small, rounded, and finely toothed, attached to flattened petioles that cause them to tremble or 'quake' in the slightest breeze.</p><p>The bark of the Quaking Aspen is smooth, pale, and greenish-white, marked by dark scars. This distinctive bark contributes to the tree's winter appeal. In the fall, the foliage turns a brilliant yellow, creating stunning visual displays in forested landscapes. The Quaking Aspen also produces catkins in the spring, which mature into small capsules containing numerous seeds.</p><p>This tree is not only a visual wonder but also plays a critical ecological role. It provides habitat for wildlife and is a pioneer species, often one of the first to colonize areas disturbed by fire or other natural events. Its ability to rapidly reproduce and its tolerance for a range of conditions make the Quaking Aspen a resilient and important component of the ecosystems it inhabits.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2013-10-06_15_04_21_Aspens_during_autumn_along_the_Changing_Canyon_Nature_Trail_in_Lamoille_Canyon,_Nevada.jpg\">Quaking Aspens during autumn</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Populus_tremuloides#/media/File:2013-10-06_15_04_21_Aspens_during_autumn_along_the_Changing_Canyon_Nature_Trail_in_Lamoille_Canyon,_Nevada.jpg",
    photo1Alt: "Aspens during autumn along the Changing Canyon Nature Trail in Lamoille Canyon, Nevada",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/2013-10-06_15_04_21_Aspens_during_autumn_along_the_Changing_Canyon_Nature_Trail_in_Lamoille_Canyon%2C_Nevada.jpg/256px-2013-10-06_15_04_21_Aspens_during_autumn_along_the_Changing_Canyon_Nature_Trail_in_Lamoille_Canyon%2C_Nevada.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2014-10-05_14_33_30_Aspens_showing_autumn_foliage_coloration_in_Lamoille_Canyon,_Nevada.JPG\">Quaking Aspens showing autumn foliage</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Populus_tremuloides#/media/File:2014-10-05_14_33_30_Aspens_showing_autumn_foliage_coloration_in_Lamoille_Canyon,_Nevada.JPG",
    photo2Alt: "Aspens showing autumn foliage coloration in Lamoille Canyon, Nevada",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/2014-10-05_14_33_30_Aspens_showing_autumn_foliage_coloration_in_Lamoille_Canyon%2C_Nevada.JPG/256px-2014-10-05_14_33_30_Aspens_showing_autumn_foliage_coloration_in_Lamoille_Canyon%2C_Nevada.JPG",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Populus_tremuloides_8163.jpg\">Typical yellow autumn foliage</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Wsiegmund\">Walter Siegmund</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Populus_tremuloides#/media/File:Populus_tremuloides_8163.jpg",
    photo3Alt: "Populus tremuloides Typical yellow autumn foliage",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Populus_tremuloides_8163.jpg/256px-Populus_tremuloides_8163.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Trembling_aspen_(275499901).jpg\">Quaking Aspen trunk and bark</a>, <a href=\"https://www.flickr.com/people/36101697408@N01\">Dano</a>, <a href=\"https://creativecommons.org/licenses/by/2.0/legalcode\" rel=\"license\">CC BY 2.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Populus_tremuloides#/media/File:Trembling_aspen_(275499901).jpg",
    photo4Alt: "Quaking Aspen trunk and bark",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Trembling_aspen_%28275499901%29.jpg/256px-Trembling_aspen_%28275499901%29.jpg",

    photo5Credit: "Quaking Aspen catkins in spring. <a href=\"https://commons.wikimedia.org/wiki/File:2015-03-16_12_22_15_Aspen_catkins_on_Idaho_Street_(Interstate_80_Business)_in_Elko,_Nevada.JPG\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0\">CC BY-SA 4.0</a>, via Wikimedia Commons",
    photo5Href: "https://en.wikipedia.org/wiki/Populus_tremuloides#/media/File:2015-03-16_12_22_15_Aspen_catkins_on_Idaho_Street_(Interstate_80_Business)_in_Elko,_Nevada.JPG",
    photo5Alt: "Aspen catkins in spring",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/2015-03-16_12_22_15_Aspen_catkins_on_Idaho_Street_%28Interstate_80_Business%29_in_Elko%2C_Nevada.JPG/256px-2015-03-16_12_22_15_Aspen_catkins_on_Idaho_Street_%28Interstate_80_Business%29_in_Elko%2C_Nevada.JPG",

    photo6Credit: "Quaking Aspen range map. Public domain, via Wikimedia Commons",
    photo6Href: "https://en.wikipedia.org/wiki/Populus_tremuloides#/media/File:Populus_tremuloides_range_map_2.png",
    photo6Alt: "Quaking Aspen range map",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Populus_tremuloides_range_map_2.png/256px-Populus_tremuloides_range_map_2.png",
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
    slug: "redcherry",
    background: "bg-large/bg-3.jpg",
    backgroundSmall: "bg-small/bg-3.jpg",
    description: "<p>The Red Cherry, Prunus pensylvanica, commonly known as the Pin Cherry or Fire Cherry, is a small to medium-sized deciduous tree native to North America. It typically grows to a height of 15 to 30 feet and is characterized by its slender trunk and a round, open crown. The tree is particularly noted for its smooth, reddish-brown bark, which peels in horizontal strips and becomes darker and scaly as it ages.</p><p>In the spring, the Red Cherry produces a profusion of small, white flowers that blossom in clusters, creating a striking contrast against the emerging leaves. These flowers give way to small, bright red cherries in the summer, which are a food source for birds and wildlife, although too tart for most human tastes. The leaves are narrow and finely toothed, turning to shades of yellow and red in the autumn, adding seasonal interest to the landscape.</p><p>Often found in open, disturbed areas such as clearings or forest edges, the Red Cherry is a pioneer species that quickly colonizes after fires or logging, playing an important role in the ecological succession of its native habitats. Its attractive blossoms and colorful fruit make it a charming addition to naturalistic gardens and rural landscapes.</p>",
    photo1Credit: "Botanical illustration. Public domain, via Wikimedia Commons",
    photo1Href: "https://en.wikipedia.org/wiki/Prunus_pensylvanica#/media/File:Prunus_pensylvanica_Cleaned.jpg",
    photo1Alt: "Prunus pensylvanica illustration",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Prunus_pensylvanica_Cleaned.jpg/256px-Prunus_pensylvanica_Cleaned.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Prunus_pensylvanica_bark.jpg\">Trunk with peeling bark. </a>, <a href=\"https://commons.wikimedia.org/wiki/User:Halava\">Halava</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Prunus_pensylvanica#/media/File:Prunus_pensylvanica_bark.jpg",
    photo2Alt: "Prunus pensylvanica bark",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Prunus_pensylvanica_bark.jpg/256px-Prunus_pensylvanica_bark.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Pin_Cherry_(Prunus_pensylvanica)_-_Newfoundland_2019-08-21.jpg\">Red Cherry in summer</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Ryan_Hodnett\">Ryan Hodnett</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Prunus_pensylvanica#/media/File:Pin_Cherry_(Prunus_pensylvanica)_-_Newfoundland_2019-08-21.jpg",
    photo3Alt: "Pin Cherry (Prunus pensylvanica)",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pin_Cherry_%28Prunus_pensylvanica%29_-_Newfoundland_2019-08-21.jpg/256px-Pin_Cherry_%28Prunus_pensylvanica%29_-_Newfoundland_2019-08-21.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Prunus_pensylvanica_2_(5097486425).jpg\">Red Cherry blossom. </a>, <a href=\"https://www.flickr.com/people/53801642@N06\">Superior National Forest</a>, <a href=\"https://creativecommons.org/licenses/by/2.0/legalcode\" rel=\"license\">CC BY 2.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Prunus_pensylvanica#/media/File:Prunus_pensylvanica_2_(5097486425).jpg",
    photo4Alt: "Prunus pensylvanica blossom",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Prunus_pensylvanica_2_%285097486425%29.jpg/256px-Prunus_pensylvanica_2_%285097486425%29.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Pin-Cherry_(6205408049).gif\">Red Cherry foliage and fruit</a>, <a href=\"https://www.flickr.com/people/28340342@N08\">Homer Edward Price</a>, <a href=\"https://creativecommons.org/licenses/by/2.0/legalcode\" rel=\"license\">CC BY 2.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Prunus_pensylvanica#/media/File:Pin-Cherry_(6205408049).gif",
    photo5Alt: "Red Cherry foliage and fruit",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Pin-Cherry_%286205408049%29.gif",

    photo6Credit: "Red Cherry range map. Public domain, via Wikimedia Commons",
    photo6Href: "https://en.wikipedia.org/wiki/Prunus_pensylvanica#/media/File:Prunus_pensylvanica_range_map_1.png",
    photo6Alt: "Prunus pensylvanica range map",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Prunus_pensylvanica_range_map_1.png/256px-Prunus_pensylvanica_range_map_1.png",
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
    slug: "redmaple",
    background: "bg-large/bg-167.jpg",
    backgroundSmall: "bg-small/bg-166.jpg",
    description: "<p>The Red Maple, Acer rubrum, is a highly versatile and widely distributed deciduous tree in eastern North America. Renowned for its stunning fall color, it typically reaches heights of 40 to 60 feet, forming a rounded to oval crown. This tree is particularly celebrated for its brilliant red foliage in autumn, although its leaves can also turn shades of orange and yellow, creating a spectacular display.</p><p>In early spring, the Red Maple is one of the first trees to blossom, producing small red or yellow flowers before the leaves emerge. These are followed by the production of distinctive red samaras, commonly known as \"helicopter seeds.\" The bark of young trees is smooth and gray, becoming darker and more furrowed with age. Its leaves are 3 to 5 lobed, with a serrated margin and a paler underside.</p><p>The Red Maple's adaptability to a wide range of soil conditions and its vibrant seasonal changes make it a popular choice for landscaping in both urban and rural settings. It provides habitat and food for wildlife, including birds and small mammals, and is often used in parks and public gardens for its ornamental value and moderate size.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2014-10-30_11_09_40_Red_Maple_during_autumn_on_Lower_Ferry_Road_in_Ewing,_New_Jersey.JPG\">Red Maple during autumn </a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Acer_rubrum#/media/File:2014-10-30_11_09_40_Red_Maple_during_autumn_on_Lower_Ferry_Road_in_Ewing,_New_Jersey.JPG",
    photo1Alt: "Red Maple during autumn on Lower Ferry Road in Ewing, New Jersey",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/2014-10-30_11_09_40_Red_Maple_during_autumn_on_Lower_Ferry_Road_in_Ewing%2C_New_Jersey.JPG/256px-2014-10-30_11_09_40_Red_Maple_during_autumn_on_Lower_Ferry_Road_in_Ewing%2C_New_Jersey.JPG",

    photo2Credit: "Leaves on a branchlet. Public domain, via Wikimedia Commons.",
    photo2Href: "https://en.wikipedia.org/wiki/Acer_rubrum#/media/File:Acer_rubrum.jpg",
    photo2Alt: "Leaves on a branchlet.",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Acer_rubrum.jpg/256px-Acer_rubrum.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Rubrum_buds.jpg\">Flowerbuds in spring before blooming.</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Tgalos90\">Tgalos90</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Acer_rubrum#/media/File:Rubrum_buds.jpg",
    photo3Alt: "Flowerbuds in spring before blooming.",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Rubrum_buds.jpg/256px-Rubrum_buds.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Maplekeys.jpg\">Samaras</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Acer_rubrum#/media/File:Maplekeys.jpg",
    photo4Alt: "",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Maplekeys.jpg/320px-Maplekeys.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2015-04-12_16_31_55_Male_Red_Maple_flowers_on_Bayberry_Road_in_Ewing,_New_Jersey.jpg\">Male Red Maple flowers</a> <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Acer_rubrum#/media/File:2015-04-12_16_31_55_Male_Red_Maple_flowers_on_Bayberry_Road_in_Ewing,_New_Jersey.jpg",
    photo5Alt: "Male Red Maple flowers on Bayberry Road in Ewing, New Jersey",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/2015-04-12_16_31_55_Male_Red_Maple_flowers_on_Bayberry_Road_in_Ewing%2C_New_Jersey.jpg/256px-2015-04-12_16_31_55_Male_Red_Maple_flowers_on_Bayberry_Road_in_Ewing%2C_New_Jersey.jpg",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Acer_rubrum_042.jpg\">Red Maple flowers</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Nichole_Ouellette\">Nichole Ouellette</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Acer_rubrum#/media/File:Acer_rubrum_042.jpg",
    photo6Alt: "Acer rubrum, flowers.",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Acer_rubrum_042.jpg/256px-Acer_rubrum_042.jpg",

    photo7Credit: "Red Maple range map. Public domain, via Wikimedia Commons.",
    photo7Href: "https://en.wikipedia.org/wiki/Acer_rubrum#/media/File:Acer_rubrum_range_map.png",
    photo7Alt: "Red Maple range map",
    photo7Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Acer_rubrum_range_map.png/256px-Acer_rubrum_range_map.png",
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
    slug: "redmulberry",
    background: "bg-large/bg-13.jpg",
    backgroundSmall: "bg-small/bg-13.jpg",
    description: "<p>The Red Mulberry, Morus rubra, is a deciduous tree native to the eastern and central regions of the United States. Typically growing to a height of 35 to 50 feet, it is noted for its rounded, spreading canopy and moderate growth rate. The Red Mulberry's bark is dark brown and deeply furrowed, contributing to its textured appearance.</p><p>The tree's leaves are its standout feature - they are large, heart-shaped, and have a rough texture, with some leaves on the same tree having different shapes. In spring, the Red Mulberry produces small, inconspicuous flowers, which are followed by the appearance of its edible fruit. The fruit resembles a blackberry and ripens to a deep red or dark purple, attracting a variety of birds and wildlife. These berries are also edible for humans and are often used in jams, pies, and wines.</p><p>Adaptable to various environmental conditions, the Red Mulberry is often found in woodlands, river valleys, and urban areas. Its fruit can be messy, but its shade and ecological benefits make it a valuable tree for wildlife-friendly gardens and naturalized areas.</p>",
    photo1Credit: "Botanical illustration. Public domain, via Wikimedia Commons.",
    photo1Href: "https://en.wikipedia.org/wiki/Morus_rubra#/media/File:Morus_rubra_250389.png",
    photo1Alt: "Botanical illustration",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Morus_rubra_250389.png/256px-Morus_rubra_250389.png",

    photo2Credit: "Red Mulberry range map. Public domain, via Wikimedia Commons",
    photo2Href: "https://en.wikipedia.org/wiki/Morus_rubra#/media/File:Morus_rubra_range.png",
    photo2Alt: "Red Mulberry range map, Morus rubra",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Morus_rubra_range.png",
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
    slug: "redpine",
    background: "bg-large/bg-45.jpg",
    backgroundSmall: "bg-small/bg-45.jpg",
    description: "<p>The Red Pine, Pinus resinosa, also known as the Norway Pine, is a tall, stately conifer native to northeastern North America. Renowned for its straight, tall trunk and symmetrical crown, it typically reaches heights of 50 to 80 feet, making it a prominent feature in the landscape. The tree gets its common name from its bark, which is a rich reddish-brown, deeply furrowed, and becomes more pronounced as the tree ages.</p><p>The needles of the Red Pine are long, slender, and grouped in pairs, boasting a vibrant green color that adds to the tree's aesthetic appeal. These needles are quite stiff and can be up to 6 inches long. The tree produces small, oval-shaped cones, which remain tightly closed until exposed to the heat of a fire, a unique adaptation to its native fire-prone habitats. In the wild, the Red Pine often grows in sandy soils, demonstrating its adaptability and resilience.</p><p>Valued for its timber, the Red Pine is often used in construction and for making pulpwood. Its tall, straight growth habit and picturesque form also make it a popular choice for reforestation projects and as an ornamental tree in parks and large landscapes.</p>",
    photo1Credit: "Red pine tree. Public domain, via Wikimedia Commons.",
    photo1Href: "https://en.wikipedia.org/wiki/Pinus_resinosa#/media/File:Pinus_resinosa.jpg",
    photo1Alt: "Red pine tree.",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Pinus_resinosa.jpg/384px-Pinus_resinosa.jpg",
    
    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Red_pine_in_the_autumn.jpg\">Red pine in the autumn</a>, <a href=\"https://commons.wikimedia.org/wiki/User:DigbyDalton\">DigbyDalton</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Pinus_resinosa#/media/File:Red_pine_in_the_autumn.jpg",
    photo2Alt: "Red pine in the autumn",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Red_pine_in_the_autumn.jpg/256px-Red_pine_in_the_autumn.jpg",

    photo3Credit: "Pollen cones in spring. Public domain, via Wikimedia Commons",
    photo3Href: "https://en.wikipedia.org/wiki/Pinus_resinosa#/media/File:PinusFlower.jpg",
    photo3Alt: "Pollen cones in spring.",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/PinusFlower.jpg/256px-PinusFlower.jpg",
  
    photo4Credit: "Red pine tree roots. <a href=\"https://en.wikipedia.org/wiki/User:Emery\">Emery</a>, <a href=\"https://commons.wikimedia.org/wiki/File:WisconsinScenery.jpg\">WisconsinScenery</a>, <a href=\"https://creativecommons.org/licenses/by-sa/2.5/legalcode\" rel=\"license\">CC BY-SA 2.5</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Pinus_resinosa#/media/File:WisconsinScenery.jpg",
    photo4Alt: "Red pine tree roots.",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/WisconsinScenery.jpg/256px-WisconsinScenery.jpg",

    photo4Credit: "Red pine range map. Public domain, via Wikimedia Commons.",
    photo4Href: "https://en.wikipedia.org/wiki/Pinus_resinosa#/media/File:Pinus_resinosa_range_map_1.png",
    photo4Alt: "Pinus resinosa range map",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Pinus_resinosa_range_map_1.png/256px-Pinus_resinosa_range_map_1.png",
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
    slug: "redspruce",
    background: "bg-large/bg-63.jpg",
    backgroundSmall: "bg-small/bg-63.jpg",
    description: "<p>The Red Spruce, Picea rubens, is a resilient evergreen conifer native to the eastern North American forests. Growing to heights of 40 to 60 feet, the tree is characterized by a narrow, pyramidal shape with a spire-like top, making it a picturesque addition to the landscape. Its bark is thin, scaly, and gray-brown, becoming more rugged with age.</p><p>The tree's needles are short, stiff, and sharply pointed, displaying a shiny dark green hue. These needles are arranged spirally around the branches, contributing to the dense, full appearance of the tree. The Red Spruce produces small, hanging cones that are reddish-brown when mature, adding subtle decorative interest. In the fall, these cones release their seeds, which are dispersed by the wind.</p><p>Adapted to cold climates and high altitudes, the Red Spruce is commonly found on moist, acidic soils and is a dominant tree in many northern forests. It's valued not only for its aesthetic appeal but also for its wood, which is used in the construction of musical instruments and in the timber industry. The Red Spruce is an important ecological species, providing habitat and food for a variety of wildlife.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:RedSpruceForestOnSpruceKnobWV.JPG\">Dense red spruce forest in its native habitat at the summit of Spruce Knob, West Virginia.</a>, Kenneth P. James, <a href=\"https://creativecommons.org/licenses/by/3.0/us/deed.en\" rel=\"license\">CC BY 3.0 US</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Picea_rubens#/media/File:RedSpruceForestOnSpruceKnobWV.JPG",
    photo1Alt: "Dense red spruce forest in its native habitat at the summit of Spruce Knob, West Virginia.",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/RedSpruceForestOnSpruceKnobWV.JPG/256px-RedSpruceForestOnSpruceKnobWV.JPG",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Picea_rubens_UGA5349098.jpg\">Red spruce needles and cones</a>,Keith Kanoti, Maine Forest Service, Bugwood.org, <a href=\"https://creativecommons.org/licenses/by/3.0/legalcode\" rel=\"license\">CC BY 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Picea_rubens#/media/File:Picea_rubens_UGA5349098.jpg",
    photo2Alt: "Red spruce needles and cones",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Picea_rubens_UGA5349098.jpg/256px-Picea_rubens_UGA5349098.jpg",

    photo3Credit: "Red spruce range map. Public domain, via Wikimedia Commons.",
    photo3Href: "https://en.wikipedia.org/wiki/Picea_rubens#/media/File:Picea_rubens_range_map.png",
    photo3Alt: "",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Picea_rubens_range_map.png/256px-Picea_rubens_range_map.png",
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
    slug: "russianolive",
    background: "bg-large/bg-199.jpg",
    backgroundSmall: "bg-small/bg-199.jpg",
    description: "<p>The Russian Olive, Elaeagnus angustifolia, is a hardy deciduous tree or large shrub native to Europe and Asia, widely naturalized in North America. It typically reaches heights of 15 to 25 feet, characterized by its narrow, elongated leaves and a somewhat irregular, sprawling growth habit. The tree's bark is dark brown and scaly, lending a rugged texture to its appearance.</p><p>The foliage of the Russian Olive is distinctive, with narrow, silvery-green leaves that give the tree a shimmering quality, especially in the breeze. In late spring to early summer, it produces small, fragrant, yellowish flowers, which are followed by olive-like, silver or yellow-green fruits. These fruits are a valuable food source for birds and wildlife. The tree's ability to fix nitrogen in the soil enables it to thrive in poor or disturbed soils, making it useful for land reclamation projects.</p><p>While appreciated for its drought tolerance and ornamental qualities, the Russian Olive is considered invasive in some regions, as it can outcompete native vegetation. Despite this, its unique aesthetic and hardiness make it a popular choice for windbreaks, privacy screens, and naturalized plantings in challenging environments.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Korina_2012-05-15_Elaeagnus_angustifolia_1.jpg\">Russian olive tree. </a>, Katrin Schneider, <a href=\"https://korina.info\">korina.info </a><a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Elaeagnus_angustifolia#/media/File:Korina_2012-05-15_Elaeagnus_angustifolia_1.jpg",
    photo1Alt: "Russian Olive",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Korina_2012-05-15_Elaeagnus_angustifolia_1.jpg/256px-Korina_2012-05-15_Elaeagnus_angustifolia_1.jpg",
 
    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Elaeagnus_angustifolia_0353.JPG\">Russian olive foliage.</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Wsiegmund\">Walter Siegmund</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Elaeagnus_angustifolia#/media/File:Elaeagnus_angustifolia_0353.JPG",
    photo2Alt: "Russian olive foliage.",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Elaeagnus_angustifolia_0353.JPG/256px-Elaeagnus_angustifolia_0353.JPG",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Elaeagnus_angustifolia_MHNT.BOT.2007.43.27.jpg\">Russian olive fruit. </a>, <a href=\"https://commons.wikimedia.org/wiki/User:Erc%C3%A9\">Roger Culos</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Elaeagnus_angustifolia#/media/File:Elaeagnus_angustifolia_MHNT.BOT.2007.43.27.jpg",
    photo3Alt: "Russian olive fruit.",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Elaeagnus_angustifolia_MHNT.BOT.2007.43.27.jpg/256px-Elaeagnus_angustifolia_MHNT.BOT.2007.43.27.jpg",
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
    slug: "sassafras",
    background: "bg-large/bg-14.jpg",
    backgroundSmall: "bg-small/bg-14.jpg",
    description: "<p>The Sassafras tree, Sassafras albidum, is a distinctive and aromatic deciduous tree native to eastern North America. Known for its unique foliage and fragrant properties, it typically grows to 30-60 feet in height. One of its most notable features is the variety of leaf shapes present on a single tree – some leaves are oval, others have two lobes (mitten-shaped), and some feature three lobes.</p><p>In spring, the Sassafras tree produces small, yellow-green flowers, which are followed by dark blue berries on bright red stalks, attractive to birds and wildlife. The tree's bark is thick and deeply furrowed, with a reddish-brown color. Sassafras leaves turn vibrant shades of yellow, orange, and red in the fall, creating a striking display. Historically, various parts of the tree, especially the roots and bark, were used to make sassafras tea and were a key ingredient in root beer.</p><p>The Sassafras tree is valued for more than its aromatic properties and visual appeal. It's often used in landscaping for its unique foliage and brilliant fall color. Additionally, its ability to thrive in a variety of soil types and conditions makes it a resilient choice for reforestation projects and naturalized areas.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Rennes_ParcOberthur_Sassafras_albidum.jpg\">Sassafras tree. </a>, <a href=\"https://commons.wikimedia.org/wiki/User:Pymouss\">Pymouss</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Sassafras_albidum#/media/File:Rennes_ParcOberthur_Sassafras_albidum.jpg",
    photo1Alt: "Sassafras tree",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Rennes_ParcOberthur_Sassafras_albidum.jpg/256px-Rennes_ParcOberthur_Sassafras_albidum.jpg",

    photo2Credit: "Sassafras a host for the spicebush swallowtail. Public domain, via Wikimedia Commons",
    photo2Href: "https://en.wikipedia.org/wiki/Sassafras_albidum#/media/File:AbbotV1Tab02A.jpg",
    photo2Alt: "Illustration of Sassafras leaf and the spicebush swallowtail butterfly.",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/AbbotV1Tab02A.jpg/256px-AbbotV1Tab02A.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/User:Rlevse\">Rlevse</a>, <a href=\"https://commons.wikimedia.org/wiki/File:Sassafras_albidum_3_lobe_variations_A.JPG\">Sassafras with all 3 lobe variations. </a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Sassafras_albidum#/media/File:Sassafras_albidum_3_lobe_variations_A.JPG",
    photo3Alt: "Sassafras with all 3 lobe variations.",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Sassafras_albidum_3_lobe_variations_A.JPG/256px-Sassafras_albidum_3_lobe_variations_A.JPG",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Sassafras_albidum_seed.JPG\">Sassafras albidum seed</a>, <a href=\"https://en.wikipedia.org/wiki/User:IvanTortuga\">Cody Hough</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Sassafras_albidum#/media/File:Sassafras_albidum_seed.JPG",
    photo4Alt: "Sassafras fruit",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Sassafras_albidum_seed.JPG/256px-Sassafras_albidum_seed.JPG",
    
    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Sassafras_albidum_Trunk_Bark_3264px.jpg\">Sassafras albidum Trunk Bark</a>, Photo by and (c)2006 Derek Ramsey (<a href=\"https://en.wikipedia.org/wiki/User:Ram-Man\">Ram-Man</a>), <a href=\"https://creativecommons.org/licenses/by-sa/2.5/legalcode\" rel=\"license\">CC BY-SA 2.5</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Sassafras_albidum#/media/File:Sassafras_albidum_Trunk_Bark_3264px.jpg",
    photo5Alt: "Sassafras albidum trunk bark",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Sassafras_albidum_Trunk_Bark_3264px.jpg/256px-Sassafras_albidum_Trunk_Bark_3264px.jpg",

    photo6Credit: "Range map of Sassafras albidum. Public domain, via Wikimedia Commons.",
    photo6Href: "https://en.wikipedia.org/wiki/Sassafras_albidum#/media/File:Sassafras_albidum_range_map.jpg",
    photo6Alt: "Range map of Sassafras albidum.",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Sassafras_albidum_range_map.jpg/256px-Sassafras_albidum_range_map.jpg",    
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
    slug: "scarletoak",
    background: "bg-large/bg-193.jpg",
    backgroundSmall: "bg-small/bg-193.jpg",
    description: "<p>The Scarlet Oak, Quercus coccinea, is a striking deciduous tree renowned for its vibrant fall coloration. Native to the eastern United States, it typically reaches heights of 60 to 75 feet, boasting a rounded to irregular crown that spreads as the tree matures. This oak is especially valued for its decorative appeal in autumn when its deeply lobed, glossy green leaves turn a brilliant scarlet, living up to its name.</p><p>The tree produces small, inconspicuous flowers in the spring, followed by the development of acorns that are a valuable food source for wildlife. The acorns have a distinct, deep cup that covers almost half of the nut. The bark of the Scarlet Oak is dark gray, smooth in young trees, becoming ridged and furrowed with age. This textural bark adds winter interest to the landscape.</p><p>Adaptable to various soil conditions, including poor and dry soils, the Scarlet Oak is often used in urban and suburban landscapes. Its tolerance to drought and air pollution makes it a suitable choice for city plantings. The tree's dramatic fall foliage and stately form make it a popular selection for parks, large yards, and naturalized areas.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2014-11-02_14_15_16_Scarlet_Oak_foliage_during_autumn_on_Hunters_Ridge_Drive_in_Hopewell_Township,_New_Jersey.jpg\">Scarlet Oak foliage during autumn on Hunters Ridge Drive in Hopewell Township, New Jersey</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Quercus_coccinea#/media/File:2014-11-02_14_15_16_Scarlet_Oak_foliage_during_autumn_on_Hunters_Ridge_Drive_in_Hopewell_Township,_New_Jersey.jpg",
    photo1Alt: "Scarlet Oak foliage during autumn on Hunters Ridge Drive in Hopewell Township, New Jersey",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/2014-11-02_14_15_16_Scarlet_Oak_foliage_during_autumn_on_Hunters_Ridge_Drive_in_Hopewell_Township%2C_New_Jersey.jpg/256px-2014-11-02_14_15_16_Scarlet_Oak_foliage_during_autumn_on_Hunters_Ridge_Drive_in_Hopewell_Township%2C_New_Jersey.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Quercus_coccineum_spring_foliage_and_flower.jpg\">Foliage and male flower</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Ptelea\">Ptelea</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Quercus_coccinea#/media/File:Quercus_coccineum_spring_foliage_and_flower.jpg",
    photo2Alt: "Foliage and male flower",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Quercus_coccineum_spring_foliage_and_flower.jpg/256px-Quercus_coccineum_spring_foliage_and_flower.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2014-11-02_11_42_07_Scarlet_Oak_foliage_during_autumn_along_Lower_Ferry_Road_in_Ewing,_New_Jersey.JPG\">Scarlet Oak foliage during autumn along Lower Ferry Road in Ewing, New Jersey</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Quercus_coccinea#/media/File:2014-11-02_11_42_07_Scarlet_Oak_foliage_during_autumn_along_Lower_Ferry_Road_in_Ewing,_New_Jersey.JPG",
    photo3Alt: "Scarlet Oak foliage during autumn along Lower Ferry Road in Ewing, New Jersey",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/2014-11-02_11_42_07_Scarlet_Oak_foliage_during_autumn_along_Lower_Ferry_Road_in_Ewing%2C_New_Jersey.JPG/256px-2014-11-02_11_42_07_Scarlet_Oak_foliage_during_autumn_along_Lower_Ferry_Road_in_Ewing%2C_New_Jersey.JPG",
    
    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:ScarletOak.jpg\">Scarlet oak</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Tamparitus\">Tamparitus</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Quercus_coccinea#/media/File:ScarletOak.jpg",
    photo4Alt: "Scarlet oak",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ScarletOak.jpg/256px-ScarletOak.jpg",

    photo5Credit: "Scarlet oak range map. Public domain, via Wikimedia Commons.",
    photo5Href: "https://en.wikipedia.org/wiki/Quercus_coccinea#/media/File:Quercus_coccinea_range_map_1.png",
    photo5Alt: "Scarlet oak range map.",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Quercus_coccinea_range_map_1.png/256px-Quercus_coccinea_range_map_1.png",
  },
  {
    nameCommon: "Scotch Pine",
    aka: [
      "Scots Pine",
      "Baltic Pine"
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
    slug: "scotchpine",
    background: "bg-large/bg-130.jpg",
    backgroundSmall: "bg-small/bg-130.jpg",
    description: "<p>The Scotch Pine, Pinus sylvestris, is a robust and adaptable evergreen conifer widely distributed across Europe and Asia, and extensively planted in North America. This tree typically reaches heights of 30 to 60 feet, characterized by its distinctive, irregular form and a crown that becomes more open and rounded with age. The Scotch Pine is particularly noted for its attractive, flaky bark, which is a combination of orange-brown at the top and grayish-white lower down, giving it a two-toned appearance.</p><p>The needles of the Scotch Pine are bluish-green, twisted, and grow in pairs, lending a textured look to the branches. In winter, the contrast between the dark foliage and the brighter bark is particularly striking. The tree produces small, conical cones that add further interest. Originally used for timber and resin, the Scotch Pine is also a popular Christmas tree choice due to its pleasing shape and needle retention properties.</p><p>With its tolerance for a variety of soil types and conditions, including poor soils and urban environments, the Scotch Pine is a favored choice for reforestation projects, windbreaks, and ornamental plantings. Its resilience and distinctive appearance make it a valuable addition to diverse landscapes.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Skuleskogen_pine.jpg\">Scots Pine tree. </a>, Mickaël Delcey (<a href=\"https://commons.wikimedia.org/wiki/User:Silverkey\">Silverkey</a>), <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Pinus_sylvestris#/media/File:Skuleskogen_pine.jpg",
    photo1Alt: "Scots Pine in Tärnättholmarna Presque-isle, Skuleskogen national park.",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Skuleskogen_pine.jpg/256px-Skuleskogen_pine.jpg",

    photo2Credit: "Needles and cones. Public domain, via Wikimedia Commons.",
    photo2Href: "https://en.wikipedia.org/wiki/Pinus_sylvestris#/media/File:Conif%C3%A8re_Dordogne.jpg",
    photo2Alt: "Pinus sylvestris var. sylvestris.",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Conif%C3%A8re_Dordogne.jpg/256px-Conif%C3%A8re_Dordogne.jpg",

    photo3Credit: "Botanical illustration. Public domain, via Wikimedia Commons.",
    photo3Href: "https://en.wikipedia.org/wiki/Pinus_sylvestris#/media/File:Pinus_sylvestris_Sturm01.jpg",
    photo3Alt: "Botanical illustration.",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pinus_sylvestris_Sturm01.jpg/256px-Pinus_sylvestris_Sturm01.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Pinus_sylvestris_MHNT.BOT.2005.0.971.jpg\">Mature open cones and seeds. </a> <a href=\"https://commons.wikimedia.org/wiki/User:Archaeodontosaurus\">Didier Descouens</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Pinus_sylvestris#/media/File:Pinus_sylvestris_MHNT.BOT.2005.0.971.jpg",
    photo4Alt: "Mature open cones and seeds.",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Pinus_sylvestris_MHNT.BOT.2005.0.971.jpg/256px-Pinus_sylvestris_MHNT.BOT.2005.0.971.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Pinus_Sylvestris_8407.jpg\">Bark on a mature tree.</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Flominator\">Flominator</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Pinus_sylvestris#/media/File:Pinus_Sylvestris_8407.jpg",
    photo5Alt: "Bark on a mature tree.",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Pinus_Sylvestris_8407.jpg/256px-Pinus_Sylvestris_8407.jpg",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Pine_releasing_pollen_into_the_wind_in_Tuntorp_1.jpg\">Pine releasing pollen into the wind.</a>, <a href=\"https://commons.wikimedia.org/wiki/User:W.carter\">W.carter</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Pinus_sylvestris#/media/File:Pine_releasing_pollen_into_the_wind_in_Tuntorp_1.jpg",
    photo6Alt: "Pine releasing pollen into the wind",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Pine_releasing_pollen_into_the_wind_in_Tuntorp_1.jpg/256px-Pine_releasing_pollen_into_the_wind_in_Tuntorp_1.jpg",

    photo7Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Pinus_sylvestris_young_female_cone_-_Keila.jpg\">Immature female cone. </a>, <a href=\"https://commons.wikimedia.org/wiki/User:Iifar\">Ivar Leidus</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo7Href: "https://en.wikipedia.org/wiki/Pinus_sylvestris#/media/File:Pinus_sylvestris_young_female_cone_-_Keila.jpg",
    photo7Alt: "Immature female cone.",
    photo7Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Pinus_sylvestris_young_female_cone_-_Keila.jpg/256px-Pinus_sylvestris_young_female_cone_-_Keila.jpg",
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
    compoundStructure: "pinnate",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "shagbarkhickory",
    background: "bg-large/bg-168.jpg",
    backgroundSmall: "bg-small/bg-168.jpg",
    description: "<p>The Shagbark Hickory, Carya ovata, is a striking deciduous tree native to the eastern United States, renowned for its distinctive bark and valuable nuts. It typically grows to a height of 60 to 80 feet, with some trees reaching much taller. The tree's common name derives from its bark, which peels away in large, shaggy strips, providing a rugged and textured appearance that is especially noticeable in the winter landscape.</p><p>The leaves of the Shagbark Hickory are compound, usually consisting of five leaflets, which are dark green and turn to a rich golden hue in the fall. In spring, the tree produces small, yellow-green flowers, followed by the development of its fruit: a large nut with a thick, hard shell encased in a green husk. These nuts are highly prized for their flavor and are an important food source for wildlife.</p><p>The wood of the Shagbark Hickory is extremely hard and durable, making it a popular choice for tool handles and other applications where strength is required. The tree's unique bark, valuable nuts, and brilliant fall color make it a desirable species for both its aesthetic and practical qualities in larger landscapes and naturalized areas.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2021-03-03_10_34_58_Shagbark_Hickory_trunk_within_the_woodlands_along_the_West_Branch_Shabakunk_Creek_in_Ewing_Township,_Mercer_County,_New_Jersey.jpg\">Shagbark Hickory bark. </a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Carya_ovata#/media/File:2021-03-03_10_34_58_Shagbark_Hickory_trunk_within_the_woodlands_along_the_West_Branch_Shabakunk_Creek_in_Ewing_Township,_Mercer_County,_New_Jersey.jpg",
    photo1Alt: "Shagbark hickory bark",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/2021-03-03_10_34_58_Shagbark_Hickory_trunk_within_the_woodlands_along_the_West_Branch_Shabakunk_Creek_in_Ewing_Township%2C_Mercer_County%2C_New_Jersey.jpg/256px-2021-03-03_10_34_58_Shagbark_Hickory_trunk_within_the_woodlands_along_the_West_Branch_Shabakunk_Creek_in_Ewing_Township%2C_Mercer_County%2C_New_Jersey.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Shagbark_hickory_spring_leaf_cluster.jpg\">Spring leaf cluster. </a>, <a href=\"https://commons.wikimedia.org/wiki/User:Dcrjsr\">Dcrjsr</a>, <a href=\"https://creativecommons.org/licenses/by/3.0/legalcode\" rel=\"license\">CC BY 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Carya_ovata#/media/File:Shagbark_hickory_spring_leaf_cluster.jpg",
    photo2Alt: "Spring leaf cluster",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Shagbark_hickory_spring_leaf_cluster.jpg/256px-Shagbark_hickory_spring_leaf_cluster.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Carya_ovata_leaf_2.jpg\">Shagbark hickory leaf. </a>, Kristel Schoonderwoerd, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/legalcode\" rel=\"license\">CC BY-SA 2.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Carya_ovata#/media/File:Carya_ovata_leaf_2.jpg",
    photo3Alt: "Shagbark hickory leaf.",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Carya_ovata_leaf_2.jpg/512px-Carya_ovata_leaf_2.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Carya_ovata_immature_fruit.jpg\">Immature fruit. </a>, <a href=\"https://commons.wikimedia.org/wiki/User:Akgarb\">William (Ned) Friedman</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Carya_ovata#/media/File:Carya_ovata_immature_fruit.jpg",
    photo4Alt: "Immature fruit.",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Carya_ovata_immature_fruit.jpg/256px-Carya_ovata_immature_fruit.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Carya_ovata_Noyer_blanc.jpg\">Shagbark hickory fruit.</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Ar_rouz\">Ar rouz</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Carya_ovata#/media/File:Carya_ovata_Noyer_blanc.jpg",
    photo5Alt: "Shagbark hickory fruit.",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Carya_ovata_Noyer_blanc.jpg/256px-Carya_ovata_Noyer_blanc.jpg",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Carya_ovata_female_flowers.jpg\">Female flowers</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Akgarb\">William (Ned) Friedman</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Carya_ovata#/media/File:Carya_ovata_female_flowers.jpg",
    photo6Alt: "",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Carya_ovata_female_flowers.jpg/256px-Carya_ovata_female_flowers.jpg",

    photo7Credit: "Natural range map. Public domain, via Wikimedia Commons.",
    photo7Href: "https://en.wikipedia.org/wiki/Carya_ovata#/media/File:Carya_ovata_range_map_1.png",
    photo7Alt: "Natural range map.",
    photo7Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Carya_ovata_range_map_1.png/256px-Carya_ovata_range_map_1.png",
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
    compoundStructure: "pinnate",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "shellbarkhickory",
    background: "bg-large/bg-179.jpg",
    backgroundSmall: "bg-small/bg-179.jpg",
    description: "<p>The Shellbark Hickory, Carya laciniosa, also known as the Kingnut Hickory, is a towering deciduous tree native to the central and eastern United States. It is renowned for its size and strength, growing to impressive heights of 60 to 80 feet. This tree is a close relative of the Shagbark Hickory, but it can be distinguished by its larger leaves and nuts, as well as its shaggier bark, which peels away in even larger strips, giving the tree its characteristic rugged appearance.</p><p>The leaves of the Shellbark Hickory are compound, typically with seven to nine leaflets, which are bright green and turn to a golden yellow in the fall. The tree is also known for producing some of the largest nuts of all hickories, encased in a thick husk. These nuts are not only a critical food source for wildlife but are also valued for their sweet flavor and are sought after for culinary uses.</p><p>Due to its deep taproot, the Shellbark Hickory is difficult to transplant and is thus less commonly found in urban or landscaped settings. However, its strong wood, large nuts, and attractive fall foliage make it a valuable tree in natural forests and rural areas, where it contributes to the ecosystem's biodiversity.</p>",

    photo1Credit: "Leaves and bark. Public domain, via Wikimedia Commons.",
    photo1Href: "https://en.wikipedia.org/wiki/Carya_laciniosa#/media/File:Carya_laciniosa_NRCS-001.jpg",
    photo1Alt: "Leaves and bark.",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Carya_laciniosa_NRCS-001.jpg/256px-Carya_laciniosa_NRCS-001.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Carya_laciniosa_fruit.jpg\">Maturing fruit. </a>, <a href=\"https://commons.wikimedia.org/wiki/User:Akgarb\">William (Ned) Friedman</a> <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Carya_laciniosa#/media/File:Carya_laciniosa_fruit.jpg",
    photo2Alt: "Maturing fruit",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Carya_laciniosa_fruit.jpg/256px-Carya_laciniosa_fruit.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Carya_laciniosa-_Virginia.jpg\">Fruit and Nuts. </a>, <a href=\"https://commons.wikimedia.org/wiki/User:KGools\">KGools</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Carya_laciniosa#/media/File:Carya_laciniosa-_Virginia.jpg",
    photo3Alt: "Fruit and Nuts",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Carya_laciniosa-_Virginia.jpg/256px-Carya_laciniosa-_Virginia.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Carya_laciniosa_(Shellbark_Hickory)_(32521231364).jpg\">Shellbark hickory bark.</a>, <a href=\"https://www.flickr.com/people/138014579@N08\">Plant Image Library</a> from Boston, USA, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/legalcode\" rel=\"license\">CC BY-SA 2.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Carya_laciniosa#/media/File:Carya_laciniosa_(Shellbark_Hickory)_(32521231364).jpg",
    photo4Alt: "Shellbark hickory bark.",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Carya_laciniosa_%28Shellbark_Hickory%29_%2832521231364%29.jpg/256px-Carya_laciniosa_%28Shellbark_Hickory%29_%2832521231364%29.jpg",

    photo5Credit: "<a href=\"https://www.flickr.com/people/138014579@N08\">Catkins of male flowers. <a href=\"https://commons.wikimedia.org/wiki/File:Carya_laciniosa_(Shellbark_Hickory)_(34355481560).jpg\">Shellbark Hickory</a>, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/legalcode\" rel=\"license\">CC BY-SA 2.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Carya_laciniosa#/media/File:Carya_laciniosa_(Shellbark_Hickory)_(34355481560).jpg",
    photo5Alt: "Catkins of male flowers",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Carya_laciniosa_%28Shellbark_Hickory%29_%2834355481560%29.jpg/256px-Carya_laciniosa_%28Shellbark_Hickory%29_%2834355481560%29.jpg",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Carya_laciniosa_female_flower.jpg\">Female flower. </a> <a href=\"https://commons.wikimedia.org/wiki/User:Akgarb\">William (Ned) Friedman</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Carya_laciniosa#/media/File:Carya_laciniosa_female_flower.jpg",
    photo6Alt: "Female flower",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Carya_laciniosa_female_flower.jpg/256px-Carya_laciniosa_female_flower.jpg",

    photo7Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Shellbark_trunk-_Virginia.jpg\">Mature Shellbark trunk</a>, <a href=\"https://commons.wikimedia.org/wiki/User:KGools\">KGools</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo7Href: "https://en.wikipedia.org/wiki/Carya_laciniosa#/media/File:Shellbark_trunk-_Virginia.jpg",
    photo7Alt: "Shellbark trunk",
    photo7Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Shellbark_trunk-_Virginia.jpg/256px-Shellbark_trunk-_Virginia.jpg",

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
    slug: "shingleoak",
    background: "bg-large/bg-16b.jpg",
    backgroundSmall: "bg-small/bg-16b.jpg",
    description: "<p>The Shingle Oak, Quercus imbricaria, is a distinct member of the oak family, known for its uncharacteristically unlobed, laurel-like leaves. Native to the central and eastern United States, it grows to a medium size, typically reaching 40 to 60 feet in height. This oak develops a rounded, spreading canopy that provides ample shade, making it a valued landscape tree.</p><p>Unlike most oaks, the Shingle Oak's leaves are smooth-edged, resembling those of laurels, with a glossy, dark green upper surface and a paler underside. In the fall, these leaves turn to shades of yellow, orange, and brown. The tree produces typical oak acorns, which are a food source for various wildlife. Its bark, gray-brown and ridged, adds texture to the tree's appearance, especially in the winter months.</p><p>Historically, the wood of the Shingle Oak was used for roof shingles, giving the tree its common name. Today, it is appreciated for its ornamental qualities and adaptability to different soil conditions. The Shingle Oak is an attractive choice for parks, large gardens, and naturalized areas, where its unique foliage can be fully appreciated.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Quercus_imbricariaZZ.jpg\">Shingle oak tree.</a>, <a href=\"https://creativecommons.org/licenses/by/2.5/legalcode\" rel=\"license\">CC BY 2.5</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Quercus_imbricaria#/media/File:Quercus_imbricariaZZ.jpg",
    photo1Alt: "Shingle oak tree.",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Quercus_imbricariaZZ.jpg/320px-Quercus_imbricariaZZ.jpg",

    photo2Credit: "Shingle oak leaves. Public domain, via Wikimedia Commons.",
    photo2Href: "https://en.wikipedia.org/wiki/Quercus_imbricaria#/media/File:Quercus_imbricaria_(USDA).jpg",
    photo2Alt: "Shingle oak leaves.",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Quercus_imbricaria_%28USDA%29.jpg/320px-Quercus_imbricaria_%28USDA%29.jpg",

    photo3Credit: "Natural range map. Public domain, via Wikimedia Commons.",
    photo3Href: "https://en.wikipedia.org/wiki/Quercus_imbricaria#/media/File:Quercus_imbricaria_range_map_1.png",
    photo3Alt: "Natural range map.",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Quercus_imbricaria_range_map_1.png/256px-Quercus_imbricaria_range_map_1.png",
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
    slug: "shortleafpine",
    background: "bg-large/bg-67.jpg",
    backgroundSmall: "bg-small/bg-67.jpg",
    description: "<p>The Shortleaf Pine, Pinus echinata, is a resilient and versatile evergreen conifer native to the southeastern United States. Characterized by its longevity and adaptability, this tree commonly reaches heights of 65 to 100 feet, though some specimens can grow even taller. The Shortleaf Pine is notable for its relatively short needles, which are about 3 to 5 inches long and grow in bundles of two or occasionally three.</p><p>The tree's bark is scaly and dark gray-brown, becoming deeply fissured with age. It produces small, prickly cones that are somewhat rounded and remain on the tree for several years. The Shortleaf Pine is fire-adapted, with the ability to sprout new growth from its stump or roots if the upper part of the tree is damaged. This characteristic makes it an important species in fire-prone ecosystems.</p><p>Valued for its timber, the Shortleaf Pine is widely used in construction and for making paper. Its adaptability to a range of soil types and conditions, including poor and dry soils, makes it a key species for reforestation and afforestation projects. The Shortleaf Pine's combination of beauty, strength, and resilience makes it a popular choice for landscaping in its native range.</p>",
    photo1Credit: "Shortleaf pine trees. Public domain, via Wikimedia Commons ",
    photo1Href: "https://en.wikipedia.org/wiki/Pinus_echinata#/media/File:Shortleaf_pine.jpg",
    photo1Alt: "Shortleaf pine trees.",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/2/22/Shortleaf_pine.jpg",

    photo2Credit: "Botanical illustration. Public domain, via Wikimedia Commons.",
    photo2Href: "https://en.wikipedia.org/wiki/Pinus_echinata#/media/File:Shortleaf_foliage_drawing.jpg",
    photo2Alt: "Botanical illustration.",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Shortleaf_foliage_drawing.jpg/256px-Shortleaf_foliage_drawing.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Pinus_echinata_bark_detail_2.jpg\">Bark with resin pockets visible. </a><a href=\"https://commons.wikimedia.org/wiki/User:Dholish\">Dholish</a>, <a href=\"https://creativecommons.org/licenses/by/4.0/legalcode\" rel=\"license\">CC BY 4.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Pinus_echinata#/media/File:Pinus_echinata_bark_detail_2.jpg",
    photo3Alt: "Bark with resin pockets visible",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Pinus_echinata_bark_detail_2.jpg/256px-Pinus_echinata_bark_detail_2.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Pinus_echinata_seedlings.jpg\">Seedlings for planting, showing J-shaped crooks near base of foliage. </a> <a href=\"https://commons.wikimedia.org/wiki/User:FUchesco\">FUchesco</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Pinus_echinata#/media/File:Pinus_echinata_seedlings.jpg",
    photo4Alt: "Seedlings for planting, showing J-shaped crooks near base of foliage",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Pinus_echinata_seedlings.jpg/256px-Pinus_echinata_seedlings.jpg",

    photo5Credit: "Natural range map. Public domain, via Wikimedia Commons.",
    photo5Href: "https://en.wikipedia.org/wiki/Pinus_echinata#/media/File:Pinus_echinata_range_map.png",
    photo5Alt: "Natural range map.",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Pinus_echinata_range_map.png/256px-Pinus_echinata_range_map.png",
  },
  {
    nameCommon: "Shumard Oak",
    aka: [
      "Shumard oak",
      "Spotted oak", 
      "Schneck oak", 
      "Shumard red oak", 
      "Swamp red oak"
    ],
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
    slug: "shumardoak",
    background: "bg-large/bg-190.jpg",
    backgroundSmall: "bg-small/bg-190.jpg",
    description: "<p>The Shumard Oak, Quercus shumardii, is a robust and stately tree, a member of the red oak group native to North America. It stands out in any landscape for its size and strength, typically reaching heights of 40 to 60 feet, with some trees growing even taller. This oak is known for its straight trunk and well-formed, rounded canopy that provides extensive shade and visual appeal.</p><p>The leaves of the Shumard Oak are deeply lobed with pointed tips, a classic oak leaf shape, turning a brilliant crimson or russet in the fall. This spectacular color display is one of the tree's most admired features. In spring, it produces inconspicuous flowers, followed by acorns that are a vital food source for various wildlife. The bark of the Shumard Oak is dark and ridged, becoming more furrowed with age.</p><p>With its tolerance for different soil types, including wet and compacted soils, the Shumard Oak is frequently used in urban environments as a street or park tree. It is also valued for its fast growth rate and majestic presence in large landscapes, estates, and naturalized areas.</p>",

    photo1Credit: "Leaves in summer. Public domain, via Wikimedia Commons.",
    photo1Href: "https://en.wikipedia.org/wiki/Quercus_shumardii#/media/File:Shumard_oak_leaves.JPG",
    photo1Alt: "Leaves in summer.",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Shumard_oak_leaves.JPG/256px-Shumard_oak_leaves.JPG",

    photo2Credit: "Maturing acorn. Public domain, via Wikimedia Commons.",
    photo2Href: "https://en.wikipedia.org/wiki/Quercus_shumardii#/media/File:Quercus_shumardii.jpg",
    photo2Alt: "Maturing acorn",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Quercus_shumardii.jpg/256px-Quercus_shumardii.jpg",

    photo3Credit: "Generalized natural range map. Public domain, via Wikimedia Commons.",
    photo3Href: "https://en.wikipedia.org/wiki/Quercus_shumardii#/media/File:Quercus_shumardii_range_map_1.png",
    photo3Alt: "Generalized natural range map",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Quercus_shumardii_range_map_1.png/256px-Quercus_shumardii_range_map_1.png",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:EncinoRojo.jpg\">Fall color of a planted Shumard oak. </a> <a href=\"https://commons.wikimedia.org/wiki/User:Tmasjeg\">Tmasjeg</a> <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Quercus_shumardii#/media/File:EncinoRojo.jpg",
    photo4Alt: "Fall color of a planted Shumard oak",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/EncinoRojo.jpg/256px-EncinoRojo.jpg",
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
    slug: "siberianelm",
    background: "bg-large/bg-180.jpg",
    backgroundSmall: "bg-small/bg-180.jpg",
    description: "<p>The Siberian Elm, Ulmus pumila, is a hardy and fast-growing deciduous tree, native to eastern Asia and extensively planted in various parts of the world. It typically reaches heights of 50 to 70 feet, characterized by a rounded, open canopy and a somewhat irregular form. This tree is particularly valued for its ability to withstand harsh conditions, including poor soil, air pollution, and drought.</p><p>The leaves of the Siberian Elm are small and ovate with a toothed margin and a rough texture, turning yellow in the fall. In early spring, the tree produces inconspicuous, small flowers, followed by flat, winged seeds known as samaras. The bark of the Siberian Elm is dark gray and deeply furrowed, providing a textured appearance throughout the year.</p><p>While the Siberian Elm is admired for its resilience and adaptability, it is considered invasive in some areas, as it can spread rapidly and outcompete native vegetation. Despite this, its quick growth and tolerance to urban environments make it a common choice for street and windbreak plantings in challenging conditions.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Ulmus_pumila.jpg\">Typical cultivated Siberian elm. </a> <a href=\"https://commons.wikimedia.org/wiki/User:Bruce_Marlin\">Bruce Marlin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Ulmus_pumila#/media/File:Ulmus_pumila.jpg",
    photo1Alt: "Typical cultivated Siberian elm",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Ulmus_pumila.jpg/256px-Ulmus_pumila.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Ulmus_pumila_leaves.jpg\">Summer foliage. </a> <a href=\"https://en.wikipedia.org/wiki/User:Melburnian\">Melburnian</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Ulmus_pumila#/media/File:Ulmus_pumila_leaves.jpg",
    photo2Alt: "Summer foliage",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Ulmus_pumila_leaves.jpg/256px-Ulmus_pumila_leaves.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Ulmus_pumila_(5107823814).jpg\">Buds. </a>, <a href=\"https://www.flickr.com/people/35478170@N08\">Matt Lavin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/legalcode\" rel=\"license\">CC BY-SA 2.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Ulmus_pumila#/media/File:Ulmus_pumila_(5107823814).jpg",
    photo3Alt: "",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Ulmus_pumila_%285107823814%29.jpg/256px-Ulmus_pumila_%285107823814%29.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:비술나무_줄기.JPG\">Siberian elm bark. </a>, <a href=\"https://commons.wikimedia.org/wiki/User:Dalgial\">Dalgial</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Ulmus_pumila#/media/File:%EB%B9%84%EC%88%A0%EB%82%98%EB%AC%B4_%EC%A4%84%EA%B8%B0.JPG",
    photo4Alt: "Siberian elm bark.",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/%EB%B9%84%EC%88%A0%EB%82%98%EB%AC%B4_%EC%A4%84%EA%B8%B0.JPG/256px-%EB%B9%84%EC%88%A0%EB%82%98%EB%AC%B4_%EC%A4%84%EA%B8%B0.JPG",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:U.pumila_cvasti.jpg\">Siberian elm flowers</a>, Original uploader was <a href=\"https://sr.wikipedia.org/wiki/User:Gmihail\">Gmihail</a> at <a href=\"https://sr.wikipedia.org\">sr.wikipedia</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/rs/deed.en\" rel=\"license\">CC BY-SA 3.0 RS</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Ulmus_pumila#/media/File:U.pumila_cvasti.jpg",
    photo5Alt: "Siberian elm flowers",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/U.pumila_cvasti.jpg/256px-U.pumila_cvasti.jpg",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Elm_in_beijing.JPG\">Immature fruits. </a>, <a href=\"https://commons.wikimedia.org/wiki/User:Shizhao\">Shizhao</a>, <a href=\"https://creativecommons.org/licenses/by-sa/2.5/legalcode\" rel=\"license\">CC BY-SA 2.5</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Ulmus_pumila#/media/File:Elm_in_beijing.JPG",
    photo6Alt: "Immature fruits",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Elm_in_beijing.JPG/256px-Elm_in_beijing.JPG",
  },
  {
    nameCommon: "Silver Maple",
    aka: [
      "swamp maple", "water maple", "silverleaf maple", "white maple", "soft maple"
    ],
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
    slug: "silvermaple",
    background: "bg-large/bg-169.jpg",
    backgroundSmall: "bg-small/bg-169.jpg",
    description: "<p>The Silver Maple, Acer saccharinum, is a fast-growing deciduous tree cherished for its ornamental value and adaptability. Native to the eastern and central United States, it typically reaches heights of 50 to 80 feet, forming a broad, rounded crown. Known for its distinctive leaves, which are palmate and deeply lobed, the Silver Maple's foliage is green on top and a silvery-white underneath, fluttering beautifully in the breeze and creating a shimmering effect.</p><p>In early spring, the tree is among the first to flower, producing small red or yellow blossoms. These are followed by winged samaras, commonly known as \"helicopter seeds,\" which mature in the spring. The bark of the Silver Maple is smooth and gray when young, becoming more furrowed and shaggy with age. In autumn, its leaves turn to shades of yellow and red, adding a burst of color to the landscape.</p><p>While the Silver Maple is valued for its rapid growth and tolerance of poor soil and urban pollution, it is often criticized for its brittle wood and aggressive root system. Despite these drawbacks, it remains a popular choice for residential landscaping, offering quick shade and aesthetic appeal.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Silber-Ahorn_(Acer_saccharinum).jpg\">Silver maple tree. </a> <a href=\"https://commons.wikimedia.org/wiki/User:Darkone\">Darkone</a>, <a href=\"https://creativecommons.org/licenses/by-sa/2.5/legalcode\" rel=\"license\">CC BY-SA 2.5</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Acer_saccharinum#/media/File:Silber-Ahorn_(Acer_saccharinum).jpg",
    photo1Alt: "Silver maple",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Silber-Ahorn_%28Acer_saccharinum%29.jpg/256px-Silber-Ahorn_%28Acer_saccharinum%29.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Silver_maple_leaf.jpg\">Silver maple leaf. </a> <a href=\"https://en.wikipedia.org/wiki/User:Than217\">Than217</a>, <a href=\"https://creativecommons.org/licenses/by/3.0/legalcode\" rel=\"license\">CC BY 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Acer_saccharinum#/media/File:Silver_maple_leaf.jpg",
    photo2Alt: "Silver maple leaf.",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Silver_maple_leaf.jpg/256px-Silver_maple_leaf.jpg",

    photo3Credit: "Samaras and leaves forming. Public domain, via Wikimedia Commons.",
    photo3Href: "https://en.wikipedia.org/wiki/Acer_saccharinum#/media/File:Soft_Maple_Helicopter.jpg",
    photo3Alt: "Samaras and leaves forming.",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Soft_Maple_Helicopter.jpg/256px-Soft_Maple_Helicopter.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Acer_saccharinum_female_flowers.jpg\">Female flowers. </a> <a href=\"https://commons.wikimedia.org/wiki/User:DanielCahen01\">Daniel Cahen</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Acer_saccharinum#/media/File:Acer_saccharinum_female_flowers.jpg",
    photo4Alt: "Female flowers",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Acer_saccharinum_female_flowers.jpg/256px-Acer_saccharinum_female_flowers.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2014-11-02_15_41_21_Silver_Maple_foliage_during_autumn_along_Glen_Mawr_Drive_in_Ewing,_New_Jersey.JPG\">Yellow autumn color. </a> <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Acer_saccharinum#/media/File:2014-11-02_15_41_21_Silver_Maple_foliage_during_autumn_along_Glen_Mawr_Drive_in_Ewing,_New_Jersey.JPG",
    photo5Alt: "Yellow autumn color ",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/2014-11-02_15_41_21_Silver_Maple_foliage_during_autumn_along_Glen_Mawr_Drive_in_Ewing%2C_New_Jersey.JPG/256px-2014-11-02_15_41_21_Silver_Maple_foliage_during_autumn_along_Glen_Mawr_Drive_in_Ewing%2C_New_Jersey.JPG",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Silver-maple-bark.jpg\">Silver maple bark. </a> <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Acer_saccharinum#/media/File:Silver-maple-bark.jpg",
    photo6Alt: "Silver maple bark.",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Silver-maple-bark.jpg",

    photo7Credit: "Silver maple range map. Public domain, via Wikimedia Commons.",
    photo7Href: "https://en.wikipedia.org/wiki/Acer_saccharinum#/media/File:Acer_saccharinum_range_map_1.png",
    photo7Alt: "Silver maple range map.",
    photo7Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Acer_saccharinum_range_map_1.png/256px-Acer_saccharinum_range_map_1.png",
  },
  {
    nameCommon: "Slippery Elm",
    aka: [
      "Red Elm",
      "Water Elm",
      "gray elm",
      "soft elm",
      "moose elm",
      "Indian elm"
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
    slug: "slipperyelm",
    background: "bg-large/bg-15.jpg",
    backgroundSmall: "bg-small/bg-15.jpg",
    description: "<p>The Slippery Elm, Ulmus rubra, is a medium-sized deciduous tree native to eastern North America. Known for its distinctive, mucilaginous inner bark, the tree typically grows to a height of 40 to 60 feet, with a broad, rounded crown that provides dense shade. Its bark is dark brown and deeply furrowed, with a reddish tinge beneath the surface layers, which gives the tree its common name.</p><p>The leaves of the Slippery Elm are oblong with coarsely toothed edges, rough on the upper surface, and downy underneath, turning a yellowish color in the fall. In early spring, before the leaves appear, the tree produces small, inconspicuous flowers, which are followed by flat, winged seeds. The inner bark of the tree is renowned for its medicinal properties and has been traditionally used to soothe various ailments.</p><p>The Slippery Elm is valued for its ecological role in native forests and for its use in traditional medicine. It prefers moist, well-drained soils and is often found along streams and in bottomlands. While similar to the American Elm in appearance, the Slippery Elm is less susceptible to Dutch elm disease, making it a more resilient choice for planting in suitable habitats.</p>",
    photo1Credit: "Old Indian Elm at Maumee, Ohio. Public domain, via Wikimedia Commons.",
    photo1Href: "https://en.wikipedia.org/wiki/Ulmus_rubra#/media/File:Old_Indian_Elm_at_Maumee,_Ohio_-_DPLA_-_94c3734b1484eca5f274564b8202127a_(page_1)_(cropped).jpg",
    photo1Alt: "Old Indian Elm at Maumee, Ohio. ",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Old_Indian_Elm_at_Maumee%2C_Ohio_-_DPLA_-_94c3734b1484eca5f274564b8202127a_%28page_1%29_%28cropped%29.jpg/256px-Old_Indian_Elm_at_Maumee%2C_Ohio_-_DPLA_-_94c3734b1484eca5f274564b8202127a_%28page_1%29_%28cropped%29.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Ulmus_rubra_flower_buds.jpg\">Flower buds</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Ulmus_rubra#/media/File:Ulmus_rubra_flower_buds.jpg",
    photo2Alt: "Downy leaf bud and flower buds",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Ulmus_rubra_flower_buds.jpg/228px-Ulmus_rubra_flower_buds.jpg",

    photo3Credit: "Flowers. <a href=\"https://commons.wikimedia.org/wiki/File:Ulmus_rubra_flowers.jpg\">Ulmus rubra flowers</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Ulmus_rubra#/media/File:Ulmus_rubra_flowers.jpg",
    photo3Alt: "Flowers",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Ulmus_rubra_flowers.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Ulmus_rubra_8zz.jpg\">Mature trunk bark</a>, Photo by David J. Stang, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Ulmus_rubra#/media/File:Ulmus_rubra_8zz.jpg",
    photo4Alt: "Mature trunk bark",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Ulmus_rubra_8zz.jpg/256px-Ulmus_rubra_8zz.jpg",

    photo5Credit: "Slippery elm range map. Public domain, via Wikimedia Commons.",
    photo5Href: "https://en.wikipedia.org/wiki/Ulmus_rubra#/media/File:Ulmus_rubra_range_map_3.png",
    photo5Alt: "Slippery elm range map",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Ulmus_rubra_range_map_3.png/256px-Ulmus_rubra_range_map_3.png",
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
    compoundStructure: "pinnate",
    leafAttachment: "alternate",
    fallColor: [
      "red"
    ],
    slug: "smoothsumac",
    background: "bg-large/bg-123.jpg",
    backgroundSmall: "bg-small/bg-123.jpg",
    description: "<p>The Smooth Sumac, Rhus glabra, is a hardy, fast-growing deciduous shrub or small tree native to North America. It typically reaches heights of 10 to 15 feet, characterized by its upright, spreading habit and a tendency to form dense thickets. The tree is particularly noted for its striking foliage and vibrant fall color.</p><p>The leaves of the Smooth Sumac are pinnately compound, consisting of numerous leaflets with serrated edges. They are a rich green throughout the summer, turning to brilliant shades of red, orange, and yellow in the fall. In the summer, the tree produces dense, pyramidal clusters of small, greenish-yellow flowers, which develop into bright red, berry-like drupes. These fruits persist into winter and are a valuable food source for birds and wildlife.</p><p>The Smooth Sumac is adaptable to a wide range of soil conditions and is often used for erosion control, natural landscaping, and wildlife habitat. Its ability to thrive in poor soils and its dramatic fall color make it a popular choice for gardeners and landscape designers looking to add a splash of color to their plantings.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Rhus_glabra_AR.jpg\">Smooth Sumac</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Eric_in_SF\">Eric Hunt</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Rhus_glabra#/media/File:Rhus_glabra_AR.jpg",
    photo1Alt: "Smooth Sumac",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Rhus_glabra_AR.jpg/256px-Rhus_glabra_AR.jpg",

    photo2Credit: "Smooth sumac fruit. Public domain, via Wikimedia Commons.",
    photo2Href: "https://en.wikipedia.org/wiki/Rhus_glabra#/media/File:Rhus_glabra.jpg",
    photo2Alt: "Smooth sumac fruit.",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Rhus_glabra.jpg/314px-Rhus_glabra.jpg",

    photo3Credit: "Smooth sumac range map. Public domain, via Wikimedia Commons.",
    photo3Href: "https://en.wikipedia.org/wiki/Rhus_glabra#/media/File:Rhus_glabra_range_map_4.png",
    photo3Alt: "Smooth sumac range map",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Rhus_glabra_range_map_4.png/256px-Rhus_glabra_range_map_4.png",
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
    compoundStructure: "pinnate",
    leafAttachment: "alternate",
    fallColor: [
      "red",
      "maroon"
    ],
    slug: "staghornsumac",
    background: "bg-large/bg-177.jpg",
    backgroundSmall: "bg-small/bg-177.jpg",
    description: "<p>The Staghorn Sumac, Rhus typhina, is a striking deciduous shrub or small tree, native to eastern North America. Known for its distinctive appearance and vibrant autumn foliage, it typically grows to a height of 15 to 25 feet. The tree gets its common name from its branches, which are covered in a dense, velvety hair reminiscent of a stag's antlers in velvet.</p><p>The leaves of the Staghorn Sumac are large, pinnately compound, and fern-like, creating a lush, tropical look. In the fall, these leaves turn brilliant shades of orange, red, and yellow, making it a standout in the autumn landscape. The tree produces conspicuous clusters of small, greenish flowers, which mature into dense, upright clusters of deep red fruits. These berry-like fruits persist through the winter and are popular with wildlife, particularly birds.</p><p>Staghorn Sumac is highly adaptable to different soil types, including poor and disturbed soils, making it a useful choice for naturalized areas and reclamation projects. Its striking appearance and easy maintenance also make it a favorite for ornamental plantings in gardens and parks.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Сумах_оленерогий_(Сумах_пушистый,_Уксусное_дерево)_-_Rhus_typhina_-_Staghorn_sumac_-_Влакнест_шмак_-_Essigbaum_(23408707041).jpg\">Staghorn sumac</a>, <a href=\"https://www.flickr.com/people/12090392@N02\">Katya</a>, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/legalcode\" rel=\"license\">CC BY-SA 2.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Rhus_typhina#/media/File:%D0%A1%D1%83%D0%BC%D0%B0%D1%85_%D0%BE%D0%BB%D0%B5%D0%BD%D0%B5%D1%80%D0%BE%D0%B3%D0%B8%D0%B9_(%D0%A1%D1%83%D0%BC%D0%B0%D1%85_%D0%BF%D1%83%D1%88%D0%B8%D1%81%D1%82%D1%8B%D0%B9,_%D0%A3%D0%BA%D1%81%D1%83%D1%81%D0%BD%D0%BE%D0%B5_%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE)_-_Rhus_typhina_-_Staghorn_sumac_-_%D0%92%D0%BB%D0%B0%D0%BA%D0%BD%D0%B5%D1%81%D1%82_%D1%88%D0%BC%D0%B0%D0%BA_-_Essigbaum_(23408707041).jpg",
    photo1Alt: "Staghorn sumac",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/%D0%A1%D1%83%D0%BC%D0%B0%D1%85_%D0%BE%D0%BB%D0%B5%D0%BD%D0%B5%D1%80%D0%BE%D0%B3%D0%B8%D0%B9_%28%D0%A1%D1%83%D0%BC%D0%B0%D1%85_%D0%BF%D1%83%D1%88%D0%B8%D1%81%D1%82%D1%8B%D0%B9%2C_%D0%A3%D0%BA%D1%81%D1%83%D1%81%D0%BD%D0%BE%D0%B5_%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%29_-_Rhus_typhina_-_Staghorn_sumac_-_%D0%92%D0%BB%D0%B0%D0%BA%D0%BD%D0%B5%D1%81%D1%82_%D1%88%D0%BC%D0%B0%D0%BA_-_Essigbaum_%2823408707041%29.jpg/256px-thumbnail.jpg",
    
    photo2Credit: "Staghorn sumac fruit. Public domain, via Wikimedia Commons.",
    photo2Href: "https://en.wikipedia.org/wiki/Rhus_typhina#/media/File:20150420Rhus_typhina1.jpg",
    photo2Alt: "Staghorn sumac",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/20150420Rhus_typhina1.jpg/256px-20150420Rhus_typhina1.jpg",

    photo3Credit: "Staghorn sumac range map. Public domain, via Wikimedia Commons.",
    photo3Href: "https://en.wikipedia.org/wiki/Rhus_typhina#/media/File:Rhus_typhina_range_map_4.png",
    photo3Alt: "Staghorn sumac range map.",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Rhus_typhina_range_map_4.png/256px-Rhus_typhina_range_map_4.png",
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
    slug: "stripedmaple",
    background: "bg-large/bg-44.jpg",
    backgroundSmall: "bg-small/bg-44.jpg",

    description: "<p>The Striped Maple, Acer pensylvanicum, also known as Moosewood or Goosefoot Maple, is a small deciduous understory tree native to the northeastern United States and southeastern Canada. It typically grows to 15-30 feet in height, making it one of the smaller maple species. Its common name derives from the distinctive green and white striped bark, which is particularly noticeable on young stems and becomes more subtle on older trunks.</p><p>The leaves of the Striped Maple are large, broad, and have three lobes, resembling the shape of a goose's foot. These leaves are a bright green color and turn a striking yellow or orange in the fall. In the spring, the tree produces long, drooping clusters of yellowish-green flowers, followed by the development of winged samaras. This maple is known for its preference for cool, moist, shaded areas, often found in the understory of hardwood forests.</p><p>While it is not a major timber tree, the Striped Maple is valued for its ornamental appeal, especially suited to naturalized woodland gardens. Its unique bark, attractive foliage, and modest size make it a charming addition to the landscape.</p>",

    photo1Credit: "Striped maple leaves. Public domain, via Wikimedia Commons.",
    photo1Href: "https://en.wikipedia.org/wiki/Acer_pensylvanicum#/media/File:Moosewood_leaves.jpg",
    photo1Alt: "Striped maple leaves.",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Moosewood_leaves.jpg/256px-Moosewood_leaves.jpg",

    photo2Credit: "Striped maple range map. Public domain, via Wikimedia Commons.",
    photo2Href: "https://en.wikipedia.org/wiki/Acer_pensylvanicum#/media/File:Acer_pensylvanicum_range_map.png",
    photo2Alt: "Striped maple range map.",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Acer_pensylvanicum_range_map.png/256px-Acer_pensylvanicum_range_map.png",

    photo3Credit: "Striped maple growing at the edge of a forest with pine and hickory in the background. Public domain, via Wikimedia Commons",
    photo3Href: "https://en.wikipedia.org/wiki/Acer_pensylvanicum#/media/File:2006-07-15,_moosewood_close-up.jpg",
    photo3Alt: "Striped maple growing at the edge of a forest with pine and hickory in the background",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/2006-07-15%2C_moosewood_close-up.jpg/256px-2006-07-15%2C_moosewood_close-up.jpg",

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
    slug: "sugarmaple",
    background: "bg-large/bg-92.jpg",
    backgroundSmall: "bg-small/bg-92.jpg",
    description: "<p>The Sugar Maple, Acer saccharum, is a revered deciduous tree native to the hardwood forests of eastern North America. Known for its crucial role in producing maple syrup, it grows to a stately height of 60 to 75 feet, with some trees exceeding 100 feet. The Sugar Maple boasts a dense, rounded crown that provides a lush canopy, making it a favored shade tree in landscapes.</p><p>Its leaves are easily recognizable, with five lobes and deep sinuses, turning spectacular shades of yellow, bright orange, and deep red in the fall. This vibrant autumn display is one of the tree's most celebrated attributes. In spring, the Sugar Maple produces small, inconspicuous flowers, followed by the development of winged samaras. The tree's bark is gray and smooth in younger trees, becoming darker and deeply furrowed with age.</p><p>Valued for more than its sap, the Sugar Maple is also known for its hard, strong wood used in furniture, flooring, and cabinetry. Its beauty, longevity, and ecological importance make it a cherished species in forests and urban environments alike.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2014-11-02_15_25_30_Sugar_Maple_during_autumn_along_Patton_Drive_in_Ewing,_New_Jersey.jpg\">Sugar Maple during autumn</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Acer_saccharum#/media/File:2014-11-02_15_25_30_Sugar_Maple_during_autumn_along_Patton_Drive_in_Ewing,_New_Jersey.jpg",
    photo1Alt: "Sugar Maple during autumn",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/2014-11-02_15_25_30_Sugar_Maple_during_autumn_along_Patton_Drive_in_Ewing%2C_New_Jersey.jpg/256px-2014-11-02_15_25_30_Sugar_Maple_during_autumn_along_Patton_Drive_in_Ewing%2C_New_Jersey.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Acer_saccharum_1-jgreenlee_(5098070608).jpg\">Sugar maple leaf. </a>, <a href=\"https://www.flickr.com/people/53801642@N06\">Superior National Forest</a>, <a href=\"https://creativecommons.org/licenses/by/2.0/legalcode\" rel=\"license\">CC BY 2.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Acer_saccharum#/media/File:Acer_saccharum_1-jgreenlee_(5098070608).jpg",
    photo2Alt: "Sugar maple leaf",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Acer_saccharum_1-jgreenlee_%285098070608%29.jpg/256px-Acer_saccharum_1-jgreenlee_%285098070608%29.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2014-11-02_15_08_37_Sugar_Maple_foliage_during_autumn_along_Parkway_Avenue_in_Ewing,_New_Jersey.jpg\">Sugar Maple foliage during autumn.</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Acer_saccharum#/media/File:2014-11-02_15_08_37_Sugar_Maple_foliage_during_autumn_along_Parkway_Avenue_in_Ewing,_New_Jersey.jpg",
    photo3Alt: "Sugar Maple foliage during autumn",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/2014-11-02_15_08_37_Sugar_Maple_foliage_during_autumn_along_Parkway_Avenue_in_Ewing%2C_New_Jersey.jpg/256px-2014-11-02_15_08_37_Sugar_Maple_foliage_during_autumn_along_Parkway_Avenue_in_Ewing%2C_New_Jersey.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Autumn_leaves_(pantone)_crop.jpg\">Autumn leaves color range</a>, <a href=\"https://www.flickr.com/people/chrisglass/\">Chris Glass</a>, Cincinnati, USA, <a href=\"https://creativecommons.org/licenses/by/2.0/legalcode\" rel=\"license\">CC BY 2.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Acer_saccharum#/media/File:Autumn_leaves_(pantone)_crop.jpg",
    photo4Alt: "Autumn leaves color range",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Autumn_leaves_%28pantone%29_crop.jpg/256px-Autumn_leaves_%28pantone%29_crop.jpg",

    photo5Credit: "Sugar maple seeds. Public domain, via Wikimedia Commons.",
    photo5Href: "https://en.wikipedia.org/wiki/Acer_saccharum#/media/File:Acer_saccharum_seeds.jpg",
    photo5Alt: "Sugar maple seeds.",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Acer_saccharum_seeds.jpg/256px-Acer_saccharum_seeds.jpg",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2017-04-10_18_43_41_Sugar_Maple_flowers_along_Franklin_Farm_Road_near_Tranquility_Lane_in_the_Franklin_Farm_section_of_Oak_Hill,_Fairfax_County,_Virginia.jpg\">Flowers in spring</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Acer_saccharum#/media/File:2017-04-10_18_43_41_Sugar_Maple_flowers_along_Franklin_Farm_Road_near_Tranquility_Lane_in_the_Franklin_Farm_section_of_Oak_Hill,_Fairfax_County,_Virginia.jpg",
    photo6Alt: "Flowers in spring",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/2017-04-10_18_43_41_Sugar_Maple_flowers_along_Franklin_Farm_Road_near_Tranquility_Lane_in_the_Franklin_Farm_section_of_Oak_Hill%2C_Fairfax_County%2C_Virginia.jpg/256px-2017-04-10_18_43_41_Sugar_Maple_flowers_along_Franklin_Farm_Road_near_Tranquility_Lane_in_the_Franklin_Farm_section_of_Oak_Hill%2C_Fairfax_County%2C_Virginia.jpg",

    photo7Credit: "Sugar maple range map. Public domain, via Wikimedia Commons.",
    photo7Href: "https://en.wikipedia.org/wiki/Acer_saccharum#/media/File:Acer_saccharum_range_map_1.png",
    photo7Alt: "Sugar maple range map.",
    photo7Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Acer_saccharum_range_map_1.png/256px-Acer_saccharum_range_map_1.png",
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
    slug: "swampwhiteoak",
    background: "bg-large/bg-174.jpg",
    backgroundSmall: "bg-small/bg-174.jpg",
    description: "<p>The Swamp White Oak, Quercus bicolor, is a resilient and attractive deciduous tree native to the wetlands and lowlands of eastern and central North America. This species typically reaches heights of 50 to 60 feet, exhibiting a broad, rounded crown that makes it a superb shade tree. The Swamp White Oak is distinguished by its two-toned leaves: dark green on top and silvery-white underneath, which flutter in the breeze, creating a shimmering effect.</p><p>In the fall, the foliage turns to shades of yellow and brown, providing a warm, autumnal display. The tree produces acorns that are a valuable food source for wildlife. Notable for its tough, ridged bark, which adds winter interest to landscapes, the Swamp White Oak is also recognized for its adaptability to various soil conditions, including poorly drained areas where other oaks might struggle.</p><p>Due to its tolerance for wet conditions and its attractive form, the Swamp White Oak is a popular choice for landscaping in parks, large yards, and naturalized areas. It's also valued for its wood, used in construction and furniture-making. The tree's durability and ecological benefits make it a vital component of riparian and wetland ecosystems.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Quercus_bicolor_morton_acc_71-69-2.jpg\">Swamp White Oak tree</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Bruce_Marlin\">Bruce Marlin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/2.5/legalcode\" rel=\"license\">CC BY-SA 2.5</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Quercus_bicolor#/media/File:Quercus_bicolor_morton_acc_71-69-2.jpg",
    photo1Alt: "Swamp White Oak tree",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Quercus_bicolor_morton_acc_71-69-2.jpg/256px-Quercus_bicolor_morton_acc_71-69-2.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Quercus_bicolor_JPG1L.jpg\">Swamp white oak leaves</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Jean-Pol_GRANDMONT\">Jean-Pol Grandmont</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Quercus_bicolor#/media/File:Quercus_bicolor_JPG1L.jpg",
    photo2Alt: "Swamp white oak leaves",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Quercus_bicolor_JPG1L.jpg/256px-Quercus_bicolor_JPG1L.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Swamp_White_Oak_Quercus_bicolor_Bark_Closeup_Vertical.JPG\">Swamp white oak bark. </a>, Photo by and (c)2016 Derek Ramsey (<a href=\"https://en.wikipedia.org/wiki/User:Ram-Man\">Ram-Man</a>), <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Quercus_bicolor#/media/File:Swamp_White_Oak_Quercus_bicolor_Bark_Closeup_Vertical.JPG",
    photo3Alt: "Swamp white oak bark",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Swamp_White_Oak_Quercus_bicolor_Bark_Closeup_Vertical.JPG/256px-Swamp_White_Oak_Quercus_bicolor_Bark_Closeup_Vertical.JPG",

    photo4Credit: "Swamp white oak range map. Public domain, via Wikimedia Commons.",
    photo4Href: "https://en.wikipedia.org/wiki/Quercus_bicolor#/media/File:Quercus_bicolor_range_map_1.png",
    photo4Alt: "Swamp white oak range map.",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Quercus_bicolor_range_map_1.png/256px-Quercus_bicolor_range_map_1.png",
  },
  {
    nameCommon: "Table Mountain Pine",
    aka: [
      "hickory pine", "prickly pine", "mountain pine"
    ],
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
    slug: "tablemountainpine",
    background: "bg_conifer1.jpg",
    backgroundSmall: "bg_conifer1_small.jpg",
    description: "<p>The Table Mountain Pine, Pinus pungens, is a rugged and resilient evergreen conifer, native to the Appalachian Mountains in the eastern United States. Typically growing to a modest height of 30 to 50 feet, this species is known for its gnarled and often twisted trunk, along with a dense, irregular crown that gives it a distinctive, somewhat scruffy appearance.</p><p>Its needles are short and stiff, usually about 1.5 to 2.5 inches long, and grow in pairs. These needles are a dark, bluish-green, contributing to the tree's dense foliage. The Table Mountain Pine is particularly noted for its large, prickly cones, which remain tightly closed until exposed to the high heat of a forest fire, a unique adaptation that aids in seed dispersal. The tree's bark is thick, rough, and scaly, predominantly gray-brown in color.</p><p>Adapted to poor, rocky soils and often found on dry, ridge tops, the Table Mountain Pine plays a crucial role in its native ecosystem. While not widely used commercially, this pine is valued for its ecological importance and its rugged, picturesque beauty in natural landscapes.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Pinus_pungens.jpg\">Table Mountain Pine tree</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Bruce_Marlin\">Bruce Marlin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/2.5/legalcode\" rel=\"license\">CC BY-SA 2.5</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Table_mountain_pine#/media/File:Pinus_pungens.jpg",
    photo1Alt: "Table Mountain Pine tree",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Pinus_pungens.jpg/256px-Pinus_pungens.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Pinus_pungens_male_cones.jpg\">Male cones. </a>, <a href=\"https://commons.wikimedia.org/wiki/User:ILoveAllTrees\">ILoveAllTrees</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Table_mountain_pine#/media/File:Pinus_pungens_male_cones.jpg",
    photo2Alt: "Male cones",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Pinus_pungens_male_cones.jpg/256px-Pinus_pungens_male_cones.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Pinus-pungens-04.JPG\">Young female cone</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Elektryczne_jab%C5%82ko\">Elektryczne jabłko</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Table_mountain_pine#/media/File:Pinus-pungens-04.JPG",
    photo3Alt: "Young female cone",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Pinus-pungens-04.JPG/256px-Pinus-pungens-04.JPG",

    photo4Credit: "Table Mountain Pine range map. Public domain, via Wikimedia Commons.",
    photo4Href: "https://en.wikipedia.org/wiki/Table_mountain_pine#/media/File:Pinus_pungens_distribution_map.png",
    photo4Alt: "Table Mountain Pine range map.",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Pinus_pungens_distribution_map.png/256px-Pinus_pungens_distribution_map.png",
  },
  {
    nameCommon: "Tamarack",
    aka: [
      "hackmatack", "black larch", "american larch"
    ],
    order: "Pinales",
    family: "Pinaceae",
    familyCommon: "Pine",
    genus: "Larix",
    species: "Larix laricina",
    type: "conifer",
    needleStructure: "clustered needles",
    needleCluster: [
      "12-30"
    ],
    fallColor: [
      "yellow",
      "green"
    ],
    slug: "tamarack",
    background: "bg-large/bg-132.jpg",
    backgroundSmall: "bg-small/bg-132.jpg",
    description: "<p>The Tamarack tree, Larix laricina, also known as the American Larch, is a unique deciduous conifer native to the cold, wetlands of North America. Unlike most conifers, it sheds its needles each winter, standing out with its dazzling autumnal transformation. Tamaracks reach moderate heights of 40 to 80 feet, growing with a narrow, conical shape that becomes more open with age.</p><p>In spring, the Tamarack bursts into life with soft, light green needles, which turn a brilliant yellow-gold in the fall before dropping, leaving the tree bare in winter. Its needles are short and borne in dense clusters on older branches, giving the tree a feathery texture. Small, rounded cones emerge, initially red and maturing to brown.</p><p>The Tamarack's bark is tight and gray-brown, becoming deeply fissured over time. Adapted to cold, boggy soils, it’s often found in swamps and wet northern forests. Despite its preference for wet conditions, it is surprisingly fire-resistant. The Tamarack plays a vital role in its ecosystem and is valued for its rot-resistant wood. With its unique deciduous nature, this tree offers a striking seasonal display, especially vivid in autumn landscapes.</p>",
    photo1Credit: "Tamarack larch in fall colors, with black spruce in the background. Public domain via Wikimedia Commons.",
    photo1Href: "https://en.wikipedia.org/wiki/Larix_laricina#/media/File:Larix_laricina.jpg",
    photo1Alt: "Tamarack larch in fall colors, with black spruce in the background.",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Larix_laricina.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Larix_laricina_foliagecones.jpg\">Tamarack larch foliage and cones</a>, <a href=\"https://www.flickr.com/people/33547369@N00\">Tim &amp; Selena Middleton</a> from Toronto, Canada, <a href=\"https://creativecommons.org/licenses/by/2.0/legalcode\" rel=\"license\">CC BY 2.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Larix_laricina#/media/File:Larix_laricina_foliagecones.jpg",
    photo2Alt: "Tamarack larch foliage and cones",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Larix_laricina_foliagecones.jpg/256px-Larix_laricina_foliagecones.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Larix_laricina_female_cone.jpg\">Young female cone</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Akgarb\">William (Ned) Friedman</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Larix_laricina#/media/File:Larix_laricina_female_cone.jpg",
    photo3Alt: "Young female cone",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Larix_laricina_female_cone.jpg/256px-Larix_laricina_female_cone.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Larix_laricina_old_cones.jpg\">Old cones</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Akgarb\">William (Ned) Friedman</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Larix_laricina#/media/File:Larix_laricina_old_cones.jpg",
    photo4Alt: "Old cones",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Larix_laricina_old_cones.jpg/256px-Larix_laricina_old_cones.jpg",

    photo5Credit: "Tamarack range map. Public domain, via Wikimedia Commons",
    photo5Href: "https://en.wikipedia.org/wiki/Larix_laricina#/media/File:Larix_laricina_range_map_3.png",
    photo5Alt: "Tamarack range map",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Larix_laricina_range_map_3.png/512px-Larix_laricina_range_map_3.png",
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
    compoundStructure: "pinnate",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "treeofheaven",
    background: "bg-large/bg-181.jpg",
    backgroundSmall: "bg-small/bg-181.jpg",
    description: "<p>The Tree of Heaven, Ailanthus altissima, is a rapidly growing deciduous tree, originally from China and now widespread across many parts of the world. Often reaching heights of 40 to 60 feet, this tree is known for its ability to thrive in harsh urban environments and its aggressive growth, which can dominate and outcompete native vegetation. The Tree of Heaven has a broad, spreading canopy and a straight, tall trunk.</p><p>The leaves of the Tree of Heaven are one of its most distinctive features, being large and pinnately compound, sometimes reaching up to three feet in length. Each leaf consists of multiple leaflets, which are lance-shaped with a smooth margin. The tree produces clusters of small, yellow-green flowers, which are followed by winged seeds, known as samaras. The Tree of Heaven's bark is smooth and pale gray, becoming rougher and darker with age.</p><p>Despite its name and rapid growth, the Tree of Heaven is often considered invasive due to its ability to produce a large number of seeds and allelopathic chemicals that inhibit the growth of surrounding plants. It is commonly found in urban areas, along roadsides, and in disturbed sites, where it can quickly establish a presence.</p>",

    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Götterbaum_(Ailanthus_altissima).jpg\">Tree of Heaven</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Darkone\">Darkone</a>, <a href=\"https://creativecommons.org/licenses/by-sa/2.5/legalcode\" rel=\"license\">CC BY-SA 2.5</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Ailanthus_altissima#/media/File:G%C3%B6tterbaum_(Ailanthus_altissima).jpg",
    photo1Alt: "Tree of Heaven tree",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/G%C3%B6tterbaum_%28Ailanthus_altissima%29.jpg/256px-G%C3%B6tterbaum_%28Ailanthus_altissima%29.jpg",

    photo2Credit: "Botanical illustration. Public domain, via Wikimedia Commons.",
    photo2Href: "https://en.wikipedia.org/wiki/Ailanthus_altissima#/media/File:Ailanthus_altissima_drawing.png",
    photo2Alt: "Botanical illustration",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Ailanthus_altissima_drawing.png/256px-Ailanthus_altissima_drawing.png",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:AilanthusAltissimaFlower2.jpg\">Flowers</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Ailanthus_altissima#/media/File:AilanthusAltissimaFlower2.jpg",
    photo3Alt: "Flowers",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/AilanthusAltissimaFlower2.jpg/320px-AilanthusAltissimaFlower2.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Ailanthus_altissima1.jpg\">Immature seeds on a female tree.</a>,  <a href=\"http://www.kurtstueber.de/\">Kurt Stüber</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Ailanthus_altissima#/media/File:Ailanthus_altissima1.jpg",
    photo4Alt: "Immature seeds on a female tree",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Ailanthus_altissima1.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Ailanthus_altissima5.jpg\">Bark</a>, <a href=\"http://www.kurtstueber.de/\">Kurt Stüber</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Ailanthus_altissima#/media/File:Ailanthus_altissima5.jpg",
    photo5Alt: "Bark",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Ailanthus_altissima5.jpg/256px-Ailanthus_altissima5.jpg",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Ailanthus-altissima.jpg\">A female bearing a heavy load of seeds</a>, <a href=\"https://creativecommons.org/licenses/by-sa/1.0/legalcode\" rel=\"license\">CC BY-SA 1.0</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Ailanthus_altissima#/media/File:Ailanthus-altissima.jpg",
    photo6Alt: "A female tree bearing a heavy load of seeds",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Ailanthus-altissima.jpg/320px-Ailanthus-altissima.jpg",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2014-11-02_13_11_36_Tree_of_Heaven_foliage_during_autumn_along_Lower_Ferry_Road_in_Ewing,_New_Jersey.JPG\">Foliage during autumn</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Ailanthus_altissima#/media/File:2014-11-02_13_11_36_Tree_of_Heaven_foliage_during_autumn_along_Lower_Ferry_Road_in_Ewing,_New_Jersey.JPG",
    photo6Alt: "Foliage during autumn",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/2014-11-02_13_11_36_Tree_of_Heaven_foliage_during_autumn_along_Lower_Ferry_Road_in_Ewing%2C_New_Jersey.JPG/256px-2014-11-02_13_11_36_Tree_of_Heaven_foliage_during_autumn_along_Lower_Ferry_Road_in_Ewing%2C_New_Jersey.JPG",  
  },
  {
    nameCommon: "Tulip Tree",
    aka: [
      "Yellow Poplar", "American tulip tree", "tulipwood", "tulip poplar", 
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
    slug: "tuliptree",
    background: "bg-large/bg-197.jpg",
    backgroundSmall: "bg-small/bg-197.jpg",
    description: "<p>The Tulip Tree, Liriodendron tulipifera, also known as the Tulip Poplar or Yellow Poplar, is a magnificent deciduous tree native to the eastern United States. It stands out for its height, often reaching 70 to 100 feet, with some specimens soaring even taller, making it one of the largest native trees in North America. The Tulip Tree is renowned for its straight, tall trunk and conical to columnar form, providing an imposing and stately presence.</p><p>The leaves of the Tulip Tree are unique, with a distinctive tulip-like shape, consisting of four lobes with a notch at the tip. These bright green leaves turn a golden yellow in the fall, offering a striking display. In late spring, the tree produces beautiful, cup-shaped flowers reminiscent of tulips, which are greenish-yellow with an orange band at the base. The flowers are followed by dry, cone-like fruits. The bark is smooth and gray when young, becoming deeply furrowed with age.</p><p>Favored for its majestic size and ornamental value, the Tulip Tree is commonly used in large landscapes, parks, and as a street tree. It's also valued for its timber, used in furniture and cabinetry. This tree's combination of height, distinctive foliage, and striking flowers make it a cherished addition to any suitable landscape.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Liriodendron_tulipifera_(arbre)_-_Laeken.JPG\">Tulip Tree</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Jean-Pol_GRANDMONT\">Jean-Pol Grandmont</a>, <a href=\"https://creativecommons.org/licenses/by/3.0/legalcode\" rel=\"license\">CC BY 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Liriodendron_tulipifera#/media/File:Liriodendron_tulipifera_(arbre)_-_Laeken.JPG",
    photo1Alt: "Tulip Tree",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Liriodendron_tulipifera_%28arbre%29_-_Laeken.JPG/256px-Liriodendron_tulipifera_%28arbre%29_-_Laeken.JPG",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Tulip_Tree_NBG_LR.jpg\">Tulip Tree leaf</a>, <a href=\"https://commons.wikimedia.org/wiki/User:PumpkinSky\">PumpkinSky</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Liriodendron_tulipifera#/media/File:Tulip_Tree_NBG_LR.jpg",
    photo2Alt: "Tulip Tree leaf",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Tulip_Tree_NBG_LR.jpg/256px-Tulip_Tree_NBG_LR.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Liriodendron_tulipifera_columnar_trunk.JPG\">Columnar trunk</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Dcrjsr\">Dcrjsr</a>, <a href=\"https://creativecommons.org/licenses/by/3.0/legalcode\" rel=\"license\">CC BY 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Liriodendron_tulipifera#/media/File:Liriodendron_tulipifera_columnar_trunk.JPG",
    photo3Alt: "Columnar trunk",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Liriodendron_tulipifera_columnar_trunk.JPG/256px-Liriodendron_tulipifera_columnar_trunk.JPG",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Liriodendron-tulipifera-bud.jpg\">Flower bud</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Sten\">Sten</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Liriodendron_tulipifera#/media/File:Liriodendron-tulipifera-bud.jpg",
    photo4Alt: "Flower bud",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Liriodendron-tulipifera-bud.jpg/256px-Liriodendron-tulipifera-bud.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Liriodendron_tulipifera12.jpg\">Flower</a>, Kenpei, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Liriodendron_tulipifera#/media/File:Liriodendron_tulipifera12.jpg",
    photo5Alt: "Flower",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Liriodendron_tulipifera12.jpg/256px-Liriodendron_tulipifera12.jpg",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Liriodendron_tulipifera_MHNT.BOT.2004.0.jpg\">Seeds</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Archaeodontosaurus\">Didier Descouens</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Liriodendron_tulipifera#/media/File:Liriodendron_tulipifera_MHNT.BOT.2004.0.jpg",
    photo6Alt: "Seeds",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Liriodendron_tulipifera_MHNT.BOT.2004.0.jpg/256px-Liriodendron_tulipifera_MHNT.BOT.2004.0.jpg",

    photo7Credit: "Tulip Tree range map. Public domain, via Wikimedia Commons.",
    photo7Href: "https://en.wikipedia.org/wiki/Liriodendron_tulipifera#/media/File:Liriodendron_tulipifera_range_map_3.png",
    photo7Alt: "Tulip Tree range map",
    photo7Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Liriodendron_tulipifera_range_map_3.png/256px-Liriodendron_tulipifera_range_map_3.png",
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
    slug: "tupelo",
    background: "bg-large/bg-173.jpg",
    backgroundSmall: "bg-small/bg-173.jpg",
    description: "<p>The Tupelo, also known as Nyssa sylvatica or Black Gum, is a striking deciduous tree native to eastern North America. It is highly prized for its ornamental beauty, particularly in the autumn. The Tupelo can reach heights of 30 to 50 feet, sometimes growing taller, and is characterized by its upright, spreading habit and irregularly shaped crown. This tree is particularly known for its ability to thrive in wet, swampy soils, although it is also adaptable to drier conditions.</p><p>The leaves of the Tupelo are simple, ovate, and glossy, with a dark green color that turns to spectacular shades of red, orange, yellow, and purple in the fall. This fiery autumn display is one of the most vivid among North American trees. In spring, the tree produces small, inconspicuous flowers, which give way to blue-black fruits that are a favorite of birds and wildlife. The bark is deeply furrowed and provides winter interest with its rugged texture.</p><p>With its stunning fall foliage and tolerance for a range of soil conditions, the Tupelo is a popular choice for landscape plantings, especially in areas where other trees might struggle. Its wood is hard and cross-grained, making it difficult to work but valued for certain specialized uses.</p>",
    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Nyssa_sylvatica_v_sylvatica.jpg\">Foliage and almost mature fruit</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Eric_in_SF\">Eric Hunt</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Nyssa_sylvatica#/media/File:Nyssa_sylvatica_v_sylvatica.jpg",
    photo2Alt: "Foliage and almost mature fruit",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nyssa_sylvatica_v_sylvatica.jpg/256px-Nyssa_sylvatica_v_sylvatica.jpg",

    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2014-11-02_12_47_05_Black_Tupelo_during_autumn_at_The_College_of_New_Jersey_in_Ewing,_New_Jersey.JPG\">Tupelo tree in autumn</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Nyssa_sylvatica#/media/File:2014-11-02_12_47_05_Black_Tupelo_during_autumn_at_The_College_of_New_Jersey_in_Ewing,_New_Jersey.JPG",
    photo1Alt: "Tupelo tree in autumn",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/2014-11-02_12_47_05_Black_Tupelo_during_autumn_at_The_College_of_New_Jersey_in_Ewing%2C_New_Jersey.JPG/256px-2014-11-02_12_47_05_Black_Tupelo_during_autumn_at_The_College_of_New_Jersey_in_Ewing%2C_New_Jersey.JPG",

    photo3Credit: "Mature fruit, starting to show fall coloring. Public domain, via Wikimedia Commons.",
    photo3Href: "https://en.wikipedia.org/wiki/Nyssa_sylvatica#/media/File:Nyssa_sylvatica_with_mature_fruit.jpg",
    photo3Alt: "",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Nyssa_sylvatica_with_mature_fruit.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Nyssa_sylvatica_JPG1b.jpg\">Leaves in the autumn</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Jean-Pol_GRANDMONT\">Jean-Pol Grandmont</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Nyssa_sylvatica#/media/File:Nyssa_sylvatica_JPG1b.jpg",
    photo4Alt: "Leaves in the autumn",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Nyssa_sylvatica_JPG1b.jpg/256px-Nyssa_sylvatica_JPG1b.jpg",

    photo5Credit: "Trunk and bark. Public domain, via Wikimedia Commons.",
    photo5Href: "https://en.wikipedia.org/wiki/Nyssa_sylvatica#/media/File:NyssaSylvaticaTrunk.jpg",
    photo5Alt: "Trunk and bark",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/NyssaSylvaticaTrunk.jpg/256px-NyssaSylvaticaTrunk.jpg",

    photo6Credit: "Tupelo range map. Public domain, via Wikimedia Commons.",
    photo6Href: "https://en.wikipedia.org/wiki/Nyssa_sylvatica#/media/File:Nyssa_sylvatica_range_map.jpg",
    photo6Alt: "Tupelo range map",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Nyssa_sylvatica_range_map.jpg/256px-Nyssa_sylvatica_range_map.jpg",
  },
  {
    nameCommon: "Virginia Pine",
    aka: [
      "scrub pine", "jersey pine", "possum pine"
    ],
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
    slug: "virginiapine",
    background: "bg-large/bg-65.jpg",
    backgroundSmall: "bg-small/bg-65.jpg",
    description: "<p>The Virginia Pine, Pinus virginiana, also known as the Scrub Pine or Jersey Pine, is a small to medium-sized conifer native to the southeastern United States. Typically growing to 20-40 feet in height, this tree is recognized for its somewhat irregular and dense form, making it a distinct feature in both natural and landscaped settings. The Virginia Pine's adaptability to poor, rocky soils and its rapid growth make it a valuable species for reforestation and land reclamation projects.</p><p>The needles of the Virginia Pine are short and twisted, growing in pairs, and have a bluish-green to yellowish-green color. These needles give the tree a somewhat scruffy appearance. The cones are small to medium-sized, often remaining on the tree for several years. The bark of the Virginia Pine is reddish-brown and deeply furrowed, providing a rugged texture to the tree's appearance.</p><p>While not a major timber species, the Virginia Pine is sometimes used for pulpwood and sawn timber in its native range. It's also a popular choice for Christmas trees in the southeastern U.S. due to its pleasant scent and classic pine appearance.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Pinus_virginiana_Scrub_Pine_Branch_3200px.jpg\">Cone and needles</a>, Photo (c)2007 Derek Ramsey (<a href=\"https://en.wikipedia.org/wiki/User:Ram-Man\">Ram-Man</a>), <a href=\"https://creativecommons.org/licenses/by-sa/2.5/legalcode\" rel=\"license\">CC BY-SA 2.5</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Pinus_virginiana#/media/File:Pinus_virginiana_Scrub_Pine_Branch_3200px.jpg",
    photo1Alt: "Cone and needles",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Pinus_virginiana_Scrub_Pine_Branch_3200px.jpg/256px-Pinus_virginiana_Scrub_Pine_Branch_3200px.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2013-05-10_10_32_15_Virginia_Pine_new_growth_and_pollen_cones_along_the_Mount_Misery_Trail_in_Brendan_T._Byrne_State_Forest,_New_Jersey.jpg\">Virginia Pine new growth and pollen cones</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Pinus_virginiana#/media/File:2013-05-10_10_32_15_Virginia_Pine_new_growth_and_pollen_cones_along_the_Mount_Misery_Trail_in_Brendan_T._Byrne_State_Forest,_New_Jersey.jpg",
    photo2Alt: "New growth and pollen cones",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/2013-05-10_10_32_15_Virginia_Pine_new_growth_and_pollen_cones_along_the_Mount_Misery_Trail_in_Brendan_T._Byrne_State_Forest%2C_New_Jersey.jpg/256px-2013-05-10_10_32_15_Virginia_Pine_new_growth_and_pollen_cones_along_the_Mount_Misery_Trail_in_Brendan_T._Byrne_State_Forest%2C_New_Jersey.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Scrub_Pine_Pinus_virginiana_3264px.jpg\">Bark closeup</a>, Photo (c)2007 Derek Ramsey (<a href=\"https://en.wikipedia.org/wiki/User:Ram-Man\">Ram-Man</a>), <a href=\"https://creativecommons.org/licenses/by-sa/2.5/legalcode\" rel=\"license\">CC BY-SA 2.5</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Pinus_virginiana#/media/File:Scrub_Pine_Pinus_virginiana_3264px.jpg",
    photo3Alt: "Bark closeup",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Scrub_Pine_Pinus_virginiana_3264px.jpg/256px-Scrub_Pine_Pinus_virginiana_3264px.jpg",

    photo5Credit: "Natural range map. Public domain, via Wikimedia Commons.",
    photo5Href: "https://en.wikipedia.org/wiki/Pinus_virginiana#/media/File:Pinus_virginiana_distribution_map.png",
    photo5Alt: "Natural range map",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Pinus_virginiana_distribution_map.png/256px-Pinus_virginiana_distribution_map.png",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2013-05-10_11_01_36_Virginia_Pine_along_the_Mount_Misery_Trail_in_Brendan_T._Byrne_State_Forest,_New_Jersey.jpg\">Virginia Pine tree</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Pinus_virginiana#/media/File:2013-05-10_11_01_36_Virginia_Pine_along_the_Mount_Misery_Trail_in_Brendan_T._Byrne_State_Forest,_New_Jersey.jpg",
    photo4Alt: "Virginia Pine tree",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/2013-05-10_11_01_36_Virginia_Pine_along_the_Mount_Misery_Trail_in_Brendan_T._Byrne_State_Forest%2C_New_Jersey.jpg/256px-2013-05-10_11_01_36_Virginia_Pine_along_the_Mount_Misery_Trail_in_Brendan_T._Byrne_State_Forest%2C_New_Jersey.jpg",
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
    slug: "weepingwillow",
    background: "bg-large/bg-101.jpg",
    backgroundSmall: "bg-small/bg-101.jpg",
    description: "<p>The Weeping Willow, Salix babylonica, is an iconic and picturesque deciduous tree, renowned for its graceful, drooping branches that create a sweeping, elegant form. Originating in China and rapidly growing to heights of 30 to 50 feet, this tree is a striking feature in any landscape. Its long, slender branches hang downwards, creating a curtain of foliage that gently sways in the breeze.</p><p>The leaves of the Weeping Willow are narrow, lance-shaped, and finely toothed, exhibiting a bright green color that turns yellow in the fall. In early spring, the tree produces yellowish catkins, adding a touch of color before the leaves emerge. The bark is gray-brown and deeply furrowed, contributing to the tree's overall aesthetic appeal.</p><p>Favoring moist environments, the Weeping Willow is often found near ponds, streams, and lakes, where it can provide dramatic reflections over the water. While it is a popular ornamental tree, care should be taken with planting location due to its aggressive root system and susceptibility to pests and diseases. Despite these challenges, the Weeping Willow remains a beloved choice for its unique beauty and serene presence in the landscape.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Château_de_Chenonceau_-_jardin_Russell-Page_(01).jpg\">Weeping Willow tree</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Fab5669\">Fab5669</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Salix_babylonica#/media/File:Ch%C3%A2teau_de_Chenonceau_-_jardin_Russell-Page_(01).jpg",
    photo1Alt: "Weeping Willow tree",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ch%C3%A2teau_de_Chenonceau_-_jardin_Russell-Page_%2801%29.jpg/256px-Ch%C3%A2teau_de_Chenonceau_-_jardin_Russell-Page_%2801%29.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Willow_Salix_babylonica.jpg\">Branchlets</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Alvesgaspar\">Alvesgaspar</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Salix_babylonica#/media/File:Willow_Salix_babylonica.jpg",
    photo2Alt: "Branchlets",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Willow_Salix_babylonica.jpg/256px-Willow_Salix_babylonica.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:SalixBabylonicaLeaf.jpg\">Leaves</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Fanghong\"> Fanghong</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Salix_babylonica#/media/File:SalixBabylonicaLeaf.jpg",
    photo3Alt: "Leaves",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/SalixBabylonicaLeaf.jpg/256px-SalixBabylonicaLeaf.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Saule_pleureur_chaton.jpg\">Male flowers</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Oroussei\">Oroussei</a>, <a href=\"https://creativecommons.org/licenses/by/3.0/legalcode\" rel=\"license\">CC BY 3.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Salix_babylonica#/media/File:Saule_pleureur_chaton.jpg",
    photo4Alt: "Male flowers",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Saule_pleureur_chaton.jpg/256px-Saule_pleureur_chaton.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Salix_babylonica2.jpg\">Bark</a>, Kenpei, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Salix_babylonica#/media/File:Salix_babylonica2.jpg",
    photo5Alt: "Bark",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Salix_babylonica2.jpg/256px-Salix_babylonica2.jpg",
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
    compoundStructure: "pinnate",
    leafAttachment: "opposite",
    fallColor: [
      "bronze",
      "purple"
    ],
    slug: "whiteash",
    background: "bg-large/bg-195.jpg",
    backgroundSmall: "bg-small/bg-195.jpg",
    description: "<p>The White Ash, Fraxinus americana, is a large, stately deciduous tree native to eastern North America. Known for its strength and elegant beauty, it typically reaches heights of 60 to 80 feet, forming a straight, tall trunk and a full, rounded crown. The tree is especially prized in urban landscapes and large spaces for its symmetrical form and lush canopy, providing ample shade.</p><p>The leaves of the White Ash are compound with 5 to 9 leaflets, each leaflet being dark green and glossy, turning to stunning shades of purple, red, and yellow in the fall. In spring, the tree produces small, purple flowers, followed by the development of winged seeds known as samaras. The bark of the White Ash is gray to brown, characterized by a distinct diamond pattern, adding textural interest to the landscape.</p><p>Traditionally, the wood of the White Ash has been highly valued for its strength and elasticity, making it a preferred material for baseball bats, tool handles, and furniture. However, this species has been severely threatened by the invasive Emerald Ash Borer, leading to significant declines in its population. Despite this, the White Ash remains a symbol of durability and grace in the hardwood forests of North America.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Fraxinus_americana_002.jpg\">White Ash tree</a>, photo by Willow, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Fraxinus_americana#/media/File:Fraxinus_americana_002.jpg",
    photo1Alt: "White Ash tree",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Fraxinus_americana_002.jpg/256px-Fraxinus_americana_002.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2015-10-21_10_57_30_White_Ash_foliage_during_autumn_along_Pennington_Road_(New_Jersey_Route_31)_in_Ewing,_New_Jersey.jpg\">White Ash foliage during autumn.</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Fraxinus_americana#/media/File:2015-10-21_10_57_30_White_Ash_foliage_during_autumn_along_Pennington_Road_(New_Jersey_Route_31)_in_Ewing,_New_Jersey.jpg",
    photo2Alt: "White Ash foliage during autumn",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/2015-10-21_10_57_30_White_Ash_foliage_during_autumn_along_Pennington_Road_%28New_Jersey_Route_31%29_in_Ewing%2C_New_Jersey.jpg/256px-2015-10-21_10_57_30_White_Ash_foliage_during_autumn_along_Pennington_Road_%28New_Jersey_Route_31%29_in_Ewing%2C_New_Jersey.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:White_Ash_Leaves.jpg\">White Ash Leaves</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Quercus2018\">Quercus2018</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Fraxinus_americana#/media/File:White_Ash_Leaves.jpg",
    photo3Alt: "White Ash Leaves",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/White_Ash_Leaves.jpg/256px-White_Ash_Leaves.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Fraxinus_americana_(Oleaceae).jpg\">Detail of White Ash twig</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Caromallo\">Caromallo</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Fraxinus_americana#/media/File:Fraxinus_americana_(Oleaceae).jpg",
    photo4Alt: "Detail of White Ash twig",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Fraxinus_americana_%28Oleaceae%29.jpg/256px-Fraxinus_americana_%28Oleaceae%29.jpg",

    photo5Credit: "White Ash range map. Public domain, via Wikimedia Commons.",
    photo5Href: "https://en.wikipedia.org/wiki/Fraxinus_americana#/media/File:Fraxinus_americana_range_map_3.png",
    photo5Alt: "White Ash range map",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Fraxinus_americana_range_map_3.png/256px-Fraxinus_americana_range_map_3.png",
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
    slug: "whiteoak",
    background: "bg-large/bg-165.jpg",
    backgroundSmall: "bg-small/bg-165.jpg",
    description: "<p>The White Oak, Quercus alba, is a majestic and long-lived deciduous tree, native to eastern North America. Renowned for its strength and resilience, the White Oak typically grows to 80 to 100 feet in height, with a wide, spreading canopy that can be just as broad. This noble tree is easily identified by its distinctive bark, which is light gray and flakes off in large, flat plates, and by its lobed leaves, which turn a spectacular red or burgundy in the fall.</p><p>The White Oak produces acorns that are a vital food source for wildlife. These acorns have a sweet taste, making them more palatable to animals than those of other oak species. The tree's wood is highly valued for its density, strength, and rot resistance, historically used in shipbuilding, and currently sought after for furniture, flooring, and barrel-making, particularly for aging wines and spirits.</p><p>With its picturesque form, valuable wood, and ecological importance, the White Oak is a symbol of endurance and sustainability. It is a popular choice in parks, large landscapes, and as a heritage tree in many communities, appreciated for its grandeur and the diverse ecosystem it supports.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Ancient_White_Oak_in_Bronte,_Oakville,_Ontario.jpg\">Fully mature White Oak</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Bay_%26_Gables\">Bay &amp; Gables</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Quercus_alba#/media/File:Ancient_White_Oak_in_Bronte,_Oakville,_Ontario.jpg",
    photo1Alt: "Fully mature White Oak",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Ancient_White_Oak_in_Bronte%2C_Oakville%2C_Ontario.jpg/256px-Ancient_White_Oak_in_Bronte%2C_Oakville%2C_Ontario.jpg",

    photo2Credit: "White oak leaves. Public domain, via Wikimedia Commons.",
    photo2Href: "https://en.wikipedia.org/wiki/Quercus_alba#/media/File:White_oak_foliage.JPG",
    photo2Alt: "White oak leaves",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/White_oak_foliage.JPG/256px-White_oak_foliage.JPG",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2014-11-02_11_37_14_White_Oak_foliage_during_autumn_along_Lower_Ferry_Road_in_Ewing,_New_Jersey.JPG\">Leaves in autumn</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Quercus_alba#/media/File:2014-11-02_11_37_14_White_Oak_foliage_during_autumn_along_Lower_Ferry_Road_in_Ewing,_New_Jersey.JPG",
    photo3Alt: "Leaves in autumn",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/2014-11-02_11_37_14_White_Oak_foliage_during_autumn_along_Lower_Ferry_Road_in_Ewing%2C_New_Jersey.JPG/256px-2014-11-02_11_37_14_White_Oak_foliage_during_autumn_along_Lower_Ferry_Road_in_Ewing%2C_New_Jersey.JPG",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:2013-05-10_13_16_53_New_foliage_of_White_Oak_along_the_Mount_Misery_Trail_in_Brendan_T._Byrne_State_Forest,_New_Jersey.jpg\">New foliage</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Famartin\">Famartin</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Quercus_alba#/media/File:2013-05-10_13_16_53_New_foliage_of_White_Oak_along_the_Mount_Misery_Trail_in_Brendan_T._Byrne_State_Forest,_New_Jersey.jpg",
    photo4Alt: "New foliage",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/2013-05-10_13_16_53_New_foliage_of_White_Oak_along_the_Mount_Misery_Trail_in_Brendan_T._Byrne_State_Forest%2C_New_Jersey.jpg/256px-2013-05-10_13_16_53_New_foliage_of_White_Oak_along_the_Mount_Misery_Trail_in_Brendan_T._Byrne_State_Forest%2C_New_Jersey.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:White_oak_Quercus_alba_prolific_acorns.jpg\">Fallen acorns from prolific tree</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Dcrjsr\">Dcrjsr</a>, <a href=\"https://creativecommons.org/licenses/by/3.0/legalcode\" rel=\"license\">CC BY 3.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Quercus_alba#/media/File:White_oak_Quercus_alba_prolific_acorns.jpg",
    photo5Alt: "Fallen acorns from prolific tree",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/White_oak_Quercus_alba_prolific_acorns.jpg/256px-White_oak_Quercus_alba_prolific_acorns.jpg",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:White_Oak_Quercus_alba_Tree_Bark_3264px.jpg\">Bark of large trunk</a>, Photo (c)2006 Derek Ramsey (<a href=\"https://en.wikipedia.org/wiki/User:Ram-Man\">Ram-Man</a>), <a href=\"https://creativecommons.org/licenses/by-sa/2.5/legalcode\" rel=\"license\">CC BY-SA 2.5</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Quercus_alba#/media/File:White_Oak_Quercus_alba_Tree_Bark_3264px.jpg",
    photo6Alt: "Bark of large trunk",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/White_Oak_Quercus_alba_Tree_Bark_3264px.jpg/256px-White_Oak_Quercus_alba_Tree_Bark_3264px.jpg",

    photo7Credit: "White Oak range map. Public domain, via Wikimedia Commons.",
    photo7Href: "https://en.wikipedia.org/wiki/Quercus_alba#/media/File:Quercus_alba_range_map_1.png",
    photo7Alt: "White Oak range map",
    photo7Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Quercus_alba_range_map_1.png/256px-Quercus_alba_range_map_1.png",
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
    slug: "whitepoplar", 
    background: "bg-large/bg-194.jpg",
    backgroundSmall: "bg-small/bg-194.jpg",
    description: "<p>The White Poplar, Populus alba, is a fast-growing deciduous tree, native to Europe and Central Asia but widely cultivated in various regions. It reaches a height of 50 to 80 feet, displaying a broad, rounded crown that provides a wide spread of shade. The tree is notable for its striking white or silver foliage, which makes it stand out in any landscape.</p><p>The leaves of the White Poplar are uniquely shaped, with a broad, lobed form and a distinctive white, woolly underside, which gives the tree its name. The leaves flutter in the breeze, showing off their silvery undersides, creating a shimmering effect. In spring, the tree produces catkins, followed by cotton-like seeds that are characteristic of poplars. The bark of the White Poplar is pale gray and becomes deeply fissured with age.</p><p>While the White Poplar is appreciated for its ornamental value and rapid growth, it can be invasive outside of its native range, spreading through its vigorous root system. Despite this, it is commonly used in windbreaks, for erosion control, and in large landscapes for its visual appeal.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Populus_alba_leaf.jpg\">White poplar leaf</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Populus_alba#/media/File:Populus_alba_leaf.jpg",
    photo1Alt: "White poplar leaf",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Populus_alba_leaf.jpg/320px-Populus_alba_leaf.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Populus_alba_branch.jpg\">Foliage of the white poplar</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Populus_alba#/media/File:Populus_alba_branch.jpg",
    photo2Alt: "Foliage of the white poplar",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Populus_alba_branch.jpg/320px-Populus_alba_branch.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Populus_alba_trunk.jpg\">White Poplar trunk and bark</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Populus_alba#/media/File:Populus_alba_trunk.jpg",
    photo3Alt: "White Poplar trunk and bark",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Populus_alba_trunk.jpg/320px-Populus_alba_trunk.jpg",
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
    slug: "whitespruce",
    background: "bg-large/bg-133.jpg",
    backgroundSmall: "bg-small/bg-133.jpg",
    description: "<p>The White Spruce, Picea glauca, is a resilient and hardy evergreen conifer native to the northern regions of North America. This tree typically attains heights of 40 to 60 feet, and in some instances, can grow even taller in its natural habitat. It exhibits a classic conical shape, with a dense, symmetrical form that makes it a favorite for both natural and cultivated landscapes.</p><p>The needles of the White Spruce are short, stiff, and needle-like, with a bluish-green hue, giving the tree a somewhat frosty appearance. These needles are evenly spaced along the branches, creating a full and lush look. The tree produces small, cylindrical cones that mature from green to a pale brown. The bark of the White Spruce is thin, gray, and flaky, adding to its overall aesthetic appeal.</p><p>Renowned for its cold tolerance, the White Spruce is often used in forestry for lumber and paper production. It is also a popular choice for Christmas trees due to its pleasant fragrance and symmetrical shape. In landscaping, the White Spruce is valued for its stately beauty and its ability to provide year-round color and windbreak in harsh northern climates.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Picea_glauca_Fairbanks.jpg\">Mature white spruce.</a>, <a href=\"https://www.flickr.com/people/11360143@N03\">dmcdevit</a>, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/legalcode\" rel=\"license\">CC BY-SA 2.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Picea_glauca#/media/File:Picea_glauca_Fairbanks.jpg",
    photo1Alt: "Mature white spruce",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Picea_glauca_Fairbanks.jpg/256px-Picea_glauca_Fairbanks.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Picea_glauca_twig_Denali_NP_AK.jpg\">Twig with striped, blue-green, four-sided needles</a>, <a href=\"https://www.flickr.com/people/51035743246@N01\">Dawn Endico</a> <a href=\"https://creativecommons.org/licenses/by-sa/2.0/legalcode\" rel=\"license\">CC BY-SA 2.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Picea_glauca#/media/File:Picea_glauca_twig_Denali_NP_AK.jpg",
    photo2Alt: "Twig with striped, blue-green, four-sided needles",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Picea_glauca_twig_Denali_NP_AK.jpg/256px-Picea_glauca_twig_Denali_NP_AK.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Picea_glauca_Świerk_biały_2011-09-11_03.jpg\">Mature female cone</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Nova\">Agnieszka Kwiecień, Nova</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Picea_glauca#/media/File:Picea_glauca_%C5%9Awierk_bia%C5%82y_2011-09-11_03.jpg",
    photo3Alt: "Mature female cone",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Picea_glauca_%C5%9Awierk_bia%C5%82y_2011-09-11_03.jpg/256px-Picea_glauca_%C5%9Awierk_bia%C5%82y_2011-09-11_03.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Picea_glauca_young_female_cone_-_Keila.jpg\">Young female cone</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Iifar\">Ivar Leidus</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Picea_glauca#/media/File:Picea_glauca_young_female_cone_-_Keila.jpg",
    photo4Alt: "Young female cone",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Picea_glauca_young_female_cone_-_Keila.jpg/256px-Picea_glauca_young_female_cone_-_Keila.jpg",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Picea_glauca_2.jpg\">Male cone and pollen</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Nadiatalent\">Nadiatalent</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Picea_glauca#/media/File:Picea_glauca_2.jpg",
    photo5Alt: "Male cone and pollen",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Picea_glauca_2.jpg/256px-Picea_glauca_2.jpg",

    photo6Credit: "Trunk bark is scaly or flaky and grey-brown. Public domain, via Wikimedia Commons.",
    photo6Href: "https://en.wikipedia.org/wiki/Picea_glauca#/media/File:White_Spruce_bark_detail,_Chalco_Hills.jpg",
    photo6Alt: "Trunk bark is scaly or flaky and grey-brown",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/White_Spruce_bark_detail%2C_Chalco_Hills.jpg/256px-White_Spruce_bark_detail%2C_Chalco_Hills.jpg",

    photo7Credit: "Range map of white spruce. Public domain, via Wikimedia Commons.",
    photo7Href: "https://en.wikipedia.org/wiki/Picea_glauca#/media/File:Picea_glauca_levila.PNG",
    photo7Alt: "Range map of white spruce",
    photo7Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Picea_glauca_levila.PNG/256px-Picea_glauca_levila.PNG",
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
    slug: "wildapple",
    background: "bg-large/bg-106b.jpg",
    backgroundSmall: "bg-small/bg-106b.jpg",
    description: "<p>The Wild Apple, belonging to the genus Malus, is a deciduous tree known for its historical and ecological significance. Found across Europe, Asia, and North America, these trees typically reach heights of 15 to 30 feet, with a spreading, often irregular canopy. Wild Apples are ancestors of the cultivated apple varieties and are appreciated for their resilience and natural beauty.</p><p>The tree's leaves are simple, ovate, and serrated, turning vibrant shades of yellow and orange in the fall. In spring, Wild Apple trees are adorned with a profusion of fragrant blossoms, ranging from white to pink, attracting a host of pollinators. These flowers give way to small, variable fruits, which can range in flavor from tart to sweet, and are often used in traditional recipes or consumed by wildlife. The bark is rough and gray, providing texture and interest throughout the year.</p><p>Wild Apple trees hold a special place in folklore and are often found in old orchards, hedgerows, and woodland edges. They are not only valued for their fruit and ornamental qualities but also for their contribution to biodiversity, offering habitat and sustenance for various bird and insect species.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Purple_prince_crabapple_tree.JPG\">Purple prince crabapple tree</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Bruce_Marlin\">Bruce Marlin</a>, <a href=\"https://creativecommons.org/licenses/by/3.0/legalcode\" rel=\"license\">CC BY 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Malus#/media/File:Purple_prince_crabapple_tree.JPG",
    photo1Alt: "Purple Prince Crabapple",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Purple_prince_crabapple_tree.JPG/256px-Purple_prince_crabapple_tree.JPG",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Flowering_crabapple_in_Washington_DC.jpg\">Flowering crabapple</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Kilo22\">Kilo22</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Malus#/media/File:Flowering_crabapple_in_Washington_DC.jpg",
    photo2Alt: "Flowering crabapple blooms",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flowering_crabapple_in_Washington_DC.jpg/256px-Flowering_crabapple_in_Washington_DC.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Crabapples.jpg\">Ripe wild crab apples (Malus sylvestris)</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Wehha\">Wehha</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Malus#/media/File:Crabapples.jpg",
    photo3Alt: "Ripe wild crab apples (Malus sylvestris)",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Crabapples.jpg/256px-Crabapples.jpg",

    photo4Credit: "Trunk. Public domain, via Wikimedia Commons.",
    photo4Href: "https://en.wikipedia.org/wiki/Malus#/media/File:20071103Tradkrafta1.JPG",
    photo4Alt: "Trunk",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/20071103Tradkrafta1.JPG/256px-20071103Tradkrafta1.JPG",

    photo5Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Apple_blossom._Eastern_Siberia.jpg\">Apple blossom.</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Oleg_Bor\">Oleg Bor</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo5Href: "https://en.wikipedia.org/wiki/Malus#/media/File:Apple_blossom._Eastern_Siberia.jpg",
    photo5Alt: "Apple blossom",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Apple_blossom._Eastern_Siberia.jpg/256px-Apple_blossom._Eastern_Siberia.jpg",
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
    slug: "witch-hazel",
    background: "bg-large/bg-198.jpg",
    backgroundSmall: "bg-small/bg-198.jpg",
    description: "<p>The Witch-hazel, Hamamelis virginiana, is a unique and versatile deciduous shrub or small tree, native to the woodlands of North America. Typically growing to 15-25 feet in height, it is renowned for its distinctive late fall flowering. The Witch-hazel is an understory tree, often found in forest margins and along stream banks, where it thrives in moist, well-drained soils.</p><p>One of the most remarkable features of the Witch-hazel is its fragrant, yellow flowers with long, ribbon-like petals, which bloom from October to December, a rarity among temperate trees. These flowers provide a splash of color in the otherwise barren autumn landscape. The leaves of the Witch-hazel are broadly oval, with wavy edges, turning a vibrant yellow in the fall. After flowering, the tree produces small, woody capsules that eject seeds with a notable force.</p><p>Witch-hazel has a long history of medicinal use, with its bark and leaves traditionally used to produce astringent extracts. In landscaping, it's valued for its unique flowering, fall color, and ability to thrive in shaded conditions, making it a popular choice for naturalistic gardens and woodland settings.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Hamamelis_virginiana_FlowersLeaves_BotGardBln0906.JPG\">Witch-hazel leaves and flowers</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Hamamelis_virginiana#/media/File:Hamamelis_virginiana_FlowersLeaves_BotGardBln0906.JPG",
    photo1Alt: "Witch-hazel leaves and flowers",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Hamamelis_virginiana_FlowersLeaves_BotGardBln0906.JPG/360px-Hamamelis_virginiana_FlowersLeaves_BotGardBln0906.JPG",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Common_Witch_Hazel_Hamamelis_virginiana_Leaf_2000px.jpg\">Witch-Hazel leaf</a>, Derek Ramsey (<a href=\"https://en.wikipedia.org/wiki/User:Ram-Man\">Ram-Man</a>), <a href=\"https://creativecommons.org/licenses/by-sa/2.5/legalcode\" rel=\"license\">CC BY-SA 2.5</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Hamamelis_virginiana#/media/File:Common_Witch_Hazel_Hamamelis_virginiana_Leaf_2000px.jpg",
    photo2Alt: "Witch-hazel leaf",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Common_Witch_Hazel_Hamamelis_virginiana_Leaf_2000px.jpg/256px-Common_Witch_Hazel_Hamamelis_virginiana_Leaf_2000px.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Hamamelis_virginiana_03.JPG\">Flower and fruit in December</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Llez\">H. Zell</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Hamamelis_virginiana#/media/File:Hamamelis_virginiana_03.JPG",
    photo3Alt: "Flower and fruit in December",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Hamamelis_virginiana_03.JPG/256px-Hamamelis_virginiana_03.JPG",

    photo4Credit: "Winter twig. Public domain, via Wikimedia Commons.",
    photo4Href: "https://en.wikipedia.org/wiki/Hamamelis_virginiana#/media/File:Hamamelis_virginiana.jpg",
    photo4Alt: "Winter twig",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Hamamelis_virginiana.jpg/256px-Hamamelis_virginiana.jpg",

    photo5Credit: "Witch-hazel range map. Public domain, via Wikimedia Commons.",
    photo5Href: "https://en.wikipedia.org/wiki/Hamamelis_virginiana#/media/File:Hamamelis_virginiana_map.png",
    photo5Alt: "Witch-hazel range map.",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Hamamelis_virginiana_map.png/256px-Hamamelis_virginiana_map.png",
  },
  {
    nameCommon: "Yellow Birch",
    aka: [
      "Golden Birch",
      "Swamp Birch",
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
    slug: "yellowbirch",
    background: "bg-large/bg-94b.jpg",
    backgroundSmall: "bg-small/bg-94b.jpg",
    description: "<p>The Yellow Birch, Betula alleghaniensis, is a striking deciduous tree native to the northeastern United States and southeastern Canada. It is one of the largest North American birches, typically growing to 60-75 feet in height, sometimes reaching up to 100 feet in its natural forest habitat. The Yellow Birch is especially known for its distinctive bark, which peels in thin, horizontal strips and has a silvery-golden hue, giving the tree its common name.</p><p>The leaves of the Yellow Birch are oval to nearly heart-shaped with finely serrated edges, turning a bright yellow in the fall, adding to the tree's ornamental appeal. In the spring, it produces catkins, followed by small winged seeds that are dispersed by the wind. The bark has a characteristic wintergreen scent when crushed. The tree's wood is hard and strong, making it valuable for furniture, flooring, and veneers.</p><p>With its attractive bark, lovely fall color, and graceful form, the Yellow Birch is a popular choice for landscaping in cooler climates. It prefers moist, well-drained soils and is often found in mixed hardwood forests, adding beauty and diversity to the landscape.</p>",

    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Betula_alleghaniensis_5349050.jpg\">Yellow birch foliage</a>, Keith Kanoti, <a href=\"https://creativecommons.org/licenses/by/3.0/legalcode\" rel=\"license\">CC BY 3.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Betula_alleghaniensis#/media/File:Betula_alleghaniensis_5349050.jpg",
    photo1Alt: "Yellow birch foliage",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Betula_alleghaniensis_5349050.jpg/256px-Betula_alleghaniensis_5349050.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:B_alleghaniensis_01.jpg\">Yellow birch bark</a>, Joseph OBrien, <a href=\"https://creativecommons.org/licenses/by/3.0/legalcode\" rel=\"license\">CC BY 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Betula_alleghaniensis#/media/File:B_alleghaniensis_01.jpg",
    photo2Alt: "Yellow birch bark",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/3/3e/B_alleghaniensis_01.jpg",

    photo3Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Betula_alleghaniensis_2017-05-23_0587.jpg\">Yellow birch leaves</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Salicyna\">Salicyna</a>, <a href=\"https://creativecommons.org/licenses/by-sa/4.0/legalcode\" rel=\"license\">CC BY-SA 4.0</a>",
    photo3Href: "https://en.wikipedia.org/wiki/Betula_alleghaniensis#/media/File:Betula_alleghaniensis_2017-05-23_0587.jpg",
    photo3Alt: "Yellow birch leaves",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Betula_alleghaniensis_2017-05-23_0587.jpg/256px-Betula_alleghaniensis_2017-05-23_0587.jpg",

    photo4Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Betula_alleghaniensis_ÖBG_10-09-29.jpg\">Catkins</a>,<a href=\"https://commons.wikimedia.org/wiki/User:El_Grafo\">El Grafo</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo4Href: "https://en.wikipedia.org/wiki/Betula_alleghaniensis#/media/File:Betula_alleghaniensis_%C3%96BG_10-09-29.jpg",
    photo4Alt: "Catkins",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Betula_alleghaniensis_%C3%96BG_10-09-29.jpg/256px-Betula_alleghaniensis_%C3%96BG_10-09-29.jpg",

    photo5Credit: "Young bark. Public domain, via Wikimedia Commons.",
    photo5Href: "https://en.wikipedia.org/wiki/Betula_alleghaniensis#/media/File:Yellow_Birch_in_Thunder_Bay_Ontario.jpg",
    photo5Alt: "Young bark",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Yellow_Birch_in_Thunder_Bay_Ontario.jpg/256px-Yellow_Birch_in_Thunder_Bay_Ontario.jpg",

    photo6Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Foliage_Walk_(15)_(29719042493).jpg\">Mature bark</a>, <a href=\"https://www.flickr.com/people/14922165@N00\">Nicholas A. Tonelli</a> from Northeast Pennsylvania, USA, <a href=\"https://creativecommons.org/licenses/by/2.0/legalcode\" rel=\"license\">CC BY 2.0</a>",
    photo6Href: "https://en.wikipedia.org/wiki/Betula_alleghaniensis#/media/File:Foliage_Walk_(15)_(29719042493).jpg",
    photo6Alt: "Mature bark",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Foliage_Walk_%2815%29_%2829719042493%29.jpg/256px-Foliage_Walk_%2815%29_%2829719042493%29.jpg",

    photo7Credit: "Yellow birch range map. Public domain, via Wikimedia Commons.",
    photo7Href: "https://en.wikipedia.org/wiki/Betula_alleghaniensis#/media/File:Betula_alleghaniensis_range_map_1.png",
    photo7Alt: "Yellow birch range map",
    photo7Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Betula_alleghaniensis_range_map_1.png/256px-Betula_alleghaniensis_range_map_1.png",
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
    slug: "yellowbuckeye",
    background: "bg-large/bg-1.jpg",
    backgroundSmall: "bg-small/bg-1.jpg",
    description: "<p>The Yellow Buckeye, Aesculus flava, is a stately and robust deciduous tree native to the southeastern United States. It typically reaches heights of 50 to 75 feet, though it can grow taller under ideal conditions. The tree is notable for its large, palmately compound leaves, which consist of five to seven leaflets that emerge a bright green and turn a rich yellow in the fall, contributing to its autumnal display.</p><p>In the spring, the Yellow Buckeye produces showy, upright clusters of pale yellow to greenish-yellow flowers, which are a nectar source for a variety of pollinators. These flowers give way to smooth, light brown seed capsules, each containing one or two large, shiny seeds, or “buckeyes.” The tree's bark is gray-brown and becomes increasingly rough and furrowed with age.</p><p>Often found in rich, moist woods and along stream banks, the Yellow Buckeye is valued for its shade and ornamental qualities. Despite its beauty, all parts of the tree, especially the seeds, are toxic if ingested. Its grand stature and striking spring flowers make it a noteworthy addition to parks, large gardens, and naturalized areas.</p>",
    photo1Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Aesculus_flava2.jpg\">Yellow Buckeye tree</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Schlurcher\">Schlurcher</a>, <a href=\"https://creativecommons.org/licenses/by/4.0/legalcode\" rel=\"license\">CC BY 4.0</a>",
    photo1Href: "https://en.wikipedia.org/wiki/Aesculus_flava#/media/File:Aesculus_flava2.jpg",
    photo1Alt: "Yellow Buckeye tree",
    photo1Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Aesculus_flava2.jpg/256px-Aesculus_flava2.jpg",

    photo2Credit: "<a href=\"https://commons.wikimedia.org/wiki/File:Aesculus_flava-leaf.jpg\">Yellow Buckeye leaf</a>, <a href=\"https://commons.wikimedia.org/wiki/User:Jaknouse\">Jaknouse</a>, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/legalcode\" rel=\"license\">CC BY-SA 3.0</a>",
    photo2Href: "https://en.wikipedia.org/wiki/Aesculus_flava#/media/File:Aesculus_flava-leaf.jpg",
    photo2Alt: "Yellow Buckeye leaf",
    photo2Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Aesculus_flava-leaf.jpg/256px-Aesculus_flava-leaf.jpg",

    photo3Credit: "Yellow Buckeye bark. Public domain, via Wikimedia Commons.",
    photo3Href: "https://en.wikipedia.org/wiki/Aesculus_flava#/media/File:Aesculus_octandra_bark.jpg",
    photo3Alt: "Yellow Buckeye bark",
    photo3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Aesculus_octandra_bark.jpg/256px-Aesculus_octandra_bark.jpg",

    photo4Credit: "Spring bud break. Public domain, via Wikimedia Commons.",
    photo4Href: "https://en.wikipedia.org/wiki/Aesculus_flava#/media/File:Aesculus_octandra_flower.jpg",
    photo4Alt: "Spring bud break",
    photo4Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Aesculus_octandra_flower.jpg/256px-Aesculus_octandra_flower.jpg",

    photo5Credit: "Yellow Buckeye fruit. Public domain, via Wikimedia Commons.",
    photo5Href: "https://en.wikipedia.org/wiki/Aesculus_flava#/media/File:Yellow_buckeye_fruits.jpg",
    photo5Alt: "Yellow Buckeye fruit",
    photo5Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Yellow_buckeye_fruits.jpg/256px-Yellow_buckeye_fruits.jpg",

    photo6Credit: "Yellow Buckeye range map. Public domain, via Wikimedia Commons.",
    photo6Href: "https://en.wikipedia.org/wiki/Aesculus_flava#/media/File:Aesculus_flava_range_map_1.png",
    photo6Alt: "Yellow Buckeye range map",
    photo6Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Aesculus_flava_range_map_1.png/256px-Aesculus_flava_range_map_1.png",
  }
];



export const store = createStore({
    state() {
        return {
          trees: [...initialTreesState], 
          isMenuOpen: false,
          selectedTypes: initialSelectedTypes,
          selectedNeedles: initialSelectedNeedles,
          selectedClusters: initialSelectedClusters,
          selectedLeafTypes: initialSelectedLeafTypes,
          selectedCompoundStructures: initialSelectedCompoundStructures,
          selectedLeafAttachments: initialSelectedLeafAttachments,
          selectedFallColors: initialSelectedFallColors,
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
        // Clear local storage:
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
      closeMenu(state) {
        state.isMenuOpen = false;
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
        // asyncAddItem({ commit }, newItem) {
        //     // For example, simulating an async action with a timeout
        //     setTimeout(() => {
        //         commit('addItem', newItem);
        //     }, 1000);
        // },
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


