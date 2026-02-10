import emailjs from '@emailjs/browser';

/**
 * @param {Object} params 
 */
export const sendEmailService = async (params) => {
    try {
        const response = await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            params,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        return response;
    } catch (error) {
        console.error("Email Service Error:", error);
        throw error;
    }
};