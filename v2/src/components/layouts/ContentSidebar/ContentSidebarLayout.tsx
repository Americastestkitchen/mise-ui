import StandardLayout from "../StandardLayout/StandardLayout";
import GridRow from "../../tokens/Grid/GridRow";
import GridColumn from "../../tokens/Grid/GridColumn";

import styles from "./ContentSidebarLayout.module.scss";

export interface ContentSidebarProps {
  className?: string;
  before?: React.ReactNode;
  children: React.ReactNode;
  sidebar: React.ReactNode;
  after?: React.ReactNode;
}

export const ContentSidebarLayout: React.FC<ContentSidebarProps> = ({
  className,
  before,
  children,
  sidebar,
  after,
}) => {
  return (
    <StandardLayout className={`${styles["container"]} ${className}`}>
      <>{before}</>
      <GridRow className="grid">
        <GridColumn
          className={styles["grid__content"]}
          width="fiveEighths"
        >
          {children}
        </GridColumn>
        <GridColumn
          className={styles["grid__sidebar"]}
          width="threeEighths"
        >
          {sidebar}
        </GridColumn>
      </GridRow>
      <>{after}</>
    </StandardLayout>
  )
};

export default ContentSidebarLayout;