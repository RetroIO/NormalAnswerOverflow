import { Pricing } from '@answeroverflow/ui/src/pricing';
import { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Pricing - Answer Overflow',
	description:
		'Start indexing your Discord content into Google for free. Explore our public and enterprise platforms to find what suits you best',
	openGraph: {
		title: 'Pricing - Answer Overflow',
		description:
			'Start indexing your Discord content into Google for free. Explore our public and enterprise platforms to find what suits you best',
	},
};
export const dynamic = 'force-static';

export default function PricingPage() {
	return <Pricing />;
}
