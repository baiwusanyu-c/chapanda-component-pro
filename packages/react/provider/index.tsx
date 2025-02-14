import React, { createContext, useRef } from "react";
import type { ReactNode } from "react";
import type {
	IChapandaContext,
	UncertainFunction,
} from "../table-pro/types.ts";

export const ChapandaContext = createContext<IChapandaContext>({
	expose: null,
	getFunc: null,
});

export const ChapandaProvider = (props: { children: ReactNode }) => {
	const exposeFns = useRef<{ [key: string]: UncertainFunction | null }>({});
	const expose = (name: string, fn: UncertainFunction | null) => {
		exposeFns.current[name] = fn;
	};
	const getFunc: IChapandaContext["getFunc"] = (name: string) => {
		const run = exposeFns.current[name];
		// biome-ignore lint/suspicious/noEmptyBlockStatements: <explanation>
		return run ? { run } : { run: () => {} };
	};
	return (
		<ChapandaContext.Provider value={{ expose, getFunc }}>
			{props.children}
		</ChapandaContext.Provider>
	);
};
