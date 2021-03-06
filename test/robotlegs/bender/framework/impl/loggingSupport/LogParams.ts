// ------------------------------------------------------------------------------
//  Copyright (c) 2012 the original author or authors. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

export class LogParams {
    constructor(
        public source: Object,
        public level: number,
        public timestamp: number,
        public message: string,
        public params: any[]
    ) {
        this.source = source;
        this.level = level;
        this.timestamp = timestamp;
        this.message = message;
        this.params = params;
    }
}
