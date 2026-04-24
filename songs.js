const rawSongs = [
    {
        title: "A New Spirit",
        sections: [
            { name: "VERSE", lyrics: "(Men)\nLord I want to serve before You\nWith tongues of fire and a heart set free\nCome rebuild this fallen temple\nI am Yours I surrender and I yield" },
            { name: "VERSE", lyrics: "(Women)\nLord I want to sing Your praises\nWith tongues of fire and a heart set free\nCome and fill this broken vessel\nI am Yours I surrender and I yield" },
            { name: "CHORUS", lyrics: "A new heart I will give you says the Lord\nAnd a new Spirit I will put within you\n(2x)" },
            { name: "VERSE", lyrics: "Lord I’ll be sin’s slave no longer\nThe blood of Christ has set me free\nTake my heart my mind my voice Lord\nI am Yours I surrender and I yield" },
            { name: "CHORUS", lyrics: "A new heart I will give you says the Lord\nAnd a new Spirit I will put within you\n(2x)" },
            { name: "BRIDGE", lyrics: "Renew, revive, restore us O Lord\n(3x)" },
            { name: "BRIDGE", lyrics: "A new heart I will give you says the Lord\nAnd a new Spirit I will put within you\n\n(Renew, revive, restore us O Lord)\n(2x)" },
            { name: "END", lyrics: "Lord we want to see Your kingdom\nA church renewed and a world redeemed\nCleanse our lips to speak Your gospel\nWe are Yours we surrender and we yield" }
        ]
    },
    {
        title: "All Blessing, All Glory",
        sections: [
            { name: "VERSE", lyrics: "We have heard we have seen\nWonders great mighty deeds\nFrom your hand we receive\nGoodness and mercy" },
            { name: "VERSE", lyrics: "Age to age you command\nWhat you speak ever stands\nBy your word and your power\nWe find hope rest secure\nSo by faith we will rise and declare" },
            { name: "CHORUS", lyrics: "You are holy\n(3x)" },
            { name: "VERSE", lyrics: "Nations rise kingdoms fail\nYou remain you prevail\nRobed in strength crowned with grace\nJustice and mercy" },
            { name: "VERSE", lyrics: "To your throne we draw near\nBrought by love without fear\nLifted hands hearts redeemed\nFreed from death unashamed\nSo by faith we will rise and declare" },
            { name: "CHORUS", lyrics: "You are holy\n(3x)" },
            { name: "BRIDGE", lyrics: "All blessing all glory all honor and praise\nOur God everlasting the Ancient of Days\nIn sovereignty reigning in wisdom and truth\nYour servants your people your children\nBring worship only to you\nWorship only to you" },
            { name: "END", lyrics: "For you are holy\nYou are holy\nYou are holy\n(2x)" }
        ]
    },
    {
        title: "All That Is Good",
        sections: [
            { name: "VERSE", lyrics: "All that is good, all that is love\nWhatever is holy, whatever is true –\nYou are their source,\nYou are their fount,\nYou, Lord, and You alone!" },
            { name: "REFRAIN", lyrics: "Holy,\nholy,\nholy, O Lord Most High!\n(2x)" },
            { name: "VERSE", lyrics: "All that is good, all that is love\nWhatever is holy, whatever is true –\nYou are their source,\nYou are their fount,\nYou, Lord, and You alone!" },
            { name: "END", lyrics: "Worthy, worthy,\nworthy, O Lord Most High!\nWorthy, worthy, worthy, O Lord\nYou are worthy, O Lord,\nYou are worthy, O Lord Most High!" }
        ]
    },
    {
        title: "Arise O Lord",
        sections: [
            { name: "VERSE", lyrics: "The Lord our God is faithful\nIn all His words and deeds.\nHis steadfast love is\nFor all who call upon His name." },
            { name: "VERSE", lyrics: "And He has given us His word\nThat He will send His Spirit,\nAnd make His dwelling in our midst." },
            { name: "REFRAIN", lyrics: "Arise, O Lord,\nAnd come to Your resting place.\nLet Your glory fill this temple,\nAnd salvation clothe Your saints." },
            { name: "REFRAIN", lyrics: "Arise, O Lord,\nAnd may Your people rejoice in Your goodness.\nRemember Your promise to us, and arise." },
            { name: "VERSE", lyrics: "The highest heavens cannot\nContain the Lord our God,\nNor any temple that man has built\nUpon the earth." },
            { name: "VERSE", lyrics: "And who are we that God should come\nand Make His home within us?\nYet by Your word let it be done." },
            { name: "REFRAIN", lyrics: "Arise, O Lord,\nAnd come to Your resting place.\nLet Your glory fill this temple,\nAnd salvation clothe Your saints." },
            { name: "REFRAIN", lyrics: "Arise, O Lord,\nAnd may Your people rejoice in Your goodness.\nRemember Your promise to us, and arise...." },
            { name: "REFRAIN", lyrics: "Arise, O Lord,\nAnd come to Your resting place.\nLet Your glory fill this temple,\nAnd salvation clothe Your saints." },
            { name: "END", lyrics: "Arise, O Lord,\nAnd may Your people rejoice in Your goodness.\nRemember Your promise to us, and arise." }
        ]
    },
    {
        title: "As We Behold",
        sections: [
            { name: "VERSE", lyrics: "As we behold your presence, O Lord,\nWe call out your name,\nWe praise and acclaim" },
            { name: "VERSE", lyrics: "That You alone\nAre our King and our Lord.\nYou are our all, our life\nNothing can compare,\nNo god can compare" },
            { name: "VERSE", lyrics: "So, Lord, we worship you\nNothing shall possess\nOur hearts until they rest" },
            { name: "VERSE", lyrics: "In you, our King and Lord.\nYour pleasure we will do,\nOur lives we give anew" },
            { name: "VERSE", lyrics: "That you may make your home\nAmong us as we stand\nAnd so to all the land" },
            { name: "VERSE", lyrics: "We give You praise, love,\nGlory and thanks,\nHonor and worship\nFor all you have done." },
            { name: "VERSE", lyrics: "Our lives, our wills,\nOur weakness, our strength\nAll for You, our King and Lord." },
            { name: "VERSE", lyrics: "As we behold your presence, O Lord,\nWe call out your name,\nWe praise and acclaim" },
            { name: "VERSE", lyrics: "That You alone\nAre our King and our Lord.\nYou are our all, our life\nNothing can compare,\nNo god can compare" },
            { name: "VERSE", lyrics: "So, Lord, we worship you\nNothing shall possess\nOur hearts until they rest" },
            { name: "VERSE", lyrics: "In you, our King and Lord.\nYour pleasure we will do,\nOur lives we give anew" },
            { name: "VERSE", lyrics: "That you may make your home\nAmong us as we stand\nAnd so to all the land" },
            { name: "VERSE", lyrics: "We give You praise, love,\nGlory and thanks,\nHonor and worship\nFor all you have done." },
            { name: "VERSE", lyrics: "Our lives, our wills,\nOur weakness, our strength\nAll for You, our King and Lord." },
            { name: "VERSE", lyrics: "We give You praise, love,\nGlory and thanks,\nHonor and worship\nFor all you have done." },
            { name: "END", lyrics: "Our lives, our wills,\nOur weakness, our strength\nAll for You, our King and Lord." }
        ]
    },
    {
        title: "Ascribe Greatness",
        sections: [
            { name: "VERSE", lyrics: "Ascribe greatness to our God, the Rock\nHis work is perfect\nAnd all His ways are just.\n(2x)" },
            { name: "VERSE", lyrics: "A God of faithfulness and\nWithout injustice,\nGood and upright is He.\n(2x)" },
            { name: "VERSE", lyrics: "Ascribe greatness to our God, the Rock\nHis work is perfect\nAnd all His ways are just.\n(2x)" },
            { name: "END", lyrics: "A God of faithfulness and\nWithout injustice,\nGood and upright is He.\n(2x)" }
        ]
    },
    {
        title: "Be Exalted O God",
        sections: [
            { name: "VERSE", lyrics: "I will give thanks to Thee,\nO Lord, among the people.\nI will sing praises to Thee\nAmong the nations." },
            { name: "VERSE", lyrics: "For Thy steadfast love is great,\nIs great to the heavens\nAnd Thy faithfulness,\nThy faithfulness to the clouds." },
            { name: "REFRAIN", lyrics: "Be exalted, O God, above the heavens\nLet Thy glory be over all the earth.\n(2x)" },
            { name: "VERSE", lyrics: "I will give thanks to Thee,\nO Lord, among the people.\nI will sing praises to Thee\nAmong the nations." },
            { name: "VERSE", lyrics: "For Thy steadfast love is great,\nIs great to the heavens\nAnd Thy faithfulness,\nThy faithfulness to the clouds." },
            { name: "END", lyrics: "Be exalted, O God, above the heavens\nLet Thy glory,\nlet Thy glory\nLet Thy glory be over all the earth." }
        ]
    },
    {
        title: "Bethlehem Rejoices",
        sections: [
            { name: "VERSE", lyrics: "Bethlehem rejoices\nHark! The voices clear\nSinging in the starlight\nNearer and more near." },
            { name: "REFRAIN", lyrics: "Unto God be glory\nPeace to men be given.\nThis is His will who dwelleth\nIn the heights of heaven." },
            { name: "VERSE", lyrics: "Heaven cannot contain Him\nNor the bounds of earth.\nYet, O glorious mystery,\nVirgin gives Him birth." },
            { name: "REFRAIN", lyrics: "Unto God be glory\nPeace to men be given.\nThis is His will who dwelleth\nIn the heights of heaven." },
            { name: "VERSE", lyrics: "Now the light ariseth\nIn the darkened skies.\nNow the proud are humbled\nAnd the lowly rise." },
            { name: "END", lyrics: "Unto God be glory\nPeace to men be given.\nThis is His will who dwelleth\nIn the heights of heaven.\n(2x)" }
        ]
    },
    {
        title: "Blessing And Glory",
        sections: [
            { name: "REFRAIN", lyrics: "Blessing and glory,\nWisdom and thanksgiving,\nHonor and power and might\nBe to our God, forever and ever.\nAmen.  Amen.  Amen." },
            { name: "VERSE", lyrics: "The kingdom of the world has become\nThe kingdom of our Lord\nAnd of His Christ\nAnd He shall reign forever and ever.\nAmen." },
            { name: "REFRAIN", lyrics: "Blessing and glory,\nWisdom and thanksgiving,\nHonor and power and might\nBe to our God, forever and ever.\nAmen.  Amen.  Amen." },
            { name: "VERSE", lyrics: "Now the salvation and the power\nAnd the kingdom of our God\nAnd the authority of His Christ have come." },
            { name: "END", lyrics: "Blessing and glory,\nWisdom and thanksgiving,\nHonor and power and might\nBe to our God, forever and ever.\nAmen.  Amen.  Amen.\n(2x)" }
        ]
    },
    {
        title: "Born Into A Battle",
        sections: [
            { name: "VERSE", lyrics: "Born into a battle,\nA warfare to know\nBeyond the visible we see it,\nThe army, the field and the foe." },
            { name: "VERSE", lyrics: "God alone in the garden\nWhere it began long ago\nWhere the enemy who rose up\nDeceived the man God made\nWhere God stated His intention\nTo crush that serpent’s head." },
            { name: "REFRAIN", lyrics: "For the kingdom of this world it shall become\nThe kingdom of our Lord and of His Christ\nAnd He shall reign forever and evermore." },
            { name: "VERSE", lyrics: "Entered into vict’ry,\nWhat wisdom this plan?\nGod’s Son, born of a woman,\nMessiah, an ordinary man.\nSatan said, “It seems so easy.”" },
            { name: "VERSE", lyrics: "As nail through flesh and blood ran\n“Sure this foolishness can’t threaten\nMy reign of death and sin.”\nBut the third day Jesus rose up\nAnd triumphed over him." },
            { name: "REFRAIN", lyrics: "For the kingdom of this world it shall become\nThe kingdom of our Lord and of His Christ\nAnd He shall reign forever and evermore." },
            { name: "VERSE", lyrics: "Toward the final conflict\nGod’s Word our command\nWe move inevitably onward\nGod’s weapons held in our hands." },
            { name: "VERSE", lyrics: "In Him we shall do more than conquer\nBefore our Lord, who can stand?\nMan shall glorify his Maker\nGod shall be enjoyed\nAnd that one called the deceiver\nHis works shall be destroyed." },
            { name: "REFRAIN", lyrics: "For the kingdom of this world it shall become\nThe kingdom of our Lord and of His Christ\nAnd He shall reign forever and ever" },
            { name: "END", lyrics: "For the kingdom of this world it shall become\nThe kingdom of our Lord and of His Christ\nAnd He shall reign forever and evermore." }
        ]
    },
    {
        title: "Breathe On Us",
        sections: [
            { name: "VERSE", lyrics: "We seek the Lord\nO come Holy Spirit\nAnd teach us to worship\nThe one enthroned on high" },
            { name: "VERSE", lyrics: "Inspire O Spirit\nWith words for the Father\nWe join all creation\nTo fill his courts with praise" },
            { name: "CHORUS", lyrics: "We sing breathe on us O Breath of God\nBreathe on us O Breath of God" },
            { name: "CHORUS", lyrics: "(Men)\nBreathe on us O Breath of God\n\n(Women)\nO Holy Spirit hover over us\nAnd we will take new form" },
            { name: "CHORUS", lyrics: "(Men)\nBreathe on us O Breath of God\n\n(Women)\nWe want to praise the Father lifted high\nAnd see his kingdom come" },
            { name: "VERSE", lyrics: "We seek the Lord\nO come Holy Spirit\nAnd teach us to worship\nThe one enthroned on high" },
            { name: "VERSE", lyrics: "Inspire O Spirit\nWith words for the Father\nWe join all creation\nTo fill his courts with praise" },
            { name: "CHORUS", lyrics: "We sing breathe on us O Breath of God\nBreathe on us O Breath of God" },
            { name: "CHORUS", lyrics: "(Men)\nBreathe on us O Breath of God\n\n(Women)\nO Holy Spirit hover over us\nAnd we will take new form" },
            { name: "CHORUS", lyrics: "(Men)\nBreathe on us O Breath of God\n\n(Women)\nWe want to praise the Father lifted high\nAnd see his kingdom come" },
            { name: "END", lyrics: "(Men)\nBreathe on us O Breath of God\n\n(Women)\nO Holy Spirit hover over us\nAnd we will take new form" },
            { name: "END", lyrics: "(Men)\nBreathe on us O Breath of God\n\n(Women)\nWe want to praise the Father lifted high\nAnd see his kingdom come" }
        ]
    },
    {
        title: "Build Your Throne",
        sections: [
            { name: "VERSE", lyrics: "See God rise up in shouts\nOf jubilant praise\nHe appears with robes of light.\nO exalt Him, acclaim the Ancient of days\nCelebrate with all your might." },
            { name: "REFRAIN", lyrics: "Build Your throne in our assembly\nFor we prepare Your habitation.\nPitch Your tent in our praise and glory\nBuild Your throne, O Lord." },
            { name: "VERSE", lyrics: "Our enemies attack with iron and steel\nWe advance with harps and lyre.\nThey do battle in vain using their skill\nFor we fight with holy fire." },
            { name: "REFRAIN", lyrics: "Build Your throne in our assembly\nFor we prepare Your habitation.\nPitch Your tent in our praise and glory\nBuild Your throne, O Lord." },
            { name: "VERSE", lyrics: "Admire the towers, the walls,\nThe fortress of God\nWe are hid beneath His wings.\nLord and warrior is armed\nWith scepter and rod\nAnd triumph we see Him bring." },
            { name: "REFRAIN", lyrics: "Build Your throne in our assembly\nFor we prepare Your habitation.\nPitch Your tent in our praise and glory\nBuild your throne, O Lord." },
            { name: "VERSE", lyrics: "O Jerusalem, declare:\n“Who is your King?”\nElohim, dreaded and strong.\nAll dominions, the pow’rs,\nSpirits of the air\nShall receive the full wrath of God." },
            { name: "REFRAIN", lyrics: "Build Your throne in our assembly\nFor we prepare Your habitation.\nPitch Your tent in our praise and glory\nBuild Your throne, O Lord.\n(2x)" },
            { name: "END", lyrics: "Build Your throne, build Your throne\nBuild Your throne, O Lord!" }
        ]
    },
    {
        title: "By Your Steadfast Love",
        sections: [
            { name: "VERSE", lyrics: "By Your steadfast love,\nI will enter Your house.\nI will worship You in Your holy temple" },
            { name: "VERSE", lyrics: "And revere Your name\nAs I bow before You,\nExalt in You, my Lord, my shield.\nAlleluia! (8x)" },
            { name: "VERSE", lyrics: "By Your steadfast love, (Alleluia)\nI will enter Your house. (Alleluia)\nI will worship You (Alleluia)\nin Your holy temple (Alleluia)" },
            { name: "VERSE", lyrics: "And revere Your name (Alleluia)\nAs I bow before You, (Alleluia)\nExalt in You, (Alleluia)\nmy Lord, my shield. (Alleluia)" },
            { name: "END", lyrics: "Alleluia! (8x)" }
        ]
    },
    {
        title: "Can It Be O My Soul",
        sections: [
            { name: "VERSE", lyrics: "Can it be, O my soul,\nI have found the one true treasure?\nHidden deeply at the source\nOf every heart’s desire" },
            { name: "VERSE", lyrics: "Precious hope, priceless faith,\nPurest love beyond all measure;\nAt what cost, Lord,\nWhat could such a prize require?" },
            { name: "REFRAIN", lyrics: "Only all, only love,\nSelfless love all love surpassing;\nIt is You, the Fount of Life\nYou O Lord our heart’s desire\nLet us die to let Him live;\nSilent be your true surrender." },
            { name: "REFRAIN", lyrics: "Hopeful watching, humble giving,\nFaithful love.\nIt is You, Fount of Life,\nYou have been our heart’s desire,\nIt is You, it is You, the Pearl of Great Price." },
            { name: "VERSE", lyrics: "Can it be, O my soul,\nI have found the one true treasure?\nHidden deeply at the source\nOf every heart’s desire" },
            { name: "VERSE", lyrics: "Precious hope, priceless faith,\nPurest love beyond all measure;\nAt what cost, Lord,\nWhat could such a prize require?" },
            { name: "REFRAIN", lyrics: "Only all, only love,\nSelfless love all love surpassing;\nIt is You, the Fount of Life\nYou O Lord our heart’s desire\nLet us die to let Him live;\nSilent be your true surrender." },
            { name: "REFRAIN", lyrics: "Hopeful watching, humble giving,\nFaithful love.\nIt is You, Fount of Life,\nYou have been our heart’s desire,\nIt is You, it is You, the Pearl of Great Price." },
            { name: "END", lyrics: "Can it be, O my soul,\nI have found the one true treasure?" }
        ]
    },
    {
        title: "Come Holy Spirit",
        sections: [
            { name: "VERSE", lyrics: "Come Holy Spirit\nCome great Fire of God\nEnkindle in us the fire of your love\nTransform us that we may become\nThe image of God's only Son\n(2x)" },
            { name: "CHORUS", lyrics: "Make us h-o-ly, h-o-ly\nAs you are h-o-ly" },
            { name: "VERSE", lyrics: "Come Holy Spirit\nCome great Fire of God\nEnkindle in us the fire of your love\nTransform us that we may become\nThe image of God's only Son\n" },
            { name: "CHORUS", lyrics: "Make us h-o-ly, h-o-ly\nAs you are h-o-ly" },
            { name: "END", lyrics: "Come Holy Spirit\nCome great Fire of God\nEnkindle in us the fire of your love\nTransform us that we may become\nThe image of God's only Son\n" }
        ]
    },
    {
        title: "Come Let Us Go Up",
        sections: [
            { name: "REFRAIN", lyrics: "Come, let us go up\nTo the mountain of the Lord\nUnto the house\nOf the God of Jacob.\n(2x)" },
            { name: "VERSE", lyrics: "And the law will go forth from Zion\nAnd the word of the Lord from Jerusalem.\nWe will walk in His footsteps\nAnd He will teach us His ways." },
            { name: "REFRAIN", lyrics: "Come, let us go up\nTo the mountain of the Lord\nUnto the house\nOf the God of Jacob.\n(2x)" },
            { name: "VERSE", lyrics: "And He will judge many peoples,\nAnd decide for mighty nations far and wide.\nSwords will be beaten into plowshares\nAnd nations will not learn war again." },
            { name: "REFRAIN", lyrics: "Come, let us go up\nTo the mountain of the Lord\nUnto the house of the God of Jacob!\n(2x)" },
            { name: "END", lyrics: "Unto the house of the God of Jacob! (2x)" }
        ]
    },
    {
        title: "Psalm 34 - Come Let Us Magnify The Lord",
        sections: [
            { name: "VERSE", lyrics: "Fear the Lord, you His holy ones, fear the Lord.\nFor those who fear the Lord,\nThey will lack no perfect thing." },
            { name: "VERSE", lyrics: "Trust the Lord, you His servants,\nTrust the Lord.\nFor those who trust the Lord,\nThey will never be ashamed." },
            { name: "REFRAIN", lyrics: "Come let us magnify the Lord,\nLet His praise be upon our lips.\nCome let us bless Him at all times.\nFor we have tasted and seen.\nWe have tasted and seen." },
            { name: "VERSE", lyrics: "Seek the Lord, you His children, seek the Lord.\nFor those who seek the Lord,\nThey will find Him who redeems." },
            { name: "VERSE", lyrics: "Love the Lord, love and serve Him\nForever more.\nFor those who love the Lord,\nThey will see Him face to face." },
            { name: "END", lyrics: "Come let us magnify the Lord,\nLet His praise be upon our lips.\nCome let us bless Him at all times.\nFor we have tasted and seen.\nWe have tasted and seen.\n(2x)" }
        ]
    },
    {
        title: "Create In Me",
        sections: [
            { name: "REFRAIN", lyrics: "Create in me a clean heart,\nPut a new and right spirit within me.\nCast me not away from Your presence\nAnd take not Your Holy Spirit from me." },
            { name: "VERSE", lyrics: "Have mercy on me,\nO God, in Your goodness,\nIn Your compassion blot out all my sin.\nThoroughly cleanse me\nFrom all of my guilt,\nWash me till I’m whiter than snow." },
            { name: "REFRAIN", lyrics: "Create in me a clean heart,\nPut a new and right spirit within me.\nCast me not away from Your presence\nAnd take not Your Holy Spirit from me." },
            { name: "VERSE", lyrics: "Restore to me the joy of Your salvation.\nUphold me with a willing spirit.\nSo I will teach transgressors Your ways\nAnd sinners will return to You." },
            { name: "REFRAIN", lyrics: "Create in me a clean heart,\nPut a new and right spirit within me.\nCast me not away from Your presence\nAnd take not Your Holy Spirit from me." },
            { name: "VERSE", lyrics: "You are pleased with sincerity of heart,\nNot with sacrifices or with holocausts.\nMy sacrifice is a broken spirit\nFor You will not refuse a humble heart." },
            { name: "REFRAIN", lyrics: "Create in me a clean heart,\nPut a new and right spirit within me.\nCast me not away from Your presence\nAnd take not Your Holy Spirit from me." },
            { name: "END", lyrics: "Create in me a clean heart." }
        ]
    },
    {
        title: "Days Of Elijah",
        sections: [
            { name: "VERSE", lyrics: "These are the days of Elijah\nDeclaring the word of the Lord.\nAnd these are the days\nOf Your servant, Moses\nRighteousness being restored." },
            { name: "VERSE", lyrics: "And these are the days of great trials\nOf famine and darkness and sword;\nStill we are the voice in the desert crying,\n\"Prepare ye the way of the Lord\"" },
            { name: "REFRAIN", lyrics: "Behold, He comes, riding on the clouds\nShining like the sun at the trumpet call.\nSo lift your voice, it’s the year of jubilee\nAnd out of Zion’s Hill salvation comes." },
            { name: "VERSE", lyrics: "And these are the days of Ezekiel\nThe dry bones becoming as flesh\nAnd these are the days\nOf Your servant, David\nRebuilding a temple of praise." },
            { name: "VERSE", lyrics: "And these are the days of the harvest\nThe fields are as white in the world\nAnd we are the laborers\nIn Your vineyard\nDeclaring the word of the Lord." },
            { name: "REFRAIN", lyrics: "Behold, He comes, riding on the clouds\nShining like the sun at the trumpet call\nSo lift your voice, it’s the year of jubilee\nAnd out of Zion’s Hill salvation comes." },
            { name: "BRIDGE", lyrics: "There's no God like Jehovah.\n(8x)" },
            { name: "REFRAIN", lyrics: "Behold, He comes, riding on the clouds\nShining like the sun at the trumpet call\nSo lift your voice, it’s the year of jubilee\nAnd out of Zion’s Hill salvation comes.\n(2x)" },
            { name: "END", lyrics: "Out of Zion’s Hill salvation comes!\n(2x)" }
        ]
    },
    {
        title: "Deeply In Love",
        sections: [
            { name: "VERSE", lyrics: "Called out of darkness into Your light\nCrowned with Your goodness\nYour choicest delights" },
            { name: "VERSE", lyrics: "Formed in Your image\nBy power from above\nFilled with Your Spirit\nAnd deeply in love." },
            { name: "VERSE", lyrics: "We love You, Lord,\nWith all our heart and soul.\nAnd Lord, You are our treasure\nAnd our all." },
            { name: "VERSE", lyrics: "For You first loved us\nWith an everlasting love.\nIn You we shall live forever,\nDeeply in love." },
            { name: "VERSE", lyrics: "Called out of darkness into Your light\nCrowned with Your goodness\nYour choicest delights" },
            { name: "VERSE", lyrics: "Formed in Your image\nBy power from above\nFilled with Your Spirit\nAnd deeply in love." },
            { name: "VERSE", lyrics: "We love You, Lord,\nWith all our heart and soul.\nAnd Lord, You are our treasure\nAnd our all." },
            { name: "END", lyrics: "For You first loved us\nWith an everlasting love.\nIn You we shall live forever,\nDeeply in love." }
        ]
    },
    {
        title: "Exodus 15",
        sections: [
            { name: "VERSE", lyrics: "The Lord is my strength and my song.\nAnd He has become my salvation,\nHe is my God!\n(2x)" },
            { name: "VERSE", lyrics: "And I shall prepare Him my heart!\n(3x)" },
            { name: "VERSE", lyrics: "The Lord, He shall reign\nForever and ever, Amen!\n(2x)" },
            { name: "END", lyrics: "And I shall prepare Him my heart!\n(3x)" }
        ]
    },
    {
        title: "Fight The Good Fight Of Faith",
        sections: [
            { name: "REFRAIN", lyrics: "Fight the good fight of faith, people of God\nUnstained and without reproach\nBefore the eyes of men." },
            { name: "REFRAIN", lyrics: "Run the good race, you sons of the Most High\nAnd inherit the crown of life\nFrom our Lord Jesus Christ!" },
            { name: "VERSE", lyrics: "We who are not rich in the world’s goods\nHave been richly provided for\nAnd so have wealth in many good things\nAn abundance rich in joy" },
            { name: "VERSE", lyrics: "The kingdom that we build on earth\nIs not built by earthly means\nBut by the love and laws of Christ\nWho is the King of kings!" },
            { name: "REFRAIN", lyrics: "Fight the good fight of faith, people of God\nUnstained and without reproach\nBefore the eyes of men." },
            { name: "REFRAIN", lyrics: "Run the good race, you sons of the Most High\nAnd inherit the crown of life\nFrom our Lord Jesus Christ!" },          
            { name: "VERSE", lyrics: "For though we live in corrupted flesh\nThat craves its lawless ways\nWe yield to Christ\nAnd the power of His word\nAnd the Spirit of Him who saves." },
            { name: "VERSE", lyrics: "Through tribulation, trial and death\nWe advance in one accord.\nTo know Him, praise Him,\nLove Him, serve Him\nIs our great reward!" },
            { name: "REFRAIN", lyrics: "Fight the good fight of faith, people of God\nUnstained and without reproach\nBefore the eyes of men." },
            { name: "REFRAIN", lyrics: "Run the good race, you sons of the Most High\nAnd inherit the crown of life\nFrom our Lord Jesus Christ!" },
            { name: "VERSE", lyrics: "When the sea turns red\nAnd the mountains into dust\nAnd the stars fall from the sky\nWhen wicked men\nFrom their thrones are cast\nAnd martyrs for vengeance cry" },
            { name: "VERSE", lyrics: "When on the clouds He shall appear\nAnd advance in bright array\nWhat glory then shall eclipse the earth\nAs Christ on judgment day!" },
            { name: "REFRAIN", lyrics: "Fight the good fight of faith, people of God\nUnstained and without reproach\nBefore the eyes of men." },
            { name: "REFRAIN", lyrics: "Run the good race, you sons of the Most High\nAnd inherit the crown of life\nFrom our Lord Jesus Christ!" },
            { name: "END", lyrics: "And inherit the crown of life\nFrom our Lord Jesus Christ!" }
        ]
    },
    {
        title: "Firm Foundation",
        sections: [
            { name: "CHORUS", lyrics: "Jesus You’re my firm foundation\nI know I can stand secure\nJesus You’re my firm foundation\nI put my hope in Your holy Word\nI put my hope in Your holy Word\n(2x)" },
            { name: "VERSE", lyrics: "(Men) I have a living hope\n(Women) I have a living hope\n(Men) I have a future\n(Women) I have a future\n(Men) God has a plan for me\n(Women) God has a plan for me\n(All) Of this I’m sure, of this I’m sure" },
            { name: "CHORUS", lyrics: "Jesus You’re my firm foundation\nI know I can stand secure\nJesus You’re my firm foundation\nI put my hope in Your holy Word\nI put my hope in Your holy Word" },
            { name: "VERSE", lyrics: "(Men) Your Word is faithful\n(Women) Your Word is faithful\n(Men) Mighty with power\n(Women) Mighty with power\n(Men) God will deliver me\n(Women) God will deliver me\n(All) Of this I’m sure, of this I’m sure" },
            { name: "CHORUS", lyrics: "Jesus You’re my firm foundation\nI know I can stand secure\nJesus You’re my firm foundation\nI put my hope in Your holy Word\nI put my hope in Your holy Word\n(2x)" },
            { name: "CHORUS", lyrics: "Jesus You’re my firm foundation\nI know I can stand secure\nJesus You’re my firm foundation\nI put my hope in Your holy Word\nI put my hope in Your holy Word\nI put my hope in Your holy Word" },
            { name: "END", lyrics: "(Women) You're my firm foundation\n(Men) You're the rock of my salvation\n(All) You're my firm foundation" }
        ]
    },
    {
        title: "For Such A Time As This",
        sections: [
            { name: "REFRAIN", lyrics: "(Women) For such a time as this\n(Men) We are called to give our all\n(Women) For such a time as this\n(Men) Let us leave all else behind" },
            { name: "REFRAIN", lyrics: "(All) To follow Christ, to spread His light\nTo do not our will but His\nWe were born to live\nFor such a time as this." },
            { name: "VERSE", lyrics: "Behold a new day is dawning\nA new time now is at hand\nBut still the call of our God\nRings out in our land." },
            { name: "VERSE", lyrics: "And now our race is beginning\nAnd by God’s grace may we run\nThe course which He sets before us\nIn Jesus His Son." },
            { name: "VERSE", lyrics: "(Men)  If not now, when?\nIf not us, who?\nWhom is He equipping to stand?" },
            { name: "VERSE", lyrics: "(Women) If not here, where?\nIf not we, who?\nWho will run our race till the end?" },
            { name: "REFRAIN", lyrics: "(Women) For such a time as this\n(Men) We are called to give our all\n(Women) For such a time as this\n(Men) Let us leave all else behind" },
            { name: "REFRAIN", lyrics: "(All) To follow Christ, to spread His light\nTo do not our will but His\nWe were born to live\nFor such a time as this." },
            { name: "VERSE", lyrics: "Behold a new day is dawning\nA new time now is at hand\nBut still the call of our God\nRings out in our land." },
            { name: "VERSE", lyrics: "And now our race is beginning\nAnd by God’s grace may we run\nThe course which He sets before us\nIn Jesus His Son." },
            { name: "VERSE", lyrics: "(Men)  If not now, when?\nIf not us, who?\nWhom is He equipping to stand?" },
            { name: "VERSE", lyrics: "(Women) If not here, where?\nIf not we, who?\nWho will run our race till the end?" },
            { name: "REFRAIN", lyrics: "(Women) For such a time as this\n(Men) We are called to give our all\n(Women) For such a time as this\n(Men) Let us leave all else behind" },
            { name: "REFRAIN", lyrics: "(All) To follow Christ, to spread His light\nTo do not our will but His\nWe were born to live\nFor such a time as this." },
            { name: "END", lyrics: "We were born to live\nFor such a time as this." }

        ]
    },
    {
        title: "For The Lord He Reigns",
        sections: [
            { name: "VERSE", lyrics: "God of all ages the Mighty\nWhom heaven and earth adore\nAll of your creatures acclaim you\nAs the Maker of all\nAs the Giver of life\nAs the Sovereign and only God" },
            { name: "VERSE", lyrics: "Lord of all nations our Father\nTo whom every knee must bend\nLet all the peoples confess you\nAs their Shepherd and King\nAs their Master and Lord\nAs the Ruler of all the world" },
            { name: "CHORUS", lyrics: "For the Lord he reigns over all the earth\nAnd his name is great to the highest heaven\nAnd the firm earth shakes\nAnd the waves lie still\nAnd the hard heart breaks to his sovereign will\nFor the Lord he reigns—Amen\nFor the Lord he reigns—Amen" },
            { name: "VERSE", lyrics: "Jesus Redeemer our Savior\nWho purchased us by your blood\nAll of your people acclaim you\nAs the light of the world\nAs the hope of our soul\nAs the king who will come again" },
            { name: "CHORUS", lyrics: "For the Lord he reigns over all the earth\nAnd his name is great to the highest heaven\nAnd the firm earth shakes\nAnd the waves lie still\nAnd the hard heart breaks to his sovereign will\nFor the Lord he reigns—Amen\nFor the Lord he reigns—Amen" },
            { name: "BRIDGE", lyrics: "(Men) For the Lord he reigns! Amen!\n(Women) He reigns in the highest!\n(Men) For the Lord he reigns! Amen!\n(Women) He reigns in the earth!" },
            { name: "BRIDGE", lyrics: "(Men) For the Lord he reigns! Amen!\n(Women) He reigns in the nations!\n(Men) For the Lord he reigns! Amen!\n(Women) He reigns in his Church!" },
            { name: "CHORUS", lyrics: "For the Lord he reigns over all the earth\nAnd his name is great to the highest heaven\nAnd the firm earth shakes\nAnd the waves lie still\nAnd the hard heart breaks to his sovereign will\n(2x)" },
            { name: "END", lyrics: "For the Lord he reigns—Amen (2x)\nFor the Lord he reigns\nHe reigns—Amen" }
        ]
    },
    {
        title: "From Heavens Light",
        sections: [
            { name: "VERSE", lyrics: "From heaven’s light a voice within cries,\n‘further up, come further in!’\nBehold the One in glory, ruling in power,\nseated upon his throne." },
            { name: "VERSE", lyrics: "So bow as mighty Cherubim\njoin ceaseless voice with Seraphim,\nSurrounded by the heavenly throng\nnow lift your voice in heaven’s song!" },
            { name: "CHORUS", lyrics: "Holy, Holy, Holy Lord, God almighty\nYou who were, who are, who will be!\nWorthy, worthy of glory, honor and majesty\nFor all things – have their being in you\nwho sit on the throne." },
            { name: "VERSE", lyrics: "And from the throne a mighty voice,\nas angels bow and saints rejoice,\nAs thunder rolls and lightnings flash\nbefore the shining sea of glass." },
            { name: "VERSE", lyrics: "The worship turns, the censor fills,\nwith prayers of saints as heaven stills,\nFor now has come the reign of God\no’er every race, nation and tongue!" },
            { name: "CHORUS", lyrics: "Holy, Holy, Holy Lord, God almighty\nYou who were, who are, who will be!\nWorthy, worthy of glory, honor and majesty\nFor all things – have their being in you" },
            { name: "END", lyrics: "You are Holy, Holy, Holy Lord, God almighty\nYou who were, who are, who will be!\nWorthy, worthy of glory, honor and majesty\nFor all things – have their being in you\nwho sit on the throne." }
        ]
    },
    {
        title: "Given A Chance",
        sections: [
            { name: "VERSE", lyrics: "In every heart a question forms:\nWhat should I do with this life?\nYes, we were made to know the answer,\nThose who seek will find." },
            { name: "VERSE", lyrics: "What can I do and\nWhat’s most important for me, for me?\nIf one single path led me on,\nHow simple life would be!" },
            { name: "REFRAIN", lyrics: "We’re given a chance to love Him,\nGiven a chance to stand for the truth.\nWe’re given a chance to live for Him,\nGiven a chance to walk in His strength." },
            { name: "REFRAIN", lyrics: "We’re given a chance\nTo love one another\nTo serve our Master and Brother\nWho died for us and sets us free!" },
            { name: "VERSE", lyrics: "How can we speak the truth to others\nWhen no one who listens is found?\nGod hears our words\nAnd he honors them all\nNone of them fall to the ground." },
            { name: "VERSE", lyrics: "We’ll tell all our friends\nSo their lives never end\nLet them hear, let them see.\nWe’ll stand for what’s right\nThough it costs us our lives,\nAnd not fear: We are free!" },
            { name: "REFRAIN", lyrics: "We’re given a chance to love Him,\nGiven a chance to stand for the truth.\nWe’re given a chance to live for Him,\nGiven a chance to walk in His strength." },
            { name: "REFRAIN", lyrics: "We’re given a chance\nTo love one another\nTo serve our Master and Brother\nWho died for us and sets us free!" },
            { name: "BRIDGE", lyrics: "Death behind and fear aside,\nWe stand ready to go.\nOur victory won, we’ve only begun\nTo run the race for the prize." },
            { name: "REFRAIN", lyrics: "We’re given a chance to love Him,\nGiven a chance to stand for the truth.\nWe’re given a chance to live for Him,\nGiven a chance to walk in His strength." },
            { name: "END", lyrics: "We’re given a chance\nTo love one another\nTo serve our Master and Brother\nWho died for us and sets us free!\nWho died for us and sets us free!" }
        ]
    },
    {
        title: "Your Glorious Grace",
        sections: [
            { name: "VERSE", lyrics: "We kneel before you Father\nFrom whom your sons and daughters have their name\nWe have your name\nFor from the world's foundation\nYou chose us to be blameless in your sight" },
            { name: "VERSE", lyrics: "And in your love you destined us\nTo be your own true children\nThat we might live to praise your glorious grace" },
            { name: "CHORUS", lyrics: "Then Father make us one\nFather make us one\nThat all might live to praise your glorious grace\n(2x)" },
            { name: "VERSE", lyrics: "You lavished love upon us\nYou sent us your beloved only Son\nYour only Son\nIn him we have redemption\nForgiveness of transgressions by his blood\nBy his blood" },
            { name: "VERSE", lyrics: "And you made known the mystery\nOf your great will and pleasure\nTo bring all things together under him" },
            { name: "CHORUS", lyrics: "Then Father make us one\nFather make us one\nThat all might live to praise your glorious grace" },
            { name: "END", lyrics: "Then Father make us one\nFather make us one\nThat all might live to praise your glorious grace\nThat all might live to praise your glorious grace" }
        ]
    },
    {
        title: "God Alone",
        sections: [
            { name: "VERSE", lyrics: "God alone, God alone\nIn Your courts O my Lord, is my home.\nYou are my treasure, my portion,\nDelight of my soul." },
            { name: "VERSE", lyrics: "My life, my salvation, my fortress,\nMy God and my all.\nO my soul, claim nothing as your own,\nFor you, there is God and God alone!" },
            { name: "VERSE", lyrics: "God alone, God alone\nIn Your courts O my Lord, is my home.\nYou are my treasure, my portion,\nDelight of my soul." },
            { name: "VERSE", lyrics: "My life, my salvation, my fortress,\nMy God and my all.\nO my soul, claim nothing as your own,\nFor you, there is God and God alone!" },
            { name: "VERSE", lyrics: "God alone, God alone\nIn Your courts O my Lord, is my home.\nYou are my treasure, my portion,\nDelight of my soul." },
            { name: "END", lyrics: "My life, my salvation, my fortress,\nMy God and my all.\nO my soul, claim nothing as your own,\nFor you, there is God and God alone!\nFor you, there is God and God alone!" }
        ]
    },
    {
        title: "God Is My Refuge",
        sections: [
            { name: "VERSE", lyrics: "God is my refuge,\nmy trust and my deliverer.\nA help close at hand in times of distress."},
            { name: "VERSE", lyrics: "So I will lift my eyes unto the mountains,\nFrom whence comes my help?\nFrom the Lord, enthroned on high;\nHe is my rock and my salvation, I’ll stand firm." },
            { name: "VERSE", lyrics: "God is my refuge,\nmy trust and my deliverer.\nA help close at hand in times of distress." },
            { name: "VERSE", lyrics: "So I will lift my eyes unto the mountains,\nFrom whence comes my help?\nFrom the Lord, enthroned on high;\nHe is my rock and my salvation, I’ll stand firm.\n(2x)" }
        ]
    },
    {
        title: "God With Us",
        sections: [
            { name: "VERSE", lyrics: "He walked where I walked (echo)\nHe stood where I stand (echo)\nHe felt what I feel (echo)\nHe understands (echo)" },
            { name: "VERSE", lyrics: "He knows my frailties (echo)\nShared my humanity (echo)\nTempted in every way (echo)\nYet did not sin. (echo)" },
            { name: "REFRAIN", lyrics: "God with us, so close to us\nGod with us, Emmanuel. (2x)\n Emmanuel!" },
            { name: "VERSE", lyrics: "One of the hated race (echo)\nStung by the prejudice (echo)\nSuffering injustice (echo)\nYet He forgives. (echo)" },
            { name: "VERSE", lyrics: "Wept for my wasted years (echo)\nPaid for my wickedness (echo)\nHe died in my place (echo)\nThat I might live. (echo)" },
            { name: "END", lyrics: "God with us, so close to us\nGod with us, Emmanuel. (4x)\n Emmanuel! (3x)" }
        ]
    },
    {
        title: "Great And Marvelous",
        sections: [
            { name: "VERSE", lyrics: "Great and marvelous are all Your deeds\nO Lord our God Almighty.\nJust and true are all Your ways\nYou are King throughout all ages\nThroughout all ages!" },
            { name: "REFRAIN", lyrics: "We, Your people, now proclaim You\nAnd sing Your glorious praise:\n(Women) Blessing and honor,\nGlory and power\n(Men) Blessing, honor, glory, power\n(All) Be to our God forever." },
            { name: "REFRAIN", lyrics: "(Women) Blessing and honor,\nGlory and power\n(Men) Blessing, honor, glory, power\n(All) Be to our God forever.  Amen!" },
            { name: "VERSE", lyrics: "Who will not fear You, O Lord,\nAnd bring glory to Your name?\nYou are holy!\nAll the nations will bow down\nAnd worship at Your throne,\nYour glorious throne!" },
            { name: "REFRAIN", lyrics: "We, Your people, now proclaim You\nAnd sing Your glorious praise:\n(Women) Blessing and honor,\nGlory and power\n(Men) Blessing, honor, glory, power\n(All) Be to our God forever." },
            { name: "REFRAIN", lyrics: "(Women) Blessing and honor,\nGlory and power\n(Men) Blessing, honor, glory, power\n(All) Be to our God forever.\n(2x)\nAmen!" },
        ]
    },
    {
        title: "He Has Covered Himself In Glory",
        sections: [
            { name: "REFRAIN", lyrics: "Let us sing to the Lord!\nHe has covered Himself in glory!\nLet us sing to the Lord!\nHe has covered Himself in praise!\n(2X)" },
            { name: "VERSE", lyrics: "I will sing to the Lord\nHe is gloriously triumphant\nRider, horse and chariot\nHas He hurled into the sea!" },
            { name: "VERSE", lyrics: "My strength and my courage\nIs the Lord, my Savior.\nHe is my God and the God\nOf my fathers – I exalt Him!" },
            { name: "REFRAIN", lyrics: "Let us sing to the Lord!\nHe has covered Himself in glory!\nLet us sing to the Lord!\nHe has covered Himself in praise!" },
            { name: "VERSE", lyrics: "A man of war is the Lord\nAnd Lord is His name.\nThe might of Pharaoh’s chariots\nHas sunk to the depths like a stone!" },
            { name: "VERSE", lyrics: "By Your right hand, O Lord,\nMagnificent in power,\nBy Your right hand, O Lord,\nThe strength of our enemies\nIs shattered!" },
            { name: "REFRAIN", lyrics: "Let us sing to the Lord!\nHe has covered Himself in glory!\nLet us sing to the Lord!\nHe has covered Himself in praise!" },
            { name: "VERSE", lyrics: "The people You chose\nYou redeemed, and planted them on\nYour holy mountain.\nThe place where You made Your seat,\nThe dwelling place of our God!" },
            { name: "VERSE", lyrics: "From His sanctuary,\nEstablished by His hand,\nSeated in glory, the Lord shall reign\nForever and ever!" },
            { name: "REFRAIN", lyrics: "Let us sing to the Lord!\nHe has covered Himself in glory!\nLet us sing to the Lord!\nHe has covered Himself in praise!\n(2X)" },
            { name: "END", lyrics: "He has covered Himself in glory!\nHe has covered Himself in praise!" }
        ]
    },
    {
        title: "He Is Before All Things",
        sections: [
            { name: "VERSE", lyrics: "He is the image of the invisible God,\nFirst-born of all creation.\nIn Him all was made,\nThe heavens and earth,\nAll things created through Him." },
            { name: "REFRAIN", lyrics: "He is before all things,\nAnd in Him all things hold together.\nIn Him the fullness of God\nWas pleased to dwell.\nHe is the glory of God,\nBearing the stamp of His nature,\nUpholding the universe by His word." },
            { name: "VERSE", lyrics: "And through His being\nAll things are made one\nAll that was once divided\nHeaven and earth united to Him\nPeace by the blood of His cross." },
            { name: "END", lyrics: "He is before all things\nAnd in Him all things hold together.\nIn Him the fullness of God\nWas pleased to dwell.\nHe is the glory of God,\nBearing the stamp of His nature,\nUpholding the universe by His word.\n(2x)" }
        ]
    },
    {
        title: "He Is Exalted",
        sections: [
            { name: "VERSE", lyrics: "He is exalted\nThe King is exalted on high,\nI will praise Him!\nHe is exalted, forever exalted\nAnd I will praise His name!" },
            { name: "REFRAIN", lyrics: "He is the Lord,\nForever His truth shall reign.\nHeaven and earth\nRejoice in His holy name.\nHe is exalted,\nThe King is exalted on high." },
            { name: "VERSE", lyrics: "He is exalted\nThe King is exalted on high,\nI will praise Him!\nHe is exalted, forever exalted\nAnd I will praise His name!" },
            { name: "REFRAIN", lyrics: "He is the Lord,\nForever His truth shall reign.\nHeaven and earth\nRejoice in His holy name.\nHe is exalted,\nThe King is exalted on high.\n(2x)" },
            { name: "END", lyrics: "He is exalted,\nThe King is exalted on high." }
        ]
    },
    {
        title: "Heaven Is My Home",
        sections: [
            { name: "VERSE", lyrics: "Heaven is my home,\nI am Kingdom-bound.\nI am not my own, for once I was lost\nBut in Christ I am found." },
            { name: "VERSE", lyrics: "All my treasure on high safely set apart\nFor in heaven I find\nThe fount of my joy,\nThe source of my life,\nThe first love of my heart." },
            { name: "VERSE", lyrics: "Heaven is my home,\nI am Kingdom-bound.\nI am not my own, for once I was lost\nBut in Christ I am found." },
            { name: "END", lyrics: "All my treasure on high safely set apart\nFor in heaven I find\nThe fount of my joy,\nThe source of my life,\nThe first love of my heart.\n(2x)" }
        ]
    },
    {
        title: "Here Is My Life",
        sections: [
            { name: "VERSE", lyrics: "Behold, the eyes of the Lord\nSearch the face of the earth\nTo find hearts that are given,\nSeeking souls to make pure." },
            { name: "VERSE", lyrics: "To enflame this world’s darkness,\nTo warm cold hearts with grace.\nAm I here, Lord, for such a time,\nFor such a place?" },
            { name: "REFRAIN", lyrics: "Here is my life, Lord,\nHeart, mind and body.\nMy soul’s surrender, take it for your own.\nAnd You will lead, I know,\nWhere only love can go.\nHere is my life, O Lord, my life for You." },
            { name: "VERSE", lyrics: "There is a love stronger than death,\nPassion deeper than this life.\nIn the heart’s purest longing,\nLies the pearl of great price." },
            { name: "VERSE", lyrics: "One Love all loves surpassing,\nTrue surrender the cost.\nAm I here, Lord, to bear this love\nAnd share its cross?" },
            { name: "REFRAIN", lyrics: "Here is my life, Lord,\nHeart, mind and body.\nMy soul’s surrender, take it for your own.\nAnd You will lead, I know,\nWhere only love can go.\nHere is my life, O Lord …" },
            { name: "END", lyrics: "Here is my life, Lord,\nHeart, mind and body.\nMy soul’s surrender, take it for your own.\nAnd You will lead, I know,\nWhere only love can go.\nHere is my life, O Lord, my life for You." }
        ]
    },
    {
        title: "Hinei mah Tov",
        sections: [
            { name: "VERSE", lyrics: "Hinei mah tov umah naim,\nShevet achim gam yachad. (2x)" },
            { name: "VERSE", lyrics: "Hinei mah tov, Hinei mah tov,\nLai lai lai lai lai lai lai lai lai lai … (2x)" },
            { name: "VERSE", lyrics: "Behold how good and pleasant it is\nFor brothers to dwell together. (2x)" },
            { name: "VERSE", lyrics: "In unity, in unity,\nLai lai lai lai lai lai lai lai lai lai … (2x)" },
            { name: "VERSE", lyrics: "Hinei mah tov umah naim,\nShevet achim gam yachad. (2x)" },
            { name: "VERSE", lyrics: "Hinei mah tov, Hinei mah tov,\nLai lai lai lai lai lai lai lai lai lai … (2x)" },
            { name: "VERSE", lyrics: "Lai lai lai lai lai lai lai lai lai lai … (2x)" },
            { name: "VERSE", lyrics: "Behold how good and pleasant it is\nFor brothers to dwell together. (2x)" },
            { name: "VERSE", lyrics: "In unity, in unity,\nLai lai lai lai lai lai lai lai lai lai … (2x)" },
            { name: "VERSE", lyrics: "Behold how good and pleasant it is\nFor brothers to dwell together. (2x)" },
            { name: "VERSE", lyrics: "In unity, in unity,\nLai lai lai lai lai lai lai lai lai lai … (2x)" },
            { name: "END", lyrics: "Lai lai lai lai lai lai lai lai lai lai … (2x)" }

        ]
    },
    {
        title: "Holy Is The One Who Saves",
        sections: [
            { name: "VERSE", lyrics: "Calling out to the heavens,\nWe will rise and lift up a battle cry\nSee the one who is leading\nWe stand and make ready\nOur shields and our swords to fight." },
            { name: "REFRAIN", lyrics: "Holy is the One who saves\nMighty is our God\nWhose power we proclaim\nFighting for the glory of His name\nIn His truth is our victory,\nOur purpose and our way." },
            { name: "REFRAIN", lyrics: "A mighty fortress stands before us.\nBehold our shield!\nLook upon the face of the Anointed One.\nOur Lord, King and Conqueror, leads us on!" },
            { name: "VERSE", lyrics: "He, our strength and our portion,\nLifted high over the enemies.\nStrong, we stand with each other,\nBoth sister and brother,\nGiving Him thanks and praise." },
            { name: "REFRAIN", lyrics: "Holy is the One who saves,\nMighty is our God\nWhose power we proclaim\nFighting for the glory of His name\nIn His truth is our victory,\nOur purpose and our way." },
            { name: "REFRAIN", lyrics: "A mighty fortress stands before us.\nBehold our shield!\nLook upon the face of the Anointed One.\nOur Lord, King and Conqueror, leads us on!" },
            { name: "REFRAIN", lyrics: "Holy is the One who saves,\nMighty is our God\nWhose power we proclaim\nFighting for the glory of His name\nIn His truth is our victory,\nOur purpose and our way." },
            { name: "REFRAIN", lyrics: "A mighty fortress stands before us.\nBehold our shield!\nLook upon the face of the Anointed One.\nOur Lord, King and Conqueror, leads us on!" },
            { name: "END", lyrics: "King and Conqueror, leads us on!" }
        ]
    },
    {
        title: "Holy Mighty Everlasting",
        sections: [
            { name: "REFRAIN", lyrics: "Holy, mighty, everlasting King\nAnd Lord of all.\nHoly, mighty, everlasting King\nAnd Sovereign God!" },
            { name: "VERSE", lyrics: "Great is Your name\nAnd glorious Your deeds\nFearful are your wonders!\nMighty to save\nJudge of the earth\nRuler of the nations!" },
            { name: "REFRAIN", lyrics: "Holy, mighty, everlasting King\nAnd Lord of all.\nHoly, mighty, everlasting King\nAnd Sovereign God!" },
            { name: "VERSE", lyrics: "Bring forth your praise\nYou heavenly host\nWorship Him, rejoicing!\nPrinces and kings\nFall at His throne\nMagnify His splendor!" },
            { name: "REFRAIN", lyrics: "Holy, mighty, everlasting King\nAnd Lord of all.\nHoly, mighty, everlasting King\nAnd Sovereign God!" },
            { name: "VERSE", lyrics: "Haste to His courts\nYou saints of our God\nServe Him with great gladness!\nLift up your voice\nHonor His name\nBless the Lord of glory!" },
            { name: "REFRAIN", lyrics: "Holy, mighty, everlasting King\nAnd Lord of all.\nHoly, mighty, everlasting King\nAnd Sovereign God!" },
            { name: "END", lyrics: "Holy, mighty, everlasting King,\nLord of all, Sovereign God!" }
        ]
    },
    {
        title: "Holy O Holy",
        sections: [
            { name: "VERSE", lyrics: "Holy, O holy, Lord God Almighty!\nWorthy, O worthy\nGlorious Prince of peace!" },
            { name: "VERSE", lyrics: "We bring our lives to You,\nA sacrifice to You, we stand in awe\nBefore Your holy name." },
            { name: "REFRAIN", lyrics: "All glory and honor and praise\nBe to the Ancient of days.\nWe praise You, we worship You,\nOur Lord and our King!\nOn high!" },
            { name: "VERSE", lyrics: "Holy, O holy, Lord God Almighty!\nWorthy, O worthy\nGlorious Prince of peace!" },
            { name: "VERSE", lyrics: "We bring our lives to You,\nA sacrifice to You, we stand in awe\nBefore Your holy name." },
            { name: "END", lyrics: "All glory and honor and praise\nBe to the Ancient of days.\nWe praise You, we worship You,\nOur Lord and our King!\n(2x)\nOn high!" }
        ]
    },
    {
        title: "How Great Is Your Love",
        sections: [
            { name: "VERSE", lyrics: "No eye has seen and no ear has heard\nAnd no mind has ever conceived\nThe glorious things\nThat You have prepared" },
            { name: "VERSE", lyrics: "For everyone who has believed.\nYou brought us near\nAnd You called us Your own\nAnd made us joint heirs with Your Son." },
            { name: "CHORUS", lyrics: "How high and how wide\nHow deep and how long\nHow sweet and how strong is Your love!\nHow lavish Your grace\nHow faithful Your ways\nHow great is Your love, O Lord!" },
            { name: "VERSE", lyrics: "Objects of mercy\nWho should have known wrath\nWe’re filled with unspeakable joy.\nRiches of wisdom\nUnsearchable wealth" },
            { name: "VERSE", lyrics: "And the wonder of knowing Your voice.\nYou are our treasure\nAnd our great reward\nOur hope and our glorious King!" },
            { name: "END", lyrics: "How high and how wide\nHow deep and how long\nHow sweet and how strong is Your love!\nHow lavish Your grace\nHow faithful Your ways\nHow great is Your love, O Lord!" }
        ]
    },
    {
        title: "I Bow My Knee",
        sections: [
            { name: "VERSE", lyrics: "I bow my knee before Your throne.\nI know my life is not my own.\nI offer up a song of praise\nTo bring You pleasure, Lord." },
            { name: "VERSE", lyrics: "I seek the Giver, not the gift.\nMy heart’s desire is to lift You\nHigh above all earthly kings\nTo bring You pleasure, Lord." },
            { name: "REFRAIN", lyrics: "Hallelujah!  Hallelujah!\nHallelujah!  Glory to the King!\n(2x)" },
            { name: "VERSE", lyrics: "I bow my knee before Your throne.\nI know my life is not my own.\nI offer up a song of praise\nTo bring You pleasure, Lord." },
            { name: "END", lyrics: "Hallelujah!  Hallelujah!\nHallelujah!  Glory to the King!\n(2x)\nHallelujah!  Glory to the King!" }
        ]
    },
    {
        title: "I Delight In Your Will",
        sections: [
            { name: "VERSE", lyrics: "Patiently I sought the Lord;\nHe has heard my cry,\nAnd He has drawn me up\nAnd made my steps secure\n(2x)" },
            { name: "VERSE", lyrics: "And I said, “Behold I come\nIn the steps of my Savior before me.\nBehold I come to you!”" },
            { name: "CHORUS", lyrics: "I delight in your will, O my God;\nAnd your law is within my heart.\nAnd I come to serve your Word." },
            { name: "CHORUS", lyrics: "And I will speak of your steadfast love\nAnd I’ll tell of your faithfulness.\nYes, I come to do your will,\nFor you have set me free." },
            { name: "VERSE", lyrics: "Sacrifice and offering\nYou do not desire\nBut you have given me\nAn open ear, Oh Lord.\n(2x)" },
            { name: "VERSE", lyrics: "And I said, “Behold I come\nIn the steps of my Savior before me.\nBehold I come to you!”" },
            { name: "CHORUS", lyrics: "I delight in your will, O my God;\nAnd your law is within my heart.\nAnd I come to serve your Word." },
            { name: "CHORUS", lyrics: "And I will speak of your steadfast love\nAnd I’ll tell of your faithfulness.\nYes, I come to do your will,\nFor you have set me free." },
            { name: "VERSE", lyrics: "Great is the Lord! Great is the Lord!\nLet all who love him say it:\nGreat is the Lord!\n(2x)" },
            { name: "CHORUS", lyrics: "I delight in your will, O my God;\nAnd your law is within my heart.\nAnd I come to serve your Word." },
            { name: "END", lyrics: "And I will speak of your steadfast love\nAnd I’ll tell of your faithfulness.\nYes, I come to do your will,\nFor you have set me free." }
        ]
    },
    {
        title: "I Give You My Heart",
        sections: [
            { name: "VERSE", lyrics: "This is my desire: to honor You.\nLord, with all my heart I worship You.\nAll I have within me, I give You praise.\nAll that I adore is in You." },
            { name: "CHORUS", lyrics: "Lord, I give You my heart,\nI give You my soul,\nI live for You alone." },
            { name: "CHORUS", lyrics: "Every breath that I take,\nEvery moment I’m awake,\nLord, have Your way in me." },
            { name: "VERSE", lyrics: "This is my desire: to honor You.\nLord, with all my heart I worship You.\nAll I have within me, I give You praise.\nAll that I adore is in You." },
            { name: "CHORUS", lyrics: "Lord, I give You my heart,\nI give You my soul,\nI live for You alone." },
            { name: "END", lyrics: "Every breath that I take,\nEvery moment I’m awake,\nLord, have Your way in me." }
        ]
    },
    {
        title: "I Will Awake the Dawn",
        sections: [
            { name: "VERSE", lyrics: "Awake, O harp and lyre, \nAwake the morning,\nFirst light of day descends to lift my soul.\nYour presence greets me,\nStirs me to seek Thee,\nI come to do Your will." },
            { name: "REFRAIN", lyrics: "Open my lips, O Lord,\nMy mouth will sing Your praise,\nOpen my eyes to see Your hand this day." },
            { name: "REFRAIN", lyrics: "My heart is steadfast, \nFor Lord, Your love is steadfast,\nI will awake the dawn!" },
            { name: "VERSE", lyrics: "In You my soul takes refuge;\nYour wings protect me.\nYou come from heaven and You rout my foes.\nI cry to You, Lord;\nI am delivered, \nI praise Your faithfulness!" },
            { name: "REFRAIN", lyrics: "Open my lips, O Lord,\nMy mouth will sing Your praise,\nOpen my eyes to see Your hand this day." },
            { name: "REFRAIN", lyrics: "My heart is steadfast, \nFor Lord, Your love is steadfast,\nI will awake the dawn!" },
            { name: "VERSE", lyrics: "I will give thanks to You, Lord,\nAmong the peoples.\nAmong the nations I’ll sing praise to You.\nO, be exalted;\nHighly exalted, \nYour glory to the skies!" },
            { name: "REFRAIN", lyrics: "Open my lips, O Lord,\nMy mouth will sing Your praise,\nOpen my eyes to see Your hand this day." },
            { name: "REFRAIN", lyrics: "My heart is steadfast, \nFor Lord, Your love is steadfast,\nI will awake the dawn!" },
            { name: "REFRAIN", lyrics: "Open my lips, O Lord,\nMy mouth will sing Your praise,\nOpen my eyes to see Your hand this day." },
            { name: "END", lyrics: "My heart is steadfast, \nFor Lord, Your love is steadfast,\nI will awake the dawn!" }
        ]
    },
    {
        title: "I Will Give Thanks",
        sections: [
            { name: "VERSE", lyrics: "I will give thanks\nI will give thanks to the Lord\nI will give thanks to the Lord with my whole heart\n(2x)" },
            { name: "CHORUS", lyrics: "And I will tell All your wonderful deeds.\nI will be glad and exult in you.\nI will sing praise to your name, O Most High.\nI will give thanks to the Lord \nwith my whole heart" },
            { name: "VERSE", lyrics: "I will give thanks\nI will give thanks to the Lord\nI will give thanks to the Lord with my whole heart\n(2x)" },
            { name: "CHORUS", lyrics: "And I will tell All your wonderful deeds.\nI will be glad and exult in you.\nI will sing praise to your name, O Most High.\nI will give thanks to the Lord \nwith my whole heart" },
            { name: "END", lyrics: "I will give thanks\nI will give thanks to the Lord\nI will give thanks to the Lord with my whole heart\n(2x)\nI will give thanks to the Lord with my whole heart" }
        ]
    },
    {
        title: "Isaiah 60",
        sections: [
            { name: "REFRAIN", lyrics: "Arise, shine out, for your light has come\nThe glory of Yahweh is rising on you.\nThough night still covers the earth\nAnd darkness the people,\nAbove you Yahweh now rises,\nAbove you His glory appears, arise!" },
            { name: "VERSE", lyrics: "The nations come to your light\nAnd kings to your dawning brightness\nSinging the praise of Yahweh,\nBringing gold and incense." },
            { name: "VERSE", lyrics: "Lift up your eyes and look around you:\nAll are assembling\nAnd coming tow’rd you.\nYour sons from far away\nAnd your daughters being\nTenderly carried this day." },
            { name: "REFRAIN", lyrics: "Arise, shine out, for your light has come\nThe glory of Yahweh is rising on you.\nThough night still covers the earth\nAnd darkness the people,\nAbove you Yahweh now rises,\nAbove you His glory appears, arise!" },
            { name: "VERSE", lyrics: "They bring your sons from far away\nAnd their silver and gold with them\nFor the name of Yahweh, Your God,\nThe Holy One of Israel.”" },
            { name: "VERSE", lyrics: "No more shall violence\nBe heard in your country\nNor devastation within your frontiers.\nYou will call your walls “Salvation!”\nAnd your gates “Praise!”" },
            { name: "REFRAIN", lyrics: "Arise, shine out, for your light has come\nThe glory of Yahweh is rising on you.\nThough night still covers the earth\nAnd darkness the people,\nAbove you Yahweh now rises,\nAbove you His glory appears, arise!" },
            { name: "VERSE", lyrics: "No more will the sun give you daylight\nNor moonlight shine on you\nBut Yahweh will be your eternal light\nYour God will be your splendor." },
            { name: "VERSE", lyrics: "Your sun will set no more\nNor your moon wane.\nBut Yahweh will be your eternal light\nAnd your days of mourning\nWill pass from your sight." },
            { name: "END", lyrics: "Arise, shine out, for your light has come\nThe glory of Yahweh is rising on you.\nThough night still covers the earth\nAnd darkness the people,\nAbove you Yahweh now rises,\nAbove you His glory appears, arise!\n(2x)" }
        ]
    },
    {
        title: "Join With Us",
        sections: [
            { name: "VERSE", lyrics: "Join with us\nAnd let us go to His dwelling place\nBeyond the veil where we see His face\nWhere we are lifted in holy praise." },
            { name: "VERSE", lyrics: "We worship Him.\nBehold such beauty and worship Him.\nThe gates of heaven resound within\nFor we were made for\nThis glorious grace." },
            { name: "REFRAIN", lyrics: "Every heart cries “Holy!”\nEvery knee bends low.\nAlways steadfast, ever faithful,\nHow Your love endures!" },
            { name: "REFRAIN", lyrics: "Face to face with glory\nThat no eye has seen:\n“We become like Him\nWhom we behold.”\nBeholding You!" },
            { name: "VERSE", lyrics: "We sing to You, \nOur lives surrendered as offerings,\nOur faith in You as the gift we bring.\nThe veil is lifted before Your throne." },
            { name: "VERSE", lyrics: "We come to You,\nConformed to You in Your lowliness,\nTransformed by You in Your holiness.\nWe rise from glory to glory, Lord!" },
            { name: "REFRAIN", lyrics: "Every heart cries “Holy!”\nEvery knee bends low.\nAlways steadfast, ever faithful,\nHow Your love endures!" },
            { name: "REFRAIN", lyrics: "Face to face with glory\nThat no eye has seen:\n“We become like Him\nWhom we behold.”\nBeholding You!" },
            { name: "END", lyrics: "Every heart cries “Holy!”\nEvery knee bends low.\nAlways steadfast, ever faithful,\nHow Your love endures!" },
            { name: "END", lyrics: "Face to face with glory\nThat no eye has seen:\n“We become like Him\nWhom we behold.”\nBeholding You!" }
        ]
    },
    {
        title: "Lead On O Lord",
        sections: [
            { name: "VERSE", lyrics: "Rise up, O children of God\nMake ready your hands for war.\nThe King now stands before us\nWe join together as loyalists\nTo build His kingdom here on earth\nAnd join in heaven’s chorus." },
            { name: "REFRAIN", lyrics: "Lead on, O Lord,\nUnsheathing our swords.\nWe arm ourselves with Your truth.\nBurn in our hearts, enflame our lives.\nThe battle is now, we’re here to fight." },
            { name: "VERSE", lyrics: "This age it seeks to destroy.\nClouds my mind,\nRobs my heart of Your joy.\nWe pray together for vision.\nOur ears are poised to listen.\nLead us now unto war\nWe accept our mission." },
            { name: "REFRAIN", lyrics: "Lead on, O Lord,\nUnsheathing our swords.\nWe arm ourselves with Your truth.\nBurn in our hearts, enflame our lives.\nThe battle is now, we’re here to fight.\n(2x)" },
            { name: "END", lyrics: "The battle is now, we’re here\nThe battle is now, we’re here\nThe battle is now, we’re here to fight" }
        ]
    },
    {
        title: "Let God Arise",
        sections: [
            { name: "VERSE", lyrics: "Let us rise with our eyes now fixed on Jesus.\nMay we come to know \nhis precious love victorious.\nLet us stand with the shield of faith around us" },
            { name: "VERSE", lyrics: "Let us raise one voice to glorify our maker.\nSo we move forward, \nwith our eyes fixed on him\nwho ransomed the lowly man from sin." },
            { name: "REFRAIN", lyrics: "The clarion calls we will press on towards \nthe one who calls us onwards now into battle\nWith joy we rise \nand we will answer our King's call\nAs we cry \"Holy worthy mighty is our Lord.\"" },
            { name: "VERSE", lyrics: "Marching on our God will go before us.\nMay we follow in the footsteps of our savior.\nIn his great love he died upon a cross." },
            { name: "VERSE", lyrics: "Let us press on without counting the cost.\nSo we move forward, with our eyes above\nOn him who ransomed us in love." },
            { name: "REFRAIN", lyrics: "The clarion calls we will press on towards \nthe one who calls us onwards now into battle\nWith joy we rise \nand we will answer our King's call\nAs we cry \"Holy worthy mighty is our Lord.\"" },
            { name: "VERSE", lyrics: "WOMEN:\nHe is glorious, victorious in pow'r (4x)\n\nMEN:\nLet God arise (3x)" },
            { name: "END", lyrics: "As for me I will press on towards \nthe one who calls us onwards now into battle\nWith joy we rise \nand we will answer our King's call\nAs we cry \"Holy worthy mighty is our Lord.\"" }
        ]
    },
    {
        title: "Let The Fire Fall",
        sections: [
            { name: "VERSE", lyrics: "Holy Spirit, (Holy Spirit)\nCome with Your fire!\n(2x)\n\nHoly Spirit, come with Your fire!\n(2x)" },
            { name: "REFRAIN", lyrics: "Come, Holy Spirit, let the fire fall!\nCome, Holy Spirit, let the fire fall!\nLet the fire fall!  Let the fire fall!" },
            { name: "VERSE", lyrics: "Holy Spirit, (Holy Spirit)\nPurify my heart!\n(2x)\n\nHoly Spirit, purify my heart!\n(2x)" },
            { name: "REFRAIN", lyrics: "Come, Holy Spirit, let the fire fall!\nCome, Holy Spirit, let the fire fall!\nLet the fire fall!  Let the fire fall!" },
            { name: "VERSE", lyrics: "Holy Spirit, (Holy Spirit)\nSet my life on fire!\n(2x)\n\nHoly Spirit, set my life on fire!\n(2x)" },
            { name: "REFRAIN", lyrics: "Come, Holy Spirit, let the fire fall!\nCome, Holy Spirit, let the fire fall!\nLet the fire fall!  Let the fire fall!" },
            { name: "END", lyrics: "Let the fire fall!  Let the fire fall!" }
        ]
    },
    {
        title: "Let The Saints Be Joyful",
        sections: [
            { name: "REFRAIN", lyrics: "Let the saints be joyful in glory,\nLet the high praises of God\nBe in their mouth,\nAnd a two-edged sword\nIn their hand.\n(2x)" },
            { name: "VERSE", lyrics: "Enter His gates with thanksgiving,\nEnter His courts with praise.\nBe thankful to Him, bless His name.\nFor the Lord is good\nAnd His mercy is everlasting\nAnd His truth endureth for all time." },
            { name: "REFRAIN", lyrics: "Let the saints be joyful in glory,\nLet the high praises of God\nBe in their mouth,\nAnd a two-edged sword\nIn their hand.\n(2x)" },
            { name: "VERSE", lyrics: "Enter His gates with thanksgiving,\nEnter His courts with praise.\nBe thankful to Him, bless His name.\nFor the Lord is good\nAnd His mercy is everlasting\nAnd His truth endureth for all time." },
            { name: "REFRAIN", lyrics: "Let the saints be joyful in glory,\nLet the high praises of God\nBe in their mouth,\nAnd a two-edged sword\nIn their hand.\n(2x)" },
            { name: "REFRAIN", lyrics: "And a two-edged sword\nIn their hand.\n(3x)" },
        ]
    },
    {
        title: "Let Us Exalt His Name",
        sections: [
            { name: "VERSE", lyrics: "At all times I will bless Him\nHis praise will be in my mouth\nMy soul makes its boast in the Lord.\nThe humble man will hear of Him\nThe afflicted will be glad\nAnd join with me to magnify the Lord." },
            { name: "REFRAIN", lyrics: "Let us exalt His name together forever.\nI sought the Lord, He heard me\nAnd delivered me from my fears.\nLet us exalt His name together forever.\nO, sing His praises, magnify the Lord." },
            { name: "VERSE", lyrics: "The angel of the Lord encamps\n‘Round those who fear His name\nTo save them\nAnd deliver them from harm.\nThough lions roar with hunger\nWe lack for no good thing.\nNo wonder then we praise Him\nWith our song." },
            { name: "REFRAIN", lyrics: "Let us exalt His name together forever.\nI sought the Lord, He heard me\nAnd delivered me from my fears.\nLet us exalt His name together forever.\nO, sing His praises, magnify the Lord." },
            { name: "VERSE", lyrics: "Come, children, now and hear me\nIf you would see long life\nJust keep your lips\nFrom wickedness and lies.\nDo good and turn from evil\nSeek peace instead of strife\nLove righteousness\nAnd God will hear your cry." },
            { name: "END", lyrics: "Let us exalt His name together forever.\nI sought the Lord, He heard me\nAnd delivered me from my fears.\nLet us exalt His name together forever.\nO, sing His praises, magnify the Lord.\n(2x)\n\nO, sing His praises, magnify the Lord." }
        ]
    },
    {
        title: "Let Your Glory Fall",
        sections: [
            { name: "VERSE", lyrics: "Father of creation, \nUnfold Your sovereign plan.\nRaise up a chosen generation\nThat will march through the land." },
            { name: "VERSE", lyrics: "All creation is longing\nFor Your unveiling of pow’r\nWould You release Your anointing?\nO God, let this be the hour!" },
            { name: "REFRAIN", lyrics: "Let Your glory fall on this room.\nLet it go forth from here to the nations.\nLet Your fragrance rest in this place\nAs we gather to seek Your face." },
            { name: "VERSE", lyrics: "Ruler of nations,\nThe world has yet to see\nThe full release of Your promise,\nThe Church in victory." },
            { name: "VERSE", lyrics: "Turn to us, Lord, and touch us.\nMake us strong in Your might.\nOvercome our weakness,\nThat we could stand up and fight." },
            { name: "REFRAIN", lyrics: "Let Your glory fall on this room.\nLet it go forth from here to the nations.\nLet Your fragrance rest in this place\nAs we gather to seek Your face." },
            { name: "VERSE", lyrics: "Let your Kingdom come. (echo) \nLet Your will be done. (echo)\nLet us see on earth (echo)\nThe glory of Your Son.\n(3x)" },
            { name: "END", lyrics: "Let Your glory fall on this room.\nLet it go forth from here to the nations.\nLet Your fragrance rest in this place\nAs we gather to seek Your face.\n\nWe are gathered to seek Your face." },
        ]
    },
    {
        title: "Lord I Lift Your Name On High",
        sections: [
            { name: "VERSE", lyrics: "Lord, I lift Your name on high.\nLord, I love to sing Your praises.\nI’m so glad You’re in my life.\nI’m so glad You came to save us." },
            { name: "REFRAIN", lyrics: "You came from heaven to earth\nTo show the way\nFrom the earth to the cross\nMy debt to pay\nFrom the cross to the grave\nFrom the grave to the sky\nLord, I lift Your name on high." },
            { name: "VERSE", lyrics: "Lord, I lift Your name on high.\nLord, I love to sing Your praises.\nI’m so glad You’re in my life.\nI’m so glad You came to save us." },
            { name: "REFRAIN", lyrics: "You came from heaven to earth\nTo show the way\nFrom the earth to the cross\nMy debt to pay\nFrom the cross to the grave\nFrom the grave to the sky\nLord, I lift Your name on high." },
            { name: "END", lyrics: "You came from heaven to earth\nTo show the way\nFrom the earth to the cross\nMy debt to pay\nFrom the cross to the grave\nFrom the grave to the sky\nLord, I lift Your name on high.\n(2x)" }
        ]
    },
    {
        title: "Lord Jesus We Enthrone You",
        sections: [
            { name: "VERSE", lyrics: "Lord Jesus, we enthrone You.\nWe proclaim You are King.\nStanding here in the midst of us\nWe raise You up with our praise." },
            { name: "REFRAIN", lyrics: "And as we worship build a throne\n(3x)\n\nCome, Lord Jesus, and take Your place!" },
            { name: "VERSE", lyrics: "Lord Jesus, we enthrone You.\nWe proclaim You are King.\nStanding here in the midst of us\nWe raise You up with our praise." },
            { name: "REFRAIN", lyrics: "And as we worship build a throne\n(3x)\n\nCome, Lord Jesus, and take Your place!" },
            { name: "END", lyrics: "And as we worship build a throne\n(3x)\n\nCome, Lord Jesus, and take Your place!\n(2x)" }
        ]
    },
    {
        title: "Lord We Come Into Your Holy Presence",
        sections: [
            { name: "VERSE", lyrics: "Lord, we come into Your holy presence\nThere to gaze upon Your face.\nThrough the veil\nWe see You robed in glory\nBefore Your throne to take our place." },
            { name: "VERSE", lyrics: "And with our voices\nWe now praise Your name:\nYou are our King and no other!\nWe cry to You, “Establish your reign!”\nWe shout, “Your Kingdom come!”" },
            { name: "REFRAIN", lyrics: "Hallelujah, our King!  Glory to God!\nWe call on Your name.\nGive us strength for the fight.\nBuild us up by Your power.\nMake us one in Your name.\nYour Kingdom come!" },
            { name: "VERSE", lyrics: "Lord, we come into Your holy presence\nThere to gaze upon Your face.\nThrough the veil\nWe see You robed in glory\nBefore Your throne to take our place." },
            { name: "VERSE", lyrics: "And with our voices\nWe now praise Your name:\nYou are our King and no other!\nWe cry to You, “Establish your reign!”\nWe shout, “Your Kingdom come!”" },
            { name: "END", lyrics: "Hallelujah, our King!  Glory to God!\nWe call on Your name.\nGive us strength for the fight.\nBuild us up by Your power.\nMake us one in Your name.\nYour Kingdom come!\n(2x)" },
        ]
    },
    {
        title: "Lord We Give To You",
        sections: [
            { name: "REFRAIN", lyrics: "Lord, we give to You\nThe glory and honor You are due\nWith hearts and hands upraised.\nNo worldly riches compare\nWith the joy of seeing You face to face.\n(2x)" },
            { name: "END", lyrics: "With the joy of seeing You face to face." }
        ]
    },
    {
        title: "Lord Enkindle Me",
        sections: [
            { name: "VERSE", lyrics: "Lord, enkindle me.\nFan the flame in my heart for Thee.\nTake my life to be Your life,\nBe the light in me." },
            { name: "VERSE", lyrics: "Mold me to your likeness,\nPurified in holiness.\nWarm my heart to be Your heart,\nLove Your world through me." },
            { name: "REFRAIN", lyrics: "Set my heart on fire for Thee!\nMagnify Your light in me!\nLove that dies… that love may rise\nYour love raised on high!" },
            { name: "VERSE", lyrics: "Lord, enkindle me.\nFan the flame in my heart for Thee.\nTake my life to be Your life,\nBe the light in me." },
            { name: "VERSE", lyrics: "Mold me to your likeness,\nPurified in holiness.\nWarm my heart to be Your heart,\nLove Your world through me." },
            { name: "END", lyrics: "Set my heart on fire for Thee!\nMagnify Your light in me!\nLove that dies… that love may rise\nYour love raised on high!\n(2x)\n\nLord, enkindle me." },
        ]
    },
    {
        title: "Make A Joyful Noise",
        sections: [
            { name: "CHORUS", lyrics: "Come, make a joyful noise to God,\nAll the earth.\nBreak forth in joyous song,\nSing praises to your King!\nWith lyre and the sound of melody,\nTrumpets and the horn,\nMake a joyful noise to the King, the Lord." },
            { name: "VERSE", lyrics: "The heavens thunder\nWith the glory of the Lord.\nHe is revealed in majesty and strength!" },
            { name: "CHORUS", lyrics: "Come, make a joyful noise to God,\nAll the earth.\nBreak forth in joyous song,\nSing praises to your King!\nWith lyre and the sound of melody,\nTrumpets and the horn,\nMake a joyful noise to the King, the Lord." },
            { name: "VERSE", lyrics: "Let all the earth rejoice,\nThe people sing together.\nHow greatly they exult\nBefore their mighty King!" },
            { name: "CHORUS", lyrics: "Come, make a joyful noise to God,\nAll the earth.\nBreak forth in joyous song,\nSing praises to your King!\nWith lyre and the sound of melody,\nTrumpets and the horn,\nMake a joyful noise to the King, the Lord." },
            { name: "VERSE", lyrics: "Lift up your festal shout\nIn the gath’ring of the faithful.\nFor the Lord delights\nIn the praise of His saints." },
            { name: "END", lyrics: "Come, make a joyful noise to God,\nAll the earth.\nBreak forth in joyous song,\nSing praises to your King!\nWith lyre and the sound of melody,\nTrumpets and the horn,\nMake a joyful noise to the King, the Lord." }
        ]
    },
    {
        title: "Make Us Yours",
        sections: [
            { name: "VERSE", lyrics: "Even now, return to Him.\nRend your hearts, and come to Him;\nFor He is ever faithful \nto heal our faithlessness.\nThe Lord will make us His if we would but return." },
            { name: "REFRAIN", lyrics: "Make us Yours, Lord\nMake of us a people\nPrecious in Your eyes\n Made whole for You." },
            { name: "REFRAIN", lyrics: "Come restore, Lord\n To send us forth, Lord\nTo walk in holiness with You\nLord, make us Yours." },
            { name: "VERSE", lyrics: "From the north He calls his sons.\nHis children come from far away.\nOvercome with gladness,\nBy streams of living water\nThe ransomed of the Lord \nwill return to Him." },
            { name: "REFRAIN", lyrics: "Make us Yours, Lord\nMake of us a people\nPrecious in Your eyes\n Made whole for You." },
            { name: "REFRAIN", lyrics: "Come restore, Lord\n To send us forth, Lord\nTo walk in holiness with You\nLord, make us Yours." },
            { name: "END", lyrics: "Make us Yours, Lord\nMake of us a people\nPrecious in Your eyes\n Made whole for You." },
            { name: "END", lyrics: "Come restore, Lord\n To send us forth, Lord\nTo walk in holiness with You\nLord, make us Yours." },
        ]
    },
    {
        title: "Matthew 22",
        sections: [
            { name: "VERSE", lyrics: "The Lord, the Lord\nMerciful and gracious, slow to anger\nAbounding in steadfast love.\nThe Lord, the Lord\nMerciful and gracious,\nAbounding in steadfast love\nAnd faithfulness." },
            { name: "REFRAIN", lyrics: "And you shall love the Lord, your God,\nWith all your heart and mind and soul.\nAnd you shall love the Lord, your God,\nWith all your strength." },
            { name: "VERSE", lyrics: "You will cry to me,\nI will hear your voice.\nI’ll bring you back to Myself\nFrom whence you came.\nI know the plans I have laid for you\nPlans for welfare, a future and a hope." },
            { name: "REFRAIN", lyrics: "And you shall love the Lord, your God,\nWith all your heart and mind and soul.\nAnd you shall love the Lord, your God,\nWith all your strength." },
            { name: "VERSE", lyrics: "I say, “Be strong and of good courage.\nYou need not fear, neither be dismayed.\nPut away all other gods,\nTake a stand and say,\n‘As for me and my house, \nWe will serve the Lord’.”" },
            { name: "REFRAIN", lyrics: "And we will love the Lord, our God,\nWith all our heart and mind and soul.\nAnd we will love the Lord, our God,\nWith all our strength." },
            { name: "END", lyrics: "Yes, we will love the Lord, our God,\nWith all our heart and mind and soul.\nYes, we will love the Lord, our God,\nWith all our strength,\nWith all our strength." }
        ]
    },
    {
        title: "Mighty Is Our God",
        sections: [
            { name: "REFRAIN", lyrics: "Hallelujah! (8x)" },
            { name: "REFRAIN", lyrics: "Mighty is our God, the everlasting King.\nAll the earth proclaim\nThe glories of His name.\nEnthroned in the heavens\nThe angels sing His praise.\nMighty is our God!  Holy is He!" },
            { name: "REFRAIN", lyrics: "Hallelujah! (8x)" },
            { name: "REFRAIN", lyrics: "Praise Him, sun and moon.\nPraise Him, stars of light.\nPraise Him in the depths\nAnd praise Him in the heights.\nLet the heavens be glad\nAnd the earth rejoice!\nMighty is our God!  Holy is He!" },
            { name: "REFRAIN", lyrics: "Hallelujah! (8x)" },
            { name: "REFRAIN", lyrics: "Witness to all men \nThe joy of the Lord.\nFor upon us all\nHis love He has poured.\nLet every tongue confess forever:\n“Jesus is Lord!  Worthy is He!”" },
            { name: "END", lyrics: "Hallelujah! (8x)" }
        ]
    },
    {
        title: "Mighty King Of Zion",
        sections: [
            { name: "VERSE", lyrics: "Praise You, Lord, mighty King of Zion,\nMighty God of Israel.\nSave us, Lord, from the roaring lion\nCast down the workings of the infidel." },
            { name: "REFRAIN", lyrics: "O my Strength, I will sing Thy praises.\nThou, O Lord, are a shield to me.\nO my King, though the battle rages\nI look with vict’ry on my enemies." },
            { name: "VERSE", lyrics: "Rouse Thyself like a roaring fire,\nIsrael’s hope, bright Morning Star.\nBurn like chaff the father of liars\nLight up creation with Thy blazing pow’r." },
            { name: "REFRAIN", lyrics: "O my Strength, I will sing Thy praises.\nThou, O Lord, are a shield to me.\nO my King, though the battle rages\nI look with vict’ry on my enemies.\n(2x)" },
            { name: "END", lyrics: "Praise You, Lord, mighty King of Zion!" }
        ]
    },
    {
        title: "More Of You",
        sections: [
            { name: "VERSE", lyrics: "More of you O God.\nMore of you, Christ Jesus.\nMore of you O Spirit,\nWe want more of who you are." },
            { name: "VERSE", lyrics: "More abundant life,\nmore indwelling presence,\nmore transforming power,\nwe want more, we yearn for you." },
            { name: "REFRAIN", lyrics: "Be welcomed here \ncome be enthroned on our praise.\nWe have made room, all else is loss, \nwe wait for you.\n\nWe will not rest, \nuntil you make your home with us.\nUntil you come and satisfy us, we want more." },
            { name: "VERSE", lyrics: "More of you O God.\nMore of you, Christ Jesus.\nMore of you O Spirit,\nWe want more of who you are." },
            { name: "VERSE", lyrics: "More abundant life,\nmore indwelling presence,\nmore transforming power,\nwe want more, we yearn for you." },
            { name: "END", lyrics: "Be welcomed here \ncome be enthroned on our praise.\nWe have made room, all else is loss, \nwe wait for you.\n\nWe will not rest, \nuntil you make your home with us.\nUntil you come and satisfy us, we want more." },
        ]
    },
    {
        title: "My Inheritance the Lord",
        sections: [
            { name: "VERSE", lyrics: "My inheritance the Lord my promised expectation\nHow excellent my reward in him\nIn him is my song my cup and firm foundation\nMy tower my all in all the Lord" },
            { name: "CHORUS", lyrics: "(Men) And now my God I search to see your face\n(Women) And rejoice in knowing you (…rejoice in knowing you)\n(Men) To find you in my eyes renewed by faith\n(Women) and adore forever more (…adore forever more)\n(Men) To taste of heaven in the center of my soul\n(All) I long to love you Lord" },
            { name: "VERSE", lyrics: "In his goodness he has raised and placed me at his table\nWhat thing could compare itself to you!\nIn your presence Lord my joy and my desire\nForever in you I long to live" },
            { name: "CHORUS", lyrics: "(Men) And now my God I search to see your face\n(Women) And rejoice in knowing you (…rejoice in knowing you)\n(Men) To find you in my eyes renewed by faith\n(Women) and adore forever more (…adore forever more)\n(Men) To taste of heaven in the center of my soul\n(All) I long to love you Lord" },
            { name: "VERSE", lyrics: "I will lift my voice to you, with music celebrating\nYour presence for all eternity\nRejoicing I will praise on harp and lyre playing\nMy portion eternally receive" },
            { name: "CHORUS", lyrics: "(Men) And now my God I search to see your face\n(Women) And rejoice in knowing you (…rejoice in knowing you)\n(Men) To find you in my eyes renewed by faith\n(Women) and adore forever more (…adore forever more)\n(Men) To taste of heaven in the center of my soul\n(All) I long to love you Lord" },
            { name: "END", lyrics: "(Men) You are forever my portion O Lord\n(Women) My inheritance the Lord\n(2x)\n\n(Men) You are forever my portion O Lord\n(All) My inheritance the Lord" }
        ]
    },
    {
        title: "My Mouth Shall Praise You with Joy",
        sections: [
            { name: "VERSE", lyrics: "O God, You are my God,\nMy heart is longing to stand before You.\nMy soul is thirsting for You, Lord.\nWhen shall I come and freely adore You?" },
            { name: "REFRAIN", lyrics: "So I will bless You with all that I am.\nIn Your name I will lift up my hands.\nMy soul shall rise to Your banquet of life\nMy mouth shall praise You with joy\nMy mouth shall praise You with joy." },
            { name: "VERSE", lyrics: "I gaze upon Your temple\nAnd I behold Your beauty and grace.\nYour love is better than life, Lord,\nWith joyful heart\nI will sing of Your praises." },
            { name: "REFRAIN", lyrics: "So I will bless You with all that I am.\nIn Your name I will lift up my hands.\nMy soul shall rise to Your banquet of life\nMy mouth shall praise You with joy\nMy mouth shall praise You with joy." },
            { name: "VERSE", lyrics: "Each night I watch for Your light\nUpon my bed I ponder Your mercy.\nMy soul clings closely to You, Lord.\nYou are my strength\nAnd Your love will uphold me." },
            { name: "END", lyrics: "So I will bless You with all that I am.\nIn Your name I will lift up my hands.\nMy soul shall rise to Your banquet of life\nMy mouth shall praise You with joy\nMy mouth shall praise You with joy.\n(2x)" }
        ]
    },
    {
        title: "My Soul Finds Rest in God Alone",
        sections: [
            { name: "VERSE", lyrics: "My soul finds rest in God alone,\nMy salvation comes from Him.\nHe alone is my rock, \nHe alone is my salvation." },
            { name: "VERSE", lyrics: "My soul finds rest in God alone,\nAll my hope I place in Him.\nHe alone is my fortress, \nHe’s my deliverer, I’ll not be shaken." },
            { name: "REFRAIN", lyrics: "God alone is my rock\nAnd I’ll not be moved,\nI find shelter in His wings.\nHe alone is my strength and shield.\nHow my heart leaps for joy,\nI will ever give thanks unto Him." },
            { name: "VERSE", lyrics: "For You have been my refuge, Lord,\nA strong tow’r against the foe\nMy help in times of distress\nMy joy in times of affliction." },
            { name: "VERSE", lyrics: "For you have heard my cry, O God,\nListened to my supplication.\nFrom the ends of the earth I cry,\nLead me to the rock that is higher than I." },
            { name: "END", lyrics: "God alone is my rock\nAnd I’ll not be moved,\nI find shelter in His wings.\nHe alone is my strength and shield.\nHow my heart leaps for joy,\nI will ever give thanks unto Him.\n(2x)" }
        ]
    },
    {
        title: "Nada Te Turbe",
        sections: [
            { name: "VERSE", lyrics: "Nada te turbe, nada te_espante,\nTodo se pasa, Dios no se muda.\nLa paciencia todo lo_alcanza.\nQuien a Dios tiene nada le falta.\nSolo Dios basta! (3x)\nAleluya.\n(2x)" }
        ]
    },
    {
        title: "Open The Eyes Of My Heart",
        sections: [
            { name: "VERSE", lyrics: "Open the eyes of my heart, Lord.\nOpen the eyes of my heart,\nI want to see You,\nI want to see You.\n(2x)" },
            { name: "REFRAIN", lyrics: "To see You high and lifted up\nShining in the light of Your glory.\nPour out Your power and love\nAs we sing “Holy, holy, holy!”" },
            { name: "VERSE", lyrics: "Open the eyes of my heart, Lord.\nOpen the eyes of my heart,\nI want to see You,\nI want to see You.\n(2x)" },
            { name: "REFRAIN", lyrics: "To see You high and lifted up\nShining in the light of Your glory.\nPour out Your power and love\nAs we sing “Holy, holy, holy!”\n(2x)\n\nI want to see You." },
            { name: "END", lyrics: "Holy, holy, holy!\nHoly, holy, holy!\nHoly, holy, holy!\nI want to see You.\n(2x)" }
        ]
    },
    {
        title: "Philippians 2",
        sections: [
            { name: "VERSE", lyrics: "Christ Jesus, though in the form of God\nDid not grasp equality with God\nBut emptying Himself\nTook a servant’s form\nBeing born in the likeness of men." },
            { name: "REFRAIN", lyrics: "Therefore God has highly exalted Him\nAnd bestowed on Him the name,\nThat at Jesus’ name\nEvery knee shall bow in heaven, on earth\nAnd under the earth\nAnd every tongue confess Him Lord\nTo the glory of God the Father." },
            { name: "VERSE", lyrics: "Being found in human form\nChrist Jesus humbled Himself\nBecoming obedient unto death\nEven to death on a cross." },
            { name: "REFRAIN", lyrics: "Therefore God has highly exalted Him\nAnd bestowed on Him the name,\nThat at Jesus’ name\nEvery knee shall bow in heaven, on earth\nAnd under the earth\nAnd every tongue confess Him Lord\nTo the glory of God the Father." },
            { name: "END", lyrics: "Yes God has highly exalted Him\nAnd bestowed on Him the name,\nThat at Jesus’ name\nEvery knee shall bow in heaven, on earth\nAnd under the earth\nAnd every tongue confess Him Lord\nTo the glory of God the Father." }
        ]
    },
    {
        title: "Praise The Lord All Nations",
        sections: [
            { name: "VERSE", lyrics: "Rise up, your light has come;\nHis glory shines upon you.\nThough darkness reigns on earth,\nHis light has risen on you.\nAnd to it all the nations come;\nTheir kings shall seek its brightness\nLift up your eyes and see; behold His light." },
            { name: "REFRAIN", lyrics: "Praise the Lord, all nations\nAnd extol Him all you peoples.\n(2x)" },
            { name: "REFRAIN", lyrics: "For great is His steadfast love toward us,\nAnd the faithfulness of the Lord \nEndures forever. Alleluia." },
            { name: "VERSE", lyrics: "From the east and from the west\nHe calls His sons and daughters.\nFrom ev’ry land they come\nTo drink life-giving waters.\nThen you shall see, and radiant be;\nYour heart shall thrill with gladness.\nThe wealth of all the nations shall be yours." },
            { name: "REFRAIN", lyrics: "Praise the Lord, all nations\nAnd extol Him all you peoples.\n(2x)" },
            { name: "REFRAIN", lyrics: "For great is His steadfast love toward us,\nAnd the faithfulness of the Lord \nEndures forever. Alleluia." },
            { name: "REFRAIN", lyrics: "Praise the Lord, all nations\nAnd extol Him all you peoples.\n(2x)" },
            { name: "END", lyrics: "For great is His steadfast love toward us,\nAnd the faithfulness of the Lord \nEndures forever. Alleluia.\n\nAlleluia. Praise the Lord, all nations. (3x)" },
        ]
    },
    {
        title: "Praises On High",
        sections: [
            { name: "VERSE", lyrics: "Who shall not fear and glorify\nYour name, O Lord?\nWho shall not bow and worship You,\nO Lord Most High?\nWe will praise Your name!" },
            { name: "REFRAIN", lyrics: "High on high You reign\nHigh on high, enthroned in heaven\nHigh on high You reign\nAll glory belongs to Your name!" },
            { name: "VERSE", lyrics: "Great are Your works, O Lord our God,\nTo those You love.\nMajestic are You in holiness,\nO God, our King.\nWe will praise Your name!" },
            { name: "REFRAIN", lyrics: "High on high You reign\nHigh on high, enthroned in heaven\nHigh on high You reign\nAll glory belongs to Your name!\n(2x)" },
            { name: "END", lyrics: "High on high You reign!" }
        ]
    },
    {
        title: "Prayer of Saint Augustine",
        sections: [
            { name: "VERSE", lyrics: "O Beauty ancient, O Beauty so new,\nLate have I loved Thee and feebly yet do.\nThough You were with me\nI was not with You.\nThen You shone Your face,\nAnd I was blind no more." },
            { name: "REFRAIN", lyrics: "My heart searches restlessly,\nAnd finds no rest till it rests in Thee.\nO Seeker, You sought for me,\nYour love has found me\nI am taken by Thee" },
            { name: "VERSE", lyrics: "I sought this world and chased its finer things\nYet were these not in You \nThey would not have been.\nMy ceaseless longing hid the deeper truth\nIn all my desirings \nI was desiring You" },
            { name: "REFRAIN", lyrics: "My heart searches restlessly,\nAnd finds no rest till it rests in Thee.\nO Seeker, You sought for me,\nYour love has found me\nI am taken by Thee" },
            { name: "VERSE", lyrics: "Lord, in my deafness You cried out to me.\nI drew my breath \nAnd now Your fragrance I breathe.\nO Fount of Life You are forever the same\nO Fire of Love\nCome set me aflame." },
            { name: "END", lyrics: "My heart searches restlessly,\nAnd finds no rest till it rests in Thee.\nO Seeker, You sought for me,\nYour love has found me\nI am taken by Thee" }
        ]
    },
    {
        title: "Prince Of Peace",
        sections: [
            { name: "VERSE", lyrics: "You are holy  (You are holy)\nYou are mighty  (You are mighty)\nYou are worthy  (You are worthy)\nWorthy of praise  (Worthy of praise)\nI will follow  (I will follow)\nI will listen  (I will listen)\nI will love You  (I will love You)\nAll of my days  (All of my days)" },
            { name: "VERSE", lyrics: "(MEN)\nI will sing to and worship\nThe King who is worthy.\nI will love and adore You,\nI will bow down before You." },
            { name: "VERSE", lyrics: "You are my Prince of peace\nAnd I will live my life for You." },
            { name: "VERSE", lyrics: "You are holy  (You are holy)\nYou are mighty  (You are mighty)\nYou are worthy  (You are worthy)\nWorthy of praise  (Worthy of praise)\nI will follow  (I will follow)\nI will listen  (I will listen)\nI will love You  (I will love You)\nAll of my days  (All of my days)" },
            { name: "VERSE", lyrics: "(WOMEN)\nYou are Lord of lords,\nYou are King of kings,\nYou are mighty God, Lord of everything.\nYou’re Emmanuel, you’re the great I AM\nYou’re the Prince of peace\nWho is the Lamb." },
            { name: "VERSE", lyrics: "(WOMEN)\nYou’re the living God,\nYou’re my saving grace,\nYou will live forever,\nYou are Ancient of days.\nYou are Alpha, Omega, beginning and end.\nYou’re my Savior, Messiah,\nRedeemer and friend." },
            { name: "VERSE", lyrics: "You are my Prince of peace\nAnd I will live my life for You." },
            { name: "VERSE", lyrics: "You are holy  (You are holy)\nYou are mighty  (You are mighty)\nYou are worthy  (You are worthy)\nWorthy of praise  (Worthy of praise)\nI will follow  (I will follow)\nI will listen  (I will listen)\nI will love You  (I will love You)\nAll of my days  (All of my days)" },
            { name: "VERSE", lyrics: "(MEN)\nI will sing to and worship\nThe King who is worthy.\nI will love and adore You,\nI will bow down before You.\n\n(WOMEN)\nYou are Lord of lords,\nYou are King of kings,\nYou are mighty God, Lord of everything.\nYou’re Emmanuel, you’re the great I AM\nYou’re the Prince of peace\nWho is the Lamb." },
            { name: "VERSE", lyrics: "(MEN)\nI will sing to and worship\nThe King who is worthy.\nI will love and adore You,\nI will bow down before You.\n\n(WOMEN)\nYou’re the living God,\nYou’re my saving grace,\nYou will live forever,\nYou are Ancient of days.\nYou are Alpha, Omega, beginning and end.\nYou’re my Savior, Messiah,\nRedeemer and friend." },
            { name: "END", lyrics: "You are my Prince of peace\nAnd I will live my life for You.\n(2x)" }
        ]
    },
    {
        title: "Psalm 116 - I Am Your Servant",
        sections: [
            { name: "VERSE", lyrics: "What shall I offer to You, Lord my God,\nFor all the goodness\nYou have shown to me?\nIn my affliction You gave me mercy,\nYou have restored my soul to its rest.\nSo I will pay my vows to You, Lord,\nWithin Your house,\nBefore the people of God." },
            { name: "REFRAIN", lyrics: "I am Your servant,\nThe one You have chosen,\nI have been called \nand been freed from the grave.\nSo I will lift up the cup of salvation\nAnd I will call on the name of the Lord,\nI will give thanks in the house of the Lord." },
            { name: "VERSE", lyrics: "I love You, Lord,\nFor You have heard my cry.\nYou freed my life\nFrom the shadow of death.\nMy feet had stumbled,\nYou bore me up, Lord,\nI walk with You in the land of the just.\nSo I will pay my vows to You, Lord,\nWithin Your house,\nBefore the people of God." },
            { name: "REFRAIN", lyrics: "I am Your servant,\nThe one You have chosen,\nI have been called \nand been freed from the grave.\nSo I will lift up the cup of salvation\nAnd I will call on the name of the Lord,\nI will give thanks in the house of the Lord." },
            { name: "END", lyrics: "I am Your servant,\nThe one You have chosen,\nI have been called \nand been freed from the grave.\nSo I will lift up the cup of salvation\nAnd I will call on the name of the Lord,\nI will give thanks in the house of the Lord.\n\nI will give thanks! (2x)" }
        ]
    },
    {
        title: "Psalm 84 - O Lord, how we love your courts!",
        sections: [
            { name: "VERSE", lyrics: "O Lord, how we love Your courts\nThe place where Your glory abides.\nOur hearts and our flesh\nSing for joy to you, Lord\nTo You, the living God!" },
            { name: "CHORUS", lyrics: "Blessed are those, Lord,\nWhose strength is in Thee,\nWho find their life in Your praise.\nThey shall grow strong,\nGo from strength unto strength,\nUntil they see You face to face." },
            { name: "VERSE", lyrics: "A day in Your courts\nIs more precious to me\nThan a thousand without You, my God.\nThe servant at Your gates\nIs more blessed than he\nWhose wealth keeps him\nFar from You, Lord." },
            { name: "CHORUS", lyrics: "Blessed are those, Lord,\nWhose strength is in Thee,\nWho find their life in Your praise.\nThey shall grow strong,\nGo from strength unto strength,\nUntil they see You face to face." },
            { name: "VERSE", lyrics: "The Almighty is a sun,\nA shield for His own,\nFor all those who walk in His ways.\nNo blessing withheld,\nEndless favor bestowed\nOn him who has made You his prize." },
            { name: "END", lyrics: "Blessed are those, Lord,\nWhose strength is in Thee,\nWho find their life in Your praise.\nThey shall grow strong,\nGo from strength unto strength,\nUntil they see You face to face.\n(2x)" }
        ]
    },
    {
        title: "Psalm 95 - Come let us sing for joy to the Lord",
        sections: [
            { name: "VERSE", lyrics: "Come, let us sing for joy to the Lord\nLet us shout to the rock of salvation!\nLet us come before Him giving thanks\nAnd extol Him with music and song!" },
            { name: "REFRAIN", lyrics: "Alleluia! Alleluia!\nHope in God, O my soul,\nIn Him your joy will be full." },
            { name: "VERSE", lyrics: "For the Lord is the great God\nAnd the King above kings\nIn His hands are the depths of the earth\nThe mountains are His and the sea is His\nHe formed all living things." },
            { name: "REFRAIN", lyrics: "Alleluia! Alleluia!\nHope in God, O my soul,\nIn Him your joy will be full." },
            { name: "VERSE", lyrics: "Come, let us bow down and worship Him\nLet us kneel before the Lord our maker.\nFor He is our God and His people are we\nThe flock under His care." },
            { name: "END", lyrics: "Alleluia! Alleluia!\nHope in God, O my soul,\nIn Him your joy will be full.\n\nHope in God, O my soul,\nIn Him your joy will be full." }
        ]
    },
    {
        title: "Refiner’s Fire",
        sections: [
            { name: "VERSE", lyrics: "Purify my heart,\nLet me be as gold and precious silver.\nPurify my heart,\nLet me be as gold, pure gold." },
            { name: "REFRAIN", lyrics: "Refiner’s fire,\nMy heart’s one desire is to be holy,\nSet apart for You, Lord.\nI choose to be holy,\nSet apart for You, my Master\nReady to do Your will." },
            { name: "VERSE", lyrics: "Purify my heart,\nCleanse me from within\nAnd make me holy.\nPurify my heart,\nCleanse me from my sin deep within." },
            { name: "END", lyrics: "Refiner’s fire,\nMy heart’s one desire is to be holy,\nSet apart for You, Lord.\nI choose to be holy,\nSet apart for You, my Master\nReady to do Your will.\n(2x)" }
        ]
    },
    {
        title: "Return, O My Soul",
        sections: [
            { name: "VERSE", lyrics: "The Lord is gracious\nHe is merciful.\nIn my distress I called to Him.\nHe rescued me." },
            { name: "REFRAIN", lyrics: "Return, O my soul, to your rest\nReturn, my soul,\nFor the Lord has been good to you" },
            { name: "VERSE", lyrics: "My soul He freed from death\nMy eyes from tears\nI shall walk before the Lord\nIn the land of the living" },
            { name: "REFRAIN", lyrics: "Return, O my soul, to your rest\nReturn, my soul,\nFor the Lord has been good to you" },
            { name: "VERSE", lyrics: "How can I repay the Lord\nFor all His goodness to me?\nI will pay my vows to Him\nBefore His people." },
            { name: "END", lyrics: "Return, O my soul, to your rest\nReturn, my soul,\nFor the Lord has been good to you \n(2x)" }
        ]
    },
    {
        title: "Rise O People Called To Worship",
        sections: [
            { name: "VERSE", lyrics: "Rise, O people, called to worship\nHeaven’s highest praise to share\nClothed by God in holy splendor\nJoined by Jesus’ priestly prayer.\nHere and now we see but dimly\nThen and there our eyes behold\nHim whom we by faith now worship\nSoon by sight to ever know." },
            { name: "REFRAIN", lyrics: "You, O fount of life eternal\nYou, the source of endless joy\nFace to face with love forever:\n“Gloria!” will angels cry\n“Glory!” will our hearts reply.\n“Holy, holy, holy is the Lord!”" },
            { name: "VERSE", lyrics: "Lives we’ve offered brought before You\nAs all heaven’s hosts adore\nPray’rs with heav’nly incense burning\nRise to shroud Your holy throne.\nCountless saints\nRobed white in splendor\nWashed in blood of spotless Lamb\nNever more to thirst or hunger\nEver more to understand." },
            { name: "REFRAIN", lyrics: "You, O fount of life eternal\nYou, the source of endless joy\nFace to face with love forever:\n“Gloria!” will angels cry\n“Glory!” will our hearts reply.\n“Holy, holy, holy is the Lord!”" },
            { name: "VERSE", lyrics: "Ev’ry tear wiped by the Father\nEvery nation’s tumult quelled\nRoar of sea and crash of thunder\nBy His will creation stilled.\nHeaven’s hosts then awed to silence\nAt the Lamb enthroned above\nThen will we the silence shatter\nWorshipping the Face of love!" },
            { name: "END", lyrics: "You, O fount of life eternal\nYou, the source of endless joy\nFace to face with love forever:\n“Gloria!” will angels cry\n“Glory!” will our hearts reply.\n“Holy, holy, holy is the Lord!”\n(2x)" }
        ]
    },
    {
        title: "Salvation Belongs To Our God",
        sections: [
            { name: "VERSE", lyrics: "Salvation belongs to our God\nWho sits upon the throne\nAnd unto the Lamb:\nPraise and glory, wisdom and thanks\nHonor and power and strength." },
            { name: "REFRAIN", lyrics: "Be to our God forever and ever!\nBe to our God forever and ever!\nBe to our God forever and ever!\nAmen!" },
            { name: "VERSE", lyrics: "And we, the redeemed, shall be strong\nIn purpose and unity\nDeclaring aloud:\nPraise and glory, wisdom and thanks\nHonor and power and strength." },
            { name: "END", lyrics: "Be to our God forever and ever!\nBe to our God forever and ever!\nBe to our God forever and ever!\nAmen!\n(2x)" }
        ]
    },
    {
        title: "Shine Jesus Shine",
        sections: [
            { name: "VERSE", lyrics: "Lord, the light of Your love is shining\nIn the midst of the darkness shining\nJesus, light of the world, shine upon us\nSet us free by the truth\nYou now bring us\nShine on me, shine on me!" },
            { name: "REFRAIN", lyrics: "Shine, Jesus, shine.\nFill this land with the Father’s glory.\nBlaze, Spirit, blaze.  Set our hearts on fire.\nFlow, river, flow.\nFlood the nations with grace and mercy.\nSend forth Your word, Lord,\nAnd let there be light." },
            { name: "VERSE", lyrics: "Lord, I come to Your awesome presence\nFrom the shadows into Your radiance\nBy the blood I may enter Your brightness\nSearch me, try me,\nConsume all my darkness.\nShine on me, shine on me!" },
            { name: "REFRAIN", lyrics: "Shine, Jesus, shine.\nFill this land with the Father’s glory.\nBlaze, Spirit, blaze.  Set our hearts on fire.\nFlow, river, flow.\nFlood the nations with grace and mercy.\nSend forth Your word, Lord,\nAnd let there be light." },
            { name: "VERSE", lyrics: "As we gaze on Your kingly brightness\nSo our faces display Your likeness\nEver changing from glory to glory\nMirrored here, may our lives\nTell your story.\nShine on me, Shine on me!" },
            { name: "END", lyrics: "Shine, Jesus, shine.\nFill this land with the Father’s glory.\nBlaze, Spirit, blaze.  Set our hearts on fire.\nFlow, river, flow.\nFlood the nations with grace and mercy.\nSend forth Your word, Lord,\nAnd let there be light.\n(2x)" }
        ]
    },
    {
        title: "Shout To The Lord",
        sections: [
            { name: "VERSE", lyrics: "My Jesus, my Savior\nLord, there is none like You.\nAll of my days I want to praise\nThe wonders of Your mighty love." },
            { name: "VERSE", lyrics: "My comfort, my shelter\nTower of refuge and strength\nLet every breath, all that I am\nNever cease to worship You." },
            { name: "REFRAIN", lyrics: "Shout to the Lord,\nAll the earth, let us sing\nPower and majesty, praise to the King.\nMountains bow down\nAnd the seas will roar\nAt the sound of Your name." },
            { name: "REFRAIN", lyrics: "I sing for joy at the works of Your hand.\nForever I’ll love you, forever I’ll stand.\nNothing compares to the promise\nI have in You." },
            { name: "VERSE", lyrics: "My Jesus, my Savior\nLord, there is none like You.\nAll of my days I want to praise\nThe wonders of Your mighty love." },
            { name: "VERSE", lyrics: "My comfort, my shelter\nTower of refuge and strength\nLet every breath, all that I am\nNever cease to worship You." },
            { name: "REFRAIN", lyrics: "Shout to the Lord,\nAll the earth, let us sing\nPower and majesty, praise to the King.\nMountains bow down\nAnd the seas will roar\nAt the sound of Your name." },
            { name: "REFRAIN", lyrics: "I sing for joy at the works of Your hand.\nForever I’ll love you, forever I’ll stand.\nNothing compares to the promise\nI have in You." },
            { name: "REFRAIN", lyrics: "Shout to the Lord,\nAll the earth, let us sing\nPower and majesty, praise to the King.\nMountains bow down\nAnd the seas will roar\nAt the sound of Your name." },
            { name: "END", lyrics: "I sing for joy at the works of Your hand.\nForever I’ll love you, forever I’ll stand.\nNothing compares to the promise\nI have in You." }
        ]
    },
    {
        title: "So Bless The Lord",
        sections: [
            { name: "VERSE", lyrics: "Who is He who forgives our iniquities?\nWho is He who heals our disease?\nIt is the Lord who restored your life \nFrom the grave \nand renews your youth like the eagle's." },
            { name: "REFRAIN", lyrics: "So bless the Lord Oh my soul; \nAll within me exalt Him\nRing out my heart; sing out my soul!\nDo not forget in His mercy \nHe has set you free.\nOh Lord be blessed in me." },
            { name: "VERSE", lyrics: "For the Lord has been \nGracious and merciful,\nAll His ways rich in steadfast love \nAs the skies rise high over all the earth, \nSo far has God removed all our sins." },
            { name: "REFRAIN", lyrics: "So bless the Lord Oh my soul; \nAll within me exalt Him\nRing out my heart; sing out my soul!\nDo not forget in His mercy \nHe has set you free.\nOh Lord be blessed in me." },
            { name: "VERSE", lyrics: "As a father is moved and compassionate,\nQuick to spare the son whom He loves,\nSo does God's face of grace ever seek\nTo save the people so close to His heart." },
            { name: "END", lyrics: "So bless the Lord Oh my soul; \nAll within me exalt Him\nRing out my heart; sing out my soul!\nDo not forget in His mercy \nHe has set you free.\nOh Lord be blessed in me.\n(2x)\n\nOh Lord be blessed in me." }
        ]
    },
    {
        title: "Song Of Patrick",
        sections: [
            { name: "VERSE", lyrics: "This day God gives me \nStrength of high heaven\nSun and moon shining\nFlame in my hearth\nFlashing of lightning\nWind in its swiftness\nDeeps of the ocean\nFirmness of earth." },
            { name: "REFRAIN", lyrics: "Rising I thank You\nMighty and strong One\nKing of creation, Giver of rest\nLight of the morning\nDispersing the darkness\nYour love awaking the dawn!" },
            { name: "VERSE", lyrics: "This day God sends me\nStrength as my steersman\nMight to uphold me,\n Wisdom as guide\nYour eyes are watchful\nYour ears are list’ning\nYour lips are speaking\nStrength at my side." },
            { name: "REFRAIN", lyrics: "Rising I thank You\nMighty and strong One\nKing of creation, Giver of rest\nLight of the morning\nDispersing the darkness\nYour love awaking the dawn!" },
            { name: "VERSE", lyrics: "God’s way is my way\nGod’s shield is round me\nGod’s host defends me, \nSaving from ill\nAngels of heaven, \nDrive from me always\nAll that would harm me\nStand by me still." },
            { name: "REFRAIN", lyrics: "Rising I thank You  \nMighty and strong One\nKing of creation, Giver of rest\nLight of the morning\nDispersing the darkness\nYour love awaking the dawn!" },
            { name: "END", lyrics: "Rising I thank You\nMighty and strong One\nKing of creation, Giver of rest\nFirmly confessing: Oneness of Godhead\nThreeness of Persons, Trinity blest!" }
        ]
    },
    {
        title: "Strong and Faithful",
        sections: [
            { name: "VERSE", lyrics: "Our hearts know no fear\nStrong and faithful is our God.\nWe are His, precious and dear\nA rock unmoved, He is our God." },
            { name: "REFRAIN", lyrics: "For though a thousand may fall\nAnd mountains may crumble\nWe shall continue to stand.\nFor men who are mighty and tall\nMay falter and tremble\nWe shall possess the land.\nFor strong and faithful is our God. (2x)" },
            { name: "VERSE", lyrics: "Clouds of night may fill the sky\nStorms that rage may blow the day\nBut let your hearts rest in your God\nHe will shield you all the way." },
            { name: "END", lyrics: "For though a thousand may fall\nAnd mountains may crumble\nWe shall continue to stand.\nFor men who are mighty and tall\nMay falter and tremble\nWe shall possess the land.\nFor strong and faithful is our God. (2x)" }
        ]
    },
    {
        title: "Taste and See",
        sections: [
            { name: "REFRAIN", lyrics: "Taste and see\nHow good our God can be!\nO taste and see\nHow good our God can be!" },
            { name: "VERSE", lyrics: "I will bless the Lord at all times\nMy mouth will proclaim His praise\nMy soul makes its boast\nIn the Lord our God\nLet the humble hear and be glad." },
            { name: "REFRAIN", lyrics: "Taste and see\nHow good our God can be!\nO taste and see\nHow good our God can be!" },
            { name: "VERSE", lyrics: "Come, glorify the Lord with me\nTogether let us praise His name\nLook to Him and grow bright\nIn His radiant light\nAnd your face will never be ashamed." },
            { name: "REFRAIN", lyrics: "Taste and see\nHow good our God can be!\nO taste and see\nHow good our God can be!" },
            { name: "VERSE", lyrics: "The eyes of the Lord are on the just\nAnd His ears toward all their cries\nThe Lord is near to the broken heart\nAnd the crushed in Spirit, He saves." },
            { name: "REFRAIN", lyrics: "Taste and see\nHow good our God can be!\nO taste and see\nHow good our God can be!" },
            { name: "VERSE", lyrics: "O taste and see the Lord is good\nAnd happy are all who trust in Him\nO fear the Lord, you His holy ones\nTrust in Him and lack no good thing." },
            { name: "END", lyrics: "Taste and see\nHow good our God can be!\nO taste and see\nHow good our God can be!" }
        ]
    },
    {
        title: "Te Deum",
        sections: [
            { name: "VERSE", lyrics: "You are God, we praise You.\nYou are Lord, we thank You.\nAll creation worships You,\nFather, ancient of days.\n\nTo You all the angels,\nAll the pow’rs of heaven,\nCherubim and seraphim\nSing in endless praise." },
            { name: "REFRAIN", lyrics: "You are holy, holy, powerful and mighty!\nYour glory fills the heavens,\nYour splendor fills the earth.\nYou are holy, holy, powerful and mighty!\nYour glory fills the heavens,\nYour splendor fills the earth." },
            { name: "VERSE", lyrics: "Your servants, the apostles,\nHonor You and praise You.\nThe fellowship of prophets,\nYour greatness glorifies.\n\nThe army of the martyrs,\nRobed in white, adores You.\nThroughout the world Your holy church\nProclaims You to the skies." },
            { name: "REFRAIN", lyrics: "Father, glorious, infinite in majesty,\nSon victorious,\nSpirit, comfort and guide.\nYou are holy, holy, powerful and mighty!\nYour glory fills the heavens,\nYour splendor fills the earth." },
            { name: "VERSE", lyrics: "Christ, Son of the Father,\nKing of endless glory,\nYou came among us lowly\nBirth of Mary’s womb.\n\nYou robbed death of its power,\nYou opened heaven’s treasure,\nNow You sit at God’s right hand,\nSoon to be our Judge." },
            { name: "REFRAIN", lyrics: "Come, Lord Jesus,\nCome to help Your people\nThose for whom You shed Your blood\nTo whom You gave new birth.\nYou are holy, holy, powerful and mighty!\nYour glory fills the heavens,\nYour splendor fills the earth." },
            { name: "END", lyrics: "Father, glorious, infinite in majesty,\nSon victorious,\nSpirit, comfort and guide.\nYou are holy, holy, powerful and mighty!\nYour glory fills the heavens,\nYour splendor fills the earth." }
        ]
    },
    {
        title: "The House Of God",
        sections: [
            { name: "REFRAIN", lyrics: "Take us higher up, draw us deeper still\nFurther into Your heart, O Lord.\nMake us living light, set us on a hill\nShine forth through us, O radiant Son!" },
            { name: "VERSE", lyrics: "Make my heart Your throne, O Lord,\nA dwelling place for the light of God.\nJoin me to Your temple, Lord,\nThat all might see the light in me\nAnd lift their hearts\nTo Your house of glory." },
            { name: "REFRAIN", lyrics: "Take us higher up, draw us deeper still\nFurther into Your heart, O Lord.\nMake us living light, set us on a hill\nShine forth through us, O radiant Son!" },
            { name: "VERSE", lyrics: "Once we were no people, Lord,\nNow we are one in the house of God\nLiving stones now joined in Christ.\nFor we have seen Your temple brings\nThe hopeless heart to the hope of glory." },
            { name: "REFRAIN", lyrics: "Take us higher up, draw us deeper still\nFurther into Your heart, O Lord.\nMake us living light, set us on a hill\nShine forth through us, O radiant Son!" },
            { name: "VERSE", lyrics: "For we are a chosen race\nA shining light set up on a hill\nA holy nation, royal priests\nMay we proclaim Your wondrous name\nUntil the day when You come in glory." },
            { name: "END", lyrics: "Take us higher up, draw us deeper still\nFurther into Your heart, O Lord.\nMake us living light, set us on a hill\nShine forth through us, O radiant Son!" }
        ]
    },
    {
        title: "The Light Of Christ",
        sections: [
            { name: "REFRAIN", lyrics: "The light of Christ\nHas come into the world.\nThe light of Christ\nHas come into the world." },
            { name: "VERSE", lyrics: "All men must be born again\nTo see the Kingdom of God.\nThe water and the Spirit\nBring new life in God’s love." },
            { name: "REFRAIN", lyrics: "The light of Christ\nHas come into the world.\nThe light of Christ\nHas come into the world." },
            { name: "VERSE", lyrics: "God gave up His only Son\nOut of love for the world\nSo that all men who believe in Him\nWill live forever." },
            { name: "REFRAIN", lyrics: "The light of Christ\nHas come into the world.\nThe light of Christ\nHas come into the world." },
            { name: "VERSE", lyrics: "The light of God has come to us\nSo that we might have salvation.\nFrom the darkness of our sins\nWe walk into glory with Christ Jesus." },
            { name: "END", lyrics: "The light of Christ\nHas come into the world.\nThe light of Christ\nHas come into the world." }
        ]
    },
    {
        title: "The Light Shines in the Darkness",
        sections: [
            { name: "VERSE", lyrics: "In the beginning God made the heavens and earth\nAnd darkness hung over the depths\nThen God said let there be light\nAnd there was and it was good" },
            { name: "CHORUS", lyrics: "So let light shine out of darkness\nFor Christ is the light of the world\nYes the light shines in the darkness\nAnd the darkness has not overcome" },
            { name: "VERSE", lyrics: "On the first day Jesus arose from the dead\nAnd death was led captive away\nMorning broke into the tomb shadows fled\nNight was no more" },
            { name: "CHORUS", lyrics: "So let light shine out of darkness\nFor Christ is the light of the world\nYes the light shines in the darkness\nAnd the darkness has not overcome" },
            { name: "VERSE", lyrics: "On the last day, when earth and heaven have passed\nThe Lord shall create them anew\nWe shall arise from the dead\nAnd the Lamb shall be our light" },
            { name: "CHORUS", lyrics: "So let light shine out of darkness\nFor Christ is the light of the world\nYes the light shines in the darkness\nAnd the darkness has not overcome" },
            { name: "END", lyrics: "So let light shine out of darkness\nFor Christ is the light of the world\nYes the light shines in the darkness\nAnd the darkness has not overcome" }
        ]
    },
    {
        title: "The Magnificat",
        sections: [
            { name: "REFRAIN", lyrics: "My soul (my soul) magnifies the Lord\nAnd my spirit (my spirit)\nRejoices (rejoices) in God my Savior!" },
            { name: "VERSE", lyrics: "For He who is mighty\nHas done great things\nAnd holy is His name\nFrom age to age His mercy is\nOn those who fear Him\nHe fills the hungry with good things\nHe helps those serve Him." },
            { name: "REFRAIN", lyrics: "My soul (my soul) magnifies the Lord\nAnd my spirit (my spirit)\nRejoices (rejoices) in God my Savior!" },
            { name: "VERSE", lyrics: "He scatters the proud\nAnd He lifts up the lowly\nHe has shown strength with His arm\nFor the Word became flesh and\nHe dwelt among us\nNo one has seen the Father\nBut the Son has made Him known." },
            { name: "REFRAIN", lyrics: "My soul (my soul) magnifies the Lord\nAnd my spirit (my spirit)\nRejoices (rejoices) in God my Savior!" },
            { name: "VERSE", lyrics: "The words of the Lord are Spirit and life\nBlessed are the people\nWho hear them and keep them.\nWhen God speaks His word\nLet it be fulfilled in me.\nFor with the Lord, nothing is impossible." },
            { name: "REFRAIN", lyrics: "My soul (my soul) magnifies the Lord\nAnd my spirit (my spirit)\nRejoices (rejoices) in God my Savior!" },
            { name: "END", lyrics: "My spirit (my spirit) rejoices (rejoices)\n in Jesus, my Savior!" }
        ]
    },
    {
        title: "The People Of God",
        sections: [
            { name: "REFRAIN", lyrics: "The people of God shines forth like lights\nThe sword of the Spirit is in their hands\nThat You, O Lord, might be glorified\nMay Your Kingdom come!" },
            { name: "VERSE", lyrics: "Come together, O people of God\nLet all men see in our unity\nThat we live for Jesus the King!" },
            { name: "REFRAIN", lyrics: "The people of God shines forth like lights\nThe sword of the Spirit is in their hands\nThat You, O Lord, might be glorified\nMay Your Kingdom come!" },
            { name: "VERSE", lyrics: "Let our hearts not tire and fail\nBurning always with the zeal\nFor the service of Your name." },
            { name: "REFRAIN", lyrics: "The people of God shines forth like lights\nThe sword of the Spirit is in their hands\nThat You, O Lord, might be glorified\nMay Your Kingdom come!" },
            { name: "VERSE", lyrics: "Let the Lord God conquer our fear\nSo that we might be free\nTo lay our lives before His throne." },
            { name: "END", lyrics: "The people of God shines forth like lights\nThe sword of the Spirit is in their hands\nThat You, O Lord, might be glorified\nMay Your Kingdom come!\n(2x)\nMay Your Kingdom come! (2x)" }
        ]
    },
    {
        title: "The River Flows",
        sections: [
            { name: "VERSE", lyrics: "From the throne of God\nAnd from the Lamb the river flows.\nLife redeeming, ever healing,\nAge to age it goes.\n\nNo more sun, the Holy One\nOur light that ever shines.\nCrystal clear, the river here\nWill swell our hearts to join the cry!" },
            { name: "REFRAIN", lyrics: "Awake, O sleeper, rise to life\nAnd Christ will give you light.\nLift your head, behold the river!\nHe mounts His throne\nTo shouts of praise\nBe opened, heaven’s gates!\nEnter in, O King of glory!" },
            { name: "VERSE", lyrics: "“Come!” the Spirit calls\nAnd with the bride, the Spirit cries:\n“Souls that thirst can drink\nTheir fill of water without price.”\n\nBlest are those who wash their robes\nTo gain the tree of life\nFace to face with endless grace\nLift up your hearts to hear the cry." },
            { name: "END", lyrics: "Awake, O sleeper, rise to life\nAnd Christ will give you light.\nLift your head, behold the river!\nHe mounts His throne\nTo shouts of praise\nBe opened, heaven’s gates!\nEnter in, O King of glory!" }
        ]
    },
    {
        title: "There Is One Light",
        sections: [
            { name: "VERSE", lyrics: "There is one light no darkness can conquer,\nThat shines from the beauty\nNo eye can contain\nA spoken word that sounds forth creation\nWhich time will not silence, \nAnd all things sustains." },
            { name: "REFRAIN", lyrics: "Behold such love. (One Lord of love.)\nGod’s holy love. (Our Lord of love.)\nYou are holy, You are worthy, \nSent from the Father, Spirit filled one\nWithin the three of love, the holy Son." },
            { name: "VERSE", lyrics: "Of royal blood, the King of all kingship,\nOf holiest lineage as high priest He came.\nThe sacrifice, both temple and off’ring,\nGreat shepherd of mercy,\nThe Lamb who was slain." },
            { name: "REFRAIN", lyrics: "Behold such love. (One Lord of love.)\nGod’s holy love. (Our Lord of love.)\nYou are holy, You are worthy, \nSent from the Father, Spirit filled one\nWithin the three of love, the holy Son." },
            { name: "VERSE", lyrics: "Though in God’s form, \nChrist humbly descended, became as a servant \nThrough death He was raised.\nAnd therefore, God has highly exalted\nThe name of Christ Jesus above every name." },
            { name: "END", lyrics: "Behold such love. (One Lord of love.)\nGod’s holy love. (Our Lord of love.)\nYou are holy, You are worthy, \nSent from the Father, Spirit filled one\nWithin the three of love, the holy Son.\nYou are holy, You are worthy, \nSent from the Father, Spirit filled one\nWithin the three of love, the holy Son." }
        ]
    },
    {
        title: "There is Power",
        sections: [
            { name: "VERSE", lyrics: "There is power in the name in the name above all names\nIn the Son of God who came Jesus Christ the name that saves" },
            { name: "VERSE", lyrics: "There is power in the word piercing hearts with news unheard\nTurning sinners from dead works raising dead men from the earth" },
            { name: "CHORUS", lyrics: "There is power in the Spirit of our God in the name in the blood\nThere is power in the Spirit of our God to proclaim to heal to conquer and to live" },
            { name: "VERSE", lyrics: "There is power in the cross in the blood he shed for us\nTo redeem our every loss to present us pure and just" },
            { name: "CHORUS", lyrics: "There is power in the Spirit of our God in the name in the blood\nThere is power in the Spirit of our God to proclaim to heal to conquer and to live" },
            { name: "BRIDGE", lyrics: "And we shall be filled with power when the Spirit comes on us\nAnd we will lift Jesus higher when the Spirit comes on us\nAnd we shall be filled with power when the Spirit comes on us\nAnd we will lift Jesus higher when the Spirit comes on us" },
            { name: "END", lyrics: "There is power in the Spirit of our God in the name in the blood\nThere is power in the Spirit of our God to proclaim to heal to conquer and to live" }
        ]
    },
    {
        title: "Till You See That Your Home Is In Heaven",
        sections: [
            { name: "END", lyrics: "I will touch your eyes\nDo not lose heart.\nI will touch you again\nTill you see the angels and saints\nSurrounding the throne\n\nTill you see the brightness\nAnd majesty of the throne\nWhere your God reigns forever and ever\nYou’ll see them more clearly\n\nThousands and thousands\nSurrounding the throne\nAnd they’re shouting by night\nAnd by day to your God:\n\nHoly, holy is the Lord God Almighty! (2x)\nAnd I’ll touch you again\nTill you see that your home is in heav’n." }
        ]
    },
    {
        title: "To Love You and To Make You Loved",
        sections: [
            { name: "REFRAIN", lyrics: "To know You, O Lord,\nAnd to know Your love,\nTo love You and to make You loved!" },
            { name: "VERSE", lyrics: "Servants of the Lord\nOurs the upward call:\nTo lay down our lives\nAnd to give our all." },
            { name: "REFRAIN", lyrics: "To know You, O Lord,\nAnd to know Your love,\nTo love You and to make You loved!" },
            { name: "VERSE", lyrics: "For to live is Christ\nAnd to die is gain\nBoth in death and life\nOurs a single aim!" },
            { name: "REFRAIN", lyrics: "To know You, O Lord,\nAnd to know Your love,\nTo love You and to make You loved!" },
            { name: "VERSE", lyrics: "Riches, honor, fame –\nGladly we despise\nThat we may attain\nThe pearl of great price." },
            { name: "REFRAIN", lyrics: "To know You, O Lord,\nAnd to know Your love,\nTo love You and to make You loved!" },
            { name: "VERSE", lyrics: "Nothing in this world\nShall possess our hearts.\nYou alone, O Lord,\nAre the better part!" },
            { name: "END", lyrics: "To know You, O Lord,\nAnd to know Your love,\nTo love You and to make You loved!" }
        ]
    },
    {
        title: "To The King Of Ages",
        sections: [
            { name: "END", lyrics: "To the King of ages,\nImmortal and invisible,\nThe only God! (2x)\n\nBe honor and glory\nForever and ever! (2x)\nAmen!" }
        ]
    },
    {
        title: "To whom shall we go",
        sections: [
            { name: "VERSE", lyrics: "When the battle lines are drawn\nAnd there's war in our land\nAnd our King, the Christ, asks for whom you will fight\nWill you joyfully reply?" },
            { name: "CHORUS", lyrics: "To whom else shall we go?    Who else would we follow?\nWe have come to know that you are the Christ\nTo whom else shall we go?    Who else would we follow?\nWe have come to know and love you O Lord.\nTo whom else shall we go?" },
            { name: "VERSE", lyrics: "When the victory is well in hand\nAnd the King takes his throne\nWill he say to us, \"Will you stay with me,\nCome and live within my home?\"" },
            { name: "CHORUS", lyrics: "To whom else shall we go?    Who else would we follow?\nWe have come to know that you are the Christ\nTo whom else shall we go?    Who else would we follow?\nWe have come to know and love you O Lord.\nTo whom else shall we go?" },
            { name: "BRIDGE", lyrics: "Your words are Spirit and life! (3x)" },
            { name: "END", lyrics: "To whom else shall we go?    Who else would we follow?\nWe have come to know that you are the Christ\nTo whom else shall we go?    Who else would we follow?\nWe have come to know and love you O Lord.\nTo whom else shall we go?" }
        ]
    },
    {
        title: "Unto The House Of The Lord",
        sections: [
            { name: "REFRAIN", lyrics: "I rejoiced when they said to me:\n“Let us go unto the house of the Lord!”\nStanding there, O Jerusalem,\nIn your gates unto the house of the Lord." },
            { name: "VERSE", lyrics: "Look upon Jerusalem\nThe city now restored.\nHere the tribes of Yahweh come\nAs one unto the Lord." },
            { name: "REFRAIN", lyrics: "I rejoiced when they said to me:\n“Let us go unto the house of the Lord!”\nStanding there, O Jerusalem,\nIn your gates unto the house of the Lord." },
            { name: "VERSE", lyrics: "As He ordered Israel\nThey come to praise His name.\nHere where courts of justice\nThe courts of David reign." },
            { name: "REFRAIN", lyrics: "I rejoiced when they said to me:\n“Let us go unto the house of the Lord!”\nStanding there, O Jerusalem,\nIn your gates unto the house of the Lord." },
            { name: "VERSE", lyrics: "Pray for peace, Jerusalem, \nProsperity at home\nPeace inside your city walls\nThat comes from God alone." },
            { name: "REFRAIN", lyrics: "I rejoiced when they said to me:\n“Let us go unto the house of the Lord!”\nStanding there, O Jerusalem,\nIn your gates unto the house of the Lord." },
            { name: "VERSE", lyrics: "Since we are God’s people\nI say, “Peace be to you.”\nMay the God who dwells in us\nYour happiness renew." },
            { name: "END", lyrics: "I rejoiced when they said to me:\n“Let us go unto the house of the Lord!”\nStanding there, O Jerusalem,\nIn your gates unto the house of the Lord." }
        ]
    },
    {
        title: "We Are Men of Jesus Christ",
        sections: [
            { name: "REFRAIN", lyrics: "We are men of Jesus Christ\nWe’ve come to serve the Lord\nIn the strength of God.\nCome, O men of Jesus Christ\nCome, servants of the Lord\nCome and take your stand." },
            { name: "VERSE", lyrics: "The battle rages for the sons of men\nAnd He has made us the sons of God\nThat we may fight now in His battle plan\nFor He is building the kingdom of God\nRuling the nations with sword and rod\nHe is the Word of God!" },
            { name: "REFRAIN", lyrics: "We are men of Jesus Christ\nWe’ve come to serve the Lord\nIn the strength of God.\nCome, O men of Jesus Christ\nCome, servants of the Lord\nCome and take your stand." },
            { name: "VERSE", lyrics: "We struggle not against mere flesh and blood\nBut strive with dark dominions above.\nOur weapons molded not by human hands\nBut by the pow’r of Christ Jesus we stand\nHolding the sword of the Spirit in hand\nHe is the Word of God!" },
            { name: "REFRAIN", lyrics: "We are men of Jesus Christ\nWe’ve come to serve the Lord\nIn the strength of God.\nCome, O men of Jesus Christ\nCome, servants of the Lord\nCome and take your stand." },
            { name: "VERSE", lyrics: "To Christ our King we offer all our lives\nA fragrant offering and sacrifice\nTo live is Christ, to die is gain for us\nTriumphant praises to God we sing\nRejoice in vict’ry with Christ the King\nHe is the Word of God!" },
            { name: "END", lyrics: "We are men of Jesus Christ\nWe’ve come to serve the Lord\nIn the strength of God.\nCome, O men of Jesus Christ\nCome, servants of the Lord\nCome and take your stand." }
        ]
    },
    {
        title: "We Belong to God",
        sections: [
            { name: "VERSE", lyrics: "None of us lives as his own\nAnd none of us dies as his own.\nFor while we live\nWe are responsible to God\nAnd when we die\nWe die as His servants." },
            { name: "REFRAIN", lyrics: "For both in life and death\nWe belong to God.\nThat is why Christ has died for us\nAnd come again.\nWe shall all appear before\nThe judgment seat of God" },
            { name: "REFRAIN", lyrics: "For it is written:\n“Every knee shall bend before Me\nAnd every tongue shall give praise\nto God.”" },
            { name: "VERSE", lyrics: "For we are sure that\nNeither death nor life\nNor this nor future ages nor their powers\nNo height, no depth,\nNo creature that thrives\nWill come between us\nAnd the love of Christ." },
            { name: "REFRAIN", lyrics: "For both in life and death\nWe belong to God.\nThat is why Christ has died for us\nAnd come again.\nWe shall all appear before\nThe judgment seat of God" },
            { name: "REFRAIN", lyrics: "For it is written:\n“Every knee shall bend before Me\nAnd every tongue shall give praise\nto God.”" },
            { name: "VERSE", lyrics: "Give yourselves as sacrifice to God\nHoly and acceptable to the Lord\nDo not allow your minds\nTo be conformed to this age\nBut let your hearts be ruled by His Spirit." },
            { name: "REFRAIN", lyrics: "For both in life and death\nWe belong to God.\nThat is why Christ has died for us\nAnd come again.\nWe shall all appear before\nThe judgment seat of God" },
            { name: "REFRAIN", lyrics: "For it is written:\n“Every knee shall bend before Me\nAnd every tongue shall give praise\nto God.”" },
            { name: "VERSE", lyrics: "Now not all of us shall fall asleep\nBut all of us are to be changed.\nIn the twinkling of an eye\nAs the last trumpet sounds\nWe shall rise victorious in Christ!" },
            { name: "REFRAIN", lyrics: "For both in life and death\nWe belong to God.\nThat is why Christ has died for us\nAnd come again.\nWe shall all appear before\nThe judgment seat of God" },
            { name: "END", lyrics: "For it is written:\n“Every knee shall bend before Me\nAnd every tongue shall give praise\nto God.”" }
        ]
    },
    {
        title: "We Enter In",
        sections: [
            { name: "VERSE", lyrics: "We enter in.  We have been called\nInto the fullness, filling all in all,\nBefore the fount of life\nWhere echoes day and night.\n“Holy!” the heavens cry\nAnd we adore …" },
            { name: "REFRAIN", lyrics: "You are worthy, Lord, we cry\nFace to face and eye to eye.\nAlleluia!  Yours the power,\nYours salvation, O Most High.\nAnd so we adore You.\nO Lord, we adore You as we enter." },
            { name: "VERSE", lyrics: "Behold, He stands, the Son of Man\nFor us once slain\nNow risen as the Lamb.\nWe own the fullness\nOf His priceless gift of love.\n“Holy!” the heavens cry\nAnd we adore …" },
            { name: "REFRAIN", lyrics: "You are worthy, Lord, we cry\nFace to face and eye to eye.\nAlleluia!  Yours the power,\nYours salvation, O Most High.\nAnd so we adore You.\nO Lord, we adore You as we enter." },
            { name: "VERSE", lyrics: "O Spirit, come!\nTake up Your home and fill our hearts\nTo make them all your own.\nConfirm our mortal frame,\nOur hearts and minds enflame.\n“Holy!” the heavens cry\nAnd we adore …" },
            { name: "REFRAIN", lyrics: "You are worthy, Lord, we cry\nFace to face and eye to eye.\nAlleluia!  Yours the power,\nYours salvation, O Most High." },
            { name: "END", lyrics: "You are worthy, Lord, we cry\nFace to face and eye to eye.\nAlleluia!  Yours the power,\nYours salvation, O Most High.\nAnd so we adore You,\nO Lord, we adore You\nAs we enter, we enter in!" }
        ]
    },
    {
        title: "We Exalt Your Name",
        sections: [
            { name: "VERSE", lyrics: "You are the Holy One\nThe Lord Most High\nYou reign in majesty, You reign on high.\nAnd You are the Worthy One\nLamb that was slain.\nYou bought us with Your blood\nAnd with You we’ll reign." },
            { name: "REFRAIN", lyrics: "We exalt Your name!\nHigh and mighty One of Israel.\nWe exalt Your name!\nLead us on to war in the power of Your name.\nWe exalt Your name!\nThe name above all names!\nOur victorious King, we exalt Your name!" },
            { name: "VERSE", lyrics: "You are the King of kings,\nThe Lord of lords.\nAll men will bow to You\nBefore Your throne." },
            { name: "END", lyrics: "We exalt Your name!\nHigh and mighty One of Israel.\nWe exalt Your name!\nLead us on to war in the power of Your name.\nWe exalt Your name!\nThe name above all names!\nOur victorious King, we exalt Your name!" }
        ]
    },
    {
        title: "We Will Magnify",
        sections: [
            { name: "VERSE", lyrics: "O Lord our God,\nHow majestic is your name!\nThe earth is full of your glory.\nO Lord our God,\nYou are robed in majesty.\nYou set your glory above the heavens." },
            { name: "REFRAIN", lyrics: "We will magnify, we will magnify\nThe Lord enthroned in Zion!\nWe will magnify, we will magnify\nThe Lord enthroned in Zion!" },
            { name: "VERSE", lyrics: "O Lord our God,\nYou have established a throne.\nYou reign in righteousness and splendor.\nO Lord our God,\nThe skies are ringing with your praise.\nSoon those on earth will come to worship." },
            { name: "REFRAIN", lyrics: "We will magnify, we will magnify\nThe Lord enthroned in Zion!\nWe will magnify, we will magnify\nThe Lord enthroned in Zion!" },
            { name: "VERSE", lyrics: "O Lord our God,\nThe world was made at your command.\nIn you all things now hold together.\nNow to Him who sits\nOn the throne and to the Lamb\nBe praise and glory and power forever." },
            { name: "END", lyrics: "We will magnify, we will magnify\nThe Lord enthroned in Zion!\nWe will magnify, we will magnify\nThe Lord enthroned in Zion!" }
        ]
    },
    {
        title: "We'll Be Faithful",
        sections: [
            { name: "END", lyrics: "Forgetting what lies behind\nSetting our hearts on the prize\nAlways keeping our eyes on our Lord Jesus.\nWe’re running the race to win\nAll the way to the end\nLaying down every sin\nThat would seek to hinder us.\n\nAnd we’ll be faithful to our calling\nFor You are able to keep us from falling\nFor in Your promise we will trust\nYou’ll be faithful to finish\nThe work You began in us." }
        ]
    },
    {
        title: "While We Still Breathe",
        sections: [
            { name: "VERSE", lyrics: "As a father has compassion on his children\nSo the Lord has compassion on those who fear him\nFor he knows how we are formed\nHe remembers we are dust\nAs for man his days are like the grass\n\nLike the flower of the field he flourishes\nThe wind blows and removes it from its place\nBut from everlasting to everlasting\nThe Lord's love is with those who fear him" },
            { name: "CHORUS", lyrics: "Come let us praise\nCome let us raise our hands to the king\nCome and adore\nJesus our Lord yet while we still breathe\n\nLet us proclaim his wonderful name\nLet our voices rise\nLet us magnify our Lord Jesus Christ" },
            { name: "VERSE", lyrics: "What is man that you are mindful of him\nFor what is our life but a mist\nThat appears for a while and then vanishes\nWe are dust and to dust we shall return\n\nYet how great is the love the Lord has lavished on us\nThat we should be called children of God\nFor he has rescued us from the dominion of darkness\nAnd brought us into the kingdom of his Son" },
            { name: "CHORUS", lyrics: "Come let us praise\nCome let us raise our hands to the king\nCome and adore\nJesus our Lord yet while we still breathe\n\nLet us proclaim his wonderful name\nLet our voices rise\nLet us magnify our Lord Jesus Christ" },
            { name: "END", lyrics: "Come let us praise\nCome let us raise our hands to the king\nCome and adore\nJesus our Lord yet while we still breathe\n\nLet us proclaim his wonderful name\nLet our voices rise\nLet us magnify our Lord Jesus Christ" }
        ]
    },
    {
        title: "Who Is Like Thee",
        sections: [
            { name: "END", lyrics: "So good, so kind, so merciful, so just\nSo pure, so righteous, so with us\nSo wise, so faithful, so full of grace\nSo steadfast, so loving is the Lord.\nWho is like Thee?\nWho is like Thee, O Lord?" }
        ]
    },
    {
        title: "Psalm 73 - Whom Have I in Heaven?",
        sections: [
            { name: "REFRAIN", lyrics: "Whom have I in heaven but You, O Lord?\nAnd when I am with You\nThe earth delights me not.\nThough my heart and my flesh\nShould waste away,\nGod is my rock, my portion forever." },
            { name: "VERSE", lyrics: "Your law is my delight,\nI hasten to keep Your ways.\nI rise to bless You at night,\nBy day I sing Your praise.\n\nThough the wicked do not fear the Lord\nAnd refuse to keep His word,\nI shall love the Lord, my God." },
            { name: "REFRAIN", lyrics: "Whom have I in heaven but You, O Lord?\nAnd when I am with You\nThe earth delights me not.\nThough my heart and my flesh\nShould waste away,\nGod is my rock, my portion forever." },
            { name: "VERSE", lyrics: "The commandment of the Lord is pure\nIt gives light to the eyes\nThe precepts of the Lord are sure\nThey make the simple wise.\n\nMore to be desired than the purest gold\nLet the law of the Lord be told\nThen shall I rejoice in You." },
            { name: "REFRAIN", lyrics: "Whom have I in heaven but You, O Lord?\nAnd when I am with You\nThe earth delights me not.\nThough my heart and my flesh\nShould waste away,\nGod is my rock, my portion forever." },
            { name: "VERSE", lyrics: "I am always with You\nYou hold my right hand\nYou guide me by Your truth\nAnd You lead me to glory.\nMy only joy is to be\nForever praising Thee!\nGod, my Lord, my King, my all." },
            { name: "REFRAIN", lyrics: "Whom have I in heaven but You, O Lord?\nAnd when I am with You\nThe earth delights me not.\nThough my heart and my flesh\nShould waste away,\nGod is my rock, my portion forever." },
            { name: "VERSE", lyrics: "I shall be the loyal friend\nOf all who know Your just decrees\nBut those who defy Your name\nI count as my enemies.\n\nFor the wicked You will destroy\nBut the righteous shall know Your joy\nAnd You shall reign victorious King." },
            { name: "END", lyrics: "Whom have I in heaven but You, O Lord?\nAnd when I am with You\nThe earth delights me not.\nThough my heart and my flesh\nShould waste away,\nGod is my rock, my portion forever." }
        ]
    },
    {
        title: "Worship The Lord",
        sections: [
            { name: "END", lyrics: "Worship the Lord in Spirit and truth\nWorship the Lord in love. (2x)\n\nLet us fix our eyes on Him\nWith pure hearts rise to Him\nThe King of glory in our midst. (2x)" }
        ]
    },
    {
        title: "You Are My Delight",
        sections: [
            { name: "REFRAIN", lyrics: "You, O Lord, are all my delight.\nI long to behold You face to face\nTo dwell in Your courts, my Lord,\nDay and night.\nFor You are our only good\nAnd in You is the fullness of life." },
            { name: "END", lyrics: "Spirit of God, come raise our minds\nBeyond the love of earthly things.\nTrain our hearts\nTo seek the things of heaven\nAnd fix our eyes\nOn the hope of eternal life." }
        ]
    },
    {
        title: "You Are Our Treasure",
        sections: [
            { name: "VERSE", lyrics: "Blessed be our God and King\nWho gives us all good things\nWho loved us though His enemies\nWho cleansed us from our sins\n\nWho offers us eternal life\nWho saves and sets us free.\nO what can we give back to Him\nWho gives eternally?" },
            { name: "REFRAIN", lyrics: "You, O Lord, are all our treasure\nTo do Your will our pleasure\nOur hearts belong to You alone.\nTo You, our glorious King\nWith joy our lives we bring\nAnd lay them down before Your throne,\nBefore Your throne." },
            { name: "VERSE", lyrics: "You are called to love your God\nWith all your heart and mind.\nFollow Me and perfect be\nAnd leave all else behind.\n\nCome, my brothers,\nWe are lovers of the cross of Christ.\nAs one man let’s take our stand\nWith Jesus, Lord of life." },
            { name: "REFRAIN", lyrics: "You, O Lord, are all our treasure\nTo do Your will our pleasure\nOur hearts belong to You alone.\nTo You, our glorious King\nWith joy our lives we bring\nAnd lay them down before Your throne,\nBefore Your throne." },
            { name: "VERSE", lyrics: "We have died to fear and pride\nAnd now are free to fight\nTo break the chains of death and pain\nTo end the reign of night\n\nTo see all men acknowledge Him\nTo boldly speak His word\nSide by side we live and die\nAs servants of our Lord." },
            { name: "REFRAIN", lyrics: "You, O Lord, are all our treasure\nTo do Your will our pleasure\nOur hearts belong to You alone.\nTo You, our glorious King\nWith joy our lives we bring\nAnd lay them down before Your throne,\nBefore Your throne." },
            { name: "VERSE", lyrics: "We fix our gaze upon the days\nWhen God will reign in peace\nWhen we shall find our heart’s delight\nAnd see Him face to face.\n\nBut while our King goes conquering\nAnd war is in the land\nOur glory is to fight by Him\nA two-edged sword in hand." },
            { name: "END", lyrics: "You, O Lord, are all our treasure\nTo do Your will our pleasure\nOur hearts belong to You alone.\nTo You, our glorious King\nWith joy our lives we bring\nAnd lay them down before Your throne,\nBefore Your throne." }
        ]
    },
    {
        title: "You the fount",
        sections: [
            { name: "VERSE", lyrics: "You, the fount who quenches our thirsting,\nAll restless longings rest only in you.\nWell overflowing, the source of all goodness,\nNothing less for me than ev’rything for thee!" },
            { name: "REFRAIN", lyrics: "Claim me, Lord, for your own;\nCome and take me by fire.\nCome and capture my heart,\nThat my heart might be free!" },
            { name: "REFRAIN", lyrics: "Come and widen my soul,\nAnd then raise my desires,\nUntil all that I am is in you,\nAnd you are in me." },
            { name: "VERSE", lyrics: "Make of me a temple for glory.\nLord, make my heart a home for your throne.\nYours be the presence I bring all around me,\nYour love in all my ways,\nYour likeness in my face!" },
            { name: "REFRAIN", lyrics: "Claim me, Lord, for your own;\nCome and take me by fire.\nCome and capture my heart,\nThat my heart might be free!" },
            { name: "REFRAIN", lyrics: "Come and widen my soul,\nAnd then raise my desires,\nUntil all that I am is in you,\nAnd you are in me." },
            { name: "VERSE", lyrics: "How I long to see you in glory.\nWhen shall these eyes\nBe filled with your gaze?\nFor now, in this life,\nWe wander as pilgrims;\nHeaven is our home,\nForever is your grace!" },
            { name: "REFRAIN", lyrics: "Claim me, Lord, for your own;\nCome and take me by fire.\nCome and capture my heart,\nThat my heart might be free!" },
            { name: "REFRAIN", lyrics: "Come and widen my soul,\nAnd then raise my desires,\nUntil all that I am is in you,\nAnd you are in me." },
            { name: "REFRAIN", lyrics: "Claim me, Lord, for your own;\nCome and take me by fire.\nCome and capture my heart,\nThat my heart might be free!" },
            { name: "REFRAIN", lyrics: "Come and widen my soul,\nAnd then raise my desires,\nUntil all that I am is in you,\nAnd you are in me." },
            { name: "END", lyrics: "You are in me, Lord,\nAnd I am in thee." }
        ]
    },
    {
        title: "I Shall Not Want",
        sections: [
            { name: "VERSE", lyrics: "I shall not want, O Lord, \nYou are enough for me.\nMy God and my all, \nNothing else I desire\nThan to have God alone.\n\nTake my off’ring of praise,\nAll my thoughts, my desires,\nMy life and my spirit.\nIn You I shall not want." },
            { name: "END", lyrics: "I shall not want, O Lord, \nMy God and my All." }
        ]
    },
    {
        title: "You will receive power",
        sections: [
            { name: "VERSE", lyrics: "In the time after the suff’ring of the Lord\nHe showed us many ways\nHe was still alive\nAnd He told us not to leave Jerusalem\nUntil we are bold with power on High" },
            { name: "REFRAIN", lyrics: "You will receive power\nWhen the Holy Spirit falls upon You\nAnd you will be My witnesses\nTo the ends of all the earth" },
            { name: "VERSE", lyrics: "In the time after the suff’ring of the Lord\nHe showed us many ways\nHe was still alive\nAnd He told us not to leave Jerusalem\nUntil we are bold with power on High" },
            { name: "END", lyrics: "You will receive power\nWhen the Holy Spirit falls upon You\nAnd you will be My witnesses\nTo the ends of all the earth (2x)\nTo the ends of all the earth" }
        ]
    },
    {
        title: "We come to you",
        sections: [
            { name: "VERSE", lyrics: "We come to Mount Zion\nThe heavenly Jerusalem the city of our God\nTo thousands upon thousands of angels gathered round\nWe come to praise the Lord of Hosts" },
            { name: "CHORUS", lyrics: "We come to you to the living God\nYou who bought us at a price we come freely\nUnto Jesus Christ our Lord\nOnce rejected now become our cornerstone\nO Son of God we come to you" },
            { name: "VERSE", lyrics: "We come to temple courts\nThe true and better dwelling place not made with human hands\nWhere our High Priest has entered once for all to give\nHis life his perfect holy blood" },
            { name: "CHORUS", lyrics: "We come to you to the living God\nYou who bought us at a price we come freely\nUnto Jesus Christ our Lord\nOnce rejected now become our cornerstone\nO Son of God we come to you" },
            { name: "VERSE", lyrics: "We come with nothing in our hands\nNo worthy sacrifice to bring yet offering our lives\nFrom every tribe and nation all corners of the earth\nWe come to serve the Lord of all" },
            { name: "END", lyrics: "We come to you to the living God\nYou who bought us at a price we come freely\nUnto Jesus Christ our Lord\nOnce rejected now become our cornerstone\nO Son of God we come to you\nO Son of God we come to you" }
        ]
    },
    {
        title: "The Lord of Hosts Is Here",
        sections: [
            { name: "VERSE", lyrics: "The Lord of hosts is here\nOur God is before us\nAnd we have only to worship him\nAs he brings his Word" },
            { name: "CHORUS", lyrics: "Hallelujah\nSpeak O Lord\nDo not be silent\nWe wait for you\n\nHallelujah\nAnd we will lift our hands as you appear\nThe Lord of hosts is here" },
            { name: "VERSE", lyrics: "The Lord of hosts is King\nHe is seated upon his throne\nAnd who are we that the Lord of hosts\nWould make of us his own" },
            { name: "END", lyrics: "Hallelujah\nSpeak O Lord\nDo not be silent\nWe wait for you\n\nHallelujah\nAnd we will lift our hands as you appear\nThe Lord of hosts is here" }
        ]
    },
    {
        title: "I Saw the King",
        sections: [
            { name: "VERSE", lyrics: "I saw the armies of angels arising\nThe banners of heaven appeared on the clouds\nI saw the King in his glory arriving\nThe cry goes up our salvation is near" },
            { name: "VERSE", lyrics: "I heard the tongues of the holy ones singing\nAnthems of cherubim thund’ring on high\nVoices on voices in harmony ringing\nAll God’s redeemed join the heavenly choir" },
            { name: "CHORUS", lyrics: "See the King upon his throne\nSee the victory he has won\nSee his love and mercy saving\nJesus reigns forevermore" },
            { name: "VERSE", lyrics: "Under his feet ev’ry mountain shall crumble\nValleys arise to prepare him a way\nSo shall the prideful before him be humbled\nAnd the afflicted be raised to his side" },
            { name: "CHORUS", lyrics: "See the King upon his throne\nSee the victory he has won\nSee his love and mercy saving\nJesus reigns forevermore" },
            { name: "VERSE", lyrics: "Look to his coming you sleepers awaken\nWhere he approaches the shadows depart\nFeel from your arms Satan’s fetters are breaking\nLift up your heads and rejoice in the light" },
            { name: "CHORUS", lyrics: "See the King upon his throne\nSee the victory he has won\nSee his love and mercy saving\nJesus reigns forevermore" },
            { name: "END", lyrics: "See the King upon his throne\nSee the victory he has won\nSee his love and mercy saving\nJesus reigns forevermore\nJesus reigns forevermore" }
        ]
    }
];