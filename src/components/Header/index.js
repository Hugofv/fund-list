import React from 'react';
import { Button, Column, Grid, Row } from 'react-foundation';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <Grid>
      <Row className="header">
        <div className="header__container">
          <Column>
            <a className="header__logo"></a>
          </Column>

          <Column className="header__box-link">
            <a className="header__link">{t('common.the_company')}</a>
            <a className="header__link">{t('common.it_works')}</a>
            <a className="header__link">{t('common.investments')}</a>
            <a className="header__link">{t('common.attendance')}</a>
          </Column>

          <Column className="header__box-button">
            <Button className="btn ">{t('common.your_account')}</Button>
            <Button className="btn primary">{t('common.open_your_account')}</Button>
          </Column>
        </div>
      </Row>
    </Grid>
  );
};

export default Header;
