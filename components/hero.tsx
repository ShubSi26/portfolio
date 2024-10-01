"use client";
import { useEffect, useState, useRef } from "react";
import HeroCenter from "./herocenter";
import Greets from "./greets";
const initialPositions = [
    { top: '10vh', left: '20vw' },
    { top: '30vh', left: '50vw' },
    { top: '40vh', left: '78vw' },
    { top: '70vh', left: '30vw' },
    { top: '20vh', left: '76vw' },
    { top: '15vh', left: '10vw' },
    { top: '63vh', left: '66vw' },
    { top: '80vh', left: '40vw' },
    { top: '15vh', left: '55vw' },
    { top: '25vh', left: '25vw' },
    { top: '30vh', left: '70vw' },
    { top: '38vh', left: '15vw' },
    { top: '60vh', left: '10vw' },
    { top: '65vh', left: '18vw' },
    { top: '55vh', left: '75vw' },
];

export default function Hero() {
    const greets: { [key: number]: string } = {
        1: "नमस्ते",
        2: "Hello",
        3: "Hola",
        4: "Bonjour",
        5: "Ciao",
        6: "안녕하세요",
        7: "こんにちは",
        8: "Olá",
        9: "Hallo",
        10: "سلام",
        11: "你好",
        12: "Привет",
        13: "Merhaba",
        14: "Hujambo",
        15: "Hej",
    };

    const messages: { [key: number]: string } = {
        1: "नमस्ते, मैं शुभम सिंह हूं।",
        2: "Hello, I am Shubham Singh.",
        3: "Hola, soy Shubham Singh.",
        4: "Bonjour, je suis Shubham Singh.",
        5: "Ciao, sono Shubham Singh.",
        6: "안녕하세요, 나는 Shubham Singh입니다.",
        7: "こんにちは、私はShubham Singhです。",
        8: "Olá, eu sou Shubham Singh。",
        9: "Hallo, ich bin Shubham Singh。",
        10: "سلام، میں شبهم سنگھ ہوں۔",
        11: "你好，我是Shubham Singh。",
        12: "Привет, я Шубхам Сингх。",
        13: "Merhaba, ben Shubham Singh。",
        14: "Hujambo, mimi ni Shubham Singh。",
        15: "Hej, jag är Shubham Singh。",
    };

    const [message, setMessage] = useState(messages[2]);
    const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [i,seti] = useState(2);
    const greetElements = Object.values(greets).map((text, index) => {
        const position = initialPositions[index % initialPositions.length];

        return (
            <div
                key={index}
                style={{
                    position: 'absolute',
                    top: position.top,
                    left: position.left,
                    transition: 'top 0.5s ease, left 0.5s ease',
                }}
                onMouseEnter={() => {
                    // Immediately set the next message
                    setMessage(messages[index + 1]);
                    seti(index+1);

                    // Clear previous debounce timeout
                    if (debounceTimeoutRef.current) {
                        clearTimeout(debounceTimeoutRef.current);
                    }

                    // Set a new debounce timeout to update the display message
                    debounceTimeoutRef.current = setTimeout(() => {
                        setMessage(messages[index + 1]);
                    }, 100); // Adjust debounce time as necessary
                }}
                className=" hidden sm:block"
            >
                <Greets text={text} bol = {i === index+1}/>
            </div>
        );
    });

    useEffect(() => {
        return () => {
            if (debounceTimeoutRef.current) {
                clearTimeout(debounceTimeoutRef.current);
            }
        };
    }, []);

    return (
        <div className="h-screen bg-center relative " >
            <div className="absolute z-20">
                {greetElements}
            </div>
            <div className="">
                 <HeroCenter name={message} />
            </div>
        </div>
    );
}
