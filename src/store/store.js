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
    background: "bg_pexels1.jpg", 
    backgroundSmall: "bg_pexels1_small.jpg",
    photo1: "/img/alternate-leaved-dogwood-1.jpg",
    photo2: "/img/alternate-leaved-dogwood-2.jpg",
    photo3: "/img/alternate-leaved-dogwood-3.jpg",
    description:  "<p>The Alternate-leaved Dogwood (Cornus alternifolia), also known as Pagoda Dogwood for its tiered, horizontal branches, is a deciduous tree that boasts a unique architectural flair in woodland gardens. This North American native typically matures to a modest 15-25 feet tall, flourishing in the understory with a preference for partial shade and well-drained, acidic soils. Its leaves, arranged alternately as its name suggests—uncommon among dogwoods—emerge as a bright green, turning to purplish-red in the fall. In late spring to early summer, the tree is adorned with clusters of small, creamy-white flowers, which give way to dark blue berries on red stems, providing a feast for native birds. The tree's bark, mottled and gray, adds winter interest. With a low canopy and non-invasive root system, the Alternate-leaved Dogwood is a versatile addition to residential landscapes, offering year-round visual appeal and ecological benefits.</p>"
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
    background: "bg_pexels7.jpg", 
    backgroundSmall: "bg_pexels7_small.jpg",
    description: "<p>The American Basswood (Tilia americana), a stately decidome that can soar to grand heights of 60-120 feet, is renowned for its expansive canopy, which provides a lush, deep shade. This native North American tree is often found in rich, moist woods and along streams throughout the eastern and central United States. It has a broadly columnar to rounded shape, with a straight trunk and symmetrically branching crown. Heart-shaped, serrated leaves flutter in the slightest breeze and turn a vibrant yellow come autumn. In early summer, small, fragrant cream-colored flowers dangle from slender peduncles, drawing in a symphony of pollinators; these blooms later develop into small, nut-like fruits. The Basswood's soft, lightweight wood is highly valued for carving and woodworking. A gentle giant in the landscape, the American Basswood is a favorite for wildlife and a classical choice for shade in urban and rural settings.</p>"
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
    background:"bg_forest1.jpg",
    backgroundSmall: "bg_forest1_small.jpg",
    description: "<p>The American Beech (Fagus grandifolia) is a noble and imposing hardwood, native to the eastern United States and southeastern Canada. Its grandeur is evident as it reaches up to 80 feet tall with a broad, rounded crown. The smooth, silvery-gray bark is unmistakably sleek, often carved with initials that persist for decades. Its elliptical leaves are a glossy green, with finely toothed margins, turning a rich bronze in the fall, often lingering on the branches into winter. Spring unfurls tiny, inconspicuous flowers, succeeded by small, prickly husks that contain edible nuts, coveted by wildlife. This tree prefers well-drained, acidic soils and doesn't tolerate urban pollution well, making it a staple in less disturbed forested areas. American Beech is slow-growing but long-lived, often reaching 300 years, with its stately presence and dense canopy offering a serene backdrop or an anchor in larger landscapes.</p>"
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
    compoundStructure: "single",
    leafAttachment: "opposite",
    fallColor: [
      "yellow",
      "brown"
    ],
    slug: "americanbladdernut", 
    description: "<p>The American Bladdernut (Staphylea trifolia) is a charming, underutilized deciduous shrub or small tree, typically growing to a modest height of 10-15 feet. Native to the understory of Eastern North America's forests, this plant thrives in moist, well-drained soils, often along stream banks and in rich woodlands. Its most distinctive feature is the inflated, bladder-like seed pods that hang in clusters, turning from green to a papery brown as they mature in the fall. These whimsical pods add a unique textural element to the landscape and a point of interest in winter after the leaves have fallen. The tree's foliage is comprised of trifoliate leaves, which are arranged oppositely on arching branches, presenting a soft green hue in spring and transforming to a clear yellow in autumn. In spring, drooping clusters of fragrant, bell-shaped white flowers grace the tree, providing a delicate floral display. The American Bladdernut is a versatile and low-maintenance choice for naturalized areas or woodland gardens.</p>"
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
    description: "<p>The American Chestnut (Castanea dentata) was once a titan of the Eastern American forests, casting its shadow across the landscape with towering heights reaching up to 100 feet. Recognized by its broad, spreading canopy, the tree was both a timber staple and a critical wildlife food source, with its abundant, nutritious nuts. Its leaves are long and narrow with a toothed edge, and they turn to a golden hue in autumn. However, the early 20th century saw this species decimated by the chestnut blight, a fungal disease accidentally introduced from imported Asiatic chestnut trees. The blight's devastation transformed this once-dominant tree into a rarity, leaving behind only the sprouting stumps of former giants, as the blight does not affect the roots which can still resprout. Efforts are ongoing to restore this species through science and selective breeding with blight-resistant trees. The American Chestnut's tale is a poignant reminder of the fragility and interconnectedness of ecological systems.</p>"
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
    description: "<p>The American Elm (Ulmus americana) once lined the streets of towns across North America with its distinctive vase-like silhouette reaching heights of 60-80 feet. This beloved deciduous tree was famed for its dense canopy of serrated, ovate leaves, which turned golden yellow in fall, and its ability to thrive in various soil types. In the spring, small, inconspicuous flowers appear before the leaves, developing into flat, papery samaras, or winged seeds. However, the mid-20th century saw this majestic tree besieged by Dutch elm disease, a fungal infection spread by bark beetles, leading to widespread decimation of the population. Despite this, the American Elm remains a symbol of strength and endurance, with ongoing efforts to cultivate disease-resistant varieties. Its wood, once used for shipbuilding and furniture, is now less commonly harvested due to its rarity. The American Elm's story is one of both ecological loss and the hope for restoration.</p>"
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
    description: "<p>The American Hophornbeam (Ostrya virginiana), also known as Ironwood for its dense, hard timber, is a small to medium-sized deciduous tree that often grows to 40 feet in height. It features a rounded crown with slender, spreading branches, and flaky bark that adds texture to landscapes. Native to North America, it thrives in well-drained soils, from deep forests to rocky slopes. Its leaves are ovate and sharply-toothed, resembling those of the elm but more finely textured, turning yellow to orange in the fall. Spring brings long, attractive catkins, followed by distinctive hop-like fruit clusters that persist through winter, providing interest and food for wildlife. The tree's wood is valued for tool handles and sporting equipment, owing to its toughness. Unassuming yet resilient, the American Hophornbeam is a low-maintenance choice for naturalized areas or as a landscape specimen where its subtle beauty and durable nature can be appreciated.</p>"
  },
  {
    nameCommon: "American Mountain-ash",
    order: "Rosales",
    family: "Rosaceae",
    familyCommon: "Rose",
    genus: "Sorbus",
    species: "Sorbus americana",
    type: "deciduous",
    leafType: "compound",
    compoundStructure: "single",
    leafAttachment: "alternate",
    fallColor: [
      "yellow"
    ],
    slug: "americanmountain-ash", 
    description: "The American Mountain-ash (Sorbus americana) is a small, decorative tree native to the northeastern United States and eastern Canada, flourishing in the cooler climates of higher altitudes and northern latitudes. Typically reaching 15 to 30 feet in height, it graces the landscape with a rounded crown and fine, textured foliage. Its compound leaves are composed of numerous leaflets, turning a striking array of oranges and reds in the autumn. In late spring to early summer, the tree is adorned with dense clusters of white flowers, which develop into vibrant, orange-red berries by late summer. These berry clusters persist into winter, offering a valuable food source for birds and wildlife. The Mountain-ash is not a true ash but is so named for its ash-like leaves. Its slender gray bark and modest stature make it an excellent choice for residential gardens where its ornamental berries and fall color can be a focal point."
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
    description: "The American Pawpaw (Asimina triloba) presents a lush, tropical appearance, yet it is indigenous to the temperate woodlands of North America. This small deciduous tree grows to about 20 feet tall and thrives in the understory, preferring rich, well-drained soils. Its broad, oblong leaves, which can reach up to 12 inches in length, turn a deep yellow in the fall. In the spring, the pawpaw tree is distinctive for its unusual, purplish-brown flowers, which give way to large, green, mango-like fruits by late summer. The fruits have a custard-like texture with a flavor reminiscent of bananas mixed with mango, and are beloved by both humans and wildlife. As the largest edible fruit native to the United States, the pawpaw is gaining popularity for its unique taste and nutritional value. With its natural resilience and low maintenance, the American Pawpaw is a rewarding addition for those looking to cultivate native edibles and support local biodiversity."
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
    description: "<p>The American Persimmon (Diospyros virginiana) is a native deciduous tree that graces the Eastern United States with its presence. Growing to a height of 35-60 feet, this species is renowned for its hardiness and adaptability, thriving in a variety of soils and conditions. The persimmon's bark is distinctive—dark, thick, and deeply furrowed, providing textural interest throughout the year. Its leaves are broad and glossy, offering a rich, green canopy in summer before turning to vivid shades of yellow, orange, and red in the autumn.</p><p>Springtime blooms are inconspicuous, but they give way to the tree's true bounty: the persimmon fruit. These round, orange berries are astringent when unripe but become sweet and custard-like after the first frost, making them a treat for wildlife and humans alike. The fruits have a long history of use in traditional Native American cuisine and are still valued today for their flavor and nutritional content. The American Persimmon is not just a food source but also a striking ornamental tree, particularly attractive to those interested in native planting and wildlife gardening.</p>"
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
    description: "The American Plum (Prunus americana), also known as Wild Plum, is a versatile deciduous tree native to North America, adaptable to a range of environments from stream banks to prairies. Typically growing to 15-25 feet in height, it forms a rounded shape with a thicket of branches that can be trained as a single trunk or allowed to spread naturally. In early spring, before the foliage unfurls, the tree is covered with a profusion of fragrant white flowers, attracting pollinators and signaling the end of winter. The blossoms give way to small, red to yellow plums with a tart flavor, ripening by late summer. These fruits are enjoyed by wildlife and can be used in jams and jellies. The leaves are serrated and green, turning to yellow or red hues in the fall. The American Plum's rugged bark and branch structure provide winter interest, making it a resilient and attractive choice for naturalized areas or as a wildlife-friendly addition to the home garden."
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
    description: "<p>The American Pussy Willow (Salix discolor) is a beloved harbinger of spring, with its distinctive soft, silver catkins that burst forth on bare branches, often while the chill of winter still lingers. This deciduous shrub or small tree is native to North America, typically reaching 6 to 15 feet in height, and is cherished for its early-season interest and ease of care. The pussy willow's branches spread informally, creating a loosely structured, rounded silhouette.</p><p>The catkins, which precede the leaves, are a favorite in floral arrangements and are one of the first sources of pollen for bees. As the season progresses, the catkins give way to lance-shaped, light green leaves. The pussy willow thrives in moist, well-drained soil, and full to partial sunlight, often naturally occurring near wetlands and stream banks. Its ability to tolerate wet conditions makes it an excellent choice for rain gardens or naturalized areas. With minimal pruning, the American Pussy Willow remains a charming and rustic addition to any landscape.</p>"
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
    description: "<p>The American Sweetgum (Liquidambar styraciflua) is a striking deciduous tree cherished for its star-shaped leaves and brilliant autumnal colors. Towering at an impressive height of 60 to 75 feet, it casts a commanding presence with a pyramidal to oval form. The glossy green leaves transition through a splendid palette of reds, purples, and oranges as the seasons turn, offering a spectacular fall display.</p><p>Springtime ushers in inconspicuous flowers, which develop into the tree's distinctive spiky seed balls. These seed pods hang from the branches throughout the winter, adding texture to the bare limbs. The sweetgum's bark is deeply furrowed, featuring corky ridges that create an interesting pattern with age.</p><p>Preferring full sun and moist, rich soils, the sweetgum is a popular landscaping choice, often used in parks and large spaces. However, its seed pods can be a nuisance in residential settings. Despite this, the American Sweetgum remains valued for its ornamental beauty and as a source of hardwood.</p>"
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
    description: "<p>The American Sycamore (Platanus occidentalis), also known as the American Plane or Buttonwood, is a grand, fast-growing deciduous tree known for its size and longevity. Dominating the landscape with heights reaching 70 to 100 feet, it boasts a massive, sturdy trunk and a wide-spreading canopy that can provide ample shade. This tree is easily recognizable by its mottled exfoliating bark, which flakes off in patches to reveal a creamy white and green inner bark, giving the trunk and limbs a distinctive camouflage-like appearance.</p><p>Its large, palmate leaves are bright green and turn to a golden brown in the fall, before dropping to reveal round, ball-like seed clusters that dangle from the branches. These seeds persist through winter, decorating the bare tree. The American Sycamore is a hardy species, often planted in urban environments for its tolerance to pollution and its ability to thrive in a wide range of soil conditions. With its impressive stature and unique bark, it serves as a striking ornamental tree for large landscapes.</p>"
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
    description: '<p>The Amur Maple (Acer ginnala), a native to the northeastern regions of Asia, is a small, versatile deciduous tree or large shrub that is increasingly popular in temperate climates for its ornamental qualities and modest size, typically growing to 15-20 feet in height. With a rounded to open crown, the tree is well-suited for urban gardens and spaces where larger maples would be overwhelming.</p><p>The leaves of the Amur Maple are simple and palmate, resembling miniature versions of the classic maple leaf. They emerge in spring as fresh green, turning to vibrant shades of yellow, orange, and deep red in the fall, providing a spectacular autumn display. In spring, fragrant yellow-white flowers appear, giving way to winged samaras (maple "helicopters") that mature from green to red.</p><p>Hardy and adaptable, the Amur Maple can tolerate a range of soil conditions and is drought-resistant once established. It is often used in landscaping for hedges, screens, or as a stand-alone specimen. Its ability to withstand harsh conditions makes it an attractive and practical choice for gardeners seeking a touch of fall color and year-round interest.</p>'
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
    description: "<p>The Austrian Pine (Pinus nigra), also known as the Black Pine, is a robust, evergreen conifer that brings a stately and enduring presence to landscapes. Native to Europe, this species has been widely planted across North America, reaching heights of 40 to 60 feet. It boasts a dense, pyramidal shape in its youth that matures into a rounded and sometimes irregular crown, providing a robust silhouette against the sky.</p><p>The tree's long, dark green needles, growing in pairs, are stiff and lush, offering year-round color and texture. They cluster densely on the branches, creating a thick canopy that provides ample shade. The Austrian Pine is easily recognizable by its thick, deeply fissured, dark gray to black bark, which adds a rugged character especially appreciated in winter months.</p><p>Highly adaptable to a variety of conditions, this pine is valued for its tolerance to urban pollution and soil compaction, making it a favored choice for city plantings and windbreaks. Its sturdy nature and classic coniferous form make the Austrian Pine a reliable and attractive addition to any setting seeking a touch of evergreen resilience.</p>"
  },
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
    description: '<p>The Bald Cypress (Taxodium distichum) is a stately deciduous conifer, iconic in Southern swamps but adaptable to drier lands and cooler climates. Reaching heights of 50 to 70 feet, it is easily recognized by its unique, buttressed trunk and feathery, light green needles that turn a rusty orange before shedding in fall. The tree’s silhouette is strikingly elegant, with a straight, tapering trunk and a pyramidal canopy that becomes more open and spreading with age.</p><p>Native to the southeastern United States, the Bald Cypress is famed for its "knees," woody projections that rise from the roots around the tree, believed to help with gas exchange and stability in its often waterlogged habitat. This remarkable tree is not only a survivor of wet conditions but is also remarkably rot-resistant, making its wood valuable for construction.</p><p>The Bald Cypress is a tree of resilience and beauty, thriving where few others can, and providing vital ecosystem services, as well as aesthetic value to parks, gardens, and natural areas.</p>'
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
    description: "<p>The Balsam Fir (Abies balsamea) is a quintessential evergreen conifer native to the cold climates of the northeastern United States and Canada. It reaches a mature height of 45 to 75 feet, displaying a classic conical shape that embodies the spirit of the northern woods. Its dark-green, aromatic needles are arranged in a spiral fashion along the branches, which are dense and contribute to the tree's compact appearance.</p><p>Distinct for its smooth, gray bark and the resin-filled blisters that dot its surface, the Balsam Fir exudes a distinctive fragrance, especially when its needles or resin blisters are crushed. In late fall, it produces upright, cylindrical cones that disintegrate on the tree, releasing seeds to the wind.</p><p>The Balsam Fir is highly valued for its wood, essential oils, and as a traditional Christmas tree. Its dense foliage provides shelter for wildlife and contributes to the picturesque, snow-laden landscapes of the boreal forest. Hardy and shade-tolerant, it’s a symbol of the wilderness and a staple in both natural forests and cultivated landscapes.</p>"
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
    description: "<p>The Balsam Poplar (Populus balsamifera), also known as the Balm of Gilead, is a hardy deciduous tree native to the northern regions of North America. With a typical height of 50 to 80 feet, it grows rapidly, forming a tall and narrow silhouette that is robust and hardy against the backdrop of cold climates. Its bark is dark gray and deeply furrowed, providing textural interest throughout the year.</p><p>In early spring, before the leaves unfurl, the Balsam Poplar is adorned with resinous buds that exude a distinctively fragrant, sticky balsam scent. These buds are often harvested for medicinal salves and ointments. The leaves are shiny green, broad, and ovate with finely toothed edges, fluttering and rustling in the breeze, turning yellow in the fall.</p><p>Known for its cotton-like seeds that float through the air in spring, the Balsam Poplar plays a crucial role in riparian ecosystems, providing erosion control and habitat. It's valued for its quick growth, making it an excellent choice for windbreaks and privacy screens in landscape design.</p>"
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
    description: "<p>The Bitternut Hickory (Carya cordiformis) is a tall and stately deciduous tree that is native to the eastern United States. It typically soars to heights of 50 to 80 feet, characterized by a straight, slender trunk and a well-formed, rounded crown. Its bark is smooth and gray when young, becoming shaggy and more deeply furrowed with age, adding to the tree's dignified appearance.</p><p>Noted for its pinnately compound leaves, which usually feature 7 to 11 lance-shaped, serrated leaflets, the Bitternut Hickory's foliage is a vibrant green that transitions to a cheerful yellow in the autumn, creating a bright canopy. The tree produces small, greenish-yellow male and female flowers on the same tree, with the females developing into the bitter-tasting nuts that give the tree its name. These nuts are encased in thin, yellow-green husks that split open when mature.</p><p>Although not favored for human consumption due to their bitter flavor, the nuts are an important food source for wildlife. The Bitternut Hickory is a valuable hardwood species, often used in furniture making and for its high-quality firewood. With its tall stature and strong wood, the Bitternut Hickory is a noble feature in forests, parks, and large landscapes.</p>"
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
    description: '<p>The Black Ash (Fraxinus nigra) is a deciduous hardwood tree that is indigenous to wetland areas of the northeastern United States and Canada. This slender, medium-sized tree typically grows to heights of 40 to 60 feet. It has a straight trunk with a narrow, rounded crown, and its bark is dark gray to brown with deep furrows and intersecting ridges, creating a diamond-like pattern.</p><p>The tree’s leaves are compound, with 7 to 11 leaflets that are dark green and turn a muted yellow in the fall. Black Ash is dioecious, with separate male and female flowers that appear on different trees before the emergence of leaves. The female trees produce winged samaras that are dispersed by the wind.</p><p>Black Ash is notable for its ability to thrive in wet, swampy conditions, and its wood is highly valued for its flexibility and strength, particularly in the making of baskets, hence its nickname, "basket ash." However, the species is under threat from the invasive Emerald Ash Borer, which has devastated populations of ash trees across North America.</p>'
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
    slug: "blackcherry"
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
    slug: "blacklocust"
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
    slug: "blackmaple"
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
    slug: "blackoak"
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
    slug: "blackpoplar"
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
    slug: "blackspruce"
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
    slug: "blackwalnut"
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
    slug: "blackwillow"
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
    slug: "blackjackoak"
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
    slug: "bluebeech"
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
    slug: "bluespruce"
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
    slug: "boxelder"
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
    slug: "buckthorn"
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
    slug: "buroak"
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
    slug: "butternut"
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
    slug: "buttonbush"
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
    slug: "chestnutoak"
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
    slug: "chinquapinoak"
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
    slug: "chokecherry"
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
    slug: "commonhackberry"
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
    slug: "commonhoptree"
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
    slug: "commonprickly-ash"
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
    slug: "crabapple"
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
    slug: "cucumbertree"
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
    slug: "easterncottonwood"
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
    slug: "easternhemlock"
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
    slug: "easternredbud"
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
    slug: "easternredcedar"
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
    slug: "easternwahoo"
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


