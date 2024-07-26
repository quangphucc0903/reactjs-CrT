import React from 'react';
import chevRightV2 from "@/assets/chevron-rightv2.svg"
import chevLeft from "@/assets/chevron-left.svg"
import { TransferButton } from './TransferButton';

export const PrevButton = ({ onClick }) => (
  <TransferButton img={chevLeft} onClick={onClick} />
);

export const NextButton = ({ onClick }) => (
  <TransferButton img={chevRightV2} onClick={onClick} />
);