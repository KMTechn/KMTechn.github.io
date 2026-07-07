import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Send } from 'lucide-react';

const FormContainer = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  margin-top: var(--space-6);
  position: relative;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

const Label = styled.label`
  font-size: var(--font-sm);
  font-weight: 500;
  color: var(--text-color);
`;

const inputStyles = css`
  padding: var(--space-4);
  border-radius: 8px;
  border: 1px solid ${({ $hasError }) => $hasError ? 'var(--error-color)' : 'var(--border-color)'};
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: var(--font-base);
  transition: border-color 0.3s, box-shadow 0.3s;
  font-family: inherit;

  &:hover:not(:disabled) {
    border-color: ${({ $hasError }) => $hasError ? 'var(--error-color)' : 'var(--accent-amber)'};
  }

  &:focus {
    outline: 2px solid ${({ $hasError }) => $hasError ? 'var(--error-color)' : 'var(--accent-amber)'};
    outline-offset: 2px;
    border-color: ${({ $hasError }) => $hasError ? 'var(--error-color)' : 'var(--accent-amber)'};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Input = styled.input`
  ${inputStyles}
`;

const Textarea = styled.textarea`
  ${inputStyles}
  line-height: var(--line-height-relaxed);
  min-height: 150px;
  resize: vertical;
`;

const ErrorMessage = styled.span`
  font-size: var(--font-sm);
  color: var(--error-color);
  display: flex;
  align-items: center;
  gap: var(--space-1);
