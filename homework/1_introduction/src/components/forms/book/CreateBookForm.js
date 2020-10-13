import React, {useState, useEffect} from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import ThinkneticaClient from "../../../http/airtable/thinknetica-client";
import { useHistory } from "react-router-dom";
import { bookPage } from "../../../helpers/url-hepler";

const schema = yup.object().shape({
  title: yup.string().required(),
  cover: yup.string().required(),
  authors: yup.string().required(),
  shortDescription: yup.string().max(250).required(),
  pages: yup.number().min(1).required(),
  language: yup.string().max(25).required(),
  progress: yup.number().min(0).max(100).required(),
  minPrice: yup.number().min(1).required(),
  desiredPrice: yup.number().min(1).required(),
  expectedSum: yup.number().min(1).required(),
});

export default function CreateBookForm (props) {
  const client = new ThinkneticaClient();
  const { errors, register, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });
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

          <Field errors={errors} label="Title" name="title" register={register} />

          <Field errors={errors} label="Cover" name="cover" register={register} />

          <Field errors={errors} label="Author" name="authors" register={register} type="select" dataOptions={authors} />

          <Field errors={errors} label="Short description" name="shortDescription" rows="3" type="textarea" register={register} />

          <Field errors={errors} defaultValue={1} label="Pages" name="pages" register={register} />

          <Field errors={errors} defaultValue="English" label="Language" name="language" register={register} />

          <Field errors={errors} defaultValue={0} label="Progress" name="progress" register={register} />

          <Field errors={errors} defaultValue={1} label="Min price" name="minPrice" register={register} />

          <Field errors={errors} defaultValue={1} label="Desired price" name="desiredPrice" register={register} />

          <Field errors={errors} defaultValue={1} label="Expected sum" name="expectedSum" register={register} />

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

function Field({ errors, register, label, name, type, ...anotherProps }) {
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
      { errors && errors[name] && <small className="form-text text-danger">{errors[name].message}</small>}
    </div>
  );
}