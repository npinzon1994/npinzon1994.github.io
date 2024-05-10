import classes from "./Ring.module.css";
import { ReactComponent as YellowSegment } from "../../../assets/agile-graphic/ring-segments/yellow-ring-segment.svg";
import { ReactComponent as GreenSegment } from "../../../assets/agile-graphic/ring-segments/green-ring-segment.svg";
import { ReactComponent as LightBlueSegment } from "../../../assets/agile-graphic/ring-segments/lightblue-ring-segment.svg";
import { ReactComponent as BlueSegment } from "../../../assets/agile-graphic/ring-segments/blue-ring-segment.svg";
import { ReactComponent as OrangeSegment } from "../../../assets/agile-graphic/ring-segments/orange-ring-segment.svg";

const Ring = () => {
  return (
    <div className={classes.ring}>
      <GreenSegment className={classes.segment} />
      <YellowSegment className={classes.segment} style={{zIndex: 21}} />
      <LightBlueSegment className={classes.segment} />
      <BlueSegment className={classes.segment} />
      <OrangeSegment className={classes.segment} />
    </div>
  );
};

export default Ring;
