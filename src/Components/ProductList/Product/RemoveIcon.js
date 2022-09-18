import React from 'react';
import { HiOutlineTrash, HiOutlineMinus } from 'react-icons/hi';
// import IcoMinus from '../../Icon/IcoMinus';
// import IcoTrash from '../../Icon/IcoTrash';

const RemoveIcon = (props) => {
  if (props.icon === 'trash') {
    return <HiOutlineTrash />;
    // return <IcoTrash stroke={'#ef5350'} fill={'rgba(239,83,80,0.1)'} />;
  } else {
    return <HiOutlineMinus />;
    // return <IcoMinus stroke={'#aaa'} fill={'rgba(255,255,255,0.1)'} />;
  }
};

export default RemoveIcon;
