import classNames from "classnames/bind";

import styles from "../MarqueeList.module.scss";

const cx = classNames.bind(styles);

export interface MarqueeListProps {
  className?: string,
  heading?: string,
}

export const MarqueeList = ({ className }: MarqueeListProps) => {
  const classNames = cx({
    "component": true,
    className: !!className,
  });
  return (
    <>
      <div>
        Controls
      </div>
      <ul>
        <li>
          Card
        </li>
      </ul>
    </>
  )
};

export default MarqueeList;