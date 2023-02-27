import {RingBuffer} from "./RingBuffer";
import log from "loglevel";

export function logBuffer() {

    const GlobalRingBuffer = new RingBuffer<[string, string]>(100);
    if(localStorage.getItem('ringBufferContent') !== null) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore - localStorage.getItem('ringBufferContent') is not null
        const localStorageRingBuffer = JSON.parse(localStorage.getItem('ringBufferContent'));
        GlobalRingBuffer.fromArray(localStorageRingBuffer.buffer)
    }
    else {
        localStorage.setItem('ringBufferContent', JSON.stringify(GlobalRingBuffer));
    }

    const originalFactory = log.methodFactory;
    log.methodFactory = function(methodName, logLevel, loggerName) {
        const rawMethod = originalFactory(methodName, logLevel, loggerName);

        return function(message) {
            //show only warnings and error in console and log everything else in the GlobalRingBuffer?
            if(methodName === "warn" || methodName === "error") {
                rawMethod(message);
                console.log(GlobalRingBuffer);
            }
            GlobalRingBuffer.add([(new Date()).toUTCString(), message]);
            localStorage.setItem('ringBufferContent', JSON.stringify(GlobalRingBuffer));
        };
    };
}