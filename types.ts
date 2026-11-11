export interface ToolParameter {
    description?: string;
    type: string;
    enum?: string[];
    items?: {
        type: string;
    };
    minimum?: number;
    properties?: Record<string, unknown>;
}

export interface Tool {
    name: string;
    description: string;
    inputSchema: {
        type: string;
        properties: {
            [key: string]: ToolParameter;
        };
        required?: string[];
    };
    annotations: {
        readOnlyHint: boolean;
        destructiveHint: boolean;
        idempotentHint: boolean;
        openWorldHint: boolean;
    };
    _meta?: {
        ui?: {
            resourceUri?: string;
            visibility?: string[];
        };
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
