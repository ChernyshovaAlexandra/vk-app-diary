import classes from './CaseComponent.module.css';
import MobileUI from './components/MobileUI/MobileUI';
import { EditorProvider } from './EditorContext';

const CaseComponent = () => {
  return (
    <EditorProvider>
      <div className={classes.fullHeightWrapper}>
        <MobileUI />
      </div>
    </EditorProvider>
  );
};

export default CaseComponent;
