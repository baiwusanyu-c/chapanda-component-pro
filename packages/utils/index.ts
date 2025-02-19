import { useMemo } from 'react';

export function useRenderList({ active = true, renderNum = 6 }) {
	// 如果 active 为 false，可以根据需求返回一个空数组或者其他默认值
	const list = useMemo(() => {
		if (!active) return []; // 如果不活跃，返回空数组
		return Array.from({ length: renderNum });
	}, [active, renderNum]);

	return { list };
}
