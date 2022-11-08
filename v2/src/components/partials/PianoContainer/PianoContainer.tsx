import { useEffect } from "react";
import styles from "./PianoContainer.module.scss";
import usePiano from './usePiano';

export type UserSegment = 'anonymous' | 'registrant' | 'singleSite' | 'former' | 'multisite'

export interface PianoContainerProps {
  containerSelector?: string;
  eventHandlers?: Array<(e: Event) => void>;
  segment?: UserSegment;
  tags?: Array<string>;
  url?: string;
}
export type PianoConfig = Omit<PianoContainerProps, "containerSelector">

export const PianoContainer = ({
  containerSelector,
  eventHandlers,
  segment,
  tags,
  url
}: PianoContainerProps) => {
  usePiano({ eventHandlers, segment, tags, url });
  useEffect(() => {
    window.tp.experience.execute();
  }, [])
  return (
    <div className={containerSelector} />
  )
};

export default PianoContainer;
