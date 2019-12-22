const contentObject = {
    'Web Design':
        {
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt
                        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            image: 'images/background/Layer%209.png'
        },


    'Graphic Design':
        {
            text: `Anivia is a benevolent winged spirit who endures endless cycles of life, death, and rebirth to protect
                the Freljord. A demigod born of unforgiving ice and bitter winds, she wields those elemental powers to
                 thwart any who dare disturb her homeland. Anivia guides and protects the tribes of the harsh north, who
                 revere her as a symbol of hope, and a portent of great change. She fights with every ounce of her
                   being, knowing that through her sacrifice, her memory will endure, and she will be reborn into a new
                  tomorrow.`,
            image: './images/gallery/2.png'
        },
    'Online Support':{
        text: `In Noxus, warriors known as reckoners face one another in arenas where blood is spilled and strength
              tested—but none has ever been as celebrated as Draven. A former soldier, he found that the crowds
              uniquely appreciated his flair for the dramatic, not to mention the spray of blood from each of his
               spinning axes. Addicted to the spectacle of his own brash perfection, Draven has sworn to defeat
            whomever he must to ensure that his name is chanted throughout the empire forever more.`,

        image: './images/gallery/3.png'
    } ,

    'App Design': {
        text: `A proud and noble soldier, Garen fights at the head of the Dauntless Vanguard. He is popular among his fellows, and respected well enough by his enemies—not least as a scion of the prestigious Crownguard
            family, entrusted with defending Demacia and its ideals. Clad in magic-resistant armor and bearing a
            mighty broadsword, Garen stands ready to confront mages and sorcerers on the field of battle, in a
            veritable whirlwind of righteous steel.`,
        image: './images/gallery/4.png'
    },
    'Online Marketing': {
        text: `Decisive in judgment and lethal in combat, Katarina is a Noxian assassin of the highest caliber. Eldest
            daughter to the legendary General Du Couteau, she made her talents known with swift kills against
            unsuspecting enemies. Her fiery ambition has driven her to pursue heavily-guarded targets, even at the
            risk of endangering her allies—but no matter the mission, Katarina will not hesitate to execute her
            duty amid a whirlwind of serrated daggers.`,
        image: './images/gallery/5.png'
    },

    'Seo Service': {
        text: `Anivia is a benevolent winged spirit who endures endless cycles of life, death, and rebirth to protect
                the Freljord. A demigod born of unforgiving ice and bitter winds, she wields those elemental powers to
                 thwart any who dare disturb her homeland. Anivia guides and protects the tribes of the harsh north, who
                 revere her as a symbol of hope, and a portent of great change. She fights with every ounce of her
                   being, knowing that through her sacrifice, her memory will endure, and she will be reborn into a new
                  tomorrow.`,
        image: './images/gallery/6.png'
    },

}

const itemsList = document.querySelector('.items-service');
const tabContent = document.querySelector('.service-content');
const tabContentImage = document.querySelector('.tabs-image');


itemsList.addEventListener('click', (e) => {
    console.log(e.currentTarget)
    const activTab = document.querySelector('.active');
    if (activTab) {
        activTab.classList.remove('active');
    }

    const menuItem = e.target;

    const menuItemText = menuItem.innerText;
    menuItem.classList.add('active');

    const tabText = contentObject[menuItemText].text;
    const tabImage = contentObject[menuItemText].image;

    tabContent.innerText = tabText.replace(/\r?\n/g,'');
    tabContentImage.src = tabImage;

});
