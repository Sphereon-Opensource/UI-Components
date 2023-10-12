import { toast, ToastOptions } from 'react-toastify';
import React from 'react';
import CustomToastContent from "./customToastContent";

type ToastType = 'info' | 'success' | 'warning' | 'error' | 'default';

const showToast = (type: ToastType, message: string, showAge: boolean = false, showType: boolean = false, timeout: number = 5000, typeIcon?: React.ReactNode, customStyles?: React.CSSProperties) => {
    const style: React.CSSProperties = customStyles? customStyles: {
        border: '3px solid green',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    }
    const customContentProps = {
        typeIcon: typeIcon,
        type: type,
        showAge: showAge,
        showType: showType,
        title: message
    };

    const content = React.createElement(CustomToastContent, { ...customContentProps });

    const options: ToastOptions = {
        style,
        autoClose: timeout,
        position: "top-right",
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        type: type
    };
    if (typeIcon) {
        options.icon = typeIcon
        toast(content, options)
    } else {
        switch (type) {
            case "error":
                toast.error(content, options)
                break
            case "info":
                toast.info(content, options)
                break
            case "success":
                toast.success(content, options)
                break
            case "warning":
                toast.warn(content, options)
                break
            default:
                toast(content, options)
                break
        }
    }
}

export default showToast;
