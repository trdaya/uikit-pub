import React from 'react';
import Button from './index';
import {Types} from './constants';

export default {
  title: 'Button',
  component: Button,
};

export const DefaultButton = () => <Button text={'Default'} />;
export const PrimaryButton = () => <Button text={'Primary'} type={Types.PRIMARY}/>;
export const SecondaryButton = () => <Button text={'Secondary'} type={Types.SECONDARY}/>;

