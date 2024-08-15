import css from './ErrorMessage.module.css';

const ErrorMessage = ({ error }) => <p className={css.text}>{error}</p>

export default ErrorMessage