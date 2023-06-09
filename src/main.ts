/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.area.onEnter('indice1').subscribe(() => {
        // const today = new Date();
        // const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("indice1Popup", "C'est l'indice 1", []);
    })

    WA.room.area.onLeave('indice1').subscribe(closePopup)

    WA.room.area.onEnter('indice2').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice2Popup", "C'est l'indice 2", []);
    })

    WA.room.area.onLeave('indice2').subscribe(closePopup)

    WA.room.area.onEnter('indice3').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice3Popup", "C'est l'indice 3", []);
    })

    WA.room.area.onLeave('indice3').subscribe(closePopup)

    WA.room.area.onEnter('indice4').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice4Popup", "C'est l'indice 4", []);
    })

    WA.room.area.onLeave('indice4').subscribe(closePopup)

    WA.room.area.onEnter('indice5').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice5Popup", "C'est l'indice 5", []);
    })

    WA.room.area.onLeave('indice5').subscribe(closePopup)

    WA.room.area.onEnter('indice6').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice6Popup", "C'est l'indice 6", []);
    })

    WA.room.area.onLeave('indice6').subscribe(closePopup)

    WA.room.area.onEnter('indice7').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice7Popup", "C'est l'indice 7", []);
    })

    WA.room.area.onLeave('indice7').subscribe(closePopup)

    WA.room.area.onEnter('indice8').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice8Popup", "C'est l'indice 8", []);
    })

    WA.room.area.onLeave('indice8').subscribe(closePopup)

    WA.room.area.onEnter('indice9').subscribe(() => {
        currentPopup = WA.ui.openPopup("indice9Popup", "C'est l'indice 9", []);
    })

    WA.room.area.onLeave('indice9').subscribe(closePopup)


    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

const config = [
    {
        zone: 'needHelp',
        message: 'Do you need some guidance? We are happy to help you out.',
        cta: [
            {
                label: 'Meet us',
                className: 'primary',
                callback: () => WA.openTab('https://play.staging.workadventu.re/@/tcm/workadventure/wa-village'),
            }
        ]
    },
    {
        zone: 'followUs',
        message: 'Hey! Have you already started following us?',
        cta: [
            {
                label: 'LinkedIn',
                className: 'primary',
                callback: () => WA.openTab('https://www.linkedin.com/company/workadventu-re'),
            },
            {
                label: 'Twitter',
                className: 'primary',
                callback: () => WA.openTab('https://twitter.com/workadventure_'),
            }
        ]
    },
]
WA.onEnterZone('needHelp', () => {
    currentZone = 'needHelp'
    openPopup(currentZone, currentZone + 'Popup')
});
WA.onEnterZone('followUs', () => {
    currentZone = 'followUs'
    openPopup(currentZone, currentZone + 'Popup')
});
WA.onLeaveZone('needHelp', closePopup);
WA.onLeaveZone('followUs', closePopup);


function openPopup(zoneName: string, popupName: string) {
    const zone = config.find((item) => {
        return item.zone == zoneName
    });
    if (typeof zone !== 'undefined') {
        // @ts-ignore otherwise we can't use zone.cta object
        currentPopup = WA.openPopup(popupName, zone.message, zone.cta)
    }
}

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
