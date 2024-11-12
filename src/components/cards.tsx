export const FloatingCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pushable rounded-3xl bg-gray-300 px-4">
      <div className="front rounded-3xl border border-gray-300 bg-white px-4">
        {children}
      </div>
    </div>
  );
};
