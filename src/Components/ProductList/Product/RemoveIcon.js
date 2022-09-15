import IcoMinus from '../../Icon/IcoMinus';
import IcoTrash from '../../Icon/IcoTrash';

const RemoveIcon = (props) => {
  if (props.icon === 'trash') {
    return <IcoTrash stroke={'#ef5350'} fill={'rgba(239,83,80,0.1)'} />;
  } else {
    return <IcoMinus stroke={'#aaa'} fill={'rgba(255,255,255,0.1)'} />;
  }
};

export default RemoveIcon;
