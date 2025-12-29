declare module "vara" {
    export interface TextStep {
        id: string;
        text: string;
        y?: number;
        x?: number;
        autoAnimation?: boolean;
        fromCurrentPosition?: {
            x?: boolean;
            y?: boolean;
        };
        duration?: number;
        delay?: number;
        color?: string;
        fontSize?: number;
        strokeWidth?: number;
        letterSpacing?: number;
        textAlign?: "left" | "center" | "right";
    }

    export interface TextProperties {
        fontSize?: number;
        strokeWidth?: number;
        color?: string;
        duration?: number;
        delay?: number;
        letterSpacing?: number;
        textAlign?: "left" | "center" | "right";
        autoAnimation?: boolean;
        queued?: boolean;
    }

    export interface VaraType {
        draw(id: string, duration?: number): void;
        playAll(): void;
        animationEnd(callback: (id: string, group: any) => void): void;
    }

    export default class Vara {
        constructor(
            element: string,
            fontJson: string,
            textSteps: TextStep[],
            config?: TextProperties
        );
        draw(id: string, duration?: number): void;
        playAll(): void;
        animationEnd(callback: (id: string, group: any) => void): void;
    }
}
