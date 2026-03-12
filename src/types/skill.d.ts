interface Skill {
  name: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  hex: string | null;
}
