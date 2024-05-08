import classes from "./Ring.module.css";
import { ReactComponent as Segment } from "../../../assets/agile-graphic/ring-segment.svg";
import {ReactComponent as TestIcon} from "../../../assets/agile-graphic-icons/test.svg";
import {ReactComponent as DevelopIcon} from "../../../assets/agile-graphic-icons/develop.svg";
import {ReactComponent as DesignIcon} from "../../../assets/agile-graphic-icons/design.svg";
import {ReactComponent as ReviewIcon} from "../../../assets/agile-graphic-icons/review.svg";

const Ring = () => {
  return (
    <div className={classes.ring}>
      
      {/* <TestIcon className={`${classes.icon} ${classes.test}`}/> */}
      <Segment className={`${classes.segment} ${classes.green}`} />

      {/* <DevelopIcon className={`${classes.icon} ${classes['develop-1']}`}/> */}
      <Segment className={`${classes.segment} ${classes.red}`} />

      {/* <DesignIcon className={`${classes.icon} ${classes.design}`}/> */}
      <Segment className={`${classes.segment} ${classes.blue}`} />

      {/* <ReviewIcon className={`${classes.icon} ${classes.review}`}/> */}
      <Segment className={`${classes.segment} ${classes.yellow}`} />
      
      {/* <DevelopIcon className={`${classes.icon} ${classes['develop-2']}`}/> */}
      <Segment className={`${classes.segment} ${classes.slateblue}`} />
    </div>
  );
};

export default Ring;
