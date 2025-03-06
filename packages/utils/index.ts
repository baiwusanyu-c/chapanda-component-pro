import { useMemo } from "react";

export function useRenderList({ renderNum = 6 }) {
	// 如果 active 为 false，可以根据需求返回一个空数组或者其他默认值
	const list = useMemo(() => {
		return Array.from({ length: renderNum });
	}, [renderNum]);

	return { list };
}
