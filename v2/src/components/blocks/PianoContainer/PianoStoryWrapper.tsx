type PianoStoryWrapperProps = {
  children: JSX.Element;
  maxWidth: string;
}

export const PianoStoryWrapper = ({
  children,
  maxWidth = '1136px'
}: PianoStoryWrapperProps) => (
  <div style={{ width: maxWidth }}>
    {children}
  </div>
);

export default PianoStoryWrapper;
