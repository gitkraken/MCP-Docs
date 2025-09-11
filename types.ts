export interface Tool {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            [key: string]: {
                description: string;
                type: string;
                enum?: string[];
                items?: {
                    type: string;
                };
            };
        }
        required: string[];
    };
    annotations: {
        readOnlyHint: boolean;
        destructiveHint: boolean;
        idempotentHint: boolean;
        openWorldHint: boolean;
    };
}

export interface Prompt {
    name: string;
    description: string;
    arguments: {
        name: string;
        description: string;
        required: boolean;
    }[];
}