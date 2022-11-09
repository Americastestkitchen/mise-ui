import React, { SyntheticEvent, useState } from 'react';
import styles from "./styles/emailCapture.module.scss";
import { EmailCaptureProps } from './types';
import cx from 'classnames';
import Icon from '../../tokens/Icons/Icon';
import EditorialText from '../../partials/EditorialText/EditorialText'
import SubmitButton from '../../partials/Buttons/SubmitButton/SubmitButton'

// eslint-disable-next-line no-useless-escape
const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const EmailCapture = ({
  view,
  meta,
  validSubmission,
  onSubmitCallback,
}: EmailCaptureProps) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [disabled, setDisabled] = useState(false);
  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
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
  const classStyles = cx(
    styles.input,
    { [styles.error]: emailError },
  )
  return (
    <div className={styles.wrapper}>
      <p className={styles.frequency}>in your inbox: {view.days}, {view.frequency}</p>
      <div className={styles.content}>
        <div className={styles.headerWrapper}>
          <h2 className={styles.title}>{view.title}</h2>
          <EditorialText content={view.description} />
        </div>
        {validSubmission ?
        <div className={styles.successMessage}>
          <Icon type="checkmark"/>
          <EditorialText content={view.successText} />
        </div>
          :
          <form onSubmit={handleSubmit}>
            <label className={styles.label}>Your Email</label>
            <div className={styles.formWrapper}>
              <input
                aria-describedby="emailAddressError"
                data-valid={!emailError}
                className={classStyles}
                id="emailAddress"
                type="text"
                name="email"
                value={email}
                onChange={(evt) => {
                  if (emailError) {
                    setEmailError('');
                  }
                  setEmail(evt.target.value);
                }}
              />
              {emailError && <p id="emailAddressError" role="alert"  className={styles.formError}>{emailError}</p>}
              <SubmitButton className={styles.button} disabled={disabled} label='submit' />
            </div>
          </form>
        }
      </div>
      
      <div className={styles.terms}>
        <p >By providing your email above, you agree to our <a href="/guides/corporate-pages/terms-of-use">Terms of Service</a> and <a href="/guides/corporate-pages/privacy-policy">Privacy Policy</a>.</p>
      </div>
    </div>
  )
}

export default EmailCapture;