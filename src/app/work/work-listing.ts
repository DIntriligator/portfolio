export interface WorkItem {
    image: string;
    icon: string;
    title: string;
    description: string;
    link: string;
    buttonTitle: string;
}

export const WORK_LISTING: WorkItem[] = [
    {
        image: '/assets/solcommander.png',
        icon: 'gamepad',
        title: 'SOL COMMANDER',
        // tslint:disable-next-line:max-line-length
        description: '<p>Sol Commander is a fluid micro tactics game in a turn based, pickup and play package.</p> <p>Working on Sol Commander has been a great way to spend some time working on a personal project. It is a collaboration with my colleague Alex Taber who is a master at designing game mechanics while I handled all of the GUI and graphics work. It was quite a challenge learning how game engines work and how to code for them, but it was very rewarding when it all started to come together. Being mainly web developers, we implemented an online multiplayer mode.</p> <p>I also designed all of the promotional material such as the website, pins, banners and hats.</p>',
        link: 'https://www.solcommandergame.com',
        buttonTitle: 'SOL COMMANDER WEBSITE'
    },
    {
        image: '/assets/employeeapp.png',
        icon: 'keyboard-o',
        title: 'THE EMPLOYEE APP',
        // tslint:disable-next-line:max-line-length
        description: '<p>The Employee App is an app that helps large companies communicate with their employees. They have clients from all around the world including companies such as Northwell Health and Toyota.</p> <p>They entrusted me with building them a top of the line, SEO friendly website. It was such a pleasure working for them because they were very receptive to my UI and UX decisions. The trusted me to deliver and I was able to give them a website they are really proud to show off!</p>',
        link: 'https://www.theemployeeapp.com',
        buttonTitle: 'THE EMPLOYEE APP WEBSITE'
    },
    {
        image: '/assets/peekskillarts.png',
        icon: 'keyboard-o',
        title: 'PEEKSKILL ARTS ALLIANCE',
        // tslint:disable-next-line:max-line-length
        description: '<p>The Peekskill Arts Alliance is a small non-profit group of artists. They were in need of a new website and came to me to get it done.</p> <p>There were a number of interesting requirements for this project. Before this website was made, all of the membership fees were tracked by hand and emails to members who lapsed on payments were written by hand. I was able to automate this entire process so no one had to manually do it and they could just focus on doing good with the money raised.</p> <p>On their previous site they offered online galleries to artists who paid into a higher tier of membership but this process was also done by a board member who would collect and load all of the images. I was also able to automate this away by allowing members who paid more to manage their own gallery whenever they pleased by just logging in!</p>',
        link: 'https://www.peekskillartsalliance.org/',
        buttonTitle: 'PEEKSKILL ARTS ALLIANCE WEBSITE'
    },
];
