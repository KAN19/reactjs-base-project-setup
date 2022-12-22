import { FC, ReactNode, Suspense } from "react";

// import Loading from 'components/loading';

interface FallbackProps {
	page: ReactNode;
}

const Fallback: FC<FallbackProps> = ({ page }) => {
	return (
		<Suspense
			fallback={
				// <Loading backDrop="transparent" isFixed>
				<span>Loading...</span>
				// </Loading>
			}
		>
			{page}
		</Suspense>
	);
};

export default Fallback;
