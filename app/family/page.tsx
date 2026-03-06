import { FamilyScene } from '@/components/meet-the-family/FamilyScene';

export const metadata = {
  title: 'Meet the Family | Ashley Brewer Books',
  description:
    'Get to know the Savannah Manor detectives — Georgia, Rowdy, Mom, Dad, Smokey, and Baby D.',
};

export default function FamilyPage() {
  return (
    <main
      className="min-h-screen"
      style={{
        background:
          'linear-gradient(180deg, #1f3043 0%, #24384e 30%, #6d3f22 72%, #9b5827 100%)',
      }}
    >
      <FamilyScene />
    </main>
  );
}
