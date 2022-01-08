import { FieldRuleValueType, GroupRules, Rules } from './interfaces';
export declare const getDefaultFieldMessage: (rule?: Rules, ruleValue?: FieldRuleValueType) => string;
export declare const getDefaultGroupMessage: (rule?: GroupRules) => "The field is required" | "Group is incorrect";
