import Link from 'next/link';

const ContentButton = ({ to, label }) => {
  return (
    <Link href={to}>
      <button>
        <strong>{label}</strong>
      </button>
    </Link>
  );
};

export default ContentButton;
