
import Link from "../../../../partials/Links/Link/Link";
import BlockLink from "../../../../partials/Links/BlockLink/BlockLink";

import styles from "./PeekCardDetail.module.scss";

export type CardLinks = {
  url: string;
  title: string;
}

export interface PeekCardDetailProps {
  title: string;
  description: string;
  links: {
    url: string,
    label: string,
    target: string,
  }[];
}

export const PeekCardDetail: React.FC<PeekCardDetailProps> = ({
  title,
  description,
  links,
}: PeekCardDetailProps) => (
  <div className={styles["container"]}>
    <h2 className={styles["heading"]}>
      <Link
        className={styles["heading__link"]}
        path={"#"}
      >
        {title}
      </Link>
    </h2>
    <p className={styles["description"]}>{description}</p>
    <ul className={styles["link-list"]}>
      <li className={styles["link-list__item"]}>
        <BlockLink
          className={styles["link"]}
          label="Test"
          path="#"
          target="_self"
        />
      </li>
      <li className={styles["link-list__item"]}>
        &nbsp;&nbsp;&bull;&nbsp;&nbsp;
        <BlockLink
          className={styles["link"]}
          label="Test"
          path="#"
          target="_self"
        />
      </li>
      <li className={styles["link-list__item"]}>
        &nbsp;&nbsp;&bull;&nbsp;&nbsp;
        <BlockLink
          className={styles["link"]}
          label="Test"
          path="#"
          target="_self"
        />
      </li>
    </ul>
  </div>
);

export default PeekCardDetail;
