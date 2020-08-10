import axios from "axios";

const TOKEN = "key9qHgAnpNZcjAed";

export default class ThinkneticaClient {
  constructor() {
    this._client = axios.create({
      baseURL: "https://api.airtable.com/v0/appO2rHjK1vDl6tpx/",
      timeout: 7000,
      headers: {
        "Authorization": `Bearer ${TOKEN}`,
      },
    });

    this._cancelToken = axios.CancelToken;
    this._source = this._cancelToken.source();
  }

  getBookById(bookId) {
    return this._client.get(`book/${bookId}`, {
      cancelToken: this._source.token
    })
      .then(response => response.data)
      .then(mapBookResponse2BookProps);
  }

  abort() {
    this._source.cancel('Operation canceled by the user.');
  }
}

/**
 * Функция, которая отображает данные из ответа API в объект, который использует компонент Book.js
 *
 * @param {object} data
 * @return {{cover, pages: (number|any), subscribers: number, progress, language, id: *, shortDescription: (string|string), title: *}}
 */
function mapBookResponse2BookProps(data) {
  const book = {
    id: data.id,
    title: data.fields.title,
    shortDescription: data.fields.shortDescription,
    pages: data.fields.pages,
    subscribers: data.fields.subscribers,
    language: data.fields.language,
    progress: data.fields.progress,
    cover: data.fields.cover,
    minPrice: data.fields.minPrice,
    desiredPrice: data.fields.desiredPrice,
    currentSum: data.fields.currentSum,
    expectedSum: data.fields.expectedSum
  };

  const fnBookAuthors = mapLinkedAuthorsResponse2AuthorListProps(
    data.fields,
    'Name (from author)',
    'avatar (from author)',
    'email (from author)',
    'bio (from author)'
  );

  book.authors = data.fields.authors.map(fnBookAuthors);

  const similarBookTitle = data.fields['title (from similarBooks)'];
  const similarBookCover = data.fields['cover (from similarBooks)'];
  const similarBookAuthors = data.fields['authors (from similarBooks)'];
  const fnSimilarBookAuthors = mapLinkedAuthorsResponse2AuthorListProps(
    data.fields,
    'Name (from author) (from similarBooks)',
    'avatar (from author) (from similarBooks)',
    'email (from author) (from similarBooks)',
    'bio (from author) (from similarBooks)',
  );

  book.similarBooks = data.fields.similarBooks.map((id, index) => {
    const authors = [];
    authors.push(fnSimilarBookAuthors(similarBookAuthors[index], index));

    return {
      id,
      title: similarBookTitle[index],
      cover: similarBookCover[index],
      authors
    }
  });

  return book
}

/**
 * Функция, которая отображает данные из связанных данный в объект, который использует Author.js
 *
 *
 * @param {array} list
 * @param {string} keyName
 * @param {string} keyAvatar
 * @param {string} keyEmail
 * @param {string} keyBio
 * @return {function(*, *): {name: *, bio: *, id: *, avatar: *, email: *}}
 */
function mapLinkedAuthorsResponse2AuthorListProps(
  list,
  keyName,
  keyAvatar,
  keyEmail,
  keyBio
) {
  const authorName = list[keyName];
  const authorAvatar = list[keyAvatar];
  const authorEmail = list[keyEmail];
  const authorBio = list[keyBio];

  return (id, index) => {
    return {
      id,
      name: authorName[index],
      avatar: authorAvatar[index],
      email: authorEmail[index],
      bio: authorBio[index]
    }
  }
}