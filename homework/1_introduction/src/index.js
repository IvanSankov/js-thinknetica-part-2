import ReactDom from 'react-dom';
import React from 'react';
import App from "./App";

const book = {
    title: 'Star Wars: Darth Bane: Path of Destruction',
    shortDescription: 'Path of Destruction is a novel in the Star Wars saga and is centered on the life of ' +
        'Darth Bane and the fall of the first Sith order. It was written by Drew Karpyshyn and was released ' +
        'on September 26, 2006. The book takes place roughly 1,000 years before Star Wars Episode IV: A New Hope.',
    pages: 389,
    language: 'English',
    progress: 1,
    cover: '//upload.wikimedia.org/wikipedia/en/thumb/9/92/Star_Wars_-_Darth_Bane_-_Path_of_Destruction_cover.jpg/220px-Star_Wars_-_Darth_Bane_-_Path_of_Destruction_cover.jpg',
    author: {
        name: 'Drew Karpyshyn',
        avatar: '//upload.wikimedia.org/wikipedia/commons/thumb/1/18/Drew_Karpyshyn_-_Lucca_Comics_%26_Games_2014.JPG/200px-Drew_Karpyshyn_-_Lucca_Comics_%26_Games_2014.JPG',
        email: 'drew.karpyshyn@hotmail.com',
        bio: 'Drew Karpyshyn (born July 28, 1971) is a Canadian video game scenario writer, scriptwriter and ' +
            'novelist. He served as a senior writer for BioWare\'s Star Wars: Knights of the Old Republic and ' +
            'lead writer for the first two Mass Effect video games. He left BioWare in 2012 to focus on his Chaos ' +
            'Born novels, and returned to it three years later in 2015. On March 9, 2018, he announced he was once ' +
            'again leaving BioWare to focus on his independent work.',
    },
    minPrice: 100,
    desiredPrice: 500,
    currentSum: 1,
    expectedSum: 50,
};

ReactDom.render(
    <App book={book} />,
    document.getElementById('root')
);