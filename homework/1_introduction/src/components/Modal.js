import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

export default class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    /*
    * Когда запускаю тесты, то падает на этом месте с ошибкой
    * TypeError: Cannot read property 'removeChild' of null,
    * Понятно, что при Тестировании например того же Book.js у меня нет элемента modal-root, а как мне его
    * тогда добавить? Как вообще добавлять элементы из вне для тестирования отдельного компонента?
    * */
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}