// import React, { useEffect, useState } from 'react';

// interface AnimationProps {
//     text: string;
//     repeat?: boolean
// }

// const TextTypingAni: React.FC<AnimationProps> = ({ text, repeat }: AnimationProps) => {
//     const [sequence, setSequence] = useState<string>("");
//     const [textCount, setTextCount] = useState<number>(0);
//     const [isTypingPaused, setIsTypingPaused] = useState<boolean>(false);

//     useEffect(() => {
//         const typingInterval = setInterval(() => {
//             if (isTypingPaused) {
//                 clearInterval(typingInterval);
//                 setTimeout(() => {
//                     setIsTypingPaused(false);
//                     setTextCount(0);
//                     setSequence("");
//                 }, 20000);
//                 return;
//             }

//             if (textCount >= text.length) {
//                 setIsTypingPaused(true);
//                 return;
//             }

//             const nextChar = text[textCount];
//             setSequence((prevSequence) => prevSequence + nextChar);

//             if (nextChar === '\n') {
//                 setTextCount((prevCount) => prevCount + 2);
//             } else {
//                 setTextCount((prevCount) => prevCount + 1);
//             }
//         }, 200);

//         return () => clearInterval(typingInterval);
//     }, [text, textCount, isTypingPaused, repeat]);

//     return (
//         <p className="landing-p whitespace-pre-line break-normal">
//             {sequence}
//             <span className='inline-block align-top w-0.5 h-[1em] bg-white ml-1 blink' />
//         </p>
//     );
// };

// export default TextTypingAni;

import React, { useEffect, useState } from 'react';

interface TextTypingAniProps {
    text: string;
    repeat?: boolean;
}

const TextTypingAni: React.FC<TextTypingAniProps> = ({ text, repeat = true }: TextTypingAniProps) => {
    const [sequence, setSequence] = useState<string>("");
    const [textCount, setTextCount] = useState<number>(0);
    const [isTypingPaused, setIsTypingPaused] = useState<boolean>(false);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (isTypingPaused) {
                clearInterval(typingInterval);
                if (repeat) {
                    setTimeout(() => {
                        setIsTypingPaused(false);
                        setTextCount(0);
                        setSequence("");
                    }, 5000);
                }
                return;
            }

            if (textCount >= text.length) {
                setIsTypingPaused(true);
                return;
            }

            const nextChar = text[textCount];
            setSequence((prevSequence) => prevSequence + nextChar);

            if (nextChar === '\n') {
                setTextCount((prevCount) => prevCount + 2);
            } else {
                setTextCount((prevCount) => prevCount + 1);
            }
        }, 200);

        return () => clearInterval(typingInterval);
    }, [text, textCount, isTypingPaused, repeat]);

    return (
        <p className="landing-p whitespace-pre-line break-normal">
            {sequence}
            <span className='inline-block align-top w-0.5 h-[1em] bg-white ml-1 blink' />
        </p>
    );
};

export default TextTypingAni;
