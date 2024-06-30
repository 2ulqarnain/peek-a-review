type buttonProps = {
  children: string;
  asLink?: boolean;
};

export default function Button({ children, asLink }: buttonProps) {
  return <button className="button">{children}</button>;
}
