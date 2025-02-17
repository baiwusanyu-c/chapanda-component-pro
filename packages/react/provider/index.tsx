import React, { createContext, useRef } from "react";
import type { ReactNode } from "react";
import type {
	IChapandaContext,
	IChapandaCompProCtx,
	IChapandaCompProCtxKeys,
	ChapandaTableFns,
	UncertainFunction,
} from "../table-pro/types.ts";

export const ChapandaContext = createContext<IChapandaContext>({
	expose: null,
	getFunc: null,
});

export const ChapandaProvider = (props: { children: ReactNode }) => {
	const exposeFns = useRef<IChapandaCompProCtx>({});

	const expose: IChapandaContext["expose"] = (
		scope: IChapandaCompProCtxKeys,
		name: keyof ChapandaTableFns,
		fn: UncertainFunction | null,
	) => {
		if (!exposeFns.current[scope]) {
			exposeFns.current[scope] = {};
		}

		// destroy
		if (!fn) {
			Reflect.deleteProperty(exposeFns.current[scope]!, name);
		} else {
			exposeFns.current[scope]![name] = fn!;
		}
	};
	const getFunc: IChapandaContext["getFunc"] = (
		scope: IChapandaCompProCtxKeys,
	) => {
		return exposeFns.current[scope];
	};
	return (
		<ChapandaContext.Provider value={{ expose, getFunc }}>
			{props.children}
		</ChapandaContext.Provider>
	);
};