`;

const SubmitButton = styled.button`
  padding: var(--space-4) var(--space-8);
  border-radius: 8px;
  background-color: var(--accent-amber);
  color: #121212;
  font-size: var(--font-base);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid var(--accent-amber);
  align-self: flex-start;
  font-family: inherit;
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);

  &:hover:not(:disabled) {
    background-color: transparent;
    color: var(--accent-amber);
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:focus {
    outline: 2px solid var(--accent-amber);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 520px) {
    width: 100%;
  }
`;

const StatusMessage = styled(motion.div)`
  background-color: var(--card-bg);
  border: 1px solid ${props => props.status === 'success' ? '#10b981' : '#ef4444'};
  color: ${props => props.status === 'success' ? '#10b981' : '#ef4444'};
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
`;

const StatusTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TypeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-2);

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

const TypeButton = styled.button`
  min-height: 44px;
  border-radius: 8px;
  border: 1px solid ${({ $active }) => $active ? 'var(--accent-amber)' : 'var(--border-color)'};
  background: ${({ $active }) => $active ? 'rgba(var(--accent-amber-rgb), 0.12)' : 'var(--background-color)'};
  color: var(--text-color);
  font: inherit;
  font-size: var(--font-sm);
  font-weight: 600;
  cursor: pointer;
  padding: 0.75rem;
  text-align: left;

  &:hover {
    border-color: var(--accent-amber);
  }
`;

// Validation helpers
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateName = (name) => {
  return name.trim().length >= 2;
};

const validateMessage = (message) => {
  return message.trim().length >= 10;
};

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const inquiryTypes = [
    { value: '3pl', labelKey: 'contact_inquiry_type_3pl' },
    { value: 'quality', labelKey: 'contact_inquiry_type_quality' },
    { value: 'partner', labelKey: 'contact_inquiry_type_partner' },
    { value: 'general', labelKey: 'contact_inquiry_type_general' },
  ];
  const [inquiryType, setInquiryType] = useState(inquiryTypes[0].value);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  // Validate field on blur or change
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return !validateName(value) ? t('validation_name_required') || 'Name must be at least 2 characters' : '';
      case 'email':
        return !validateEmail(value) ? t('validation_email_invalid') || 'Please enter a valid email address' : '';
      case 'message':
        return !validateMessage(value) ? t('validation_message_required') || 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const validateForm = () => {
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('submitting');

    // mailto: 방식으로 이메일 앱 열기
    const recipient = 'cgpark@kmtechn.com';
    const selectedInquiry = inquiryTypes.find((type) => type.value === inquiryType);
    const inquiryLabel = t(selectedInquiry?.labelKey || 'contact_inquiry_type_general');
    const subject = encodeURIComponent(`[KMTech 문의] ${inquiryLabel} - ${formData.name}`);
    const body = encodeURIComponent(
      `보낸 사람: ${formData.name}\n` +
      `이메일: ${formData.email}\n\n` +
      `문의 유형: ${inquiryLabel}\n\n` +
      `문의 내용:\n${formData.message}`
    );

    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // 메일 앱 열기
    window.location.href = mailtoLink;

    // 폼 초기화
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setInquiryType(inquiryTypes[0].value);
    setErrors({ name: '', email: '', message: '' });
    setTouched({ name: false, email: false, message: false });

    setTimeout(() => {
      setStatus('idle');
    }, 3000);
  };

  return (
    <AnimatePresence mode="wait">
      {status === 'success' || status === 'error' ? (
        <StatusMessage
          key="status"
          status={status}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <StatusTitle>
            {status === 'success' ? (
              <>
                <CheckCircle size={28} /> {t('contact_form_success_title')}
              </>
            ) : (
              <>
                <AlertCircle size={28} /> {t('contact_form_error_title') || 'Error'}
              </>
            )}
          </StatusTitle>
          <p>{status === 'success' ? t('contact_form_success_desc') : t('contact_form_error_desc') || 'Failed to send message'}</p>
        </StatusMessage>
      ) : (
        <FormContainer
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
          noValidate
        >
          <FormField>
            <Label>{t('contact_inquiry_type_label')}</Label>
            <TypeGrid role="group" aria-label={t('contact_inquiry_type_label')}>
              {inquiryTypes.map((type) => (
                <TypeButton
                  key={type.value}
                  type="button"
                  $active={inquiryType === type.value}
                  aria-pressed={inquiryType === type.value}
                  onClick={() => setInquiryType(type.value)}
                  disabled={status === 'submitting'}
                >
                  {t(type.labelKey)}
                </TypeButton>
              ))}
            </TypeGrid>
          </FormField>

          <FormField>
            <Label htmlFor="contact-name">{t('contact_form_name')}</Label>
            <Input
              id="contact-name"
              type="text"
              name="name"
              placeholder={t('contact_form_name')}
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={status === 'submitting'}
              $hasError={touched.name && errors.name}
              aria-invalid={touched.name && errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {touched.name && errors.name && (
              <ErrorMessage id="name-error" role="alert">
                <AlertCircle size={14} /> {errors.name}
              </ErrorMessage>
            )}
          </FormField>

          <FormField>
            <Label htmlFor="contact-email">{t('contact_form_email')}</Label>
            <Input
              id="contact-email"
              type="email"
              name="email"
              placeholder={t('contact_form_email')}
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={status === 'submitting'}
              $hasError={touched.email && errors.email}
              aria-invalid={touched.email && errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {touched.email && errors.email && (
              <ErrorMessage id="email-error" role="alert">
                <AlertCircle size={14} /> {errors.email}
              </ErrorMessage>
            )}
          </FormField>

          <FormField>
            <Label htmlFor="contact-message">{t('contact_form_message')}</Label>
            <Textarea
              id="contact-message"
              name="message"
              placeholder={t('contact_form_message')}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={status === 'submitting'}
              $hasError={touched.message && errors.message}
              aria-invalid={touched.message && errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {touched.message && errors.message && (
              <ErrorMessage id="message-error" role="alert">
                <AlertCircle size={14} /> {errors.message}
              </ErrorMessage>
            )}
          </FormField>

          <SubmitButton type="submit" disabled={status === 'submitting'}>
            <Send size={18} />
            {status === 'submitting' ? t('contact_form_submitting') : t('contact_form_submit')}
          </SubmitButton>
        </FormContainer>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
