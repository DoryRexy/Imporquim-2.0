import React, { useEffect, useState } from "react";

interface SvgLoaderProps {
    src: string;
    alt: string;
    style?: React.CSSProperties;
    classes?: string;
}

const SvgLoader: React.FC<SvgLoaderProps> = ({ src, alt, style, classes }) => {
    const [svgContent, setSvgContent] = useState<string | null>(null);

    useEffect(() => {
        const loadSvg = async () => {
            try {
                if (src.startsWith("http") || src.startsWith("https")) {
                    const response = await fetch(src);
                    if (response.ok) {
                        const svgText = await response.text();
                        setSvgContent(svgText);
                    } else {
                        console.error("Error loading SVG:", response.statusText);
                    }
                } else {
                    const response = await fetch(`${src}`);
                    if (response.ok) {
                        const svgText = await response.text();
                        setSvgContent(svgText);
                    } else {
                        console.error("Error loading SVG:", response.statusText);
                    }
                }
            } catch (error) {
                console.error("Error loading SVG:", error);
            }
        };

        loadSvg();
    }, [src]);

    return (
        <div className={`${classes} grid justify-center `}
            dangerouslySetInnerHTML={{ __html: svgContent || "" }}
            style={style}
            aria-label={alt}
        />
    );
};

export default SvgLoader;