type CosmicButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function CosmicButton({ children, onClick }: CosmicButtonProps) {
  return (
    <button
      className="py-2 px-12 border-1 border-white rounded-sm bg-[#050C1E]"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
