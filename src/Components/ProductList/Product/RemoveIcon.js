import IcoMinus from '../../Icon/IcoMinus';
import IcoTrash from '../../Icon/IcoTrash';

const RemoveIcon = (props) => {
  if (props.icon === 'trash') {
    return <IcoTrash stroke={'#b3b395'} fill={'rgba(255,255,255,0.1)'} />;
  } else {
    return <IcoMinus stroke={'#b3b395'} fill={'rgba(255,255,255,0.1)'} />;
  }
};

export default RemoveIcon;
