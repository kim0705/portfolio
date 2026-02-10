import React, { useState } from 'react';
import * as C from '../../../../styles/common';
import * as S from './style';
import { createPortal } from 'react-dom';

function MailModal({ isOpen, onClose, onSend, isSending }) {

    /* 메일 내용 상태값 */
    const [formData, setFormData] = useState({
        from_name: "",
        reply_to: "",
        message: ""
    });

    /* 필드 유효성 검사 */
    const isFormValid = formData?.from_name?.trim() && formData?.reply_to?.trim() && formData?.message?.trim();

    if (!isOpen) return null;

    /* 입력값 변경 */
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    /* 메일 전송 */
    const handleSubmit = (e) => {
        e.preventDefault();

        const emailParams = {
            ...formData,
            title: `[Portfolio] ${formData.from_name}님의 문의입니다.`,
            time: new Date().toLocaleString()
        };

        onSend(emailParams);

        setFormData({
            from_name: "",
            reply_to: "",
            message: ""
        });
    };

    return createPortal(
        <S.ModalOverlay onClick={onClose}>
            <S.ModalContent onClick={(e) => e.stopPropagation()}>
                <S.ModalHeader>
                    <h3>Send Message</h3>
                    <button onClick={onClose}>&times;</button>
                </S.ModalHeader>

                <form onSubmit={handleSubmit}>
                    <S.Input
                        type="text"
                        placeholder="성함 또는 회사명"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleInputChange}
                        required
                    />

                    <S.Input
                        type="email"
                        placeholder="답장 받으실 이메일 주소"
                        name="reply_to"
                        value={formData.reply_to}
                        onChange={handleInputChange}
                        required
                    />

                    <S.MessageBox
                        placeholder="내용을 입력해주세요."
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    />
                    <S.ButtonGroup>
                        <button type="button" onClick={onClose}>취소</button>
                        <button type="submit" disabled={isSending || !isFormValid}>
                            {isSending ? <C.LoadingSpinner size="14px" /> : "전송하기"}
                        </button>
                    </S.ButtonGroup>
                </form>
            </S.ModalContent>
        </S.ModalOverlay>,
        document.body
    );
}

export default MailModal;