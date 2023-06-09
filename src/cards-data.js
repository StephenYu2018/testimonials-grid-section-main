import danielImageURL from '../public/image-daniel.jpg';
import jonathanImageURL from '../public/image-jonathan.jpg';
import jeanetteImageURL from '../public/image-jeanette.jpg';
import patrickImageURL from '../public/image-patrick.jpg';
import kiraImageURL from '../public/image-kira.jpg';

export const cards = [
  {
    content: {
      pictureURL: danielImageURL,
      fullName: 'Daniel Clifford',
      title: `I received a job offer mid-course, and the subjects I learned 
      were current, if not more so, in the company I joined. I honestly feel 
      I got every penny’s worth.`,
      quote: `“ I was an EMT for many years before I joined the bootcamp. 
      I’ve been looking to make a transition and have heard some people who 
      had an amazing experience here. I signed up for the free intro course 
      and found it incredibly fun! I enrolled shortly thereafter. The next 
      12 weeks was the best - and most grueling - time of my life. Since 
      completing the course, I’ve successfully switched careers, working as 
      a Software Engineer at a VR startup. ”`
    },
    style: {
      gridArea: `row-span-1 xl:row-[1] col-[1] xl:col-[1_/_span_2]`,
      backgroundColor: 'bg-moderate-violet',
      textColor: 'light',
      pictureBorderColor: 'border-light-gray/40',
      quoteRightPadding: 'pr-4 xl:pr-0 ',
      spaceBetweenProfileAndTitle: 'xl:mt-[1rem]',
      spaceBetweenTitleAndQuote: 'xl:mt-[1rem]'
    }
  },
  {
    content: {
      pictureURL: jonathanImageURL,
      fullName: 'Jonathan Walters',
      title: 'The team was very supportive and kept me motivated',
      quote: `“ I started as a total newbie with virtually no coding skills. 
      I now work as a mobile engineer for a big company. This was one of the 
      best investments I’ve made in myself. ”`
    },
    style: {
      gridArea: `row-span-1 xl:row-[1] col-span-1 xl:col-[3]`,
      backgroundColor: 'bg-very-dark-grayish-blue',
      textColor: 'light',
      pictureBorderColor: 'border-very-dark-grayish-blue',
      quoteRightPadding: '',
      spaceBetweenProfileAndTitle: 'xl:mt-[1rem]',
      spaceBetweenTitleAndQuote: 'xl:mt-[1rem]'
    }
  },
  {
    content: {
      pictureURL: jeanetteImageURL,
      fullName: 'Jeanette Harmon',
      title: 'An overall wonderful and rewarding experience',
      quote: `“ Thank you for the wonderful experience! I now have a job I 
      really enjoy, and make a good living while doing something I love. ”`
    },
    style: {
      gridArea: `row-span-1 xl:row-[2] col-span-1 xl:col-[1] xl:py-[1.625rem]`,
      backgroundColor: 'bg-white',
      textColor: 'dark',
      pictureBorderColor: 'border-white',
      quoteRightPadding: 'xl:pr-2 ',
      spaceBetweenProfileAndTitle: 'xl:mt-[1.2rem]',
      spaceBetweenTitleAndQuote: 'xl:mt-[1.2rem]'
    }
  },
  {
    content: {
      pictureURL: patrickImageURL,
      fullName: 'Patrick Abrams',
      title: `Awesome teaching support from TAs who did the bootcamp 
      themselves. Getting guidance from them and learning from their 
      experiences was easy.`,
      quote: `“ The staff seem genuinely concerned about my progress which I 
      find really refreshing. The program gave me the confidence necessary 
      to be able to go out in the world and present myself as a capable 
      junior developer. The standard is above the rest. You will get the 
      personal attention you need from an incredible community of smart and 
      amazing people. ”`
    },
    style: {
      gridArea: `row-span-1 xl:row-[2] col-span-1 xl:col-[2_/_span_2]
      xl:py-[1.625rem]`,
      backgroundColor: 'bg-very-dark-blackish-blue',
      textColor: 'light',
      pictureBorderColor: 'border-moderate-violet',
      quoteRightPadding: 'xl:pr-2 ',
      spaceBetweenProfileAndTitle: 'xl:mt-[1.2rem]',
      spaceBetweenTitleAndQuote: 'xl:mt-[1.2rem]'
    }
  },
  {
    content: {
      pictureURL: kiraImageURL,
      fullName: 'Kira Whittle',
      title: 'Such a life-changing experience. Highly recommended!',
      quote: `“ Before joining the bootcamp, I’ve never written a line of 
      code. I needed some structure from professionals who can help me learn 
      programming step by step. I was encouraged to enroll by a former 
      student of theirs who can only say wonderful things about the program. 
      The entire curriculum and staff did not disappoint. They were very 
      hands-on and I never had to wait long for assistance. The agile team 
      project, in particular, was outstanding. It took my learning to the 
      next level in a way that no tutorial could ever have. In fact, I’ve 
      often referred to it during interviews as an example of my developent 
      experience. It certainly helped me land a job as a full-stack 
      developer after receiving multiple offers. 100% recommend! ”`
    },
    style: {
      gridArea: `row-span-1 xl:row-[1_/_span_2] col-span-1 xl:col-[4]
      xl:py-[1.625rem]`,
      backgroundColor: 'bg-white',
      textColor: 'dark',
      pictureBorderColor: 'border-white',
      quoteRightPadding: '',
      spaceBetweenProfileAndTitle: 'xl:mt-[1rem]',
      spaceBetweenTitleAndQuote: 'xl:mt-[1.33rem]'
    }
  },
];