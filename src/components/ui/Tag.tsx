interface TagProps {
  children: string;
}

export function Tag({ children }: TagProps) {
  return <span className="rounded-md bg-tint px-2 py-0.5 text-sm">{children}</span>;
}
