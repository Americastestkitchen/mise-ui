import { SyntheticEvent, useState } from 'react';
import classNames from 'classnames/bind';

import EditorialText from '../../partials/EditorialText/EditorialText'
import SubmitButton from '../../partials/Buttons/SubmitButton/SubmitButton'
import Icon from '../../tokens/Icons/Icon/Icon';
import Link from '../../partials/Links/Link/Link';

import styles from "./EmailCaptureCard.module.scss";

const cx = classNames.bind(styles);

type Days = 'Mondays' | 'Tuesdays' | 'Wednesdays' | 'Thursdays' | 'Fridays' | 'Saturdays' | 'Sundays';
type Frequency = 'Weekly' | 'Biweekly' | 'When Available';

export interface EmailCaptureProps {
  view: {
    frequency: Frequency;
    days: Days;
    title: string;
    description: string;
    successText: string;
  };
  meta: {
    newsletter_id?: string;
    event_definition_key?: string;
    de_name?: string;
  };
  onSubmitCallback(email: string): void;
  validSubmission: boolean; // Assumed for API response if valid
}

// eslint-disable-next-line no-useless-escape
const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const EmailCaptureCard: React.FC<EmailCaptureProps> = ({
  view,
  meta,
  validSubmission,
  onSubmitCallback,
}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Email Is Required');
    } else if (email && !emailRe.test(email)) {
      setEmailError('Invalid Email Address');
    } else {
      setDisabled(true);
      setEmailError('');
      onSubmitCallback(email);
    }
  }
  
  const classNames = cx({
    "form__input": true,
    "form__input--has-error": emailError,
  })
  
  return (
    <div className={styles["container"]}>
      <p className={styles["frequency"]}>in your inbox: {view.days}, {view.frequency}</p>
      <header className={styles["header"]}>
        <h2 className={styles["header__title"]}>{view.title}</h2>
        <EditorialText
          className={styles["header__description"]}
          content={view.description}
          />
      </header>
      <>
        { validSubmission
          ? <div className={styles["success-message"]}>
              <Icon className={styles["success-message__icon"]} type="checkmark"/>
              <EditorialText className={styles["success-message__description"]} content={view.successText} />
            </div>
          : <form
              className={styles["form"]}
              onSubmit={handleSubmit}
            >
              <label className={styles["form__label"]} htmlFor="emailAddress">Your Email</label>
              <div className={styles["form__interior"]}>
                <div className={styles["form__input-container"]}>
                  <input
                    id="emailAddress"
                    className={classNames}
                    name="emailAddress"
                    aria-describedby="emailAddressError"
                    data-valid={!emailError}
                    type="text"
                    value={email}
                    onChange={(evt) => {
                      if (emailError) {
                        setEmailError('');
                      }
                      setEmail(evt.target.value);
                    }}
                  />
                  {emailError && <p id="emailAddressError" role="alert" className={styles["form__error"]}>{emailError}</p>}
                </div>
                <SubmitButton className={styles["form__submit"]} disabled={disabled} label='submit' />
              </div>
            </form>
        }
      </>
      <footer className={styles["footer"]}>
        <p className={styles["footer__disclaimer"]}>
          By providing your email above, you agree to our <Link className={styles["footer__disclaimer-link"]} path="/guides/corporate-pages/terms-of-use">Terms of Service</Link> and <Link  className={styles["footer__disclaimer-link"]} path="/guides/corporate-pages/privacy-policy">Privacy Policy</Link>.
        </p>
      </footer>
    </div>
  )
}

export default EmailCaptureCard;