import viewStyles from '../styles/view'

import classNames from 'classnames'

import React from 'react'
import { translate } from 'cozy-ui/react/helpers/i18n'
import ReactMarkdownWrapper from './ReactMarkdownWrapper'
import PassphraseForm from './PassphraseForm'
import Input from './Input'
import Select from './Select'

const LANG_OPTIONS = ['en', 'fr']

const ProfileView = ({ t, fields, passphrase, isFetching, onFieldChange, onPassphraseSubmit }) => (
  <div role='contentinfo'>
    <div className={classNames(viewStyles['set-view-content'], viewStyles['set-view-content--narrow'])}>
      { isFetching && <p>Loading...</p> }
      <h2 className={viewStyles['set-view-title']}>{t('ProfileView.title')}</h2>
      <Input
        name='email'
        type='email'
        label={t('ProfileView.email.title')}
        description={t('ProfileView.email.label')}
        {...fields.email}
        onChange={onFieldChange} />
      <Input
        name='public_name'
        type='text'
        label={t('ProfileView.public_name.title')}
        description={t(`ProfileView.public_name.label`)}
        {...fields.public_name}
        onChange={onFieldChange} />
      <Select
        name='locale'
        label={t('ProfileView.locale.title')}
        description={t(`ProfileView.locale.label`)}
        options={LANG_OPTIONS.map(lang => {
          return {
            value: lang,
            text: t(`ProfileView.locale.${lang}.text`)
          }
        })}
        {...fields.locale}
        onChange={onFieldChange} />
      <p>
        <ReactMarkdownWrapper
          source={
            t('ProfileView.locale.contrib', {link: 'https://forum.cozy.io/t/how-to-contribute-to-the-cozy-localization/3937'})
          }
        />
      </p>
      <Input
        name='tracking'
        type='checkbox'
        label={t('ProfileView.tracking.title')}
        description={t('ProfileView.tracking.label')}
        {...fields.tracking}
        onChange={onFieldChange}
      />
      <a href='https://files.cozycloud.cc/cgu.pdf' target='_blank'>
        {t('ProfileView.cgu_link')}
      </a>
      <PassphraseForm {...passphrase} onSubmit={onPassphraseSubmit} />
    </div>
  </div>
)

export default translate()(ProfileView)
