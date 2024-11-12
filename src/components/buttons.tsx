type RoundedPushableButtonProps = {
  children: React.ReactNode;
  pushableStyles?: string;
  frontStyles?: string;
  onClick?: () => void;
};

export const RoundedPushableButton = ({
  children,
  pushableStyles,
  frontStyles,
  onClick,
}: RoundedPushableButtonProps) => {
  return (
    <button
      className={`${pushableStyles} pushable rounded-full`}
      onClick={onClick}
    >
      <span className={`${frontStyles} front rounded-full`}>{children}</span>
    </button>
  );
};
