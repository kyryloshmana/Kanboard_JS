import { expect } from "@playwright/test";
import { ApiResponse } from "../types/api.types";
import { logger } from '../builders/Logger';

const log = logger.child({ module: "ResponseValidator" })

export class ResponseValidator <T> {
    constructor(private response: ApiResponse<T>) { }
    
    expectStatus(code: number) {
        log.debug({expected:code, actual: this.response.status}, "expectStatus")
        expect(this.response.status).toBe(code);
        return this;
    }

    expectBodyField(path: string, value: unknown) {
        log.debug({assert: `body.${path} = ${value}`}, "expectBodyField")
        expect(this.response.body).toHaveProperty(path, value)
        return this;
    }

    expectResultType(type: 'number' | 'boolean') {
        const actual = typeof this.response.body.result
        log.debug({assert: `typeof result === "${type}"`, actual_code: actual}, "expectResultType")
        expect(typeof this.response.body.result).toBe(type)
        return this;
    }
}



// expectStatus(code: number): this {
//         expect(this.response.status).toBe(code);
//         return this;
//     }

//     expectResult(value: unknown): this {
//         expect(this.response.body.result).toBe(value);
//         return this;
//     }

//     expectBodyField(path: string, value: unknown): this {
//         expect(this.response.body).toHaveProperty(path, value);
//         return this;
//     }

//     expectResultType(type: 'number' | 'boolean' | 'object'): this {
//         expect(typeof this.response.body.result).toBe(type);
//         return this;
//     }

//     expectNoError(): this {
//         expect(this.response.body.error).toBeUndefined();
//         return this;
//     }

//     expectError(message: string): this {
//         expect(this.response.body.error?.message).toBe(message);
//         return this;
//     }