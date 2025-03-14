interface SectionTitleProps {
  children: string;
  className?: string; // Allow className prop
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className }) => {
  return (
    <p className={`text-center mx-auto text-3xl/6 md:text-4xl/6 font-bold ${className || ''}`}>
      {children}
    </p>
  );
};

export default SectionTitle;
