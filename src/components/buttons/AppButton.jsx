import { Spin } from "antd";
import React from "react";

export const AppButton = ({
    children,
    className,
    loading,
    disabled,
    onClick,
    type = "button",
    ...rest
}) => {
    const handleClick = (event) => {
        const button = event.currentTarget;
        const ripple = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        const buttonRect = button.getBoundingClientRect();
        const offsetX = event.clientX - buttonRect.left;
        const offsetY = event.clientY - buttonRect.top;

        ripple.style.width = ripple.style.height = `${diameter}px`;
        ripple.style.left = `${offsetX - radius}px`;
        ripple.style.top = `${offsetY - radius}px`;
        ripple.className = "ripple";

        button.appendChild(ripple);

        ripple.addEventListener("animationend", () => {
            ripple.remove();
        });

        if (onClick) {
            onClick(event);
        }
    };

    return (
        <>
            <button
                disabled={disabled || loading}
                className={`${className} border px-3 py-1 rounded-xl bg-primary`}
                onClick={(e) => handleClick(e)}
                {...rest}
                type={type}
            >
                {loading ? <Spin className="w-5 h-5" /> : ""}
                {children}
            </button>
        </>
    )
}