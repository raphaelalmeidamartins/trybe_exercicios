export declare const clickBySelector: (selector: string) => Promise<void>;
export declare const getElem: (selector: string) => Element;
export declare const getElemByTestId: (id: string) => Element;
export declare const changeTextBySelector: (selector: string, value: string) => Promise<void>;
export declare const selectBySelector: (selector: string, value: string) => Promise<void>;
export declare const fetch: (time?: number, func?: () => boolean) => Promise<boolean>;
export declare const generateFileContent: (size: number) => string[];
