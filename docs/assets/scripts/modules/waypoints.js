import waypotints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

export default class Waypoints {
    constructor(who){
        this.Talks = document.querySelectorAll(`.${who}-section__talkbox > p`);
        this.Icon = document.querySelector(`.${who}-section__icon`);
        this.Trigger = document.querySelector(`.${who}-section__talkbox`);
        this.TriggerAfter = document.querySelector(`.${who}-section__talkbox p:last-child`);
        this.footer = document.querySelector('.footer');
        this.wishIcon = document.querySelector('.wish-icon');
        }

    /* hideInitially() {
        const lists = [];
        const arrayLists = [];
        lists.concat(this.talks, this.souziTalks, this.banwanIcon).forEach(current => {
            arrayLists.push(Array.from(current));
        })
        arrayLists.forEach(value => {
            value.forEach(currentDOM => {
                currentDOM.classList.add('talk-is-invisible');
            })
        })
    }
 */
    popUpTalk(offsetF, offsetA) {
        let object = this.Talks;
        Array.from(object).forEach((value) => {
            new Waypoint({
                element: value,
                handler: () => {
                    value.classList.toggle('talk-is-visible');
                },
                offset: `${offsetF}%`
            });

            new Waypoint({
                element: value,
                handler: () => {
                    value.classList.toggle('talk-is-visible');
                },
                offset: `${offsetA}%`
            });
        });
    }

    popUpIcon(offsetF,offsetA) {
        const that = this;
        let object = this.Icon;
        let trigger = this.Trigger;
        let triggerAfter= this.TriggerAfter;
        new Waypoint({
            element: trigger,
            handler: () => {
                object.classList.toggle('icon-is-visible');
            },
            offset: `${offsetF}%`
        });

        new Waypoint({
            element: triggerAfter,
            handler: () => {
                console.log('activate icon after');
                object.classList.toggle('icon-is-visible');
            },
            offset: `${offsetA}%`
        });
    }
    
    popUpWishIcon(offsetF,offsetA) {
        let object = this.wishIcon;
        let trigger = this.footer;
        new Waypoint({
            element: trigger,
            handler: () => {
                object.classList.toggle('icon-is-visible');
            },
            offset: `${offsetF}%`
        });
    }

}
