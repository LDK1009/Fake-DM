// KakaoAdfit.jsx
import {useEffect, useRef} from "react";

// any 타입 대신 명시적 타입 정의
interface KakaoAdFitProps {
    unit: string;
    width: number;
    height: number;
    disabled?: boolean;
}

// window 타입 확장
declare global {
    interface Window {
        adfit?: {
            destroy: (unit: string) => void;
        };
    }
}

function KakaoAdFit({unit, width, height, disabled}: KakaoAdFitProps) {
    // HTMLDivElement 타입 명시
    const scriptElementWrapper = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!disabled) {
            const script = document.createElement("script");
            script.setAttribute("src", "https://t1.daumcdn.net/kas/static/ba.min.js");
            // 옵셔널 체이닝으로 null 체크
            scriptElementWrapper.current?.appendChild(script);

            return () => {
                const globalAdfit = window.adfit;
                if (globalAdfit) globalAdfit.destroy(unit);
            }
        }
    }, [unit, disabled])

    return <div ref={scriptElementWrapper}>
        <ins className="kakao_ad_area" style={{display: "none"}}
             data-ad-unit={unit}
             data-ad-width={width}
             data-ad-height={height}></ins>
    </div>
}

export default KakaoAdFit;