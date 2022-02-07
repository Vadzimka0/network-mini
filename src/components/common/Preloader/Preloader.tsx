import React, { ReactElement } from 'react';

import loader from 'assets/images/spinner3.gif';

export const Preloader = (): ReactElement => (
  <img style={{ width: '60px' }} src={loader} alt="pre loader" />
);
