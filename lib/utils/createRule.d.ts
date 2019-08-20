export declare const createRule: <TOptions extends unknown[], TMessageIds extends string, TRuleListener extends import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleListener = import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleListener>({ name, meta, defaultOptions, create, }: {
    name: string;
    meta: {
        docs: Pick<import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleMetaDataDocs, "category" | "description" | "extraDescription" | "recommended" | "requiresTypeChecking">;
    } & Pick<import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleMetaData<TMessageIds>, "deprecated" | "fixable" | "messages" | "type" | "replacedBy" | "schema">;
    defaultOptions: TOptions;
    create: (context: import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleContext<TMessageIds, TOptions>, optionsWithDefault: TOptions) => TRuleListener;
}) => import("@typescript-eslint/experimental-utils/dist/ts-eslint/Rule").RuleModule<TMessageIds, TOptions, TRuleListener>;
//# sourceMappingURL=createRule.d.ts.map