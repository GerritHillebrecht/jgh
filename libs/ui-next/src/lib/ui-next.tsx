import styles from './ui-next.module.scss';

/* eslint-disable-next-line */
export interface UiNextProps {}

export function UiNext(props: UiNextProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiNext!</h1>
    </div>
  );
}

export default UiNext;
