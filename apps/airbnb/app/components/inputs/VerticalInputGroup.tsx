interface VerticalInputGroupProps {
  children: React.ReactNode;
}

const VerticalInputGroup: React.FC<VerticalInputGroupProps> = ({
  children,
}) => {
  return (
    <div className="flex flex-col">
      {children}
    </div>
  );
};

export default VerticalInputGroup;
