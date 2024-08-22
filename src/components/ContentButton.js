import Link from 'next/link';

const ContentButton = ({ to, label }) => {
  return (
    <Link href={to}>
      <button>{label}</button>
    </Link>
  );
};

export default ContentButton;
