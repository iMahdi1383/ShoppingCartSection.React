import React from 'react';

const IcoTrash = (props) => {
  return (
    <svg height="20" width="20" fill="none" strokeWidth="1" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.75 3.74524H13.25" stroke={props.stroke} strokeLinecap="round"/>
      <path d="M11.4907 3.74518H2.50506C2.36001 6.36772 2.36227 8.97003 2.75318 11.5761C2.8975 12.5382 3.72399 13.25 4.69687 13.25H9.29887C10.2718 13.25 11.0982 12.5382 11.2426 11.5761C11.6335 8.97003 11.6357 6.36772 11.4907 3.74518Z" fill={props.fill} stroke={props.stroke} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.50186 3.74521V3.24601C4.50186 2.58402 4.76483 1.94916 5.23293 1.48106C5.70102 1.01297 6.33589 0.75 6.99787 0.75C7.65985 0.75 8.29472 1.01297 8.76281 1.48106C9.2309 1.94916 9.49388 2.58402 9.49388 3.24601V3.74521" stroke={props.stroke} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.50027 6.41864V10.5565" stroke={props.stroke} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.49548 6.41864V10.5565" stroke={props.stroke} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default IcoTrash;
