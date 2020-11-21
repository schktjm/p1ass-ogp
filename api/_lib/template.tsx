import * as React from 'react';
import { renderToString } from 'react-dom/server'
import { ParsedRequest } from './types';


const Svg = ({ name }: { num?: string, name: string }) => {
    return (
        <svg width={1200} height={630} viewBox="0 0 600 315" fill="none">
            <rect width={600} height={315} rx={0} fill="#000" />
            <rect x={14} y={13} width={573} height={289} rx="7.24562" fill="#fff" />
            <rect x={14} y={13} width={573} height={289} rx="7.24562" fill="url(#paint0_linear)" />
            <rect x={14} y={13} width={573} height={289} rx="7.24562" fill="#fff" />
            <rect x={14} y={13} width={573} height={289} rx="7.24562" fill="url(#paint1_linear)" />
            <rect x={14} y={13} width={573} height={289} rx="7.24562" fill="#fff" />
            <rect x={14} y={13} width={573} height={289} rx="7.24562" fill="url(#paint2_linear)" />
            <rect x={19} y={17} width={564} height={280} rx={5} fill="#000" />
            <path d="M130.62 155.398C130.62 155.398 104.805 159.557 104.805 137.357C104.805 116.565 130.62 119.764 130.62 119.764" stroke="#545454" strokeWidth="15.6099" strokeLinecap="round" />
            <path d="M166.237 155.285C166.237 155.285 170.381 181.195 148.262 181.195C127.546 181.195 130.733 155.413 130.733 155.413" stroke="#FFC287" strokeWidth="15.6099" strokeLinecap="round" />
            <path d="M166.38 119.768C166.38 119.768 192.195 115.609 192.195 137.809C192.195 158.601 166.252 155.274 166.252 155.274" stroke="#545454" strokeWidth="15.6099" strokeLinecap="round" />
            <path d="M130.875 119.715C130.875 119.715 126.732 93.805 148.85 93.8049C169.567 93.8049 166.38 119.843 166.38 119.843" stroke="#E79572" strokeWidth="15.6099" strokeLinecap="round" />
            <path d="M130.875 119.764C130.875 119.764 104.805 116.565 104.805 137.357" stroke="#545454" strokeWidth="15.6099" strokeLinecap="round" />
            <text x={233} y={154} textLength={206} lengthAdjust="spacing" fontFamily="Turret Road" fill="#E5966F" fontSize={64}>p1ass</text>
            <text x={137} y={218} textLength={325} lengthAdjust="spacing" fontFamily="Roboto" fill="#E5966F" fontSize={14} fontWeight={100}>UNOFFICIAL FANCLUB MEMBERS'S CARD</text>
            {/* <text x={45} y={257} fontFamily="Roboto" fill="#FEC283" fontSize={14} fontWeight={100} letterSpacing={1} >No.{num.padStart(4, '0')}</text> */}
            <text x={45} y={277} fontFamily="Roboto" fill="#FEC283" fontSize={14} fontWeight={100} letterSpacing={5}>{name}</text>
            <defs>
                <linearGradient id="paint0_linear" x1="595.595" y1={13} x2="15.7665" y2="305.502" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFC287" />
                    <stop offset="0.174682" stopColor="#E79572" />
                    <stop offset="0.326574" stopColor="#fff" />
                    <stop offset="0.472543" stopColor="#FFC287" />
                    <stop offset="0.618529" stopColor="#E79572" />
                    <stop offset="0.755956" stopColor="#fff" />
                    <stop offset="0.876287" stopColor="#FFC287" />
                    <stop offset={1} stopColor="#E79572" />
                </linearGradient>
                <linearGradient id="paint1_linear" x1="595.595" y1={13} x2="15.7665" y2="305.502" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFC287" />
                    <stop offset="0.174682" stopColor="#E79572" />
                    <stop offset="0.326574" stopColor="#fff" />
                    <stop offset="0.472543" stopColor="#FFC287" />
                    <stop offset="0.618529" stopColor="#E79572" />
                    <stop offset="0.755956" stopColor="#fff" />
                    <stop offset="0.876287" stopColor="#FFC287" />
                    <stop offset={1} stopColor="#E79572" />
                </linearGradient>
                <linearGradient id="paint2_linear" x1="595.595" y1={13} x2="15.7665" y2="305.502" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFC287" />
                    <stop offset="0.174682" stopColor="#E79572" />
                    <stop offset="0.326574" stopColor="#fff" />
                    <stop offset="0.472543" stopColor="#FFC287" />
                    <stop offset="0.618529" stopColor="#E79572" />
                    <stop offset="0.755956" stopColor="#fff" />
                    <stop offset="0.876287" stopColor="#FFC287" />
                    <stop offset={1} stopColor="rgb(231, 149, 114)" />
                </linearGradient>
            </defs>
        </svg>
    )
};

const Html = ({ name, num }: { name: string, num: string }) => {
    return (
        <html>
            <head>
                <meta charSet="utf-8" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Turret+Road:wght@500&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"></link>
            </head>
            <body style={{ margin: 0, padding: 0 }}>
                <Svg num={num} name={name} />
            </body>
        </html>
    )
}


export const getHtml = (parsedReq: ParsedRequest): string => {
    const { name, memberNum } = parsedReq;
    return renderToString(<Html name={name} num={memberNum} />);
}
