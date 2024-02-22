// FROM https://webdesign.tutsplus.com/javascript-debounce-and-throttle--cms-36783t
//initialize throttlePause variable outside throttle function
let throttlePause: boolean;

export function throttle(callback: () => void, time: number) {
    //don't run the function if throttlePause is true
    if (throttlePause) return;

    //set throttlePause to true after the if condition. This allows the function to be run once
    throttlePause = true;

    //setTimeout runs the callback within the specified time
    setTimeout(() => {
        callback();

        //throttlePause is set to false once the function has been called, allowing the throttle function to loop
        throttlePause = false;
    }, time);
}

export function isControlKey(key: string) {
    return key === " " || key === "Escape" || key === "ArrowRight" || key === "ArrowLeft" || key === "ArrowUp" || key === "ArrowDown" || key === "o";
}

export type RevealEvent = {
    currentSlide: {
        id: string
    },
    previousSlide?: {
        id: string
    }
}

export function createCurrentSlideEvent(event: RevealEvent) {
    return {
        type: "currentSlide",
        currentSlideId: event.currentSlide.id,
        previousSlideId: event.previousSlide?.id,
    }
}
