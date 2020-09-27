import axios from "axios";
import {zip, zipObject} from "lodash";

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

  getListBooks() {
    return this._client.get(`book`, {
      cancelToken: this._source.token
    })
      .then(response => response.data.records)
      .then(list => list.map(mapBookResponse2BookProps));
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

  book.authors = constructAuthorList(
    data.fields,
    'authors',
    'Name (from author)',
    'avatar (from author)',
    'email (from author)',
    'bio (from author)'
  );

  const similarBookAuthors = constructAuthorList(
    data.fields,
    'authors (from similarBooks)',
    'Name (from author) (from similarBooks)',
    'avatar (from author) (from similarBooks)',
    'email (from author) (from similarBooks)',
    'bio (from author) (from similarBooks)'
  );

  book.similarBooks = zip(
    data.fields.similarBooks,
    data.fields['title (from similarBooks)'],
    data.fields['cover (from similarBooks)']
  ).map((similarBook, index) => {
    similarBook.push(similarBookAuthors[index]);

    return zipObject(['id', 'title', 'cover', 'authors'], similarBook);
  });

  return book
}

function constructAuthorList(list, keyId, keyName, keyAvatar, keyEmail, keyBio) {
  return  zip(list[keyId], list[keyName], list[keyAvatar], list[keyEmail], list[keyBio])
    .map(authors => zipObject(['id','name','avatar','email','bio'], authors));
}