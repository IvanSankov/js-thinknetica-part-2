import React from "react";
import SimilarBook from "./SimilarBook";

export default class SimilarBookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      similarBooks: getSimilarBookList(props.book.id)
    };

    this.handlerRemoveBook = this.handlerRemoveBook.bind(this);
  }

  handlerRemoveBook(event) {
    const bookId = parseInt(event.target.dataset.bookId) ;

    this.setState(state => ({
      similarBooks: state.similarBooks.filter(book => book.id !== bookId)
    }));
  }

  render() {
    const { similarBooks } = this.state;

    if (similarBooks.length === 0) {
      return null;
    }

    return (
      <div className="row">
        <div className="col-sm-12">
          <h3>Similar books</h3>
          <div className="row">
            { similarBooks.slice(0,3).map(similarBook => (
                <SimilarBook key={similarBook.id} book={similarBook} handlerRemoveBook={this.handlerRemoveBook}/>
              )
            ) }
          </div>
        </div>
      </div>
    );
  }
}

function getSimilarBookList(bookId) {
  return [
    {
      "id": 1,
      "title": "Star Wars: Darth Bane: Rule of Two",
      "authors": [
        {
          "id": 1,
          "name": "Drew Karpyshyn",
          "avatar": "//upload.wikimedia.org/wikipedia/commons/thumb/1/18/Drew_Karpyshyn_-_Lucca_Comics_%26_Games_2014.JPG/200px-Drew_Karpyshyn_-_Lucca_Comics_%26_Games_2014.JPG",
          "email": "drew.karpyshyn@hotmail.com",
          "bio": "Drew Karpyshyn (born July 28, 1971) is a Canadian video game scenario writer, scriptwriter and novelist. He served as a senior writer for BioWare's Star Wars: Knights of the Old Republic and lead writer for the first two Mass Effect video games. He left BioWare in 2012 to focus on his Chaos Born novels, and returned to it three years later in 2015. On March 9, 2018, he announced he was once again leaving BioWare to focus on his independent work."
        }
      ],
      "cover": "//upload.wikimedia.org/wikipedia/en/thumb/1/13/RuleofTwo.jpg/220px-RuleofTwo.jpg"
    },
    {
      "id": 2,
      "title": "Star Wars: Darth Bane: Dynasty of Evil",
      "authors": [
        {
          "id": 1,
          "name": "Drew Karpyshyn",
          "avatar": "//upload.wikimedia.org/wikipedia/commons/thumb/1/18/Drew_Karpyshyn_-_Lucca_Comics_%26_Games_2014.JPG/200px-Drew_Karpyshyn_-_Lucca_Comics_%26_Games_2014.JPG",
          "email": "drew.karpyshyn@hotmail.com",
          "bio": "Drew Karpyshyn (born July 28, 1971) is a Canadian video game scenario writer, scriptwriter and novelist. He served as a senior writer for BioWare's Star Wars: Knights of the Old Republic and lead writer for the first two Mass Effect video games. He left BioWare in 2012 to focus on his Chaos Born novels, and returned to it three years later in 2015. On March 9, 2018, he announced he was once again leaving BioWare to focus on his independent work."
        }
      ],
      "cover": "//upload.wikimedia.org/wikipedia/en/e/ee/Karpyshyn_-_Star_Wars_-_Darth_Bane_-_Dynasty_of_Evil_Coverart.png"
    },
    {
      "id": 3,
      "title": "Star Wars: The Old Republic: Revan",
      "authors": [
        {
          "id": 1,
          "name": "Drew Karpyshyn",
          "avatar": "//upload.wikimedia.org/wikipedia/commons/thumb/1/18/Drew_Karpyshyn_-_Lucca_Comics_%26_Games_2014.JPG/200px-Drew_Karpyshyn_-_Lucca_Comics_%26_Games_2014.JPG",
          "email": "drew.karpyshyn@hotmail.com",
          "bio": "Drew Karpyshyn (born July 28, 1971) is a Canadian video game scenario writer, scriptwriter and novelist. He served as a senior writer for BioWare's Star Wars: Knights of the Old Republic and lead writer for the first two Mass Effect video games. He left BioWare in 2012 to focus on his Chaos Born novels, and returned to it three years later in 2015. On March 9, 2018, he announced he was once again leaving BioWare to focus on his independent work."
        }
      ],
      "cover": "//upload.wikimedia.org/wikipedia/en/1/1f/Revan.jpg"
    },
    {
      "id": 4,
      "title": "Star Wars: The Old Republic: Annihilation",
      "authors": [
        {
          "id": 1,
          "name": "Drew Karpyshyn",
          "avatar": "//upload.wikimedia.org/wikipedia/commons/thumb/1/18/Drew_Karpyshyn_-_Lucca_Comics_%26_Games_2014.JPG/200px-Drew_Karpyshyn_-_Lucca_Comics_%26_Games_2014.JPG",
          "email": "drew.karpyshyn@hotmail.com",
          "bio": "Drew Karpyshyn (born July 28, 1971) is a Canadian video game scenario writer, scriptwriter and novelist. He served as a senior writer for BioWare's Star Wars: Knights of the Old Republic and lead writer for the first two Mass Effect video games. He left BioWare in 2012 to focus on his Chaos Born novels, and returned to it three years later in 2015. On March 9, 2018, he announced he was once again leaving BioWare to focus on his independent work."
        }
      ],
      "cover": "//upload.wikimedia.org/wikipedia/en/thumb/0/07/Old_Republic_Annihilation_Cover.jpg/220px-Old_Republic_Annihilation_Cover.jpg"
    }
  ]
}
