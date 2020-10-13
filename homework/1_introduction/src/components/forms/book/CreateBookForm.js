import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import ThinkneticaClient from "../../../http/airtable/thinknetica-client";
import { useHistory } from "react-router-dom";
import { bookPage } from "../../../helpers/url-hepler";


export default function CreateBookForm (props) {
  const client = new ThinkneticaClient();
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const _client = new ThinkneticaClient();

    _client
      .getListAuthor()
      .then(authors => {
        return  authors.map(author => {
          return {
            id: author.id,
            title: author.name
          }
        });
      }).then(authors => {
        setAuthors(authors)
      });
  }, []);


  const onSubmit = (data) => {
    prepareFormData(data);

    const response = client.createBook(data);

    response.then(book => {
      const bookUrl = bookPage(book.id);

      history.push(bookUrl);
    });
  }

  const prepareFormData = (data) => {
    data.pages = parseInt(data.pages);
    data.progress = parseFloat(data.progress);
    data.minPrice = parseFloat(data.minPrice);
    data.desiredPrice = parseFloat(data.desiredPrice);
    data.expectedSum = parseFloat(data.expectedSum);
    data.subscribers = 0;
    data.currentSum = 0;

    data.authors = [
      data.authors
    ];
  }

  return (
    <div className="row">
      <div className="col-sm-8 offset-sm-2">
        <form onSubmit={handleSubmit(onSubmit)}>

          <Field label="Title" name="title" register={register} />

          <Field label="Cover" name="cover" register={register} />

          <Field label="Author" name="authors" register={register} type="select" dataOptions={authors} />

          <Field label="Short description" name="shortDescription" rows="3" type="textarea" register={register} />

          <Field label="Pages" name="pages" register={register} />

          <Field label="Language" name="language" register={register} />

          <Field label="Progress" name="progress" register={register} />

          <Field label="Min price" name="minPrice" register={register} />

          <Field label="Desired price" name="desiredPrice" register={register} />

          <Field label="Expected sum" name="expectedSum" register={register} />

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

function Field({ register, label, name, type, ...anotherProps }) {
  const id = `create-book-form-${name}`;
  const Component = type === undefined ? 'input' : type;
  let field = <Component name={name} className="form-control" id={id} ref={register} { ...anotherProps } />;

  if (Component === 'select') {
    field =
      <Component name={name} className="form-control" id={id} ref={register} >
        {anotherProps.dataOptions.map(data => (
          <option key={data.id} value={data.id}>{data.title}</option>
        ))}
      </Component>;
  }

  return (
    <div className="form-group">
      <label htmlFor={id}>{ label }</label>
      { field }
    </div>
  );
}