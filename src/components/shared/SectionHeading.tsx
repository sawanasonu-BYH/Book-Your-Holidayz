type Props = {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
};

export default function SectionHeading({
  title,
  subtitle,
  center = false,
  className = "",
}: Props) {
  return (
    <header className={`mb-6 ${center ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl font-bold">{title}</h2>
      {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
    </header>
  );
}
